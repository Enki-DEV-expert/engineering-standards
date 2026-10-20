# Optional Claude Code plugin

The standalone CLI is the complete installation path for automatic policy plus skills. The optional plugin distributes the six skills only. Installing it does not activate AGENTS.md or a global CLAUDE.md policy. Use the CLI for that requirement.

## Prepared artifacts

`npm run build` creates:

- `dist/claude-plugin/.claude-plugin/plugin.json`.
- Six `dist/claude-plugin/skills/<name>/SKILL.md` files.
- Copied domain documents, templates and AGENTS.md with plugin-relative references.
- `.claude-plugin/marketplace.json`, with a relative source of `./dist/claude-plugin`.

The plugin has no hooks, commands that execute shell code, MCP servers, external services or automatic permission changes. Skills are namespaced, for example `/global-engineering-standards:engineering-security-standards-check`. The local marketplace name is `enki-engineering-standards`.

## Local validation and trial

After building, the vendor CLI can validate the plugin directory and marketplace manifest with `claude plugin validate`. For a temporary trial, use `claude --plugin-dir /path/to/reviewed-checkout/dist/claude-plugin` inside an isolated home/project. To persistently install a local marketplace, the documented commands are:

```sh
claude plugin marketplace add /path/to/reviewed-checkout
claude plugin install global-engineering-standards@enki-engineering-standards
```

These persistent commands modify the selected Claude configuration and are documentation only; they were not run against the maintainer's real configuration. Avoid enabling both plugin skills and standalone Claude skill copies unless duplicate namespaced availability is intentional.

## Distribution limitation

The marketplace currently references a generated, ignored `dist/` directory. A raw Git checkout without `npm run build` cannot install the plugin. Do not advertise GitHub marketplace installation yet. A future plugin release must ship a complete generated marketplace directory or adopt a reviewed artifact-hosting path. The npm package intentionally ships the standalone CLI; it does not include the generated plugin tree.

Official format sources: [plugin manifests](https://code.claude.com/docs/en/plugins-reference), [marketplaces](https://code.claude.com/docs/en/plugin-marketplaces). See [actual validation results](validation.md) for the exact boundary of testing; schema validation does not establish semantic behavior in a model session.
