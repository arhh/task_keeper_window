module.exports = {
  packagerConfig: {
    asar: true, // https://electron.github.io/packager/main/interfaces/electronpackager.options.html#asar
    icon: 'resources/material_apps'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
    },
  ],
  plugins: [
    {
      // When asar = true, it improves performance by unpacking native node.js modules from asar
      // https://www.electronforge.io/config/plugins/auto-unpack-natives
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
