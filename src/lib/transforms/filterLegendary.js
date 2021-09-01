'use strict';

function filterLegendary() {
    return (data, config) => {
        const { legendary } = config.scene.options;

        let filteredData = data;

        if (legendary === `yes`) {
            filteredData = data.filter(d => typeof d.legendary_actions !== 'undefined');
        }
        else if (legendary === `no`) {
            filteredData = data.filter(d => typeof d.legendary_actions === `undefined`);
        }

        return filteredData;
    }
}

module.exports = filterLegendary;
