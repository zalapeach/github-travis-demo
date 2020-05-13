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

router.get('/teresa-carbajal', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Teresa Carbajal', // Change by your full name
    org: 'Laboratoria', // Change by your full name
    github: 'TeresaC21', // Change by your github user
    photo: '/images/members/tech.io.git.png' //Change by your image
  });
});

module.exports = router;