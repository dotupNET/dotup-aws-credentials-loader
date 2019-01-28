import { AwsCredential } from '../src/AwsCredential';

describe('AwsCredential', () => {

  it('should create an instance', () => {
    const value = new AwsCredential();
    expect(value)
      .toBeTruthy();
  });

});
