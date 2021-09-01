'use strict';

const test = require('ava');

const filterType = require('../../../../src/lib/transforms/filterType');

test('filterType should return the same data as input.', t => {
    const transform = filterType();

    const config = {
        scene: {
            options: {
                monsterType: "all"
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

test('filterType should return data that is considered a Beast.', t => {
    const transform = filterType();

    const config = {
        scene: {
            options: {
                monsterType: "beast"
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

    t.deepEqual(transform(data, config), outputData, `Displays only Beast data.`);
});

test('filterType should return data that is considered Monstrosity.', t => {
    const transform = filterType();

    const config = {
        scene: {
            options: {
                monsterType: "monstrosity"
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

    t.deepEqual(transform(data, config), outputData, `Displays only Monstrosity data.`);
});
