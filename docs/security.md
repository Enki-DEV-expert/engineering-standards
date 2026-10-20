
# Global Application Security Standards

## 1. Mission

Design, develop, operate and maintain secure production-grade applications.

Apply security by design, privacy by design, defense in depth, least privilege, secure defaults and Zero Trust principles where applicable.

These standards apply to web, iOS, Android, backend services, databases, APIs, AI systems and infrastructure.

Security is a mandatory engineering requirement.

No system can be guaranteed completely attack-proof. The objective is to prevent foreseeable attacks, reduce exploitable vulnerabilities, limit damage, detect incidents and support rapid recovery.

## 2. Security Frameworks

Apply the relevant requirements from:

- OWASP Application Security Verification Standard (ASVS) 5.0.
- OWASP API Security Top 10.
- OWASP Mobile Application Security Verification Standard (MASVS).
- OWASP LLM Top 10 for applications using AI.
- NIST Secure Software Development Framework (SSDF).
- Applicable privacy and data protection legislation.

Select security controls according to actual risks, data sensitivity and regulatory requirements.

For high-risk applications, evaluate an appropriately demanding ASVS verification level and document the chosen requirements.

Never claim certification or compliance without supporting evidence.

## 3. Threat Modeling

Before developing or significantly modifying security-sensitive functionality:

1. Identify assets requiring protection.
2. Identify actors and trust boundaries.
3. Map data flows and external dependencies.
4. Identify credible attack scenarios.
5. Estimate likelihood and impact.
6. Define preventive, detective and recovery controls.
7. Document residual risks.
8. Define security acceptance criteria.

Use recognized threat-modeling methods such as STRIDE where appropriate.

Require human approval for material residual risks.

## 4. Authentication

Use proven authentication frameworks and identity providers.

Requirements:

- Secure password hashing when passwords are managed directly.
- MFA or passkeys when appropriate to the risk.
- Protection against credential stuffing and brute-force attacks.
- Secure password reset and account recovery.
- Session expiration and revocation.
- Secure handling of authentication tokens.
- Protection against session fixation and hijacking.
- Authentication event monitoring.
- Additional verification for sensitive account operations.

Never implement custom cryptographic authentication protocols without a compelling, reviewed justification.

## 5. Authorization

Authentication does not imply permission to access a resource.

Requirements:

- Enforce authorization on the server.
- Validate ownership or permitted access for every protected object.
- Apply least privilege.
- Deny access by default.
- Validate roles and permissions at every relevant boundary.
- Protect administrative operations.
- Enforce organization and tenant isolation.
- Test horizontal and vertical privilege escalation.
- Prevent insecure direct object references.

Never rely solely on frontend permission checks.

## 6. API Security

Protect all relevant API entry points.

Requirements:

- Validate inputs using explicit schemas.
- Enforce authentication and authorization.
- Apply appropriate rate limits and quotas.
- Limit request sizes and resource consumption.
- Prevent injection and unsafe query construction.
- Protect against SSRF where external requests are supported.
- Handle CORS deliberately.
- Use CSRF protection where applicable.
- Use secure error responses.
- Avoid sensitive data in API responses.
- Apply timeouts and bounded retries.
- Validate webhook authenticity and replay protection.
- Use idempotency for operations vulnerable to duplication.

Never expose internal diagnostic details or secrets to unauthorized clients.

## 7. Web Application Security

Evaluate:

- Cross-site scripting.
- Cross-site request forgery.
- Injection vulnerabilities.
- Insecure redirects.
- Unsafe file uploads.
- Clickjacking.
- Content Security Policy.
- Security-related HTTP headers.
- Secure cookies.
- Session handling.
- Browser storage of sensitive data.
- Third-party scripts and supply-chain exposure.

Prefer well-maintained framework security mechanisms over custom implementations.

## 8. iOS and Android Security

Follow applicable OWASP MASVS requirements.

Requirements:

- Store sensitive credentials using iOS Keychain or Android Keystore-backed mechanisms where appropriate.
- Never embed privileged backend secrets in mobile applications.
- Use secure network communication.
- Validate authentication and authorization on the backend.
- Protect sensitive local storage.
- Minimize permissions.
- Handle lost, stolen and compromised devices appropriately.
- Consider device integrity and application attestation where justified.
- Protect deep links and inter-application communication.
- Validate incoming push-notification data.
- Review WebView usage and JavaScript bridges.
- Apply certificate pinning only when justified and with a safe rotation and recovery strategy.
- Consider older mobile app versions when evolving backend contracts.

Never assume that obfuscation or client-side protections can replace server-side security.

## 9. Database Security

Requirements:

- Apply least-privilege database roles.
- Restrict direct database exposure.
- Enforce resource and tenant isolation.
- Validate referential integrity.
- Use parameterized queries.
- Protect privileged operations.
- Audit sensitive schema functions.
- Encrypt connections.
- Protect database backups.
- Test restoration.
- Review database logs for sensitive data exposure.

For Supabase specifically:

- Enable and verify RLS on applicable exposed tables.
- Review SELECT, INSERT, UPDATE and DELETE policies.
- Review SQL grants and schema privileges.
- Audit SECURITY DEFINER functions.
- Protect service_role and other privileged credentials.
- Verify Storage bucket and object access.
- Review Realtime authorization.
- Secure Edge Functions.
- Validate multi-user and multi-tenant isolation.
- Test policies using accounts with different permissions.

Never assume that RLS alone guarantees complete database security.

## 10. Secrets and Cryptography

Requirements:

- Never hardcode secrets.
- Never commit credentials to Git.
- Never expose privileged secrets to browser or mobile clients.
- Never include secrets in logs, documentation or AI prompts.
- Use appropriate secret-management services.
- Rotate and revoke compromised credentials.
- Apply least privilege to machine credentials.
- Use established cryptographic libraries.
- Use modern TLS configurations.
- Encrypt sensitive information at rest where appropriate.
- Establish secure key lifecycle management.
- Protect signing keys, encryption keys and recovery credentials.

Never invent custom encryption algorithms.

## 11. Payments and Financial Operations

Where payments are implemented:

- Use established payment providers.
- Minimize exposure to payment-card information.
- Do not handle raw card data unless explicitly required and supported by appropriate PCI DSS controls.
- Validate payment-provider webhooks.
- Prevent replay attacks and duplicate processing.
- Use idempotency keys.
- Verify payment status on trusted systems.
- Separate payment authorization from fulfillment.
- Protect refunds and administrative financial operations.
- Maintain appropriate audit trails.
- Test partial failures and reconciliation procedures.

Never trust client-side payment confirmation as definitive evidence of successful payment.

## 12. AI and Agent Security

For AI-powered applications:

- Treat external documents, emails, webpages and tool responses as untrusted input.
- Defend against prompt injection.
- Restrict agent tool permissions.
- Validate model-generated outputs before using them in sensitive operations.
- Prevent data exfiltration through tools.
- Limit external service access.
- Require approval for irreversible or high-impact operations.
- Apply quotas and cost controls.
- Protect personal information and confidential business data.
- Evaluate model behavior using representative test cases.
- Log relevant operational metadata without exposing sensitive content.

Never grant an AI agent unrestricted production access by default.

## 13. Dependency and Supply Chain Security

Requirements:

- Review new dependencies.
- Prefer maintained and reputable packages.
- Use dependency locking and reproducible builds where supported.
- Review licenses.
- Detect known vulnerabilities.
- Scan for exposed secrets.
- Protect CI/CD credentials.
- Restrict package publishing privileges.
- Use trusted build and deployment workflows.
- Investigate unexpected package behavior.
- Apply security updates according to risk and compatibility.

Never introduce unknown packages simply because an AI-generated solution recommends them.

## 14. Infrastructure Security

Requirements:

- Apply least privilege to infrastructure identities.
- Protect administrative interfaces.
- Restrict unnecessary public exposure.
- Use secure network and firewall configurations.
- Separate development, staging and production appropriately.
- Protect infrastructure configuration and deployment credentials.
- Monitor resource exhaustion.
- Implement relevant DDoS mitigations.
- Apply secure defaults.
- Maintain tested backup and recovery procedures.
- Document infrastructure changes.
- Review third-party integrations.

## 15. Logging and Monitoring

Implement risk-appropriate:

- Structured security logs.
- Authentication and authorization event monitoring.
- Administrative activity tracking.
- API abuse detection.
- Suspicious traffic alerts.
- Dependency vulnerability alerts.
- Infrastructure monitoring.
- Incident escalation.
- Data-access audit trails.
- Retention and access policies for logs.

Never record passwords, access tokens or other secrets in logs.

Minimize personal data in telemetry.

## 16. Incident Response

Establish procedures for:

1. Detection.
2. Classification.
3. Containment.
4. Investigation.
5. Credential revocation when required.
6. Recovery.
7. Legal and regulatory assessment.
8. Notification when legally required.
9. Post-incident analysis.
10. Corrective actions.

For personal data breaches, evaluate notification obligations under applicable law, including GDPR Articles 33 and 34 where relevant.

Do not assume every security incident automatically requires notification within 72 hours.

## 17. Security Verification

For significant security-sensitive changes:

- Perform relevant static analysis.
- Evaluate dependency vulnerabilities.
- Run secret scanning.
- Test authentication.
- Test authorization.
- Test tenant isolation.
- Test relevant API abuse scenarios.
- Review cryptographic usage.
- Verify configuration and infrastructure permissions.
- Validate security-related regressions.
- Perform dynamic testing and authorized penetration testing where warranted.

Use independent review for high-risk systems when justified.

Never claim a security test passed without executing it.

## 18. Release Security Gates

Before production release, verify:

- Applicable security requirements are documented.
- Critical security findings are resolved or subject to explicitly approved risk handling.
- Relevant authorization tests pass.
- Secrets are protected.
- Dependency risks are reviewed.
- Security-sensitive configurations are verified.
- Backups and recovery procedures are available.
- Monitoring and incident response procedures exist.
- Residual risks are documented.
- Required human approvals are complete.

A successful build alone is not evidence of security.

## 19. Change Management

Before significant security-related changes:

1. Inspect current functionality.
2. Identify affected security boundaries.
3. Explain risks and proposed mitigations.
4. Evaluate backward compatibility.
5. Propose tests and rollback procedures.
6. Obtain explicit approval.
7. Implement only the approved scope.
8. Verify the results.
9. Report unresolved risks.

Stop and request approval if unexpected risks or changes of scope arise.

## 20. Final Security Principles

Assume breach.
Verify explicitly.
Apply least privilege.
Minimize attack surfaces.
Protect data at every boundary.
Never trust client-side authorization.
Never expose privileged secrets.
Validate with evidence.
Monitor continuously.
Prepare for recovery.
Never weaken security silently.