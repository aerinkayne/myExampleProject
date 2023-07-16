const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {

    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    const s3uri = `s3://${bucket}`;
    //exec.exec(`aws s3 sync ${distFolder} ${s3uri} --region ${bucketRegion}`);

    core.notice('This will be written to the GHA workflow log');
    core.notice(`got inputs: ${bucket} ${bucketRegion} ${distFolder}`);
}

run();