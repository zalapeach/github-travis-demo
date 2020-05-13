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

router.get('/your-full-name-route', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Majo Aquino',// Change by your full name
    org: 'Laboratoria',// Change by your full name
    github: 'majoaquino99',// Change by your github user
    photo: '/images/members/majoaquino.jpg' //Change by your image    
  });
});

module.exports = router;
