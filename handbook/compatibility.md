# Agent compatibility

Official documentation reviewed on 2026-10-20. Documentation conformity and local filesystem tests are distinct from a successful authenticated agent session. No model session or paid inference was required for this preparation.

## Claude Code

The CLI writes user policy to `~/.claude/CLAUDE.md` or project policy to `CLAUDE.md`, and copies skills into the corresponding `.claude/skills/<name>/SKILL.md`. `CLAUDE_CONFIG_DIR` is honored for global configuration. Existing settings, permissions, MCP connections and unrelated skills remain untouched.

Policy is embedded in a managed block rather than relying on import parsing or AGENTS.md fallback behavior. This avoids uncertainty with import paths containing spaces and version-dependent direct AGENTS.md loading. Claude configuration or enterprise policy can still exclude project instructions or disable local skills. Restart and verify discovery in the actual supported client.

Sources: [Claude memory](https://code.claude.com/docs/en/memory), [Claude skills](https://code.claude.com/docs/en/skills), [Claude settings](https://code.claude.com/docs/en/settings).

## Codex

Global policy goes to `$CODEX_HOME/AGENTS.md`, defaulting to `~/.codex/AGENTS.md`. Project policy goes to `AGENTS.md`. Current documented skill discovery uses `~/.agents/skills` for user skills and `.agents/skills` within projects. The CLI does not install new skills into the older `.codex/skills` location or remove existing ones there.

A nonempty `AGENTS.override.md` at the managed instruction location causes a conflict. Codex combines project instructions subject to a default 32 KiB budget. The installer checks its destination file size, but does not parse or change `config.toml`, inspect every ancestor's policy, or override custom size limits. Existing skills elsewhere or enterprise settings may shadow/disable the installed copies. The user must inspect actual discovery after restarting.

Sources: [Codex instruction discovery](https://developers.openai.com/codex/guides/agents-md), [Codex skill locations](https://developers.openai.com/codex/skills).

## Platform and path behavior

The CLI uses Node filesystem APIs, path handling and exclusive file locks, with no shell-specific install commands or symlinks. Windows path layouts are unit-tested; full native Windows and Linux results require running the prepared CI matrix. macOS filesystem behavior is validated locally.

Project references are relative to their containing file, so a checkout can move. Global references are absolute; rerun from the same configuration roots. Moving a global installation or changing environment overrides without reinstalling is unsupported. Symlinked configuration directories and instruction files are deliberately refused rather than followed.

Node 22/24 are CI targets. Minimum Node support does not imply every agent version supports these conventions. Agent cloud environments, sandbox read restrictions, remote home mappings, corporate policy, custom document budgets and future vendor changes need separate validation. This framework does not claim vendor endorsement.
