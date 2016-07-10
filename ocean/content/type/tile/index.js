module.exports = {
    tile: 'grass',

    preload: [{ 
        type: 'tilemap',
        name: 'land tiles',
        texture: '../content/type/tile/tileset.png',
        atlas: '../content/type/tile/tileset.json'
    }],
    
    opacity: 1,
    // consider moving this to a trait?
    render(children) {
        const now = Date.now();

        if(this.tile === 'water') {
            this.opacity = Math.max(0.3, Math.min(1 + this.position[1]/10 * 0.1, 1));

            /* calm seas*/
            //this.position[1] = (-1 * Math.sin((now + (this.position[0] * 50)) * 0.0005)) + (-1 * Math.sin((now + (this.position[2] * 80)) * 0.002));
            this.position[1] = (-5 * Math.sin((now + (this.position[0] * 50)) * 0.005)) + (-10 * Math.sin((now + (this.position[2] * 80)) * 0.004));
        }

        return {
            position: this.position,
            render: 'tile',
            tilemap: 'land tiles',
            tile: this.tile,
            children,
            opacity: this.opacity
        };
    }
}; 
