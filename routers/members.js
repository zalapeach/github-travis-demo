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

router.get('monse-salas', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Monse Salas V',// Change by your full name
    org: 'Laboratoria',// Change by your full name
    github: 'MonseSalasVi',// Change by your github user
    photo: '/images/members/your-image.png' //Change by your image
    add your image to public/members/
  });
});

//router.get('/your-full-name-route', (req, res, next) => { // Change by your full name
  //res.render('members/show', {
    //name: 'You full name',// Change by your full name
    //org: 'Your organization',// Change by your full name
    //github: 'zalapeach',// Change by your github user
    //photo: '/images/members/your-image.png' //Change by your image
    // add your image to public/members/
  //});
//});

module.exports = router;
