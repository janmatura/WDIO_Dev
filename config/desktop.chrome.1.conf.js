var base = require("./wdio.conf.js");

var _ = require("lodash");

const chromeArguments = base.__HEAD_LESS__ ? ['--headless', '--no-sandbox'] : [];

var overrides = {
    
    maxInstances: 1,

    
    specs: [
        './test/test_01.ts',
        
    ],

}
exports.config = _.defaultsDeep(overrides, base.config);
