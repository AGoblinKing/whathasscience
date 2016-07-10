module.exports = {
    tile: 'grass',

    preload: [{ 
        type: 'tilemap',
        name: 'land tiles',
        texture: '../content/type/tile/tileset.png',
        atlas: '../content/type/tile/tileset.json'
    }],
    
    // consider moving this to a trait?
    render(children) {
        return {
            position: this.position,
            render: 'tile',
            tilemap: 'land tiles',
            tile: this.tile,
            children
        };
    }
}; 
