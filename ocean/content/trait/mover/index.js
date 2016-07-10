module.exports = {
    // Run before render / after client update
    client(state) {
        const tiles = state.children('.tile');

        tiles.on('mouseenter', 'move-footprint', (e, tile) => {
            tile.add('move-footprint', {
                type: 'tile',
                position: [0, -0.48, 0],
                texture: 'movefoot.png'
            });
        });

        tiles.on('mouseleave', 'hide-footprint', (e, tile) => {
            tile.remove('move-footprint');
        });

        tiles.on('click', 'move-intention', (e, tile) => {
            tile.add('move-intention', {
                type: 'tile',
                position: [0, -0.48, 0],
                texture: 'moveintention.png'
            })
            // tell server about intention here
        });
    }
};
