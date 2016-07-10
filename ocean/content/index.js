// Worried about webpack not picking these up if programatic
const Content = {
    traits: {
        mover: require('./trait/mover'),
        test: require('./trait/test') 
    },
    
    types: {
        player: require('./type/player'),
        tile: require('./type/tile'),
        test: require('./type/test'),
        default: require('./type/default')
    }
};

// Last chance to fix up content
function defaultRender(children) {
    return {
        type: 'container',
        children,
        position: this.position
    };
};

Object.keys(Content.types).forEach(typeKey => {
    const type  = Content.types[typeKey];
    type.render = type.render || defaultRender;
});

module.exports = Content;