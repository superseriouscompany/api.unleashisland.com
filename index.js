var api_key = 'key-e91e0e4e39f5a37cff9f967cd03a2667';
var domain = 'mg.unleashisland.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Unleash Island <hi@mg.unleashisland.com>',
  to: 'neil.r.sarkar@gmail.com',
  subject: 'Foobarbaz',
  text: 'Testing email from this domain',
  html: 'Testing email from this domain'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
