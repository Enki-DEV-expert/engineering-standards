# Release preparation and publication

**Nirox Morais** is the project author and copyright owner; **Enki-DEV-expert** is the GitHub account and project maintainer responsible for authorizing publication. This release preparation creates no tags, npm publication or GitHub releases.

## Before publishing the repository

1. Review all added files and the original-content checksum report. Existing untracked standards must not be discarded.
2. The configured public repository target is `Enki-DEV-expert/engineering-standards`; confirm that the repository was created at this address before publishing. Package and citation metadata now use this URL.
3. Enable and test private vulnerability reporting. Replace the private security/conduct channel placeholders with real maintainer-approved channels.
4. Review the MIT copyright, authorship, issue templates, contribution process and residual security risks.
5. Configure branch/tag protection, required CI checks and reviewed dependency updates. Run the prepared Linux/macOS/Windows matrix; local macOS results do not establish other platforms.
6. Review and cryptographically verify the GitHub Action commit pins against upstream releases and security advisories. They are deliberately pinned; Dependabot may propose reviewed updates.
7. Personally create signed commits and an annotated signed release tag only after approving the diff. See [signing](signing.md). Do not add AI co-authorship trailers.

## Before publishing npm

The proposed name is `@enki-dev-expert/global-engineering-standards`. A GitHub username does not establish npm scope ownership. Confirm scope control, public-package availability and the final package name first. Update package metadata, lockfile and documentation if the name changes.

Run:

```sh
npm ci --ignore-scripts
npm run check
npm run package:check
npm audit
```

The package smoke check packs into a temporary directory with lifecycle scripts disabled, checks an explicit file allowlist, installs/runs/uninstalls the packed CLI in an isolated home/project and copies the tested tarball plus SHA256SUMS into `dist/artifacts/`. It does not publish anything. Review the actual tarball contents, dependency advisories and checksum before release.

Confirm `package.json`, `CITATION.cff` and the GitHub repository all identify `Enki-DEV-expert/engineering-standards`. Synchronize package, plugin and changelog versions. Add a release date only when actually released.

Configure npm trusted publishing for the exact GitHub owner, repository, `release.yml` and `npm-release` environment. Protect that environment with a human approval and restrict deployment tags. Enable GitHub private vulnerability reporting and npm account protections before publication. Bootstrap a new npm package manually through the account's approved workflow if trusted-publisher configuration requires an existing package; this preparation does not assume a first-publish identity exists.

The prepared workflow uses GitHub-hosted runners and OIDC without a stored npm token. npm documents Node >=22.14.0 and npm >=11.5.1 for trusted publishing; verify the runner's installed versions at release time. Sources: [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/), [npm provenance](https://docs.npmjs.com/generating-provenance-statements/).

## Prepared release workflow

`.github/workflows/release.yml` has only a manual trigger. Its verification job requires repository variable `NPM_RELEASE_ENABLED=true`, the exact confirmation text, and a version tag matching package.json. It checks repository identity, version, annotated signature presence, authorship trailers, all quality gates and package contents. **Signature presence is not cryptographic trust verification**: verify the signed commit/tag locally using the trusted maintainer key before approving the protected environment.

The publish job receives only `contents: read` and `id-token: write`, downloads the tested artifact, verifies its SHA-256 and publishes that tarball with provenance and lifecycle scripts disabled. Artifacts expire after seven days. It does not create a GitHub release. Neither enabling the gate nor dispatching the workflow was performed in this preparation.

The maintainer must establish the protected environment before setting the enable variable; a workflow file alone does not configure GitHub approvals. Never run publication from a pull-request context or supply a long-lived token as a workaround for missing OIDC setup.

## Optional plugin release

The local marketplace points at generated files. A raw repository checkout without a build is not a ready remote marketplace. Before advertising a marketplace URL, prepare a complete marketplace artifact with the plugin tree present, verify it with Claude Code and test an isolated install. No remote marketplace availability is currently claimed.

## After a future release

Verify npm provenance against the expected repository/workflow/ref, download the published tarball, compare its checksum, and smoke-test in a clean environment. Record the actual release in CHANGELOG.md and citation metadata. If a defect appears, deprecate or supersede according to npm policy and coordinate a fix; do not assume package unpublication is always available or safe.
