var hasIntl = typeof(Intl) !== "undefined";

function zh(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/zh.js', './zh'], function (require) {
      console.log('Loaded bundle for zh (with Intl)');
      require('intl/locale-data/jsonp/zh.js');
      var i18n = require('./zh');
      cb.call(scope, i18n);
    }, 'zh-intl');
  else {
    require.ensure(['./zh'], function (require) {
      console.log('Loaded bundle for zh (without Intl)');
      var i18n = require('./zh');
      cb.call(scope, i18n);
    }, 'zh-without-intl');
  }
}

function en(cb, scope) {
  if (!hasIntl)
    require.ensure(['intl/locale-data/jsonp/en.js', './en'], function (require) {
      console.log('Loaded bundle for en (with Intl)');
      require('intl/locale-data/jsonp/en.js');
      var i18n = require('./en');
      cb.call(scope, i18n);
    }, 'en-intl');
  else {
    require.ensure(['./en'], function (require) {
      console.log('Loaded bundle for en (without Intl)');
      var i18n = require('./en');
      cb.call(scope, i18n);
    }, 'en-without-intl');
  }
}

var loaders = {
  en: en,
  zh: zh
}

module.exports = function(locale, cb, scope) {
  if(!hasIntl)
    require.ensure(['intl/Intl'], function (require) {
      require('intl/Intl');
      loaders[locale](cb, scope);
    }, 'intl-shim');
  else
    loaders[locale](cb, scope);
};
