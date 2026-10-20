# Installer security and privacy review

Scope: local CLI source, bundled standards, tests, package boundary and prepared workflows. Procedures applied: engineering-safe-implementation, engineering-security-standards-check and engineering-architecture-review. This is an implementation review, not independent penetration testing or certification.

## Assets and trust boundaries

Assets are existing agent instructions/skills, private configuration, project files, installation state and release credentials. Inputs include CLI arguments, scope/environment paths, bundled content, local manifests/journals and existing files. The CLI is intentionally offline and executes no external programs. Only the developer build/test and future release workflows use external tools.

The package and current OS user are trusted. Existing instructions may be sensitive. Other users must not have write access to the installation tree. An attacker controlling the same account or replacing the executable/package can bypass a local ownership scheme; checksums do not authenticate a maliciously replaced baseline.

## Controls and evidence

| Threat | Implemented mitigation | Verification |
| --- | --- | --- |
| Existing instructions lost | Append owned blocks; preserve other bytes, BOM and line endings | Preservation and uninstall tests |
| Unrelated skills overwritten | Refuse populated same-named directories | Skill conflict tests |
| Edited managed content deleted | Verify hashes/blocks before the whole operation | Update/uninstall refusal tests |
| Path traversal through state | Logical target allowlist; reject unknown keys | Malformed manifest/journal tests |
| Link redirection | Inspect path components; reject symlinks and hard-linked files | Link refusal tests |
| Interrupted multi-file write | Preflight, before/after journal, rollback, exclusive lock | Failure-injection and recovery tests |
| Later edits overwritten by recovery | Exact snapshot comparisons | Rollback conflict tests |
| Credentials leaked in output | Output logical change names, never snapshot contents | Source review; no telemetry |
| Accidental publication | Manual workflow, disabled repository-variable gate, protected environment | Workflow review; never dispatched |
| Dependency execution | Zero runtime dependencies; locked development tools; ignore install scripts in CI | Lockfile and package review |

## Residual findings and limitations

- **Medium, local trust constraint:** path inspection and rename are not a fully race-free filesystem capability boundary. Concurrent malicious directory replacement can race checks. Mitigation: user-owned trusted directories, no administrator execution, no world-writable destinations; installer locks coordinate this CLI only. Hostile multi-user directory support is not claimed.
- **Medium, recovery durability constraint:** per-file fsync/rename does not provide a single atomic transaction across all files or guarantee journal durability after power loss. Abrupt termination can leave a lock or temporary file. Mitigation: retained journals, explicit recovery and independent backups for important configuration.
- **Medium, privacy:** backup journals contain prior user instruction content in base64, not encryption. POSIX permissions restrict newly created files/directories; Windows ACLs are inherited. Mitigation: source-control exclusions, local access restrictions and manual retention review. Existing state directories may have broader pre-existing permissions and must be reviewed by the operator.
- **Medium, launch prerequisite:** private vulnerability and conduct reporting contacts are not configured by this work. Enable and test private GitHub reporting and supply a conduct contact before launch.
- **Low, semantic integration:** agent discovery/preference, instruction budgets, corporate restrictions and conflicting user policies can limit activation. `doctor` does not prove model compliance. Use an isolated authenticated session before claiming full runtime compatibility.
- **Low, supply chain:** pinning reduces drift but does not eliminate compromise. Verify action pins, package contents, dependency advisories and npm provenance at release time.

These are reported constraints, not self-approved policy exceptions. The maintainer must review them before publication. No production operations, financial commitments, sensitive external processing, Git commits, pushes or releases are part of this preparation. No command targeted live agent configuration for modification; the exact preservation evidence and metadata limitations are recorded in [validation](validation.md).

## Content and policy review

All twelve standards and six skills were included in inventory, heading/reference, content-hash and sensitive-pattern checks. The implementation-specific review focused on governance, filesystem/CLI standards, architecture, security, privacy, quality, costs and operational recovery. Original text is unchanged. Fixed home-path examples remain in canonical skills/templates to preserve their behavior; generated copies adapt them to the real destination.

Generic domain documents sometimes say to obtain approval before significant work, while governance and skills define prior scoped autonomous authorization. This task has explicit local autonomous authorization; protected publication and production actions remain unapproved. The installer neither rewrites those policies nor attempts to resolve semantic conflicts with a user's other instructions.
