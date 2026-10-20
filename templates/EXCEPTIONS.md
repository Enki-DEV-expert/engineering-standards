
# Engineering Standards Exceptions Register

## 1. Purpose

This document records explicitly approved exceptions to the Global Engineering Standards.

Global standards repository:

~/engineering-standards/

Exceptions must be documented, justified, risk-assessed, reviewed and approved by the appropriate human authority.

This file is a reusable template.

Replace placeholders with verified project information.

Do not treat example values as approved exceptions.

## 2. Fundamental Principles

Exceptions must:

1. Have a legitimate technical or business justification.
2. Be limited to a clearly defined scope.
3. Identify the affected standards.
4. Describe the associated risks.
5. Identify compensating controls where possible.
6. Have an authorized approver.
7. Have a review date.
8. Have an expiration date where appropriate.
9. Be traceable.
10. Be reviewed when project circumstances change.

Exceptions must not be used merely to avoid engineering effort.

Never silently weaken important security, privacy, data integrity or financial safeguards.

## 3. Non-Overrideable Constraints

An exception does not authorize:

- Violation of applicable law.
- Bypassing higher-priority platform instructions.
- Bypassing mandatory sandbox restrictions.
- Circumventing organizational security controls.
- Unauthorized access to production systems.
- Unauthorized financial commitments.
- Exposure of private credentials.
- Destructive actions without appropriate authorization.

If a requested exception conflicts with a mandatory restriction, the exception must not be applied.

Escalate unresolved conflicts.

## 4. Exception Identification

Exception ID:

[EXCEPTION_ID]

Project:

[PROJECT_NAME]

Repository:

[REPOSITORY_PATH]

Environment:

[DEVELOPMENT | TEST | STAGING | PRODUCTION]

Exception title:

[EXCEPTION_TITLE]

Status:

[PROPOSED | UNDER_REVIEW | APPROVED | REJECTED | EXPIRED | REVOKED | CLOSED]

Date created:

[YYYY-MM-DD]

Requested by:

[REQUESTER_OR_ROLE]

## 5. Affected Standard

Global standards document:

[STANDARD_DOCUMENT]

Affected section:

[SECTION_REFERENCE]

Requirement:

[EXACT_REQUIREMENT]

Describe precisely which requirement cannot currently be satisfied.

Do not request a blanket exemption from all engineering standards.

## 6. Exception Description

Current situation:

[CURRENT_STATE]

Requested deviation:

[REQUESTED_EXCEPTION]

Affected components:

[AFFECTED_COMPONENTS]

Affected services:

[AFFECTED_SERVICES]

Affected users or tenants:

[AFFECTED_USERS_OR_TENANTS]

Scope boundaries:

[EXPLICIT_SCOPE]

State exactly what will and will not be permitted.

## 7. Business Justification

Explain why the exception is necessary.

Business requirement:

[BUSINESS_REQUIREMENT]

Technical limitation:

[TECHNICAL_LIMITATION]

Operational constraint:

[OPERATIONAL_CONSTRAINT]

Reason standard compliance is not currently practical:

[JUSTIFICATION]

Include supporting evidence where available.

Avoid vague explanations such as "too difficult" or "faster to ignore."

## 8. Alternatives Considered

Document reasonable alternatives.

### Alternative A

Description:

[ALTERNATIVE_A]

Benefits:

[BENEFITS]

Risks:

[RISKS]

Estimated cost:

[COST_OR_UNKNOWN]

Reason not selected:

[REASON]

### Alternative B

Description:

[ALTERNATIVE_B]

Benefits:

[BENEFITS]

Risks:

[RISKS]

Estimated cost:

[COST_OR_UNKNOWN]

Reason not selected:

[REASON]

Do not invent alternatives that were not evaluated.

## 9. Risk Assessment

Evaluate relevant risk categories.

Security risk:

[SECURITY_RISK]

Privacy risk:

[PRIVACY_RISK]

Data integrity risk:

[DATA_INTEGRITY_RISK]

Availability risk:

[AVAILABILITY_RISK]

Scalability risk:

[SCALABILITY_RISK]

Financial risk:

[FINANCIAL_RISK]

Compatibility risk:

[COMPATIBILITY_RISK]

Regulatory risk:

[REGULATORY_RISK]

Overall risk classification:

[LOW | MODERATE | HIGH | CRITICAL | NOT_YET_ASSESSED]

Evidence:

[RISK_EVIDENCE]

Do not present estimated risks as verified facts.

## 10. Compensating Controls

List controls that reduce the exception's risks.

Control 1:

[CONTROL_AND_OWNER]

Control 2:

[CONTROL_AND_OWNER]

Control 3:

[CONTROL_AND_OWNER]

Validation method:

[HOW_CONTROLS_ARE_VERIFIED]

Remaining risks:

[RESIDUAL_RISKS]

Do not assume compensating controls eliminate all risk.

## 11. Security and Privacy Review

Security review required:

[YES | NO | NOT_DETERMINED]

Privacy review required:

[YES | NO | NOT_DETERMINED]

Relevant security findings:

[SECURITY_FINDINGS]

Relevant privacy findings:

[PRIVACY_FINDINGS]

Applicable legal or regulatory considerations:

[VERIFIED_REQUIREMENTS_OR_UNKNOWN]

Review evidence:

[REFERENCES]

High-impact privacy or security exceptions require appropriate human review.

Consult docs/security.md and docs/privacy.md.

## 12. Data and Production Impact

Production affected:

[YES | NO | UNKNOWN]

Production data affected:

[YES | NO | UNKNOWN]

Database changes required:

[YES | NO | UNKNOWN]

Potentially destructive operations:

[YES | NO | UNKNOWN]

Rollback or recovery plan:

[ROLLBACK_PLAN]

Backup requirements:

[BACKUP_REQUIREMENTS]

Never interpret an exception as permission to execute destructive production operations.

Separate exception approval from authorization to perform the actual operation.

## 13. Financial Impact

Estimated implementation cost:

[COST_OR_UNKNOWN]

Estimated recurring cost:

[COST_OR_UNKNOWN]

Currency:

[CURRENCY]

Approved spending limit:

[EXPLICIT_LIMIT_OR_NONE]

Relevant providers:

[PROVIDERS]

Billing assumptions:

[ASSUMPTIONS]

Pricing verification date:

[YYYY-MM-DD_OR_NOT_VERIFIED]

An approved standards exception does not automatically authorize spending.

Financial commitments require appropriate separate authorization.

Consult docs/cost-engineering.md.

## 14. Operational Requirements

Monitoring requirements:

[MONITORING]

Alerting requirements:

[ALERTING]

Incident response requirements:

[INCIDENT_RESPONSE]

Required tests:

[TESTS]

Validation evidence:

[EVIDENCE]

Rollback conditions:

[ROLLBACK_CONDITIONS]

Do not weaken essential monitoring or testing without explicit, risk-appropriate review.

## 15. Time Limits

Exception effective date:

[YYYY-MM-DD]

Exception expiration date:

[YYYY-MM-DD_OR_JUSTIFIED_NO_EXPIRATION]

Next review date:

[YYYY-MM-DD]

Review owner:

[OWNER]

Conditions that trigger early review:

[REVIEW_TRIGGERS]

Prefer time-limited exceptions.

An expired exception must not be treated as automatically approved.

## 16. Remediation Plan

Describe how the project will eventually comply with the original standard.

Required remediation:

[REMEDIATION]

Responsible owner:

[OWNER]

Dependencies:

[DEPENDENCIES]

Target date:

[YYYY-MM-DD]

Validation criteria:

[ACCEPTANCE_CRITERIA]

Do not create a remediation deadline without considering actual dependencies and risk.

## 17. Approval Record

Approval status:

[PENDING | APPROVED | REJECTED | REVOKED]

Approver:

[AUTHORIZED_PERSON_OR_ROLE]

Approval date:

[YYYY-MM-DD_OR_PENDING]

Exact approved scope:

[APPROVED_SCOPE]

Approval conditions:

[CONDITIONS]

Approval evidence:

[REFERENCE_TO_APPROVAL]

Do not invent approval records.

An AI coding agent cannot approve its own exception.

The existence of this file does not constitute approval.

## 18. Operating Mode Compatibility

This exception framework applies to:

- Supervised Mode.
- Autonomous Build Mode.

Autonomous Build Mode does not authorize agents to create and approve their own exceptions.

An agent may:

- Identify the need for an exception.
- Assess alternatives.
- Describe risks.
- Prepare the exception request.
- Recommend compensating controls.
- Continue independent authorized tasks.

An agent must not:

- Treat a proposed exception as approved.
- Bypass mandatory platform restrictions.
- Weaken protected safeguards without authorization.
- Expand the scope of an existing exception.
- Hide an exception from the final report.

Consult docs/governance.md.

## 19. Autonomous Build Handling

If an exception is required during Autonomous Build Mode:

1. Identify the conflicting requirement.
2. Evaluate whether a compliant alternative exists.
3. Prefer the compliant alternative when reasonable.
4. Prepare the exception request if necessary.
5. Mark the exception as pending.
6. Continue independent authorized development.
7. Record blocked work.
8. Include the approval request in the final handoff.

Do not interrupt ordinary development solely because one unrelated exception is pending.

Do not implement the unapproved deviation.

## 20. Existing Production Applications

When an existing production application does not meet a global standard:

- Inspect the current implementation.
- Determine whether the deviation is confirmed.
- Evaluate actual risk.
- Identify operational dependencies.
- Assess migration complexity.
- Consider safe incremental remediation.
- Document temporary exceptions where appropriate.

Do not automatically rewrite production applications.

Do not interpret legacy architecture as proof of a security vulnerability.

Preserve working functionality while planning improvements.

## 21. Exception Review

At each review:

1. Confirm the exception is still necessary.
2. Reassess relevant risks.
3. Verify compensating controls.
4. Review operational evidence.
5. Evaluate remediation progress.
6. Confirm continued authorization.
7. Update the status.
8. Record the review outcome.

Do not silently renew expired approvals.

## 22. Exception Revocation

An exception may be revoked when:

- Risk becomes unacceptable.
- A compensating control fails.
- The original justification no longer applies.
- The scope changes materially.
- Approval is withdrawn.
- Legal or platform requirements change.

Document the revocation decision.

Identify affected operations.

Prepare safe remediation or containment where required.

Do not make destructive changes automatically.

## 23. Exception Closure

Close an exception when:

- The system complies with the applicable standard.
- The affected feature is safely retired.
- The exception is no longer applicable.
- An authorized replacement decision resolves the issue.

Record:

- Closure date.
- Reason.
- Verification evidence.
- Approver where required.

Do not mark an exception closed merely because its expiration date passed.

## 24. Exception Register

Maintain a summary of relevant exceptions.

| ID | Project | Standard | Status | Risk | Review Date | Expiration |
|---|---|---|---|---|---|---|
| [ID] | [PROJECT] | [STANDARD] | [STATUS] | [RISK] | [DATE] | [DATE] |

Add one row per actual exception.

Do not treat placeholder rows as approved records.

Keep detailed exception records linked to their register entries.

## 25. Exception Change History

Record meaningful changes.

| Date | Exception ID | Change | Responsible Party |
|---|---|---|---|
| [YYYY-MM-DD] | [ID] | [DESCRIPTION] | [PERSON_OR_ROLE] |

Preserve relevant approval and review history.

Do not silently rewrite past decisions.

## 26. Final Exception Principles

Prefer compliance over exceptions.
Require a legitimate justification.
Limit every exception to an explicit scope.
Assess security and privacy risks.
Protect production data.
Document compensating controls.
Define review and expiration dates.
Require appropriate human approval.
Preserve traceability.
Do not interpret exception approval as spending authorization.
Do not weaken mandatory platform restrictions.
Never let AI agents approve their own exceptions.
Continue safe independent work when approval is pending.
Review exceptions periodically.
Close exceptions only with appropriate evidence.