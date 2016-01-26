Package.describe({
  name: 'zvictor:astronomy-validators',
  version: '1.1.2',
  summary: 'Validators for Meteor Astronomy',
  git: 'https://github.com/zvictor/meteor-astronomy-validators.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('zvictor:astronomy@1.2.3');
  api.use('jagi:reactive-map@2.0.0');
  api.use('underscore');
  api.use('check');
  api.use('tracker');
  api.use('ejson');

  api.imply('zvictor:astronomy');

  // Module.
  api.addFiles([
    'lib/module/global.js',
    'lib/module/validation_error.js',
    'lib/module/validation_error_event.js',
    'lib/module/validator.js',
    'lib/module/field_validator.js',
    'lib/module/create_validator.js',
    'lib/module/validate.js',
    'lib/module/get_error.js',
    'lib/module/ejson.js',
    'lib/module/init_class.js',
    'lib/module/init_definition.js'
  ], ['client', 'server']);

  // Type validators.
  api.addFiles([
    'lib/validators/type/string.js',
    'lib/validators/type/number.js',
    'lib/validators/type/boolean.js',
    'lib/validators/type/array.js',
    'lib/validators/type/object.js',
    'lib/validators/type/date.js',
    'lib/validators/type/email.js',
    'lib/validators/type/url.js'
  ], ['client', 'server']);

  // Existence validators.
  api.addFiles([
    'lib/validators/existence/required.js',
    'lib/validators/existence/null.js',
    'lib/validators/existence/not_null.js',
  ], ['client', 'server']);

  // Size validators.
  api.addFiles([
    'lib/validators/size/length.js',
    'lib/validators/size/min_length.js',
    'lib/validators/size/max_length.js',
    'lib/validators/size/gt.js',
    'lib/validators/size/gte.js',
    'lib/validators/size/lt.js',
    'lib/validators/size/lte.js'
  ], ['client', 'server']);

  // Comparison validators.
  api.addFiles([
    'lib/validators/comparison/choice.js',
    'lib/validators/comparison/unique.js',
    'lib/validators/comparison/equal.js',
    'lib/validators/comparison/equal_to.js',
    'lib/validators/comparison/regexp.js'
  ], ['client', 'server']);

  // Logical validators.
  api.addFiles([
    'lib/validators/logical/and.js',
    'lib/validators/logical/or.js',
    'lib/validators/logical/if.js',
    'lib/validators/logical/switch.js'
  ], ['client', 'server']);

  // Embeded validators.
  api.addFiles([
    'lib/validators/nested/every.js',
    'lib/validators/nested/has.js',
    'lib/validators/nested/contains.js'
  ], ['client', 'server']);

  api.export(['Validators'], ['client', 'server']);
});
