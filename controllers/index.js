const express = require('express');
const path = require('path');

module.exports = function (router) {
  router.use(
    '/',
    express.static('public/dist/'),
    (req, res, next) => {
      const regex = /\.[0-9a-z]+$/;
      if (regex.exec(req.originalUrl)) {
        res.sendStatus(404);
      } else {
        next();
      }
    },
  );
  router.get('/*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
  });
};
