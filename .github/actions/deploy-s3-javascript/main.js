const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('This will be written to the GHA workflow log');
}

run();