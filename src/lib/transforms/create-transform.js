'use strict';

const axios = require('axios');

function createTransform() {
    return {
        transform: (data, pipeline) => {
            const url = `https://www.dnd5eapi.co`;

            let monsters = [];

            axios.all(
                    data.map(d => {
                        return axios.get(`${url}${d.url}`)
                    })
                )
                .then(jsonData => {
                    jsonData.forEach(d => monsters.push(d.data));

                    pipeline.push(monsters);
                    pipeline.done();
                })
        }
    }
}

module.exports = createTransform
