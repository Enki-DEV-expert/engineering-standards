---
name: engineering-architecture-review
description: Design, assess, document and improve software architecture using the Global Engineering Standards. Use for architecture reviews, technology selection, modular systems, monoliths, microservices, cloud architecture, AWS, Azure, GCP, serverless, Kubernetes, distributed systems, API design, scalability, security, reliability, portability, architecture decisions and autonomous application development.
---

# Engineering Architecture Review

## 1. Purpose

Provide a systematic and evidence-based workflow for software architecture design, assessment and improvement.

This skill supports:

- New application architecture.
- Existing application architecture audits.
- Technology stack selection.
- Modular monolithic applications.
- Microservices and distributed systems.
- Event-driven architecture.
- Serverless architecture.
- Cloud infrastructure.
- Containerization.
- Kubernetes.
- Web applications.
- Mobile applications.
- Desktop and native software.
- Game architecture.
- AI and agentic systems.
- Database integration.
- Scalability planning.
- Reliability engineering.
- Security and privacy architecture.
- Architecture Decision Records.
- Architecture modernization.
- Cost-efficient technical evolution.

The objective is to create maintainable, secure, reliable and scalable systems without introducing unnecessary complexity.

Architecture must serve verified requirements rather than technological trends.

## 2. Global Engineering Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary reference:

~/engineering-standards/docs/architecture.md

Additional references when relevant:

- docs/governance.md
- docs/security.md
- docs/privacy.md
- docs/data.md
- docs/scalability.md
- docs/cost-engineering.md
- docs/ai-and-llm.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Resolve relative references against the engineering-standards repository.

Apply relevant standards according to project context.

Avoid loading every document unnecessarily.

## 3. When to Use This Skill

Use when:

- Starting a new software project.
- Designing a complete application.
- Selecting a technology stack.
- Reviewing existing architecture.
- Planning significant new features.
- Evaluating scaling strategies.
- Comparing infrastructure providers.
- Considering microservices.
- Evaluating Kubernetes.
- Designing system integrations.
- Modernizing legacy applications.
- Designing complex AI systems.
- Evaluating architectural technical debt.
- Planning migrations.
- Preparing for significant growth.

Use during Autonomous Build Mode when major architectural decisions are required.

Do not require a formal architecture review for trivial changes.

## 4. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires explicit authorization.

Both modes must apply the same engineering quality requirements.

Consult docs/governance.md.

Autonomy changes the approval workflow, not security, privacy, scalability or reliability expectations.

## 5. Supervised Mode

For significant architecture work:

1. Identify the authorized scope.
2. Inspect the existing system.
3. Identify business requirements.
4. Evaluate technical constraints.
5. Analyze the existing architecture.
6. Identify confirmed weaknesses.
7. Compare reasonable alternatives.
8. Assess risks and costs.
9. Recommend a justified decision.
10. Obtain approval before significant changes.
11. Implement only within authorized scope.
12. Verify results.

Existing production architecture reviews begin read-only.

Do not rewrite working applications without authorization.

## 6. Autonomous Build Mode

When explicitly authorized to build a complete application:

1. Understand the product requirements.
2. Establish architectural priorities.
3. Identify relevant global standards.
4. Select an appropriate technology stack.
5. Define component boundaries.
6. Define data architecture.
7. Plan security and privacy.
8. Design integration boundaries.
9. Establish scalability strategy.
10. Evaluate operational costs.
11. Implement the authorized architecture.
12. Add appropriate tests.
13. Validate architectural assumptions.
14. Correct identified problems.
15. Document important decisions.
16. Continue independent implementation.
17. Report remaining human actions.

Do not stop after each ordinary architecture milestone.

Do not request repeated approval for decisions already covered by the authorized development scope.

Protected operations require separate authorization.

## 7. Architecture Assessment Scope

Identify:

- Application purpose.
- Business model.
- Primary users.
- Functional requirements.
- Non-functional requirements.
- Existing technologies.
- Deployment environment.
- Data requirements.
- Integration requirements.
- Security constraints.
- Expected growth.
- Budget constraints.
- Team capabilities.
- Operational limitations.

Do not invent critical business requirements.

Document uncertainty.

## 8. Evidence-Based Architecture

Use evidence when available:

- Existing source code.
- Architecture diagrams.
- Database schemas.
- Performance measurements.
- Dependency manifests.
- Deployment configuration.
- Operational metrics.
- Test results.
- Verified provider capabilities.
- Verified pricing.

Distinguish:

- Confirmed facts.
- Reasonable estimates.
- Assumptions.
- Hypotheses.
- Unverified limitations.

Do not claim an architecture solves a measured problem without appropriate validation.

## 9. Architecture Principles

Apply:

- Clear responsibilities.
- Separation of concerns.
- High cohesion.
- Appropriate coupling.
- Secure boundaries.
- Explicit interfaces.
- Data integrity.
- Testability.
- Operational simplicity.
- Maintainability.
- Scalability when required.
- Cost efficiency.
- Evolutionary design.

Prefer the simplest architecture capable of satisfying actual requirements.

Avoid abstractions without demonstrable value.

## 10. Technology Selection

Evaluate candidate technologies according to:

- Required functionality.
- Security.
- Performance.
- Ecosystem maturity.
- Maintainability.
- Developer expertise.
- Platform compatibility.
- Operational support.
- Hosting options.
- Cost.
- Vendor dependency.
- Long-term viability.

Do not select frameworks solely because they are currently popular.

Preserve suitable existing technologies.

## 11. New Application Architecture

For a new project:

1. Define application responsibilities.
2. Identify primary business workflows.
3. Define trust boundaries.
4. Select suitable technologies.
5. Design modular components.
6. Define data ownership.
7. Identify external integrations.
8. Establish test strategy.
9. Establish development environments.
10. Plan deployment and operational evolution.

Do not overengineer an early-stage application.

Design appropriate extension points without implementing unnecessary infrastructure.

## 12. Existing Application Architecture

For an existing application:

- Inspect the current architecture.
- Identify established conventions.
- Preserve useful components.
- Review dependencies.
- Identify actual limitations.
- Assess business impact.
- Evaluate compatibility.
- Consider incremental improvements.

Do not replace working architecture merely to conform to personal preferences.

A mature monolith is not automatically inferior to microservices.

## 13. Modular Monolithic Architecture

Consider a modular monolith when:

- The application has a cohesive domain.
- Operational simplicity matters.
- Teams are small or moderately sized.
- Distributed deployment is unnecessary.
- Strong transactional consistency is useful.
- Infrastructure costs must remain controlled.

Define explicit module boundaries.

Avoid hidden dependencies between modules.

A modular monolith can support significant growth when appropriately designed and operated.

## 14. Microservices

Consider microservices when justified by:

- Independent deployment needs.
- Clear domain ownership.
- Distinct scaling requirements.
- Organizational structure.
- Fault isolation.
- Operational maturity.

Evaluate:

- Network complexity.
- Distributed transactions.
- Service discovery.
- Observability.
- Deployment complexity.
- Security boundaries.
- Testing effort.
- Infrastructure cost.

Do not recommend microservices solely because an application targets millions of users.

## 15. Serverless Architecture

Evaluate serverless when appropriate.

Consider:

- Request patterns.
- Execution duration.
- Concurrency.
- Cold starts.
- State management.
- Database connections.
- Provider quotas.
- Operational costs.
- Deployment portability.

Serverless may reduce operational burden.

Do not assume it is universally cheaper or more scalable.

## 16. Event-Driven Architecture

Consider event-driven patterns for:

- Asynchronous processing.
- Background workflows.
- Integration events.
- Notifications.
- Audit processing.
- Workload decoupling.

Review:

- Delivery guarantees.
- Duplicate events.
- Idempotency.
- Ordering.
- Retry policies.
- Dead-letter handling.
- Observability.
- Event schema evolution.

Do not use events for workflows that require simple synchronous behavior without justification.

## 17. Distributed Systems

When distributed architecture is required, evaluate:

- Network failures.
- Timeouts.
- Retries.
- Partial failures.
- Consistency.
- Idempotency.
- Message duplication.
- Ordering.
- Clock assumptions.
- Coordination.
- Recovery.

Do not assume distributed components behave like local function calls.

Apply complexity only where it creates measurable value.

## 18. Domain Boundaries

Identify meaningful business domains.

Define:

- Domain responsibilities.
- Entity ownership.
- Business invariants.
- API boundaries.
- Shared contracts.
- Dependency direction.
- Data access rules.

Avoid central modules that accumulate unrelated responsibilities.

Do not create artificial services for every business entity.

## 19. Layered Architecture

Use clear separation when appropriate:

- Presentation.
- Application orchestration.
- Domain logic.
- Data access.
- Infrastructure integration.

Avoid allowing UI components to enforce security-sensitive business decisions alone.

Keep domain rules testable.

## 20. Hexagonal and Clean Architecture

Consider ports-and-adapters or similar patterns when they improve:

- Testability.
- Dependency isolation.
- External service replacement.
- Domain clarity.
- Long-term maintenance.

Avoid excessive interfaces and wrappers without practical benefit.

Use the degree of abstraction justified by expected change.

## 21. API Architecture

Evaluate:

- Resource modeling.
- Endpoint consistency.
- Authentication.
- Authorization.
- Input validation.
- Pagination.
- Error handling.
- Versioning.
- Rate limiting.
- Idempotency.
- Observability.

Use appropriate API styles.

Do not impose REST, GraphQL, gRPC or another protocol universally.

## 22. API Contract Evolution

For established APIs:

- Evaluate backward compatibility.
- Identify affected consumers.
- Define deprecation procedures.
- Preserve stable contracts where practical.
- Document breaking changes.
- Test relevant integrations.

Do not make breaking production API changes without suitable authorization.

## 23. Integration Architecture

For external integrations:

- Define adapter boundaries.
- Validate data contracts.
- Handle timeouts.
- Use bounded retries.
- Verify authentication.
- Protect credentials.
- Consider rate limits.
- Handle partial failures.
- Track integration costs.

Do not assume external services are always available.

## 24. Data Architecture

Evaluate:

- Data model.
- Transaction boundaries.
- Ownership.
- Consistency.
- Query patterns.
- Access control.
- Tenant isolation.
- Migration requirements.
- Backup.
- Recovery.
- Retention.

Choose database technologies according to actual data requirements.

Consult docs/data.md.

## 25. Data Ownership

Define which components may create, update, retrieve and delete important records.

Avoid uncontrolled shared database access across unrelated modules or services.

Protect business invariants.

Do not rely on frontend validation as the only integrity control.

## 26. Multi-Tenant Architecture

For multi-tenant systems, evaluate:

- Tenant identity.
- Tenant-aware authorization.
- Data isolation.
- Storage boundaries.
- Caching.
- Search.
- Background processing.
- Resource quotas.
- Observability.
- Cost attribution.

Use isolation proportional to the business and security requirements.

Validate access boundaries.

## 27. Authentication Architecture

Evaluate:

- Identity provider selection.
- Session handling.
- Token validation.
- Account recovery.
- Multi-factor authentication where appropriate.
- Service identities.
- Administrative access.
- User lifecycle.

Do not expose privileged authentication credentials to untrusted clients.

Consult docs/security.md.

## 28. Authorization Architecture

Define:

- User roles.
- Resource ownership.
- Tenant boundaries.
- Privileged operations.
- Policy enforcement points.
- Service-to-service permissions.
- Administrative exceptions.

Enforce authorization at trusted boundaries.

Authentication does not replace authorization.

## 29. Security Architecture

Apply security by design.

Evaluate:

- Trust boundaries.
- Least privilege.
- Secure defaults.
- Attack surfaces.
- Secrets.
- Dependency security.
- Network exposure.
- Data isolation.
- Encryption.
- Auditability.
- Supply chain protections.

Do not weaken security merely to simplify architecture.

Consult docs/security.md.

## 30. Privacy Architecture

Apply privacy by design.

Evaluate:

- Personal data flows.
- Data minimization.
- Processing purposes.
- Retention.
- Deletion.
- Third-party processors.
- International transfers.
- User rights.
- Sensitive information handling.

Do not assume provider-level compliance claims establish application compliance.

Consult docs/privacy.md.

## 31. Reliability Architecture

Evaluate:

- Failure modes.
- Redundancy.
- Graceful degradation.
- Retries.
- Timeouts.
- Idempotency.
- Health checks.
- Recovery procedures.
- Dependency failures.

Design resilience according to business requirements.

Avoid introducing unnecessary distributed failure points.

## 32. Availability and Recovery

Identify suitable:

- Availability targets.
- Recovery time objectives.
- Recovery point objectives.
- Backup approaches.
- Restoration tests.
- Failover options.
- Regional considerations.

Do not assume replication replaces backups.

Do not claim recovery readiness without evidence.

## 33. Scalability Architecture

Evaluate:

- Current workload.
- Expected growth.
- Peak concurrency.
- Database capacity.
- CPU and memory requirements.
- Horizontal scaling.
- Vertical scaling.
- Caching.
- Queues.
- Storage growth.
- Network limits.

Design credible evolutionary scaling paths.

Do not confuse registered users with simultaneous active users.

Consult docs/scalability.md.

## 34. Scaling Toward Millions of Users

For large-scale ambitions:

1. Define realistic usage scenarios.
2. Identify key throughput drivers.
3. Estimate expected concurrency.
4. Identify likely bottlenecks.
5. Choose scalable component boundaries.
6. Plan data growth.
7. Evaluate capacity constraints.
8. Define monitoring.
9. Identify future scaling triggers.
10. Estimate financial implications.

Do not provision large clusters solely because future growth is possible.

Do not claim verified capacity without relevant testing.

## 35. Performance Architecture

Review:

- Request latency.
- Network overhead.
- Query performance.
- Caching.
- Background workloads.
- Frontend rendering.
- Memory allocation.
- CPU usage.
- Serialization.
- Large payloads.

Prefer performance improvements supported by real evidence.

Do not sacrifice correctness for small unverified gains.

## 36. Caching Architecture

When justified, evaluate:

- Cache placement.
- Cache keys.
- Tenant isolation.
- Expiration.
- Invalidation.
- Consistency.
- Storage cost.
- Stampede prevention.

Do not introduce caching without defining correctness and invalidation behavior.

## 37. Background Job Architecture

For asynchronous jobs:

- Define ownership.
- Define retry behavior.
- Apply timeouts.
- Use idempotency.
- Restrict execution scope.
- Support observability.
- Handle poison messages.
- Bound concurrency.
- Control cost.

Do not allow uncontrolled background processing.

## 38. Cloud Architecture

Evaluate appropriate options across:

- AWS.
- Microsoft Azure.
- Google Cloud.
- Other public providers.
- Managed application platforms.
- Hybrid infrastructure.
- On-premises systems.

Consider:

- Requirements.
- Security.
- Data residency.
- Reliability.
- Operational maturity.
- Scalability.
- Provider quotas.
- Pricing.
- Portability.

Do not declare one provider universally superior.

## 39. Cloud Service Selection

Compare services based on equivalent workloads.

Review:

- Compute.
- Databases.
- Storage.
- Networking.
- Authentication.
- Messaging.
- Monitoring.
- Backup.
- Deployment.
- Cost.

Use current provider documentation when verification matters.

Avoid introducing services without a clear technical purpose.

## 40. Infrastructure Portability

Evaluate portability according to actual needs.

Consider:

- Open standards.
- Portable data formats.
- Infrastructure-as-Code.
- Deployment automation.
- Adapter boundaries.
- Managed-service dependencies.
- Data export.
- Migration complexity.

Do not build excessive abstraction merely to avoid every provider-specific feature.

## 41. Containers

Use containers when they provide practical benefits.

Evaluate:

- Reproducible builds.
- Runtime dependencies.
- Deployment consistency.
- Security.
- Resource limits.
- Image size.
- Supply chain integrity.
- Operational tooling.

Do not require containers for every simple application.

## 42. Kubernetes Adoption

Adopt Kubernetes only when justified.

Possible reasons include:

- Multiple independently managed workloads.
- Complex deployment orchestration.
- Advanced scheduling.
- Established platform operations.
- Specific portability needs.
- Meaningful scaling and automation requirements.

Evaluate:

- Security.
- Cluster management.
- Networking.
- Observability.
- Storage.
- Upgrades.
- Reliability.
- Costs.
- Team expertise.

Do not select Kubernetes solely because the application targets millions of users.

## 43. Kubernetes Architecture

For existing or justified Kubernetes systems, assess:

- Cluster topology.
- Namespaces.
- RBAC.
- Workload identities.
- Network policies.
- Ingress.
- Service discovery.
- Resource requests and limits.
- Horizontal autoscaling.
- Node autoscaling.
- Storage.
- Secrets.
- Monitoring.

Never modify production clusters without appropriate authorization.

## 44. Managed Kubernetes

When relevant, evaluate:

- Amazon EKS.
- Azure AKS.
- Google Kubernetes Engine.
- Other managed Kubernetes services.

Compare:

- Cluster management costs.
- Compute.
- Network charges.
- Availability.
- Security capabilities.
- Operational effort.
- Compatibility.
- Provider integration.

Use current verified pricing when estimating costs.

## 45. Infrastructure-as-Code

Use infrastructure-as-code when appropriate.

Consider:

- Terraform.
- OpenTofu.
- Cloud-native templates.
- Pulumi.
- Other suitable tools.

Evaluate:

- Reproducibility.
- Reviewability.
- Secrets management.
- State protection.
- Policy enforcement.
- Rollback.
- Environment separation.

Do not apply live infrastructure changes without required approval.

## 46. Development Environments

Define suitable separation between:

- Local development.
- Automated testing.
- Preview environments.
- Staging.
- Production.

Protect production credentials.

Do not reuse live databases for routine testing.

Avoid unnecessary costs from excessive environments.

## 47. Deployment Architecture

Evaluate:

- Deployment method.
- Release automation.
- Environment configuration.
- Secret injection.
- Database migrations.
- Rollback.
- Health checks.
- Monitoring.
- Approval gates.

Do not infer deployment authorization from an instruction to build the application.

## 48. CI/CD Architecture

Review:

- Automated builds.
- Unit testing.
- Integration testing.
- Security scanning.
- Dependency validation.
- Artifact provenance.
- Protected branches.
- Environment permissions.
- Production approval.

Do not disable established quality gates to accelerate delivery.

## 49. Observability Architecture

Design appropriate:

- Structured logging.
- Metrics.
- Distributed tracing.
- Error reporting.
- Service health checks.
- Alerting.
- Incident workflows.
- Retention.

Avoid excessive telemetry costs and sensitive data exposure.

Consult docs/observability.md.

## 50. Cost-Aware Architecture

Evaluate total ownership cost.

Consider:

- Development complexity.
- Compute.
- Database.
- Storage.
- Networking.
- Monitoring.
- AI inference.
- Operations.
- Maintenance.
- Vendor dependency.

Prefer economical architectures that meet actual requirements.

Do not minimize spending by compromising essential security or reliability.

Consult docs/cost-engineering.md.

## 51. Financial Authorization

Architecture recommendations do not authorize spending.

Require appropriate authorization before:

- Provisioning paid infrastructure.
- Purchasing subscriptions.
- Upgrading service plans.
- Increasing billable resource quotas.
- Starting managed production clusters.
- Creating recurring paid dependencies.

Do not assume account access implies financial permission.

## 52. AI Application Architecture

When AI features are required, evaluate:

- Model providers.
- Inference boundaries.
- Prompt handling.
- Retrieval.
- Evaluation.
- Security.
- Privacy.
- Model costs.
- Human oversight.
- Failure handling.

Do not introduce generative AI where deterministic software is more suitable.

Consult docs/ai-and-llm.md.

## 53. RAG Architecture

For Retrieval-Augmented Generation, assess:

- Document ingestion.
- Parsing.
- Chunking.
- Embeddings.
- Vector storage.
- Authorization-aware retrieval.
- Reranking.
- Context construction.
- Model inference.
- Evaluation.
- Retention and deletion.

A semantic search result does not establish access permission.

Design retrieval boundaries to prevent cross-tenant data leakage.

## 54. Agentic Architecture

For agentic applications, define:

- Agent responsibilities.
- Tool permissions.
- Execution limits.
- Resource budgets.
- Human approval boundaries.
- Data access restrictions.
- Auditability.
- Error recovery.
- Evaluation requirements.

Do not allow autonomous application agents to perform protected operations without authorization.

## 55. Web Application Architecture

For web systems, evaluate:

- Frontend and backend boundaries.
- Server-side authorization.
- API contracts.
- Authentication.
- Browser security.
- Rendering strategy.
- Accessibility.
- Performance.
- Caching.
- Deployment.

Choose appropriate frameworks based on actual requirements.

Consult docs/mobile-and-web.md.

## 56. Mobile Architecture

For iOS and Android, evaluate:

- Native versus cross-platform approaches.
- State management.
- Navigation.
- Offline storage.
- Synchronization.
- Device permissions.
- Authentication.
- Background execution.
- Push notifications.
- App lifecycle.
- Release processes.

Do not assume one mobile framework is universally superior.

Consult docs/mobile-and-web.md.

## 57. Desktop and Native Architecture

For macOS, Windows, Linux and native applications, evaluate:

- Platform APIs.
- Local storage.
- Filesystem permissions.
- Background processing.
- Code signing.
- Distribution.
- Update systems.
- Resource management.
- Cross-platform compatibility.

Consult docs/platforms-and-applications.md.

## 58. Game Architecture

For games, evaluate:

- Engine selection.
- Gameplay systems.
- Entity management.
- Rendering.
- Physics.
- Save data.
- Multiplayer networking.
- Server authority.
- Asset pipelines.
- Platform compatibility.
- Performance.
- Monetization implications.

Do not introduce complex multiplayer infrastructure for offline games.

Consult docs/platforms-and-applications.md.

## 59. Architecture for Java Systems

For Java applications, evaluate:

- Runtime requirements.
- Framework selection.
- Dependency injection.
- Transaction boundaries.
- Modular structure.
- Threading and concurrency.
- JVM performance.
- Database integration.
- Security.
- Build tooling.
- Deployment.

Preserve established project conventions.

Do not introduce unnecessary frameworks.

## 60. Architecture for Other Languages

Apply relevant engineering patterns to:

- Python.
- JavaScript.
- TypeScript.
- Kotlin.
- Swift.
- C#.
- C++.
- Rust.
- Go.
- Other supported languages.

Choose architecture according to language capabilities and project requirements.

Do not force patterns from one ecosystem into unrelated technologies.

## 61. Architecture Documentation

For significant architecture work, document:

- System context.
- Main components.
- Responsibilities.
- Interfaces.
- Data flows.
- Trust boundaries.
- Dependencies.
- Deployment topology.
- Key assumptions.
- Important risks.

Use diagrams when useful.

Keep documentation aligned with implemented behavior.

## 62. Architecture Decision Records

Use the template:

~/engineering-standards/templates/ADR.md

Document material decisions involving:

- Technology selection.
- Database architecture.
- Infrastructure architecture.
- Significant integration patterns.
- Security boundaries.
- Major scalability strategies.
- Material platform migrations.

Record alternatives and trade-offs.

An ADR does not authorize protected operations.

## 63. Architectural Trade-Offs

Evaluate trade-offs explicitly.

Examples:

- Simplicity versus extensibility.
- Consistency versus availability.
- Performance versus cost.
- Portability versus managed convenience.
- Isolation versus operational overhead.
- Development speed versus maintainability.

Avoid claiming that an architecture provides every advantage without meaningful costs or limitations.

## 64. Architecture Risk Assessment

Identify relevant:

- Security risks.
- Privacy risks.
- Data integrity risks.
- Reliability risks.
- Performance limitations.
- Scaling bottlenecks.
- Vendor dependencies.
- Financial exposure.
- Operational complexity.
- Migration risks.

Classify risk according to evidence and impact.

Distinguish confirmed issues from hypotheses.

## 65. Architecture Review Findings

For material findings, record:

- Finding ID.
- Affected component.
- Description.
- Evidence.
- Severity.
- Confidence.
- Current impact.
- Expected future impact.
- Recommended correction.
- Implementation complexity.
- Compatibility risks.
- Financial consequences.
- Required approval.

Do not invent architecture defects.

## 66. Architecture Review Reporting

For significant reviews, use:

~/engineering-standards/templates/AUDIT_REPORT.md

Include:

- Current architecture.
- Verified strengths.
- Confirmed limitations.
- Unverified concerns.
- Alternatives.
- Risks.
- Recommended improvements.
- Cost considerations.
- Migration implications.
- Human decisions.

Avoid presenting architectural preferences as confirmed vulnerabilities.

## 67. Architecture Modernization

For existing systems:

1. Inspect current implementation.
2. Identify verified limitations.
3. Assess business impact.
4. Evaluate incremental changes.
5. Protect existing data.
6. Preserve compatibility.
7. Define migration stages.
8. Assess rollback.
9. Obtain required approval.
10. Verify improvements.

Prefer incremental modernization over broad rewrites when possible.

## 68. Migration and Compatibility

For material architecture changes, assess:

- Existing consumers.
- API compatibility.
- Database schema changes.
- Deployment impact.
- Data migration.
- Operational dependencies.
- Rollback feasibility.
- Testing requirements.

Do not assume every migration is reversible.

Do not execute destructive production migrations without explicit authorization.

## 69. Architecture Testing

Select relevant tests:

- Module boundary tests.
- Integration tests.
- Contract tests.
- Authorization tests.
- Database integrity tests.
- Load tests.
- Resilience tests.
- Deployment configuration checks.
- Architecture fitness functions.

Do not perform intrusive production testing without authorization.

Report actual results.

## 70. Architecture Validation

After authorized implementation:

1. Inspect modified components.
2. Confirm architectural boundaries.
3. Run relevant tests.
4. Check security implications.
5. Review data integrity.
6. Evaluate compatibility.
7. Assess operational risks.
8. Record unresolved issues.
9. Update architecture documentation.

Do not claim verified scalability without appropriate evidence.

## 71. Autonomous Architecture Decisions

In Autonomous Build Mode, the agent may make ordinary architecture decisions within the user's approved scope.

Examples:

- Selecting a suitable framework for a new project.
- Defining module boundaries.
- Choosing internal API conventions.
- Organizing application layers.
- Selecting local development tools.
- Designing test architecture.
- Preparing deployment configuration.
- Documenting future scaling paths.

The agent should record material decisions without interrupting for routine approvals.

High-risk and protected operations remain subject to human authorization.

## 72. Autonomous Engineering Standards

Autonomous Build Mode changes the approval workflow, not architecture quality.

Apply all relevant Global Engineering Standards.

The agent must:

- Use secure defaults.
- Protect personal data.
- Preserve data integrity.
- Design maintainable components.
- Support credible future scalability.
- Avoid unnecessary infrastructure costs.
- Define testing and validation.
- Implement appropriate observability.
- Respect platform requirements.
- Document significant decisions.
- Report limitations honestly.

Do not reduce engineering quality to finish faster.

## 73. Protected Architecture Operations

Require specific authorization before:

- Production architecture migrations.
- Destructive database changes.
- Changing privileged security policies.
- Modifying live cloud infrastructure.
- Introducing significant paid commitments.
- Disruptive production deployment.
- Broad changes outside approved scope.
- Publishing applications or services.
- Moving sensitive production data between providers.

A general autonomous development request does not grant blanket permission for these operations.

Consult docs/governance.md.

## 74. Architecture Exceptions

When a standard cannot reasonably be satisfied:

1. Identify the conflicting requirement.
2. Explain the limitation.
3. Evaluate alternatives.
4. Assess risks.
5. Identify compensating controls.
6. Prepare an exception request.
7. Obtain required approval.
8. Define review conditions.

Use:

~/engineering-standards/templates/EXCEPTIONS.md

An AI coding agent cannot approve its own standards exception.

## 75. Architecture Cost Optimization

Before adding infrastructure complexity, assess:

- Real resource demand.
- Existing capacity.
- Managed alternatives.
- Operational overhead.
- Security requirements.
- Reliability requirements.
- Recurring expenses.
- Scaling thresholds.

Prefer low-complexity solutions when requirements are satisfied.

Do not compromise essential safeguards for lower cost.

## 76. Architecture Definition of Done

For significant architecture work:

- Requirements identified.
- Technical context verified.
- Alternatives evaluated.
- Security considered.
- Privacy considered.
- Data integrity protected.
- Scalability approach justified.
- Reliability addressed.
- Costs evaluated.
- Maintainability considered.
- Relevant tests executed where feasible.
- Compatibility reviewed.
- Important decisions documented.
- Protected operations authorized.
- Limitations reported.
- Human actions identified.

Do not describe an architecture as production-ready without relevant verification.

## 77. Final Architecture Reporting

Report:

1. Project context.
2. Existing or selected architecture.
3. Main components.
4. Significant technical decisions.
5. Alternatives evaluated.
6. Security and privacy considerations.
7. Data architecture.
8. Scalability strategy.
9. Reliability and recovery.
10. Infrastructure and deployment.
11. Cost implications.
12. Validation performed.
13. Unverified assumptions.
14. Important risks.
15. Required human actions.

Clearly distinguish design recommendations from implemented architecture.

## 78. Final Architecture Principles

Base architecture on real requirements.
Prefer clear component responsibilities.
Preserve separation of concerns.
Protect security boundaries.
Apply privacy by design.
Preserve data integrity.
Use explicit and testable interfaces.
Avoid unnecessary coupling.
Prefer maintainable modular systems.
Do not introduce microservices without justification.
Do not introduce Kubernetes without justification.
Design credible growth paths.
Use evidence for performance decisions.
Consider reliability and recovery.
Evaluate financial implications.
Preserve existing production systems.
Prefer incremental modernization.
Keep important architectural decisions documented.
Respect actual platform constraints.
Support authorized autonomous development.
Maintain engineering quality in all operating modes.
Require authorization for protected operations.
Never fabricate architecture validation.
Report limitations honestly.