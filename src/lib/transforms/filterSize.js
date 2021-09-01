'use strict';

function filterSize() {
    return (data, config) => {
        const { size } = config.scene.options;

        let filteredData = data;

        if (size !== `all`) {
            filteredData = data.filter(d => d.size === size);
        }

        return filteredData;
    }
}

module.exports = filterSize;
