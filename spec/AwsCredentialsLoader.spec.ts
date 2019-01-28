import { AwsCredentialsLoader } from '../src/AwsCredentialsLoader';

describe('AwsCredential', () => {

  it('should create an instance', () => {
    const loader = new AwsCredentialsLoader();
    expect(loader)
      .toBeTruthy();

    const cred = loader.GetCredentials();
    expect(cred)
      .toBeTruthy();

  });

});
