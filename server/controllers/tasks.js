'use strict';

var Task = require('../models/task');

exports.create = function(req, res){
  Task.create(req.body, function(err, t){
    res.send(t);
  });
};

exports.index = function(req, res){
  Task.all(function(err, tasks){
    res.send(tasks);
  });
};
