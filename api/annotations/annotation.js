const express = require('express');
const config = require('../../config');
const generateRequest = require('../lib/request');


function getAnnotionSet(uuid, options) {
    console.log(options);
    return generateRequest('GET', `${config.services.em_anno_api}/api/annotation-sets/filter?documentId=${uuid}`, options);
}

function getAnnotionHealth(options) {
    return generateRequest('GET', `${config.services.em_anno_api}/health`, options);
}

function getAnnotionInfo(options) {
    return generateRequest('GET', `${config.services.em_anno_api}/info`, options);
}


function getOptions(req) {
    return {
        headers: {
            Authorization: `Bearer ${req.auth.token}`,
            ServiceAuthorization: req.headers.ServiceAuthorization
        }
    };
}

module.exports = app => {
    const router = express.Router({ mergeParams: true });
    app.use('/annotations', router);

    router.get('/annotation-sets/:uuid', (req, res, next) => {
        console.log(req);
        const uuid = req.params.uuid;
        const options = getOptions(req);

        getAnnotionSet(uuid, options)
            .then(response => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('content-type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            })
            .catch(response => {
                console.log(response.error || response);
                res.status(response.error.status).send(response.error.message);
            });
    });
    router.get('/info', (req, res, next) => {
        const uuid = req.params.uuid;
        const options = getOptions(req);

        getAnnotionInfo(options)
            .then(response => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('content-type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            })
            .catch(response => {
                console.log(response.error || response);
                res.status(response.error.status).send(response.error.message);
            });
    });
    router.get('/health', (req, res, next) => {
        const options = getOptions(req);

        getAnnotionHealth(options)
            .then(response => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('content-type', 'application/json');
                res.status(200).send(JSON.stringify(response));
            })
            .catch(response => {
                console.log(response.error || response);
                res.status(response.error.status).send(response.error.message);
            });
    });
};
