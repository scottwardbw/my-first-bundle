'use strict';
/**
 * Bundle factory.
 * Do not include any references to browser APIs here (including the DOM).
 * Instead, pass the destination instance as an argument and implement anything
 * DOM-specific in ../browser.js.
 */
const Bundle = require('@vizia/bundle'); // The V4D library
const transformify = require('@vizia/transformify');
const createSource = require('./create-source');
const createTransform = require('./transforms/create-transform');
const filterLegendary = require('./transforms/filterLegendary');
const filterSize = require('./transforms/filterSize');
const filterType = require('./transforms/filterType');

function createBundle(destinationInstance) {
    const bundle = new Bundle();
    // TODO: Set up your source, transforms and destination here
    // bundle.setThrottle(1000);
    bundle.use(createSource());
    bundle.use(createTransform());
    bundle.use(transformify(filterLegendary()));
    bundle.use(transformify(filterSize()));
    bundle.use(transformify(filterType()));
    bundle.use(destinationInstance);

    return bundle;
}

module.exports = createBundle;
