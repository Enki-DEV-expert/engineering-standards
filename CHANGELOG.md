# Changelog

Changes are recorded here before release. No release has been published by this preparation work.

## Unreleased — planned 0.1.0

- Preserve the existing central policy, twelve domain standards, six engineering skills and four templates.
- Add an offline Node.js installer for global and project Claude Code/Codex configurations.
- Add safe instruction blocks, ownership manifests, backups, guarded rollback, update, uninstall and doctor.
- Add isolated installation/security tests, content validation and cross-platform CI configuration.
- Prepare an optional local Claude plugin and marketplace manifest.
- Add public project governance, MIT licensing, citation, security reporting guidance and release/signing procedures.
- Prepare a disabled, manually dispatched npm publishing workflow with provenance and checksums.

### Known issues

- Node 22 on Windows can crash natively when `fs.cpSync` copies Unicode directory paths
  ([nodejs/node#59636](https://github.com/nodejs/node/issues/59636); reproduced on Node 22.23.3).
  The installer is not affected: production code uses none of `fs.cpSync`, `fs.cp` or
  `fsPromises.cp`. The relocation test moves its Unicode fixture within the same temporary
  volume using `renameSync`, preserving all installer assertions and Node 22 coverage.
