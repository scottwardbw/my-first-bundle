'use strict';

const test = require('ava');

const filterSize = require('../../../../src/lib/transforms/filterSize');

test('filterSize should return the same data as input.', t => {
    const transform = filterSize();

    const config = {
        scene: {
            options: {
                size: "all"
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

test('filterSize should return data that is considered Tiny.', t => {
    const transform = filterSize();

    const config = {
        scene: {
            options: {
                size: "Tiny"
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

    t.deepEqual(transform(data, config), outputData, `Displays only Tiny data.`);
});

test('filterSize should return data that is considered Gargantuan.', t => {
    const transform = filterSize();

    const config = {
        scene: {
            options: {
                size: "Gargantuan"
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
            alignment: "chaotic evil",
            index: "kraken",
            legendary_actions: [{}, {}],
            name: "Kraken",
            size: "Gargantuan",
            type: "monstrosity"
        }
    ];

    t.deepEqual(transform(data, config), outputData, `Displays only Gargantuan data.`);
});
