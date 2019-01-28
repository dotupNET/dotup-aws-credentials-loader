import * as fs from 'fs';
import * as path from 'path';
import { AwsCredential } from './AwsCredential';

export class AwsCredentialsLoader {

  public Path: string = path.join(process.env['USERPROFILE'], '.aws');

  public FileName: string = 'credentials';

  GetCredentials(profileName: string = '[default]'): AwsCredential {
    const result = new AwsCredential();

    const credPath = path.join(this.Path, this.FileName);

    const fileContent = fs.readFileSync(credPath)
      .toString()
      .split('\n');

    let profileFound: boolean = false;
    fileContent.forEach(line => {

      if (line === profileName) {
        profileFound = true;
        result.ProfileName = line;
      }

      if (profileFound && line !== profileName) {
        const lineContent = line.split('=');

        switch (lineContent[0]) {
          case 'aws_access_key_id':
            result.accessKeyId = lineContent[1];
            break;

          case 'aws_secret_access_key':
            result.secretAccessKey = lineContent[1];
            break;

          default:
        }

        if (result.isComplete()) {
          return result;
        }
      }

    });

    return result;
  }
}
