var express = require('express')
var app = express()
var router = require('./router/index')

app.listen(3000, function () {
    console.log("start!! express server on port 3000")
});

app.use(express.static('public'))
app.set('view engine', 'ejs') 
app.use(router)

// const express = require('express')
// const app = express()
// const port = 3000
//
// // app.get('/', (req, res) => {
// //   res.send('Hello World!');
// //   res.send('<script type="text/javascript">alert("1");</script>');
// // })
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
//
// app.get('/hello', function (req, res) {
//   res.send('Hello /');
// });
//
// app.get('/world.html', function (req, res) {
//   res.send('Hello World');
// });
//
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
