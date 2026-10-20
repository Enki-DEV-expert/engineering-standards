# Global Engineering Standards

A portable engineering standards framework for **Claude Code** and **OpenAI Codex**, authored by **Nirox Morais** and maintained on GitHub by **Enki-DEV-expert**.

It gives AI coding agents a consistent way to inspect architecture, protect existing behavior, assess security and privacy, preserve data integrity, reason about cost, and verify their work with evidence. The standards and six engineering skills were previously exercised in the maintainer's Claude Code and Codex sessions. The new installer has a separate validation status described below.

**Release status:** local release preparation, version 0.1.0. This package has not been published by this project. The npm name below is proposed and its ownership/availability must be confirmed before publication.

## Why use it?

AI-assisted development can produce inconsistent decisions, unnecessary rewrites, unverified capacity claims, unexpected infrastructure costs, or unsafe production operations. This framework makes the engineering expectations explicit while supporting scoped autonomous development.

It is suitable for individual developers and teams adopting shared engineering practices. It is policy and workflow guidance, not a security sandbox, compliance certification, or a guarantee that an AI agent will follow every instruction.

## Architecture

| Layer | Source | Responsibility |
| --- | --- | --- |
| Global policy | [AGENTS.md](AGENTS.md) | Priorities, operating modes, approval boundaries and definition of done |
| Domain standards | [docs/](docs/) | Twelve documents covering architecture, security, privacy, data, scale, cost, AI, testing, operations, web/mobile, platforms and governance |
| Engineering skills | [skills/](skills/) | Six task-specific implementation and review procedures |
| Templates | [templates/](templates/) | ADRs, audit reports, project instructions and exceptions |
| Distribution | [src/](src/) | Local installer, ownership manifest, backups and recovery |

The six skills cover safe implementation, security, privacy, architecture, databases, and cost estimation. Original policy, standards, skills and templates are preserved byte-for-byte. Only installed copies receive path adaptation and a path-resolution note; the source checksums are validated before installation.

## Requirements and compatibility

- Node.js 22 or later; npm is needed to obtain/build the package.
- CLI filesystem operations are designed for macOS, Linux and Windows. CI defines Node 22/24 across all three systems. Only locally executed results are claimed in [validation](handbook/validation.md).
- Supported integration targets: local Claude Code and local Codex installations following their documented instruction and skill conventions. See [compatibility and official sources](handbook/compatibility.md).
- No administrator privileges, runtime dependencies, shell commands, telemetry, or network calls inside the installer.

Agent accounts, subscriptions, sandbox permissions and corporate policies remain separate requirements. Cloud sessions, remote workspaces and desktop account-synced skills are not automatically configured.

## Install from this checkout today

Build the CLI in a reviewed checkout:

```sh
npm ci --ignore-scripts
npm run build
node dist/cli.js --help
```

Use the **absolute path to that checkout's `dist/cli.js`** when running from another project. The following commands are examples from the checkout; do not run `init-project` there unless you intend to install into the framework repository itself.

```sh
node dist/cli.js init --global --dry-run
node dist/cli.js init --global
node dist/cli.js doctor --global
```

To install into an application, change to that application's root and run:

```sh
node /path/to/reviewed-checkout/dist/cli.js init-project --dry-run
node /path/to/reviewed-checkout/dist/cli.js init-project
```

On Windows, use the equivalent quoted path to the checkout. Paths with spaces should be quoted on every platform.

### One-command installation after publication

**Not available from this project until the maintainer publishes and confirms the package name.** The intended command, pinned to a reviewed version, is:

```sh
npx --yes @enki-dev-expert/global-engineering-standards@0.1.0 init --global
```

`npx` downloads code from npm, so review the package and provenance before trusting it. The installer itself is offline. Prefer a reviewed pinned version over `latest`.

## Global or project installation

| Scope | Framework and manifest | Claude instructions / skills | Codex instructions / skills |
| --- | --- | --- | --- |
| Global | `~/.engineering-standards/` | `~/.claude/CLAUDE.md`, `~/.claude/skills/` | `~/.codex/AGENTS.md`, `~/.agents/skills/` |
| Project (default) | `<project>/.engineering-standards/` | `<project>/CLAUDE.md`, `<project>/.claude/skills/` | `<project>/AGENTS.md`, `<project>/.agents/skills/` |

Global instructions apply across projects. Project installations travel with the project and use paths anchored to the containing instruction/skill file. Global installations use absolute framework paths, independent of the current directory. `CODEX_HOME` and `CLAUDE_CONFIG_DIR` override their global configuration directories; Codex's user skills still live in `~/.agents/skills`. Keep these environment values consistent for update, doctor and uninstall.

Choose `--claude`, `--codex`, or both. With neither flag, `init` installs both. `update` retains the installed agents unless you explicitly add another. Project scope is always the current working directory, so run project commands at the same project root.

The installer appends a marked policy block and preserves existing bytes outside it. It refuses same-named existing skills instead of adopting or replacing them. Resolve conflicts manually after making your own backup. Other settings and skills are untouched. Repeated installation is a no-op.

For team distribution, commit `.engineering-standards/framework/`, `.engineering-standards/manifest.json`, and the selected agent instructions/skills. **Exclude `.engineering-standards/transactions/` and `.engineering-standards/operation.lock`** in your project's `.gitignore`: backups can contain private user instructions. The installer deliberately does not edit your `.gitignore`.

## Commands

| Command | Purpose |
| --- | --- |
| `init` | Install into the chosen scope; default is project |
| `init-project` | Install into the current project |
| `update` | Apply the standards bundled with the CLI version being run |
| `doctor` | Check manifest, installed hashes, instruction ownership, override conflicts and skill files |
| `uninstall` | Remove unchanged owned content from the entire selected scope |
| `rollback` | Undo the most recent unrolled transaction, only if later edits are safe |

All accept `--global` / `--project` and `--dry-run`. Agent flags apply to `init`, `init-project` and `update`. `--help` explains defaults. Conflicting or unknown options fail with exit status 1. Success is status 0 and structured JSON output. `doctor` checks files; it does not prove model compliance or invoke an agent.

Restart the agent after installation. In an isolated session, ask it to identify the active policy, locate a domain document, and list the six skills. Codex's nonempty `AGENTS.override.md` shadows `AGENTS.md`; installation refuses this conflict. A default Codex instruction size limit is checked per managed file; ancestor files can still exceed the combined budget.

## Operating modes

**Supervised Mode** is the default: inspect first, explain findings and risks, propose significant changes, obtain approval, implement the authorized scope and verify it.

**Autonomous Build Mode** requires an explicit request for end-to-end work within a defined scope. It permits ordinary implementation, dependency selection, local tests and debugging without repeated routine questions. It does not authorize production releases, destructive data operations, new financial commitments, or unrelated account access. The full rules are in [governance](docs/governance.md).

## Security and privacy

The installer provides concrete filesystem protections: destination allowlists, no recursive deletion of user directories, conflict detection, link refusal, exclusive operation locks, backup journals, atomic per-file replacement, and rollback guarded against later edits. It preserves existing instructions; it cannot decide whether those instructions semantically conflict with the standards. Human review remains necessary.

The CLI sends no data to external services and requests no credentials. Backups remain local and may include private instruction content; restrict access, exclude them from version control and remove them manually only after reviewing retention needs. POSIX file modes are applied where supported; Windows access control inherits local ACLs. Power loss and hostile concurrent filesystem modification have limitations described in the [security review](handbook/security-review.md).

Policy requirements do not technically enforce agent behavior. They do not replace agent sandboxing, permissions, code review, authorization tests or organizational controls. There is no absolute security or privacy guarantee.

## Update, recovery and uninstall

Obtain and review a newer CLI version first, then run `update` with the same scope and environment overrides. `update` does not fetch a remote version. Use `--dry-run` first to inspect changes.

```sh
node dist/cli.js update --global --dry-run
node dist/cli.js update --global
node dist/cli.js rollback --global --dry-run
node dist/cli.js rollback --global
node dist/cli.js uninstall --global --dry-run
node dist/cli.js uninstall --global
```

Changed managed files block update/uninstall rather than being deleted. User edits outside the managed instruction block survive. Uninstall removes only manifest-owned unchanged files and its instruction blocks; it retains backups and empty directories. Rollback can undo an installation, update or uninstall. See [recovery procedures](handbook/recovery.md), including stale locks and interrupted operations.

## Optional Claude Code plugin

`npm run build` prepares a local plugin under `dist/claude-plugin` and a local marketplace manifest. It exposes the six skills under a plugin namespace. It does **not** install automatically loaded global policy. The standalone CLI is the complete integration path. See [plugin instructions and validation status](handbook/claude-plugin.md). No marketplace has been published or registered.

## Development and contribution

```sh
npm ci --ignore-scripts
npm run check
```

Tests create temporary homes and projects; they must never target real agent configuration. CI runs build, lint, types, tests and content validation. Release automation is manual and disabled until explicitly enabled by the maintainer.

Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [SECURITY.md](SECURITY.md). Report vulnerabilities privately through the repository's Security tab once private reporting is enabled. Do not post credentials or exploit details in public issues. The private contact channel remains a maintainer setup requirement.

## Authorship and license

Author and copyright owner: **Nirox Morais**, 2026. [LinkedIn profile](https://www.linkedin.com/in/nirox-morais-87784b1ba/). GitHub account and project maintainer: **[Enki-DEV-expert](https://github.com/Enki-DEV-expert)**. Licensed under the [MIT License](LICENSE). Citation metadata is in [CITATION.cff](CITATION.cff).

No AI co-authorship trailers are permitted. This repository is independent of Anthropic and OpenAI; naming supported agents does not imply endorsement.
