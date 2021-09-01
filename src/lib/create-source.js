'use strict';
const axios = require('axios');
/**
 * you can pass an options object into your source when instantiating the factory
 * these can then be used in your code by access `options.propName`
 */
module.exports = (options = {}) => {
    return {
        source(pipeline) { //source factories must return an object with a function called 'source'
            const props = pipeline.config.scene.options, //get control properties
                { challengeRating } = props; // get the values you need from control props

            console.log(pipeline.config.test);

            let url = `https://www.dnd5eapi.co/api/monsters`;

            if (challengeRating > 0) {
                url = `${url}?challenge_rating=${challengeRating}`;
            }

            //pull your source data from a URL
            axios(url)
                .then(response => response.data) //get the json data from the api endpoint
                .then(jsonData => {
                    if (jsonData.Information) {
                        return pipeline.error(jsonData.Information);
                    }

                    pipeline.push(jsonData.results); //send the data down the pipeline
                    pipeline.done(); //tell the pipeline that you have no further data to send
                });
        }
    };
};
