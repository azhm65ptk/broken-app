const express = require('express');

const  app = express();
const route= require('./routes')

const ExpressError = require("./expressError")



 // routes are in routes.js
app.use('',route);

// app.post('/', async function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });

//     results=await Promise.all(results)
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.json(out)
//   } catch(err) {
//     next(err);
//   }
// });



//404 handler
app.use((req, res, next) => {
  const err = new ExpressError("Page Not Found", 404)
  next(err)
})

//global generic handler
app.use(function(err,req,res, next){
  let status= err.status || 500;
  let message= err.message;

  return res.status(status).json({
      error: {message, status}
  });

});

module.exports = app;

