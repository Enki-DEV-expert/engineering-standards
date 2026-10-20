
# Project Engineering Instructions

## 1. Purpose

This file defines project-specific engineering context and operating instructions.

It complements the Global Engineering Standards maintained at:

~/engineering-standards/

This file is a template.

Replace placeholders with verified project information before using it in an application repository.

Do not treat placeholder examples as actual project requirements.

## 2. Global Standards

Apply the applicable Global Engineering Standards.

Global entry point:

~/engineering-standards/AGENTS.md

Resolve all references to docs/ relative to:

~/engineering-standards/

Relevant standards include:

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

Read specialized standards according to the task and the actual project technology.

Do not load every specialized document unnecessarily.

Project-specific requirements may strengthen global controls.

Do not silently weaken security, privacy, data integrity or financial safeguards.

Respect higher-priority platform instructions, sandbox restrictions and tool permissions.

## 3. Project Identity

Project name:

[PROJECT_NAME]

Project description:

[PROJECT_DESCRIPTION]

Primary business objective:

[BUSINESS_OBJECTIVE]

Primary user groups:

[TARGET_USERS]

Project owner:

[PROJECT_OWNER_OR_ROLE]

Repository root:

[PROJECT_REPOSITORY_PATH]

Current project status:

[NEW | DEVELOPMENT | STAGING | PRODUCTION | MAINTENANCE]

Replace these values with verified information.

Do not invent missing business requirements.

## 4. Project Platforms

Supported platforms:

[LIST_ACTUAL_SUPPORTED_PLATFORMS]

Possible platform categories include:

- Web.
- iOS.
- Android.
- macOS.
- Windows.
- Linux.
- Cross-platform desktop.
- Command-line applications.
- Backend services.
- Game development.
- Other specialized platforms.

These are examples, not required targets.

Do not implement unsupported platforms unless explicitly requested.

## 5. Technology Stack

Frontend:

[ACTUAL_FRONTEND_TECHNOLOGY]

Backend:

[ACTUAL_BACKEND_TECHNOLOGY]

Programming languages:

[ACTUAL_LANGUAGES]

Database:

[ACTUAL_DATABASE_TECHNOLOGY]

Authentication:

[ACTUAL_AUTHENTICATION_SYSTEM]

Storage:

[ACTUAL_STORAGE_SYSTEM]

Infrastructure and hosting:

[ACTUAL_INFRASTRUCTURE]

External APIs:

[ACTUAL_EXTERNAL_INTEGRATIONS]

AI models and services:

[ACTUAL_AI_TECHNOLOGIES_OR_NONE]

Game engine:

[ACTUAL_GAME_ENGINE_OR_NONE]

Other relevant technologies:

[OTHER_TECHNOLOGIES]

Inspect the repository before confirming these values.

Do not assume a provider based on another project.

Preserve the existing technology stack when appropriate.

## 6. Project Architecture

Describe the actual architectural structure.

Architecture overview:

[ARCHITECTURE_OVERVIEW]

Main application modules:

[MAIN_MODULES]

Critical business workflows:

[CRITICAL_WORKFLOWS]

Important dependencies:

[DEPENDENCIES]

Known architectural constraints:

[ARCHITECTURAL_CONSTRAINTS]

Relevant architecture decisions:

[ADR_REFERENCES]

Do not introduce major architectural changes without evidence and appropriate authorization.

Consult docs/architecture.md.

## 7. Business Invariants

Document business rules that must always remain correct.

Examples may include:

- Resource ownership.
- Financial transaction consistency.
- Reservation uniqueness.
- Inventory availability.
- Subscription entitlements.
- Tenant isolation.
- Game economy integrity.

Actual invariants:

[VERIFIED_BUSINESS_INVARIANTS]

Enforce critical invariants through trusted application and data boundaries.

Never replace deterministic business constraints with unsupported AI assumptions.

## 8. Data Architecture

Database provider:

[DATABASE_PROVIDER]

Database model:

[DATABASE_MODEL]

Data ownership rules:

[DATA_OWNERSHIP]

Tenant isolation model:

[TENANCY_MODEL]

Sensitive data categories:

[SENSITIVE_DATA_CATEGORIES]

Migration approach:

[MIGRATION_APPROACH]

Backup and recovery:

[BACKUP_AND_RECOVERY]

Document actual information only.

Never execute destructive production migrations automatically.

Consult docs/data.md and docs/privacy.md.

## 9. Security Requirements

Project-specific security requirements:

[SECURITY_REQUIREMENTS]

Authentication requirements:

[AUTHENTICATION_REQUIREMENTS]

Authorization model:

[AUTHORIZATION_MODEL]

Protected resources:

[PROTECTED_RESOURCES]

Threat considerations:

[THREAT_MODEL_OR_REFERENCES]

Apply least privilege.

Protect credentials.

Validate untrusted inputs.

Enforce authorization outside client applications and AI models.

Do not weaken established security controls for convenience.

Consult docs/security.md.

## 10. Privacy and Compliance

Relevant jurisdictions:

[APPLICABLE_JURISDICTIONS]

Personal data categories:

[PERSONAL_DATA_CATEGORIES]

Relevant regulatory requirements:

[VERIFIED_REGULATORY_REQUIREMENTS]

Data retention requirements:

[DATA_RETENTION]

Relevant third-party processors:

[PROCESSORS]

Document known obligations and uncertainties.

Do not assume that using a particular cloud provider establishes legal compliance.

Consult docs/privacy.md.

## 11. Scalability and Performance

Current workload:

[MEASURED_CURRENT_WORKLOAD_OR_UNKNOWN]

Expected growth:

[SUPPORTED_GROWTH_ASSUMPTIONS]

Peak concurrency:

[ESTIMATED_OR_MEASURED_CONCURRENCY]

Relevant latency targets:

[PERFORMANCE_TARGETS]

Known bottlenecks:

[VERIFIED_BOTTLENECKS_OR_UNKNOWN]

Scaling strategy:

[CURRENT_OR_APPROVED_SCALING_STRATEGY]

Design a credible evolution path toward future scale.

Do not assume that registered users equal concurrent users.

Do not introduce Kubernetes or microservices solely because future growth is expected.

Provision according to actual demand.

Consult docs/scalability.md.

## 12. Cost and Financial Constraints

Current hosting model:

[CURRENT_HOSTING_MODEL]

Known recurring costs:

[VERIFIED_COSTS_OR_UNKNOWN]

Approved development budget:

[APPROVED_BUDGET_OR_NOT_DEFINED]

Approved infrastructure budget:

[APPROVED_INFRASTRUCTURE_BUDGET_OR_NOT_DEFINED]

Relevant paid dependencies:

[PAID_SERVICES]

Cost monitoring:

[EXISTING_COST_CONTROLS]

No budget is implied when a field is unspecified.

Do not create paid commitments or increase spending without required authorization.

Consult docs/cost-engineering.md.

## 13. AI and Agentic Systems

AI functionality:

[AI_FUNCTIONALITY_OR_NONE]

AI providers:

[AI_PROVIDERS_OR_NONE]

Model selection requirements:

[MODEL_REQUIREMENTS]

RAG sources:

[RAG_SOURCES_OR_NONE]

Agent tools:

[AUTHORIZED_AGENT_TOOLS_OR_NONE]

AI evaluation requirements:

[AI_EVALUATION_REQUIREMENTS]

Human oversight requirements:

[AI_HUMAN_OVERSIGHT]

Do not assume AI is necessary.

Restrict model and agent permissions.

Enforce retrieval authorization.

Prevent uncontrolled inference costs.

Consult docs/ai-and-llm.md when relevant.

## 14. User Interface and Platform Requirements

Existing design system:

[DESIGN_SYSTEM_OR_NONE]

Brand constraints:

[BRAND_REQUIREMENTS]

Important user journeys:

[USER_JOURNEYS]

Accessibility requirements:

[ACCESSIBILITY_REQUIREMENTS]

Supported devices:

[SUPPORTED_DEVICES]

Offline requirements:

[OFFLINE_REQUIREMENTS]

Localization requirements:

[LOCALIZATION_REQUIREMENTS]

Preserve approved visual identity and established workflows.

Do not redesign existing screens without authorization.

Consult docs/mobile-and-web.md and docs/platforms-and-applications.md as relevant.

## 15. Quality and Testing

Use the project's verified commands.

Install command:

[INSTALL_COMMAND_OR_NOT_DEFINED]

Formatting command:

[FORMAT_COMMAND_OR_NOT_DEFINED]

Lint command:

[LINT_COMMAND_OR_NOT_DEFINED]

Type-checking command:

[TYPECHECK_COMMAND_OR_NOT_DEFINED]

Unit test command:

[UNIT_TEST_COMMAND_OR_NOT_DEFINED]

Integration test command:

[INTEGRATION_TEST_COMMAND_OR_NOT_DEFINED]

End-to-end test command:

[E2E_TEST_COMMAND_OR_NOT_DEFINED]

Build command:

[BUILD_COMMAND_OR_NOT_DEFINED]

Security scanning command:

[SECURITY_COMMAND_OR_NOT_DEFINED]

Do not invent test commands.

Do not execute commands against production resources without authorization.

Report tests actually executed.

Consult docs/quality-and-testing.md.

## 16. Observability

Logging system:

[LOGGING_SYSTEM]

Metrics:

[METRICS_SYSTEM]

Tracing:

[TRACING_SYSTEM]

Error reporting:

[ERROR_REPORTING_SYSTEM]

Alerting:

[ALERTING_SYSTEM]

Known operational limitations:

[OBSERVABILITY_LIMITATIONS]

Protect sensitive information in telemetry.

Avoid unnecessary high-volume logging.

Consult docs/observability.md.

## 17. Development Operating Modes

The project supports:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires an explicit instruction from the authorized user.

Do not activate Autonomous Build Mode based solely on this template.

Follow docs/governance.md for permission boundaries and operational rules.

## 18. Supervised Mode

In Supervised Mode:

1. Inspect relevant project context.
2. Understand the requested change.
3. Identify affected components.
4. Assess risks.
5. Present a plan for significant modifications.
6. Obtain required approval.
7. Implement within approved scope.
8. Run relevant checks.
9. Report results.

Existing production audits must begin read-only.

Do not modify unrelated files.

## 19. Autonomous Build Mode

When explicitly authorized to build the application from beginning to end:

- Plan the implementation.
- Make reasonable technical decisions within scope.
- Implement all feasible authorized functionality.
- Create and modify authorized project files.
- Install suitable local dependencies.
- Configure safe local development resources.
- Write appropriate tests.
- Run available validation.
- Investigate and correct failures.
- Continue through independent tasks without unnecessary interruptions.
- Prepare documentation and deployment artifacts.
- Consolidate remaining human actions at final handoff.

Do not stop after each routine milestone.

Do not require repeated approval for ordinary implementation decisions within the authorized scope.

Respect actual tool permissions and execution limits.

Never claim continued execution after the session ends without a supported mechanism.

## 20. Engineering Standards in Autonomous Mode

Autonomous Build Mode changes the approval workflow, not engineering quality.

All applicable global engineering standards remain mandatory.

Apply:

- Security and privacy controls.
- Correct architecture.
- Data integrity.
- Authorization.
- Scalability planning.
- Cost efficiency.
- Maintainable code.
- Relevant tests.
- Appropriate observability.
- Platform-specific requirements.
- Human oversight for high-risk actions.

Never weaken these requirements merely to accelerate development.

Do not claim production readiness or verified scalability without evidence.

## 21. Protected Operations

Require appropriate explicit authorization before:

- Production deployment.
- Production database modification.
- Destructive migration.
- Deletion of important data.
- Privileged access changes.
- High-impact security changes.
- Significant paid commitments.
- Publishing applications or games.
- Actions affecting unrelated projects.
- Sensitive external communications.

A general request to build an application does not authorize these actions.

Do not bypass tool or platform safeguards.

## 22. Project-Specific Approval Rules

Approved development scope:

[AUTHORIZED_DEVELOPMENT_SCOPE]

Protected environments:

[PROTECTED_ENVIRONMENTS]

Protected resources:

[PROTECTED_RESOURCES]

Approval contacts or roles:

[APPROVAL_AUTHORITIES]

Pre-authorized operations:

[EXPLICITLY_PREAUTHORIZED_OPERATIONS_OR_NONE]

Financial limits:

[EXPLICIT_FINANCIAL_LIMITS_OR_NONE]

Do not infer approval from unspecified fields.

Follow documented authorization and applicable platform restrictions.

## 23. Production Protection

Treat production systems as protected.

Before significant production changes:

- Assess impact.
- Review security.
- Review data integrity.
- Confirm compatibility.
- Establish rollback or recovery.
- Review operational costs.
- Obtain required approval.

Do not assume repository access grants production authorization.

## 24. Existing Production Applications

For existing production applications:

1. Inspect the repository.
2. Identify existing behavior.
3. Preserve user data.
4. Identify relevant security boundaries.
5. Review compatibility.
6. Assess meaningful risks.
7. Recommend incremental improvements.
8. Obtain approval before significant changes.

Do not rewrite working systems merely to satisfy preferences.

Apply global standards progressively.

## 25. Change Management

Before significant changes:

- Define the objective.
- Identify affected files.
- Review dependencies.
- Assess compatibility.
- Evaluate security.
- Evaluate privacy.
- Evaluate data integrity.
- Estimate cost impact.
- Define testing.
- Define rollback.
- Obtain required authorization.

Use documented architecture decisions where appropriate.

## 26. Git and Repository Safety

Respect existing version control state.

Do not:

- Discard unrelated changes.
- Delete untracked user files.
- Force-push remote branches.
- Overwrite protected branches.
- Publish code without authorization.
- Commit credentials.

Use focused changes.

Inspect repository status before significant modifications.

## 27. Dependencies and External Services

Before introducing dependencies:

- Confirm necessity.
- Evaluate maintenance.
- Check licenses.
- Assess security.
- Consider bundle or binary size.
- Review costs.

Do not introduce paid external services without appropriate authorization.

When credentials are unavailable, prepare safe integration boundaries and document remaining configuration.

## 28. Documentation

Maintain relevant documentation.

Include:

- Project overview.
- Setup instructions.
- Architecture.
- Environment configuration.
- Build and test procedures.
- External dependencies.
- Deployment preparation.
- Known limitations.

Documentation must describe actual implemented behavior.

Do not fabricate completed features.

## 29. Project-Specific Exceptions

Use documented exceptions when a global standard cannot reasonably be applied.

Exception records must include:

- Requirement.
- Reason.
- Scope.
- Risks.
- Compensating controls.
- Approval.
- Review date.
- Expiration where appropriate.

Use the approved EXCEPTIONS template.

An exception cannot override applicable law or platform security restrictions.

## 30. Final Handoff Requirements

For significant development work, report:

1. What was implemented.
2. What was changed.
3. What was tested.
4. What passed.
5. What failed.
6. What was not tested.
7. Remaining risks.
8. Deployment readiness.
9. Required approvals.
10. Human actions.
11. Recommended next steps.

Clearly distinguish completed work from blocked or unverified work.

## 31. Autonomous Build Final Checklist

When Autonomous Build Mode is active, provide a consolidated final checklist of actions the user must perform.

Possible categories include:

- External account creation.
- Domain configuration.
- Credentials.
- Paid service approvals.
- Production environment configuration.
- Database migration approvals.
- Legal documentation review.
- Application publishing.
- Final deployment approval.

Include only actions actually required.

Do not repeatedly interrupt for tasks that can be completed safely and independently.

## 32. Project Definition of Done

For significant project changes:

- Requirements understood.
- Architecture respected.
- Security reviewed.
- Privacy considered.
- Data integrity preserved.
- Scalability requirements evaluated.
- Costs considered.
- Relevant tests executed.
- Compatibility assessed.
- Documentation updated.
- Remaining risks documented.
- Required approvals obtained.
- Human actions identified.
- Results honestly reported.

Never claim the application is complete merely because the code compiles.

## 33. Final Project Principles

Apply global standards according to project relevance.
Preserve existing working systems.
Use the actual technology stack.
Maintain strong security and privacy.
Protect data integrity.
Design for credible scalability.
Control infrastructure and API costs.
Write maintainable code.
Test important functionality.
Respect platform constraints.
Avoid unnecessary complexity.
Support authorized autonomous development.
Require approval for protected operations.
Report real results.
Deliver a clear final handoff.