---
name: engineering-cost-estimate
description: Estimate, evaluate, forecast and optimize engineering costs using the Global Engineering Standards. Use for cloud infrastructure pricing, AWS, Azure, GCP, Supabase, Firebase, databases, Kubernetes, serverless, AI model inference, RAG, agentic systems, FinOps, SaaS unit economics, scalability cost planning and prevention of unauthorized spending.
---

# Engineering Cost Estimate

## 1. Purpose

Provide an evidence-based engineering cost estimation and optimization workflow.

This skill supports:

- Infrastructure cost estimation.
- Cloud provider comparison.
- Database pricing evaluation.
- Storage and network cost analysis.
- Serverless pricing.
- Kubernetes cost assessment.
- AI and LLM inference costs.
- RAG and agentic AI costs.
- SaaS unit economics.
- Scalability cost forecasting.
- Capacity planning.
- Cost optimization.
- FinOps governance.
- Budget controls.
- Cost anomaly detection.
- Financial risk assessment.
- Autonomous development cost protection.

The objective is to select and maintain economically efficient solutions that satisfy actual technical and business requirements.

Do not sacrifice security, privacy, data integrity or essential reliability merely to reduce cost.

Do not create financial commitments without appropriate authorization.

## 2. Global Engineering Standards

The Global Engineering Standards repository is located at:

~/engineering-standards/

Primary reference:

~/engineering-standards/docs/cost-engineering.md

Additional references when relevant:

- docs/governance.md
- docs/architecture.md
- docs/scalability.md
- docs/data.md
- docs/security.md
- docs/privacy.md
- docs/ai-and-llm.md
- docs/quality-and-testing.md
- docs/observability.md
- docs/mobile-and-web.md
- docs/platforms-and-applications.md

Resolve relative references against the engineering-standards repository.

Read the relevant standards before making significant recommendations.

Do not load unrelated documentation unnecessarily.

## 3. When to Use This Skill

Use when the user requests:

- A cost estimate.
- A cloud provider comparison.
- Infrastructure budgeting.
- Database cost assessment.
- AI inference cost calculation.
- SaaS operating cost estimates.
- Cost reduction recommendations.
- Capacity planning.
- Kubernetes financial evaluation.
- Serverless versus dedicated infrastructure analysis.
- Pricing analysis for scaling an application.
- FinOps auditing.
- Financial risk review.
- Spending safeguards.

Also apply cost engineering during significant infrastructure decisions and Autonomous Build Mode.

Do not assume an application needs paid cloud infrastructure during initial development.

## 4. Operating Modes

Support:

- Supervised Mode.
- Autonomous Build Mode.

Supervised Mode is the default.

Autonomous Build Mode requires explicit user authorization.

Both modes must preserve financial controls.

The operating mode changes implementation autonomy, not spending authority.

Consult docs/governance.md.

## 5. Supervised Mode

For an existing application:

1. Identify authorized scope.
2. Review relevant architecture.
3. Inspect available cost information.
4. Identify actual providers.
5. Evaluate measured usage.
6. Separate actual spending from estimated spending.
7. Identify cost drivers.
8. Assess optimization opportunities.
9. Explain risks and trade-offs.
10. Recommend proportionate changes.
11. Obtain approval before significant or billable modifications.

A default financial or infrastructure audit is read-only.

Do not change cloud billing, infrastructure size or production services automatically.

## 6. Autonomous Build Mode

When explicitly authorized to build a complete application:

1. Identify expected workload.
2. Determine technical requirements.
3. Evaluate low-cost suitable technologies.
4. Prefer existing authorized resources where practical.
5. Estimate potential recurring costs.
6. Avoid unnecessary paid dependencies.
7. Implement appropriate local cost controls.
8. Add usage limits where applicable.
9. Review resource efficiency.
10. Test cost-sensitive behaviors.
11. Document cost assumptions.
12. Continue authorized development.
13. Report paid prerequisites at final handoff.

Do not interrupt for every ordinary implementation decision.

Do not provision billable resources merely because autonomous development was requested.

## 7. Financial Authorization

A general development request does not authorize financial commitments.

Protected actions include:

- Creating paid cloud resources.
- Upgrading subscriptions.
- Enabling paid API plans.
- Increasing service quotas with financial exposure.
- Purchasing domains.
- Activating paid AI services.
- Purchasing licenses.
- Starting billable managed clusters.
- Changing production billing settings.
- Accepting recurring financial obligations.

Obtain specific authorization according to actual risk and scope.

Never infer spending permission from an available payment method.

## 8. Budget Identification

Identify:

- Approved budget.
- Budget currency.
- Budget period.
- Existing resources.
- Expected users.
- Expected usage.
- Workload characteristics.
- Reliability requirements.
- Security requirements.
- Data residency.
- Growth assumptions.

If no approved budget is available, label it as unknown.

Do not invent an approved spending ceiling.

## 9. Actual Costs Versus Estimates

Clearly distinguish:

- Verified current spending.
- Published provider prices.
- Calculated estimates.
- Scenario assumptions.
- Historical averages.
- Unverified projections.

Use accurate labels.

Never present an estimate as an actual invoice.

Never invent pricing information.

## 10. Pricing Verification

For pricing-sensitive recommendations:

1. Identify the exact service.
2. Identify provider and region.
3. Review the applicable pricing model.
4. Identify billing units.
5. Check relevant free-tier conditions.
6. Identify additional charges.
7. Record verification date.
8. Document source references.
9. State relevant uncertainty.

Use current official provider pricing whenever accessible.

Do not rely on outdated remembered prices when current prices materially affect the answer.

If live pricing cannot be verified, explain the limitation and use clearly labeled assumptions.

## 11. Cost Estimation Units

Identify relevant units, such as:

- Cost per hour.
- Cost per month.
- Cost per year.
- Cost per request.
- Cost per thousand requests.
- Cost per million tokens.
- Cost per gigabyte-month.
- Cost per gigabyte transferred.
- Cost per database operation.
- Cost per active user.
- Cost per transaction.
- Cost per generated image.
- Cost per processing minute.

Maintain consistent units throughout calculations.

## 12. Estimation Methodology

Use the following process:

1. Define workload.
2. Identify billable resources.
3. Determine billing units.
4. Obtain verified rates or documented assumptions.
5. Calculate expected usage.
6. Calculate each cost category.
7. Include relevant secondary charges.
8. Calculate monthly and annual totals.
9. Evaluate growth scenarios.
10. Perform sensitivity analysis.
11. Identify uncertain variables.
12. Present findings and recommendations.

Show calculations transparently.

Avoid unsupported precision.

## 13. Core Cost Model

Use a model appropriate to the project.

A general monthly total may include:

Total monthly cost =
Compute +
Database +
Storage +
Network +
Observability +
AI inference +
External services +
Other applicable charges

Do not double-count included allowances or bundled services.

Distinguish fixed costs from variable costs.

Account for taxes where relevant and verifiable.

## 14. Scenario Planning

Evaluate appropriate scenarios.

Examples:

- Initial development.
- Small launch.
- Moderate adoption.
- High growth.
- Peak demand.
- Large-scale production.

For each scenario, document:

- Active users.
- Concurrent users.
- Requests.
- Data volume.
- AI interactions.
- Resource requirements.
- Monthly cost.
- Cost uncertainty.

Do not assume all registered users are simultaneously active.

## 15. Growth to Millions of Users

When an application targets large-scale growth:

- Distinguish registered users from active users.
- Estimate concurrency.
- Evaluate request frequency.
- Estimate storage per user.
- Model data growth.
- Evaluate background workloads.
- Assess database limits.
- Consider network transfer.
- Model inference usage.
- Estimate capacity thresholds.

Design a credible evolution path.

Do not provision infrastructure for millions of simultaneous users without supporting requirements.

## 16. Unit Economics

Evaluate suitable metrics:

- Cost per active user.
- Cost per customer.
- Cost per transaction.
- Cost per request.
- Cost per document processed.
- Cost per AI conversation.
- Cost per generated result.
- Cost per organization or tenant.

Select units relevant to the application's business model.

Do not treat infrastructure cost alone as total business cost.

## 17. Fixed and Variable Costs

Separate:

Fixed or relatively stable costs:

- Reserved capacity.
- Dedicated infrastructure.
- Base subscriptions.
- Minimum service fees.

Variable costs:

- Usage-based compute.
- Requests.
- Storage growth.
- Network transfer.
- AI tokens.
- Database operations.
- Event processing.

Identify how each category changes with adoption.

## 18. Cloud Provider Comparison

Evaluate relevant services across:

- AWS.
- Microsoft Azure.
- Google Cloud.
- Other suitable providers.

Compare:

- Compute.
- Managed databases.
- Storage.
- Networking.
- Monitoring.
- Security controls.
- Operational complexity.
- Reliability.
- Data residency.
- Scaling behavior.
- Pricing model.

Compare functionally equivalent configurations.

Do not declare a universal cheapest cloud provider.

## 19. AWS Cost Review

When AWS is relevant, consider:

- Compute services.
- Lambda.
- API Gateway.
- RDS and Aurora.
- DynamoDB.
- S3.
- CloudFront.
- Network egress.
- NAT gateways.
- Load balancers.
- CloudWatch.
- EKS.
- Backup.
- Data transfer between services.

Include only services actually used or seriously considered.

Verify current provider-specific pricing.

## 20. Azure Cost Review

When Azure is relevant, consider:

- App Service.
- Functions.
- Virtual machines.
- Azure SQL.
- Cosmos DB.
- Blob Storage.
- Azure Monitor.
- AKS.
- Load balancing.
- Networking.
- Data transfer.
- Backup.

Use actual region and deployment assumptions.

Verify current pricing.

## 21. Google Cloud Cost Review

When Google Cloud is relevant, consider:

- Cloud Run.
- Cloud Functions.
- Compute Engine.
- Cloud SQL.
- Firestore.
- Cloud Storage.
- Cloud Monitoring.
- GKE.
- Load balancing.
- Networking.
- Backup.
- Egress.

Verify applicable rates and allowances.

## 22. Managed Platforms

Evaluate managed application platforms when appropriate.

Examples include:

- Supabase.
- Firebase.
- Managed hosting providers.
- Serverless application platforms.
- Managed database platforms.
- Managed authentication services.

Review:

- Base plan.
- Usage limits.
- Database charges.
- Storage.
- Bandwidth.
- Authentication.
- Backups.
- Additional environments.
- Upgrade thresholds.
- Provider dependencies.

Do not assume that a managed platform is always cheaper or more expensive than self-hosting.

## 23. Supabase Cost Considerations

When Supabase is used or evaluated, consider:

- Project plan.
- Database compute.
- Storage.
- Bandwidth.
- Authentication usage.
- Edge Functions.
- Backups.
- Additional project environments.
- Resource limits.
- Upgrade requirements.

Verify current published pricing and account-specific billing conditions where accessible.

Do not assume a free project can support every production workload.

## 24. Firebase Cost Considerations

When Firebase is used or evaluated, consider:

- Firestore operations.
- Realtime Database usage.
- Storage.
- Network egress.
- Cloud Functions.
- Authentication.
- Hosting.
- Logging.
- Google Cloud-linked resources.
- Plan limits.

Usage-based charges may rise with inefficient access patterns.

Model reads and writes according to realistic application behavior.

## 25. Compute Cost Engineering

Evaluate:

- Instance type.
- CPU.
- Memory.
- Operating hours.
- Idle capacity.
- Autoscaling.
- Cold starts.
- Minimum replicas.
- Provisioned concurrency.
- Burst demand.
- Reserved or committed capacity.

Avoid overprovisioning.

Do not reduce capacity below justified reliability requirements.

## 26. Serverless Cost Engineering

For serverless services, model:

- Invocation count.
- Execution duration.
- Memory allocation.
- CPU allocation.
- Provisioned capacity.
- Networking.
- Logging.
- Concurrency.
- Request limits.

Evaluate break-even conditions against other hosting options.

Do not assume serverless is always free at low traffic or always cheaper at high traffic.

## 27. Container Infrastructure

For container-based services, consider:

- Compute capacity.
- Memory limits.
- Container registry.
- Storage.
- Networking.
- Scheduling.
- Deployment overhead.
- Monitoring.
- Security scanning.

Compare managed containers and traditional hosting when relevant.

Avoid unnecessary orchestration layers.

## 28. Kubernetes Cost Engineering

When Kubernetes is considered, evaluate:

- Control plane charges.
- Worker nodes.
- Minimum cluster size.
- Load balancers.
- Persistent volumes.
- Networking.
- Logging.
- Monitoring.
- Autoscaling.
- Operational staffing.
- Upgrades.
- Backup.

Compare EKS, AKS and GKE where appropriate.

Do not introduce Kubernetes solely because the application may eventually reach millions of users.

Prefer simpler alternatives when they satisfy the requirements.

## 29. Kubernetes Optimization

For existing Kubernetes environments, review:

- CPU requests and limits.
- Memory requests and limits.
- Idle workloads.
- Node utilization.
- Autoscaling configuration.
- Replica counts.
- Scheduling constraints.
- Storage classes.
- Network charges.
- Resource quotas.

Do not change production cluster configuration without authorization.

Validate performance and reliability before reducing resources.

## 30. Database Cost Engineering

Evaluate:

- Database compute.
- Storage size.
- Index size.
- Read operations.
- Write operations.
- Connections.
- Backups.
- Replicas.
- High availability.
- Data transfer.
- Monitoring.
- Maintenance.

Consider architecture and query efficiency before increasing capacity.

Consult docs/data.md.

## 31. Database Query Economics

Review:

- Query frequency.
- Expensive scans.
- N+1 patterns.
- Unnecessary reads.
- Missing indexes.
- Inefficient pagination.
- Excessive data transfer.
- Overly frequent polling.
- Cache opportunities.

Optimize measured or credible bottlenecks.

Avoid unsafe index changes on production.

## 32. Storage Cost Engineering

Consider:

- Object storage.
- Database storage.
- Backup storage.
- Logs.
- Archived data.
- Version history.
- Temporary files.
- Media assets.
- Replication.
- Lifecycle policies.

Calculate storage growth over time.

Do not delete important data merely to reduce costs.

## 33. Network and Egress Costs

Estimate relevant:

- Internet egress.
- Cross-region transfer.
- Cross-zone transfer.
- CDN traffic.
- Database transfer.
- Backup replication.
- Managed networking.
- NAT charges.

Do not assume network transfer is always free inside a cloud provider.

Use actual architecture and billing assumptions.

## 34. CDN Cost Considerations

When a CDN is relevant, review:

- Request volume.
- Cache hit ratio.
- Egress volume.
- Image optimization.
- Media delivery.
- Cache invalidations.
- Geographic traffic distribution.

Avoid recommending a CDN without considering actual traffic patterns.

## 35. Observability Costs

Model:

- Log ingestion.
- Log retention.
- Metric cardinality.
- Trace sampling.
- Dashboard services.
- Alerting.
- Error reporting.
- Long-term storage.

Use proportionate telemetry.

Never eliminate critical security or operational visibility solely to lower spending.

Consult docs/observability.md.

## 36. Backup and Recovery Costs

Evaluate:

- Backup frequency.
- Backup retention.
- Storage.
- Replication.
- Recovery testing.
- Secondary environments.
- Recovery infrastructure.

Backup cost must be evaluated alongside data-loss and recovery risk.

Do not remove backups without appropriate risk assessment and authorization.

## 37. AI and LLM Cost Engineering

For AI-enabled systems, consider:

- Input tokens.
- Output tokens.
- Model pricing.
- Context length.
- Cached inputs.
- Tool calls.
- Model retries.
- Embeddings.
- Reranking.
- Vector storage.
- Document processing.
- Image generation.
- Audio processing.
- Background jobs.

Verify provider-specific prices.

Do not assume all model calls have identical costs.

Consult docs/ai-and-llm.md.

## 38. Token Usage Estimation

Estimate:

- Requests per user.
- Input tokens per request.
- Output tokens per request.
- System context.
- Retrieved context.
- Conversation history.
- Retry frequency.
- Tool-generated content.

Document assumptions.

Model different user activity scenarios.

Avoid invented average token consumption.

## 39. AI Model Selection

Compare suitable models according to:

- Task quality.
- Reliability.
- Latency.
- Context requirements.
- Security.
- Privacy.
- Provider terms.
- Availability.
- Price.
- Operational complexity.

Use less expensive models for appropriate tasks when evaluation supports their adequacy.

Do not downgrade critical decision quality solely to save tokens.

## 40. Model Routing

When justified, evaluate:

- Task classification.
- Model selection by complexity.
- Deterministic preprocessing.
- Retrieval filtering.
- Response caching where appropriate.
- Fallback models.
- Token budgeting.

Test quality before using model routing to reduce spending.

Avoid uncontrolled fallback chains.

## 41. RAG Cost Engineering

For Retrieval-Augmented Generation systems, assess:

- Document ingestion.
- Parsing.
- Chunking.
- Embeddings.
- Re-embedding.
- Vector indexing.
- Storage.
- Retrieval.
- Reranking.
- Context size.
- Model inference.
- Access control.

Optimize the full pipeline, not merely inference token costs.

Preserve retrieval authorization and answer quality.

## 42. Agentic AI Costs

Agentic systems may multiply resource consumption.

Evaluate:

- Number of agents.
- Tool calls.
- Sequential reasoning steps.
- Parallel executions.
- Retry loops.
- External API calls.
- Memory and context growth.
- Model routing.
- Timeouts.
- Execution budgets.

Apply bounded execution.

Do not allow unlimited recursive tool use or uncontrolled retries.

## 43. Autonomous Agent Spending Controls

For autonomous development agents and application-level agents:

- Define spending boundaries.
- Define execution limits.
- Restrict paid tools.
- Avoid uncontrolled API usage.
- Review external calls.
- Monitor budget consumption.
- Escalate protected financial actions.

Application-level AI agents do not inherit unrestricted spending authorization from a development instruction.

Do not bypass tool approval controls.

## 44. Cost-Aware Prompt Design

Evaluate opportunities to:

- Reduce unnecessary context.
- Use selective retrieval.
- Avoid duplicated instructions.
- Summarize appropriate history.
- Reuse validated results.
- Limit redundant tool outputs.
- Apply bounded response formats.

Do not remove essential safety instructions merely to reduce tokens.

## 45. AI Quality Versus Cost

Cost optimization must preserve required quality.

Evaluate:

- Accuracy.
- Reliability.
- Hallucination risks.
- Safety requirements.
- Human oversight.
- Response latency.
- Privacy.
- Operational cost.

Choose the most economical configuration that adequately satisfies the required evaluation criteria.

Do not assume the cheapest model is always the best engineering choice.

## 46. API Integration Costs

For third-party APIs, evaluate:

- Request pricing.
- Usage quotas.
- Rate limits.
- Overage charges.
- Minimum subscriptions.
- Geographic pricing.
- Data transfer.
- Retry behavior.
- Caching opportunities.

Do not enable paid API access without authorization.

## 47. Authentication Costs

When managed authentication is used, evaluate:

- Monthly active users.
- Authentication methods.
- SMS usage.
- Email delivery.
- Enterprise features.
- Multi-factor authentication.
- Provider limits.
- Additional identity services.

Do not disable important authentication safeguards solely to reduce costs.

## 48. Communication Costs

Evaluate relevant:

- Transactional email.
- SMS.
- Push notifications.
- Voice services.
- Support notifications.
- Delivery retries.
- Fraud prevention.

Distinguish essential notifications from optional features.

Avoid uncontrolled message loops.

## 49. Media Processing Costs

For media-intensive applications, model:

- Image uploads.
- Video storage.
- Transcoding.
- Audio processing.
- Streaming.
- CDN delivery.
- AI generation.
- Retention.
- Moderation.

Media costs can grow differently from ordinary API traffic.

## 50. Game Infrastructure Costs

For games, evaluate:

- Multiplayer servers.
- Matchmaking.
- Real-time messaging.
- Player state.
- Game analytics.
- Asset delivery.
- Voice chat.
- Anti-cheat infrastructure.
- Live operations.
- Save storage.

Consider concurrent players and session duration.

Do not estimate multiplayer costs using registered-player counts alone.

Consult docs/platforms-and-applications.md.

## 51. Mobile and Desktop Distribution Costs

When relevant, evaluate:

- Developer account fees.
- Code signing.
- Application distribution.
- Update hosting.
- Crash reporting.
- Push services.
- Platform testing.
- Device testing.
- Paid SDKs.

Verify current official fees.

Do not purchase memberships or publish applications automatically.

## 52. Development Environment Costs

Review:

- Local tooling.
- CI runners.
- Development databases.
- Preview deployments.
- Testing services.
- Device farms.
- Cloud workstations.
- Build storage.

Prefer existing authorized resources when practical.

Avoid keeping expensive development environments running unnecessarily.

## 53. Staging and Preview Environment Costs

Estimate:

- Additional compute.
- Database copies.
- Storage.
- Network usage.
- Logging.
- Preview deployments.
- Test traffic.

Use appropriate environment lifecycles.

Do not delete protected environments without authorization.

## 54. CI/CD Cost Optimization

Evaluate:

- Build minutes.
- Test duration.
- Parallelism.
- Cache efficiency.
- Artifact retention.
- Runner size.
- Redundant jobs.

Do not disable critical tests or security checks solely to reduce CI expenses.

## 55. Cost Monitoring

Recommend appropriate visibility into:

- Daily spending.
- Monthly spending.
- Usage by service.
- Cost by environment.
- Cost by project.
- Cost by tenant where feasible.
- AI inference consumption.
- Budget trends.
- Anomalies.

Do not claim monitoring is active unless it is configured and verified.

## 56. Budget Alerts

Consider:

- Monthly budget alerts.
- Daily spending anomalies.
- Usage thresholds.
- API quota alerts.
- Storage growth alerts.
- Unexpected infrastructure creation.
- Token spending alerts.

Alerts do not necessarily prevent spending.

Distinguish notifications from enforced spending controls.

## 57. Hard Spending Limits

Where available, evaluate technical mechanisms such as:

- Provider-enforced quotas.
- API spending caps.
- Resource policies.
- Account restrictions.
- Permission boundaries.
- Service limits.
- Automated shutdown controls where safe.

Verify whether each mechanism actually prevents new charges.

Do not assume every provider offers a reliable hard cost ceiling.

## 58. Financial Anomaly Detection

Potential anomalies include:

- Unexpected request spikes.
- Sudden token consumption.
- Excessive database reads.
- Rapid storage growth.
- Idle resource charges.
- Repeated job failures.
- Recursive agent loops.
- Unexpected egress.

Recommend proportionate investigation.

Do not automatically destroy production resources to stop spending.

## 59. Cost Optimization Workflow

Follow:

1. Identify actual cost drivers.
2. Review current usage.
3. Establish baseline.
4. Identify safe improvements.
5. Estimate expected savings.
6. Assess performance impact.
7. Assess security impact.
8. Assess availability impact.
9. Obtain required authorization.
10. Implement within scope.
11. Measure actual outcomes.
12. Document results.

Avoid optimization based entirely on theoretical assumptions.

## 60. Rightsizing

Evaluate resource utilization before reducing capacity.

Consider:

- CPU usage.
- Memory usage.
- Peak demand.
- Storage IOPS.
- Latency.
- Autoscaling behavior.
- Failover requirements.

Do not reduce production capacity without appropriate review and authorization.

## 61. Scheduling and Idle Resource Management

Identify opportunities to reduce unnecessary non-production spending.

Examples:

- Scheduled development environment shutdown.
- Ephemeral preview environments.
- Cleanup of unused test resources.
- Bounded background jobs.
- Expiration of temporary artifacts.

Do not shut down production or protected shared resources automatically.

## 62. Resource Tagging

Where applicable, recommend labels or tags for:

- Project.
- Environment.
- Owner.
- Cost center.
- Application.
- Lifecycle.
- Expiration.

Tagging supports allocation but does not itself reduce spending.

Avoid imposing complex tagging systems on trivial projects.

## 63. Multi-Tenant Cost Attribution

For multi-tenant applications, evaluate:

- Cost per tenant.
- Usage allocation.
- Shared infrastructure.
- Storage growth.
- Heavy-user workloads.
- AI consumption.
- Rate limits.
- Fair-use policies.

Protect tenant privacy in billing and analytics records.

Avoid introducing expensive tenant-specific infrastructure without justification.

## 64. Scaling Economics

Analyze how cost changes as usage grows.

Consider:

- Linear cost growth.
- Fixed overhead.
- Threshold-based upgrades.
- Step-function pricing.
- Bulk discounts.
- Provider quotas.
- Database scaling limits.
- AI inference growth.

Document break-even points when supported by real pricing and usage assumptions.

## 65. Sensitivity Analysis

Evaluate how conclusions change when assumptions vary.

Potential variables:

- Active user percentage.
- Requests per user.
- Storage per user.
- Average response size.
- AI tokens per request.
- Retry rates.
- Peak concurrency.
- Regional distribution.

Do not present one forecast as a guaranteed future bill.

## 66. Cost Forecasting

Build forecasts using:

- Historical usage when available.
- Defined growth scenarios.
- Current pricing.
- Workload assumptions.
- Planned feature changes.
- Capacity thresholds.

Indicate uncertainty and sources.

Avoid unsupported long-term precision.

## 67. Financial Risk Classification

Classify relevant risks:

- Low.
- Moderate.
- High.
- Critical.

Consider:

- Recurring exposure.
- Billing variability.
- Unbounded consumption.
- Irreversible commitments.
- Service dependency.
- Budget sensitivity.

Do not label every paid service as financially critical.

## 68. Cost Finding Format

For material cost findings, record:

Finding ID:

[FINDING_ID]

Category:

[CATEGORY]

Affected resource:

[RESOURCE]

Actual monthly cost:

[VERIFIED_COST_OR_UNKNOWN]

Estimated monthly cost:

[ESTIMATE_OR_UNKNOWN]

Evidence:

[EVIDENCE]

Cost driver:

[DRIVER]

Proposed optimization:

[RECOMMENDATION]

Estimated savings:

[ESTIMATE_AND_ASSUMPTIONS]

Technical risks:

[RISKS]

Required authorization:

[APPROVAL]

Verification plan:

[VALIDATION]

Never invent realized savings.

## 69. Comparative Cost Report

When comparing options, use a consistent structure.

| Criterion | Option A | Option B | Option C |
|---|---|---|---|
| Initial cost | [VALUE] | [VALUE] | [VALUE] |
| Monthly cost | [VALUE] | [VALUE] | [VALUE] |
| Growth cost | [VALUE] | [VALUE] | [VALUE] |
| Reliability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Security | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Operational effort | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Scalability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |
| Portability | [ASSESSMENT] | [ASSESSMENT] | [ASSESSMENT] |

Remove irrelevant alternatives when creating a real report.

Use comparable workloads and regions.

## 70. Cost Estimation Report

For a cost estimate, include:

1. Project context.
2. Workload assumptions.
3. Services evaluated.
4. Pricing sources.
5. Verification date.
6. Cost calculation.
7. Monthly projection.
8. Annual projection where relevant.
9. Growth scenarios.
10. Main cost drivers.
11. Uncertainty.
12. Recommended configuration.
13. Financial risks.
14. Required approvals.

Do not present estimates as guaranteed bills.

## 71. Architecture Decision Records

For major financial architecture decisions, use:

~/engineering-standards/templates/ADR.md

Document:

- Options.
- Business constraints.
- Architecture implications.
- Security.
- Scalability.
- Reliability.
- Cost.
- Portability.
- Trade-offs.

An ADR does not authorize spending.

## 72. Cost Audit Reporting

For significant reviews, use:

~/engineering-standards/templates/AUDIT_REPORT.md

Record:

- Scope.
- Evidence.
- Actual costs.
- Estimates.
- Opportunities.
- Technical risks.
- Recommendations.
- Approvals.
- Remaining uncertainty.

Do not claim that proposed cost savings have already occurred.

## 73. Financial Exceptions

When a standard cannot reasonably be followed, use:

~/engineering-standards/templates/EXCEPTIONS.md

Record:

- Requirement.
- Justification.
- Scope.
- Financial exposure.
- Technical risks.
- Compensating controls.
- Approval.
- Expiration.
- Review conditions.

An AI agent cannot approve its own financial exception.

An exception does not automatically grant purchasing authority.

## 74. Existing Production Protection

For existing production systems:

- Begin with authorized read-only assessment.
- Protect service availability.
- Protect data.
- Avoid unapproved rightsizing.
- Avoid unapproved resource deletion.
- Avoid unapproved plan changes.
- Avoid unapproved provider migration.
- Preserve essential security controls.
- Evaluate rollback.
- Require appropriate authorization.

Do not interpret available cloud credentials as spending authorization.

## 75. Autonomous Cost Optimization

In Autonomous Build Mode, permitted local work may include:

- Reducing redundant API calls.
- Optimizing inefficient queries.
- Improving caching within scope.
- Reducing unnecessary processing.
- Implementing usage metering.
- Adding configurable request budgets.
- Introducing safe retry limits.
- Creating cost reports.
- Preparing infrastructure configurations for review.
- Adding cost-related tests.

Do not make protected production or financial changes without authorization.

Continue independent authorized development when paid prerequisites are unavailable.

## 76. Autonomous Build Financial Safety

Before using external billable tools:

1. Confirm the service is authorized.
2. Confirm the account and environment.
3. Identify potential billing.
4. Review spending limits.
5. Respect available quotas.
6. Obtain required authorization.
7. Use bounded execution.
8. Monitor actual usage when possible.
9. Record financial limitations.

Do not bypass financial approval mechanisms.

Do not assume that an API key implies unlimited spending permission.

## 77. External Dependency Blockers

When a paid service is needed but not authorized:

- Do not activate the service.
- Prepare integration boundaries.
- Use local mocks when appropriate.
- Document required configuration.
- Continue independent work.
- Explain the blocker.
- Include the paid prerequisite in the final handoff.

Do not claim live integration verification without executing it.

## 78. Cost Verification

After authorized optimizations:

1. Verify functionality.
2. Execute relevant tests.
3. Compare resource usage.
4. Check security implications.
5. Check performance.
6. Review operational impact.
7. Measure costs when actual data is available.
8. Document estimates separately.
9. Record limitations.

Do not report savings as realized without supporting evidence.

## 79. Cost Engineering Definition of Done

For significant cost-sensitive decisions:

- Requirements understood.
- Workload assumptions recorded.
- Technical alternatives evaluated.
- Applicable pricing verified or limitations disclosed.
- Fixed and variable costs distinguished.
- Secondary charges considered.
- Growth scenarios assessed.
- Security preserved.
- Privacy preserved.
- Data integrity preserved.
- Reliability requirements respected.
- Scalability path documented.
- Financial risks assessed.
- Protected spending authorized.
- Relevant tests performed.
- Remaining uncertainty recorded.
- Human actions listed.

Do not claim an architecture is optimal without defining the evaluation criteria.

## 80. Final Reporting

Report:

1. Scope evaluated.
2. Current infrastructure.
3. Verified spending.
4. Estimated spending.
5. Cost drivers.
6. Alternatives evaluated.
7. Recommended optimizations.
8. Scalability considerations.
9. Security and reliability trade-offs.
10. Tests performed.
11. Unverified assumptions.
12. Financial risks.
13. Required human approvals.
14. Next actions.

Clearly distinguish recommendations from implemented changes.

## 81. Final Cost Engineering Principles

Optimize for total engineering value, not minimum price alone.
Protect security, privacy and data integrity.
Preserve required reliability.
Use evidence-based infrastructure sizing.
Avoid unnecessary services.
Avoid premature Kubernetes adoption.
Choose cloud providers according to actual needs.
Compare services using equivalent workloads.
Use official current pricing when available.
Separate actual spending from projections.
Document assumptions and uncertainty.
Model fixed and variable costs.
Consider growth to large user populations.
Evaluate AI and agentic inference spending.
Use bounded execution and retries.
Protect production environments.
Avoid unauthorized paid commitments.
Never assume free tiers eliminate all billing risks.
Implement suitable cost monitoring.
Distinguish alerts from hard spending limits.
Do not fabricate savings.
Respect human financial authority.
Support authorized autonomous development.
Report remaining financial risks honestly.