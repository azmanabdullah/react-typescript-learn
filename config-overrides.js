const path = require('path');

const resolveApp = relativeDir => path.resolve(__dirname, relativeDir);

module.exports = {
  paths: function(paths, env) {
    paths.appIndexJs = resolveApp('app/index.tsx');
    paths.appSrc = resolveApp('app');
    paths.appTypeDeclarations = resolveApp('app/react-app-env.d.ts');

    return paths;
  }
}