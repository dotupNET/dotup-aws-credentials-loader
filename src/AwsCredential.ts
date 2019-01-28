export class AwsCredential {
  ProfileName: string;
  accessKeyId: string;
  secretAccessKey: string;
  isComplete(): boolean {
    if (!this.accessKeyId) {
      return false;
    }
    if (!this.secretAccessKey) {
      return false;
    }
    if (!this.ProfileName) {
      return false;
    }

    return true;
  }
}
