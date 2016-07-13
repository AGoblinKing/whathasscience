import Guid from 'guid';

// Easy to use meta setter/getter for going to the data obj
export function DataProperty(ctx, property, mkDefault) {
    Object.defineProperty(ctx.prototype, property, {
        get() {
            if(this.data[property] === undefined) {
                this.data[property] = mkDefault(this);
            }

            return this.data[property];
        },

        set(val) {
            this.data[property] = val;
        }
    });
};

export class Tree {
    constructor(data = {}) {
        data.children = data.children || [];
        this.parent = undefined;
        this.data = data;
        const isTree = Object.getPrototypeOf(this) === Tree.prototype;
        this.children = this.data.children.map((child) => Entity.CreateEntity(child, isTree));
    }
    
    add(dataOrEntity) {
        const entity = Entity.CreateEntity(dataOrEntity);
        entity.parent = this.name;
        this.data.children.push(entity.data);
        this.children.push(entity);
        return entity;
    }

    // Doesn't call destroy or anything
    remove(nameOrEntity) {
        const name = typeof nameOrEntity === 'object' ? nameOrEntity.name : nameOrEntity;

        this.children.some((child, i) => {
            if(child.name === name) {
                this.children.splice(i, 1);
                return true;
            }
        });

        this.data.children.some((child, i) => {
            if(child.name === name) {
                delete child.parent;
                this.data.children.splice(i, 1);
                return true;
            }
        });
    }

    selectAll(query, deep = false) {
        return query.split(' ').map((action) => {
            switch(action[0]) {
                case '.': 
                    const type = action.slice(1);
                    return this.children.filter((child) => child.type === type);
            }
        }).reduce((prev, next) => {
            const results = {};

            Object.keys(prev).map((key) => {
                if(next[key]) {
                   results[key] = next[key]; 
                }
            });

            return results;
        });
    }

    *[Symbol.iterator](node) {
        if(node === undefined) {
            node = this;
        }

        yield node;

        for(let child of this.children) {
            yield* child[Symbol.iterator](child);
        }
    }
}
DataProperty(Tree, 'name', () => Guid.create().value);
DataProperty(Tree, 'type', () => 'default');

export class Entity extends Tree {
    constructor(data) {
        super(data);
        Entity.map.set(data.name, this);
    }

    destroy() {
        // destroy yo kids
        for(let child of this.children) {
            child.destroy();
        }
        
        // hide yo parents
        if(this.parent !== undefined) {
            Entity.map.get(this.parent).remove(this);
        }
       
        // shit got real
        Entity.map.delete(this.name);
        
        // make sure your data is gone too
        delete this.data;
    }

    renderChildren() {
        return this.children.map(child => child.render());
    }

    render() {
        return {
            render: 'container',
            name: this.name,
            children: this.renderChildren()
        };
    }
}
DataProperty(Entity, 'actions', () => {});
DataProperty(Entity, 'position', () => [0, 0, 0]);
DataProperty(Entity, 'rotation', () => [0, 0, 0]);

Entity.map = new Map();
