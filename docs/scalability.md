
# Global Scalability and Performance Engineering Standards

## 1. Mission

Design, develop, validate and operate software capable of evolving toward millions of users while preserving security, privacy, data integrity, reliability, maintainability and cost efficiency.

These standards apply to new and existing production applications.

Supported environments include:

- Web applications.
- Native iOS applications.
- Native Android applications.
- Cross-platform mobile applications.
- SaaS platforms.
- Backend APIs.
- AI-powered applications.
- Realtime systems.
- Database systems.
- Serverless infrastructure.
- Containerized applications.
- Kubernetes.
- Cloud, hybrid and on-premises infrastructure.

These standards are cloud-agnostic, provider-neutral and technology-independent.

No specific architecture, framework, database, cloud provider or orchestration platform is mandatory.

Never claim scalability without supporting evidence.

## 2. Fundamental Scalability Principle

Design for future growth.

Provision for current demand.

Scale according to measured requirements.

Do not confuse architectural scalability with current infrastructure capacity.

Do not introduce expensive infrastructure merely because an application may eventually have millions of users.

Prefer the simplest architecture capable of meeting verified requirements with a credible evolution path.

Security, correctness and data integrity must not be sacrificed for throughput or lower costs.

## 3. Capacity Planning

For significant architectural decisions, evaluate scenarios including:

- 10,000 users.
- 100,000 users.
- 1,000,000 users.
- 5,000,000 users.
- 10,000,000 users.

These are planning scenarios, not assumed workload requirements.

Distinguish:

- Registered users.
- Monthly active users (MAU).
- Daily active users (DAU).
- Peak concurrent users.
- Active sessions.
- Requests per second (RPS).
- Transactions per second (TPS).
- Database reads and writes.
- Concurrent realtime connections.
- AI requests per minute.
- Storage growth.
- Network bandwidth.

Document assumptions explicitly.

Never derive infrastructure sizing from registered-user count alone.

## 4. Workload Modeling

Before making scalability recommendations, identify:

1. Expected user behavior.
2. Frequently accessed features.
3. Peak traffic periods.
4. Request distribution.
5. Read/write ratios.
6. Average and maximum payload sizes.
7. Background processing requirements.
8. Realtime communication needs.
9. External API dependencies.
10. Geographic distribution.
11. Availability requirements.
12. Growth assumptions.

Model normal, peak and exceptional workloads.

Identify which assumptions are measured and which are estimated.

## 5. Performance Objectives

Define measurable performance targets appropriate to the application.

Evaluate:

- Response latency.
- p50 latency.
- p95 latency.
- p99 latency.
- Throughput.
- Error rate.
- Time to first byte.
- Frontend rendering performance.
- Mobile startup time.
- Database query latency.
- Background job completion time.
- Realtime message latency.
- Resource utilization.

Performance targets must reflect user needs and product requirements.

Do not impose arbitrary latency targets without justification.

## 6. Architecture for Growth

Evaluate architectural choices according to workload and operational complexity.

Possible approaches include:

- Modular monoliths.
- Stateless backend services.
- Managed application hosting.
- Serverless functions.
- Containers.
- Kubernetes.
- Background workers.
- Event-driven processing.
- Distributed services.
- Hybrid architectures.

Prefer modular simplicity.

Do not assume microservices are necessary for millions of users.

Separate independent scaling requirements only when justified.

Document architectural evolution thresholds.

## 7. Vertical and Horizontal Scaling

Evaluate vertical scaling when it provides an efficient solution.

Consider:

- CPU.
- Memory.
- Storage throughput.
- Database capacity.
- Resource limits.
- Cost increases.

Evaluate horizontal scaling when workloads can be distributed appropriately.

Consider:

- Stateless application instances.
- Load balancing.
- Shared state.
- Session management.
- Database capacity.
- Distributed coordination.
- Network overhead.
- Operational complexity.

Never assume horizontal scaling automatically solves database or external service bottlenecks.

## 8. Stateless Application Design

Prefer stateless request processing where appropriate.

Avoid storing critical session state only in individual application instances.

Use suitable external state mechanisms where necessary.

Design requests to tolerate execution on different instances.

Manage authentication and session consistency securely.

Do not introduce distributed state systems unnecessarily.

## 9. Load Balancing

Evaluate load balancing according to expected traffic.

Consider:

- Request distribution.
- Health checks.
- Failover.
- Connection handling.
- Geographic routing.
- TLS termination.
- Session requirements.
- Cost.

Avoid single points of failure where availability requirements justify redundancy.

Validate behavior during instance failure and scaling events.

## 10. Database Scalability

Evaluate:

- Query plans.
- Index effectiveness.
- Read/write ratios.
- Database connections.
- Connection pooling.
- Transaction duration.
- Lock contention.
- Replication.
- Read replicas.
- Partitioning.
- Storage growth.
- Backup duration.
- Recovery time.

Identify the actual database technology before recommending optimizations.

Apply provider-specific requirements only when relevant.

Consult docs/data.md for detailed database standards.

Never recommend sharding without strong evidence that simpler approaches are insufficient.

## 11. Supabase Scalability

For applications using Supabase, evaluate:

- Database compute utilization.
- Query performance.
- Connection pooling.
- RLS query efficiency.
- Authentication usage.
- Storage and bandwidth.
- Edge Function usage.
- Realtime subscriptions.
- Message volume.
- Concurrent connections.
- Provider quotas.
- Available scaling options.
- Operational costs.

Verify current Supabase limits and pricing.

Never assume Supabase has unlimited capacity.

Never assume changing providers is necessary without evidence.

## 12. AWS, Azure and GCP Scalability

Support scalability planning across:

### Amazon Web Services

Evaluate relevant services such as:

- EC2.
- ECS.
- EKS.
- AWS Lambda.
- Application Load Balancer.
- RDS and Aurora.
- DynamoDB.
- S3.
- CloudFront.

### Microsoft Azure

Evaluate relevant services such as:

- Azure App Service.
- Azure Functions.
- Azure Kubernetes Service.
- Azure Virtual Machines.
- Azure Load Balancer.
- Azure SQL.
- Cosmos DB.
- Azure Front Door.
- Azure Storage.

### Google Cloud Platform

Evaluate relevant services such as:

- Cloud Run.
- Google Kubernetes Engine.
- Compute Engine.
- Cloud Functions or equivalent current services.
- Cloud Load Balancing.
- Cloud SQL.
- AlloyDB.
- Firestore.
- Cloud CDN.
- Cloud Storage.

These examples do not establish preferred providers.

Verify current product capabilities, quotas and pricing before recommending specific architectures.

## 13. Kubernetes Scalability

Kubernetes is optional.

Do not recommend Kubernetes solely because the application targets millions of users.

Before adopting Kubernetes:

1. Identify scaling requirements.
2. Evaluate workload characteristics.
3. Compare simpler alternatives.
4. Assess team operational capabilities.
5. Evaluate reliability needs.
6. Assess security implications.
7. Estimate total operating costs.
8. Document the architectural decision.
9. Obtain explicit human approval.

When Kubernetes is used, evaluate:

- Horizontal Pod Autoscaling.
- Vertical Pod Autoscaling.
- Node autoscaling.
- Cluster capacity.
- CPU and memory requests.
- Resource limits.
- Resource quotas.
- Workload scheduling.
- Pod disruption budgets.
- Readiness probes.
- Liveness probes.
- Startup probes.
- Rolling updates.
- Workload isolation.
- Load balancing.
- Storage dependencies.
- Monitoring and alerting.

Validate autoscaling behavior under realistic demand.

Kubernetes does not automatically make application code scalable.

## 14. Kubernetes Autoscaling

Define appropriate autoscaling metrics.

Consider:

- CPU utilization.
- Memory pressure.
- Requests per second.
- Queue depth.
- Custom application metrics.
- External metrics.
- Scaling latency.
- Startup time.
- Minimum and maximum replicas.
- Node provisioning time.

Avoid scaling decisions based solely on one resource metric when workload characteristics require more.

Prevent uncontrolled scaling and excessive infrastructure costs.

Define limits and alerts.

Evaluate whether scale-down behavior preserves availability and data integrity.

## 15. Serverless Scalability

Evaluate serverless architectures where appropriate.

Consider:

- Concurrency limits.
- Cold starts.
- Execution time limits.
- Memory and CPU allocation.
- Database connection pressure.
- External API limits.
- Background workload suitability.
- Retry behavior.
- Regional availability.
- Request and execution costs.

Use concurrency limits to protect dependent services.

Do not assume serverless is always cheaper or automatically scalable without constraints.

Evaluate sustained workloads separately from intermittent workloads.

## 16. Caching Strategy

Use caching based on measured or modeled demand.

Consider:

- Application caching.
- Database query caching.
- CDN caching.
- Object caching.
- In-memory caching.
- Distributed caching.

Define:

- Cache keys.
- Expiration.
- Invalidation.
- Consistency.
- Authorization.
- Tenant isolation.
- Memory requirements.
- Cost.
- Failure behavior.

Never allow shared caches to expose private information across users.

Do not cache critical data without understanding consistency implications.

## 17. CDN and Global Delivery

Evaluate content delivery networks for geographically distributed users.

Consider:

- Static assets.
- Image delivery.
- Video delivery.
- Cache behavior.
- Edge locations.
- Origin protection.
- Geographic latency.
- Bandwidth costs.
- Cache invalidation.
- Privacy and data residency.

Do not expose confidential information through public CDN caches.

Verify whether cross-region and egress costs are justified.

## 18. Background Processing

Move expensive or long-running operations out of synchronous request paths when justified.

Consider:

- Queues.
- Background workers.
- Scheduled jobs.
- Event processing.
- Batch processing.

Define:

- Delivery guarantees.
- Retry policies.
- Idempotency.
- Job priority.
- Timeout behavior.
- Failure handling.
- Dead-letter mechanisms.
- Monitoring.
- Cost.

Never assume background jobs execute exactly once.

## 19. Realtime Scalability

For messaging, collaboration, notifications and live updates, evaluate:

- Concurrent connections.
- Message rate.
- Fan-out.
- Subscription authorization.
- Delivery guarantees.
- Ordering.
- Duplicate events.
- Reconnection.
- Presence.
- Network interruptions.
- Mobile background behavior.
- Infrastructure limits.
- Cost per message and connection.

Use backpressure and resource limits where appropriate.

Do not assume realtime systems scale linearly.

## 20. AI Workload Scalability

For applications using AI models or agents, evaluate:

- Request concurrency.
- Model rate limits.
- Token throughput.
- Inference latency.
- Context length.
- Tool execution.
- Retrieval performance.
- Vector database capacity.
- Queueing.
- Timeouts.
- Retries.
- Model fallback.
- Cost per AI operation.

Prevent uncontrolled loops and retry amplification.

Define per-user and per-tenant budgets where appropriate.

Avoid unnecessary repeated inference.

Never sacrifice privacy or authorization for faster AI responses.

## 21. API Scalability

For API services, evaluate:

- Request throughput.
- Authentication overhead.
- Authorization performance.
- Serialization costs.
- Payload size.
- Pagination.
- Rate limiting.
- Request quotas.
- Request timeouts.
- Retry policies.
- Idempotency.
- Dependency latency.
- Backend capacity.

Avoid unnecessary synchronous dependency chains.

Ensure API scaling does not overwhelm databases or external providers.

## 22. Rate Limiting and Quotas

Implement appropriate protection against excessive usage.

Consider:

- Per-user limits.
- Per-tenant limits.
- Per-IP limits where appropriate.
- API-key limits.
- Authentication endpoint protection.
- AI token budgets.
- External API quotas.
- Storage limits.
- Background job limits.

Define fair-use policies where required.

Use resource-aware throttling to protect downstream services.

Avoid exposing sensitive information through rate-limit behavior.

## 23. Backpressure and Load Shedding

Design systems to handle overload safely.

Consider:

- Bounded queues.
- Concurrency limits.
- Admission control.
- Request prioritization.
- Load shedding.
- Graceful degradation.
- Retry-after responses.
- Circuit breakers.

Protect critical functions during traffic spikes.

Prevent retry storms.

Never allow unlimited queue growth to exhaust system resources.

## 24. Reliability and Fault Tolerance

Design for foreseeable failures.

Evaluate:

- Instance failures.
- Database outages.
- Network partitions.
- External API failures.
- Queue failures.
- Resource exhaustion.
- Region outages.
- Dependency degradation.
- Deployment failures.

Use appropriate:

- Timeouts.
- Bounded retries.
- Exponential backoff with jitter.
- Circuit breakers.
- Bulkheads.
- Failover.
- Graceful degradation.
- Recovery procedures.

Test failure handling where feasible.

## 25. High Availability

Define availability requirements according to business impact.

Evaluate:

- Redundancy.
- Failure domains.
- Availability zones.
- Regional architecture.
- Database high availability.
- Load balancing.
- Failover.
- Deployment strategies.
- Operational monitoring.

Do not implement expensive multi-region infrastructure without justified requirements.

Do not claim high availability without supporting architecture and operational evidence.

## 26. Disaster Recovery

Define appropriate:

- Recovery Point Objective (RPO).
- Recovery Time Objective (RTO).
- Backup strategies.
- Restoration procedures.
- Failover procedures.
- Recovery responsibilities.
- Incident communication.

Test restoration and recovery.

Estimate recovery performance under realistic data volumes.

A backup alone does not establish recovery readiness.

## 27. Web Client Performance

Evaluate relevant web metrics such as:

- Largest Contentful Paint.
- Interaction to Next Paint.
- Cumulative Layout Shift.
- JavaScript bundle size.
- Network request volume.
- Rendering performance.
- Memory consumption.
- Accessibility impact.
- Mobile browser performance.

Use code splitting and lazy loading where justified.

Avoid loading unnecessary libraries and assets.

Measure real user experience when suitable telemetry is available.

## 28. iOS Performance

Evaluate:

- Cold and warm startup.
- UI responsiveness.
- Main-thread blocking.
- Memory usage.
- Battery consumption.
- Network activity.
- Background execution.
- Image and video processing.
- Local storage.
- Offline behavior.
- Synchronization.
- Crash rates.

Respect platform lifecycle constraints.

Do not use excessive polling or background work.

Validate performance on representative devices.

## 29. Android Performance

Evaluate:

- Cold and warm startup.
- UI responsiveness.
- ANR rates.
- Memory consumption.
- Battery usage.
- Background restrictions.
- Network efficiency.
- Offline handling.
- Data synchronization.
- Crash rates.
- Device variability.

Avoid unnecessary wakeups, polling and background processing.

Test on representative hardware and operating system versions.

## 30. Network Resilience

Design for mobile and unreliable network environments.

Consider:

- Slow connections.
- Connection loss.
- Request timeouts.
- Offline operation.
- Request duplication.
- Retry behavior.
- Synchronization conflicts.
- Large payloads.
- Battery impact.

Use appropriate data compression and request batching where justified.

Ensure retries do not duplicate critical business operations.

## 31. Observability

Monitor scalability indicators such as:

- Request throughput.
- p95 and p99 latency.
- Error rates.
- CPU and memory.
- Database utilization.
- Connection saturation.
- Queue depth.
- Cache hit rates.
- External dependency latency.
- Realtime connection counts.
- Cost per operation.

Use structured telemetry with appropriate privacy protections.

Define actionable alerts.

Avoid unnecessary high-cardinality metrics and excessive observability costs.

## 32. Load Testing

Use appropriate load-testing tools for the actual stack.

Possible tools include:

- k6.
- Locust.
- JMeter.
- Gatling.
- Provider-native performance tools.

Tool selection must follow project requirements.

Define realistic workloads.

Use synthetic or authorized test data.

Never run uncontrolled load tests against production.

Require explicit approval for production performance tests.

## 33. Performance Test Types

Evaluate relevant tests including:

- Baseline tests.
- Load tests.
- Stress tests.
- Spike tests.
- Soak tests.
- Scalability tests.
- Failure recovery tests.
- Concurrency tests.
- Capacity tests.

Select tests according to actual risk and architecture.

Record environment, workload, results and limitations.

## 34. Capacity Validation

For each significant capacity claim, report:

- Environment.
- Infrastructure configuration.
- Dataset size.
- Workload model.
- Concurrent users.
- Request rate.
- Latency.
- Error rate.
- Resource consumption.
- Database utilization.
- External dependencies.
- Operational cost.

Distinguish laboratory results from verified production capacity.

Do not extrapolate indefinitely from small-scale tests.

## 35. Scaling Thresholds

Define explicit conditions for architectural evolution.

Examples:

- Sustained resource saturation.
- Database connection exhaustion.
- Increasing p95 latency.
- Excessive queue delays.
- Rising error rates.
- Realtime connection limits.
- Operational costs exceeding approved budgets.
- Unacceptable recovery times.

Do not use arbitrary thresholds without context.

Document the technical and financial justification for each major scaling decision.

## 36. Cost-Aware Scalability

Every significant scaling proposal must consider total cost of ownership.

Evaluate:

- Compute.
- Database resources.
- Storage.
- Network bandwidth.
- CDN.
- Managed services.
- Kubernetes clusters.
- Serverless execution.
- AI inference.
- Third-party APIs.
- Monitoring.
- Backup and recovery.
- Operational maintenance.

Compare cost per active user and business operation.

Evaluate current and projected workloads.

Use verified pricing and explicit assumptions.

Do not assume larger infrastructure automatically delivers better value.

Consult docs/cost-engineering.md for detailed cost requirements.

## 37. Kubernetes Cost Controls

For Kubernetes workloads, evaluate:

- Control plane charges where applicable.
- Worker node utilization.
- CPU and memory requests.
- Overprovisioning.
- Autoscaling behavior.
- Persistent storage.
- Load balancers.
- Cross-zone traffic.
- Network egress.
- Logging and monitoring.
- Backup and recovery.
- Operational complexity.

Establish resource quotas, budgets and monitoring.

Compare managed Kubernetes against simpler deployment models.

Never scale without assessing cost implications.

## 38. Security During Scaling

Scaling must preserve security controls.

Evaluate:

- Authentication consistency.
- Authorization enforcement.
- Tenant isolation.
- Rate limiting.
- Network isolation.
- Workload identity.
- Secret management.
- Data encryption.
- Audit logging.
- Abuse prevention.
- Supply-chain security.

Never weaken security policies to improve performance.

Consult docs/security.md where relevant.

## 39. Privacy During Scaling

Evaluate how scaling affects:

- Data residency.
- Geographic replication.
- Personal data transfers.
- Third-party processors.
- Logging.
- Data retention.
- Sensitive information exposure.
- Backup locations.
- User rights.

Never replicate personal information into new regions without reviewing the legal and technical implications.

Consult docs/privacy.md.

## 40. Existing Production Application Audits

For existing systems:

1. Inspect the actual repository.
2. Identify current deployment architecture.
3. Review existing performance evidence.
4. Map critical workloads.
5. Identify potential bottlenecks.
6. Evaluate infrastructure limits.
7. Assess operational costs.
8. Review availability and recovery.
9. Identify confirmed scaling risks.
10. Recommend minimal improvements.
11. Define validation tests.
12. Present a prioritized roadmap.
13. Wait for human approval.

The initial assessment must be read-only.

Do not change infrastructure, production settings, databases or application code during the audit.

Do not claim to have measured live production performance unless genuine operational measurements were available.

## 41. Safe Scaling Changes

Before implementing significant scaling changes:

- Establish baseline behavior.
- Identify affected components.
- Define measurable objectives.
- Assess compatibility.
- Review security and data integrity.
- Estimate operational costs.
- Define regression tests.
- Define load tests.
- Create rollback procedures.
- Obtain explicit approval.

Use gradual rollout, feature flags, canary deployment or other appropriate strategies where justified.

Do not implement broad architectural rewrites merely to increase theoretical capacity.

## 42. Scalability Definition of Done

For significant scalability work:

- Workload assumptions documented.
- Performance objectives defined.
- Architecture evaluated.
- Bottlenecks identified through evidence.
- Security reviewed.
- Data integrity preserved.
- Operational costs evaluated.
- Appropriate tests executed.
- Results and limitations documented.
- Monitoring prepared.
- Rollback procedures defined.
- Human approval obtained.

Never declare an architecture scalable merely because it uses Kubernetes, containers, cloud services or microservices.

## 43. Final Scalability Principles

Design for millions of users.
Provision for actual demand.
Scale based on evidence.
Prefer architectural simplicity.
Protect security and privacy.
Preserve data integrity.
Measure performance.
Validate concurrency.
Test realistic workloads.
Control infrastructure and API costs.
Avoid unnecessary Kubernetes or microservices.
Maintain backward compatibility.
Plan for failure and recovery.
Require approval for significant changes.