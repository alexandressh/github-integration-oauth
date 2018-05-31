const querystring = require('querystring');
const express = require('express')
const https = require('https');
const request = require('request');
const morgan = require('morgan');
const app = express()

const port = 4000;

require('dotenv').config();

const body = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
};

const authOptions = {
  hostname: 'github.com',
  path: '/login/oauth/access_token',
  method: 'POST',
  headers: {
      'User-Agent': 'alexandressh',
      'accept': 'application/json'
  }
};

const generalOptions = {
    url: 'https://api.github.com',
    headers: {}
};


app.use(morgan('tiny'));

// app.get('/api/access_token/:code', (req, res) => {
//     const url =  'https://github.com/login/oauth/access_token';
//     const authOptions = {
//         uri: 'https://github.com/login/oauth/access_token',
//         headers: {
//             'User-Agent': 'alexandressh',
//             'accept': 'application/json'
//         },
//         json: body
//     };

//     const r = request.post(authOptions);
//     req.pipe(r).pipe(res);
// });


app.get('/api/access_token/:code', (req, res) => {
    const code = req.params.code;
    const bodyString = querystring.stringify({...body, code: code});
    let chunks = '';

    const reqProxy = https.request(authOptions, (resProxy) => {
        resProxy.on('data', (d) => {
          chunks += d;
        });

        resProxy.on('end', () => {
            res.send(JSON.parse(chunks));
        });
      });

      
      reqProxy.on('error', (e) => {
        console.error(e);
        res.send(e);
      });
      
      reqProxy.write(bodyString)
      reqProxy.end();
});

//https://stackoverflow.com/questions/10435407/proxy-with-express-js
app.use('/api', (req, res) => {
    const url = `${generalOptions.url}${req.url}`;
    const headers = {
        'authorization': req.headers['authorization'],
        'user-agent': 'alexandressh'
    };
    const options = {...generalOptions, url};
    options.headers = headers;

    request(options).pipe(res);
});

app.listen(port, () => console.log('Example app listening on port 4000!'))