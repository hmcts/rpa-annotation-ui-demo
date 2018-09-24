const serviceTokenGenerator = require('../lib/service-token');

module.exports = async  (req,res,next) => {
    try {
        const token = await serviceTokenGenerator();
        req.headers['ServiceAuthorization'] = token.token;
    }
    catch(e) {
        console.log('Could not add S2S token header' + e)
    }

    next()
};