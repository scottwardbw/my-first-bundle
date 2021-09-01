'use strict';

const test = require('ava');

const filterLegendary = require('../../../../src/lib/transforms/filterLegendary');

test('filterLegendary should return the same data as input.', t => {
    const transform = filterLegendary();

    const config = {
        scene: {
            options: {
                legendary: "all"
            }
        }
    };

    const data = [
        {
            alignment: "lawful evil",
            index: "aboleth",
            legendary_actions: [{}, {}],
            name: "Aboleth",
            size: "Large",
            type: "aberration"
        },
        {
            alignment: "unaligned",
            index: "badger",
            name: "Badger",
            size: "Tiny",
            type: "beast"
        },
        {
            alignment: "chaotic evil",
            index: "kraken",
            legendary_actions: [{}, {}],
            name: "Kraken",
            size: "Gargantuan",
            type: "monstrosity"
        }
    ];

    t.deepEqual(transform(data, config), data, `Displays all data.`);
});

test('filterLegendary should return data that is considered Legendary.', t => {
    const transform = filterLegendary();

    const config = {
        scene: {
            options: {
                legendary: "yes"
            }
        }
    };

    const data = [
        {
            alignment: "lawful evil",
            index: "aboleth",
            legendary_actions: [{}, {}],
            name: "Aboleth",
            size: "Large",
            type: "aberration"
        },
        {
            alignment: "unaligned",
            index: "badger",
            name: "Badger",
            size: "Tiny",
            type: "beast"
        },
        {
            alignment: "chaotic evil",
            index: "kraken",
            legendary_actions: [{}, {}],
            name: "Kraken",
            size: "Gargantuan",
            type: "monstrosity"
        }
    ];

    const outputData = [
        {
            alignment: "lawful evil",
            index: "aboleth",
            legendary_actions: [{}, {}],
            name: "Aboleth",
            size: "Large",
            type: "aberration"
        },
        {
            alignment: "chaotic evil",
            index: "kraken",
            legendary_actions: [{}, {}],
            name: "Kraken",
            size: "Gargantuan",
            type: "monstrosity"
        }
    ];

    t.deepEqual(transform(data, config), outputData, `Displays only Legendary data.`);
});

test('filterLegendary should return data that is not considered Legendary.', t => {
    const transform = filterLegendary();

    const config = {
        scene: {
            options: {
                legendary: "no"
            }
        }
    };

    const data = [
        {
            alignment: "lawful evil",
            index: "aboleth",
            legendary_actions: [{}, {}],
            name: "Aboleth",
            size: "Large",
            type: "aberration"
        },
        {
            alignment: "unaligned",
            index: "badger",
            name: "Badger",
            size: "Tiny",
            type: "beast"
        },
        {
            alignment: "chaotic evil",
            index: "kraken",
            legendary_actions: [{}, {}],
            name: "Kraken",
            size: "Gargantuan",
            type: "monstrosity"
        }
    ];

    const outputData = [
        {
            alignment: "unaligned",
            index: "badger",
            name: "Badger",
            size: "Tiny",
            type: "beast"
        }
    ];

    t.deepEqual(transform(data, config), outputData, `Displays only non-Legendary data.`);
});
