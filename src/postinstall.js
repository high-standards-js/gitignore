const base = require('@high-standards-js/base');

(async() => {
    await base.checkAcceptedHighStandards();
    base.getFile('.gitignore', true);
})();
