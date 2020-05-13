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

router.get('/josseline-acosta-martinez', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Josseline Acosta',// Change by your full name
    org: 'Laboratoria',// Change by your full name
    github: 'JossAcosta',// Change by your github user
    photo: '/images/members/jossAcosta.png' //Change by your image
    // add your image to public/members/
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

router.get('/majo-aquino', (req, res, next) => { // Change by your full name
  res.render('members/show', {
    name: 'Majo Aquino',// Change by your full name
    org: 'Laboratoria',// Change by your full name
    github: 'majoaquino99',// Change by your github user
    photo: '/images/members/majoaquino.jpg' //Change by your image    
  });
});

module.exports = router;