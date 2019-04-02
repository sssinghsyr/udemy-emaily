// Decision making to detemine credentials to return
// based upon dev or prod server

if(process.env.NODE_ENV === 'production'){
  // To return HEROKU configs
  module.exports = require('./prod.js');
}else{
  // to return config from config/dev.js
  module.exports = require('./dev.js');
}
