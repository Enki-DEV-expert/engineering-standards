
# Global Software Quality, Testing and Verification Standards

## 1. Mission

Design, implement, verify and maintain secure, correct, reliable, maintainable and scalable software.

These standards apply to all software created, reviewed or maintained by AI coding agents, including Claude Code, OpenAI Codex and other AI-assisted development tools.

They apply to:

- Existing production applications.
- New applications.
- Web applications.
- Native iOS applications.
- Native Android applications.
- Cross-platform mobile applications.
- Backend services.
- APIs.
- Databases.
- AI and agentic systems.
- Infrastructure as Code.
- Cloud and Kubernetes workloads.
- Background services.
- Enterprise integrations.

The objective is to prevent defects, regressions, security weaknesses, unnecessary complexity and avoidable maintenance costs.

Never treat generated code as correct merely because it compiles or appears to work.

## 2. Fundamental Quality Principles

Apply:

1. Correctness before convenience.
2. Security by Design.
3. Privacy by Design.
4. Simplicity.
5. Clear responsibilities.
6. Maintainability.
7. Testability.
8. Backward compatibility.
9. Evidence-based verification.
10. Incremental implementation.
11. Cost awareness.
12. Explicit human approval.
13. Traceability.
14. Production safety.

Prefer the smallest correct solution that meets verified requirements.

Never introduce unnecessary architectural complexity.

## 3. Technology Independence

These standards are language-independent, framework-independent and provider-neutral.

They apply to technologies including, but not limited to:

- TypeScript.
- JavaScript.
- Python.
- Java.
- Kotlin.
- Swift.
- Dart.
- C#.
- Go.
- Rust.
- C and C++.
- SQL.
- React.
- Next.js.
- Vue.
- Angular.
- Node.js.
- Express.
- NestJS.
- Django.
- FastAPI.
- Spring.
- .NET.
- Flutter.
- React Native.
- Native iOS.
- Native Android.
- Kubernetes.
- Terraform.
- OpenTofu.

No testing framework, linter or quality tool is mandatory for every project.

Inspect the actual technology stack before selecting tools.

Preserve existing project conventions when they are appropriate.

## 4. Repository Assessment First

Before significant implementation:

1. Inspect the repository structure.
2. Identify the languages and frameworks.
3. Identify the package manager.
4. Identify build and test commands.
5. Inspect existing CI/CD workflows.
6. Review architecture conventions.
7. Review relevant dependencies.
8. Identify affected modules.
9. Identify relevant tests.
10. Identify production compatibility constraints.

Do not assume the project uses a specific framework.

Do not modify unrelated files merely to improve their appearance.

## 5. Requirements Before Implementation

For significant changes:

- Clarify the functional objective.
- Identify acceptance criteria.
- Identify affected users.
- Identify dependencies.
- Identify security implications.
- Identify privacy implications.
- Identify performance requirements.
- Identify compatibility requirements.
- Identify relevant costs.
- Define validation procedures.
- Present an implementation plan.
- Obtain required human approval.

Separate confirmed requirements from assumptions.

## 6. Architecture and Design Quality

Follow the approved project architecture.

Apply principles such as:

- Separation of concerns.
- Single responsibility.
- Encapsulation.
- Clear interfaces.
- Explicit dependencies.
- Appropriate abstraction.
- Dependency inversion where justified.
- Domain boundaries.
- Testable components.

Avoid unnecessary design patterns.

Do not introduce microservices, event buses or orchestration frameworks without evidence.

Consult docs/architecture.md.

## 7. Code Readability

Write code that is understandable to future maintainers.

Use:

- Clear names.
- Consistent formatting.
- Small cohesive functions.
- Explicit error handling.
- Appropriate types.
- Meaningful module boundaries.
- Focused comments.

Avoid excessive comments that merely repeat the code.

Document non-obvious constraints, assumptions and architectural decisions.

## 8. Simplicity and Maintainability

Prefer straightforward solutions.

Avoid:

- Premature abstraction.
- Excessive inheritance.
- Unnecessary wrapper layers.
- Overgeneralized utilities.
- Hidden side effects.
- Unnecessary dependencies.
- Excessive configuration.

Do not optimize hypothetical performance problems without evidence.

Choose abstractions that reduce actual complexity.

## 9. Code Duplication

Identify harmful duplication.

Evaluate:

- Repeated business logic.
- Repeated validation.
- Duplicate API clients.
- Duplicate authorization logic.
- Repeated data transformations.
- Duplicated components.
- Redundant utility functions.

Consolidate duplication when the shared behavior is stable and the change is safe.

Do not force unrelated concepts into one abstraction merely because code looks similar.

Use duplication detection tools appropriate to the project.

Examples may include jscpd or language-specific alternatives.

Never refactor unrelated production code without approval.

## 10. Dead Code and Unused Dependencies

Review:

- Unused functions.
- Unreachable code.
- Unused exports.
- Unused dependencies.
- Obsolete files.
- Unused configuration.
- Unused assets.
- Redundant imports.

Use appropriate analysis tools.

Examples may include:

- Knip.
- ESLint.
- Ruff.
- Language-specific compiler checks.
- Dependency analyzers.

Static tools may produce false positives.

Never delete code solely because an automated detector marks it unused.

Review reflection, dynamic imports, plugin registration, framework conventions and external consumers before removal.

Require approval for meaningful deletion or restructuring.

## 11. Type Safety

Prefer explicit, appropriate type safety.

Use:

- Strong types where supported.
- Validated external inputs.
- Typed function contracts.
- Narrowed union types.
- Explicit null handling.
- Typed API boundaries.
- Domain-specific value types where useful.

Avoid unnecessary unsafe casts.

Do not suppress type errors merely to make a build pass.

Validate runtime inputs even when compile-time types exist.

## 12. Dependency Management

Manage dependencies deliberately.

Before introducing a dependency, evaluate:

- Necessity.
- Maintenance status.
- Licensing.
- Security history.
- Compatibility.
- Bundle or binary size.
- Operational complexity.
- Supply-chain risk.

Prefer existing maintained dependencies when suitable.

Avoid unnecessary overlapping libraries.

Never automatically upgrade major dependencies without compatibility analysis and approval.

## 13. Supply-Chain Security

Evaluate relevant risks involving:

- Package registries.
- Dependency confusion.
- Typosquatting.
- Compromised packages.
- Malicious install scripts.
- Build pipelines.
- Container images.
- Third-party plugins.
- AI agent tools.
- MCP servers.

Use supported lockfiles and integrity mechanisms.

Review dependency changes.

Do not execute unknown installation scripts without assessing their risks.

Consult docs/security.md.

## 14. Formatting and Linting

Use project-appropriate formatting and linting.

Possible tools include:

- ESLint.
- Prettier.
- Biome.
- Ruff.
- Black.
- mypy.
- Pyright.
- Checkstyle.
- SpotBugs.
- SwiftLint.
- ktlint.
- Detekt.
- Language-native compiler checks.

Select tools according to the existing stack.

Do not introduce conflicting formatters.

Do not reformat an entire existing repository as a side effect of an unrelated change.

## 15. Static Analysis

Use appropriate static analysis to detect:

- Type errors.
- Unsafe code patterns.
- Potential null dereferences.
- Resource leaks.
- Concurrency problems.
- Security weaknesses.
- Dead code.
- Maintainability problems.

Investigate findings according to severity and evidence.

Avoid treating every warning as equally critical.

Document accepted exceptions.

Never suppress serious findings without justification and approval.

## 16. Security Testing

Select security checks appropriate to the project.

Consider:

- Static application security testing.
- Dependency vulnerability scanning.
- Secret scanning.
- Infrastructure configuration scanning.
- Container image scanning.
- Authorization testing.
- Input validation testing.
- API security testing.
- Mobile security testing.
- Cloud permission reviews.

Validate findings before implementing disruptive changes.

Never weaken access controls to make security tests pass.

Consult docs/security.md.

## 17. Test Strategy

Use a layered test strategy appropriate to application risks.

Possible levels include:

- Unit tests.
- Component tests.
- Integration tests.
- Contract tests.
- End-to-end tests.
- System tests.
- Performance tests.
- Security tests.
- Migration tests.
- Recovery tests.
- Acceptance tests.

Not every project requires equal investment in every level.

Prioritize tests around important business behavior and failure risks.

## 18. Unit Testing

Use unit tests for isolated behavior where they provide value.

Test:

- Business rules.
- Calculations.
- Data transformations.
- Validation.
- State transitions.
- Edge cases.
- Error handling.

Prefer deterministic tests.

Avoid excessive mocking that hides integration defects.

Tests should verify observable behavior rather than incidental implementation details.

## 19. Integration Testing

Verify interactions between relevant components.

Examples:

- API and database.
- Authentication and authorization.
- Background workers and queues.
- External service adapters.
- Object storage.
- Payment integrations.
- AI tools.
- Cache and persistence.

Use controlled environments.

Never run destructive integration tests against production systems.

## 20. End-to-End Testing

Use end-to-end tests for critical user journeys.

Examples:

- Registration.
- Login.
- Account recovery.
- Checkout.
- Payment confirmation.
- Document submission.
- Reservation.
- Subscription management.
- Administrative approval.
- Important AI-assisted workflows.

Prefer stable selectors and deterministic setup.

Avoid excessively fragile tests.

Do not substitute a successful screenshot for functional verification.

## 21. API Contract Testing

Verify API compatibility.

Consider:

- Request formats.
- Response schemas.
- Status codes.
- Authentication.
- Authorization.
- Error handling.
- Pagination.
- Versioning.
- Backward compatibility.

Use consumer-driven contracts where justified.

Do not break external consumers without an approved migration strategy.

## 22. Database Testing

Evaluate:

- Schema constraints.
- Transactions.
- Referential integrity.
- Concurrency.
- Data migrations.
- Authorization.
- Tenant isolation.
- Idempotency.
- Recovery.

Use isolated test databases when appropriate.

Never execute destructive database tests against production.

Consult docs/data.md.

## 23. Multi-Tenant Testing

For multi-tenant applications, test:

- Tenant ownership.
- Tenant-specific queries.
- Shared caches.
- Storage permissions.
- API authorization.
- Background processing.
- Realtime subscriptions.
- Administrative boundaries.

Verify that one tenant cannot access another tenant's protected resources.

Do not assume successful authentication proves tenant isolation.

## 24. Concurrency and Race Conditions

Test important concurrent operations.

Examples:

- Inventory updates.
- Reservations.
- Financial transactions.
- Duplicate submissions.
- Subscription changes.
- Shared resource modifications.

Evaluate:

- Atomicity.
- Locking.
- Conflict resolution.
- Optimistic concurrency.
- Retries.
- Idempotency.

Do not rely solely on sequential tests for concurrency-sensitive workflows.

## 25. Idempotency Testing

Verify that repeated requests do not cause unintended duplicate effects.

Test:

- Duplicate webhooks.
- Retried API requests.
- Repeated background jobs.
- Network interruptions.
- Partial failures.

Confirm the expected result for repeated operations.

Do not assume external providers deliver events exactly once.

## 26. Error Handling Testing

Test failures intentionally.

Consider:

- Invalid inputs.
- Missing permissions.
- Database outages.
- External API failures.
- Network timeouts.
- Expired credentials.
- Rate limits.
- Partial operations.
- Resource exhaustion.

Errors should be observable and handled safely.

Never expose secrets or internal sensitive information through error messages.

## 27. Regression Prevention

Every significant bug fix should include an appropriate regression test where feasible.

Before modifying existing functionality:

1. Identify current expected behavior.
2. Identify affected code paths.
3. Review existing tests.
4. Establish a baseline.
5. Implement the approved change.
6. Run relevant tests.
7. Evaluate unintended behavior changes.

Do not treat unrelated test failures as proof that the new change is correct or incorrect without investigation.

## 28. Test Coverage

Use coverage metrics as supporting evidence.

Evaluate coverage of:

- Critical business logic.
- Security boundaries.
- Error paths.
- State transitions.
- Complex algorithms.
- High-risk integrations.

Do not assume high percentage coverage guarantees quality.

Avoid meaningless tests created solely to increase coverage numbers.

Define coverage targets according to project risk and maturity.

## 29. Test Quality

Tests must be:

- Understandable.
- Repeatable.
- Relevant.
- Maintainable.
- Appropriately isolated.
- Sensitive to real defects.

Avoid tests that always pass regardless of behavior.

Do not weaken assertions merely to make failing tests green.

Review flaky tests instead of ignoring them indefinitely.

## 30. Test Data Management

Use appropriate:

- Synthetic data.
- Fixtures.
- Factories.
- Seed datasets.
- Test accounts.
- Isolated environments.

Avoid real production data unless a specific lawful and approved process requires it.

Do not commit private user information or credentials to test repositories.

Define cleanup procedures.

## 31. Mocking and Test Doubles

Use mocks, stubs and fakes deliberately.

Mock external dependencies when isolation is useful.

Prefer realistic integration tests for important boundaries.

Do not mock away the behavior that a test is intended to verify.

Maintain consistency between mock contracts and real integrations.

## 32. Contract Compatibility

Preserve compatibility for:

- Published APIs.
- Database schemas.
- Mobile clients.
- External integrations.
- Event formats.
- Stored data.
- Background jobs.

Consider older mobile application versions that remain active.

Use staged migrations when appropriate.

Never assume all clients update simultaneously.

## 33. iOS Quality and Testing

For native iOS applications, evaluate:

- Swift and SwiftUI correctness.
- UIKit integrations where relevant.
- Application lifecycle.
- Memory management.
- Main-thread responsiveness.
- Background execution.
- Network failures.
- Offline behavior.
- Accessibility.
- Device compatibility.
- Crash handling.
- Privacy permissions.

Use appropriate Apple testing and profiling tools.

Validate representative supported iOS versions and devices.

## 34. Android Quality and Testing

For native Android applications, evaluate:

- Kotlin and Java correctness.
- Android lifecycle.
- State preservation.
- Background restrictions.
- Memory management.
- ANR risks.
- Device diversity.
- Offline behavior.
- Accessibility.
- Security permissions.
- Crash handling.

Use appropriate Android testing and profiling tools.

Validate representative devices and supported Android versions.

## 35. Cross-Platform Quality

For Flutter, React Native and other cross-platform applications:

- Validate platform-specific behavior.
- Test navigation.
- Test lifecycle handling.
- Test native integrations.
- Test permissions.
- Verify performance.
- Verify accessibility.
- Verify release builds.

Do not assume one successful platform test proves compatibility with another platform.

## 36. Web Quality

For web applications, evaluate:

- Browser compatibility.
- Responsive layouts.
- Accessibility.
- Client-side error handling.
- Network failures.
- Authentication state.
- Form validation.
- Rendering performance.
- Routing.
- Asset loading.
- Security boundaries.

Test representative devices and browsers.

Do not rely on visual inspection alone.

## 37. Accessibility Testing

Evaluate applicable accessibility requirements.

Consider:

- Keyboard navigation.
- Screen readers.
- Color contrast.
- Focus management.
- Accessible names.
- Semantic structure.
- Touch target usability.
- Motion preferences.
- Error identification.

Combine automated checks with appropriate manual testing.

Do not claim full accessibility compliance based solely on automated tools.

## 38. Performance Testing

Evaluate performance according to real requirements.

Consider:

- Response time.
- p95 and p99 latency.
- Throughput.
- Memory consumption.
- CPU utilization.
- Database performance.
- Mobile startup.
- Rendering performance.
- Network consumption.

Use representative workloads.

Consult docs/scalability.md.

## 39. Load and Stress Testing

When justified, execute:

- Load tests.
- Stress tests.
- Spike tests.
- Soak tests.
- Concurrency tests.
- Recovery tests.

Define acceptable operating limits.

Do not run uncontrolled performance tests against production.

Require explicit approval for tests that may create meaningful production load or cost.

## 40. AI and LLM Testing

For AI-powered functionality, evaluate:

- Task correctness.
- Factual accuracy.
- Retrieval quality.
- Hallucination behavior.
- Prompt injection resistance.
- Tool-use correctness.
- Authorization.
- Privacy.
- Latency.
- Cost.
- Failure handling.

Use representative evaluation datasets.

Do not rely only on model-generated judgments.

Consult docs/ai-and-llm.md.

## 41. RAG Testing

Evaluate:

- Retrieval relevance.
- Source coverage.
- Grounding.
- Citation correctness.
- Tenant isolation.
- Document updates.
- Document deletion.
- Retrieval latency.
- Embedding version changes.

Test unauthorized retrieval scenarios.

Do not assume successful similarity search guarantees a correct answer.

## 42. AI Agent Testing

Test:

- Tool permissions.
- Unauthorized actions.
- Execution limits.
- Retry behavior.
- Recursive loops.
- Tool failures.
- Human approval requirements.
- Resource budgets.
- Data disclosure.
- Multi-agent interactions.

Never test autonomous destructive actions against production without explicit authorization and controlled safeguards.

## 43. Infrastructure Testing

For cloud and infrastructure code, evaluate:

- Configuration validation.
- Infrastructure plans.
- Security policies.
- Access permissions.
- Networking.
- Resource quotas.
- Availability settings.
- Backup configuration.
- Cost implications.
- Rollback procedures.

Use plan or preview mechanisms when available.

Do not automatically apply infrastructure changes after validation.

## 44. Kubernetes Quality

For Kubernetes environments, evaluate:

- Manifest validity.
- Resource requests and limits.
- RBAC.
- NetworkPolicies.
- Pod security controls.
- Secrets handling.
- Health probes.
- Deployment strategies.
- Pod disruption budgets.
- Storage requirements.
- Autoscaling configuration.
- Monitoring.

Use appropriate policy validation and configuration analysis.

Never apply production cluster changes without explicit approval.

## 45. CI/CD Quality Gates

Use automated checks appropriate to the project.

Possible checks include:

- Formatting.
- Linting.
- Type checking.
- Unit tests.
- Integration tests.
- Contract tests.
- Security scanning.
- Dependency scanning.
- Build validation.
- Artifact verification.
- Infrastructure validation.

Define which checks are blocking based on risk.

Do not disable established quality gates silently.

Require approval before modifying CI/CD policies.

## 46. Pull Request Quality

For meaningful changes, provide:

- Purpose.
- Scope.
- Relevant files.
- Risks.
- Testing evidence.
- Compatibility considerations.
- Security implications.
- Cost implications.
- Rollback considerations.

Keep pull requests focused where practical.

Avoid mixing unrelated refactoring with functional changes.

## 47. Code Review Standards

Review code for:

- Correctness.
- Security.
- Data integrity.
- Authorization.
- Maintainability.
- Performance.
- Compatibility.
- Test adequacy.
- Cost implications.
- Unintended side effects.

Prioritize findings according to severity and evidence.

Distinguish defects from stylistic preferences.

Do not claim a security vulnerability without sufficient technical justification.

## 48. AI-Generated Code Verification

All AI-generated code must be treated as unverified until appropriate checks are completed.

Evaluate:

- Requirement alignment.
- Correctness.
- Security.
- Dependency safety.
- API compatibility.
- Data integrity.
- Error handling.
- Performance.
- Maintainability.
- Test coverage.
- Hidden costs.

Do not accept code solely because an AI agent expresses confidence.

Require evidence from relevant tests and analysis.

## 49. Safe Refactoring

Before significant refactoring:

1. Identify existing behavior.
2. Establish relevant test coverage.
3. Define the refactoring objective.
4. Identify affected integrations.
5. Assess security and performance risks.
6. Obtain approval.
7. Make incremental changes.
8. Run relevant tests.
9. Compare behavior.
10. Document remaining risks.

Avoid broad rewrites when localized improvements are sufficient.

## 50. Existing Production Application Audits

For existing applications:

1. Inspect the current codebase.
2. Identify the actual technology stack.
3. Review relevant architecture.
4. Identify existing testing tools.
5. Inspect CI/CD.
6. Review available test evidence.
7. Identify important business workflows.
8. Assess security and data risks.
9. Identify confirmed quality issues.
10. Prioritize findings.
11. Propose incremental improvements.
12. Present the audit report.
13. Wait for explicit human approval.

The initial audit must be read-only.

Do not rewrite working production code during the assessment.

Do not assume missing tests prove the application is defective.

Report uncertainty and evidence gaps.

## 51. Progressive Compliance

Existing production projects may have different maturity levels.

Adopt standards progressively.

Prioritize:

- Critical security weaknesses.
- Data integrity risks.
- Confirmed production defects.
- Missing safeguards for high-impact operations.
- Important regression tests.
- High-value maintainability improvements.

Document approved temporary exceptions.

Do not block safe maintenance solely because the entire repository does not yet meet every global standard.

## 52. Legacy Code

Treat legacy code as an operational asset.

Before changing it:

- Understand its behavior.
- Identify consumers.
- Review compatibility constraints.
- Establish characterization tests where feasible.
- Identify hidden dependencies.
- Define rollback options.

Do not replace legacy components solely because their technology is older.

## 53. Build Verification

Use project-specific build commands.

Verify:

- Compilation.
- Bundling.
- Asset generation.
- Native platform requirements.
- Environment configuration.
- Dependency compatibility.

A successful build is necessary for many changes but does not establish overall correctness.

Do not claim a build passed unless it actually ran successfully.

## 54. Test Execution Reporting

Report accurately:

- Which commands ran.
- Which tests passed.
- Which tests failed.
- Which checks were skipped.
- Which checks could not run.
- Why execution was limited.
- Relevant environment constraints.

Never invent test results.

Never claim tests passed merely because no errors were visible in generated code.

## 55. Quality Tool Selection

Select tools according to the project stack.

Examples:

### JavaScript and TypeScript

- TypeScript compiler.
- ESLint or Biome.
- Prettier where applicable.
- Vitest or Jest.
- Playwright.
- Knip.
- jscpd.
- Dependency and security scanners.

### Python

- Ruff.
- pytest.
- mypy or Pyright where applicable.
- Coverage tools.
- Dependency and security scanners.

### Java and Kotlin

- JUnit.
- Gradle or Maven checks.
- Checkstyle where applicable.
- SpotBugs.
- Detekt.
- ktlint.
- Platform-specific testing tools.

### Swift

- Swift Testing or XCTest.
- SwiftLint where appropriate.
- Xcode build and analysis tools.

### Flutter and Dart

- Dart analyzer.
- flutter test.
- Integration testing tools.
- Platform build checks.

### Go

- go test.
- go vet.
- Race detector where applicable.
- Appropriate lint and security tools.

### Rust

- cargo test.
- cargo clippy.
- cargo fmt.
- Dependency analysis tools.

These are examples, not mandatory tools.

Verify compatibility and maintenance status before adoption.

Do not introduce redundant tooling.

## 56. Test Environment Safety

Separate development, testing, staging and production appropriately.

Validate:

- Environment identity.
- Database endpoints.
- Cloud project identity.
- API credentials.
- Test data ownership.
- Resource limits.
- External side effects.

Never assume a test command is safe merely because its name contains "test".

Require explicit approval for operations that may affect production resources.

## 57. Financial Safety During Testing

Testing must account for usage-based costs.

Evaluate potential charges from:

- AI inference.
- SMS.
- Email.
- Paid APIs.
- Cloud compute.
- Database usage.
- Storage.
- Network traffic.
- Video generation.
- Kubernetes clusters.

Use mocks, sandboxes or dedicated test credentials where appropriate.

Do not run unbounded tests against billable production services.

Consult docs/cost-engineering.md.

## 58. Human Approval and Change Control

Require explicit human approval before:

- Significant architectural modifications.
- Destructive migrations.
- Production deployments.
- Changes to authentication or authorization.
- Significant dependency upgrades.
- Broad codebase refactoring.
- Removal of production functionality.
- Production infrastructure changes.
- High-cost service provisioning.
- Changes with meaningful compatibility risks.

Present expected impact, validation and rollback procedures.

Repository access does not imply permission for high-impact changes.

## 59. Quality Definition of Done

For significant development work:

- Requirements understood.
- Architecture respected.
- Code readable.
- Unnecessary duplication avoided.
- Relevant types validated.
- Inputs validated.
- Security reviewed.
- Privacy reviewed.
- Data integrity preserved.
- Relevant tests added or updated.
- Existing regression tests run where feasible.
- Build verified where applicable.
- Performance impact considered.
- Operational costs considered.
- Compatibility assessed.
- Results honestly reported.
- Remaining risks documented.
- Required approvals obtained.

Do not mark work complete when critical validation is missing without clearly reporting the limitation.

## 60. Final Quality Principles

Understand before changing.
Plan before implementing.
Prefer simple solutions.
Write readable and maintainable code.
Avoid unnecessary duplication.
Validate all untrusted inputs.
Enforce authorization.
Protect data integrity.
Test critical business behavior.
Prevent regressions.
Preserve production compatibility.
Use appropriate automated quality gates.
Verify AI-generated code.
Report actual test results.
Control testing costs.
Audit existing systems before modifying them.
Require approval for significant changes.