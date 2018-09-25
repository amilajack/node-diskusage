import diskusage from '..';

describe('Basic', () => {
  it('should have basic usage', async () => {
    console.log(diskusage.getDiskUsage());
  });
});
