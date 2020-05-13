const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('members/index');
});

router.get('/juan-carlos-aguilar-rincon', (req, res, next) => {
  res.render('members/show', {
    name: 'Juan Carlos Aguilar Rincon',
    org: 'IBM',
    github: 'zalapeach',
    photo: '/images/members/juanc.png'
  });
});

router.get('/josseline-acosta-martinez', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Josseline Acosta',// Change by your full name
    org: 'Laboratoria',// Change by your full name
    github: 'JossAcosta',// Change by your github user
    photo: '/images/members/jossAcosta.png' //Change by your image
    // add your image to public/members/
  });
});

module.exports = router;
