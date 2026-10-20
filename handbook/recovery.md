# Updates, backups and recovery

An installation's state is `.engineering-standards/` inside the selected home or project. It contains `framework/`, `manifest.json`, a temporary `operation.lock`, and `transactions/`.

The manifest records a schema version, package version, scope, installed agents, file hashes and exact managed instruction blocks. It stores logical target identifiers, not arbitrary destination paths. Target paths are derived from scope and current configuration roots. Do not change those roots between install and recovery.

Before changing files, the CLI validates the entire plan and records before/after snapshots and modes in a private transaction journal. Each file uses a same-directory temporary file, a flush, and a rename. Caught failures restore completed writes if they still match expected content. The transaction remains available for inspection. Empty directories may remain after a failed installation or uninstall; no recursive cleanup is performed.

## Routine rollback

Run `rollback --dry-run` with the original scope, then `rollback`. This targets the newest transaction not already rolled back. A rollback refuses to overwrite later user edits. Each successful rollback permits stepping back one more transaction. Uninstall can be rolled back while its snapshots remain available.

Snapshots are backups, not encrypted archives. They can contain private user instructions. Exclude `transactions/` and `operation.lock` from source control. Backups are retained until you explicitly remove them after reviewing retention and recovery needs. Repeated no-op installations create no new transaction backup.

## Conflicts

If an owned file changed, copy your work to a safe location and review the difference against the journal. Restore the expected managed content only if you intend to relinquish those edits; then rerun the operation. Do not remove or rewrite the manifest to force deletion. User edits outside a managed instruction block are preserved by update and uninstall, but a whole-transaction rollback requires the exact recorded after-state.

Unknown same-named skills are never adopted. Rename or move them yourself only after considering agent discovery and preserving a backup. Empty skill directories are reusable.

## Interrupted process

A process killed before releasing its lock leaves `operation.lock`. The CLI will not guess whether a process is still active. Inspect running processes and the newest journal, preserve a copy, and remove only the stale lock once you are certain no installer is running. Then run `rollback --dry-run`, followed by `rollback`. A pending journal accepts files in either their recorded before or after state, supporting interruption during both installation and rollback.

`doctor` reports a missing/invalid manifest, missing or edited files, override conflicts, active/stale locks and pending transactions. A crash during the first installation can occur before the manifest exists; inspect `transactions/` and use rollback directly.

A crash before the initial journal is fully written makes no target modifications; an orphan `.ges-*.tmp` file may remain. Review such files manually. File flushes and atomic renames are not a guarantee of cross-file atomicity or power-loss durability on every filesystem. Restore from an independent backup if journals are damaged.

Windows ACLs and POSIX ownership/extended attributes are not fully serialized. Existing file permission bits are preserved where the platform supports them. Do not run this installer as a privileged administrator or in directories writable by untrusted users.
