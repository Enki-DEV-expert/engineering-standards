---
name: engineering-database-review
description: Design, audit, secure, optimize and validate database systems using the Global Engineering Standards. Use for database architecture, SQL and NoSQL reviews, schema design, data integrity, multi-tenant isolation, indexing, query performance, migrations, backups, disaster recovery, scalability, cloud databases and autonomous database implementation.
---

# Engineering Database Review

## 1. Purpose

Provide a consistent and evidence-based workflow for database engineering.

This skill supports:

- Database architecture and selection.
- SQL and NoSQL database reviews.
- Schema design.
- Data modeling.
- Data integrity.
- Transactions.
- Access control.
- Multi-tenant isolation.
- Query optimization.
- Index management.
- Schema migrations.
- Backup and recovery.
- Database security.
- Database scalability.
- Managed database services.
- Cloud database portability.
- Cost optimization.
- Database testing.
- Autonomous database implementation.

The objective is to build reliable, maintainable, secure and cost-efficient data systems that can evolve with real business requirements.

Protect existing data.

Never treat database access as permission to modify or delete production records.

## 2. Global Engineering Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary reference:

~/engineering-standards/docs/data.md

Additional references when relevant:

- docs/security.md
- docs/privacy.md
- docs/architecture.md
- docs/scalability.md
- docs/cost-engineering.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/ai-and-llm.md
- docs/governance.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Resolve these references relative to the engineering-standards repository.

Apply standards according to the project's actual architecture.

Do not load every document when only a subset is relevant.

## 3. When to Use This Skill

Use for tasks involving:

- Database selection.
- Database schema design.
- Table or collection design.
- SQL queries.
- NoSQL queries.
- ORM configuration.
- Database performance.
- Indexing.
- Database migrations.
- Transaction processing.
- Backup strategies.
- Recovery planning.
- Multi-tenant systems.
- Data retention.
- Data deletion.
- Database access security.
- Data-intensive AI systems.
- Scalability planning.
- Database cost estimation.

Also use when building database-dependent functionality in Autonomous Build Mode.

Do not assume every application requires a remote database.

## 4. Supported Database Technologies

Work with relevant database technologies, including:

- PostgreSQL.
- MySQL.
- MariaDB.
- SQLite.
- Microsoft SQL Server.
- Oracle Database.
- MongoDB.
- Redis.
- DynamoDB.
- Azure Cosmos DB.
- Google Cloud Firestore.
- Firebase Realtime Database.
- Supabase PostgreSQL.
- Cloud SQL.
- Amazon RDS and Aurora.
- Managed document databases.
- Search engines.
- Vector databases.
- Time-series databases.
- Graph databases.
- Embedded databases.

This list is illustrative, not mandatory or exhaustive.

Evaluate the actual database capabilities and requirements.

Do not impose PostgreSQL, MongoDB, Supabase, Firebase or another provider on every project.

## 5. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires explicit user authorization.

Both modes must preserve:

- Data integrity.
- Security.
- Privacy.
- Reliability.
- Scalability.
- Cost discipline.
- Honest validation.

Consult docs/governance.md.

## 6. Supervised Mode

For an existing database system:

1. Identify the authorized scope.
2. Inspect relevant schemas and source code.
3. Review application data flows.
4. Evaluate current safeguards.
5. Identify confirmed problems.
6. Distinguish hypotheses from evidence.
7. Assess proposed changes.
8. Evaluate migration risks.
9. Recommend minimal effective improvements.
10. Obtain required approval before significant changes.

A default audit of a production database is read-only.

Do not execute data-changing statements during read-only assessment.

## 7. Autonomous Build Mode

When explicitly authorized to build a complete application:

1. Identify data requirements.
2. Select an appropriate database architecture.
3. Design entities and relationships.
4. Define data invariants.
5. Implement authorized local schemas.
6. Write necessary database access logic.
7. Create migration files.
8. Implement authorization and isolation.
9. Add data integrity tests.
10. Validate queries and transactions.
11. Review performance.
12. Correct identified defects.
13. Document deployment requirements.
14. Continue independent authorized tasks.
15. Consolidate human actions at handoff.

Do not interrupt for every ordinary local schema or query change.

Autonomous Build Mode does not authorize destructive production operations.

## 8. Scope and Authorization

Before database operations, establish:

- Project repository.
- Database engine.
- Environment.
- Connection scope.
- Available permissions.
- Data sensitivity.
- Approved operations.
- Protected resources.
- Backup requirements.

Treat production, staging and local development environments separately.

Do not assume a database URL grants permission to modify its contents.

## 9. Initial Database Assessment

Inspect relevant authorized information:

- Schema definitions.
- Migration files.
- ORM models.
- Database clients.
- Query builders.
- Stored procedures.
- Access policies.
- Index definitions.
- Test data.
- Backup documentation.
- Database configuration.
- Application data access code.

Prefer repository and configuration analysis before live database access.

Do not expose credentials.

## 10. Data Requirements

Identify:

- Core entities.
- Relationships.
- Business rules.
- Read patterns.
- Write patterns.
- Expected data volume.
- Retention requirements.
- Query latency targets.
- Consistency requirements.
- Availability requirements.
- Regulatory constraints.

Do not invent critical business rules.

Document assumptions requiring validation.

## 11. Database Selection

Evaluate possible solutions according to:

- Data model.
- Transaction requirements.
- Query complexity.
- Operational maturity.
- Ecosystem compatibility.
- Scaling needs.
- Security controls.
- Hosting options.
- Portability.
- Total cost.
- Team capabilities.
- Recovery requirements.

Select the simplest suitable solution.

Do not select a database solely because it is popular.

## 12. Relational Data Modeling

For relational systems:

- Define meaningful entities.
- Select appropriate primary keys.
- Model relationships explicitly.
- Use foreign keys where supported and appropriate.
- Apply suitable constraints.
- Avoid unnecessary duplication.
- Consider normalization.
- Introduce denormalization only with clear justification.

Align schema design with business invariants.

## 13. NoSQL Data Modeling

For document, key-value and other NoSQL systems:

- Identify access patterns.
- Define document or item boundaries.
- Evaluate consistency guarantees.
- Avoid unbounded document growth.
- Consider indexing limitations.
- Define update atomicity.
- Plan for schema evolution.
- Evaluate query costs.

Do not assume NoSQL automatically provides greater scalability.

## 14. Data Integrity

Protect critical invariants using appropriate mechanisms.

Examples:

- Primary key constraints.
- Unique constraints.
- Foreign keys.
- Check constraints.
- Transaction boundaries.
- Version checks.
- Atomic updates.
- Server-side validation.

Do not rely exclusively on client-side checks.

Do not use AI-generated decisions as substitutes for deterministic data constraints.

## 15. Transactions

Evaluate:

- Transaction atomicity.
- Isolation level.
- Consistency.
- Durability.
- Concurrent updates.
- Deadlocks.
- Rollback behavior.
- Retry handling.

Use transactions for operations requiring coordinated data changes.

Avoid unnecessarily long transactions.

Document transaction boundaries for important workflows.

## 16. Concurrency Control

Review relevant:

- Optimistic locking.
- Pessimistic locking.
- Atomic operations.
- Unique constraints.
- Idempotency keys.
- Version columns.
- Compare-and-swap mechanisms.
- Distributed coordination.

Test race conditions where feasible.

Do not assume operations are safe merely because they work sequentially.

## 17. Idempotency

For repeatable or retried operations:

- Identify duplicate execution risks.
- Define idempotency boundaries.
- Use stable request identifiers where appropriate.
- Store processing status safely.
- Consider transaction interactions.
- Define retry behavior.

Important examples may include:

- Payments.
- Reservations.
- Inventory changes.
- Claim processing.
- Webhook handling.
- Background jobs.

Ensure retries do not accidentally duplicate consequential actions.

## 18. Data Types and Precision

Choose data types according to actual requirements.

Consider:

- Numeric precision.
- Currency handling.
- Date and time representation.
- Time zones.
- Unicode.
- Identifiers.
- Boolean semantics.
- Large text.
- Binary storage.

Avoid floating-point arithmetic for monetary values when exact decimal handling is required.

Do not silently truncate data.

## 19. Data Validation

Validate important data at trusted boundaries.

Consider:

- Required values.
- Valid ranges.
- Format requirements.
- Referential consistency.
- Domain-specific constraints.
- State transitions.
- Ownership.

Application validation and database constraints should complement each other.

## 20. Authentication and Database Access

Review how application identities access the database.

Consider:

- Database roles.
- Application service accounts.
- Credential scopes.
- Connection pooling.
- Administrative clients.
- Read-only accounts.
- Privileged operations.

Apply least privilege.

Do not expose privileged database credentials in browser or mobile applications.

## 21. Authorization

Enforce appropriate authorization for:

- Reading records.
- Creating records.
- Updating records.
- Deleting records.
- Exporting data.
- Administrative operations.
- Background processing.
- File metadata access.

Never trust a client-supplied owner or tenant identifier without verification.

Authentication is not sufficient without resource authorization.

## 22. Multi-Tenant Isolation

For multi-tenant systems, evaluate:

- Tenant identity.
- Tenant-aware queries.
- Row-level security.
- Database-per-tenant patterns.
- Schema-per-tenant patterns.
- Shared-table designs.
- Administrative exceptions.
- Cache isolation.
- Background job isolation.
- Search index isolation.

Select isolation according to requirements and risk.

Test cross-tenant access using controlled fixtures.

Do not retrieve real data belonging to another tenant merely to test isolation.

## 23. Row-Level Security

Where supported and appropriate:

- Define clear policies.
- Validate authenticated identity.
- Restrict access by tenant or owner.
- Review bypass roles.
- Review privileged service clients.
- Test read and write policies.
- Verify administrative boundaries.

RLS is not a substitute for secure application architecture.

Do not assume every database engine supports the same RLS mechanisms.

## 24. SQL Injection Prevention

Use parameterized statements or safe query-builder APIs.

Avoid constructing executable SQL from untrusted text.

Review:

- Dynamic queries.
- Search filters.
- Sorting parameters.
- Raw SQL.
- Stored procedure inputs.
- Identifier interpolation.

Apply allowlists where SQL identifiers must be selected dynamically.

Do not concatenate arbitrary user input into executable queries.

## 25. NoSQL Query Security

Review:

- Operator injection.
- Dynamic filters.
- Document ownership.
- Aggregation pipelines.
- Untrusted query objects.
- Access-control enforcement.

Validate input structures.

Do not allow clients to provide unrestricted database query expressions.

## 26. Index Design

Review indexes according to actual access patterns.

Evaluate:

- Filter columns.
- Join keys.
- Sort order.
- Selectivity.
- Compound indexes.
- Unique indexes.
- Partial indexes.
- Covering indexes.
- Write amplification.
- Storage costs.

Do not create indexes indiscriminately.

Measure effects when possible.

## 27. Query Performance

Analyze relevant:

- Query plans.
- Full table scans.
- N+1 queries.
- Excessive joins.
- Large payloads.
- Missing pagination.
- Slow aggregations.
- Repeated queries.
- Unnecessary data transfer.

Use engine-appropriate tools.

Avoid unbounded expensive diagnostic queries against production.

## 28. Query Plan Analysis

Use safe inspection tools where available.

For relational databases, consider EXPLAIN and engine-specific plan inspection.

Understand that some analysis modes may execute the query.

Do not run potentially costly or data-changing diagnostic statements on production without suitable authorization.

Document actual plan evidence.

## 29. Pagination

Choose pagination according to workload.

Consider:

- Offset pagination.
- Cursor pagination.
- Keyset pagination.
- Stable ordering.
- Authorization-aware filtering.
- Maximum result size.

Avoid returning unbounded datasets from public APIs.

Do not expose sensitive records through pagination bugs.

## 30. Caching

Evaluate caching when justified by measured or credible workload.

Consider:

- Cache keys.
- Tenant isolation.
- Expiration.
- Invalidation.
- Data sensitivity.
- Memory usage.
- Consistency requirements.
- Cache stampedes.

Never cache private data under keys shared across unauthorized users.

Do not introduce Redis or another cache automatically when it adds no meaningful value.

## 31. Connection Management

Review:

- Connection pools.
- Connection limits.
- Serverless concurrency.
- Timeouts.
- Idle connections.
- Authentication.
- Database proxies.
- Resource exhaustion.

Use appropriate pooling strategies.

Avoid excessive connection counts.

## 32. Read and Write Workloads

Identify:

- Read-heavy workloads.
- Write-heavy workloads.
- Batch processing.
- Reporting.
- Analytics.
- Transactional workloads.
- Search workloads.

Avoid optimizing one workload at the expense of essential correctness.

## 33. Horizontal and Vertical Scaling

Evaluate:

- Instance sizing.
- Connection limits.
- Storage throughput.
- Read replicas.
- Partitioning.
- Sharding.
- Caching.
- Queue-based processing.
- Workload separation.

Start with the simplest architecture that satisfies measured requirements.

Do not introduce distributed complexity prematurely.

## 34. High Availability

Review relevant:

- Redundancy.
- Replication.
- Failover.
- Availability targets.
- Network dependencies.
- Regional risks.
- Operational monitoring.

Distinguish high availability from backup and disaster recovery.

Replication does not guarantee recovery from accidental deletion.

## 35. Partitioning and Sharding

Consider partitioning and sharding only when requirements justify them.

Evaluate:

- Data access patterns.
- Partition keys.
- Query routing.
- Rebalancing.
- Tenant distribution.
- Cross-partition transactions.
- Operational complexity.
- Cost.

Do not claim sharding is required solely because an application may eventually have millions of users.

## 36. Database Migrations

Before schema changes:

1. Inspect existing migration history.
2. Understand current data structures.
3. Identify dependent services.
4. Evaluate compatibility.
5. Assess data-loss risk.
6. Prepare migration files.
7. Define test strategy.
8. Define recovery options.
9. Obtain necessary approval.
10. Verify execution results.

Do not treat a migration file as evidence that the migration was successfully applied.

## 37. Expand-and-Contract Migrations

For compatibility-sensitive changes, consider:

- Additive schema changes.
- Dual-read or dual-write strategies where justified.
- Backfills.
- Application compatibility.
- Phased rollout.
- Old schema retirement.

Avoid unnecessary downtime.

Document cases where a migration cannot be rolled back safely.

## 38. Data Backfills

For large data changes:

- Estimate affected volume.
- Use bounded batches.
- Consider lock duration.
- Protect transaction integrity.
- Monitor progress.
- Provide restartability.
- Plan recovery.
- Define verification criteria.

Do not perform uncontrolled production backfills.

Require authorization for production data modification.

## 39. Destructive Operations

Treat the following as high risk when applied to important data:

- DROP TABLE.
- TRUNCATE.
- Unbounded DELETE.
- Unbounded UPDATE.
- Destructive schema migrations.
- Bulk record replacement.
- Database reset.
- Storage destruction.

Do not perform these operations on production without explicit, action-specific authorization and appropriate safeguards.

Autonomous Build Mode does not override this restriction.

## 40. Development and Test Databases

Use isolated development and test environments where possible.

Prefer:

- Local databases.
- Ephemeral test containers.
- Synthetic records.
- Minimal fixtures.
- Transactional test cleanup.
- Dedicated testing credentials.

Never point routine automated tests at production databases.

Validate environment configuration before data-changing tests.

## 41. Backup Strategy

Evaluate backup requirements according to:

- Data importance.
- Recovery point objectives.
- Recovery time objectives.
- Business continuity.
- Retention obligations.
- Storage location.
- Encryption.
- Cost.

Document what is actually backed up.

Do not assume backups exist merely because the database is managed.

## 42. Recovery Validation

A backup is useful only if recovery is achievable.

Assess:

- Restoration procedures.
- Recovery credentials.
- Dependency requirements.
- Backup integrity.
- Restoration time.
- Data completeness.
- Application compatibility.

Test restoration in an authorized, isolated environment where feasible.

Do not claim tested recovery without an actual recovery exercise.

## 43. Disaster Recovery

Evaluate:

- Regional failures.
- Provider outages.
- Credential loss.
- Data corruption.
- Accidental deletion.
- Ransomware scenarios.
- Configuration loss.
- Operational dependencies.

Choose recovery measures proportionate to business requirements.

## 44. Data Retention

Define retention according to legitimate business, operational and legal requirements.

Consider:

- User records.
- Transaction records.
- Logs.
- Audit trails.
- Backups.
- Temporary data.
- AI embeddings.
- Uploaded files.

Do not invent retention periods.

Do not delete records subject to applicable preservation obligations.

Consult docs/privacy.md.

## 45. Data Deletion

For deletion workflows:

- Verify authority.
- Identify dependent records.
- Respect referential integrity.
- Consider cascading effects.
- Evaluate backups.
- Consider external copies.
- Preserve required audit evidence.
- Apply valid retention exceptions.

Do not claim complete deletion without appropriate verification.

## 46. Encryption

Evaluate:

- Encryption in transit.
- Encryption at rest.
- Application-level encryption.
- Key management.
- Credential protection.
- Backup encryption.
- Rotation.

Use established cryptographic implementations.

Encryption does not replace authorization or tenant isolation.

## 47. Audit Trails

For sensitive operations, consider recording:

- Actor identity.
- Operation type.
- Affected resource.
- Timestamp.
- Authorized context.
- Outcome.

Avoid unnecessary personal data in logs.

Protect audit record integrity.

## 48. Observability

Review database monitoring:

- Query latency.
- Error rates.
- Connection utilization.
- CPU.
- Memory.
- Storage growth.
- Replication lag.
- Lock contention.
- Backup status.
- Recovery indicators.

Avoid collecting excessive sensitive query payloads.

Consult docs/observability.md.

## 49. Database Cost Engineering

Evaluate:

- Compute.
- Storage.
- Read and write operations.
- Backups.
- Replication.
- Data transfer.
- Index storage.
- Connection infrastructure.
- Monitoring.
- Provisioned versus usage-based billing.

Separate measured spending from projections.

Do not invent provider pricing.

Consult docs/cost-engineering.md.

## 50. Cloud Provider Independence

Support appropriate solutions across:

- AWS.
- Azure.
- Google Cloud.
- Supabase.
- Firebase.
- Self-hosted environments.
- Other managed providers.

Evaluate vendor dependencies.

Consider:

- Data export.
- Schema portability.
- Migration complexity.
- Proprietary features.
- Operational maturity.
- Pricing.

Do not sacrifice important functionality merely to avoid every vendor-specific feature.

## 51. Kubernetes and Databases

If Kubernetes is used:

- Evaluate whether the database should run inside or outside the cluster.
- Review persistent volumes.
- Review storage classes.
- Consider recovery.
- Assess operator maturity.
- Protect secrets.
- Review network restrictions.
- Assess operational costs.

Do not assume databases should run in Kubernetes.

Prefer managed services when they provide justified operational benefits.

## 52. Serverless Database Considerations

Evaluate:

- Connection pooling.
- Cold starts.
- Concurrent requests.
- Connection limits.
- Transaction behavior.
- Usage-based costs.
- Regional latency.
- Provider quotas.

Do not assume serverless automatically means cheaper or more scalable.

## 53. Mobile and Offline Data

For mobile or offline-first applications:

- Define local storage scope.
- Encrypt sensitive local data where appropriate.
- Plan synchronization.
- Resolve conflicts.
- Handle retries.
- Support offline queues.
- Protect credentials.
- Consider device loss.

Do not assume client-side cached data is authoritative.

Consult docs/mobile-and-web.md.

## 54. Desktop and Embedded Databases

For desktop and local applications:

- Review database file permissions.
- Protect local credentials.
- Handle upgrades.
- Plan migrations.
- Consider concurrent access.
- Verify corruption recovery.
- Support secure backups.
- Respect operating-system constraints.

SQLite or another embedded database may be appropriate when it meets requirements.

Consult docs/platforms-and-applications.md.

## 55. Game Data Systems

For game applications, consider:

- Player profiles.
- Save data.
- Multiplayer state.
- Match history.
- Inventory.
- Virtual economy.
- Leaderboards.
- Anti-cheat integrity.
- Concurrent updates.

Use server-authoritative controls for security-sensitive multiplayer and economic operations.

Do not trust client-submitted balances or ownership states.

## 56. AI and Vector Databases

For RAG and AI systems, evaluate:

- Document ownership.
- Vector store access.
- Embedding metadata.
- Tenant isolation.
- Retrieval authorization.
- Index lifecycle.
- Data deletion propagation.
- Model dependency.
- Retrieval latency.
- Inference and storage costs.

A semantic match does not establish access authorization.

Protect private document embeddings and associated metadata.

Consult docs/ai-and-llm.md.

## 57. Data Import and Export

For import and export workflows:

- Validate file structure.
- Verify authorization.
- Restrict scope.
- Consider batch limits.
- Prevent duplicate processing.
- Handle partial failures.
- Protect sensitive fields.
- Maintain auditability.

Do not export real production data without appropriate authorization.

## 58. Database Testing Strategy

Select relevant tests:

- Schema validation.
- Constraint tests.
- Transaction tests.
- Authorization tests.
- Tenant isolation tests.
- Migration tests.
- Query correctness tests.
- Concurrency tests.
- Retention tests.
- Recovery tests.
- Performance tests.

Use appropriate isolated environments.

Do not claim tests passed without execution.

## 59. Migration Testing

When relevant:

1. Apply migrations to a safe test database.
2. Confirm expected schema.
3. Test application compatibility.
4. Test important queries.
5. Evaluate data preservation.
6. Test rollback where genuinely possible.
7. Record failures.
8. Correct migration defects.

Do not automatically execute tested migrations in production.

## 60. Performance Testing

Use representative workload assumptions.

Consider:

- Query latency.
- Database throughput.
- Concurrent operations.
- Index efficiency.
- Storage behavior.
- Connection exhaustion.
- Lock contention.

Avoid intrusive performance testing of live systems without permission.

Do not claim support for a specific user count without relevant evidence.

## 61. Database Review Findings

For material findings, record:

- Finding ID.
- Category.
- Affected component.
- Severity.
- Confidence.
- Verification status.
- Evidence.
- Business impact.
- Data integrity risk.
- Security impact.
- Recommended remediation.
- Migration impact.
- Testing requirements.
- Required approvals.

Distinguish confirmed defects from hypotheses.

## 62. Severity Assessment

Possible classifications:

- Critical.
- High.
- Medium.
- Low.
- Informational.

Consider:

- Data loss potential.
- Security exposure.
- Availability impact.
- Business impact.
- Affected users.
- Likelihood.
- Existing safeguards.

Do not inflate severity without evidence.

## 63. Database Remediation

For significant corrections:

1. Identify root cause.
2. Select the minimal effective change.
3. Assess data impact.
4. Review security.
5. Evaluate compatibility.
6. Prepare migration if needed.
7. Define tests.
8. Define recovery.
9. Obtain required authorization.
10. Implement within scope.
11. Validate results.
12. Report remaining risks.

Avoid unnecessary complete database rewrites.

## 64. Autonomous Database Corrections

In Autonomous Build Mode, authorized local changes may include:

- Creating schema definitions.
- Adding constraints.
- Writing query logic.
- Adding indexes.
- Preparing migrations.
- Creating local test databases.
- Adding test fixtures.
- Correcting ORM models.
- Improving authorization checks.
- Testing data integrity.

Do not require repeated approval for each ordinary authorized change.

Do not infer permission to alter production databases.

## 65. Protected Database Operations

Require specific authorization before:

- Production schema migration.
- Production data updates.
- Production data deletion.
- Bulk data exports.
- Privileged database access changes.
- Live backup restoration.
- Disabling production constraints.
- Removing audit controls.
- Changing database billing plans.
- Moving live data between providers.

Document risks and recovery plans.

Respect platform permission mechanisms.

## 66. Database Exceptions

When a standard cannot reasonably be met:

- Identify the requirement.
- Explain the limitation.
- Evaluate alternatives.
- Assess risks.
- Define compensating controls.
- Request appropriate approval.
- Document review conditions.

Use:

~/engineering-standards/templates/EXCEPTIONS.md

An AI agent cannot approve its own exception.

## 67. Architecture Decisions

For significant database architecture decisions, document:

- Business context.
- Data requirements.
- Alternatives.
- Consistency.
- Security.
- Scalability.
- Operational complexity.
- Total cost.
- Migration implications.
- Risks.

Use:

~/engineering-standards/templates/ADR.md

An ADR does not grant permission for protected operations.

## 68. Database Audit Reporting

For significant reviews, use:

~/engineering-standards/templates/AUDIT_REPORT.md

Include:

- Scope.
- Technology.
- Confirmed findings.
- Unverified concerns.
- Evidence.
- Risks.
- Recommendations.
- Expected migration impact.
- Tests actually executed.
- Remaining limitations.
- Required human approvals.

Do not present unexecuted changes as completed.

## 69. Database Definition of Done

For significant database functionality:

- Requirements identified.
- Data model reviewed.
- Business invariants protected.
- Authentication and authorization considered.
- Tenant isolation implemented where needed.
- Transactions correct.
- Queries validated.
- Relevant indexes evaluated.
- Migration compatibility considered.
- Data retention assessed.
- Recovery requirements understood.
- Performance requirements evaluated.
- Costs considered.
- Relevant tests executed.
- Actual results recorded.
- Protected actions authorized.
- Remaining risks documented.

Do not claim production readiness based solely on successful local schema creation.

## 70. Final Reporting

Report:

1. Database technology and scope.
2. Architecture decisions.
3. Schema or query changes.
4. Data integrity controls.
5. Security and isolation measures.
6. Performance considerations.
7. Scalability strategy.
8. Migration status.
9. Tests performed.
10. Tests not performed.
11. Backup and recovery readiness.
12. Cost implications.
13. Outstanding risks.
14. Required human actions.

Clearly distinguish local implementation from production deployment.

## 71. Final Database Engineering Principles

Protect data integrity.
Preserve important business invariants.
Enforce database access authorization.
Maintain strict tenant isolation.
Use appropriate transactions.
Validate concurrent operations.
Prevent injection vulnerabilities.
Design indexes according to access patterns.
Optimize queries using evidence.
Avoid unbounded database operations.
Preserve existing production data.
Treat migrations as potentially risky.
Never run destructive production changes without authorization.
Maintain appropriate backup and recovery plans.
Test restoration where feasible.
Design for credible scalability.
Avoid unnecessary distributed complexity.
Choose database technology according to requirements.
Evaluate cloud and managed services without vendor bias.
Control database infrastructure costs.
Apply privacy and retention requirements.
Protect AI retrieval data and embeddings.
Support authorized autonomous development.
Never fabricate verification results.
Document remaining risks honestly.