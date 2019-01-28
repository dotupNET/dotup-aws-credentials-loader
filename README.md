[![Build Status](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader.svg?branch=master)](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader)

# dotup-aws-credentials-loader
Small tool to load aws credentials from file.

Default path:
process.env['USERPROFILE']\\.aws\credentials

You can specify the profile name which defaults to [default] on GetCredentials().

You can use it with grunt-aws-lambda for example.

## USAGE

Typescript:
```typescript
import { AwsCredentialsLoader } from './AwsCredentialsLoader';

export class Sample {

  run(): void {
    const loader = new AwsCredentialsLoader();
    const cred = loader.GetCredentials();
    console.log(cred);
  }
}

const sample = new Sample();
sample.run();

```

grunt-aws-lambda:
```javascript
const awsCreds = require('dotup-aws-credentials-loader');

module.exports = function (grunt) {

  const loader = new awsCreds.AwsCredentialsLoader();
  const credentials = loader.GetCredentials();

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    ...

    lambda_deploy: {
      default: {
        arn: functionArn,
        options: {
          accessKeyId: credentials.accessKeyId,
          secretAccessKey: credentials.secretAccessKey,
          region: "eu-west-1"
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.registerTask('lambda-pack', ['lambda_package:default']);
  grunt.registerTask('lambda-deploy', ['lambda_package:default', 'lambda_deploy:default']);

  ...
};
```

## Docs:
https://dotupnet.github.io/dotup-aws-credentials-loader/index.html

## NPM:
https://www.npmjs.com/package/dotup-aws-credentials-loader

## Repository:
https://github.com/dotupNET/dotup-aws-credentials-loader
