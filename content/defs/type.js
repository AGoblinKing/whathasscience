module.exports = {
    // Map of traits and default properties for that trait
    traits: {
        'test': {
            testString: 'some String'
        }
    },

    // Return a list of assets to preload
    preload() {

    },

    // (REQUIRED) Return a list of renderables to display on the game screen
    render() {
        // this <-- the entity
        return [{
            render: 'sprite',
            texture: 'textureName'
        }];
    },

    // RESERVED - DO NOT USE - WILL NOT SERIALIZE
    events: {}
};
