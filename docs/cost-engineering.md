
# Global Cost Engineering and FinOps Standards

## 1. Mission

Design, develop, deploy and operate secure, scalable, reliable and financially sustainable software systems.

These standards define mandatory cost-awareness requirements for Claude Code, OpenAI Codex and other AI-assisted engineering workflows.

They apply to:

- New applications.
- Existing production applications.
- Web applications.
- iOS and Android applications.
- SaaS platforms.
- Backend APIs.
- AI-powered systems.
- Database infrastructure.
- Cloud infrastructure.
- Kubernetes.
- Serverless platforms.
- Third-party services.
- Enterprise integrations.

The objective is to support millions of users without unnecessary spending, unexpected infrastructure costs or avoidable vendor dependence.

Cost optimization must never compromise security, privacy, correctness, data integrity or required reliability.

## 2. Fundamental Principles

Follow these principles:

1. Design for future scalability.
2. Provision infrastructure for current demand.
3. Measure before optimizing.
4. Prefer the simplest suitable architecture.
5. Understand the complete cost of each dependency.
6. Estimate costs before significant changes.
7. Monitor costs after deployment.
8. Prevent unbounded consumption.
9. Reduce waste without sacrificing quality.
10. Preserve production stability.
11. Verify actual provider pricing.
12. Require approval for significant financial commitments.

Never assume that a managed service, serverless platform or cloud provider is automatically cheaper.

Never recommend infrastructure solely because it is fashionable or technically sophisticated.

## 3. Provider Neutrality

These standards are cloud-agnostic, database-agnostic and vendor-neutral.

No infrastructure provider is mandatory by default.

Support cost analysis for:

### Amazon Web Services

Including relevant services such as:

- EC2.
- ECS.
- EKS.
- Lambda.
- RDS.
- Aurora.
- DynamoDB.
- S3.
- CloudFront.
- CloudWatch.
- Load balancers.
- Networking and data transfer.

### Microsoft Azure

Including relevant services such as:

- Azure Virtual Machines.
- Azure App Service.
- Azure Functions.
- Azure Kubernetes Service.
- Azure SQL.
- Cosmos DB.
- Azure Storage.
- Azure Front Door.
- Azure Monitor.
- Networking and data transfer.

### Google Cloud Platform

Including relevant services such as:

- Compute Engine.
- Cloud Run.
- Google Kubernetes Engine.
- Cloud SQL.
- AlloyDB.
- Firestore.
- BigQuery.
- Cloud Storage.
- Cloud CDN.
- Cloud Monitoring.
- Networking and data transfer.

### Other Providers

Including:

- Supabase.
- Firebase.
- Vercel.
- Netlify.
- Cloudflare.
- DigitalOcean.
- Render.
- Railway.
- Fly.io.
- Neon.
- MongoDB Atlas.
- PlanetScale.
- Managed AI providers.
- Self-hosted systems.
- Hybrid infrastructure.
- On-premises environments.

These are examples, not mandatory technologies.

Use the existing project's provider unless there is a justified reason to consider alternatives.

Never recommend a migration solely on the basis of an incomplete price comparison.

## 4. Complete Cost Ownership

Evaluate the total cost of ownership (TCO).

Include:

- Compute.
- Databases.
- Storage.
- Network traffic.
- CDN.
- Load balancing.
- Managed services.
- Authentication.
- Email.
- SMS.
- Push notifications.
- Third-party APIs.
- AI inference.
- Embeddings.
- Vector storage.
- Background processing.
- Monitoring.
- Logs.
- Backups.
- Disaster recovery.
- Security services.
- Deployment infrastructure.
- Maintenance.
- Operational labor.
- Support.
- Migration costs.

Distinguish recurring costs from one-time costs.

Document costs not yet measurable.

Never present an incomplete infrastructure estimate as total operating cost.

## 5. Cost Classification

Classify costs as appropriate:

- Fixed.
- Variable.
- Usage-based.
- Per-request.
- Per-user.
- Per-seat.
- Per-transaction.
- Per-token.
- Per-message.
- Per-connection.
- Per-gigabyte.
- Per-operation.
- Per-compute-hour.
- Per-resource-hour.
- Subscription-based.
- Reserved capacity.
- One-time migration.
- Operational maintenance.

Understand minimum charges, billing increments and contractual commitments.

Identify costs that increase with traffic, storage, concurrency or feature adoption.

## 6. Pricing Verification

Before presenting significant cost recommendations:

1. Identify the exact provider.
2. Identify the actual service and plan.
3. Identify the relevant billing region.
4. Review current official pricing.
5. Identify included quotas.
6. Identify overage charges.
7. Check billing units.
8. Review applicable discounts or commitments.
9. Identify additional dependencies.
10. Document assumptions and verification dates.

Never fabricate current prices.

Never assume historical pricing remains valid.

Clearly distinguish:

- Verified prices.
- Estimated prices.
- Hypothetical scenarios.
- Unknown costs.

If current pricing cannot be verified, explain the limitation.

## 7. Cost Estimation Before Implementation

For changes with meaningful cost implications, provide an estimate before implementation.

Examples:

- Adding AI inference.
- Introducing video processing.
- Creating new databases.
- Introducing realtime messaging.
- Changing hosting platforms.
- Adding managed Kubernetes.
- Enabling expensive monitoring.
- Adding external APIs.
- Increasing storage retention.
- Deploying cross-region infrastructure.

Identify expected usage and cost drivers.

Present an estimated monthly cost range when supported by sufficient information.

Do not invent a precise amount when workload assumptions are uncertain.

Require explicit approval before creating significant recurring charges.

## 8. Cost Forecasting

Evaluate meaningful growth scenarios.

Examples:

- 1,000 active users.
- 10,000 active users.
- 100,000 active users.
- 1,000,000 active users.
- 5,000,000 active users.
- 10,000,000 active users.

These are planning scenarios, not guaranteed capacity or actual usage.

Distinguish:

- Registered users.
- Monthly active users.
- Daily active users.
- Concurrent users.
- Requests per user.
- AI operations per user.
- Storage per user.
- Messages per user.
- Data transfer per user.

Estimate normal and peak demand.

Never calculate costs using registered-user counts alone when usage drives billing.

## 9. Unit Economics

Where meaningful, calculate:

- Cost per active user.
- Cost per API request.
- Cost per AI operation.
- Cost per completed transaction.
- Cost per processed document.
- Cost per notification.
- Cost per uploaded gigabyte.
- Cost per generated image.
- Cost per minute of processed audio or video.
- Cost per tenant.
- Cost per business workflow.

Identify costs that grow faster than revenue or usage.

Compare unit costs before and after significant architectural changes.

Avoid optimizing irrelevant low-cost operations while ignoring expensive recurring workloads.

## 10. Cost Modeling Method

Use explicit formulas.

For usage-based services:

Monthly Cost = Fixed Charges + Sum(Usage Quantity x Applicable Unit Price) + Other Applicable Charges

Account for:

- Included quotas.
- Tiered pricing.
- Regional differences.
- Billing minimums.
- Billing increments.
- Peak capacity.
- Data transfer.
- Taxes where relevant.
- Discounts and commitments where verified.

For tiered pricing, calculate each applicable tier correctly rather than applying one rate to all usage.

Do not mix incompatible billing units.

Avoid double-counting shared infrastructure.

Clearly state when the formula is an approximation.

## 11. Cloud Compute Costs

Evaluate:

- Instance types.
- CPU allocation.
- Memory allocation.
- Runtime hours.
- Utilization.
- Autoscaling.
- Reserved or committed capacity.
- Spot or interruptible capacity.
- Availability requirements.
- Idle resources.
- Deployment environments.

Use measured demand when available.

Avoid permanently overprovisioned compute.

Do not reduce capacity below reliability or performance requirements.

Evaluate whether smaller instances, autoscaling or managed platforms provide better value.

## 12. Serverless Cost Engineering

Evaluate:

- Invocation count.
- Execution duration.
- Memory allocation.
- CPU allocation.
- Concurrency.
- Provisioned capacity.
- Cold starts.
- Request volume.
- Network traffic.
- Logging.
- Database connections.
- Retry behavior.
- Timeouts.

Identify workloads where serverless is economically appropriate.

Compare bursty and sustained workloads.

Do not assume serverless costs remain low under continuous high-volume execution.

Set appropriate concurrency and execution limits.

## 13. Kubernetes Cost Engineering

Kubernetes is optional.

Never introduce Kubernetes solely because an application targets millions of users.

Evaluate the complete cost of:

- Cluster control planes.
- Worker nodes.
- CPU reservations.
- Memory reservations.
- Autoscaling.
- Persistent volumes.
- Storage operations.
- Load balancers.
- Network egress.
- Cross-zone traffic.
- Cross-region traffic.
- Container registries.
- Logging.
- Monitoring.
- Backups.
- Security services.
- Cluster administration.
- Operational maintenance.

Evaluate resource requests, limits and actual utilization.

Identify idle capacity and oversized workloads.

Use appropriate scaling policies and resource quotas.

Compare managed Kubernetes with simpler managed application platforms and serverless alternatives.

Never claim Kubernetes reduces costs without workload-specific evidence.

## 14. EKS, AKS and GKE

When using managed Kubernetes, evaluate provider-specific billing.

### Amazon EKS

Review applicable:

- Cluster management charges.
- Worker compute.
- Networking.
- Storage.
- Load balancing.
- Logging.
- Data transfer.
- Support or extended lifecycle charges.

### Azure Kubernetes Service

Review applicable:

- Cluster management tiers or charges.
- Node pools.
- Compute.
- Networking.
- Persistent storage.
- Load balancing.
- Monitoring.
- Backup and recovery.

### Google Kubernetes Engine

Review applicable:

- Cluster management charges.
- Compute.
- Autopilot or Standard operating models.
- Storage.
- Load balancing.
- Network traffic.
- Observability.
- Backup and recovery.

Verify current official pricing.

Do not assume EKS, AKS and GKE have identical billing models.

Do not compare only control plane pricing.

## 15. Database Cost Engineering

Evaluate:

- Database compute.
- Storage.
- Index size.
- Reads and writes.
- Database connections.
- Connection pooling.
- Read replicas.
- High availability.
- Backup retention.
- Replication.
- Data transfer.
- Transaction volume.
- Query efficiency.
- Monitoring.

Investigate expensive queries and inefficient access patterns.

Avoid unnecessary database duplication.

Optimize data access before recommending expensive infrastructure upgrades.

Consult docs/data.md.

## 16. Supabase Cost Engineering

For Supabase projects, review current applicable pricing dimensions.

Evaluate:

- Organization subscription.
- Project compute.
- Database size.
- Storage.
- Data egress.
- Authentication usage.
- Monthly active users.
- Edge Function usage.
- Realtime usage.
- Concurrent connections.
- Message volumes.
- Backup options.
- Point-in-time recovery.
- Additional projects.
- Optional services and add-ons.

Verify current limits and billing rules.

Review whether unused development projects create recurring charges.

Analyze expensive queries and inefficient realtime subscriptions.

Do not assume upgrading the plan is the correct response to every performance issue.

## 17. Firebase Cost Engineering

For Firebase projects, evaluate relevant usage such as:

- Firestore reads.
- Firestore writes.
- Firestore deletes.
- Document storage.
- Index storage.
- Realtime Database usage.
- Network transfer.
- Cloud Functions or related compute.
- Authentication services.
- Storage.
- Hosting.
- Monitoring.

Understand the actual billing dimensions of the selected services.

Avoid unnecessary repeated reads and listeners.

Evaluate query design before increasing capacity.

Do not assume all Firebase services follow one pricing model.

## 18. Object Storage Costs

Evaluate:

- Stored data volume.
- Object count where relevant.
- Upload operations.
- Download operations.
- Read/write requests.
- Retrieval charges.
- Storage classes.
- Retention.
- Replication.
- Versioning.
- Backup storage.
- Lifecycle transitions.
- Data transfer.

Use lifecycle policies where appropriate.

Avoid storing unnecessary duplicates.

Do not remove data required for legal, operational or recovery purposes.

Evaluate compression and media optimization.

## 19. Image and Video Costs

For media-heavy applications, evaluate:

- Upload volume.
- Original files.
- Generated variants.
- Image resizing.
- Transcoding.
- Video processing.
- Streaming bandwidth.
- CDN delivery.
- Thumbnail generation.
- Storage retention.
- Media duplication.
- External media APIs.

Estimate average media size and consumption frequency.

Consider efficient formats, adaptive streaming and appropriate caching.

Prevent unlimited uploads or processing when abuse could create excessive charges.

## 20. CDN and Network Costs

Evaluate:

- Internet egress.
- CDN delivery.
- Origin requests.
- Cache hit ratio.
- Cross-region transfer.
- Cross-zone transfer.
- Internal networking charges.
- Load balancing.
- NAT gateway usage where relevant.
- Private connectivity.
- Repeated downloads.

Do not assume internal cloud traffic is free.

Use appropriate caching to reduce origin load.

Never expose private content through public caching.

## 21. Third-Party API Costs

Before integrating external APIs:

1. Review pricing.
2. Identify billing units.
3. Estimate usage.
4. Understand quotas.
5. Evaluate retry behavior.
6. Define timeouts.
7. Define concurrency limits.
8. Identify fallback behavior.
9. Monitor consumption.
10. Document ownership and business value.

Examples include:

- Geolocation.
- Maps.
- Search.
- Translation.
- Document processing.
- Identity verification.
- Weather.
- Financial data.
- Communications.
- Analytics.

Avoid excessive polling and duplicate requests.

Do not introduce paid dependencies without justification.

## 22. AI Model and LLM Costs

For AI features, evaluate:

- Input tokens.
- Output tokens.
- Cached tokens where applicable.
- Context length.
- Model selection.
- Inference frequency.
- Tool calls.
- Retries.
- Agent loops.
- Batch processing.
- Image generation.
- Speech processing.
- Video generation.
- Provider-specific charges.

Model the cost of complete user workflows rather than isolated model calls.

Prevent unbounded agent execution.

Set appropriate request, token and spending limits.

Verify actual model pricing and capabilities.

Do not automatically select the largest model for every task.

## 23. AI Agent Cost Controls

For agentic systems:

- Define maximum execution steps.
- Define tool-call limits.
- Limit unnecessary recursion.
- Detect repeated failed operations.
- Apply bounded retries.
- Estimate workflow costs.
- Monitor token usage.
- Prevent duplicate processing.
- Establish user or tenant quotas.
- Apply timeouts.
- Define human approval thresholds.

Evaluate the business value of each autonomous operation.

Avoid unnecessary multi-agent orchestration.

Never trade away required security validation solely to reduce inference costs.

Consult docs/ai-and-llm.md.

## 24. RAG and Vector Search Costs

Evaluate:

- Document ingestion.
- Parsing.
- Chunking.
- Embedding generation.
- Embedding updates.
- Vector index size.
- Retrieval queries.
- Reranking.
- Storage.
- Database compute.
- Model inference.
- Data deletion.
- Reindexing.

Avoid repeatedly embedding unchanged documents.

Track source versions and processing status.

Use incremental ingestion where appropriate.

Do not duplicate vector collections unnecessarily.

Optimize retrieval quality and total workflow cost together.

## 25. AI Model Routing

Evaluate whether different workloads require different model capabilities.

Possible approaches include:

- Smaller models for simpler operations.
- Larger models for complex reasoning.
- Deterministic code for straightforward tasks.
- Cached responses where safe.
- Batching where supported.
- Asynchronous processing.

Model routing must preserve:

- Required accuracy.
- Security.
- Privacy.
- Reliability.
- Explainability where applicable.
- Business constraints.

Validate quality before changing models.

Do not select cheaper models without assessing task-specific performance.

## 26. Authentication Costs

Evaluate relevant costs associated with:

- Monthly active users.
- Enterprise identity providers.
- MFA.
- SMS verification.
- Email verification.
- External identity services.
- Authentication logs.
- Security monitoring.
- Session infrastructure.

Prevent unnecessary repeated verification requests.

Do not weaken authentication requirements to reduce spending.

Estimate costs under realistic user activity.

## 27. SMS, Email and Notifications

Evaluate:

- Messages per user.
- Delivery region.
- Provider pricing.
- Retries.
- Failed deliveries.
- Transactional messages.
- Marketing messages.
- Push notification infrastructure.
- Abuse prevention.
- Logging.
- Retention.

Use notification preferences and appropriate batching.

Prevent unbounded automated messaging.

Do not suppress required security or operational notifications merely to reduce costs.

## 28. Payment and Transaction Costs

For payment integrations, evaluate:

- Transaction fees.
- Fixed processing fees.
- International payment charges.
- Currency conversion.
- Refund fees where applicable.
- Dispute costs.
- Subscription billing.
- Payout charges.
- Fraud prevention services.

Distinguish payment processing fees from application infrastructure costs.

Verify pricing according to country, payment method and contractual terms.

Never compromise transaction integrity or compliance for cost optimization.

## 29. Monitoring and Logging Costs

Evaluate:

- Log ingestion.
- Log storage.
- Retention.
- Metrics.
- Metric cardinality.
- Tracing.
- Sampling.
- Alerting.
- Dashboard usage.
- Data transfer.
- Incident tooling.

Avoid excessive high-cardinality metrics.

Use appropriate sampling and retention policies.

Do not disable essential security logs or operational alerts merely to reduce costs.

Never log secrets or unnecessary sensitive information.

Consult docs/observability.md.

## 30. Backup and Disaster Recovery Costs

Evaluate:

- Backup storage.
- Backup frequency.
- Retention periods.
- Point-in-time recovery.
- Geographic replication.
- Recovery infrastructure.
- Restoration operations.
- Data transfer.
- Recovery testing.

Balance cost with approved Recovery Point Objectives and Recovery Time Objectives.

Do not eliminate required backups to reduce expenditure.

Recovery capability must be tested, not merely assumed.

## 31. Development and Staging Costs

Review non-production infrastructure.

Evaluate:

- Unused environments.
- Idle databases.
- Duplicate cloud projects.
- Oversized staging resources.
- Persistent test clusters.
- Development storage.
- CI/CD usage.
- Build minutes.
- Artifact retention.
- Preview deployments.

Use scheduled shutdowns or appropriate lower-cost configurations where safe.

Avoid shutting down environments required for critical testing or team operations.

Never delete resources without verifying ownership and obtaining required approval.

## 32. CI/CD Cost Engineering

Evaluate:

- Build frequency.
- Build duration.
- Parallel jobs.
- Test execution time.
- Artifact storage.
- Container image storage.
- Cache efficiency.
- Runner infrastructure.
- Deployment frequency.

Optimize redundant work without weakening quality gates.

Do not skip security scans, critical tests or required checks merely to save execution costs.

Use incremental processing where appropriate.

## 33. Cost Attribution

Where possible, attribute costs to:

- Projects.
- Applications.
- Environments.
- Services.
- Teams.
- Tenants.
- Business workflows.
- AI models.
- Third-party providers.

Use supported resource tags, labels or equivalent metadata.

Avoid excessive telemetry that costs more than the insight it provides.

Identify shared costs clearly.

Do not expose one tenant's financial or usage information to another tenant.

## 34. Budgets and Alerts

Recommend appropriate cost governance mechanisms.

Consider:

- Monthly budgets.
- Environment budgets.
- Project budgets.
- AI spending limits.
- Usage thresholds.
- Forecast alerts.
- Unexpected spending alerts.
- Resource quotas.
- Rate limits.
- Concurrency limits.

Verify which controls are advisory and which can actually enforce limits.

A budget alert does not necessarily prevent further charges.

Do not claim that spending is capped unless the relevant provider or application mechanism truly enforces the limit.

## 35. Cost Anomaly Detection

Monitor for unusual changes such as:

- Sudden traffic increases.
- Unexpected database usage.
- Excessive AI token consumption.
- Retry loops.
- Storage growth.
- Network egress spikes.
- Realtime message explosions.
- Logging volume spikes.
- Unexpected compute activity.
- Abusive API requests.
- Compromised credentials.

Investigate anomalies before making changes.

Distinguish legitimate product growth from inefficient or malicious usage.

Apply protective limits where appropriate.

## 36. Abuse and Financial Denial of Service

Evaluate whether attackers or abusive clients could generate large expenses.

Protect costly operations using appropriate:

- Authentication.
- Authorization.
- Rate limiting.
- Quotas.
- Spending controls.
- Bounded retries.
- Concurrency controls.
- Request validation.
- Abuse detection.
- Human approval for expensive operations.

Pay particular attention to:

- AI inference.
- Video generation.
- Image generation.
- SMS.
- Paid APIs.
- Expensive searches.
- Large file uploads.
- Automated exports.

Never expose privileged API keys in client applications.

Avoid designs where unauthenticated users can trigger unlimited paid operations.

## 37. Architectural Cost Trade-offs

Before recommending significant architectural changes, compare reasonable alternatives.

Examples:

- Modular monolith versus microservices.
- Serverless versus continuously running compute.
- Managed database versus self-hosted database.
- Managed containers versus Kubernetes.
- Shared infrastructure versus isolated infrastructure.
- Single-region versus multi-region.
- Hosted AI models versus self-hosted inference.

Evaluate:

- Cost.
- Reliability.
- Security.
- Performance.
- Operational complexity.
- Scalability.
- Migration risk.
- Team capabilities.

Select technology according to evidence, not preference.

## 38. Kubernetes Adoption Decision

Kubernetes must not be introduced automatically.

An adoption proposal must explain:

1. Why existing infrastructure is insufficient.
2. Why simpler alternatives are insufficient.
3. Which workloads benefit.
4. Expected operational complexity.
5. Security implications.
6. Availability implications.
7. Expected monthly costs.
8. Migration costs.
9. Scaling behavior.
10. Rollback options.

Require explicit human approval before adoption.

Consult docs/architecture.md and docs/scalability.md.

## 39. Vendor Lock-in and Migration Costs

Evaluate:

- Proprietary APIs.
- Data export capabilities.
- Service-specific dependencies.
- Contractual commitments.
- Data transfer charges.
- Engineering migration work.
- Testing.
- Operational retraining.
- Downtime risks.
- Parallel infrastructure during migration.

Do not assume a lower monthly hosting quote justifies a migration.

Compare total financial and operational impact.

Avoid unnecessary provider abstraction when the abstraction itself creates greater complexity and cost.

## 40. Cost Optimization Priority

Prioritize improvements according to:

1. Financial impact.
2. Implementation effort.
3. Security risk.
4. Reliability risk.
5. User impact.
6. Reversibility.
7. Confidence in expected savings.

Prefer changes that eliminate clear waste before proposing major redesigns.

Examples:

- Removing confirmed unused resources after approval.
- Fixing repeated unnecessary requests.
- Optimizing expensive queries.
- Improving cache effectiveness.
- Reducing duplicate media processing.
- Correcting uncontrolled retries.
- Rightsizing overprovisioned services.

Never make destructive changes automatically.

## 41. Existing Production Cost Audits

When auditing an existing production application:

1. Inspect the actual technology stack.
2. Identify infrastructure providers.
3. Inventory paid services.
4. Review available billing data.
5. Review usage metrics.
6. Identify known cost drivers.
7. Assess growth-related risks.
8. Identify inefficient operations.
9. Evaluate existing budgets and alerts.
10. Recommend prioritized improvements.
11. Present evidence and assumptions.
12. Request approval before implementation.

The initial audit must be read-only.

Do not:

- Delete resources.
- Downgrade plans.
- Change production quotas.
- Disable monitoring.
- Modify billing settings.
- Cancel subscriptions.
- Migrate providers.
- Change production configurations.

without explicit human approval.

If actual billing data is unavailable, state that the analysis is based on architecture and estimated usage.

Never invent observed spending.

## 42. Cost Reporting

For significant cost assessments, provide:

### Current State

- Known providers.
- Relevant services.
- Existing architecture.
- Available usage data.
- Verified current costs.
- Unknown costs.

### Cost Drivers

- Primary expenses.
- Usage patterns.
- Growth sensitivity.
- Potential inefficiencies.

### Recommendations

- Proposed optimization.
- Technical justification.
- Estimated savings when supportable.
- Implementation effort.
- Risks.
- Dependencies.
- Testing requirements.

### Approval

- Changes requiring authorization.
- Expected operational impact.
- Rollback or recovery plan.

Separate facts from assumptions and estimates.

## 43. Cost Review During Development

Before implementing features that may introduce significant recurring costs:

- Identify new paid dependencies.
- Evaluate expected consumption.
- Check free-tier limitations.
- Evaluate growth costs.
- Consider abuse scenarios.
- Assess monitoring requirements.
- Define usage limits.
- Document the estimate.
- Request approval when required.

Do not introduce hidden recurring financial obligations.

## 44. Cost Review During Code Review

Where relevant, examine whether a change introduces:

- Additional database queries.
- Unbounded API calls.
- Repeated AI inference.
- New background jobs.
- Excessive polling.
- Duplicate storage.
- Expensive logs.
- Unbounded retries.
- Large network payloads.
- Unexpected third-party charges.

Report meaningful risks before deployment.

Do not block harmless changes based on speculative or negligible costs.

## 45. Cost Review Before Deployment

For financially significant deployments:

1. Confirm expected usage.
2. Review new paid services.
3. Check infrastructure configuration.
4. Verify resource limits.
5. Verify authentication and authorization.
6. Review rate limits.
7. Check observability.
8. Confirm budget controls.
9. Evaluate rollback requirements.
10. Obtain explicit approval.

Never silently provision expensive production infrastructure.

## 46. Financial Safety for AI Coding Agents

AI development agents must treat infrastructure and financial commitments as privileged operations.

Without explicit human approval, do not:

- Upgrade paid service plans.
- Enable paid add-ons.
- Provision expensive compute.
- Create production Kubernetes clusters.
- Increase production resource limits materially.
- Purchase reserved capacity.
- Commit to cloud contracts.
- Enable high-cost AI models.
- Remove financial safeguards.
- Disable cost alerts.
- Change payment methods.
- Create recurring financial commitments.

Do not interpret repository access as authorization for spending.

A command that is technically executable may still require financial approval.

If financial impact is uncertain, present the risk and request authorization.

## 47. Cost-Aware Architecture for Millions of Users

Plan for scalability without premature overinvestment.

For growth scenarios, evaluate:

- Unit cost trends.
- Database scaling.
- Compute scaling.
- Storage growth.
- Network costs.
- Realtime costs.
- AI consumption.
- Third-party dependency costs.
- Operational complexity.
- Recovery costs.

Identify likely future bottlenecks.

Define measurable thresholds for architectural evolution.

Do not deploy enterprise-scale infrastructure before it is justified.

Never claim that a platform can support ten million users solely because it runs in the cloud.

## 48. Cost Definition of Done

For significant changes with financial implications:

- Cost drivers identified.
- Provider pricing verified where possible.
- Workload assumptions documented.
- Estimated cost impact assessed.
- Security implications reviewed.
- Privacy implications reviewed.
- Reliability maintained.
- Scalability considered.
- Resource limits evaluated.
- Abuse prevention considered.
- Monitoring requirements defined.
- Alternatives evaluated.
- Risks documented.
- Required human approvals obtained.

Cost optimization is incomplete if it introduces unacceptable operational or security risk.

## 49. Final Cost Engineering Principles

Design for growth.
Provision for reality.
Measure before optimizing.
Understand every paid dependency.
Verify provider pricing.
Estimate before committing.
Monitor after deployment.
Prevent unbounded consumption.
Control AI inference costs.
Control database and storage costs.
Control network and CDN costs.
Evaluate Kubernetes total ownership cost.
Avoid unnecessary complexity.
Preserve existing production systems.
Never sacrifice security or data integrity.
Never invent pricing or usage metrics.
Require approval for significant financial changes.