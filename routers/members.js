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

module.exports = router;
