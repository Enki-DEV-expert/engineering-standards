# Validation record

Release preparation date: 2026-10-20. Status: local development and checks completed; publication and full platform/agent runtime certification remain unperformed.

## Actual local environment

- macOS, Node.js 24.21.0, npm 11.19.0.
- Development tooling: TypeScript 7.0.2, Biome 2.5.15, Node 22 type definitions 22.20.5, with exact lockfile versions.
- Vendor CLIs inspected only in temporary homes: Claude Code 2.1.304 and codex-cli 0.163.0.

## Executed checks

| Check | Actual result |
| --- | --- |
| `npm run check` | Passed: lint, strict type checking, build, 50 tests and standards validation |
| Isolated installer tests | 50 passed, 0 failed, 0 skipped |
| `npm run package:check` | Passed: 51 allowlisted package files; packed CLI init, doctor, update, uninstall; offline npm installation and executable discovery |
| Original content checksums | 23/23 unchanged: AGENTS.md, twelve documents, six skills and four templates |
| Content validation | Domain/template references, six skill frontmatter records, generated plugin inventory and local Markdown links passed |
| Repository pattern scan | No matched secret/private-path/AI-trailer indicators in the 64 candidate distributable repository files; bounded heuristics, not a guarantee |
| `claude plugin validate` | Generated plugin and marketplace both passed, no warnings, with isolated HOME/configuration |
| YAML parsing | Both workflows, issue forms/config, Dependabot and CITATION.cff parsed successfully using Ruby YAML; not a formal CFF schema certification |
| Dependency audit | Networked npm installation reported 0 vulnerabilities; subsequent cached/offline npm audit also reported 0. Fresh advisory review remains a release gate |
| `git diff --check` | Passed, but the repository has no commits and its candidate files are untracked, so this is not a substantive tracked-diff review |

The generated tarball and SHA256SUMS are in `dist/artifacts/`, ignored by Git. Regenerating the artifact after documentation edits changes the checksum; use the checksum accompanying the actual reviewed artifact.

## Coverage

Tests cover global/project scope; Claude-only, Codex-only and both agents; custom configuration roots; repeat installation; preservation of BOM/CRLF/user bytes/settings/unrelated skills; existing skill collisions; real content/version updates and rollback; dry-run; uninstall; interrupted installation; failure injection; locks; altered manifests/backups; missing files; malformed skill metadata; broken document references; symlinks/hard links; Codex overrides and size limits; relocated projects; Windows/POSIX layouts; spaces, Unicode and literal dollar tokens in paths; control-character rejection; and preservation of user resources added inside managed skill directories.

Tests create temporary homes and projects and isolate subprocess configuration. No test targets live agent installation directories. There are no production or paid-service tests.

## Live configuration preservation

A read-only baseline covered 939 entries in the live Claude/Codex instructions, settings and skill trees, including `.agents/skills`. The final comparison found **zero content, symlink-target or inventory changes**. Two files in Claude's synced-skill bookkeeping had different modification timestamps but identical content hashes. Their cause is not established by this comparison; this preparation did not restore or modify those timestamps. This distinction prevents claiming that every live filesystem metadata field remained unchanged. The separate `~/.claude.json` application-state file was not included in the initial content baseline and had a later modification time; its complete preservation cannot be established from this evidence. No cause is attributed and no attempt was made to restore live application state.

No installer command targeted the real home or live agent configuration. All vendor CLI validation commands were launched with temporary HOME, USERPROFILE, CODEX_HOME and CLAUDE_CONFIG_DIR values. The baseline contains no private file contents in this repository.

## Existing local backup

One pre-existing AGENTS.md backup remains in the working directory. It is matched by the original backup ignore rule and is excluded from the npm allowlist. It was preserved rather than deleted. Do not force-add ignored backups during publication.

## Unverified boundaries and required follow-up

The prepared CI matrix targets Node 22/24 on Linux, macOS and Windows. Those hosted jobs have not run. Native Windows layout unit tests do not substitute for Windows filesystem/ACL tests. Authenticated Claude/Codex instruction loading and semantic behavior have not been exercised by a model session during this preparation.

Plugin validation establishes accepted manifest structure; it does not prove runtime invocation, account permissions or automatic policy loading. The plugin is skills-only, and the generated marketplace tree is not yet a publicly distributable Git marketplace.

No commits, tags, pushes, GitHub releases, npm publication, marketplace registration or release workflow dispatch were performed. Repository identity, npm scope ownership, private reporting channels, protected release environment, signing trust and fresh upstream security review remain maintainer release prerequisites.
