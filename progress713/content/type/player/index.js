import { Entity, DataProperty } from '../entity';

export class Player extends Entity {
    render() {
        return {
            name: this.name,
            render: 'sprite',
            spritemap: 'skeleton',
            position: this.position.map((pos, i) => i === 1 ? pos + 0.5: pos - 0.2),
            frame: 'idle1',
            scale: 0.5,
            children: this.renderChildren()
        };
    }
};

Player.preload = [{ 
    type: 'spritemap',
    name: 'skeleton',
    texture: '../content/type/player/skeleton.png',
    atlas: '../content/type/player/skeleton.json',
}];
