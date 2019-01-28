[![Build Status](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader.svg?branch=master)](https://travis-ci.org/dotupNET/dotup-aws-credentials-loader)

# dotup-aws-credentials-loader
Small tool to load aws credentials file on windows.

Default path:
c:\users\PROFILENAME\.was\credentials

You can specify the profile name which defaults to [default] on GetCredentials.

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
