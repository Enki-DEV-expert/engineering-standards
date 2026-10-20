
# Global Data Engineering Standards

## 1. Mission

Design, maintain and evolve secure, reliable, scalable and cost-efficient data systems.

These standards apply to new and existing production applications, including web, iOS, Android, SaaS, AI systems and enterprise platforms.

They apply to all relevant database technologies, cloud providers, storage systems, data processing services and deployment environments.

These standards are database-agnostic, cloud-agnostic and vendor-neutral.

Never assume a specific database, cloud provider or infrastructure architecture before inspecting the project.

Prioritize:

1. Security and privacy.
2. Data integrity and correctness.
3. Availability and recoverability.
4. Backward compatibility.
5. Performance and scalability.
6. Cost efficiency.

Never modify production data, schemas or infrastructure without explicit human approval.

## 2. Cloud and Database Provider Independence

These standards apply independently of the technology or provider selected.

No database engine, cloud provider, storage platform or infrastructure technology is mandatory or preferred by default.

Apply universal engineering principles to every system.

Apply provider-specific requirements only when that technology is actually used.

### Amazon Web Services (AWS)

Support architectures using relevant services, including:

- Amazon RDS.
- Amazon Aurora.
- Amazon DynamoDB.
- Amazon S3.
- Amazon ElastiCache.
- Amazon Redshift.
- Amazon EKS.
- Other relevant AWS data and infrastructure services.

### Microsoft Azure

Support architectures using relevant services, including:

- Azure SQL Database.
- Azure Database for PostgreSQL.
- Azure Cosmos DB.
- Azure Blob Storage.
- Azure Managed Redis.
- Azure Kubernetes Service (AKS).
- Other relevant Azure data and infrastructure services.

### Google Cloud Platform (GCP)

Support architectures using relevant services, including:

- Cloud SQL.
- AlloyDB.
- Cloud Spanner.
- Firestore.
- Bigtable.
- BigQuery.
- Cloud Storage.
- Memorystore.
- Google Kubernetes Engine (GKE).
- Other relevant Google Cloud data and infrastructure services.

### Other Providers and Technologies

Support technologies including, but not limited to:

- Supabase.
- Firebase.
- PostgreSQL.
- MySQL.
- MongoDB Atlas.
- Neon.
- PlanetScale.
- Redis.
- Valkey.
- Oracle Database.
- ClickHouse.
- Snowflake.
- Managed and self-hosted vector databases.
- Managed Kubernetes providers.
- Self-hosted databases.
- Hybrid infrastructure.
- On-premises environments.

Do not assume that services with similar purposes have identical security, consistency, availability or billing models.

Verify provider-specific behavior using current official documentation.

### Provider Selection Rules

Before recommending a provider:

1. Inspect the existing technology stack.
2. Identify business and functional requirements.
3. Define data structures and relationships.
4. Evaluate consistency and transaction requirements.
5. Evaluate security and privacy.
6. Evaluate expected workloads and growth.
7. Evaluate geographic and latency requirements.
8. Review availability and disaster recovery.
9. Assess operational complexity.
10. Compare total cost of ownership.
11. Evaluate vendor lock-in.
12. Evaluate migration risks.

For existing production applications, preserve the current provider unless a migration is justified by strong evidence and explicitly approved.

Never recommend switching database providers merely because another technology is popular.

Avoid unnecessary multi-cloud complexity.

Design for millions of users while provisioning according to measured demand.

## 3. Kubernetes and Containerized Data Infrastructure

These standards support Kubernetes architectures across AWS, Azure, GCP, other cloud providers, hybrid environments and on-premises infrastructure.

Kubernetes is an orchestration platform, not a database provider.

It must never be assumed to be necessary solely because an application may grow to millions of users.

### Kubernetes Adoption

Before recommending Kubernetes, evaluate:

- Existing infrastructure.
- Workload characteristics.
- Expected concurrency.
- Independent scaling requirements.
- Deployment frequency.
- Reliability requirements.
- Security and isolation requirements.
- Operational capabilities.
- Infrastructure costs.
- Management complexity.
- Simpler managed and serverless alternatives.

Provide evidence-based justification.

### Supported Kubernetes Environments

Consider where relevant:

- Amazon Elastic Kubernetes Service (EKS).
- Azure Kubernetes Service (AKS).
- Google Kubernetes Engine (GKE).
- Other managed Kubernetes services.
- Self-managed Kubernetes.
- Hybrid Kubernetes deployments.
- On-premises Kubernetes.

Evaluate actual provider capabilities rather than assuming identical functionality.

### Stateful Data Architecture

For databases and stateful workloads, evaluate:

- Managed databases versus Kubernetes-hosted databases.
- StatefulSets.
- PersistentVolumes.
- PersistentVolumeClaims.
- StorageClasses.
- Storage performance.
- Storage availability zones.
- Database replication.
- Backup and restoration.
- Data consistency.
- Recovery objectives.
- Storage expansion.
- Operational responsibility.

Prefer managed databases when they provide better reliability, operational simplicity, security or cost efficiency.

Never assume Kubernetes automatically provides database high availability, consistency, backups or disaster recovery.

### Kubernetes Security

Apply appropriate controls including:

- Kubernetes RBAC.
- Least-privilege service accounts.
- Secure workload identities.
- Pod security controls.
- NetworkPolicies where supported.
- Namespace isolation.
- Tenant isolation.
- Secrets management.
- Container image scanning.
- Trusted image registries.
- Image provenance verification.
- Restricted administrative access.
- Audit logging.
- Secure persistent storage.

Never embed privileged credentials in container images.

Never grant unrestricted cluster privileges to application workloads or AI development agents.

### Kubernetes Scalability

Evaluate:

- Horizontal Pod Autoscaling (HPA).
- Vertical Pod Autoscaling (VPA).
- Node autoscaling.
- CPU and memory requests.
- CPU and memory limits.
- Resource quotas.
- Pod disruption budgets.
- Load balancing.
- Health and readiness probes.
- Rolling deployments.
- Workload scheduling.
- Capacity planning.
- Load testing.

Use measurable thresholds.

Never claim Kubernetes alone guarantees support for millions of users.

### Kubernetes Cost Engineering

Evaluate:

- Control plane charges where applicable.
- Worker nodes.
- CPU utilization.
- Memory utilization.
- Persistent storage.
- Storage operations.
- Load balancers.
- Network transfers.
- Cross-zone and cross-region traffic.
- Logging and monitoring.
- Backup and recovery.
- Cluster administration.
- Operational complexity.

Avoid permanently overprovisioned clusters.

Compare Kubernetes against managed application platforms, serverless services and simpler architectures.

### Production Changes

Before modifying production Kubernetes resources:

1. Inspect existing resources and dependencies.
2. Identify affected services.
3. Identify affected data and storage.
4. Evaluate availability and integrity risks.
5. Review security implications.
6. Review operational costs.
7. Validate configuration and deployment manifests.
8. Test in a suitable non-production environment.
9. Define rollback and recovery procedures.
10. Obtain explicit human approval.

Never execute production cluster changes automatically.

## 4. Data Architecture First

Before implementing significant data functionality:

1. Identify business requirements.
2. Identify entities and relationships.
3. Identify authoritative data sources.
4. Define business invariants.
5. Map data ownership and flows.
6. Classify sensitive information.
7. Establish authorization requirements.
8. Identify transaction boundaries.
9. Estimate data volumes and growth.
10. Evaluate performance and costs.
11. Define migration and recovery strategies.
12. Present an implementation plan.
13. Wait for approval.

Document confirmed facts separately from assumptions.

## 5. Data Modeling

Design schemas according to actual domain requirements.

Use appropriate:

- Primary keys.
- Foreign keys.
- Unique constraints.
- NOT NULL constraints.
- CHECK constraints.
- Referential actions.
- Data types.
- Domain-specific invariants.

Apply normalization pragmatically.

Use denormalization only when justified by measured or modeled requirements.

Avoid unnecessary duplicated data.

Document relationships, ownership and cardinality.

Never store the same authoritative business fact in multiple independent places without a defined consistency mechanism.

## 6. Single Source of Truth

Identify one authoritative source for each business fact.

Examples:

- User identity.
- Account ownership.
- Reservation status.
- Payment confirmation.
- Subscription entitlement.
- Inventory availability.

Derived data may be cached or replicated when appropriate.

Define synchronization, invalidation and reconciliation rules.

Never treat an unverified client-side value as authoritative.

## 7. Data Classification

Classify information as:

- Public.
- Internal.
- Confidential.
- Sensitive or restricted.

Apply stronger safeguards to personal, financial, health, biometric, location, authentication and other high-risk information.

Classification must consider actual processing risks and applicable legal requirements.

Never expose confidential or sensitive information unnecessarily in logs, telemetry, analytics or AI prompts.

Consult docs/privacy.md for detailed requirements.

## 8. Data Access and Authorization

Apply least privilege and secure defaults.

Enforce authorization at trusted boundaries.

Validate ownership and tenant membership.

Prevent horizontal and vertical privilege escalation.

Restrict administrative and privileged database operations.

Use separate credentials and roles when appropriate.

Never rely solely on frontend access restrictions.

Verify authorization through tests using different users, roles and tenants.

## 9. Multi-Tenant Data Isolation

For multi-tenant applications:

- Define tenant ownership.
- Enforce isolation consistently.
- Prevent cross-tenant queries.
- Review shared caches.
- Protect file storage.
- Validate background jobs.
- Review administrative access.
- Test cross-tenant attack scenarios.

Choose shared-schema, separate-schema or separate-database isolation according to verified security, scale, compliance and cost requirements.

Do not assume every application requires the same tenant architecture.

## 10. Supabase Security

For Supabase applications:

- Review exposed schemas.
- Enable RLS for applicable exposed tables.
- Verify SQL grants and privileges.
- Review SELECT policies.
- Review INSERT policies.
- Review UPDATE policies.
- Review DELETE policies.
- Validate user ownership rules.
- Validate tenant isolation.
- Audit SECURITY DEFINER functions.
- Restrict privileged database roles.
- Protect secret and service-role credentials.
- Review Storage bucket policies.
- Review Realtime authorization.
- Review Edge Function authentication.
- Verify permission boundaries using actual test identities.

RLS policies and SQL privileges are complementary controls.

Never assume RLS alone guarantees security.

Never expose privileged Supabase credentials in web or mobile clients.

Supabase publishable keys may be client-visible when the associated security model is correctly configured.

## 11. Transactions and Atomicity

Use database transactions when operations must succeed or fail together.

Identify critical business invariants.

Protect against partial updates.

Examples include:

- Inventory reservations.
- Financial records.
- Subscription changes.
- Ownership transfers.
- Multi-record state transitions.

Define isolation and locking requirements according to the operation.

Avoid long-running transactions unnecessarily.

Do not split atomic business operations across independent writes without a consistency strategy.

## 12. Concurrency Control

Analyze concurrent operations and potential race conditions.

Consider:

- Unique constraints.
- Transaction isolation.
- Row locking.
- Optimistic concurrency.
- Version numbers.
- Atomic updates.
- Conflict detection.

Never rely solely on client-side checks to prevent concurrent data inconsistencies.

Test critical operations under simultaneous requests.

## 13. Idempotency

Operations that may be retried must have defined duplicate-handling behavior.

Particularly evaluate:

- Payments.
- Webhooks.
- Reservations.
- Background jobs.
- Notifications.
- External service events.

Use appropriate idempotency keys, uniqueness constraints or equivalent mechanisms.

Persist enough information to recognize repeated operations safely.

Define expiration and retention of idempotency records.

Never assume external systems deliver events exactly once.

## 14. Query Engineering

Write efficient, understandable queries.

Evaluate:

- Query execution plans.
- Filter selectivity.
- Join strategies.
- Index usage.
- Returned row counts.
- Payload sizes.
- Sorting.
- Pagination.
- Repeated queries.
- N+1 query patterns.

Use parameterized queries.

Avoid unbounded result sets.

Prefer keyset pagination where justified by workload and consistency requirements.

Do not optimize queries based only on intuition.

## 15. Indexing Strategy

Create indexes according to real access patterns.

Evaluate:

- Query frequency.
- Selectivity.
- Table size.
- Read/write balance.
- Index maintenance costs.
- Storage consumption.
- Composite indexes.
- Partial indexes.
- Unique indexes.

Use execution plans and measurements where available.

Avoid indexing every column.

Review index changes for production locking and resource impact.

For PostgreSQL, consider concurrent index creation when appropriate, while respecting its limitations and operational requirements.

Never execute production indexing operations without approval.

## 16. Database Connections

Manage connections carefully.

Evaluate:

- Connection limits.
- Pooling.
- Serverless workloads.
- Transaction pooling compatibility.
- Long-running operations.
- Connection leaks.
- Timeouts.
- Peak concurrency.

Avoid creating unnecessary database connections per request.

Use provider-supported pooling where appropriate.

Monitor connection saturation and related costs.

## 17. Scaling for Millions of Users

Design data architecture to evolve toward:

- 10,000 users.
- 100,000 users.
- 1,000,000 users.
- 5,000,000 users.
- 10,000,000 users.

Distinguish registered users, active users and peak concurrent workloads.

Model:

- Records per user.
- Reads per second.
- Writes per second.
- Data growth.
- Index growth.
- Storage growth.
- Connection demand.
- Network transfer.
- Backup size.
- Recovery duration.

Consider:

- Query optimization.
- Connection pooling.
- Caching.
- Read replicas.
- Background processing.
- Partitioning.
- Archival.
- Horizontal scaling.
- Sharding only when justified.

Use measurable thresholds.

Never claim million-user capacity without supporting benchmarks, load testing or validated capacity modeling.

## 18. Caching

Use caching where justified.

Define:

- Cached data ownership.
- Cache keys.
- Tenant isolation.
- TTL.
- Invalidation.
- Consistency requirements.
- Failure behavior.
- Memory and storage costs.

Never share sensitive cached data across unauthorized users.

Avoid using cache as the only source of important persistent business information.

## 19. Realtime Data

For realtime systems, evaluate:

- Active connections.
- Message frequency.
- Subscription authorization.
- Presence tracking.
- Ordering.
- Duplicate messages.
- Delivery guarantees.
- Reconnection.
- Mobile background behavior.
- Network interruptions.
- Cost per connection and message.

For Supabase Realtime, review applicable quotas, authorization rules and billing dimensions.

Do not assume realtime subscriptions are free or infinitely scalable.

## 20. Object Storage

For images, videos, documents and attachments:

- Separate public and private resources.
- Enforce ownership and authorization.
- Validate file types and sizes.
- Protect signed URLs.
- Define expiration rules.
- Implement retention and deletion.
- Consider malware scanning where appropriate.
- Optimize image and media formats.
- Avoid unnecessary duplicate storage.
- Monitor bandwidth and egress.

Do not expose confidential objects through public buckets.

## 21. Vector Databases and Embeddings

For applications using RAG or vector search:

- Define source document ownership.
- Enforce authorization before retrieval.
- Preserve tenant isolation.
- Track document and embedding versions.
- Avoid unnecessary duplicate embeddings.
- Define indexing and reindexing workflows.
- Handle document updates and deletion.
- Remove or invalidate embeddings when required.
- Monitor embedding and storage costs.
- Evaluate retrieval quality.
- Prevent unauthorized cross-user retrieval.

Never assume vector search automatically respects source-system permissions.

## 22. Data Migration Strategy

All significant schema changes require planning.

Use staged, backward-compatible migrations where possible.

Prefer Expand-Migrate-Contract:

1. Expand the schema compatibly.
2. Deploy compatible application code.
3. Backfill or migrate data safely.
4. Validate the new behavior.
5. Switch consumers progressively.
6. Remove obsolete structures only after approval.

Consider older mobile application versions.

Identify locking, downtime and rollback risks.

Never perform destructive production migrations automatically.

## 23. Migration Safety

Before production migration:

- Review the exact migration.
- Assess affected tables.
- Estimate data volume.
- Evaluate locking.
- Evaluate transaction behavior.
- Establish backup or recovery capability.
- Validate in staging.
- Define monitoring.
- Establish rollback or forward-recovery procedures.
- Obtain explicit human approval.

A schema rollback may not reverse lost data.

Never claim a migration is reversible without verifying that property.

## 24. Backup and Recovery

Define recovery objectives according to business requirements.

Document:

- Recovery Point Objective (RPO).
- Recovery Time Objective (RTO).
- Backup frequency.
- Backup retention.
- Encryption.
- Access controls.
- Restore procedures.
- Recovery responsibilities.

Test restoration periodically.

A backup that has never been restored is not sufficient evidence of recoverability.

Consider point-in-time recovery when justified.

## 25. Data Retention and Deletion

Define retention for each data category.

Address:

- Primary tables.
- Storage objects.
- Caches.
- Search indexes.
- Vector indexes.
- Logs.
- Analytics datasets.
- Backups.
- Third-party services.

Apply privacy and legal requirements.

Implement appropriate deletion workflows.

Prevent accidental resurrection of deleted data after backup restoration.

Where legal retention or backup lifecycle constraints apply, document and enforce them.

Consult docs/privacy.md.

## 26. Data Observability

Monitor relevant indicators:

- Slow queries.
- Query latency.
- Database CPU.
- Memory usage.
- Disk usage.
- Connection utilization.
- Lock contention.
- Transaction failures.
- Deadlocks.
- Replication lag.
- Storage growth.
- Backup failures.
- Recovery readiness.
- Database costs.

Define actionable alerts.

Avoid collecting sensitive data unnecessarily.

## 27. Data Security Testing

Test:

- User-level access.
- Tenant isolation.
- Unauthorized reads.
- Unauthorized writes.
- Ownership changes.
- Privilege escalation.
- Storage permissions.
- Realtime access.
- Administrative operations.
- Migration compatibility.

For Supabase, use dedicated test identities to evaluate RLS policies and database permissions.

Do not assume authentication tests also prove authorization correctness.

## 28. Database Cost Engineering

Estimate total database-related costs.

Include:

- Compute.
- Storage.
- Index storage.
- Backup storage.
- Connections and pooling.
- Read/write workload.
- Network transfer.
- Replication.
- Realtime usage.
- Logs and monitoring.
- Data recovery services.
- High-availability options.

Consider provider-specific billing rules and current prices.

Never fabricate pricing data.

Use explicit assumptions and measured utilization whenever possible.

## 29. Supabase Cost Engineering

For Supabase projects, investigate applicable billing dimensions such as:

- Project compute.
- Database storage.
- Storage objects.
- Cached and uncached egress.
- Monthly active authentication users.
- Edge Function invocations.
- Realtime messages.
- Peak realtime connections.
- Additional database services.
- Backups and point-in-time recovery.
- Optional add-ons.

Verify which dimensions are billed under the current plan.

Check organizational quotas and project-level resource costs.

Recommend:

- Usage dashboards.
- Budget alerts.
- Resource limits where supported.
- Efficient queries.
- Optimized connection usage.
- Appropriate storage lifecycle.
- Reduced unnecessary realtime traffic.
- Safe request and retry limits.

Never assume alerts automatically stop charges.

## 30. Cost Forecasting

For significant new functionality, model reasonable scenarios.

Include:

- Current utilization.
- Expected utilization.
- Growth assumptions.
- Peak demand.
- Cost per active user.
- Cost per business operation.
- Cost per stored record where meaningful.
- Third-party API interactions.
- Data transfer expenses.

Compare reasonable alternatives.

Clearly distinguish measured costs, estimates and unknowns.

Do not recommend expensive infrastructure without evidence-based justification.

## 31. Provider Portability

Evaluate vendor dependence pragmatically.

Document:

- Provider-specific features.
- Data export capabilities.
- Migration complexity.
- Contractual restrictions.
- Operational switching costs.
- Data transfer costs.
- Required architectural adaptations.

Use abstraction when it provides meaningful portability or testability.

Do not build complex abstractions for hypothetical migrations without a clear benefit.

## 32. Data Testing

Test important data workflows using appropriate:

- Unit tests.
- Integration tests.
- Transaction tests.
- Constraint tests.
- Concurrency tests.
- Migration tests.
- Authorization tests.
- Recovery tests.
- Load tests.

Use synthetic or appropriately anonymized datasets.

Avoid using real production data in development without a specifically authorized and lawful process.

Never weaken tests merely to make them pass.

## 33. Existing Production Database Audits

When auditing an existing production application:

1. Inspect available schema definitions.
2. Analyze migrations.
3. Review database access patterns.
4. Map data ownership and security boundaries.
5. Evaluate integrity constraints.
6. Identify confirmed authorization risks.
7. Review query and indexing strategies.
8. Assess scalability and operational costs.
9. Identify migration and compatibility risks.
10. Recommend incremental improvements.
11. Present an evidence-based report.
12. Wait for explicit approval.

The initial audit must be read-only.

Do not alter tables, records, policies, indexes, triggers, functions or production settings.

If direct database access is necessary, request authorization and prefer appropriately restricted read-only access.

Do not claim to have inspected live database state if only source files were reviewed.

## 34. Data Change Approval

Require explicit approval before:

- Schema changes.
- New production indexes.
- Data backfills.
- Bulk updates.
- Destructive migrations.
- Retention policy changes.
- New data collection.
- New external data providers.
- Database technology changes.
- Significant storage restructuring.
- Changes to tenant isolation.
- Changes to privileged access.

Provide expected impact, validation and recovery plans before approval.

## 35. Data Definition of Done

For significant data changes:

- Requirements documented.
- Data ownership identified.
- Schema and constraints reviewed.
- Authorization verified.
- Transaction behavior tested.
- Concurrency risks evaluated.
- Migration risks assessed.
- Performance evaluated.
- Operational costs considered.
- Privacy obligations reviewed.
- Backups and recovery considered.
- Compatibility verified.
- Tests executed and results reported.
- Remaining risks documented.
- Human approval obtained.

Never claim that data architecture is correct merely because the application appears to work.

## 36. Final Data Principles

Protect data integrity.
Enforce least privilege.
Preserve one authoritative source of truth.
Validate access at trusted boundaries.
Use transactions where atomicity matters.
Design for concurrency and retries.
Measure query performance.
Scale based on evidence.
Control database and storage costs.
Protect backups and recovery.
Preserve production compatibility.
Never change production data without approval.