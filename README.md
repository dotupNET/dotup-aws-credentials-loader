https://www.npmjs.com/package/dotup-aws-credentials-loader

[![Build Status](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader.svg?branch=master)](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader)

# dotup-aws-credentials-loader
Small tool to load aws credentials from file.

Default path:
process.env['USERPROFILE']\.aws\credentials

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


## Docs:
https://dotupnet.github.io/dotup-aws-credentials-loader/index.html

## repository:
https://github.com/dotupNET/dotup-aws-credentials-loader
