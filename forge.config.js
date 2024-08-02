const config = require('./config.json');

module.exports = {
  packagerConfig: {
    asar: true, // https://electron.github.io/packager/main/interfaces/electronpackager.options.html#asar
    icon: 'resources/material_apps',
    name: config.titleCamelCase,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
    },
  ],
  // publishers: [
  //   {
  //     name: '@electron-forge/publisher-github',
  //     config: {
  //       authToken: '<value needed>',
  //       repository: {
  //         owner: 'arhh',
  //         name: 'task_keeper_window'
  //       },
  //     }
  //   }
  // ],
  plugins: [
    {
      // When asar = true, it improves performance by unpacking native node.js modules from asar
      // https://www.electronforge.io/config/plugins/auto-unpack-natives
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
