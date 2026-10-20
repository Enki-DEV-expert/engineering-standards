
# Architecture Decision Record (ADR)

## 1. Purpose

Document significant software architecture and technical decisions.

This template is part of the Global Engineering Standards framework:

~/engineering-standards/

Architecture Decision Records provide traceability for:

- Technology selection.
- Architectural patterns.
- Data architecture.
- Infrastructure decisions.
- Security architecture.
- AI system design.
- Scalability strategies.
- Reliability decisions.
- Integration approaches.
- Significant technical migrations.

This is a reusable template, not an approved decision.

Replace all placeholders with verified project-specific information.

Do not fabricate evaluations, benchmarks, pricing or approvals.

## 2. ADR Identification

ADR ID:

[ADR-0001]

Title:

[SHORT_DECISION_TITLE]

Project:

[PROJECT_NAME]

Repository:

[REPOSITORY_PATH]

Decision status:

[PROPOSED | ACCEPTED | REJECTED | SUPERSEDED | DEPRECATED]

Created:

[YYYY-MM-DD]

Last reviewed:

[YYYY-MM-DD_OR_NOT_REVIEWED]

Decision owner:

[PERSON_OR_ROLE]

Related ADRs:

[RELATED_ADRS_OR_NONE]

Related requirements:

[REQUIREMENT_REFERENCES]

## 3. Decision Summary

Summarize the decision in clear language.

Decision:

[DECISION_SUMMARY]

Primary reason:

[PRIMARY_JUSTIFICATION]

Expected benefit:

[EXPECTED_BENEFIT]

Important limitation:

[IMPORTANT_LIMITATION]

Keep this section concise and understandable.

## 4. Business Context

Describe the actual problem.

Business objective:

[BUSINESS_OBJECTIVE]

Target users:

[TARGET_USERS]

Required functionality:

[REQUIRED_FUNCTIONALITY]

Operational context:

[OPERATIONAL_CONTEXT]

Current constraints:

[CONSTRAINTS]

Do not choose architecture based only on technology trends.

## 5. Technical Context

Existing technologies:

[EXISTING_STACK]

Current architecture:

[CURRENT_ARCHITECTURE]

Relevant integrations:

[INTEGRATIONS]

Current data architecture:

[DATA_ARCHITECTURE]

Deployment environment:

[ENVIRONMENT]

Known limitations:

[VERIFIED_LIMITATIONS]

For existing applications, inspect the implementation before proposing replacement technologies.

For new applications, document the assumptions used in the evaluation.

## 6. Decision Drivers

Identify the factors that influence the decision.

Possible drivers:

- Security.
- Privacy.
- Data integrity.
- Scalability.
- Performance.
- Reliability.
- Availability.
- Developer productivity.
- Maintainability.
- Portability.
- Operational complexity.
- Vendor dependency.
- Compliance.
- Cost.
- Time to market.
- Team expertise.
- Platform compatibility.

Actual project priorities:

[PRIORITIZED_DECISION_DRIVERS]

Distinguish mandatory requirements from preferences.

## 7. Functional Requirements

Required behavior:

[FUNCTIONAL_REQUIREMENTS]

Important workflows:

[CRITICAL_WORKFLOWS]

Integration requirements:

[INTEGRATION_REQUIREMENTS]

Acceptance criteria:

[ACCEPTANCE_CRITERIA]

Do not invent requirements not supplied or supported by verified project context.

## 8. Non-Functional Requirements

Document relevant measurable requirements.

Security:

[SECURITY_REQUIREMENTS]

Privacy:

[PRIVACY_REQUIREMENTS]

Availability:

[AVAILABILITY_REQUIREMENTS]

Latency:

[LATENCY_REQUIREMENTS]

Throughput:

[THROUGHPUT_REQUIREMENTS]

Concurrency:

[CONCURRENCY_REQUIREMENTS]

Data volume:

[DATA_VOLUME]

Recovery requirements:

[RECOVERY_REQUIREMENTS]

Portability:

[PORTABILITY_REQUIREMENTS]

Cost constraints:

[COST_CONSTRAINTS]

Unknown values must remain explicitly unknown.

Do not present targets as measured performance.

## 9. Current-State Evidence

Evidence reviewed:

[EVIDENCE_REFERENCES]

Measured metrics:

[MEASURED_METRICS_OR_NONE]

Observed problems:

[CONFIRMED_PROBLEMS_OR_NONE]

Assumptions:

[EXPLICIT_ASSUMPTIONS]

Confidence:

[HIGH | MEDIUM | LOW]

Separate observed facts from estimates and hypotheses.

## 10. Options Considered

Evaluate reasonable alternatives.

Do not manufacture alternatives merely to justify a preferred solution.

### Option A

Name:

[OPTION_A_NAME]

Description:

[OPTION_A_DESCRIPTION]

Advantages:

[OPTION_A_ADVANTAGES]

Disadvantages:

[OPTION_A_DISADVANTAGES]

Security implications:

[OPTION_A_SECURITY]

Scalability implications:

[OPTION_A_SCALABILITY]

Operational implications:

[OPTION_A_OPERATIONS]

Cost considerations:

[OPTION_A_COST]

### Option B

Name:

[OPTION_B_NAME]

Description:

[OPTION_B_DESCRIPTION]

Advantages:

[OPTION_B_ADVANTAGES]

Disadvantages:

[OPTION_B_DISADVANTAGES]

Security implications:

[OPTION_B_SECURITY]

Scalability implications:

[OPTION_B_SCALABILITY]

Operational implications:

[OPTION_B_OPERATIONS]

Cost considerations:

[OPTION_B_COST]

### Option C — Optional

Name:

[OPTION_C_NAME_OR_NOT_APPLICABLE]

Description:

[OPTION_C_DESCRIPTION]

Advantages:

[OPTION_C_ADVANTAGES]

Disadvantages:

[OPTION_C_DISADVANTAGES]

Cost considerations:

[OPTION_C_COST]

Include only meaningful alternatives.

## 11. Comparative Evaluation

Summarize the trade-offs.

| Criterion | Option A | Option B | Option C |
|---|---|---|---|
| Security | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Privacy | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Data integrity | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Scalability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Performance | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Reliability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Maintainability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Cost | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Complexity | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Portability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |

Remove irrelevant columns and criteria when completing an actual ADR.

Do not assign numerical scores without a defensible methodology.

## 12. Selected Decision

Selected option:

[SELECTED_OPTION]

Detailed decision:

[DECISION_DETAILS]

Why selected:

[DECISION_RATIONALE]

Why alternatives were not selected:

[ALTERNATIVE_REJECTION_REASONS]

Important assumptions:

[ASSUMPTIONS]

Document the actual trade-offs.

## 13. Architectural Structure

Describe the resulting architecture.

Main components:

[COMPONENTS]

Responsibilities:

[RESPONSIBILITIES]

Communication patterns:

[COMMUNICATION_PATTERNS]

Data flow:

[DATA_FLOW]

External dependencies:

[DEPENDENCIES]

Trust boundaries:

[TRUST_BOUNDARIES]

Diagram or reference:

[DIAGRAM_REFERENCE_OR_NONE]

Keep the architecture as simple as reasonably possible.

Consult docs/architecture.md.

## 14. Security Impact

Assess:

- Authentication.
- Authorization.
- Input validation.
- Data isolation.
- Secret management.
- Dependency security.
- Network exposure.
- Supply chain risk.
- Privileged operations.
- Auditability.

Security consequences:

[SECURITY_CONSEQUENCES]

New attack surfaces:

[ATTACK_SURFACES]

Required controls:

[REQUIRED_CONTROLS]

Residual risks:

[RESIDUAL_RISKS]

Consult docs/security.md.

## 15. Privacy and Compliance Impact

Personal data involved:

[PERSONAL_DATA]

Data processing purposes:

[PROCESSING_PURPOSES]

Data minimization implications:

[DATA_MINIMIZATION]

Relevant providers or processors:

[PROCESSORS]

International transfer considerations:

[TRANSFERS]

Data retention implications:

[RETENTION]

Relevant verified legal requirements:

[LEGAL_REQUIREMENTS]

Unresolved compliance questions:

[OPEN_COMPLIANCE_QUESTIONS]

Do not claim legal compliance solely because a technology supports particular controls.

Consult docs/privacy.md.

## 16. Data Architecture Impact

Database changes:

[DATABASE_CHANGES]

Schema implications:

[SCHEMA_IMPLICATIONS]

Consistency requirements:

[CONSISTENCY_REQUIREMENTS]

Transaction boundaries:

[TRANSACTION_BOUNDARIES]

Tenant isolation:

[TENANCY_IMPACT]

Migration requirements:

[MIGRATION_REQUIREMENTS]

Backup implications:

[BACKUP_IMPACT]

Recovery implications:

[RECOVERY_IMPACT]

Protect data integrity.

Never treat an ADR as permission to execute destructive migrations.

Consult docs/data.md.

## 17. Scalability Assessment

Current workload:

[ACTUAL_WORKLOAD_OR_UNKNOWN]

Expected growth:

[GROWTH_ASSUMPTIONS]

Peak concurrency:

[CONCURRENCY_OR_UNKNOWN]

Potential bottlenecks:

[BOTTLENECKS]

Scaling approach:

[SCALING_STRATEGY]

Capacity validation:

[VALIDATION_PLAN]

Design for an achievable evolution path toward large-scale use.

Do not confuse total registered users with concurrent users.

Do not claim support for millions of users without relevant evidence.

Consult docs/scalability.md.

## 18. Performance Impact

Expected performance effects:

[EXPECTED_EFFECTS]

Relevant metrics:

[METRICS]

Measurement approach:

[MEASUREMENT_PLAN]

Performance risks:

[PERFORMANCE_RISKS]

Optimization opportunities:

[OPTIMIZATION_OPPORTUNITIES]

Distinguish estimates from measurements.

Avoid premature optimization.

## 19. Reliability and Availability

Failure modes:

[FAILURE_MODES]

Availability implications:

[AVAILABILITY_IMPACT]

Recovery requirements:

[RECOVERY_REQUIREMENTS]

Dependency failures:

[DEPENDENCY_FAILURES]

Fallback strategy:

[FALLBACK_STRATEGY]

Operational risks:

[OPERATIONAL_RISKS]

Design resilience proportionate to business requirements.

## 20. Infrastructure and Cloud

Hosting approach:

[HOSTING_APPROACH]

Cloud provider:

[PROVIDER_OR_NONE]

Managed services:

[MANAGED_SERVICES]

Container requirements:

[CONTAINERS_OR_NONE]

Kubernetes requirements:

[KUBERNETES_OR_NONE]

Infrastructure-as-Code:

[IAC_APPROACH]

Deployment model:

[DEPLOYMENT_MODEL]

No cloud provider is mandatory.

Evaluate AWS, Azure, GCP and other alternatives according to actual requirements.

Do not introduce Kubernetes without sufficient operational justification.

Consult docs/architecture.md and docs/scalability.md.

## 21. Vendor Independence

Vendor-specific dependencies:

[VENDOR_DEPENDENCIES]

Portability constraints:

[PORTABILITY_CONSTRAINTS]

Replacement strategy:

[REPLACEMENT_STRATEGY]

Data export considerations:

[DATA_EXPORT]

Estimated migration complexity:

[MIGRATION_COMPLEXITY]

Vendor neutrality is desirable when it provides meaningful value.

Do not build costly abstractions solely to achieve theoretical portability.

## 22. Financial Evaluation

Estimated initial cost:

[INITIAL_COST_OR_UNKNOWN]

Estimated monthly cost:

[MONTHLY_COST_OR_UNKNOWN]

Estimated annual cost:

[ANNUAL_COST_OR_UNKNOWN]

Currency:

[CURRENCY]

Usage assumptions:

[USAGE_ASSUMPTIONS]

Pricing sources:

[PRICING_REFERENCES]

Pricing verification date:

[YYYY-MM-DD_OR_NOT_VERIFIED]

Possible cost growth:

[GROWTH_COST_SCENARIOS]

Cost controls:

[COST_CONTROLS]

Budget approval:

[APPROVAL_STATUS]

Never invent pricing.

Do not create paid commitments based on an ADR alone.

Consult docs/cost-engineering.md.

## 23. AI and Agentic Systems Impact

Complete this section only if relevant.

AI functionality:

[AI_FUNCTIONALITY]

Model providers:

[MODEL_PROVIDERS]

Inference costs:

[INFERENCE_COSTS]

Agent responsibilities:

[AGENT_RESPONSIBILITIES]

Authorized tools:

[AUTHORIZED_TOOLS]

RAG architecture:

[RAG_ARCHITECTURE]

Evaluation requirements:

[EVALUATION_REQUIREMENTS]

Prompt injection controls:

[PROMPT_INJECTION_CONTROLS]

Human oversight:

[HUMAN_OVERSIGHT]

Data exposure risks:

[DATA_EXPOSURE_RISKS]

Do not use generative AI where deterministic methods are more appropriate.

Consult docs/ai-and-llm.md.

## 24. Platform Compatibility

Applicable platforms:

[PLATFORMS]

Compatibility requirements:

[COMPATIBILITY_REQUIREMENTS]

Accessibility implications:

[ACCESSIBILITY]

Offline behavior:

[OFFLINE_BEHAVIOR]

Release constraints:

[RELEASE_CONSTRAINTS]

For relevant projects, consult:

- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Do not impose requirements from unrelated platforms.

## 25. Quality and Testing

Required unit tests:

[UNIT_TESTS]

Required integration tests:

[INTEGRATION_TESTS]

Required end-to-end tests:

[E2E_TESTS]

Security validation:

[SECURITY_TESTS]

Performance validation:

[PERFORMANCE_TESTS]

Build verification:

[BUILD_VALIDATION]

Acceptance criteria:

[ACCEPTANCE_CRITERIA]

Do not report tests as passed before executing them.

Consult docs/quality-and-testing.md.

## 26. Observability and Operations

Required logs:

[LOGGING]

Metrics:

[METRICS]

Tracing:

[TRACING]

Alerts:

[ALERTS]

Operational dashboards:

[DASHBOARDS]

Incident response implications:

[INCIDENT_RESPONSE]

Data retention and privacy:

[TELEMETRY_PRIVACY]

Cost implications:

[OBSERVABILITY_COSTS]

Consult docs/observability.md.

## 27. Migration Strategy

Complete when replacing or significantly changing an existing system.

Current state:

[CURRENT_STATE]

Target state:

[TARGET_STATE]

Migration approach:

[MIGRATION_APPROACH]

Compatibility strategy:

[COMPATIBILITY_STRATEGY]

Data migration requirements:

[DATA_MIGRATION]

User impact:

[USER_IMPACT]

Downtime risks:

[DOWNTIME_RISKS]

Rollback feasibility:

[ROLLBACK_FEASIBILITY]

Do not assume every migration is reversible.

## 28. Implementation Plan

Implementation stages:

1. [STAGE_1]
2. [STAGE_2]
3. [STAGE_3]
4. [STAGE_4]

Dependencies:

[DEPENDENCIES]

Required resources:

[RESOURCES]

Expected deliverables:

[DELIVERABLES]

Validation milestones:

[VALIDATION_MILESTONES]

Keep implementation proportionate to project complexity.

## 29. Operational Risks

Identify relevant risks.

Risk:

[RISK_DESCRIPTION]

Likelihood:

[LIKELIHOOD_OR_UNKNOWN]

Impact:

[IMPACT_OR_UNKNOWN]

Mitigation:

[MITIGATION]

Residual risk:

[RESIDUAL_RISK]

Owner:

[RISK_OWNER]

Repeat this structure for additional material risks.

Avoid speculative risk inflation.

## 30. Reversibility and Rollback

Decision reversibility:

[REVERSIBLE | PARTIALLY_REVERSIBLE | DIFFICULT_TO_REVERSE | IRREVERSIBLE]

Rollback approach:

[ROLLBACK_PLAN]

Recovery prerequisites:

[RECOVERY_PREREQUISITES]

Data preservation requirements:

[DATA_PROTECTION]

Conditions requiring rollback:

[ROLLBACK_TRIGGERS]

Never claim reversible database changes without validating the recovery approach.

## 31. Dependencies and Prerequisites

Required dependencies:

[DEPENDENCIES]

External accounts:

[EXTERNAL_ACCOUNTS]

Credentials:

[CREDENTIAL_REQUIREMENTS]

Infrastructure prerequisites:

[INFRASTRUCTURE_REQUIREMENTS]

Human actions:

[HUMAN_ACTIONS]

Missing prerequisites must be reported.

Do not invent credentials.

## 32. Decision Authority

Operating mode:

[SUPERVISED | AUTONOMOUS_BUILD]

Decision risk classification:

[LOW | MODERATE | HIGH | CRITICAL]

Decision authorization:

[WITHIN_APPROVED_SCOPE | REQUIRES_HUMAN_APPROVAL | EXPLICITLY_APPROVED]

Authorized scope:

[AUTHORIZATION_SCOPE]

Approval reference:

[APPROVAL_REFERENCE_OR_NONE]

This ADR documents a technical decision.

It does not grant additional operational permissions.

## 33. Supervised Mode Requirements

In Supervised Mode:

- Investigate the relevant architecture.
- Identify reasonable alternatives.
- Document material trade-offs.
- Present recommendations.
- Obtain approval before significant changes.
- Implement only within the approved scope.
- Report verification results.

Do not modify production systems during a read-only architecture review.

## 34. Autonomous Build Mode Requirements

In Autonomous Build Mode:

- Apply all relevant Global Engineering Standards.
- Make ordinary architectural decisions within the approved scope.
- Document significant decisions.
- Continue implementation without unnecessary approval requests.
- Run appropriate tests.
- Correct identified defects.
- Respect technical execution limits.
- Escalate protected or out-of-scope operations.
- Include unresolved approvals in the final handoff.

An explicit request to build a complete application authorizes ordinary engineering decisions within its scope.

It does not automatically authorize destructive operations, production deployment, privileged access changes or paid commitments.

Consult docs/governance.md.

## 35. Engineering Standards Preservation

Architecture decisions in both operating modes must consider all applicable standards:

- Security.
- Privacy.
- Data integrity.
- Reliability.
- Scalability.
- Cost efficiency.
- Quality.
- Testing.
- Observability.
- Platform compatibility.
- Maintainability.

Autonomous execution changes the approval workflow, not the required engineering quality.

Do not weaken fundamental safeguards to finish development faster.

## 36. Approval Requirements

Require appropriate human approval for:

- Production modifications.
- Destructive migrations.
- Significant breaking changes outside authorized scope.
- Privileged security changes.
- Significant financial commitments.
- Major production architecture migrations.
- Unrelated repository modifications.
- Other protected operations.

Do not interpret an accepted ADR as blanket permission to perform these actions.

Approval must cover the actual operation where required.

## 37. Decision Acceptance

Decision status:

[PROPOSED | ACCEPTED | REJECTED | SUPERSEDED]

Accepted by:

[AUTHORIZED_PERSON_OR_ROLE_OR_NOT_REQUIRED]

Acceptance date:

[YYYY-MM-DD_OR_PENDING]

Acceptance evidence:

[APPROVAL_REFERENCE_OR_NONE]

Conditions:

[CONDITIONS]

For ordinary autonomous decisions, record that acceptance falls within the explicitly authorized development scope when applicable.

Never fabricate human approvals.

## 38. Validation Criteria

The decision is considered successfully implemented when:

1. [VALIDATION_CRITERION_1]
2. [VALIDATION_CRITERION_2]
3. [VALIDATION_CRITERION_3]

Required evidence:

[EVIDENCE]

Validation status:

[NOT_STARTED | IN_PROGRESS | VERIFIED | FAILED | BLOCKED]

Do not mark VERIFIED without relevant evidence.

## 39. Outcome and Consequences

Expected positive consequences:

[POSITIVE_CONSEQUENCES]

Expected negative consequences:

[NEGATIVE_CONSEQUENCES]

Known trade-offs:

[TRADE_OFFS]

Remaining technical debt:

[TECHNICAL_DEBT]

Operational consequences:

[OPERATIONAL_CONSEQUENCES]

Document both benefits and limitations.

## 40. Post-Implementation Review

Review date:

[YYYY-MM-DD_OR_NOT_SCHEDULED]

Observed results:

[MEASURED_RESULTS_OR_NOT_YET_AVAILABLE]

Unexpected consequences:

[UNEXPECTED_CONSEQUENCES]

Cost outcome:

[COST_OUTCOME_OR_UNKNOWN]

Performance outcome:

[PERFORMANCE_OUTCOME_OR_UNKNOWN]

Required follow-up:

[FOLLOW_UP]

Separate expected results from actual measurements.

## 41. Supersession and Replacement

If a later decision replaces this ADR:

New ADR reference:

[REPLACEMENT_ADR]

Reason for replacement:

[REASON]

Supersession date:

[YYYY-MM-DD]

Migration implications:

[MIGRATION_IMPLICATIONS]

Preserve the original decision history.

Do not silently rewrite previous decisions to match new architecture.

## 42. Decision History

| Date | Change | Responsible Party |
|---|---|---|
| [YYYY-MM-DD] | [INITIAL_DECISION] | [PERSON_OR_ROLE] |

Record meaningful updates.

Do not fabricate entries.

## 43. Final ADR Principles

Base decisions on verified requirements.
Evaluate relevant alternatives.
Consider actual project constraints.
Apply security by design.
Apply privacy by design.
Preserve data integrity.
Plan for credible scalability.
Avoid premature infrastructure complexity.
Evaluate financial and operational costs.
Prefer maintainable solutions.
Protect production systems.
Use evidence where available.
Document important trade-offs.
Preserve architecture decision history.
Respect human approval boundaries.
Support authorized autonomous development.
Never fabricate verification or approval.