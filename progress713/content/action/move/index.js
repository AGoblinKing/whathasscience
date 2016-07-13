module.exports = {
    spaces: 3,

    preload: [],
    
    // called on client when wanting to execute a command
    render(entity) {
        return {
            pointer: '.tile'
        };
    },

    // handle a message being received
    server(entity, data) {

    }
};

