const config = require('./constants');
const viewHelpers = require('./view-helpers');

describe('viewHelpers.getSiteTitle()', () => {
  test('Should return the site title', () => {
    expect(viewHelpers.getSiteTitle()).toEqual(config.TITLE);
  });
});
