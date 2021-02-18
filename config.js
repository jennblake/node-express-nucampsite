const Facebook = require('./hidden');

module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl': 'mongodb://localhost:27017/nucampsite',
    'facebook': {
        clientId: Facebook.clientId,
        clientSecret: Facebook.clientSecret,
    }
};