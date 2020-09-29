import { exec } from 'child_process';
import { sep } from 'path';
const main = './dist/index.js'.replace(/\//g, sep);

describe('`snyk-licenses-report help <...>`', () => {
  const OLD_ENV = process.env;
  process.env.SNYK_TOKEN = process.env.SNYK_TEST_TOKEN;
  afterAll(async () => {
    process.env = { ...OLD_ENV };
  });
  it('Shows help text as expected', async (done) => {
    return exec(`node ${main} help`, (err, stdout) => {
      if (err) {
        throw err;
      }
      expect(err).toBeNull();
      expect(stdout.trim()).toMatchSnapshot();
      done();
    });
  });
});
