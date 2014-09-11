'use strict';

var Mongo = require('mongodb'),
    async = require('async');

function Task(o){
  this.name = o.name;
  this.due = new Date(o.due);
  this.priorityId = Mongo.ObjectID(o.priorityId);
  this.isComplete = false;
}

Object.defineProperty(Task, 'collection', {
  get: function(){return global.mongodb.collection('tasks');}
});

Task.create = function(data, cb){
  var t = new Task(data);
  Task.collection.save(t, function(err, task){
    getPriority(task, cb);
  });
};

Task.all = function(cb){
  Task.collection.find().toArray(function(err, tasks){
    async.map(tasks, getPriority, cb);
  });
};

module.exports = Task;

// Helper Functions
function getPriority(t, cb){
  require('./priority').findById(t.priorityId, function(err, p){
    t.priority = p;
    cb(err, t);
  });
}
