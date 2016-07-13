const noClouds = new Set(['water', 'sand']);

import { Entity, DataProperty } from '../entity';

export class Tile extends Entity { 
    render() {
        const now = Date.now();

        if(!noClouds.has(this.frame)) {
            const cDark = 
                Math.sin((now * 0.4 + this.position[0] * 600) * 0.0005) * 0.6 + 
                Math.sin((now * 0.4 + this.position[2] * 350) * 0.0005) * 1;

            const darkness = Math.max(0.8, Math.min(1 + cDark, 1));
            this.color = [darkness, darkness, darkness];
        }

        if(this.frame === 'water') {
            const darkness = Math.max(0.4, Math.min(0.9 + this.position[1]/this.calm, 1));
            this.color = [darkness, darkness, darkness];
            this.position[1] = (-0.2 * this.calm * this.calm * Math.sin((now + (this.position[0] * 50)) * 0.002)) + (-0.3 * this.calm * this.calm * Math.sin((now + (this.position[2] * 80)) * 0.004));
        }

        if(this.frame === 'tallgrass') {
            const dif = (-0.01 * this.calm * this.calm * Math.sin((now + (this.position[0] * 50)) * 0.002)) + (-0.02 * this.calm * this.calm * Math.sin((now + (this.position[2] * 80)) * 0.003));
            //this.rotation[0] += dif;
        }

        return {
            name: this.name,
            color: this.color,
            position: this.position,
            rotation: this.rotation,
            render: 'sprite',
            spritemap: 'land tiles',
            frame: this.frame,
            children: this.renderChildren(),
            flip: this.flip
        };
    }
};
DataProperty(Tile, 'frame', () => 'grass');
DataProperty(Tile, 'flip', () => false);
DataProperty(Tile, 'calm', () => 0.2);
DataProperty(Tile, 'color', () => [1, 1, 1]);

Tile.preload = [{ 
    type: 'spritemap',
    name: 'land tiles',
    texture: '../content/type/tile/testing.png',
    atlas: '../content/type/tile/testing.json'
}];

