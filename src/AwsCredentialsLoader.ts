// tslint:disable:non-literal-fs-path

import * as fs from 'fs';
import * as path from 'path';
import { AwsCredential } from './AwsCredential';

export class AwsCredentialsLoader {

  public Path: string; // = path.join(process.env['USERPROFILE'], '.aws');

  public FileName: string = 'credentials';

  constructor() {
    const profilePath = process.env['USERPROFILE'];
    if (profilePath) {
      this.Path = path.join(profilePath, '.aws');
    } else {
      this.Path = '';
    }
  }

  GetCredentials(profileName: string = '[default]'): AwsCredential {
    const result = new AwsCredential();

    const credPath = path.join(this.Path, this.FileName);

    const fileContent = fs
      .readFileSync(credPath)
      .toString();

    const fileLines = fileContent.split('\n');

    let profileFound: boolean = false;
    fileLines.forEach(line => {

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

        if (this.isComplete(result)) {
          return result;
        }
      }

    });

    return result;
  }

  isComplete(result: AwsCredential): boolean {
    if (!result.accessKeyId) {
      return false;
    }
    if (!result.secretAccessKey) {
      return false;
    }
    if (!result.ProfileName) {
      return false;
    }

    return true;
  }
}
