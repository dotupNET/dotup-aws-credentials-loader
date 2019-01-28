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
