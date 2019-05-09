module.exports = function (router) {

  const getSkills = (req, res, next) => {
    res.json([
      {
        name: 'Agile Methodology',
        primary: true,
      },
      {
        name: 'GIT',
        primary: true,
      },
      {
        name: 'Angular / Material',
        primary: true,
      },
      {
        name: 'JavaScript / ES6',
        primary: true,
      },
      {
        name: 'TypeScript',
        primary: true,
      },
      {
        name: 'Node.js / Express.js',
        primary: true,
      },
      {
        name: 'HTML 5',
        primary: true,
      },
      {
        name: 'CSS / LESS / SASS',
        primary: true,
      },
      {
        name: 'MongoDB',
        primary: true,
      },
      {
        name: 'NPM',
        primary: true,
      },
      {
        name: 'Redux',
        primary: true,
      },
      {
        name: 'Lodash',
        primary: true,
      },
      {
        name: 'AWS',
        primary: false,
      },
      {
        name: 'OAuth',
        primary: false,
      },
      {
        name: 'Bootstrap',
        primary: false,
      },
      {
        name: 'SQL',
        primary: false,
      },
    ]);
  };

  router.get('', getSkills);
};
