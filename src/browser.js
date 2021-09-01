'use strict';
/**
 * This is where to include any source or libraries that use browser APIs.
 */
const createBundle = require('./lib/create-bundle');
const destinationConfig = require('./lib/destination-config');

function createDestination(options) { // TODO: Require your destination factory and replace this
    console.log(`Creating destination`);

    return {
        destination(data, pipeline) {
            const { color } = options;
            //you should remove this and do something with the data
            console.log('Data From Source', data); //eslint-disable-line no-console

            let htmlString = ``;

            if (data.length > 0) {
                data.forEach(d => {
                    htmlString += `
                            <div style="padding: 5px;">
                                <div style="color: ${d.alignment.includes(`evil`) ? `red` : d.alignment.includes(`good`) ? `green` : ``};">${d.name}</div>
                            </div>
                        `;
                });
            }
            else {
                htmlString += `<div style="padding: 5px;"><div>No results.</div></div>`
            }

            document.querySelector(pipeline.config.destTarget).innerHTML = htmlString;

            pipeline.done();
        }
    };
}

const bundle = createBundle(createDestination(destinationConfig));

module.exports = bundle;
