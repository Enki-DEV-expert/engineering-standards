
# Global Privacy and Data Protection Standards

## 1. Mission

Design, develop and operate applications that protect personal information throughout its entire lifecycle.

Apply Privacy by Design, Privacy by Default, data minimization, purpose limitation, transparency and accountability.

These standards apply to web, iOS, Android, backend systems, databases, APIs, artificial intelligence, analytics and external services.

Apply the GDPR, relevant national legislation and other applicable privacy requirements.

Do not assume that following this document alone establishes legal compliance.

## 2. Privacy Governance

Before implementing personal data processing:

1. Identify the purpose of processing.
2. Identify the controller and processors.
3. Identify categories of personal data.
4. Determine the applicable legal basis.
5. Identify recipients and external providers.
6. Determine storage locations and international transfers.
7. Establish retention periods.
8. Define security and access controls.
9. Assess risks to individuals.
10. Document required transparency information.

Maintain a processing activities record where legally required.

Document decisions and supporting evidence.

## 3. Data Classification

Classify information according to risk and confidentiality.

### Public
Information approved for public disclosure.

### Internal
Operational information intended for authorized personnel.

### Confidential
Private business information, personal identifiers and restricted operational data.

### Sensitive / Restricted
Information requiring enhanced protection, including:

- Special categories of personal data under GDPR Article 9.
- Health information.
- Biometric data used for unique identification.
- Financial information and payment-related data.
- Information concerning children.
- Precise location history.
- Voice recordings containing identifiable information.
- Authentication credentials and secrets.
- Highly sensitive personal communications.

Not every item in this operational category is automatically a GDPR Article 9 special category.

Apply protection according to the actual legal classification and risk.

## 4. Data Minimization

Collect only information necessary for defined purposes.

Do not collect personal information simply because it may be useful in the future.

Avoid unnecessary identifiers and duplicated personal data.

Minimize information included in:

- API responses.
- Logs.
- Analytics events.
- Error reports.
- AI prompts.
- Test fixtures.
- Monitoring systems.
- Third-party requests.

Use aggregation, pseudonymization or anonymization when appropriate.

## 5. Lawful Processing

Identify and document the appropriate GDPR Article 6 legal basis.

Do not assume consent is always required or always sufficient.

For special categories of personal data, identify the applicable Article 9 condition in addition to the relevant Article 6 basis.

Where consent is the chosen legal basis, ensure it meets applicable requirements.

Consent must be freely given, specific, informed and unambiguous, with explicit consent when legally required.

Provide an appropriate withdrawal mechanism.

Do not treat acceptance of general terms and conditions as automatically valid consent for unrelated processing.

## 6. Privacy by Default

Configure products to favor privacy by default.

Examples:

- Restrict profile visibility.
- Disable unnecessary sharing.
- Avoid unnecessary tracking.
- Limit default data exposure.
- Require appropriate authorization for personal information.
- Minimize retention.
- Avoid optional analytics until requirements are satisfied.

The precise implementation must reflect product requirements and applicable law.

## 7. Transparency

Provide clear information about:

- Identity of the controller.
- Processing purposes.
- Legal bases.
- Data categories where required.
- Recipients and processors.
- International transfers.
- Retention periods or criteria.
- Rights of individuals.
- Relevant automated decision-making.
- Contact information and complaint rights.

Privacy notices must accurately reflect the actual implementation.

Never generate legal claims about a product without verifying the technical reality.

## 8. Individual Rights

Design systems to support applicable rights, including:

- Access.
- Rectification.
- Erasure.
- Restriction.
- Portability.
- Objection.
- Withdrawal of consent.
- Rights concerning automated decisions, where applicable.

Not every right applies identically to every processing operation.

Establish secure identity verification and request-handling procedures.

Track request deadlines and applicable exceptions.

Avoid exposing another person's data when fulfilling a request.

## 9. Retention and Deletion

Define retention periods for each data category.

Document:

- Why data is retained.
- The applicable retention period.
- Who can access it.
- Where it is stored.
- When and how it is deleted.
- Applicable legal retention obligations.

Implement appropriate automated deletion processes.

Evaluate personal data stored in:

- Primary databases.
- Object storage.
- Caches.
- Search indexes.
- Vector databases and embeddings.
- Analytics systems.
- Monitoring systems.
- Temporary files.
- Third-party services.
- Backups.

Ensure deletion requests are propagated where required.

Backups and legally retained records may require separate lifecycle controls.

Prevent deleted information from being improperly restored into active systems.

## 10. Database Privacy

Apply appropriate access control and isolation.

For multi-tenant applications:

- Enforce tenant boundaries.
- Validate server-side authorization.
- Prevent cross-tenant data access.
- Test permissions using multiple user roles.
- Separate privileged database operations.
- Limit administrative access.

For Supabase:

- Review Row Level Security policies.
- Verify SQL privileges.
- Protect privileged service credentials.
- Secure Storage access.
- Evaluate Realtime information exposure.
- Protect Edge Functions.
- Verify database access through actual user sessions.

Do not rely on frontend restrictions to protect personal data.

## 11. Encryption and Confidentiality

Protect personal information in transit and at rest as appropriate.

Use established cryptographic mechanisms.

Apply least privilege to encryption keys and credentials.

Restrict access to sensitive information.

Protect backup copies and exported datasets.

Consider application-level or field-level encryption where the risk model justifies it.

Never invent custom cryptographic algorithms.

## 12. Development and Testing Data

Prefer synthetic, fictitious or properly anonymized data.

Do not copy production datasets into development environments by default.

Pseudonymized personal data remains personal data under GDPR.

Anonymization must be sufficiently robust to prevent reasonably likely re-identification.

If production personal data is exceptionally required for testing:

- Establish necessity and lawful authorization.
- Minimize the dataset.
- Restrict access.
- Secure the environment.
- Document retention.
- Delete it after the approved purpose is complete.

Never upload real user datasets to external AI tools without explicit authorization and a lawful, reviewed process.

## 13. Artificial Intelligence and LLM Privacy

Before using AI services, determine:

- Which personal data is sent.
- Why sending it is necessary.
- Which provider receives it.
- Applicable legal basis.
- Processing purpose.
- Retention arrangements.
- Training and model-improvement policies.
- Storage and processing locations.
- International transfer safeguards.
- Subprocessors.
- Security and contractual protections.

Minimize or pseudonymize personal data before model requests where possible.

Use provider settings or contractual commitments restricting training where required.

Never assume provider data is excluded from training without verifying the applicable contract and configuration.

Do not store full prompts or responses containing personal data merely for debugging convenience.

Evaluate risks of memorization, disclosure, inference and excessive tool access.

## 14. Automated Decisions and Profiling

Identify automated processing that evaluates individuals or produces decisions affecting them.

Evaluate the applicability of GDPR Article 22 and related transparency safeguards.

For decisions with legal or similarly significant effects, assess whether restrictions, exceptions and safeguards apply.

Human oversight must be meaningful rather than merely formal.

Provide contestation and review mechanisms where legally required.

Do not assume every AI-assisted recommendation is automatically prohibited or automatically permissible.

Assess relevant EU AI Act requirements separately where applicable.

## 15. Children and Vulnerable Individuals

Apply enhanced safeguards where warranted by age, capacity, sensitivity or foreseeable harm.

Consider:

- Age-appropriate information.
- Applicable parental authorization requirements.
- Restricted public visibility.
- Limits on behavioral profiling.
- Sensitive location protection.
- Safe communication settings.
- Abuse and exploitation prevention.
- Strong access controls.
- Data minimization.
- Appropriate retention periods.

Account for national differences in digital consent ages.

Do not assume one age threshold applies to every country.

## 16. Health and Other High-Risk Information

Before processing high-risk information:

- Determine the exact legal classification.
- Identify legal bases and relevant exceptions.
- Apply enhanced access restrictions.
- Evaluate encryption and audit requirements.
- Minimize disclosure.
- Assess vendor and infrastructure controls.
- Evaluate sector-specific legislation.
- Determine whether a DPIA is required.

A DPIA is required where processing is likely to result in a high risk to individuals' rights and freedoms.

It is not automatically required for every application involving children, elderly people or health-related functionality.

Document the determination.

## 17. DPIA / AIPD

Evaluate the need for a Data Protection Impact Assessment before high-risk processing starts.

Consider:

- Large-scale sensitive data processing.
- Systematic monitoring.
- Extensive profiling.
- Innovative technologies.
- Vulnerable individuals.
- Combining datasets.
- Significant automated decisions.
- Other applicable regulatory criteria.

Where required, document:

1. Processing description.
2. Necessity and proportionality.
3. Risks to individuals.
4. Mitigation measures.
5. Residual risk.
6. Relevant consultations and approvals.

Seek legal or specialist review where appropriate.

Do not launch processing requiring a DPIA before completing the necessary assessment.

Where high residual risks remain, evaluate regulatory consultation obligations.

## 18. Processors and Third-Party Services

Before onboarding providers such as:

- Supabase.
- Cloud hosting services.
- AI model providers.
- Analytics providers.
- Email and SMS platforms.
- Payment processors.
- Customer support tools.
- Monitoring services.

Evaluate:

- Controller/processor responsibilities.
- Processing instructions.
- Appropriate data processing agreements.
- Security measures.
- Data retention.
- Subprocessors.
- International transfers.
- Access rights.
- Data deletion and return.
- Incident notification obligations.

Do not approve a provider solely because it advertises GDPR compliance.

## 19. International Data Transfers

Map personal data flows outside the EEA.

Identify where providers and subprocessors access, store or process information.

Assess applicable mechanisms, which may include:

- Adequacy decisions.
- Standard Contractual Clauses.
- Binding Corporate Rules.
- Other legally available transfer mechanisms or derogations.

Assess supplementary safeguards where required.

EU hosting alone does not necessarily eliminate international transfer risks.

Document the assessment and applicable safeguards.

## 20. Cookies, SDKs and Tracking

Inventory cookies, analytics SDKs and similar tracking technologies.

Determine which require consent under applicable law.

Do not assume all cookies require consent or that all analytics are automatically exempt.

Where consent is required:

- Obtain it before the relevant tracking.
- Provide clear information.
- Offer valid refusal mechanisms.
- Support withdrawal.
- Record consent choices appropriately.

Apply equivalent privacy analysis to mobile SDKs and device identifiers.

## 21. Location, Audio and Biometric Data

Treat precise location, voice recordings and biometric data with particular care.

For each feature:

- Define the precise purpose.
- Minimize collection frequency and precision.
- Restrict permissions.
- Explain usage to individuals.
- Establish retention.
- Protect access.
- Assess risks of inference and surveillance.
- Evaluate special-category classification when applicable.

Avoid continuous collection unless necessary, justified and authorized.

## 22. Logging and Observability

Logs should avoid unnecessary personal information.

Never log passwords, authentication tokens or private credentials.

Avoid full message bodies, documents and personal profiles in telemetry unless strictly necessary under an approved process.

Use structured event metadata.

Restrict access to operational logs.

Define retention periods.

Protect exported monitoring data.

## 23. Personal Data Breaches

Establish incident procedures covering:

1. Detection.
2. Containment.
3. Investigation.
4. Identification of affected information.
5. Evaluation of risk to individuals.
6. Internal documentation.
7. Regulatory notification where required.
8. Communication to affected individuals where required.
9. Recovery.
10. Corrective action.

Under GDPR Article 33, supervisory authority notification is generally required without undue delay and, where feasible, within 72 hours after becoming aware of a personal data breach, unless the breach is unlikely to result in risk to individuals.

Under Article 34, affected individuals must generally be informed without undue delay where a breach is likely to result in high risk, subject to legal exceptions.

Document personal data breaches and notification decisions.

Do not confuse general security incidents with reportable personal data breaches.

## 24. Privacy Verification

For significant changes involving personal data:

- Inspect actual data flows.
- Identify newly collected information.
- Review legal basis implications.
- Verify authorization and isolation.
- Evaluate third-party disclosures.
- Review retention and deletion.
- Check logging and monitoring exposure.
- Verify rights-handling workflows.
- Assess DPIA requirements.
- Document unresolved risks.

Never claim regulatory compliance based solely on generated documentation.

## 25. Privacy Change Approval

Require explicit human approval before:

- Introducing new categories of personal data.
- Processing special-category information.
- Adding new tracking technologies.
- Sharing information with new providers.
- Changing retention periods materially.
- Introducing significant automated decision-making.
- Expanding access to personal information.
- Transferring personal information to new jurisdictions.
- Changing privacy-sensitive default settings.

Provide an impact assessment before implementation.

## 26. Existing Applications

For existing projects:

1. Audit current personal data flows without making changes.
2. Compare current practices against applicable requirements.
3. Identify confirmed gaps.
4. Prioritize by risk.
5. Prepare a phased remediation plan.
6. Preserve existing functionality where lawful and appropriate.
7. Obtain approval before implementing changes.
8. Validate results and document residual risks.

Do not perform broad privacy-related rewrites without an approved plan.

Do not preserve an unlawful practice solely for backward compatibility.

## 27. Privacy Definition of Done

For significant personal data processing changes:

- Purpose documented.
- Legal basis reviewed.
- Data classification completed.
- Data minimization verified.
- Access controls checked.
- Relevant consent or transparency mechanisms assessed.
- Retention and deletion reviewed.
- Third-party disclosure evaluated.
- International transfer implications assessed.
- DPIA requirement assessed.
- Applicable tests executed.
- Remaining risks documented.
- Human approval obtained.

## 28. Final Privacy Principles

Privacy by Design.
Privacy by Default.
Collect only what is necessary.
Use data only for justified purposes.
Protect personal information throughout its lifecycle.
Limit access and retention.
Verify vendors and international transfers.
Respect individual rights.
Document evidence and decisions.
Never silently expand personal data processing.
