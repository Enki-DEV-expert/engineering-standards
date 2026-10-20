
# Engineering Audit Report

## 1. Purpose

This template defines a consistent, evidence-based approach to engineering audits.

It belongs to the Global Engineering Standards framework:

~/engineering-standards/

Use this template to assess new, existing, legacy, staging and production applications.

The audit must identify:

- Confirmed technical problems.
- Potential risks requiring validation.
- Architecture weaknesses.
- Security and privacy concerns.
- Data integrity risks.
- Scalability limitations.
- Financial inefficiencies.
- Reliability concerns.
- Quality and testing gaps.
- Operational improvements.
- Recommended remediation priorities.

An audit is not permission to modify a system.

Replace placeholders with verified project information.

Never fabricate findings, evidence, tests or results.

## 2. Global Standards

Apply relevant requirements from:

- docs/security.md
- docs/privacy.md
- docs/architecture.md
- docs/data.md
- docs/scalability.md
- docs/cost-engineering.md
- docs/ai-and-llm.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md
- docs/governance.md

Resolve these references relative to:

~/engineering-standards/

Only apply specialized standards relevant to the project and audit scope.

Respect actual platform permissions and project-specific instructions.

## 3. Audit Identification

Audit ID:

[AUDIT_ID]

Project:

[PROJECT_NAME]

Repository:

[REPOSITORY_PATH]

Audit date:

[YYYY-MM-DD]

Auditor:

[AGENT_OR_AUDITOR]

Project owner:

[OWNER_OR_ROLE]

Environment:

[DEVELOPMENT | TEST | STAGING | PRODUCTION | MIXED]

Operating mode:

[SUPERVISED | AUTONOMOUS_BUILD]

Report version:

[REPORT_VERSION]

Audit status:

[PLANNED | IN_PROGRESS | COMPLETED | PARTIALLY_COMPLETED | BLOCKED]

## 4. Executive Summary

Provide an accurate, concise summary of the audit.

Overall assessment:

[OVERALL_ASSESSMENT]

Most important confirmed findings:

[CONFIRMED_FINDINGS]

Important unverified concerns:

[UNVERIFIED_CONCERNS]

Immediate priorities:

[PRIORITIES]

Important limitations:

[AUDIT_LIMITATIONS]

Never declare an application secure, compliant or production-ready solely because no issue was observed during a limited review.

## 5. Audit Objectives

Document why the audit is being performed.

Primary objective:

[OBJECTIVE]

Secondary objectives:

[SECONDARY_OBJECTIVES]

Requested outcomes:

[EXPECTED_OUTCOMES]

Business constraints:

[BUSINESS_CONSTRAINTS]

Technical constraints:

[TECHNICAL_CONSTRAINTS]

Avoid extending the audit beyond authorized scope.

## 6. Audit Scope

In-scope applications:

[APPLICATIONS]

In-scope repositories:

[REPOSITORIES]

In-scope services:

[SERVICES]

In-scope environments:

[ENVIRONMENTS]

In-scope components:

[COMPONENTS]

Excluded components:

[EXCLUSIONS]

Access limitations:

[ACCESS_LIMITATIONS]

Clearly distinguish inspected systems from systems not inspected.

## 7. Authorization and Safety

Audit authorization:

[AUTHORIZATION_REFERENCE]

Authorized access:

[READ_ONLY | LIMITED_TESTING | AUTHORIZED_IMPLEMENTATION]

Protected environments:

[PROTECTED_ENVIRONMENTS]

Prohibited operations:

[PROHIBITED_OPERATIONS]

Required approvals:

[APPROVAL_REQUIREMENTS]

Default to read-only assessment for existing production applications.

Do not assume credentials or repository access grant permission to modify production.

Never bypass sandbox, platform or organizational restrictions.

## 8. Audit Methodology

Describe the methods actually used.

Possible methods include:

- Repository inspection.
- Dependency inventory.
- Architecture review.
- Configuration review.
- Source code analysis.
- Static analysis.
- Local unit testing.
- Local integration testing.
- Security checks.
- Accessibility review.
- Data model analysis.
- Cloud configuration review.
- Cost assessment.
- Performance analysis.
- Documentation review.

Actual methods performed:

[METHODS_PERFORMED]

Methods not performed:

[METHODS_NOT_PERFORMED]

Reasons for exclusions:

[EXCLUSION_REASONS]

Do not report a method as performed when it was only planned.

## 9. Evidence Inventory

List the evidence supporting conclusions.

Possible evidence:

- Source files and line references.
- Configuration files.
- Dependency manifests.
- Test output.
- Build results.
- Sanitized logs.
- Database schema definitions.
- Architecture diagrams.
- Monitoring metrics.
- Approved infrastructure configuration.
- Verified provider pricing.

Evidence register:

| ID | Source | Location | Observation | Verification Status |
|---|---|---|---|---|
| [EVIDENCE_ID] | [SOURCE] | [PATH_OR_REFERENCE] | [OBSERVATION] | [VERIFIED_OR_UNVERIFIED] |

Avoid including credentials, tokens or unnecessary personal data.

## 10. Evidence Classification

Classify each relevant observation.

Use:

- Confirmed.
- Strongly supported.
- Hypothesis.
- Unknown.
- Not assessed.

A confirmed finding requires sufficient reproducible or otherwise reliable evidence.

Do not present an architectural preference as a confirmed defect.

Do not convert uncertainty into certainty.

## 11. Application Inventory

Application type:

[APPLICATION_TYPE]

Primary languages:

[LANGUAGES]

Frontend:

[FRONTEND]

Backend:

[BACKEND]

Database:

[DATABASE]

Authentication:

[AUTHENTICATION]

Hosting:

[HOSTING]

Cloud provider:

[PROVIDER_OR_NONE]

AI components:

[AI_COMPONENTS_OR_NONE]

Target platforms:

[PLATFORMS]

Current deployment status:

[DEPLOYMENT_STATUS]

Verify these values from actual project evidence.

## 12. Architecture Assessment

Evaluate:

- Component responsibilities.
- Modularity.
- Coupling.
- Dependency direction.
- Separation of concerns.
- Architectural consistency.
- Failure isolation.
- Maintainability.
- Deployment topology.
- Evolution strategy.

Architecture findings:

[FINDINGS]

Architecture strengths:

[STRENGTHS]

Architecture concerns:

[CONCERNS]

Evidence:

[EVIDENCE_REFERENCES]

Consult docs/architecture.md.

## 13. Security Assessment

Evaluate relevant:

- Authentication.
- Authorization.
- Access control.
- Tenant isolation.
- Input validation.
- Secret management.
- Dependency security.
- API exposure.
- Session handling.
- Encryption.
- Logging safety.
- Supply chain controls.
- Privileged operations.

Confirmed security findings:

[CONFIRMED_SECURITY_FINDINGS]

Potential security issues:

[UNVERIFIED_SECURITY_ISSUES]

Existing protective controls:

[EXISTING_CONTROLS]

Evidence:

[EVIDENCE_REFERENCES]

Do not claim that absence of discovered vulnerabilities proves security.

Do not execute intrusive security testing against live systems without authorization.

Consult docs/security.md.

## 14. Privacy and Compliance Assessment

Evaluate:

- Personal data inventory.
- Data minimization.
- Processing purposes.
- Relevant legal bases.
- Access restrictions.
- Retention practices.
- Data subject rights.
- Third-party processors.
- International transfers.
- Sensitive information exposure.

Verified privacy findings:

[PRIVACY_FINDINGS]

Potential compliance gaps:

[COMPLIANCE_CONCERNS]

Applicable jurisdictions:

[APPLICABLE_JURISDICTIONS]

Evidence:

[EVIDENCE_REFERENCES]

Do not assert legal or regulatory compliance without appropriate verification.

Consult docs/privacy.md.

## 15. Data Architecture Assessment

Evaluate:

- Schema design.
- Data consistency.
- Transaction boundaries.
- Indexing.
- Query patterns.
- Referential integrity.
- Data ownership.
- Multi-tenant isolation.
- Migrations.
- Backup.
- Recovery.
- Data retention.

Confirmed data findings:

[DATA_FINDINGS]

Potential data risks:

[DATA_RISKS]

Existing safeguards:

[EXISTING_SAFEGUARDS]

Evidence:

[EVIDENCE_REFERENCES]

Never execute destructive production database operations as part of a default audit.

Consult docs/data.md.

## 16. Scalability Assessment

Evaluate:

- Current workload.
- Expected growth.
- Peak concurrency.
- Bottlenecks.
- Horizontal scaling.
- Vertical scaling.
- Database capacity.
- Caching.
- Queueing.
- Rate limiting.
- Resource isolation.
- Infrastructure elasticity.

Measured workload:

[MEASURED_WORKLOAD_OR_UNKNOWN]

Growth assumptions:

[GROWTH_ASSUMPTIONS]

Identified constraints:

[CONSTRAINTS]

Recommendations:

[RECOMMENDATIONS]

Evidence:

[EVIDENCE_REFERENCES]

Do not confuse registered users with concurrent users.

Do not claim support for millions of users without relevant capacity testing or supporting evidence.

Consult docs/scalability.md.

## 17. Cloud and Infrastructure Assessment

Evaluate relevant infrastructure:

- AWS.
- Microsoft Azure.
- Google Cloud.
- Managed hosting.
- Serverless services.
- Containers.
- Kubernetes.
- Networking.
- Storage.
- Identity and access management.
- Infrastructure-as-Code.
- Deployment configuration.

Actual infrastructure:

[VERIFIED_INFRASTRUCTURE]

Confirmed findings:

[INFRASTRUCTURE_FINDINGS]

Potential risks:

[INFRASTRUCTURE_RISKS]

Evidence:

[EVIDENCE_REFERENCES]

Do not assume a particular provider or orchestration platform is inherently required.

Do not modify live infrastructure during read-only assessment.

## 18. Cost Engineering Assessment

Evaluate:

- Hosting charges.
- Database costs.
- Storage growth.
- Network egress.
- Monitoring costs.
- Background workloads.
- Managed service pricing.
- Idle resources.
- AI model usage.
- Third-party subscriptions.
- Financial guardrails.

Verified spending:

[ACTUAL_SPENDING_OR_UNKNOWN]

Estimated spending:

[ESTIMATES_AND_ASSUMPTIONS]

Potential optimization:

[OPTIMIZATION_OPPORTUNITIES]

Pricing verification date:

[DATE_OR_NOT_VERIFIED]

Evidence:

[EVIDENCE_REFERENCES]

Do not invent cost savings or claim estimated prices are actual invoices.

Do not create new paid commitments during an audit.

Consult docs/cost-engineering.md.

## 19. AI and LLM Assessment

Complete this section when the application uses AI.

Evaluate:

- Model selection.
- Prompt construction.
- Retrieval authorization.
- RAG quality.
- Agent permissions.
- Tool boundaries.
- Prompt injection exposure.
- Data leakage.
- Evaluation quality.
- Hallucination mitigation.
- Human oversight.
- Inference spending.
- Auditability.

AI components reviewed:

[AI_COMPONENTS]

Confirmed AI findings:

[AI_FINDINGS]

Unverified concerns:

[AI_CONCERNS]

Evaluation evidence:

[EVALUATION_EVIDENCE]

Do not treat successful demonstrations as proof of reliable production behavior.

Consult docs/ai-and-llm.md.

## 20. Web and Mobile Assessment

Complete according to project relevance.

Evaluate:

- User journeys.
- Navigation.
- Accessibility.
- Responsive design.
- Authentication flows.
- Client-side data protection.
- Mobile lifecycle.
- Offline behavior.
- Network failure handling.
- Platform compatibility.
- Release requirements.

Relevant platforms:

[PLATFORMS]

Confirmed findings:

[FINDINGS]

Evidence:

[EVIDENCE_REFERENCES]

Consult docs/mobile-and-web.md.

## 21. Desktop, Native and Game Assessment

Complete according to project relevance.

Evaluate:

- Platform compatibility.
- Packaging.
- Installation.
- Code signing.
- Update mechanisms.
- Native permissions.
- Asset management.
- Resource consumption.
- Game performance.
- Save data integrity.
- Multiplayer security.
- Engine dependencies.
- Distribution requirements.

Relevant platforms:

[PLATFORMS]

Confirmed findings:

[FINDINGS]

Evidence:

[EVIDENCE_REFERENCES]

Consult docs/platforms-and-applications.md.

## 22. Code Quality Assessment

Evaluate:

- Readability.
- Maintainability.
- Modularity.
- Type safety.
- Error handling.
- Dependency management.
- Duplication.
- Dead code.
- Code organization.
- Complexity.
- Documentation accuracy.

Confirmed findings:

[QUALITY_FINDINGS]

Important strengths:

[STRENGTHS]

Evidence:

[EVIDENCE_REFERENCES]

Do not classify stylistic preferences as critical defects without justification.

Consult docs/quality-and-testing.md.

## 23. Testing Assessment

Evaluate:

- Test strategy.
- Unit test coverage.
- Integration tests.
- End-to-end tests.
- Regression tests.
- Security checks.
- Build verification.
- Continuous integration.
- Test isolation.
- Test data safety.

Existing tests:

[TEST_INVENTORY]

Tests executed:

[TESTS_EXECUTED]

Tests not executed:

[TESTS_NOT_EXECUTED]

Results:

[TEST_RESULTS]

Known gaps:

[TEST_GAPS]

Do not fabricate test results or coverage.

## 24. Performance Assessment

Evaluate:

- Response times.
- Database latency.
- CPU usage.
- Memory usage.
- Network transfer.
- Frontend loading.
- Rendering.
- Background processing.
- Cache efficiency.
- Resource utilization.

Measured performance:

[ACTUAL_MEASUREMENTS_OR_NONE]

Estimated risks:

[ESTIMATED_RISKS]

Recommendations:

[RECOMMENDATIONS]

Evidence:

[EVIDENCE_REFERENCES]

Clearly distinguish measurements from assumptions.

## 25. Reliability and Recovery Assessment

Evaluate:

- Failure handling.
- Retry policies.
- Timeouts.
- Idempotency.
- Backup availability.
- Restoration procedures.
- Availability dependencies.
- Disaster recovery.
- Graceful degradation.
- Operational resilience.

Confirmed findings:

[RELIABILITY_FINDINGS]

Recovery evidence:

[RECOVERY_EVIDENCE]

Unverified concerns:

[CONCERNS]

Do not claim backups are recoverable unless restoration has been appropriately verified.

## 26. Observability Assessment

Evaluate:

- Structured logging.
- Metrics.
- Tracing.
- Error reporting.
- Alerting.
- Incident response.
- Service health.
- Retention.
- Telemetry privacy.
- Monitoring costs.

Existing observability:

[CURRENT_OBSERVABILITY]

Confirmed gaps:

[GAPS]

Evidence:

[EVIDENCE_REFERENCES]

Do not recommend excessive telemetry without operational justification.

Consult docs/observability.md.

## 27. Dependency and Supply Chain Assessment

Evaluate:

- Dependency inventory.
- Version compatibility.
- Known vulnerabilities.
- Maintenance activity.
- License constraints.
- Package provenance.
- Build reproducibility.
- Lockfiles.
- Installation scripts.
- Supply chain risks.

Verified findings:

[DEPENDENCY_FINDINGS]

Tools used:

[TOOLS_USED]

Unassessed dependencies:

[UNASSESSED_DEPENDENCIES]

Do not automatically upgrade critical dependencies during an audit.

## 28. CI/CD and Deployment Assessment

Evaluate:

- Build reproducibility.
- Automated quality gates.
- Branch protection.
- Secret handling.
- Deployment approvals.
- Environment separation.
- Release rollback.
- Artifact provenance.
- Deployment monitoring.

Confirmed findings:

[CICD_FINDINGS]

Existing safeguards:

[SAFEGUARDS]

Evidence:

[EVIDENCE_REFERENCES]

Do not disable deployment protections or initiate production releases during a read-only audit.

## 29. Documentation Assessment

Evaluate:

- Installation instructions.
- Architecture documentation.
- Environment configuration.
- API documentation.
- Deployment procedures.
- Operational runbooks.
- Data model documentation.
- Decision records.
- Known limitations.

Confirmed gaps:

[DOCUMENTATION_GAPS]

Outdated information:

[OUTDATED_INFORMATION]

Evidence:

[EVIDENCE_REFERENCES]

Distinguish missing documentation from missing functionality.

## 30. User Experience Assessment

Evaluate:

- Task completion.
- Navigation clarity.
- Information hierarchy.
- Form usability.
- Error messages.
- Feedback.
- Accessibility.
- Consistency.
- User onboarding.
- Complex workflow simplification.

Observed usability issues:

[VERIFIED_USABILITY_ISSUES]

Potential issues requiring user testing:

[HYPOTHESES]

Evidence:

[EVIDENCE_REFERENCES]

Do not redesign existing interfaces automatically during an audit.

## 31. Risk Classification

Classify findings according to evidence and impact.

Possible severity levels:

- Critical.
- High.
- Medium.
- Low.
- Informational.

Consider:

- Security impact.
- Privacy impact.
- Data loss potential.
- User impact.
- Availability impact.
- Financial exposure.
- Likelihood.
- Exploitability.
- Scope.
- Reversibility.

A critical rating requires a clear and defensible explanation.

Do not inflate severity to make a report appear more important.

## 32. Finding Confidence

Record confidence separately from severity.

Confidence levels:

- High.
- Medium.
- Low.

High confidence requires strong supporting evidence.

Medium confidence indicates meaningful support with unresolved uncertainty.

Low confidence indicates a hypothesis requiring further investigation.

A severe hypothetical problem must not be represented as a confirmed vulnerability.

## 33. Detailed Finding Template

Use one record for each material finding.

### Finding [FINDING_ID]

Title:

[FINDING_TITLE]

Category:

[CATEGORY]

Severity:

[CRITICAL | HIGH | MEDIUM | LOW | INFORMATIONAL]

Confidence:

[HIGH | MEDIUM | LOW]

Verification:

[CONFIRMED | STRONGLY_SUPPORTED | HYPOTHESIS | NOT_ASSESSED]

Affected component:

[COMPONENT]

Affected environment:

[ENVIRONMENT]

Description:

[DESCRIPTION]

Evidence:

[EVIDENCE_REFERENCE]

Potential impact:

[IMPACT]

Relevant standard:

[STANDARD_REFERENCE]

Recommended remediation:

[REMEDIATION]

Estimated implementation complexity:

[LOW | MEDIUM | HIGH | UNKNOWN]

Compatibility considerations:

[COMPATIBILITY]

Data impact:

[DATA_IMPACT]

Cost impact:

[COST_IMPACT]

Required approval:

[APPROVAL]

Suggested priority:

[PRIORITY]

Avoid including exploit details or sensitive configuration secrets unnecessarily.

Repeat this section for each finding.

## 34. Findings Summary

Summarize actual findings.

| ID | Finding | Severity | Confidence | Status | Priority |
|---|---|---|---|---|---|
| [ID] | [TITLE] | [SEVERITY] | [CONFIDENCE] | [STATUS] | [PRIORITY] |

Do not count unverified hypotheses as confirmed findings.

Remove placeholder rows from completed audit reports.

## 35. Priority Classification

Prioritize according to:

- Real-world impact.
- Verified severity.
- Probability of occurrence.
- Number of affected users.
- Data sensitivity.
- Ease of exploitation.
- Operational exposure.
- Remediation complexity.
- Available mitigations.

Possible remediation priorities:

- P0 — Immediate containment or urgent action.
- P1 — High priority.
- P2 — Planned remediation.
- P3 — Improvement opportunity.

Priority is not identical to severity.

A low-effort, high-impact improvement may deserve earlier implementation than a large architectural rewrite.

## 36. Immediate Risk Containment

If a critical issue is confirmed:

1. Document reliable evidence.
2. Identify affected assets.
3. Assess immediate risk.
4. Recommend proportionate containment.
5. Identify required authorization.
6. Escalate appropriately.
7. Preserve audit evidence.
8. Avoid uncontrolled changes.

Do not automatically disable production services or delete data.

Do not disclose sensitive exploit details unnecessarily.

## 37. Remediation Recommendations

For each significant recommendation, document:

- Objective.
- Affected component.
- Expected benefit.
- Evidence.
- Dependencies.
- Risks.
- Cost implications.
- Compatibility impact.
- Testing requirements.
- Rollback considerations.
- Required approval.

Prefer minimal effective corrections.

Avoid proposing complete rewrites without a strong technical justification.

## 38. Quick Wins

List improvements that offer meaningful benefits with limited complexity.

| Improvement | Evidence | Expected Benefit | Risk | Effort |
|---|---|---|---|---|
| [IMPROVEMENT] | [EVIDENCE] | [BENEFIT] | [RISK] | [EFFORT] |

Do not prioritize quick wins over urgent critical issues.

Do not claim benefits that have not been demonstrated.

## 39. Remediation Roadmap

Organize the recommended work by priority and dependencies.

### Phase A — Critical Risks

[CRITICAL_REMEDIATION]

### Phase B — Important Stability and Security Improvements

[HIGH_PRIORITY_REMEDIATION]

### Phase C — Quality and Maintainability

[QUALITY_IMPROVEMENTS]

### Phase D — Scalability and Optimization

[SCALABILITY_AND_COST_IMPROVEMENTS]

Actual phases must be adapted to verified project needs.

Avoid unnecessary migrations and premature infrastructure changes.

## 40. Architectural Change Assessment

Before recommending major architectural replacement, evaluate:

- Existing strengths.
- Verified limitations.
- Compatibility.
- Migration complexity.
- Data preservation.
- Security.
- Operational costs.
- Expected benefits.
- Alternatives.
- Rollback or recovery.

Use an Architecture Decision Record for significant decisions.

Consult templates/ADR.md relative to the engineering-standards repository.

## 41. Cost-Benefit Evaluation

For major recommendations:

Estimated implementation effort:

[EFFORT_OR_UNKNOWN]

Expected operational cost:

[COST_OR_UNKNOWN]

Expected benefit:

[BENEFIT]

Dependencies:

[DEPENDENCIES]

Risks:

[RISKS]

Evidence quality:

[EVIDENCE_QUALITY]

Do not invent return on investment or cost savings.

## 42. Existing Production Protection

Production applications require special care.

During a default audit:

- Inspect authorized materials.
- Avoid modifications.
- Preserve existing user data.
- Protect credentials.
- Do not execute destructive migrations.
- Do not modify live permissions.
- Do not disable services.
- Do not publish releases.
- Do not change billing.
- Do not perform intrusive tests without authorization.

The audit report must distinguish recommendations from implemented changes.

## 43. Supervised Mode

In Supervised Mode:

1. Conduct authorized read-only analysis.
2. Record findings.
3. Verify evidence.
4. Classify severity.
5. Prioritize remediation.
6. Recommend changes.
7. Present the report.
8. Request authorization before significant implementation.

An audit alone does not authorize remediation.

Do not make production changes without specific approval.

Consult docs/governance.md.

## 44. Autonomous Build Mode

When Autonomous Build Mode is explicitly authorized:

- Apply all relevant Global Engineering Standards.
- Inspect the authorized development scope.
- Identify engineering gaps.
- Implement ordinary approved corrections.
- Run relevant tests.
- Revalidate changes.
- Continue independent authorized development.
- Record unresolved risks.
- Prepare a final report.

Do not interrupt the user for every ordinary source-code correction.

General autonomous authorization does not permit destructive production operations, uncontrolled spending or privileged account changes.

Consult docs/governance.md.

## 45. Autonomous Engineering Standards

Autonomous execution changes the approval workflow, not required engineering quality.

Applicable requirements remain mandatory for:

- Architecture.
- Security.
- Privacy.
- Data integrity.
- Scalability.
- Cost control.
- Reliability.
- Testing.
- Observability.
- Platform compatibility.
- Maintainability.

Do not bypass critical checks merely to report completion.

Document any verification that could not be performed.

## 46. Approval Matrix

Record approvals required for proposed remediation.

| Operation | Risk | Approval Requirement | Status |
|---|---|---|---|
| [OPERATION] | [RISK] | [APPROVAL] | [STATUS] |

Typical protected operations include:

- Production deployments.
- Destructive database changes.
- Privileged security configuration.
- Major migrations outside authorized scope.
- New paid service commitments.
- Publishing applications.
- Modifying unrelated projects.

Do not interpret the report as authorization for these operations.

## 47. Exceptions and Temporary Deviations

If a finding cannot be remediated immediately:

- Explain why.
- Assess risk.
- Identify compensating controls.
- Propose a remediation timeline.
- Record required approvals.
- Define review conditions.

Use templates/EXCEPTIONS.md.

An AI agent cannot approve its own exception.

Do not hide unresolved high-risk deviations.

## 48. Testing and Validation Evidence

Document actual executions.

| Check | Command or Method | Environment | Result | Evidence |
|---|---|---|---|---|
| [CHECK] | [METHOD] | [ENVIRONMENT] | [RESULT] | [EVIDENCE] |

Valid result labels:

- Passed.
- Failed.
- Skipped.
- Blocked.
- Not executed.

Do not mark tests passed when only the command was suggested.

Do not claim full regression coverage without evidence.

## 49. Change Log During Audit

For audits that include separately authorized modifications:

| Date | Change | Files or Resources | Authorization | Verification |
|---|---|---|---|---|
| [DATE] | [CHANGE] | [RESOURCES] | [AUTHORIZATION] | [EVIDENCE] |

Do not invent implemented changes.

For read-only audits, state:

"No application modifications were performed."

Only use that statement when it is factually true.

## 50. Audit Limitations

Document limitations explicitly.

Examples:

- No production access.
- Incomplete documentation.
- Missing credentials.
- Missing infrastructure metrics.
- Tests not executable.
- Database schema unavailable.
- External service unavailable.
- Incomplete repository.
- Missing financial data.
- Insufficient workload evidence.

Actual limitations:

[LIMITATIONS]

Explain how these limitations affect confidence.

Do not convert lack of evidence into proof that a system is safe.

## 51. Unverified Questions

Record unresolved questions.

| Question | Why It Matters | Evidence Needed | Priority |
|---|---|---|---|
| [QUESTION] | [REASON] | [EVIDENCE] | [PRIORITY] |

Distinguish open questions from confirmed defects.

## 52. Residual Risks

Record significant risks that remain after the review.

Risk:

[RISK]

Current mitigation:

[MITIGATION]

Residual impact:

[IMPACT]

Owner:

[OWNER]

Next review:

[DATE_OR_UNSCHEDULED]

Do not assume recommended mitigations have already been implemented.

## 53. Governance and Compliance Gaps

Review relevant engineering governance controls:

- Project instructions.
- Architecture decisions.
- Documented exceptions.
- Approval records.
- Security reviews.
- Data protection requirements.
- Deployment controls.
- Change management.
- Recovery procedures.
- Quality gates.

Confirmed governance gaps:

[GAPS]

Supporting evidence:

[EVIDENCE]

Following an engineering checklist does not automatically establish legal compliance.

## 54. Recommended Next Actions

Provide prioritized actions.

### Immediate

[IMMEDIATE_ACTIONS]

### Short-Term

[SHORT_TERM_ACTIONS]

### Planned Improvements

[PLANNED_IMPROVEMENTS]

### Future Review

[FUTURE_REVIEW]

Do not assign deadlines without understanding risk, resources and dependencies.

## 55. Human Approval and Action Checklist

List actual decisions requiring human intervention.

Examples:

- Approve a material architecture migration.
- Authorize production deployment.
- Approve destructive database changes.
- Provide external account configuration.
- Authorize paid service costs.
- Approve sensitive permission changes.
- Review legal obligations.
- Accept documented residual risks.

Actual required actions:

[HUMAN_ACTIONS]

For Autonomous Build Mode, consolidate remaining actions in the final handoff.

Do not invent approval requirements.

## 56. Audit Completion Criteria

An audit may be marked completed when:

1. The authorized scope has been assessed.
2. Relevant methods have been documented.
3. Evidence has been recorded.
4. Findings are classified.
5. Uncertainty is identified.
6. Material risks are prioritized.
7. Recommendations are actionable.
8. Unperformed checks are disclosed.
9. Required human decisions are listed.
10. The report accurately describes what was done.

An audit can be completed even when findings remain unresolved.

An audit being completed does not mean the application has been remediated.

## 57. Executive Risk Summary

Total confirmed critical findings:

[COUNT]

Total confirmed high findings:

[COUNT]

Total confirmed medium findings:

[COUNT]

Total confirmed low findings:

[COUNT]

Unverified concerns:

[COUNT]

Highest verified risk:

[RISK_OR_NONE_CONFIRMED]

Most important recommended action:

[RECOMMENDATION]

Do not invent counts.

Do not include hypotheses within confirmed finding totals.

## 58. Overall Engineering Assessment

Provide a grounded assessment of:

- Architecture quality.
- Security posture.
- Privacy controls.
- Data integrity.
- Scalability approach.
- Cost efficiency.
- Reliability.
- Testing maturity.
- Observability.
- Maintainability.

Assessment:

[ASSESSMENT]

Confidence level:

[HIGH | MEDIUM | LOW]

Supporting evidence:

[EVIDENCE]

Do not assign a numerical quality score without a defined, justified methodology.

## 59. Report Approval

Report prepared by:

[AUTHOR]

Report reviewed by:

[REVIEWER_OR_NOT_REVIEWED]

Review date:

[DATE_OR_NOT_REVIEWED]

Report acceptance:

[ACCEPTED | CHANGES_REQUESTED | NOT_REVIEWED]

Approval evidence:

[REFERENCE_OR_NONE]

Acceptance of an audit report does not automatically authorize remediation.

Never fabricate human approvals.

## 60. Final Audit Principles

Inspect before recommending changes.
Respect authorized scope.
Preserve production safety.
Protect credentials and sensitive information.
Apply relevant global engineering standards.
Use verified evidence.
Separate facts from hypotheses.
Classify risks proportionately.
Prioritize meaningful improvements.
Avoid unnecessary architectural rewrites.
Evaluate security and privacy.
Preserve data integrity.
Plan for credible scalability.
Control infrastructure and AI costs.
Validate tests and build results honestly.
Record audit limitations.
Document proposed exceptions.
Respect human approval boundaries.
Support authorized autonomous implementation.
Never fabricate findings or verification.
Provide actionable recommendations.
Deliver a clear human action checklist.