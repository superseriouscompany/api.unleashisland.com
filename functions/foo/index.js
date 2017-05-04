console.log('start foo')
exports.handle = function(e, ctx) {
  var api_key = 'key-e91e0e4e39f5a37cff9f967cd03a2667';
  var domain = 'mg.unleashisland.com';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Unleash Island <hi@mg.unleashisland.com>',
    to: 'neil.r.sarkar@gmail.com',
    subject: 'New application',
    text: 'Testing email from this domain',
    html: 'Overwrite me'
  };

  var body = 'nope'
  var keys  = ['cool', 'nice'];
  var json  = e['body-json'];
  data.html = keys.map((k) => {
    return '<b>'+k+'</b><br />'+json[k]
  }).join('<br /><br />')

  mailgun.messages().send(data, function (error, body) {
    ctx.succeed({
      body: body,
      json: json,
    })
  });
}
