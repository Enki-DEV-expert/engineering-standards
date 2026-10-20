# Security policy

## Supported status

Version 0.1.1 is the latest release, published on npm. There is no support guarantee or incident-response SLA. The maintainer prioritizes confirmed vulnerabilities affecting the latest release; older versions may require an upgrade.

## Private reporting

Author and security contact: **Nirox Morais** ([LinkedIn](https://www.linkedin.com/in/nirox-morais-87784b1ba/)); GitHub account and project maintainer: **Enki-DEV-expert**.

Private vulnerability reporting is enabled. Report vulnerabilities through **Security → Report a vulnerability** on the canonical GitHub repository ([open a private report](https://github.com/Enki-DEV-expert/engineering-standards/security/advisories/new)). Do not open a public issue with exploit details, credentials or personal data.

Reports are received privately by the maintainer through GitHub. The LinkedIn profile is not a secure vulnerability-reporting channel: never send vulnerability details there. Public issues and GitHub profiles do not provide confidentiality.

Include affected version, operating system, minimal reproduction in a temporary directory, expected/actual behavior, impact and suggested mitigation. Use synthetic data. Do not test against other people's installations or services.

## Security boundaries

This framework provides written engineering guidance and a local installer. It does not enforce agent permissions, guarantee model behavior, certify compliance, or make an application attack-proof.

The installer refuses known file conflicts and symbolic/hard links, validates destinations against an internal allowlist, records backups and limits uninstall to owned content. Backups may contain private instructions. Keep them out of Git and remove them only after review. The filesystem and user account must be trusted; hostile concurrent filesystem changes and power-loss durability have residual limitations.

Dependencies are development-only and pinned. Review the lockfile, package contents, action pins and provenance before publication. See [security review](handbook/security-review.md) and [recovery](handbook/recovery.md).

The maintainer will assess credible reports, coordinate a correction and determine an appropriate disclosure timeline with the reporter. No response timing is promised before the reporting channel is established.
