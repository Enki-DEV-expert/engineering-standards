# ADR 0001: additive local distribution with explicit ownership

Status: implemented for maintainer review. Authority: the user's explicit Autonomous Build request for local release preparation; publication remains outside scope.

## Context and requirements

The repository was documentation-only, with one central policy, twelve domain documents, six skills and four templates. Existing content had to remain unchanged. The new distribution must preserve user instructions, avoid skill collisions, work without administrator privileges, survive repeated installation, support recovery and never test against real agent configuration.

Acceptance criteria: exact source checksum preservation; isolated global/project and agent-selection tests; reversible add/update/remove; zero-write dry runs; same-named skill conflict refusal; manifest/path validation; broken reference and metadata checks; build/lint/types; offline runtime with no external dependencies. Full cross-platform and vendor runtime validation are separately reported.

## Decision and components

Use strict TypeScript compiled to Node ESM, targeting Node 22+. `content` validates canonical assets and adapts references. `layout` derives an explicit target allowlist. `filesystem` checks path components, snapshots bytes/modes and performs per-file replacement. `transaction` owns locks, private backup journals and recovery. `installer` plans additive policy blocks, manifests, updates and uninstall. `cli` validates arguments and prints structured results.

Data flow: reviewed bundled content → validated plan → private before/after journal → per-file writes → ownership manifest → completion status. No network, model, credential or database integration is part of this flow. Source documents are untrusted until their expected inventory and baseline hashes pass; package authenticity still depends on distribution provenance.

Instruction policy is embedded rather than relying on undocumented Codex imports. Full documents remain available by path and are loaded by the agent as needed. Project copies use references anchored to the containing file; global copies use absolute paths. User config TOML/JSON and permission settings are not rewritten.

## Alternatives

Symlinks minimize copies but require platform privileges and create security/relocation ambiguity. Global checkouts at a fixed home path break portability. Replacing entire instruction files loses user content. Generic config-merging libraries add dependencies without benefiting a design that only appends owned Markdown blocks. A plugin-only solution does not establish automatic global policy loading for both agents.

## Security, privacy and integrity

Refuse symlink/hard-link destinations and unknown ownership. Whitelist logical targets rather than accepting paths from manifests. Preserve user bytes and refuse divergent managed content. Serialize installer processes with an exclusive lock; compare snapshots before writing. Backups are sensitive local data and require deliberate retention. Detailed threats and limitations are recorded in the security review.

## Scale and cost

This is a local CLI, not a multi-tenant hosted service. 10,000 to 10,000,000 adopters do not create shared application load in this repository: installation work is per workstation, with package-registry distribution outside this CLI. There is no claim of tested capacity at those population sizes. Per-operation work is linear in a small fixed content inventory; files are capped at 8 MiB and journal entries at the target count. Backups grow with actual changes and require manual retention. No paid services were introduced. Agent token costs depend on policy/document use and are not measured; load relevant domain documents selectively. CI minutes and artifact storage depend on GitHub account terms and run frequency, with no price estimate asserted.

## Recovery and consequences

Per-file writes are atomic renames, not a cross-filesystem transaction. An on-disk journal enables caught-failure recovery and explicit interrupted-operation rollback. No recursive directory deletion. Preserve source checksums; restore added files using reviewed diffs if reverting the development work. Do not discard the user's pre-existing untracked content. Native ACLs, hostile races, power failure and authenticated agent behavior remain explicitly bounded limitations.
