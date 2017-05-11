const config = require('./constants');
const viewHelpers = require('./view-helpers');

describe('viewHelpers.getSiteTitle()', () => {
  test('Should return the site title', () => {
    expect(viewHelpers.getSiteTitle()).toEqual(config.TITLE);
  });
});

describe('helpers.pre()', () => {
  test('Should return a string from an object', () => {
    const actual = {};
    const expected = "{}";

    expect(helpers.pre(actual)).toEqual(expected);
  });
});
