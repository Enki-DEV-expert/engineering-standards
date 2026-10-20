---
name: engineering-privacy-check
description: Review and improve software privacy and data protection using the Global Engineering Standards. Use for GDPR and privacy assessments, personal data mapping, retention, consent, data subject rights, third-party processors, international transfers, AI data handling, privacy-by-design implementation, and verification of privacy controls.
---

# Engineering Privacy Check

## 1. Purpose

Provide a systematic, evidence-based privacy and personal data protection review for software engineering projects.

This skill supports:

- Privacy audits.
- Privacy by Design.
- Privacy by Default.
- GDPR and applicable data protection requirements.
- Personal data identification.
- Data flow mapping.
- Data minimization.
- Data retention.
- Data deletion.
- Data subject rights.
- Third-party processor assessments.
- International data transfers.
- Secure personal data handling.
- AI and LLM privacy.
- Cloud privacy architecture.
- Mobile and desktop privacy.
- Privacy testing.
- Privacy incident prevention.

The objective is to identify privacy risks, implement appropriate technical controls, and document unresolved legal or operational dependencies.

Do not claim that a software application is legally compliant solely because technical privacy controls exist.

## 2. Global Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary reference:

~/engineering-standards/docs/privacy.md

Additional references when relevant:

- docs/governance.md
- docs/security.md
- docs/architecture.md
- docs/data.md
- docs/ai-and-llm.md
- docs/cost-engineering.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Resolve relative references against the engineering-standards repository.

Apply relevant standards according to actual project requirements.

Do not load unrelated documentation unnecessarily.

## 3. When to Use This Skill

Use when the project involves:

- Personal data collection.
- User accounts.
- Authentication information.
- Customer records.
- Employee information.
- Health-related data.
- Financial information.
- Location information.
- Analytics and tracking.
- Cookies and similar technologies.
- Third-party integrations.
- Cloud data processing.
- AI model interactions involving user information.
- Document processing.
- User-generated content.
- Data export or deletion.
- Regulatory or privacy reviews.

Also use before introducing new personal data processing activities.

Do not assume that an application has no privacy obligations merely because it does not use a traditional database.

## 4. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires explicit authorization.

Both modes must preserve applicable privacy and data protection standards.

Consult docs/governance.md.

The operating mode changes implementation autonomy, not legal obligations or privacy safeguards.

## 5. Supervised Mode

For an existing application:

1. Identify the authorized scope.
2. Inspect relevant implementation and documentation.
3. Identify personal data flows.
4. Review current privacy controls.
5. Identify confirmed gaps.
6. Document uncertainties.
7. Evaluate risks.
8. Recommend proportionate improvements.
9. Identify legal or organizational decisions.
10. Request approval before significant changes.

A default audit of an existing production application is read-only.

Do not access or export production personal data unnecessarily.

Do not modify production retention policies or delete records without appropriate authorization.

## 6. Autonomous Build Mode

When explicitly authorized to develop a complete application:

1. Identify expected personal data processing.
2. Minimize collection.
3. Define appropriate data access boundaries.
4. Design privacy-aware architecture.
5. Implement necessary technical protections.
6. Configure suitable retention mechanisms.
7. Support relevant user rights.
8. Restrict third-party data disclosure.
9. Implement safe logging.
10. Add relevant privacy tests.
11. Validate authorized functionality.
12. Correct identified defects within scope.
13. Continue independent authorized development.
14. Document unresolved privacy decisions.
15. Include required human actions in the final handoff.

Do not request approval for every ordinary local implementation decision.

Do not make unsupported assumptions about legal bases, retention periods or consent requirements.

Protected operations still require appropriate human authorization.

## 7. Privacy Engineering Principles

Apply:

1. Lawfulness, fairness and transparency.
2. Purpose limitation.
3. Data minimization.
4. Accuracy.
5. Storage limitation.
6. Integrity and confidentiality.
7. Accountability.
8. Privacy by Design.
9. Privacy by Default.
10. Appropriate user control.
11. Data lifecycle management.
12. Risk-based safeguards.

Apply legal principles where relevant to the processing and jurisdiction.

Do not assume one country's rules apply identically worldwide.

## 8. Scope and Jurisdiction

Identify:

- Application purpose.
- Data controller or responsible organization.
- Potential processors.
- User locations.
- Processing locations.
- Relevant jurisdictions.
- Data categories.
- Processing purposes.
- Existing contractual requirements.

Record verified information.

Distinguish legal obligations from technical recommendations.

Do not invent controller identities or legal responsibilities.

## 9. Personal Data Inventory

Identify personal information processed by the application.

Potential categories include:

- Name.
- Email address.
- Telephone number.
- Account identifiers.
- IP addresses.
- Device identifiers.
- Online identifiers.
- Location data.
- Payment-related information.
- Employment records.
- Health information.
- Uploaded documents.
- User-generated content.
- Behavioral analytics.
- Customer support interactions.

Determine whether information is personal data in its actual context.

Do not assume pseudonymous identifiers are automatically anonymous.

## 10. Data Classification

Classify relevant data.

Possible categories:

- Public.
- Internal.
- Confidential.
- Personal.
- Sensitive personal.
- Restricted.
- Regulated.

Classification must reflect the project's actual context.

Apply stricter controls where processing involves sensitive information.

Avoid unnecessary duplication of sensitive records.

## 11. Data Flow Mapping

Identify:

- Data collection points.
- User interfaces.
- Backend endpoints.
- Authentication services.
- Databases.
- File storage.
- Logs.
- Analytics.
- External APIs.
- Cloud providers.
- AI services.
- Backups.
- Exports.

Document where personal data is transmitted, processed and retained.

Use diagrams when they materially improve understanding.

Do not assume a third-party service processes data only in the region where its API endpoint is located.

## 12. Processing Purposes

For each processing activity, document:

- Data categories.
- Purpose.
- Responsible organization.
- Recipients.
- Retention.
- Security controls.
- Applicable legal basis.
- Relevant user rights.

Do not collect personal data without a legitimate and defined purpose.

Avoid reusing collected data for unrelated purposes without appropriate assessment.

## 13. Legal Basis Assessment

Where GDPR applies, identify a suitable lawful basis for each processing purpose.

Possible legal bases include:

- Consent.
- Contractual necessity.
- Legal obligation.
- Vital interests.
- Public task.
- Legitimate interests.

Do not assume consent is always required or always the appropriate basis.

Do not invent a legal basis.

Flag unresolved determinations for the authorized organization or qualified legal reviewer.

Special-category data may require additional conditions beyond an Article 6 lawful basis.

## 14. Consent Management

When consent is the appropriate legal basis:

- Use clear and specific requests.
- Avoid misleading interfaces.
- Do not preselect consent unnecessarily.
- Record valid consent where required.
- Support withdrawal.
- Respect the consequences of withdrawal.
- Distinguish necessary processing from optional activities.

Do not use a consent banner as a substitute for lawful processing design.

Cookie and tracking consent requirements vary by jurisdiction and technology.

## 15. Data Minimization

Collect only information needed for defined purposes.

Evaluate:

- Mandatory fields.
- Optional fields.
- Duplicate collection.
- Excessive metadata.
- Unnecessary identifiers.
- Uploaded file contents.
- Diagnostic logs.
- Analytics events.
- Model prompts.

Prefer minimal datasets.

Avoid requesting additional personal information merely because it may be useful someday.

## 16. Privacy by Default

Default settings should minimize unnecessary exposure.

Evaluate:

- Profile visibility.
- Public sharing.
- Analytics.
- Advertising tracking.
- Location access.
- Contact discovery.
- Notifications.
- Data retention.
- Third-party sharing.
- AI training use.

Choose privacy-protective defaults where appropriate.

Do not enable optional personal data sharing silently.

## 17. Data Accuracy

Support appropriate mechanisms for:

- Correcting inaccurate records.
- Updating relevant account information.
- Validating critical inputs.
- Preventing contradictory records.
- Tracking authorized changes.
- Avoiding stale derived information.

Do not automatically overwrite legally significant records without preserving required integrity or auditability.

## 18. Data Retention

Evaluate retention per data category and processing purpose.

Document:

- Required retention.
- Legal obligations.
- Operational needs.
- Backup retention.
- Log retention.
- Archive retention.
- Deletion triggers.
- Review requirements.

Do not invent retention periods.

Do not retain personal data indefinitely without justification.

Do not delete records subject to valid preservation obligations.

## 19. Deletion and Erasure

Implement relevant deletion workflows.

Consider:

- Primary database records.
- Object storage.
- Search indexes.
- Analytics copies.
- Caches.
- Background jobs.
- External processors.
- Backups.
- Derived datasets.

Respect applicable exceptions and preservation obligations.

Do not promise immediate deletion from systems that cannot technically support it.

Avoid destructive production operations without authorization.

## 20. Data Subject Rights

Where applicable, evaluate support for:

- Access.
- Rectification.
- Erasure.
- Restriction.
- Portability.
- Objection.
- Withdrawal of consent.
- Rights related to automated decision-making.

Rights may depend on legal basis, processing context and applicable exceptions.

Verify requester identity proportionately before disclosing or changing personal data.

Escalate unresolved legal decisions.

## 21. Data Access Requests

Review data export and access workflows.

Requirements may include:

- Secure requester verification.
- Authorized data retrieval.
- Appropriate data scope.
- Third-party privacy protection.
- Structured export where required.
- Secure delivery.
- Request tracking.

Do not expose another person's records in a data access response.

Avoid logging exported personal data unnecessarily.

## 22. Data Portability

Where applicable:

- Identify eligible data.
- Define suitable formats.
- Preserve structural meaning.
- Protect export endpoints.
- Verify requester authorization.
- Limit unnecessary metadata.

Do not assume every stored or inferred record is legally portable.

## 23. Third-Party Processors

For each relevant provider, assess:

- Processing purpose.
- Data categories.
- Contractual arrangements.
- Subprocessors.
- Security safeguards.
- Retention.
- Processing locations.
- International transfers.
- Deletion arrangements.
- Breach notification obligations.

Do not assume a provider is compliant merely because it advertises GDPR support.

Document unresolved contractual requirements.

## 24. International Data Transfers

Identify transfers to countries outside the relevant jurisdiction.

Consider:

- Hosting regions.
- Support access.
- Remote administration.
- Cloud subprocessors.
- Logging platforms.
- AI inference providers.
- Backup locations.
- Cross-region replication.

Where required, assess appropriate transfer mechanisms and safeguards.

Do not claim an international transfer is lawful without the necessary factual and legal assessment.

## 25. Cloud Privacy

Assess:

- Data residency.
- Tenant isolation.
- Access permissions.
- Storage configuration.
- Backup regions.
- Replication.
- Logging.
- Support access.
- Subprocessor chains.
- Encryption.
- Retention controls.

Evaluate actual provider capabilities and contracts.

Do not assume AWS, Azure, GCP, Supabase, Firebase or another platform automatically guarantees compliance.

## 26. Database Privacy

Review:

- Access authorization.
- Tenant isolation.
- Personal data schemas.
- Data minimization.
- Retention mechanisms.
- Exports.
- Backups.
- Audit trails.
- Sensitive-field handling.
- Deletion propagation.

Use appropriate least-privilege database access.

Never use broad production exports merely to perform a routine privacy review.

Consult docs/data.md.

## 27. Authentication and Identity Privacy

Evaluate:

- Account registration fields.
- Identity verification.
- Session identifiers.
- Account recovery.
- Authentication logs.
- Device information.
- Account deletion.
- Identity-provider sharing.

Protect account-related personal information.

Do not expose user existence unnecessarily through public authentication responses.

Apply relevant security controls.

## 28. Application Logging Privacy

Review logs for:

- Personal identifiers.
- Email addresses.
- Authentication tokens.
- Request bodies.
- Uploaded content.
- Financial records.
- Health information.
- Location information.
- AI prompts and responses.

Prefer minimal, structured and redacted telemetry.

Apply retention limits and access controls.

Do not sacrifice necessary security auditability without evaluating alternatives.

Consult docs/observability.md.

## 29. Analytics and Tracking

Evaluate:

- Analytics purposes.
- Event payloads.
- User identifiers.
- Device identifiers.
- Cookies.
- SDK behavior.
- Third-party recipients.
- Consent obligations.
- Retention.
- Profiling.

Prefer privacy-preserving measurement where feasible.

Do not enable additional tracking solely because a library makes it easy.

## 30. Cookies and Similar Technologies

For web and mobile environments, assess relevant:

- Cookies.
- Local storage.
- SDK identifiers.
- Fingerprinting.
- Advertising identifiers.
- Similar tracking mechanisms.

Determine applicable legal and consent requirements.

Do not assume all cookies require consent or all analytics are exempt.

Record the actual technologies and purposes.

## 31. Mobile Application Privacy

For iOS and Android, evaluate:

- Location permissions.
- Camera permissions.
- Microphone permissions.
- Contact access.
- Photo access.
- Device identifiers.
- Push notification data.
- Local storage.
- Background collection.
- SDK privacy behavior.
- Platform disclosures.

Request permissions only when needed.

Avoid collecting device information unrelated to required functionality.

Consult docs/mobile-and-web.md.

## 32. Desktop and Native Privacy

For macOS, Windows, Linux and native applications, assess:

- Filesystem permissions.
- Local databases.
- Credential storage.
- Update telemetry.
- Crash reports.
- Background processing.
- Device identifiers.
- Cloud synchronization.
- User-generated files.

Do not scan unrelated private files merely because the application has filesystem access.

Consult docs/platforms-and-applications.md.

## 33. Game Privacy

For game applications, assess:

- Player identifiers.
- Multiplayer communications.
- Voice and chat data.
- Behavioral analytics.
- In-game purchases.
- Account linking.
- Anti-cheat telemetry.
- Community moderation.
- Child-related processing.
- Cross-platform accounts.

Apply relevant age-related and jurisdiction-specific safeguards.

Do not assume all players are adults.

Consult docs/platforms-and-applications.md.

## 34. Children's Data

If the application targets or is likely to be used by children:

- Identify applicable age-related requirements.
- Assess parental authorization rules where relevant.
- Minimize collection.
- Review default visibility.
- Limit profiling and tracking.
- Evaluate communications and moderation.
- Apply appropriate protection measures.

Requirements vary by jurisdiction, service and processing context.

Escalate unresolved legal requirements.

Do not invent a universal age threshold.

## 35. Sensitive and Special-Category Data

Identify processing involving potentially sensitive information.

Examples may include:

- Health information.
- Biometric information.
- Genetic information.
- Religious beliefs.
- Political opinions.
- Sexual orientation.
- Other protected categories under applicable law.

Apply additional restrictions where required.

Assess whether processing is necessary and legally supported.

Do not send such data to external AI providers without appropriate authorization and safeguards.

## 36. Financial Information

When financial information is processed:

- Minimize collected details.
- Restrict access.
- Protect transaction records.
- Avoid sensitive logging.
- Evaluate payment provider responsibilities.
- Apply relevant retention and legal obligations.

Do not store full payment credentials unnecessarily.

Use suitable regulated payment services where appropriate.

## 37. AI and LLM Privacy

For AI-enabled applications, assess:

- Prompt content.
- Retrieved documents.
- Model responses.
- Data retention by providers.
- Model training policies.
- User identifiers.
- Personal data in vector databases.
- Third-party processing.
- Cross-border transfers.
- Tool output exposure.
- Audit logging.

Do not assume external models provide private or zero-retention processing by default.

Verify the relevant service configuration and contractual commitments.

Consult docs/ai-and-llm.md.

## 38. RAG Privacy

For Retrieval-Augmented Generation systems:

- Enforce document-level authorization.
- Apply tenant filtering.
- Protect private embeddings and metadata.
- Limit retrieved personal information.
- Validate document access.
- Prevent cross-user retrieval.
- Review vector store retention.
- Support deletion propagation where required.

A correct semantic match does not establish authorization.

Never expose restricted documents merely because they were retrieved.

## 39. Agentic AI Privacy

For systems using autonomous AI agents:

- Restrict available tools.
- Limit data access.
- Respect user authorization.
- Define external communication permissions.
- Protect context windows.
- Prevent unauthorized information sharing.
- Bound execution and retention.
- Validate consequential actions.
- Preserve appropriate audit evidence.

Do not treat an AI agent as a lawful basis for processing personal data.

Do not allow retrieved content to expand agent permissions.

## 40. AI Training and Data Reuse

Determine whether personal data is:

- Used for inference.
- Stored in logs.
- Used for evaluation.
- Used for fine-tuning.
- Used for model training.
- Shared with subprocessors.

These uses may have distinct purposes and legal implications.

Do not assume inference authorization also permits training.

Do not enable personal data reuse for training silently.

## 41. Automated Decisions and Profiling

If the application makes or supports consequential decisions about individuals:

- Identify decision purpose.
- Assess degree of automation.
- Determine human involvement.
- Review explainability.
- Evaluate discrimination and accuracy risks.
- Identify applicable rights.
- Maintain suitable records.
- Review necessary legal safeguards.

Do not assume the presence of a human button automatically constitutes meaningful human oversight.

Escalate unresolved legal and regulatory questions.

## 42. Data Protection Impact Assessments

Evaluate whether processing may require a Data Protection Impact Assessment or equivalent review.

Potential indicators include:

- Large-scale sensitive processing.
- Systematic monitoring.
- High-risk profiling.
- Novel technologies with substantial privacy risk.
- Significant effects on individuals.

A DPIA requirement depends on applicable law and the actual processing.

Document the screening rationale.

Do not claim that a DPIA has been completed merely because a checklist was generated.

## 43. Privacy Threat Modeling

Assess credible privacy risks.

Possible concerns:

- Unauthorized disclosure.
- Excessive collection.
- Unnecessary retention.
- Unexpected data reuse.
- Cross-tenant data access.
- Third-party leakage.
- Re-identification.
- Overly broad analytics.
- Uncontrolled AI context sharing.

Evaluate likelihood, impact and existing controls.

Avoid speculative risk inflation.

## 44. Privacy-Safe Development Data

Prefer:

- Synthetic records.
- Anonymized datasets where genuinely anonymous.
- Minimal fixtures.
- Controlled test accounts.
- Redacted examples.

Do not copy production personal data into local development environments without an authorized and lawful process.

Pseudonymization alone does not necessarily remove privacy obligations.

## 45. Privacy-Safe Testing

Select appropriate validation methods:

- Data minimization tests.
- Access control tests.
- Tenant isolation tests.
- Export authorization tests.
- Deletion workflow tests.
- Retention tests.
- Logging redaction tests.
- Consent state tests.
- External integration tests with safe fixtures.

Execute only authorized tests.

Avoid destructive tests against production data.

Do not fabricate passing results.

## 46. Retention and Deletion Testing

Where relevant, verify:

- Retention triggers.
- Deletion scheduling.
- Database cleanup.
- Storage object cleanup.
- Search index updates.
- Cache invalidation.
- External processor coordination.
- Backup policies.
- Audit record preservation.

Do not promise complete erasure from every system without evidence.

Respect valid legal retention obligations.

## 47. Access and Export Testing

Verify relevant:

- Identity checks.
- Resource authorization.
- Export scoping.
- Data completeness.
- Privacy of third parties.
- Secure delivery.
- Rate limiting.
- Auditability.

Use non-sensitive fixtures whenever practical.

Avoid disclosing real user data during tests.

## 48. Privacy Incident Prevention

Review preventive measures for:

- Unauthorized access.
- Accidental public storage.
- Excessive logging.
- Incorrect tenant filters.
- Unsafe data exports.
- Misconfigured external integrations.
- Credentials exposure.
- Improper AI tool access.

Prioritize risks supported by actual evidence.

## 49. Privacy Incident Handling

If a suspected personal data breach is discovered:

1. Record the observed facts.
2. Avoid further unnecessary exposure.
3. Identify affected resources.
4. Assess immediate containment options.
5. Preserve appropriate evidence.
6. Escalate to authorized personnel.
7. Identify applicable notification and reporting obligations.
8. Document uncertainties.

Do not independently send legal breach notifications without authorization.

Do not invent incident impact or affected-user counts.

Do not modify production systems without the required approval.

## 50. Third-Party Integration Review

Before introducing a processor or analytics service:

- Define its purpose.
- Identify the personal data involved.
- Assess necessity.
- Review service configuration.
- Identify processing locations.
- Assess security.
- Determine contractual requirements.
- Consider international transfers.
- Evaluate financial implications.
- Obtain required authorization.

Do not provision paid services automatically.

## 51. Privacy Finding Classification

Classify findings using:

- Confirmed.
- Strongly supported.
- Hypothesis.
- Unknown.
- Not assessed.
- Resolved.
- Mitigated.

Record confidence separately from severity.

Do not present theoretical legal concerns as confirmed violations.

## 52. Privacy Risk Severity

Possible severity levels:

- Critical.
- High.
- Medium.
- Low.
- Informational.

Consider:

- Data sensitivity.
- Scale of exposure.
- Affected individuals.
- Duration.
- Existing controls.
- Consequences.
- Likelihood.
- Reversibility.

Avoid automatically assigning critical severity merely because personal data is involved.

## 53. Privacy Finding Format

Use the following structure for material findings.

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

Status:

[CONFIRMED | STRONGLY_SUPPORTED | HYPOTHESIS | NOT_ASSESSED]

Affected processing activity:

[PROCESSING_ACTIVITY]

Affected data:

[DATA_CATEGORIES]

Affected systems:

[SYSTEMS]

Evidence:

[EVIDENCE]

Potential impact:

[IMPACT]

Applicable standard or legal consideration:

[REFERENCE]

Recommended remediation:

[REMEDIATION]

Required legal or organizational review:

[REVIEW]

Required human authorization:

[AUTHORIZATION]

Never invent legal conclusions or supporting evidence.

## 54. Privacy Remediation Planning

For significant findings:

1. Identify the root cause.
2. Confirm actual processing.
3. Define the necessary correction.
4. Assess data integrity.
5. Assess security.
6. Evaluate compatibility.
7. Review legal implications.
8. Identify required approvals.
9. Implement authorized changes.
10. Verify the correction.
11. Document residual risks.

Prefer focused improvements.

Do not rewrite unrelated components unnecessarily.

## 55. Autonomous Privacy Corrections

In Autonomous Build Mode, authorized local privacy improvements may proceed without repeated approval.

Examples:

- Removing unnecessary logging.
- Restricting sensitive data exposure.
- Implementing appropriate data validation.
- Adding authorization tests.
- Improving local retention handling.
- Adding safe deletion workflows for future authorized use.
- Improving privacy-related documentation.
- Adding secure export controls.

Do not automatically execute bulk deletion of real production records.

Do not modify live processor agreements or external accounts without required authorization.

## 56. Protected Privacy Operations

Require appropriate approval before:

- Bulk deletion of production personal data.
- Production data export.
- Changing production data retention policies.
- Changing active legal consent mechanisms.
- Sending personal data to new external processors.
- Enabling new tracking activities.
- Modifying privileged production data access.
- Activating new international transfers.
- Making binding legal declarations.
- Sending regulatory notifications.

A general autonomous build instruction is insufficient for these protected operations.

## 57. Privacy and Financial Boundaries

Privacy infrastructure may introduce costs.

Examples:

- Data residency options.
- Dedicated hosting.
- Managed encryption services.
- Compliance tools.
- Data discovery platforms.
- Additional storage.
- Extended audit logging.

Evaluate financial implications.

Do not create new paid commitments automatically.

Consult docs/cost-engineering.md.

## 58. Privacy Exceptions

If a requirement cannot currently be satisfied:

- Identify the requirement.
- Explain the limitation.
- Assess risk.
- Evaluate alternatives.
- Identify compensating controls.
- Document required approvals.
- Define review conditions.

Use:

~/engineering-standards/templates/EXCEPTIONS.md

An AI agent cannot approve its own standards exception.

An exception cannot authorize violations of applicable law or higher-priority restrictions.

## 59. Privacy Documentation

Document relevant:

- Data inventories.
- Processing purposes.
- Data flow diagrams.
- Processor dependencies.
- Retention rules.
- Privacy-sensitive architecture decisions.
- Consent requirements.
- Access and deletion workflows.
- Open legal questions.
- Implementation limitations.

Use:

~/engineering-standards/templates/AUDIT_REPORT.md

for significant privacy assessments.

Do not invent completed legal reviews or regulatory approvals.

## 60. Privacy Verification

After authorized implementation:

1. Inspect relevant code changes.
2. Verify personal data access boundaries.
3. Run appropriate privacy tests.
4. Review logging.
5. Validate export and deletion workflows.
6. Assess new external dependencies.
7. Confirm sensitive data is not leaked to unauthorized services.
8. Record actual results.
9. Document unverified assumptions.
10. Report remaining risks.

Do not claim verification for tests that were not executed.

## 61. Privacy Definition of Done

For significant personal data processing functionality:

- Processing purpose identified.
- Relevant data categories documented.
- Data minimization considered.
- Authorization implemented.
- Sensitive information protected.
- Relevant retention requirements assessed.
- Appropriate deletion mechanisms defined.
- Third-party processing reviewed.
- International transfers considered.
- Relevant user rights assessed.
- AI data handling reviewed when applicable.
- Privacy tests executed where feasible.
- Legal uncertainties documented.
- Protected actions authorized.
- Human responsibilities recorded.

Technical completion does not automatically establish legal compliance.

## 62. Final Reporting

At the end of the assessment or implementation, report:

1. Scope reviewed.
2. Personal data categories.
3. Relevant processing activities.
4. Existing protections.
5. Confirmed privacy findings.
6. Unverified concerns.
7. Risk severity and confidence.
8. Corrections implemented.
9. Tests executed.
10. Tests not executed.
11. Outstanding legal decisions.
12. Required human authorization.
13. Remaining risks.
14. Recommended next steps.

Distinguish technical verification from legal approval.

## 63. Final Privacy Principles

Apply Privacy by Design.
Apply Privacy by Default.
Collect only necessary data.
Define legitimate processing purposes.
Identify appropriate lawful bases where required.
Protect sensitive personal information.
Restrict data access.
Preserve tenant isolation.
Minimize unnecessary logging.
Respect applicable retention requirements.
Support relevant data subject rights.
Assess third-party processors.
Evaluate international transfers.
Protect personal data in AI systems.
Restrict autonomous agent data access.
Use safe development and test data.
Protect production environments.
Avoid unauthorized data exports.
Never invent legal compliance findings.
Document uncertainty and limitations.
Maintain engineering quality in Autonomous Build Mode.
Require approval for protected operations.
Report remaining risks honestly.