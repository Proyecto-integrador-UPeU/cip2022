var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'login' });
});
/* GET home re. */
router.get('/registrarUser', function(req, res, next) {
  res.render('registrarUser', { title: 'Registrar colegiado' });
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'cip-puno' });
});

/* GET home page. */
router.get('/cursos', function(req, res, next) {
  res.render('cursos', { title: ' ta cip-puno' });
});

/* GET home page. */
router.get('/capacitacion', function(req, res, next) {
  res.render('capacitacion', { title: ' capacitacion' });
});

/* GET home page. */
router.get('/pagos', function(req, res, next) {
  res.render('pagos', { title: ' pagos' });
});

/* GET home page. */
router.get('/capinscribirse', function(req, res, next) {
  res.render('capinscribirse', { title: ' CapInscripciones' });
});
router.post('/dashboard', function(req, res, next) {
  email=req.body.email;
  password=req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM usuarios WHERE email='"+email+"' AND password='"+password+"'",function(err,rows){
    if(err){
      req.flash('error',err);
      console.log(err);
    }else{
      if(rows.length){
        console.log(rows);
        req.session.idu=rows[0]["id"];
        req.session.email=rows[0]["email"];
        req.session.loggedin = true;
        res.redirect('/main');
      }else{
        req.flash('error','El usuario no existe...');
        res.redirect('/login');
      }
    }
  });
});


module.exports = router;
