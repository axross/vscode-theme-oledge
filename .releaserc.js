module.exports = {
  branches: [{ name: "main" }],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "conventionalcommits" }],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    ["@semantic-release/npm", { npmPublish: false }],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message:
          "chore(release): update `package.json` version to ${nextRelease.version}",
      },
    ],
    "@semantic-release/github",
  ],
};
