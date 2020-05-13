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

router.get('/ana-karen-ramirez-nuñez', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'ana-karen-ramirez-nuñez',// Change by your full name
    org: 'laboratoria',// Change by your full name
    github: 'karenlabo',// Change by your github user
    photo: '/images/members/KarenRamirez_3.jpeg' //Change by your image

  });
});

module.exports = router;
