# Contributing

Thank you for helping improve engineering practices. The project author is **Nirox Morais** ([LinkedIn](https://www.linkedin.com/in/nirox-morais-87784b1ba/)); the GitHub account and project maintainer is **Enki-DEV-expert**. Suggestions, bug reports and proposed patches are welcome; acceptance and integration remain the maintainer's responsibility.

## Before proposing a change

Read [AGENTS.md](AGENTS.md) and the relevant domain standards. Preserve existing policy meaning and established agent behavior. Explain a concrete problem, expected behavior, scope, compatibility impact and evidence. Discuss significant policy changes before implementation. Do not introduce exceptions without the documented human approval process.

Use the issue templates for non-sensitive problems. Follow [SECURITY.md](SECURITY.md) for vulnerabilities and the [code of conduct](CODE_OF_CONDUCT.md) for community interactions. Never include private application names, credentials, personal paths or customer data in reports.

## Local development

Use Node.js 22+ and run `npm ci --ignore-scripts`, then `npm run check`. Tests must use freshly created temporary homes/projects; never install into your real agent directories during automated testing. Do not use production access or paid services in the test suite.

The TypeScript CLI uses only Node built-ins at runtime. Keep changes small, typed and reviewable. Add regression tests for observable behavior, especially instruction preservation, ownership conflicts and rollback. Update public documentation when user-facing behavior changes.

The original AGENTS.md, twelve domain documents, six skills and templates have a content checksum baseline in `scripts/content-baseline.json`. Changing that baseline is an explicit policy change requiring maintainer review; do not automatically regenerate it to hide changes. Installed path adaptation is tested separately.

## Review requirements

Include the problem, resulting behavior, actual checks performed, security/privacy implications and recovery path. Use the pull request template. Keep generated `dist/`, local transaction backups, environment files and credentials out of submissions.

By submitting a contribution, you agree that it may be distributed under the repository's MIT License. Do not submit material you lack permission to share. Do not add AI co-authorship trailers or AI author credits. The maintainer personally reviews and creates repository commits under the configured identity; automation must not create commits, tags, releases or publications without explicit authorization.

## Releases

Only Enki-DEV-expert authorizes releases. Follow [release preparation](handbook/releasing.md) and [signing](handbook/signing.md). Repository and npm publication are separate protected actions.
