module.exports = {
    traits: [ 'mover' ],
    render(children) {
        return {
            type: 'sprite',
            texture: '../content/type/player/dude.png',
            position: this.position,
            children
        };
    }
};
