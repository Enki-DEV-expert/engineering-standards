# Security policy

## Supported status

Version 0.1.0 is in local release preparation. There is no released support guarantee or incident-response SLA. After publication, the maintainer will prioritize confirmed vulnerabilities affecting the latest release; older versions may require an upgrade.

## Private reporting

Author and security contact: **Nirox Morais** ([LinkedIn](https://www.linkedin.com/in/nirox-morais-87784b1ba/)); GitHub account and project maintainer: **Enki-DEV-expert**.

Use **Security → Report a vulnerability** on the canonical GitHub repository after the maintainer has enabled private vulnerability reporting. Do not open a public issue with exploit details, credentials or personal data.

**Maintainer setup placeholder:** configure and verify a private security reporting channel before public launch. No private email address or response address has been supplied. The LinkedIn profile is not a secure vulnerability-reporting channel; use it only to request a private channel without including vulnerability details. If private reporting is unavailable, retain the sensitive details and request a private reporting channel without including those details. Do not assume public issues or a GitHub profile provide confidentiality.

Include affected version, operating system, minimal reproduction in a temporary directory, expected/actual behavior, impact and suggested mitigation. Use synthetic data. Do not test against other people's installations or services.

## Security boundaries

This framework provides written engineering guidance and a local installer. It does not enforce agent permissions, guarantee model behavior, certify compliance, or make an application attack-proof.

The installer refuses known file conflicts and symbolic/hard links, validates destinations against an internal allowlist, records backups and limits uninstall to owned content. Backups may contain private instructions. Keep them out of Git and remove them only after review. The filesystem and user account must be trusted; hostile concurrent filesystem changes and power-loss durability have residual limitations.

Dependencies are development-only and pinned. Review the lockfile, package contents, action pins and provenance before publication. See [security review](handbook/security-review.md) and [recovery](handbook/recovery.md).

The maintainer will assess credible reports, coordinate a correction and determine an appropriate disclosure timeline with the reporter. No response timing is promised before the reporting channel is established.
