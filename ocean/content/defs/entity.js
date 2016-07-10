// An instantiated entity, what all the persisted data is stored as.
module.exports = {
    // (REQUIRED) Unique Name, feel free to GUID
    name: 'your mom',

    // (REQUIRED) Type to load for the entity
    type: 'test',

    // Relative Position and Rotation Data
    position: [0, 0, 0],
    rotation: [0, 0, 0],

    // Inherits all properties from it's Type

    // RESERVED - DO NOT USE - WILL NOT SERIALIZE
    events: {}
};
