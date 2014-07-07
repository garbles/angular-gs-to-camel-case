describe('angular-gs-to-camel-case', function () {
  beforeEach(module('gs.to-camel-case'));

  var toCamelCase;

  beforeEach(inject(function (_toCamelCase_) {
    toCamelCase = _toCamelCase_;
  }));

  it('turns snake_cased strings into camelCased ones', function () {
    expect(toCamelCase('gabe_gabe')).toEqual('gabeGabe');
    expect(toCamelCase('gabegabe')).toEqual('gabegabe');
    expect(toCamelCase('this_is_pretty_long')).toEqual('thisIsPrettyLong');
  });
});
