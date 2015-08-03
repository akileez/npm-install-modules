/*!
 * npm-install-modules <https://github.com/akileez/npm-install-modules>
 *
 * Copyright (c) 2015 Keith Williams.
 * Licensed under the ISC license.
 */

'use strict'

var exec       = require('child_process').exec
var assert     = require('assert')
var concurrent = require('./lib/concurrent')
var logger     = require('./lib/logger')
var isEmpty    = require('./lib/isEmpty')

function install (opts, done) {
  logger.info('\nInstalling Dependencies:\n\n')

  function installDependencies (cmd, packages, msg, cb) {
    if (!isEmpty(packages)) {
      concurrent.each(packages, function (val, key, done) {
        exec(cmd + val, function (err) {
          logger.event('  module: ', val)
          done(null, msg)
        })
      }, function (err) {
        assert.ifError(err)
        cb(null, msg)
      })
    } else {
      cb(null, msg)
    }
  }

  var commands = {
    cmd1: function (cb) {
      var cmd = 'npm install --save-dev '
      installDependencies(cmd, opts.devDependencies, 'devDependencies', function (err, msg) {
        cb(null, msg)
      })
    },

    cmd2: function (cb) {
      var cmd = 'npm install --save '
      installDependencies(cmd, opts.dependencies, 'dependencies', function (err, msg) {
        cb(null, msg)
      })
    }
  }

  concurrent.parallel(commands, function (err, results) {
    assert.ifError(err)
    logger.msgdone()
    done()
  })
}

module.exports = install