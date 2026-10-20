---
name: engineering-security-standards-check
description: Review and improve application security using the Global Engineering Standards. Use for security audits, authentication and authorization reviews, API security, secret management, dependency security, secure application development, and verification of security fixes.
---

# Engineering Security Standards Check

## 1. Purpose

Provide a repeatable, evidence-based security review and secure implementation workflow for software engineering projects.

This skill supports:

- Security audits.
- Secure application development.
- Authentication reviews.
- Authorization reviews.
- API security.
- Database access security.
- Multi-tenant isolation.
- Secret management.
- Dependency security.
- AI application security.
- Cloud and infrastructure security.
- Secure deployment preparation.
- Security regression testing.

The objective is to identify meaningful risks, preserve existing protections, and recommend or implement appropriate mitigations within authorized boundaries.

Never claim that a system is completely secure.

## 2. Global Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary reference:

~/engineering-standards/docs/security.md

Additional references when relevant:

- docs/governance.md
- docs/privacy.md
- docs/architecture.md
- docs/data.md
- docs/ai-and-llm.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Resolve relative references against the engineering-standards repository.

Read relevant documentation before making significant security recommendations.

Apply specialized requirements according to actual project context.

Do not assume every security control is appropriate for every application.

## 3. When to Use This Skill

Use when the user requests:

- A security audit.
- A vulnerability review.
- Authentication improvements.
- Authorization validation.
- Protection against common web attacks.
- Secure API implementation.
- Secret management review.
- Multi-tenant isolation analysis.
- Secure AI agent design.
- Cloud security review.
- Security verification before release.
- Assessment of security-sensitive changes.

Also use during Autonomous Build Mode when implementing significant security-sensitive functionality.

Do not perform intrusive tests merely because this skill is available.

## 4. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default unless the user explicitly authorizes autonomous end-to-end development.

Follow docs/governance.md.

The operating mode affects implementation authority, not required security quality.

Security safeguards remain applicable in both modes.

## 5. Supervised Mode

For an existing application under Supervised Mode:

1. Identify authorized scope.
2. Inspect relevant project files.
3. Determine architecture and trust boundaries.
4. Review existing security controls.
5. Collect evidence.
6. Classify confirmed issues and hypotheses.
7. Assess severity and impact.
8. Recommend proportionate corrections.
9. Document implementation risks.
10. Obtain appropriate approval before significant changes.

A default security audit is read-only.

Do not silently modify production systems.

## 6. Autonomous Build Mode

When explicitly authorized for end-to-end development:

1. Identify security requirements.
2. Plan security controls.
3. Apply secure architecture patterns.
4. Implement authentication and authorization correctly.
5. Protect data and credentials.
6. Add relevant security tests.
7. Run permitted validation.
8. Investigate failures.
9. Correct identified security defects.
10. Repeat checks where appropriate.
11. Continue independent authorized development.
12. Report unresolved security concerns.

Do not request approval for every ordinary local security correction within the approved implementation scope.

Do not weaken controls to accelerate development.

Protected operations still require appropriate authorization.

## 7. Authorization and Safety Boundaries

Before taking action, identify:

- Authorized repository.
- Authorized environment.
- Permitted tools.
- Permitted test methods.
- Protected resources.
- Sensitive data.
- Relevant approval requirements.

Do not assume repository access means authorization to attack or modify deployed services.

Do not bypass sandbox, network or platform restrictions.

Never use this skill to justify unauthorized access.

## 8. Initial Project Reconnaissance

Inspect relevant available information:

- Project structure.
- Languages.
- Frameworks.
- Dependency manifests.
- Configuration files.
- Authentication mechanisms.
- Authorization mechanisms.
- API routes.
- Database access patterns.
- External integrations.
- Deployment configuration.
- Tests.
- Documentation.

Use read-only methods during default audits.

Avoid opening, copying or displaying secret values unnecessarily.

Do not assume a technology from another project is present.

## 9. Security Scope Definition

Identify which areas are relevant.

Possible categories:

- Identity.
- Authentication.
- Authorization.
- Session management.
- API protection.
- Input handling.
- Data isolation.
- Cryptography.
- Secret management.
- File uploads.
- External integrations.
- AI systems.
- Dependencies.
- Cloud infrastructure.
- Mobile security.
- Desktop security.
- Game security.
- Logging.
- Deployment.

Document exclusions and access limitations.

## 10. Threat Modeling

Assess relevant:

- Protected assets.
- Trust boundaries.
- Attack surfaces.
- User roles.
- Privileged operations.
- External data flows.
- Sensitive integrations.
- Threat actors.
- Potential abuse cases.

Use proportionate threat modeling.

Do not fabricate threats without a plausible technical path.

Prioritize threats by credible impact and likelihood.

## 11. Authentication Review

Evaluate:

- Authentication provider.
- Credential handling.
- Password storage.
- Session creation.
- Session expiration.
- Token validation.
- Token revocation.
- Account recovery.
- Multi-factor authentication where relevant.
- Brute-force protections.
- Error information leakage.

Ensure protected operations validate authenticated identity at trusted boundaries.

Do not rely on client-side authentication state as proof of identity.

## 12. Authorization Review

Review server-side authorization.

Check:

- Role permissions.
- Resource ownership.
- Tenant boundaries.
- Privileged endpoints.
- Object-level access.
- Function-level access.
- Background jobs.
- Administrative operations.
- File access.
- Database policies.

Authentication does not replace authorization.

Never trust a client-provided role or owner identifier without appropriate verification.

Test unauthorized access paths using safe and authorized methods.

## 13. Multi-Tenant Security

For multi-tenant systems, assess:

- Tenant identity.
- Server-side tenant scoping.
- Row-level restrictions.
- Tenant-aware cache keys.
- Storage object permissions.
- Background jobs.
- Analytics isolation.
- Search results.
- RAG retrieval filtering.
- Administrative exceptions.

Test cross-tenant isolation where appropriate and authorized.

Do not access another real customer's data to demonstrate a vulnerability.

Use isolated test fixtures when possible.

## 14. API Security

Review:

- Endpoint authentication.
- Resource authorization.
- Input validation.
- Rate limiting.
- Pagination limits.
- Request size limits.
- Error handling.
- CORS configuration.
- Replay protection where relevant.
- Webhook authentication.
- Idempotency for state-changing operations.

Do not assume an endpoint is safe merely because it is undocumented.

## 15. Input Validation

Treat external input as untrusted.

Evaluate:

- Type validation.
- Length limits.
- Allowed values.
- Structured payload validation.
- File validation.
- Numeric bounds.
- Encoding.
- Context-specific output handling.

Validate at trusted boundaries.

Do not rely exclusively on frontend validation.

Avoid generic sanitization approaches that destroy valid data.

## 16. Injection Risks

Evaluate relevant injection categories:

- SQL injection.
- NoSQL injection.
- Command injection.
- Template injection.
- Cross-site scripting.
- Unsafe HTML rendering.
- Path traversal.
- Unsafe deserialization.
- LDAP or other query injection where applicable.

Prefer parameterized queries and safe framework APIs.

Do not concatenate untrusted data into executable commands or queries.

Use contextual encoding where appropriate.

Do not conduct exploitation against unauthorized systems.

## 17. Cross-Site Request Forgery

For browser applications using cookie-based authentication, evaluate CSRF protections.

Consider:

- SameSite cookies.
- Anti-CSRF tokens.
- Origin validation.
- Safe HTTP method semantics.
- Framework-specific protections.

Do not assume CORS alone prevents CSRF.

Apply controls according to the actual authentication architecture.

## 18. Session and Token Security

Review:

- Token lifetime.
- Secure storage.
- Cookie attributes.
- Token audience.
- Token issuer.
- Signature validation.
- Key rotation.
- Refresh token handling.
- Logout behavior.
- Revocation where applicable.

Avoid storing sensitive session tokens in insecure locations.

Never log active credentials.

## 19. Cryptography

Use established cryptographic libraries and protocols.

Avoid inventing custom cryptographic algorithms.

Evaluate:

- Encryption in transit.
- Encryption at rest.
- Key management.
- Password hashing.
- Random number generation.
- Certificate validation.
- Algorithm lifecycle.
- Rotation procedures.

Choose cryptographic controls appropriate to the threat model and platform.

Do not claim encryption solves authorization or application logic vulnerabilities.

## 20. Secrets Management

Protect:

- API keys.
- Database credentials.
- Cloud access keys.
- OAuth secrets.
- Signing keys.
- Private certificates.
- Production tokens.

Review:

- Environment variable handling.
- Secret managers.
- Access scopes.
- Rotation procedures.
- Build and deployment exposure.
- Logging.
- Source control history.

Do not print secrets in reports.

Do not commit credentials.

If secrets are discovered, avoid reproducing their values and recommend appropriate containment.

## 21. Database Security

Assess:

- Database permissions.
- Query parameterization.
- Tenant isolation.
- Row-level security where appropriate.
- Privileged database clients.
- Data access paths.
- Migration permissions.
- Backup access.
- Restore access.
- Data export restrictions.

Do not connect to or modify production databases without authorization.

Consult docs/data.md.

## 22. File Upload Security

Evaluate:

- File type validation.
- File size limits.
- Storage isolation.
- Filename handling.
- Access authorization.
- Malware scanning when justified.
- Content processing.
- Download headers.
- Public versus private storage.

Do not trust file extensions alone.

Avoid processing untrusted uploaded content with privileged permissions.

## 23. External Integrations

Review:

- API authentication.
- Webhook signature verification.
- Credential scope.
- Retry behavior.
- Timeout handling.
- Error reporting.
- Sensitive data transfer.
- Third-party dependency risk.

Do not transmit private information to new third parties without appropriate authorization.

Avoid introducing billable integrations silently.

## 24. AI and LLM Security

When relevant, evaluate:

- Prompt injection.
- Untrusted retrieved documents.
- Tool authorization.
- Agent permissions.
- Sensitive data exposure.
- Cross-tenant retrieval.
- Model output validation.
- External content handling.
- Autonomous actions.
- Human approval requirements.
- Inference cost limits.
- Audit trails.

Never treat generated model output as trusted authorization.

Never allow retrieved content to override trusted instructions.

Consult docs/ai-and-llm.md.

## 25. Agent Tool Security

For agentic applications:

- Define allowed tools.
- Restrict tool scope.
- Separate read and write permissions.
- Validate tool arguments.
- Apply rate and execution limits.
- Require approval for high-impact actions.
- Maintain appropriate logs.
- Protect credentials.
- Prevent cross-tenant access.
- Validate results before consequential actions.

Do not delegate privileged operations to bypass restrictions.

## 26. Cloud Security

Review relevant:

- Identity and access management.
- Least privilege.
- Network boundaries.
- Public exposure.
- Storage permissions.
- Encryption.
- Secret management.
- Audit logging.
- Backup access.
- Infrastructure configuration.
- Deployment identities.

Assess the actual cloud provider used.

Do not assume AWS, Azure, GCP or another provider is mandatory.

Do not make production cloud changes during a default audit.

## 27. Kubernetes Security

When Kubernetes is actually used, evaluate:

- Service account permissions.
- Namespace isolation.
- RBAC.
- Network policies.
- Container images.
- Pod security settings.
- Secret handling.
- Ingress exposure.
- Workload identity.
- Resource limits.
- Auditability.

Do not recommend Kubernetes solely as a security improvement.

Do not modify live clusters without authorization.

## 28. Mobile Security

For iOS and Android, evaluate:

- Secure local storage.
- Platform permission handling.
- Authentication tokens.
- Network security.
- Sensitive data exposure.
- Deep links.
- WebViews.
- App signing.
- Dependency integrity.
- Device-specific threats.

Apply controls appropriate to each platform.

Consult docs/mobile-and-web.md.

## 29. Desktop and Native Security

For desktop and native software, evaluate:

- Local filesystem access.
- Sandboxing.
- OS permissions.
- Update integrity.
- Package signing.
- Native dependencies.
- Privilege boundaries.
- Unsafe native interfaces.
- Local credential storage.

Consult docs/platforms-and-applications.md.

## 30. Game Security

For games, evaluate relevant:

- Server-authoritative logic.
- Multiplayer trust boundaries.
- Anti-cheat considerations.
- In-game economy integrity.
- Save data protection.
- Asset handling.
- Player identity.
- Backend permissions.
- Network protocol validation.

Avoid trusting client-controlled values for sensitive competitive or financial operations.

Consult docs/platforms-and-applications.md.

## 31. Dependency Security

Inspect relevant:

- Dependency versions.
- Known advisories.
- Lockfiles.
- Package provenance.
- Maintenance status.
- Transitive dependencies.
- Build scripts.
- License obligations.
- Supply chain exposure.

Prefer established security advisory sources.

Do not automatically upgrade critical dependencies without compatibility assessment.

Do not run untrusted package installation scripts during a read-only audit.

## 32. Secure Build and CI/CD

Review:

- Build reproducibility.
- Secret handling.
- CI permissions.
- Branch protection.
- Artifact integrity.
- Dependency pinning.
- Security scans.
- Deployment approvals.
- Build provenance.
- Environment separation.

Do not disable existing security checks to make builds pass.

## 33. Logging and Sensitive Data

Review whether logs expose:

- Credentials.
- Session tokens.
- Personal data.
- Private documents.
- Financial information.
- Internal authorization details.

Use appropriate redaction and retention.

Security observability must not introduce unnecessary privacy risks.

Consult docs/observability.md.

## 34. Error Handling

Review:

- Exception handling.
- Public error messages.
- Sensitive stack traces.
- Failure logging.
- Retry behavior.
- Timeout handling.
- Partial failure states.

Prevent unnecessary information disclosure.

Do not hide important failures from operators.

## 35. Business Logic Security

Assess security-sensitive business rules.

Examples:

- Payment amount validation.
- Subscription entitlement checks.
- Insurance claim authorization.
- Inventory ownership.
- Reservation consistency.
- Account balance changes.
- Administrative overrides.
- Game economy transactions.

Enforce critical invariants at trusted boundaries.

Do not assume a passing UI test proves server-side authorization.

## 36. Abuse Prevention

Evaluate relevant:

- Rate limiting.
- Account enumeration.
- Spam controls.
- Automation abuse.
- Resource exhaustion.
- Expensive query protection.
- File upload abuse.
- AI inference abuse.
- Fraud-sensitive workflows.

Choose controls based on realistic abuse scenarios.

Balance security, usability and operational cost.

## 37. Security Testing Strategy

Select tests appropriate to the technology and authorized scope.

Possible approaches:

- Static analysis.
- Dependency vulnerability checks.
- Unit tests.
- Authorization integration tests.
- Input validation tests.
- Security regression tests.
- Configuration reviews.
- Safe dynamic testing.
- Threat-model-based test cases.

Do not perform live penetration testing or aggressive scans without explicit authorization.

Do not claim a test passed unless it was executed.

## 38. Safe Test Execution

Before running security tools:

1. Confirm authorization.
2. Identify target environment.
3. Review possible side effects.
4. Avoid production disruption.
5. Protect sensitive data.
6. Use bounded execution.
7. Record the test method.
8. Record actual results.

Prefer local or isolated test environments.

Avoid uncontrolled fuzzing, load generation or destructive payloads against live services.

## 39. Finding Evidence

For every material issue, document:

- Affected file or component.
- Relevant code or configuration.
- Preconditions.
- Observed behavior.
- Expected secure behavior.
- Supporting evidence.
- Verification method.
- Remaining uncertainty.

Do not fabricate proof.

Avoid exposing exploit-ready secrets or customer data.

## 40. Finding Status

Use appropriate status labels:

- Confirmed.
- Strongly supported.
- Hypothesis.
- Not assessed.
- Resolved.
- Mitigated.
- Accepted risk.

Do not call an issue resolved merely because a code change was proposed.

Revalidation is required before reporting successful remediation.

## 41. Security Severity

Possible severity classifications:

- Critical.
- High.
- Medium.
- Low.
- Informational.

Consider:

- Exploitability.
- Required privileges.
- User interaction.
- Data sensitivity.
- Exposure.
- Potential impact.
- Existing mitigations.
- Reachability.

Avoid severity inflation.

Do not treat every outdated dependency as an exploitable critical vulnerability.

## 42. Confidence Classification

Record confidence separately from severity.

High confidence:

Strong evidence supports the finding.

Medium confidence:

Evidence is meaningful but incomplete.

Low confidence:

The issue remains hypothetical or insufficiently verified.

A high-impact hypothesis is not the same as a confirmed critical vulnerability.

## 43. Security Finding Format

Use the following structure for significant findings.

Finding ID:

[FINDING_ID]

Title:

[FINDING_TITLE]

Category:

[CATEGORY]

Severity:

[SEVERITY]

Confidence:

[CONFIDENCE]

Verification status:

[STATUS]

Affected component:

[COMPONENT]

Evidence:

[EVIDENCE]

Impact:

[IMPACT]

Recommended correction:

[REMEDIATION]

Compatibility considerations:

[COMPATIBILITY]

Testing requirements:

[TESTS]

Approval requirements:

[APPROVAL]

Do not use invented evidence or test results.

## 44. Remediation Planning

For significant security issues:

1. Identify the root cause.
2. Assess affected components.
3. Evaluate compatibility.
4. Select the minimal effective correction.
5. Identify data and operational risks.
6. Define tests.
7. Define rollback or recovery where relevant.
8. Obtain authorization when required.
9. Implement the correction.
10. Revalidate the affected behavior.

Do not rewrite unrelated components.

## 45. Remediation Priorities

Prioritize based on:

- Confirmed risk.
- Exploitability.
- Exposure.
- Impact.
- Affected users.
- Data sensitivity.
- Remediation effort.
- Operational constraints.

Address material confirmed threats before cosmetic improvements.

Do not ignore legitimate low-severity issues indefinitely.

## 46. Autonomous Security Corrections

In Autonomous Build Mode, authorized local corrections may proceed without repeated approval.

Examples:

- Adding missing input validation.
- Improving safe error handling.
- Correcting authorization checks within approved scope.
- Adding security regression tests.
- Fixing insecure local configuration.
- Replacing a vulnerable dependency when compatibility and scope permit.

Do not interpret this permission as authority for destructive production operations or privileged security-policy changes.

Escalate when corrections exceed approved boundaries.

## 47. Protected Security Operations

Require specific approval for:

- Production credential rotation.
- Production access policy changes.
- Disabling live accounts.
- Deleting production data.
- Changing firewall rules in production.
- Modifying cloud IAM roles.
- Disabling live security mechanisms.
- Deploying security changes to production.
- Intrusive testing of live systems.
- Operations outside approved scope.

Follow docs/governance.md.

## 48. Security and Financial Boundaries

Security tools and infrastructure may introduce costs.

Evaluate:

- Paid scanners.
- Managed security services.
- Log ingestion.
- Cloud security products.
- External testing services.
- New infrastructure.

Do not initiate paid commitments automatically.

Use approved free or existing tools when suitable.

Consult docs/cost-engineering.md.

## 49. Privacy During Security Reviews

Security reviews must protect personal information.

Avoid:

- Unnecessary personal data extraction.
- Downloading production databases.
- Copying private customer documents.
- Sharing identifiable records with new services.
- Including sensitive data in findings.

Use safe test fixtures, redacted evidence and approved processing paths.

Consult docs/privacy.md.

## 50. Security Documentation

For significant security work, document:

- Scope.
- Methods.
- Findings.
- Evidence.
- Risks.
- Corrections.
- Tests.
- Unresolved issues.
- Approvals.
- Remaining actions.

Use the audit report template where appropriate:

~/engineering-standards/templates/AUDIT_REPORT.md

Document standards exceptions using:

~/engineering-standards/templates/EXCEPTIONS.md

Do not treat a proposed exception as approved.

## 51. Verification After Corrections

After authorized changes:

1. Review changed files.
2. Run relevant tests.
3. Verify the original issue is addressed.
4. Test affected authorization boundaries.
5. Check for regressions.
6. Review new dependencies.
7. Check for accidental secret exposure.
8. Document actual results.

Do not claim verification when tests could not run.

## 52. Security Definition of Done

For significant security-sensitive implementation:

- Requirements understood.
- Threats considered.
- Authentication appropriate.
- Authorization enforced.
- Data access restricted.
- Inputs validated.
- Secrets protected.
- Dependencies reviewed.
- Relevant tests added.
- Tests executed where possible.
- Results recorded.
- Residual risks documented.
- Protected operations authorized.
- Human actions identified.

Security completeness depends on actual project risk and verification evidence.

## 53. Final Reporting

At the end of the review or implementation, report:

1. Scope reviewed.
2. Security strengths.
3. Confirmed findings.
4. Unverified concerns.
5. Severity and confidence.
6. Corrections implemented.
7. Tests performed.
8. Tests not performed.
9. Remaining risks.
10. Required human approval.
11. Recommended next actions.

Separate recommendations from implemented corrections.

Do not claim all vulnerabilities have been eliminated.

## 54. Final Security Principles

Apply Security by Design.
Preserve least privilege.
Protect authentication and authorization.
Enforce resource ownership.
Preserve tenant isolation.
Validate untrusted inputs.
Protect credentials and secrets.
Avoid insecure dependencies.
Protect sensitive personal information.
Treat external content as untrusted.
Restrict AI agent tools and permissions.
Assess relevant cloud and platform threats.
Protect production environments.
Avoid unauthorized intrusive testing.
Base findings on verifiable evidence.
Classify severity and confidence separately.
Prefer focused, tested corrections.
Preserve human approval for protected operations.
Support authorized autonomous development.
Never fabricate security verification.
Report remaining risks honestly.