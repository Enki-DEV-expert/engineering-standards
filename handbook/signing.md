# Maintainer commit and tag signing

The project author and copyright owner is Nirox Morais; the GitHub account and project maintainer is Enki-DEV-expert. Use the maintainer's existing GitHub-associated email and set the commit author name to Nirox Morais. This preparation does not change the persistent Git identity, create signing keys or create tags. Never add AI co-authorship trailers.

Before the maintainer commits, inspect the staged diff, confirm author identity and use an existing approved signing key. Git supports GPG or SSH signing; configure the chosen signing method through the maintainer's normal secure key-management process. Keep private keys and passphrases outside this repository. Register the public signing key with GitHub if a verified badge is desired.

After review, commands such as these are **manual examples**, not commands executed by this preparation:

```sh
git commit -S -m "Prepare engineering standards distribution"
git tag -s v0.1.0 -m "Global Engineering Standards 0.1.0"
git verify-commit HEAD
git verify-tag v0.1.0
```

Use the final approved version, not an assumed release number. Verification must use a trusted signer configuration: GPG trust or an SSH allowed-signers file whose maintainer key fingerprint has been checked out of band. A signature block alone is insufficient.

Before any push/publication, verify the tag points to the reviewed commit and that the version matches package.json. Tag protection and the protected release environment should restrict publication to maintainer-reviewed tags. Do not expose signing secrets to pull-request workflows. The prepared release script checks signature presence; cryptographic trust verification remains a required maintainer action before release approval.
