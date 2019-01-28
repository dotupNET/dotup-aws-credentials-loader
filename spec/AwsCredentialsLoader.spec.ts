import { AwsCredentialsLoader } from '../src/AwsCredentialsLoader';

describe('AwsCredentialsLoader', () => {

  it('should create an instance', () => {
    const loader = new AwsCredentialsLoader();
    expect(loader)
      .toBeTruthy();

    loader.Path = './spec/support';

    const cred = loader.GetCredentials();
    expect(cred)
      .toBeTruthy();

    expect(cred.ProfileName)
      .toEqual('[default]');

    expect(cred.accessKeyId)
      .toEqual('ABC');

    expect(cred.secretAccessKey)
      .toEqual('DEF');
  });

});
