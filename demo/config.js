'use strict';
/*eslint-env browser*/

const config = () => ({
    /**
     * DOM selector for bundle injection.
     * Supplied by Vizia.
     */
    destTarget: '#bundle-container',

    test: `meow`,

    /**
     * Tile scene config.
     * Supplied by Vizia.
     */
    scene: {
        /**
         * Config set by the user's option controls.
         * Supplied by Vizia.
         */
        options: {
            challengeRating: 0,
            legendary: 'all',
            monsterType: 'all',
            size: 'all'
        }
    },

    /**
     * Global installation / environment config.
     * Supplied by Vizia.
     */
    locale: 'en-GB',
    timezone: 'Europe/London'
});

if (typeof module !== 'undefined') {
    module.exports = config;
} else {
    window.ViziaDemoConfig = config;
}
