
# Global Software Architecture Standards

## 1. Mission

Design, evolve and maintain production-grade software architectures that are secure, reliable, maintainable, testable, scalable and cost-efficient.

These standards apply to new and existing applications, including:

- Web applications.
- Native iOS applications.
- Native Android applications.
- Cross-platform mobile applications.
- Backend services and APIs.
- Database systems.
- AI-powered applications.
- Real-time systems.
- Enterprise SaaS platforms.

Architecture must be planned before significant implementation.

Architecture decisions must be justified by actual requirements, measurable constraints, operational risks and total cost of ownership.

Never assume that a complex architecture is better than a simple one.

## 2. Architecture-First Workflow

Before implementing significant functionality:

1. Inspect the existing project.
2. Identify business goals and user workflows.
3. Define functional requirements.
4. Define non-functional requirements.
5. Identify domain entities and invariants.
6. Identify system boundaries and dependencies.
7. Map data flows and trust boundaries.
8. Evaluate security and privacy.
9. Estimate expected capacity and cost.
10. Propose architectural alternatives.
11. Document the recommended architecture.
12. Define measurable acceptance criteria.
13. Present an implementation plan.
14. Wait for explicit human approval.

Do not write implementation code during a requested architecture-only assessment.

Separate confirmed requirements from assumptions and recommendations.

## 3. Architectural Principles

Apply the following principles pragmatically:

- Separation of Concerns.
- Single Responsibility.
- High Cohesion.
- Low Coupling.
- Dependency Inversion where useful.
- Encapsulation.
- Explicit interfaces and contracts.
- Information Hiding.
- Composition over Inheritance where appropriate.
- SOLID.
- DRY.
- KISS.
- YAGNI.
- Security by Design.
- Privacy by Design.
- Observability by Design.
- Cost-Aware Architecture.

Do not apply design patterns mechanically.

Avoid abstractions that increase complexity without providing measurable benefits.

Readable, understandable architecture is preferable to unnecessary sophistication.

## 4. Domain-Driven Design

Identify clear business domains and bounded contexts where useful.

Separate domain concepts from:

- User interface concerns.
- Database implementation details.
- Infrastructure frameworks.
- External providers.
- Transport protocols.

Protect important business rules from accidental duplication.

Identify ownership of business entities and invariants.

Use domain services, application services and repositories when they provide meaningful separation.

Do not introduce unnecessary layers into simple modules.

## 5. Modular Architecture

Prefer a modular architecture with explicit boundaries.

Each module should have:

- A clear responsibility.
- Defined ownership of business logic.
- Explicit public interfaces.
- Controlled dependencies.
- Testable behavior.
- Documented integration contracts.

Avoid circular dependencies.

Avoid modules accessing another module's internal implementation directly.

Prefer a modular monolith as the initial architecture unless requirements justify distributed services.

Do not introduce microservices solely because millions of users are a future objective.

## 6. Modular Monolith vs Microservices

Evaluate a modular monolith first.

Consider microservices when supported by evidence such as:

- Independent scaling requirements.
- Different reliability boundaries.
- Different deployment lifecycles.
- Organizational ownership needs.
- Strong isolation requirements.
- Measured operational bottlenecks.

Evaluate the additional costs of:

- Network communication.
- Distributed tracing.
- Service authentication.
- Data consistency.
- Infrastructure.
- Deployment complexity.
- Operational monitoring.
- Incident response.

Never recommend microservices without explaining measurable benefits and operational trade-offs.

## 7. Scalability Architecture

Design systems to evolve toward millions of users.

Evaluate scenarios involving:

- 10,000 users.
- 100,000 users.
- 1,000,000 users.
- 5,000,000 users.
- 10,000,000 users.

Distinguish:

- Registered users.
- Monthly active users.
- Daily active users.
- Concurrent users.
- Peak requests per second.
- Database operations per second.
- Storage growth.
- Real-time connections.

Define scaling thresholds based on measured or explicitly modeled demand.

Evaluate:

- Horizontal scaling.
- Stateless services.
- Load balancing.
- Database connection pooling.
- Appropriate caching.
- Background jobs.
- Queues.
- Concurrency control.
- Resource quotas.
- Rate limiting.
- Infrastructure resilience.
- Database partitioning when justified.
- Multi-region deployment when justified.

Never claim capacity for millions of users without evidence from modeling, testing or operational measurements.

Design for future scale while paying for current demand.

## 8. Performance Engineering

Define measurable performance objectives.

Evaluate:

- Response latency.
- p50, p95 and p99 latency.
- Throughput.
- Error rates.
- Memory usage.
- CPU consumption.
- Database query performance.
- Network payload size.
- Frontend rendering performance.
- Mobile startup time.
- Battery consumption.
- Real-time delivery latency.

Avoid premature optimization.

Use profiling, monitoring and load testing to identify bottlenecks.

Do not introduce caching without a consistency and invalidation strategy.

## 9. API Architecture

Design APIs with explicit contracts.

Requirements:

- Clear resource and operation boundaries.
- Consistent naming.
- Input validation.
- Output schemas.
- Authentication and authorization.
- Appropriate error handling.
- Pagination where relevant.
- Filtering and sorting controls.
- Rate limiting.
- Idempotency where necessary.
- Request timeouts.
- Bounded retries.
- Observability.
- Backward compatibility.

Use API versioning when required by compatibility needs.

Do not expose internal implementation details unnecessarily.

Protect existing clients during API evolution.

## 10. Cross-Platform Architecture

For applications supporting web, iOS and Android:

- Define consistent backend contracts.
- Centralize authoritative business rules.
- Avoid duplicating critical validation across platforms.
- Respect platform-specific capabilities.
- Keep authentication and authorization consistent.
- Handle network interruptions.
- Define offline behavior where required.
- Support appropriate state synchronization.
- Maintain backward compatibility with older mobile versions.
- Test platform-specific edge cases.

Client-side validation improves user experience but cannot replace server-side enforcement.

## 11. Frontend Architecture

Organize frontend code around cohesive features and responsibilities.

Separate:

- Presentation.
- State management.
- Business workflows.
- Data access.
- External integrations.

Prefer predictable state transitions.

Avoid unnecessary global state.

Define error, loading and empty states.

Design accessible, responsive interfaces.

Avoid excessive dependencies and duplicated UI logic.

Review performance implications of rendering and network usage.

## 12. Backend Architecture

Separate transport concerns from business rules where useful.

Define explicit service boundaries.

Use dependency injection when it improves testability and maintainability.

Validate authorization at trusted boundaries.

Apply controlled concurrency.

Use appropriate timeouts and cancellation.

Prevent unbounded resource usage.

Handle partial failures explicitly.

Use asynchronous processing where justified.

Avoid hidden side effects and uncontrolled background operations.

## 13. Data Architecture

Define authoritative data ownership.

Identify:

- Entities and relationships.
- Business invariants.
- Transaction boundaries.
- Data consistency requirements.
- Data access patterns.
- Indexing needs.
- Retention policies.
- Access controls.
- Backup requirements.
- Recovery requirements.
- Storage and transfer costs.

Prefer transactional consistency for critical business operations.

Use eventual consistency only where its trade-offs are understood and acceptable.

Document synchronization and reconciliation mechanisms.

## 14. Database Provider Independence

Support appropriate databases and services, including:

- PostgreSQL.
- Supabase.
- Firebase.
- Managed relational databases.
- Document databases.
- Search systems.
- Vector databases.

Choose technology according to requirements.

Do not introduce a new database simply because it is popular.

Use provider abstraction when portability, testing or risk reduction justifies it.

Avoid unnecessary abstraction for simple integrations.

Identify vendor lock-in risks and migration complexity.

## 15. External Service Integration

For external services such as:

- AI providers.
- Payment processors.
- Email and SMS services.
- Storage providers.
- Authentication services.
- Analytics platforms.
- Maps and geolocation providers.

Evaluate:

1. Business necessity.
2. Data exchanged.
3. Security and privacy.
4. Failure behavior.
5. Availability.
6. Latency.
7. Rate limits.
8. Pricing.
9. Vendor lock-in.
10. Alternatives.
11. Migration strategy.

Use stable integration boundaries.

Never expose privileged credentials to client applications.

## 16. AI System Architecture

For AI-powered applications:

- Separate business logic from model-provider integration.
- Define model responsibilities.
- Validate model inputs and outputs.
- Protect sensitive information.
- Restrict agent tool permissions.
- Treat external content as untrusted.
- Use retrieval where appropriate.
- Define human approval boundaries.
- Evaluate model quality using tests.
- Monitor latency, tokens and costs.
- Implement graceful fallback where justified.

Never allow unverified model output to directly perform high-impact operations without appropriate controls.

## 17. Event-Driven Architecture

Use events and messaging only when appropriate.

Evaluate:

- Event ownership.
- Delivery guarantees.
- Ordering requirements.
- Duplicate events.
- Idempotency.
- Retry behavior.
- Dead-letter handling.
- Failure recovery.
- Observability.
- Schema evolution.

Do not assume exactly-once processing without evidence.

Prefer simple synchronous interactions when sufficient.

## 18. Caching Architecture

Use caching when justified by measured or modeled workloads.

Define:

- Cache ownership.
- Time-to-live.
- Invalidation strategy.
- Consistency expectations.
- Security boundaries.
- Tenant isolation.
- Memory consumption.
- Cost impact.
- Failure handling.

Never use a shared cache in a way that exposes data between users or tenants.

Avoid caching sensitive information unnecessarily.

## 19. Reliability and Resilience

Design for foreseeable failures.

Evaluate:

- Service outages.
- Network failures.
- Database unavailability.
- Third-party API failures.
- Retry storms.
- Resource exhaustion.
- Partial transactions.
- Duplicate requests.
- Inconsistent external events.

Apply where appropriate:

- Timeouts.
- Bounded retries.
- Exponential backoff with jitter.
- Circuit breakers.
- Bulkheads.
- Graceful degradation.
- Health checks.
- Failover.
- Recovery procedures.

Avoid retry strategies that multiply costs or overload failing services.

## 20. Availability and Recovery

Define appropriate:

- Availability objectives.
- Service Level Objectives.
- Recovery Point Objectives.
- Recovery Time Objectives.
- Backup strategies.
- Restoration tests.
- Incident procedures.

Do not promise high availability without verified infrastructure and operational processes.

Multi-region architecture must be justified by requirements, risk and cost.

## 21. Observability

Design systems to provide relevant:

- Structured logs.
- Metrics.
- Distributed tracing.
- Error reporting.
- Health checks.
- Alerts.
- Resource utilization monitoring.
- Cost monitoring.

Avoid exposing secrets or unnecessary personal data.

Define actionable alerts.

Monitoring must support diagnosis rather than merely collecting large volumes of data.

## 22. Security Architecture

Identify trust boundaries.

Apply:

- Least privilege.
- Defense in depth.
- Secure defaults.
- Explicit authorization.
- Strong secret management.
- Network protection.
- Secure communication.
- Isolation of privileged operations.
- Threat modeling.
- Continuous verification.

Consult security.md for detailed requirements.

Never assume that authentication alone guarantees security.

## 23. Privacy Architecture

Apply data minimization and privacy-preserving defaults.

Document personal data flows.

Consider:

- Purpose limitation.
- Legal basis.
- Access control.
- Retention.
- Deletion.
- International transfers.
- Third-party processors.
- Individual rights.
- Sensitive information.

Consult privacy.md for detailed requirements.

## 24. Cost-Aware Architecture

For significant decisions, evaluate:

- Development complexity.
- Hosting and compute.
- Database capacity.
- Storage growth.
- Network and CDN usage.
- External API costs.
- AI inference costs.
- Monitoring costs.
- Operational staffing.
- Migration costs.

Estimate costs using verified prices and explicit assumptions.

Provide cost scenarios at different growth levels where relevant.

Prefer architectures that scale efficiently without unnecessary initial expense.

Never silently sacrifice security, reliability or correctness to reduce costs.

## 25. Architecture Decision Records

Record significant technical decisions using ADRs.

Each ADR should contain:

- Title.
- Status.
- Context.
- Decision.
- Alternatives considered.
- Benefits.
- Risks and trade-offs.
- Security implications.
- Data implications.
- Scalability implications.
- Cost implications.
- Consequences.
- Review conditions.

Do not rewrite historical ADRs to conceal previous decisions.

Supersede outdated decisions with new records.

## 26. Architecture Documentation

Maintain relevant documentation including:

- System context.
- Module boundaries.
- Component relationships.
- Data flows.
- Trust boundaries.
- API contracts.
- Deployment topology.
- Major external dependencies.
- Important operational assumptions.

Use diagrams when they improve understanding.

Documentation must reflect the actual implementation.

Do not invent architecture diagrams based on unverified assumptions.

## 27. Architecture Verification

Validate significant architecture changes using relevant:

- Unit tests.
- Integration tests.
- Contract tests.
- End-to-end tests.
- Security tests.
- Data integrity tests.
- Load tests.
- Performance measurements.
- Failure simulations.
- Infrastructure validation.

Report tests actually executed.

Distinguish measured results from expected behavior.

Never claim scalability or reliability without supporting evidence.

## 28. Existing Project Architecture Audits

For existing systems:

1. Inspect the actual repository.
2. Identify current modules and dependencies.
3. Map important business workflows.
4. Identify architectural strengths.
5. Identify confirmed weaknesses.
6. Evaluate security, data, cost and scaling implications.
7. Propose incremental improvements.
8. Estimate regression risk.
9. Define required tests.
10. Present a prioritized roadmap.
11. Wait for human approval.

Do not recommend a complete rewrite without extraordinary justification.

Protect existing working functionality.

## 29. Safe Architectural Evolution

Use incremental migration strategies.

Consider:

- Branch by Abstraction.
- Strangler Fig migration.
- Expand-Migrate-Contract.
- Feature flags.
- API versioning.
- Compatibility adapters.
- Staged rollout.
- Canary releases.
- Rollback procedures.

Select only techniques justified by the actual architecture.

Never change production data structures or critical interfaces without explicit approval.

## 30. Architectural Approval

Require explicit human approval before:

- Introducing major frameworks.
- Changing application-wide architecture.
- Introducing microservices.
- Changing database technology.
- Adding significant infrastructure.
- Breaking API contracts.
- Changing authentication or authorization architecture.
- Introducing material recurring costs.
- Making significant data-flow changes.

Explain alternatives, risks, costs and rollback options before approval.

## 31. Architecture Definition of Done

For significant architectural work:

- Requirements documented.
- Relevant architecture understood.
- Alternatives evaluated.
- Design approved.
- Data contracts verified.
- Security and privacy reviewed.
- Scalability implications assessed.
- Costs evaluated.
- Appropriate tests executed.
- Documentation updated.
- Regression risk evaluated.
- Remaining risks documented.
- Recovery strategy defined.

Do not declare an architectural change complete merely because code compiles.


## 31A. Cloud Architecture, Kubernetes and Infrastructure Portability

### Purpose

Design secure, resilient, scalable, maintainable and cost-efficient infrastructure architectures.

These requirements apply to applications running on:

- Amazon Web Services (AWS).
- Microsoft Azure.
- Google Cloud Platform (GCP).
- Other public cloud providers.
- Managed application platforms.
- Serverless environments.
- Container platforms.
- Kubernetes.
- Hybrid infrastructure.
- On-premises infrastructure.
- Self-hosted environments.

No infrastructure provider or orchestration platform is mandatory by default.

Always inspect existing infrastructure before recommending changes.

### Cloud Architecture Principles

Apply the following principles:

- Security by Design.
- Least Privilege.
- Infrastructure as Code where appropriate.
- High Availability according to business requirements.
- Fault Isolation.
- Observability by Design.
- Cost-Aware Architecture.
- Automated and controlled deployments.
- Backup and Disaster Recovery.
- Measurable Scalability.
- Provider Portability where justified.

Do not introduce unnecessary infrastructure complexity.

### Provider Independence

Evaluate AWS, Azure, GCP and other providers according to actual requirements.

Consider:

1. Existing infrastructure and dependencies.
2. Technical compatibility.
3. Security and regulatory requirements.
4. Expected workload and traffic.
5. Geographic availability and latency.
6. Service reliability.
7. Operational capabilities.
8. Scalability requirements.
9. Total cost of ownership.
10. Vendor lock-in and migration complexity.

Do not assume equivalent services across providers have identical behavior, security guarantees, reliability or pricing.

Preserve existing infrastructure when it meets verified requirements.

Do not recommend multi-cloud deployments without justified business, resilience or regulatory needs.

### Kubernetes Adoption

Kubernetes is an optional container orchestration platform.

It must never be treated as mandatory solely because an application targets millions of users.

Before recommending Kubernetes, compare it with:

- Modular monolith deployments.
- Managed application platforms.
- Serverless functions.
- Managed containers.
- Virtual machines.
- Simpler hosting architectures.

Consider Kubernetes when requirements justify:

- Independent workload scaling.
- Complex container orchestration.
- Controlled deployment strategies.
- Workload isolation.
- Specialized scheduling.
- Operational standardization.
- High availability.
- Multiple independently managed services.

Evaluate the operational complexity and additional costs.

Never introduce Kubernetes without a documented architectural decision and explicit human approval.

### Kubernetes Platforms

Support relevant environments, including:

- Amazon Elastic Kubernetes Service (EKS).
- Azure Kubernetes Service (AKS).
- Google Kubernetes Engine (GKE).
- Other managed Kubernetes platforms.
- Self-managed Kubernetes.
- Hybrid and on-premises Kubernetes.

Verify current provider capabilities and limitations.

### Kubernetes Application Architecture

When Kubernetes is already used or explicitly approved, evaluate:

- Workload boundaries.
- Deployments and StatefulSets.
- Services and network routing.
- Ingress or Gateway API configurations.
- Namespace design.
- Service accounts.
- RBAC.
- NetworkPolicies.
- Workload identity.
- Secrets management.
- Pod security controls.
- Resource requests and limits.
- Health and readiness probes.
- Horizontal and vertical scaling.
- Node scaling.
- Pod disruption budgets.
- Rolling deployments.
- Observability.
- Backup and recovery.

Use only the Kubernetes components justified by actual requirements.

### Kubernetes Security

Apply Defense in Depth and Least Privilege.

Evaluate:

- Cluster access permissions.
- Workload identity.
- Service account privileges.
- Network isolation.
- Container image provenance.
- Image vulnerability scanning.
- Secrets management.
- Admission controls and policy enforcement.
- Privileged containers.
- Host filesystem access.
- Administrative access.
- Supply-chain security.
- Audit logging.

Never give application workloads unrestricted cluster administration privileges.

Never embed privileged credentials in container images.

Do not assume namespaces alone provide complete security isolation.

### Data and Stateful Services

Evaluate managed database services before hosting databases inside Kubernetes.

Consider:

- Persistence requirements.
- Database availability.
- Storage performance.
- Backup and restoration.
- Replication.
- Data consistency.
- Recovery objectives.
- Operational maintenance.
- Cost implications.

Kubernetes does not automatically guarantee database consistency, backups or disaster recovery.

Detailed data requirements are defined in docs/data.md.

### Scalability and Reliability

Define measurable requirements for:

- Peak requests per second.
- Concurrent users.
- Response latency.
- Resource utilization.
- Error rates.
- Availability.
- Recovery objectives.
- Autoscaling behavior.

Do not assume autoscaling solves database bottlenecks, inefficient code or external API limitations.

Validate scaling behavior through appropriate testing.

Detailed capacity and autoscaling requirements belong in docs/scalability.md.

### Cloud and Kubernetes Costs

Evaluate:

- Compute and worker nodes.
- Control plane charges.
- Persistent storage.
- Network traffic and egress.
- Load balancers.
- Cross-zone and cross-region traffic.
- Monitoring and logging.
- Backup and recovery.
- Managed service charges.
- Operational maintenance.

Consider simpler alternatives when they provide equal or better value.

Detailed financial modeling belongs in docs/cost-engineering.md.

### Infrastructure as Code

Where appropriate, use version-controlled infrastructure definitions.

Evaluate tools such as:

- Terraform or OpenTofu.
- Cloud-native infrastructure templates.
- Kubernetes manifests.
- Helm.
- GitOps deployment tools.

Select tools according to existing project conventions.

Do not introduce new infrastructure tooling without justification.

Never include production secrets in infrastructure source files.

### Deployment and Recovery

Before significant infrastructure changes:

1. Inspect the current environment.
2. Identify affected services.
3. Assess data integrity and availability risks.
4. Review security implications.
5. Evaluate operating costs.
6. Validate proposed configurations.
7. Test changes in an appropriate environment.
8. Define rollout and rollback procedures.
9. Document expected impact.
10. Obtain explicit human approval.

Never automatically modify production infrastructure.

### Architecture Decision Requirements

Record significant infrastructure decisions using ADRs.

Document:

- Why the technology is required.
- Alternatives considered.
- Security implications.
- Scalability benefits.
- Availability implications.
- Operational complexity.
- Expected costs.
- Migration risks.
- Review conditions.

### Final Principle

Cloud-agnostic by design where practical.
Provider-neutral by default.
Kubernetes only when justified.
Design for millions of users.
Provision for actual demand.
Protect security and data integrity.
Measure performance and costs.
Preserve working production systems.
Require approval for significant infrastructure changes.


## 32. Final Architecture Principles

Architecture first.
Understand before changing.
Prefer simplicity over unnecessary complexity.
Protect domain boundaries.
Minimize coupling.
Design explicit contracts.
Preserve existing behavior.
Plan for millions of users.
Scale based on evidence.
Protect security and data integrity.
Measure performance and operational costs.
Document important decisions.
Validate before release.
Require approval before significant changes.