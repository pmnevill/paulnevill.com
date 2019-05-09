module.exports = function (router) {

  const getJobs = (req, res, next) => {
    res.json([
      {
        employer: 'Acxiom',
        title: 'Software Engineer',
        description: 'Developer on multiple team projects',
        startDate: '2013-05-01T05:00:00.000Z',
        endDate: null,
        skills: [
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
            name: 'Bootstrap',
            primary: false,
          },
        ]
      },
      {
        employer: 'A Briggs',
        title: 'Web Developer',
        description: 'Internship as a web developer',
        startDate: '2012-05-01T05:00:00.000Z',
        endDate: '2012-08-01T05:00:00.000Z',
        skills: [
          {
            name: 'JavaScript / ES6',
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
            name: 'Bootstrap',
            primary: false,
          },
          {
            name: 'SQL',
            primary: false,
          },
        ]
      },
      {
        employer: 'CJD',
        title: 'Videographer',
        description: '25 day work assignment in United Kingdom',
        startDate: '2011-07-01T05:00:00.000Z',
        endDate: '2011-08-01T05:00:00.000Z',
      },
      {
        employer: 'CGI',
        title: 'Technical Assistant',
        description: 'Internship assisting in technical problems related to passport printing',
        startDate: '2011-05-01T05:00:00.000Z',
        endDate: '2011-07-01T05:00:00.000Z',
      },
    ]);
  };

  router.get('', getJobs);
};
