import diskusage from '..';

describe('Basic', () => {
  it('should have basic usage', async () => {
    diskusage.getDiskUsage(__dirname);
  });
});
