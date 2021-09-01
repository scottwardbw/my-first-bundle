'use strict';

function filterType() {
    return (data, config) => {
        const { monsterType } = config.scene.options;

        let filteredData = data;

        if (monsterType !== `all`) {
            filteredData = data.filter(d => d.type === monsterType);
        }

        return filteredData;
    }
}

module.exports = filterType;
