---
name: engineering-safe-implementation
description: Plan, implement, test, debug and deliver software safely under the Global Engineering Standards. Use for end-to-end application development, autonomous builds, feature implementation, refactoring, bug fixing, integration work, regression prevention, quality validation, deployment preparation and final engineering handoff.
---

# Engineering Safe Implementation

## 1. Purpose

Provide a repeatable, secure and quality-focused workflow for software implementation.

This skill supports:

- Complete application development.
- New feature implementation.
- Existing application maintenance.
- Bug fixing.
- Safe refactoring.
- API implementation.
- Database integration.
- AI and agentic functionality.
- Web and mobile development.
- Desktop and native development.
- Game development.
- Testing and validation.
- Error correction.
- Deployment preparation.
- Autonomous engineering execution.
- Final delivery and handoff.

The objective is to convert requirements into working, maintainable and appropriately validated software without compromising fundamental engineering safeguards.

Do not equate generated code with completed functionality.

## 2. Global Engineering Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary entry point:

~/engineering-standards/AGENTS.md

Apply relevant standards from:

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

Resolve these paths relative to the engineering-standards repository.

Read applicable standards according to the actual task and technology.

Do not load every document unnecessarily.

## 3. Related Engineering Skills

Use relevant specialized procedures when appropriate:

- engineering-security-standards-check
- engineering-privacy-check
- engineering-database-review
- engineering-cost-estimate
- engineering-architecture-review

Do not assume every specialized skill must run for every trivial code change.

Select the procedures justified by project risk and scope.

Preserve the requirements of all applicable global standards.

## 4. When to Use This Skill

Use for:

- Building an application from scratch.
- Implementing a complete feature.
- Executing a development plan.
- Fixing a confirmed defect.
- Performing authorized refactoring.
- Adding or modifying APIs.
- Integrating databases.
- Implementing authentication.
- Building AI-powered functionality.
- Preparing an application for release.
- Validating completed implementation.
- Coordinating Autonomous Build Mode.

For a strictly read-only audit, use the relevant review skills and audit template without modifying the application.

## 5. Fundamental Implementation Principles

Apply:

1. Requirements before implementation.
2. Architecture appropriate to the problem.
3. Security by Design.
4. Privacy by Design.
5. Data integrity.
6. Clear component responsibilities.
7. Maintainable code.
8. Appropriate automated testing.
9. Regression prevention.
10. Cost awareness.
11. Reliable error handling.
12. Relevant observability.
13. Platform compatibility.
14. Honest verification.
15. Human approval for protected operations.

Prefer the simplest effective implementation.

Avoid unnecessary technologies, dependencies and abstractions.

## 6. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires an explicit user instruction authorizing end-to-end autonomous development.

The chosen mode changes approval frequency, not engineering quality.

Consult docs/governance.md.

Do not activate autonomous development merely because this skill is loaded.

## 7. Supervised Mode

For Supervised Mode:

1. Inspect relevant project files.
2. Understand the requested change.
3. Identify affected components.
4. Assess risks and dependencies.
5. Propose a suitable implementation approach.
6. Obtain approval before significant modifications.
7. Implement within the approved scope.
8. Run relevant validation.
9. Correct authorized defects.
10. Report actual results.

Existing production audits begin read-only.

Do not make unrelated changes.

## 8. Autonomous Build Mode

When the user explicitly requests autonomous application development:

1. Understand the complete objective.
2. Review available project context.
3. Identify relevant engineering standards.
4. Define architecture and implementation stages.
5. Implement all feasible authorized functionality.
6. Configure appropriate local tooling.
7. Add required tests.
8. Run available validation.
9. Investigate failures.
10. Correct defects within scope.
11. Continue with the next independent task.
12. Prepare documentation and deployment artifacts.
13. Record unresolved external dependencies.
14. Deliver a complete and honest handoff.

Do not request approval after every ordinary development milestone.

Do not ask the user to perform tasks the agent is authorized and technically able to complete.

Do not promise indefinite execution beyond the available environment or session.

## 9. Autonomous Authorization Scope

An explicit end-to-end build request may authorize ordinary development within the stated project scope.

Subject to actual tool permissions, this may include:

- Creating project files.
- Modifying authorized source files.
- Implementing features.
- Writing tests.
- Running local tests.
- Building local artifacts.
- Selecting suitable libraries.
- Installing appropriate project dependencies.
- Preparing migration files.
- Creating local test fixtures.
- Fixing build failures.
- Updating project documentation.

This authorization does not automatically include production deployments, destructive changes, paid commitments or privileged external actions.

## 10. No Unnecessary Interruptions

In Autonomous Build Mode:

- Do not stop after one implemented feature.
- Do not request approval for every source file.
- Do not ask repeatedly about requirements already established.
- Do not require confirmation for routine authorized tests.
- Do not pause after every architectural decision.
- Do not stop merely because errors are encountered.
- Do not delegate ordinary executable work back to the user unnecessarily.

Make reasonable, reversible technical decisions within scope.

Document material assumptions.

Continue independent work when another task is blocked.

## 11. Autonomous Build Quality Contract

Autonomous execution must preserve all applicable engineering requirements.

Mandatory considerations include:

- Security.
- Privacy.
- Authentication.
- Authorization.
- Data integrity.
- Architecture.
- Scalability.
- Reliability.
- Performance.
- Cost efficiency.
- Maintainability.
- Accessibility.
- Testing.
- Observability.
- Platform compatibility.
- Safe deployment preparation.

Do not downgrade security or testing merely to finish faster.

Do not claim compliance or large-scale readiness without evidence.

## 12. Project Identification

Before implementation, identify:

- Project name.
- Repository location.
- Project purpose.
- Target users.
- Supported platforms.
- Existing technology stack.
- Current development status.
- Relevant integrations.
- Operational environment.
- Authorized development scope.

For an existing project, inspect actual files before making assumptions.

Do not infer technologies from another application.

## 13. Requirements Analysis

Identify:

- Required features.
- Primary workflows.
- Business invariants.
- User roles.
- Data requirements.
- Security requirements.
- Privacy requirements.
- Integration requirements.
- Non-functional requirements.
- Acceptance criteria.

Separate known requirements from assumptions.

Do not invent essential product behavior.

## 14. Handling Missing Requirements

When a non-critical detail is unspecified:

- Choose a reasonable safe default.
- Prefer reversible decisions.
- Follow established project conventions.
- Document the assumption.
- Continue authorized work.

When a material business decision cannot be safely inferred:

- Identify the blocker.
- Avoid implementing an arbitrary irreversible choice.
- Continue independent work.
- Request clarification only when genuinely necessary.

Do not turn ordinary uncertainty into unnecessary approval requests.

## 15. Architecture-First Planning

Before substantial implementation, define:

- Main components.
- Responsibility boundaries.
- Data flows.
- Trust boundaries.
- Database approach.
- External integrations.
- Testing strategy.
- Deployment assumptions.
- Scaling path.
- Relevant costs.

Architecture-first planning does not require excessive documentation for trivial projects.

Consult docs/architecture.md.

## 16. Technology Stack Selection

For new projects, select technologies based on:

- Product requirements.
- Platform constraints.
- Security.
- Maintainability.
- Ecosystem maturity.
- Performance.
- Scalability.
- Operational complexity.
- Cost.
- Available expertise.

Do not impose a favorite framework or provider.

For existing projects, preserve suitable technology choices.

## 17. Project Structure

Organize source code with clear responsibilities.

Consider:

- Feature boundaries.
- Shared utilities.
- Domain logic.
- Infrastructure adapters.
- Configuration.
- Tests.
- Documentation.
- Static assets.
- Build tooling.

Avoid unnecessary folder depth.

Do not introduce abstractions without practical value.

## 18. Incremental Implementation

Prefer small, verifiable implementation stages.

For each stage:

1. Define intended behavior.
2. Implement relevant components.
3. Validate the change.
4. Correct observed failures.
5. Check related regressions.
6. Record important decisions.
7. Continue to the next stage.

In Autonomous Build Mode, these stages do not require repeated human approval when within authorized scope.

## 19. Existing Code Protection

Before modifying an existing project:

- Inspect relevant source code.
- Understand established conventions.
- Identify current behavior.
- Review related tests.
- Check repository status.
- Preserve unrelated user changes.
- Evaluate compatibility.

Do not replace working code merely because a different implementation is preferred.

## 20. Scope Control

Stay within the authorized repository and task.

Do not:

- Modify unrelated applications.
- Access unrelated private files.
- Change global developer settings unnecessarily.
- Replace unrelated configuration.
- Modify production systems without authorization.
- Expand project scope silently.

When scope is unclear, prefer the safest reasonable interpretation.

## 21. Secure Implementation

Apply relevant security controls from the beginning.

Consider:

- Secure defaults.
- Input validation.
- Authentication.
- Server-side authorization.
- Least privilege.
- Secret management.
- Safe dependencies.
- Secure error handling.
- Resource isolation.
- Supply chain integrity.

Do not add security only after the application is considered complete.

Consult docs/security.md.

## 22. Authentication Implementation

For authentication functionality:

- Use established authentication mechanisms.
- Validate identity at trusted boundaries.
- Handle session expiration.
- Protect tokens.
- Support appropriate recovery.
- Prevent unnecessary account enumeration.
- Restrict privileged operations.

Do not invent custom cryptographic authentication protocols.

## 23. Authorization Implementation

For authorization:

- Define user roles and permissions.
- Identify protected resources.
- Enforce resource ownership.
- Enforce tenant boundaries.
- Validate operations server-side.
- Apply least privilege.
- Test unauthorized access.

Do not trust client-provided roles or owner identifiers without appropriate verification.

Authentication does not replace authorization.

## 24. Privacy-Aware Implementation

Apply relevant:

- Data minimization.
- Privacy-protective defaults.
- Access restrictions.
- Retention requirements.
- Secure data handling.
- Sensitive logging controls.
- Third-party processing review.
- User rights support.

Do not invent legal bases or retention periods.

Consult docs/privacy.md.

## 25. Data Integrity Implementation

Protect important business invariants.

Consider:

- Database constraints.
- Transactions.
- Referential integrity.
- Atomic updates.
- Concurrency.
- Idempotency.
- Tenant isolation.
- Safe deletion.

Do not rely solely on client-side validation.

Consult docs/data.md.

## 26. Database Development

When databases are required:

1. Identify access patterns.
2. Choose an appropriate data model.
3. Define schema.
4. Add constraints.
5. Enforce authorization.
6. Plan migrations.
7. Add relevant tests.
8. Evaluate indexing.
9. Consider backups and recovery.
10. Document deployment requirements.

Do not execute destructive production migrations automatically.

## 27. API Implementation

For APIs:

- Validate requests.
- Enforce authentication where needed.
- Enforce resource authorization.
- Use appropriate error handling.
- Apply pagination and limits.
- Consider rate limiting.
- Implement idempotency where necessary.
- Protect secrets.
- Document relevant contracts.

Do not expose internal implementation details unnecessarily.

## 28. External Integrations

For third-party services:

- Define integration boundaries.
- Verify required permissions.
- Protect credentials.
- Handle timeouts.
- Implement bounded retries.
- Validate responses.
- Consider privacy implications.
- Evaluate costs.
- Document external dependencies.

Do not activate paid services without authorization.

## 29. Missing Credentials

When credentials are unavailable:

- Implement independent functionality.
- Prepare secure configuration templates.
- Use local mocks where appropriate.
- Validate failure handling.
- Document integration requirements.
- Continue other authorized tasks.

Never invent credentials.

Do not claim that a mocked integration was verified against the real service.

## 30. AI and LLM Implementation

When implementing AI functionality, evaluate:

- Actual need for AI.
- Model selection.
- Input handling.
- Output validation.
- Retrieval authorization.
- Sensitive data exposure.
- Prompt injection.
- Tool permissions.
- Evaluation.
- Inference costs.
- Human oversight.

Do not treat model output as trusted authorization.

Consult docs/ai-and-llm.md.

## 31. RAG Implementation

For RAG systems:

- Define document ingestion.
- Validate file processing.
- Establish chunking strategy.
- Protect embeddings.
- Apply access-controlled retrieval.
- Handle source metadata.
- Evaluate retrieval relevance.
- Limit unnecessary context.
- Validate generated responses.
- Support deletion where required.

A semantic match does not establish access authorization.

## 32. Agentic System Implementation

For application-level agents:

- Define agent responsibilities.
- Restrict tool permissions.
- Validate tool arguments.
- Apply execution limits.
- Control spending.
- Handle tool failures.
- Preserve auditability.
- Require approval for consequential actions.
- Test prompt injection resistance.

An application-level agent must not inherit unrestricted development permissions.

## 33. Web Development

For web applications, consider:

- Browser security.
- Responsive design.
- Accessibility.
- State management.
- API boundaries.
- Client-side error handling.
- Performance.
- Authentication flows.
- Secure storage.
- Cross-browser compatibility.

Consult docs/mobile-and-web.md.

## 34. Mobile Development

For iOS and Android, consider:

- Platform permissions.
- Secure local storage.
- Lifecycle management.
- Offline behavior.
- Synchronization.
- Network failures.
- Accessibility.
- Performance.
- Code signing.
- Release requirements.

Consult docs/mobile-and-web.md.

## 35. Desktop and Native Development

For desktop and native software, consider:

- Operating-system permissions.
- Filesystem access.
- Packaging.
- Signing.
- Update mechanisms.
- Local storage.
- Resource consumption.
- Platform compatibility.
- Native dependency safety.

Consult docs/platforms-and-applications.md.

## 36. Game Development

For games, consider:

- Engine constraints.
- Gameplay architecture.
- Asset management.
- Save data integrity.
- Multiplayer trust boundaries.
- Performance.
- Platform compatibility.
- Build pipelines.
- Distribution requirements.

Do not introduce multiplayer infrastructure when it is unnecessary.

Consult docs/platforms-and-applications.md.

## 37. Scalability Implementation

Design for actual expected demand and credible growth.

Consider:

- Component modularity.
- Stateless processing where appropriate.
- Database efficiency.
- Connection management.
- Queues.
- Caching.
- Resource limits.
- Monitoring.
- Capacity thresholds.

Do not prematurely provision infrastructure for millions of users.

Consult docs/scalability.md.

## 38. Performance Engineering

Identify relevant performance objectives.

Consider:

- Latency.
- Throughput.
- CPU utilization.
- Memory consumption.
- Database queries.
- Rendering.
- Network transfers.
- Background processing.

Optimize based on measurements or credible bottleneck evidence.

Do not sacrifice correctness for unsupported performance claims.

## 39. Cost-Aware Implementation

Evaluate:

- Dependency costs.
- Infrastructure usage.
- Database operations.
- Storage.
- Network traffic.
- Monitoring.
- AI inference.
- Background jobs.

Prefer suitable cost-efficient solutions.

Do not weaken security or reliability solely to reduce spending.

Consult docs/cost-engineering.md.

## 40. Dependency Management

Before adding dependencies:

- Confirm necessity.
- Review compatibility.
- Consider maintenance.
- Review license requirements.
- Assess security.
- Consider operational impact.
- Evaluate cost.

Avoid unnecessary packages.

Do not install untrusted privileged system software automatically.

## 41. Local Development Environment

Within authorized boundaries, agents may prepare:

- Project configuration.
- Local dependencies.
- Local databases.
- Test fixtures.
- Development scripts.
- Build configuration.
- Environment templates.

Do not overwrite real credentials.

Do not modify unrelated global settings without authorization.

## 42. Error Handling

Implement appropriate:

- Input error responses.
- Failure boundaries.
- Timeouts.
- Retry policies.
- Logging.
- User-facing feedback.
- Partial failure handling.
- Recovery behavior.

Do not swallow critical errors silently.

Avoid exposing secrets through error messages.

## 43. Reliability Engineering

Consider:

- Dependency failures.
- Graceful degradation.
- Idempotency.
- Recovery.
- Availability.
- Data consistency.
- Circuit breaking where justified.
- Operational observability.

Do not add distributed reliability mechanisms without actual need.

## 44. Accessibility and Usability

Where applicable:

- Use clear navigation.
- Provide understandable feedback.
- Support keyboard interaction.
- Respect accessibility semantics.
- Handle errors clearly.
- Avoid unnecessary workflow complexity.
- Support relevant assistive technologies.

Accessibility and usability are part of engineering quality.

Do not treat visual polish as a substitute for functional usability.

## 45. User Interface Preservation

For existing applications:

- Respect approved design systems.
- Preserve established functionality.
- Avoid unexpected visual redesigns.
- Maintain responsive behavior.
- Test important user journeys.

Only redesign interfaces within authorized scope.

## 46. Testing Strategy

Select tests according to:

- Business risk.
- Functional complexity.
- Data sensitivity.
- Security requirements.
- Integration boundaries.
- Platform behavior.
- Regression risk.

Possible tests include:

- Unit tests.
- Integration tests.
- End-to-end tests.
- Contract tests.
- Authorization tests.
- Database tests.
- Performance tests.
- Security tests.

Consult docs/quality-and-testing.md.

## 47. Test Implementation

For important functionality:

1. Define expected behavior.
2. Implement relevant tests.
3. Use safe fixtures.
4. Cover meaningful edge cases.
5. Test failure paths.
6. Validate authorization.
7. Verify important business invariants.
8. Avoid dependence on production data.

Do not write superficial tests merely to increase test counts.

## 48. Test Execution

Run relevant authorized tests when the environment allows.

Before execution:

- Verify commands.
- Identify required environment variables.
- Confirm target environment.
- Protect credentials.
- Evaluate side effects.

Do not run destructive tests against production.

Report exactly which tests were executed.

## 49. Failure Investigation

When tests or builds fail:

1. Read the actual error.
2. Identify the likely root cause.
3. Inspect related code.
4. Apply a focused correction.
5. Re-run the relevant check.
6. Review possible regressions.
7. Record unresolved problems.

Do not remove failing tests merely to produce a passing build.

## 50. Autonomous Error Correction

In Autonomous Build Mode:

- Correct routine implementation defects.
- Fix type errors.
- Fix lint failures.
- Repair broken imports.
- Resolve authorized dependency conflicts.
- Correct failed tests.
- Improve error handling.
- Revalidate modified functionality.

Continue safely while feasible.

Use bounded retries.

Do not create endless correction loops.

## 51. Regression Prevention

Before concluding a change:

- Identify affected workflows.
- Review related dependencies.
- Execute relevant tests.
- Preserve public interfaces where required.
- Verify important business behavior.
- Review unintended modifications.

Do not assume a localized change cannot cause wider regressions.

## 52. Build Validation

When applicable:

- Run a production-oriented build locally.
- Check type compilation.
- Review warnings.
- Verify generated artifacts.
- Check environment configuration.
- Validate supported target platforms.

A successful build does not prove the application is fully functional or production-ready.

## 53. Security Verification

For significant features, verify relevant:

- Authentication.
- Authorization.
- Input validation.
- Resource ownership.
- Tenant isolation.
- Secret handling.
- Unsafe dependencies.
- Common attack surfaces.

Do not claim vulnerability-free software.

Use the security review skill when appropriate.

## 54. Privacy Verification

For personal data functionality, verify relevant:

- Data minimization.
- Access restrictions.
- Logging.
- Retention.
- Export behavior.
- Deletion behavior.
- Third-party sharing.
- AI data handling.

Do not claim legal compliance based solely on automated checks.

## 55. Data Integrity Verification

For database-dependent functionality, verify:

- Constraints.
- Transactions.
- Concurrency behavior.
- Idempotency.
- Ownership.
- Tenant isolation.
- Migration compatibility.
- Recovery implications.

Do not treat passing unit tests as proof that production data is protected under every condition.

## 56. Performance Validation

When performance matters:

- Identify relevant metrics.
- Define representative workloads.
- Use appropriate test environments.
- Run permitted measurements.
- Record actual results.
- Compare results with targets.

Do not perform disruptive load tests against production without authorization.

Do not claim support for millions of users without adequate evidence.

## 57. Observability Implementation

For important functionality, consider:

- Structured logs.
- Useful metrics.
- Error reporting.
- Request tracing.
- Operational alerts.
- Data privacy.
- Retention.
- Monitoring costs.

Avoid excessive logging and sensitive information exposure.

Consult docs/observability.md.

## 58. Review of Changes

Before finalizing:

1. Inspect the working tree.
2. Review changed files.
3. Identify unrelated modifications.
4. Check for accidental secrets.
5. Review generated artifacts.
6. Confirm expected behavior.
7. Record tests executed.
8. Document limitations.

Never discard unrelated user changes.

## 59. Git Safety

Respect project version control conventions.

Do not:

- Force-push shared branches without authorization.
- Delete unrelated untracked files.
- Rewrite protected history.
- Commit private credentials.
- Publish code without authorization.
- Run destructive cleanup without approval.

Create focused changes.

Use meaningful commit messages when commits are authorized.

## 60. CI/CD and Automation

When appropriate, implement:

- Build checks.
- Formatting checks.
- Type checking.
- Unit tests.
- Integration tests.
- Security scans.
- Dependency validation.
- Deployment preparation.

Do not disable quality gates silently.

Do not interpret CI/CD configuration as permission to deploy to production.

## 61. Deployment Preparation

When deployment is part of the requested work:

- Prepare build artifacts.
- Document required environment configuration.
- Define deployment procedure.
- Review security requirements.
- Assess data migration needs.
- Estimate relevant costs.
- Define monitoring expectations.
- Consider rollback.
- Identify required approvals.

Do not deploy to production without explicit authorization.

## 62. Protected Operations

Require appropriate specific authorization before:

- Production deployments.
- Destructive production migrations.
- Deleting important data.
- Privileged security changes.
- Production access control modifications.
- Significant paid commitments.
- Subscription upgrades.
- Publishing applications.
- Modifying unrelated repositories.
- Sending sensitive external communications.

Autonomous Build Mode does not override these boundaries.

## 63. Risk Classification

Evaluate significant changes according to:

- Security impact.
- Privacy impact.
- Data integrity.
- Availability.
- Financial exposure.
- Compatibility.
- Reversibility.
- Operational consequences.

Escalate actions whose risk exceeds the approved scope.

Do not equate a small code diff with low risk.

## 64. Approval Interpretation

In Autonomous Build Mode, the user's explicit authorization for the project counts as approval for ordinary local development within that scope.

Do not require separate approval for every routine file change, implementation stage or local test.

This authorization does not cover protected operations or material changes outside scope.

Do not assume silence constitutes approval for additional privileged actions.

Consult docs/governance.md.

## 65. Working With Blockers

When a blocker occurs:

1. Identify the cause.
2. Determine whether it is within scope.
3. Attempt safe authorized resolution.
4. Consider reasonable alternatives.
5. Continue independent tasks.
6. Record unresolved work.
7. Escalate only when necessary.

Avoid repeatedly asking for the same missing information.

Do not conceal blockers to claim completion.

## 66. Missing External Services

If an external integration cannot be completed:

- Prepare the adapter or integration boundary.
- Define configuration requirements.
- Add safe mocks where appropriate.
- Test independent functionality.
- Document missing credentials.
- Explain external dependencies.
- Continue remaining authorized development.

Do not fabricate live integration verification.

## 67. Missing Platform Capabilities

If the execution environment cannot perform a required task:

- Identify the limitation.
- Complete feasible independent work.
- Prepare instructions for the blocked action.
- Preserve implementation state.
- Document necessary human steps.

Do not claim an unavailable capability was used successfully.

## 68. Autonomous Task Continuation

During an autonomous build:

- Maintain a record of completed tasks.
- Track pending work.
- Reassess blockers.
- Continue with executable tasks.
- Avoid unnecessary repeated planning.
- Preserve relevant implementation context.

Do not promise persistent background execution unless an actual supported mechanism is configured.

## 69. Autonomous Completion Criteria

Before declaring an autonomous build complete, evaluate:

- Required features implemented.
- Important workflows functional.
- Appropriate security controls.
- Appropriate privacy controls.
- Data integrity safeguards.
- Relevant testing.
- Build validation.
- Documented architecture.
- Deployment preparation.
- Known limitations.
- External dependencies.
- Required human actions.

Do not claim the application is fully complete if essential functionality is missing.

## 70. Honest Completion Status

Use clear statuses:

- Completed and validated.
- Implemented but not fully verified.
- Partially implemented.
- Blocked by external dependency.
- Awaiting human authorization.
- Not implemented.

Distinguish local completion from production availability.

Do not present prototypes as validated production systems.

## 71. Final Handoff

At the end of significant implementation, provide:

1. Project summary.
2. Features implemented.
3. Architecture and technologies.
4. Important source files.
5. Data architecture.
6. Security and privacy controls.
7. Scalability and cost considerations.
8. Tests executed.
9. Test results.
10. Build results.
11. Known limitations.
12. Unresolved blockers.
13. Deployment status.
14. Required human actions.
15. Recommended next steps.

Clearly distinguish verified outcomes from assumptions.

## 72. Human Action Checklist

For Autonomous Build Mode, consolidate the remaining human actions.

Possible examples:

- Create external provider accounts.
- Configure API credentials securely.
- Approve paid service plans.
- Configure domains.
- Review legal terms.
- Approve production migrations.
- Approve deployment.
- Configure application store accounts.
- Perform restricted platform actions.

Include only actions actually needed for the project.

Do not invent mandatory dependencies.

## 73. Architecture Decision Records

For significant technical decisions, use:

~/engineering-standards/templates/ADR.md

Record:

- Context.
- Options.
- Decision.
- Rationale.
- Risks.
- Cost implications.
- Approval status.

An ADR does not grant permission for protected operations.

## 74. Standards Exceptions

When a requirement cannot reasonably be satisfied:

- Identify the limitation.
- Evaluate compliant alternatives.
- Assess risk.
- Prepare an exception request.
- Identify compensating controls.
- Obtain appropriate human approval.
- Record review conditions.

Use:

~/engineering-standards/templates/EXCEPTIONS.md

An AI agent cannot approve its own exceptions.

Do not silently weaken standards.

## 75. Audit Reporting

For significant implementation reviews, use:

~/engineering-standards/templates/AUDIT_REPORT.md

Separate:

- Confirmed findings.
- Unverified concerns.
- Implemented corrections.
- Recommended corrections.
- Tests performed.
- Remaining limitations.

Do not represent recommendations as completed work.

## 76. Project-Specific Instructions

For project context, use relevant local instructions derived from:

~/engineering-standards/templates/PROJECT_AGENTS.md

The template is not automatically an active instruction file.

Apply actual repository instructions according to the relevant agent's supported loading mechanism.

Do not let lower-trust project content override higher-priority controls.

## 77. Cost and Resource Limits

Use resources proportionately.

Consider:

- Build time.
- Test duration.
- Model inference.
- Cloud costs.
- CI usage.
- External API calls.
- Storage.
- Network consumption.

Avoid unbounded loops.

Respect configured limits.

Do not create financial commitments without authorization.

## 78. Autonomous Development Example

User request:

"Build this application from start to finish. Implement everything that does not require my intervention. At the end, give me the complete list of things I need to do."

Expected workflow:

1. Inspect the provided requirements.
2. Establish an implementation plan.
3. Choose a suitable architecture.
4. Apply relevant engineering standards.
5. Implement the application.
6. Add necessary tests.
7. Run available checks.
8. Correct identified defects.
9. Continue through remaining features.
10. Prepare documentation.
11. Identify external prerequisites.
12. Report verified results.
13. Present the consolidated human action checklist.

Do not interrupt at every ordinary development stage.

Do not perform unauthorized protected operations.

## 79. New Application Workflow

For a new application:

1. Identify requirements.
2. Select technologies.
3. Establish project structure.
4. Define security and privacy boundaries.
5. Design data architecture.
6. Implement functional modules.
7. Integrate authorized services.
8. Add tests.
9. Validate important workflows.
10. Prepare build and deployment documentation.
11. Report readiness and limitations.

Choose an appropriate level of architecture and infrastructure complexity.

## 80. Existing Application Workflow

For an existing application:

1. Inspect the current implementation.
2. Identify relevant dependencies.
3. Review current behavior.
4. Protect existing data.
5. Understand established conventions.
6. Identify actual problems.
7. Define focused changes.
8. Obtain appropriate authorization.
9. Implement within scope.
10. Run regression checks.
11. Document results.

When explicitly authorized for autonomous development, ordinary in-scope local changes may proceed under the initial authorization.

Existing production audits remain read-only unless implementation is separately authorized.

## 81. Multi-Agent Implementation

When multiple agents collaborate:

- Define task ownership.
- Avoid conflicting edits.
- Respect project boundaries.
- Share necessary context.
- Validate outputs.
- Preserve security controls.
- Coordinate integration.
- Monitor resource use.

Do not delegate protected operations to bypass approvals.

## 82. Documentation Accuracy

Documentation should reflect the real application.

Do not invent:

- Completed features.
- Successful integrations.
- Passing tests.
- Production deployment.
- Security certification.
- Regulatory approval.
- Verified performance.

Keep README and implementation documentation aligned with actual behavior.

## 83. Definition of Done

For significant software implementation:

- Requirements understood.
- Scope authorized.
- Architecture appropriate.
- Security reviewed.
- Privacy considered.
- Data integrity protected.
- Maintainability considered.
- Scalability evaluated.
- Cost implications assessed.
- Relevant tests implemented.
- Tests executed where feasible.
- Build verified where feasible.
- Important regressions checked.
- Documentation updated.
- Protected actions approved.
- Remaining issues recorded.
- Final handoff prepared.

Do not claim completion when critical acceptance criteria remain unmet.

## 84. Final Safe Implementation Principles

Build according to real requirements.
Use appropriate architecture.
Apply Security by Design.
Apply Privacy by Design.
Preserve data integrity.
Enforce authentication and authorization.
Write maintainable code.
Avoid unnecessary dependencies.
Design credible scalability paths.
Control infrastructure and AI costs.
Test meaningful functionality.
Investigate and correct errors.
Prevent regressions.
Protect existing user changes.
Protect production environments.
Respect tool and platform permissions.
Never bypass protected approvals.
Support authorized autonomous execution.
Avoid unnecessary interruptions.
Continue feasible independent work.
Never fabricate test or deployment results.
Distinguish implemented from verified.
Report blockers and limitations honestly.
Provide a complete human action checklist.