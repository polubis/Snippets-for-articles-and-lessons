module.exports = {
  extends: [`@commitlint/config-conventional`], // The rules taken from plugin.
  rules: {
    'type-enum': [
      2, // It means throwing an error.
      `always`,
      [ // Allowed actions to use. Add your own if needed.
        `build`,
        `chore`,
        `ci`,
        `docs`,
        `feat`,
        `fix`,
        `perf`,
        `refactor`,
        `revert`,
        `style`,
      ],
    ],
  },
};
