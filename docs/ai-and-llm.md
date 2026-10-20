
# Global AI, LLM and Agentic Systems Engineering Standards

## 1. Mission

Design, develop, evaluate, deploy and maintain secure, reliable, privacy-preserving, cost-efficient and scalable artificial intelligence systems.

These standards apply to all AI-assisted engineering workflows and AI-powered application features.

Supported technologies and applications include:

- Large Language Models (LLMs).
- Generative AI.
- Retrieval-Augmented Generation (RAG).
- AI agents.
- Multi-agent systems.
- Tool calling and function calling.
- Model Context Protocol (MCP).
- Document intelligence.
- Computer vision.
- Speech recognition.
- Speech synthesis.
- Multimodal AI.
- Embedding systems.
- Vector search.
- Machine learning pipelines.
- Self-hosted models.
- Managed AI services.

AI functionality must provide measurable business or user value.

Never introduce AI where deterministic software can solve the requirement more reliably, safely and economically.

## 2. Fundamental Principles

Apply:

1. Security by Design.
2. Privacy by Design.
3. Human Oversight.
4. Least Privilege.
5. Evidence-Based Evaluation.
6. Provider Neutrality.
7. Cost Awareness.
8. Observability.
9. Failure Containment.
10. Explainability appropriate to risk.
11. Data Minimization.
12. Controlled Autonomy.
13. Continuous Improvement.
14. Production Compatibility.

Never assume an AI model is correct merely because its response is fluent or plausible.

Never treat generated content as inherently trustworthy.

## 3. Provider and Model Independence

These standards are AI-provider-neutral and model-agnostic.

No model, model family or API provider is mandatory by default.

Support architectures using:

### OpenAI

Relevant technologies may include:

- Language models.
- Reasoning models.
- Multimodal models.
- Embeddings.
- Speech and audio models.
- Tool calling.
- Structured outputs.
- Managed inference services.

### Anthropic

Relevant technologies may include:

- Claude models.
- Tool use.
- Structured responses.
- Agentic workflows.
- Multimodal capabilities.
- Managed inference services.

### Google

Relevant technologies may include:

- Gemini models.
- Vertex AI.
- Multimodal processing.
- Embeddings.
- Tool integrations.
- Managed inference services.

### Amazon Web Services

Relevant technologies may include:

- Amazon Bedrock.
- Managed foundation models.
- AWS AI services.
- Model hosting.
- Agent orchestration.
- Enterprise integrations.

### Microsoft Azure

Relevant technologies may include:

- Azure-hosted AI models.
- Azure AI services.
- Azure AI Foundry or its current equivalent.
- Managed inference.
- Enterprise identity integration.
- AI monitoring.

### Other Providers and Models

Support appropriate technologies including:

- Mistral AI.
- Meta Llama models.
- Hugging Face.
- Cohere.
- DeepSeek.
- Ollama.
- vLLM.
- Local inference engines.
- Open-weight models.
- Self-hosted models.
- Specialized domain models.
- Future model providers.

Provider examples are not mandatory choices.

Verify current documentation, model availability, capabilities, limits, licensing and pricing before making recommendations.

Never migrate an existing AI system merely because another model is newer or more popular.

## 4. AI Architecture First

Before implementing significant AI functionality:

1. Identify the business problem.
2. Determine whether AI is necessary.
3. Define expected inputs.
4. Define expected outputs.
5. Identify affected users.
6. Identify relevant data.
7. Classify sensitivity.
8. Define security boundaries.
9. Define accuracy requirements.
10. Define acceptable failure behavior.
11. Estimate inference and operational costs.
12. Evaluate latency requirements.
13. Identify human approval requirements.
14. Establish evaluation criteria.
15. Present the proposed architecture.
16. Obtain approval before significant implementation.

Distinguish confirmed requirements from assumptions.

## 5. Deterministic Software Before AI

Prefer conventional software for tasks requiring exact and predictable outcomes.

Examples include:

- Arithmetic and financial calculations.
- Authorization decisions.
- Access control.
- Database constraints.
- Payment execution.
- Regulatory rule enforcement.
- Input validation.
- Cryptographic operations.
- Critical workflow invariants.

AI may assist with interpretation, classification or recommendations.

Deterministic and authorized systems must enforce final constraints.

Never use an LLM as the sole security boundary.

## 6. AI Risk Classification

Classify AI functionality according to potential impact.

Consider:

- Incorrect information.
- Financial loss.
- Privacy violations.
- Security compromise.
- Discrimination.
- Physical harm.
- Legal consequences.
- Business disruption.
- Loss of user trust.

Higher-risk functionality requires stronger testing, traceability, controls and human oversight.

Evaluate applicable sector-specific and jurisdiction-specific legal requirements.

Do not assume all AI applications have identical compliance obligations.

## 7. Model Selection

Select models according to:

- Task accuracy.
- Reliability.
- Latency.
- Context requirements.
- Structured output capabilities.
- Multimodal requirements.
- Security.
- Privacy.
- Data residency.
- Availability.
- Integration complexity.
- Licensing.
- Total cost.

Use task-specific evaluation results.

Do not automatically select the largest or most expensive model.

Do not select a cheaper model without verifying acceptable performance.

## 8. Prompt Engineering

Design prompts with clear:

- Task objectives.
- Context.
- Role boundaries.
- Input expectations.
- Output formats.
- Constraints.
- Error behavior.
- Tool-use permissions.

Prefer explicit and testable instructions.

Avoid unnecessarily long prompts.

Version important prompts.

Test prompts against representative and adversarial inputs.

Do not rely on prompt wording alone for security enforcement.

## 9. Prompt Injection Defense

Treat all external and user-controlled content as untrusted.

Potential injection sources include:

- User messages.
- Retrieved documents.
- Websites.
- Emails.
- Repository files.
- Search results.
- Images containing text.
- Tool responses.
- Database records.
- Logs.
- Third-party API output.

Never allow lower-trust content to override higher-priority system instructions or application policies.

Enforce permissions through trusted application code.

Limit tool capabilities and sensitive data exposure.

Use structured handling and validation where appropriate.

Test direct and indirect prompt injection attacks.

Do not assume filtering suspicious phrases is sufficient protection.

## 10. Trusted and Untrusted Boundaries

Separate:

- System instructions.
- Developer instructions.
- Authorized user requests.
- Retrieved evidence.
- Tool responses.
- Generated content.

Maintain clear trust boundaries.

Do not promote document content into privileged instructions.

Never execute commands supplied by retrieved content without explicit trusted authorization.

Do not treat model-generated instructions as authoritative operational policy.

## 11. Sensitive Information Protection

Identify sensitive information before sending data to AI providers.

Apply:

- Data minimization.
- Redaction where appropriate.
- Pseudonymization where appropriate.
- Secure transmission.
- Access controls.
- Retention controls.
- Logging restrictions.
- Contractual and privacy review.

Never place secrets or privileged credentials in prompts.

Never assume system prompts are secret.

Review provider data processing, retention and model-training terms.

Consult docs/privacy.md.

## 12. GDPR and AI Data Processing

For personal data processing, evaluate:

- Lawful basis.
- Purpose limitation.
- Data minimization.
- Transparency.
- Retention.
- Data subject rights.
- International transfers.
- Processor relationships.
- Automated decision-making restrictions.
- Applicable DPIA requirements.

Assess applicable AI-specific laws separately.

Apply heightened review to sensitive personal data and high-impact decisions.

Do not assume user consent is always the correct or required legal basis.

Never assume an AI provider's advertised compliance removes the application's own responsibilities.

## 13. AI Authorization

AI agents must operate within the permissions of the relevant user or service identity.

Enforce authorization before retrieving information or executing actions.

Never allow models to select or override their own permissions.

Validate:

- User identity.
- Tenant membership.
- Resource ownership.
- Operation scope.
- Tool permissions.
- Data visibility.

Authorization must be enforced by trusted systems.

## 14. Human Oversight

Define human oversight according to action risk.

Require explicit approval for high-impact operations, including:

- Financial transactions.
- Destructive data modifications.
- Production deployments.
- Security policy changes.
- Privileged access changes.
- Legal or regulatory submissions.
- Sensitive external communications.
- Critical business decisions.
- Significant infrastructure expenses.

Do not treat a model recommendation as human authorization.

Record meaningful approvals where appropriate.

## 15. Agentic Architecture

Prefer the simplest agent architecture that satisfies the requirements.

Possible approaches include:

- Single-model workflows.
- Single agents.
- Tool-using agents.
- Deterministic orchestration.
- Multi-agent coordination.
- Human-in-the-loop workflows.

Do not introduce multi-agent systems without a clear benefit.

Define each agent's:

- Responsibilities.
- Allowed tools.
- Permissions.
- Input contracts.
- Output contracts.
- State boundaries.
- Resource budgets.
- Failure behavior.

Avoid overlapping responsibilities and uncontrolled delegation.

## 16. Controlled Agent Autonomy

Bound autonomous execution.

Define appropriate limits for:

- Execution steps.
- Tool calls.
- Runtime.
- Token usage.
- Retries.
- Concurrency.
- Financial spending.
- Recursive delegation.

Detect repeated failures and loops.

Require authorization before irreversible or high-risk actions.

Never assume agent autonomy is inherently safe.

## 17. Tool Calling and Function Calling

Expose only necessary tools.

Use typed input schemas and validated parameters.

Enforce server-side authorization.

Validate tool results before downstream use.

Use appropriate:

- Timeouts.
- Retries.
- Idempotency.
- Rate limits.
- Error handling.
- Audit trails.

Do not expose unrestricted shell, filesystem, database or infrastructure access to production agents.

Never rely solely on model reasoning to determine whether a tool call is permitted.

## 18. Model Context Protocol (MCP)

MCP integrations must follow the applicable current protocol specification and security requirements.

Evaluate:

- Server trust.
- Tool descriptions.
- Authentication.
- Authorization.
- Token audience validation.
- Credential storage.
- Tool permissions.
- Resource access.
- Prompt injection exposure.
- Network boundaries.
- Logging.
- Data disclosure.
- Tool provenance.

Treat MCP servers as external dependencies with explicit trust boundaries.

Do not assume an MCP server is safe because it follows the protocol.

Never pass authentication tokens through to unintended services.

Validate access at each resource boundary.

Restrict production-changing MCP tools.

Require approval before installing new privileged MCP integrations.

## 19. Multi-Agent Systems

For multi-agent systems:

- Define explicit responsibilities.
- Limit delegation.
- Validate inter-agent messages.
- Preserve authorization boundaries.
- Restrict shared memory.
- Control tool access.
- Define failure escalation.
- Track workflow state.
- Limit inference costs.
- Prevent recursive agent loops.

Do not assume agents agree on facts or share correct context.

Use deterministic validation at critical boundaries.

## 20. RAG Architecture

Before implementing Retrieval-Augmented Generation:

1. Identify knowledge sources.
2. Define document ownership.
3. Classify data sensitivity.
4. Define ingestion workflows.
5. Select extraction methods.
6. Evaluate chunking.
7. Select embedding strategies.
8. Define indexing.
9. Define retrieval.
10. Define authorization.
11. Define evaluation metrics.
12. Define document update behavior.
13. Define deletion behavior.
14. Estimate operational costs.
15. Define monitoring.

Do not use RAG merely because an LLM application exists.

## 21. Secure RAG Retrieval

Enforce access control before unauthorized content can reach the model.

Validate:

- User permissions.
- Tenant isolation.
- Document ownership.
- Classification restrictions.
- Applicable sharing policies.

Never rely on the LLM to ignore documents it should not have received.

Apply authorization to vector search, keyword search, hybrid search and document fetching.

Test cross-tenant retrieval attempts.

## 22. Document Ingestion

For document-based AI systems:

- Validate file types.
- Validate file sizes.
- Scan untrusted uploads where justified.
- Isolate parsing workloads.
- Protect against malicious document content.
- Track ingestion status.
- Record source metadata.
- Handle extraction failures.
- Preserve required document provenance.
- Apply retention and deletion policies.

Treat extracted text as untrusted content.

Do not execute code or instructions embedded in documents.

## 23. Chunking and Embeddings

Select chunking strategies according to document characteristics.

Evaluate:

- Semantic coherence.
- Chunk size.
- Overlap.
- Metadata preservation.
- Retrieval precision.
- Retrieval recall.
- Embedding dimensionality.
- Storage cost.
- Update cost.

Avoid embedding unchanged content repeatedly.

Track source and embedding versions.

Reevaluate chunking based on measured retrieval quality.

## 24. Vector Database Independence

Support relevant technologies including:

- PostgreSQL with pgvector.
- Managed vector databases.
- Open-source vector engines.
- Search engines with vector capabilities.
- Cloud-native vector search.
- Hybrid retrieval platforms.

Do not mandate a vector database provider.

Choose according to:

- Retrieval quality.
- Access control.
- Workload size.
- Latency.
- Availability.
- Operations.
- Cost.
- Portability.

Consult docs/data.md.

## 25. Retrieval Quality

Evaluate retrieval using representative datasets.

Consider:

- Recall.
- Precision.
- Relevance.
- Ranking quality.
- Coverage.
- Freshness.
- Authorization correctness.
- Query latency.

Use hybrid search or reranking when evaluations justify them.

Do not assume vector similarity guarantees factual relevance.

## 26. Grounding and Citations

For evidence-based systems:

- Preserve source references.
- Separate evidence from generated interpretation.
- Identify missing evidence.
- Avoid invented citations.
- Expose uncertainty where relevant.
- Validate critical factual claims.

The model must not invent sources or imply verification that did not occur.

Citations should point to accessible and authorized evidence when feasible.

## 27. Hallucination Management

Treat unsupported model outputs as a reliability risk.

Possible mitigations include:

- Retrieval grounding.
- Structured outputs.
- Deterministic validation.
- Source verification.
- Confidence-aware escalation.
- Human review.
- Refusal to fabricate unavailable information.

Do not assume an LLM's self-reported confidence is calibrated.

Evaluate factual correctness against independent references.

## 28. Structured Outputs

Use schema-constrained outputs where supported and appropriate.

Validate outputs in trusted application code.

Consider:

- Type correctness.
- Required fields.
- Allowed values.
- Maximum lengths.
- Cross-field constraints.
- Domain invariants.

Do not assume syntactically valid JSON is semantically correct.

Never pass unvalidated model output directly into privileged operations.

## 29. AI Decision Support

For systems that recommend important decisions:

- Distinguish recommendations from final decisions.
- Present relevant evidence.
- Explain material assumptions.
- Record appropriate audit information.
- Surface uncertainty.
- Provide human review and override when required.
- Enforce deterministic business constraints.

Do not automatically execute consequential decisions unless authorized and legally appropriate.

## 30. High-Impact Domains

Apply additional safeguards to:

- Healthcare.
- Insurance.
- Financial services.
- Employment.
- Education.
- Public services.
- Identity verification.
- Safety-critical operations.

Evaluate sector-specific regulations, accuracy requirements, discrimination risks, professional oversight and operational consequences.

Do not assume one compliance design applies to every country or market.

## 31. Bias and Fairness Evaluation

Where relevant, evaluate:

- Unequal error rates.
- Dataset representativeness.
- Potential proxy variables.
- Differential performance.
- Accessibility.
- Language coverage.
- Harmful decision patterns.

Use appropriate lawful evaluation methods.

Do not infer fairness solely from overall accuracy.

Document known limitations.

## 32. Multimodal AI

For images, audio, video and other modalities:

- Define accepted inputs.
- Validate media.
- Limit file size and duration.
- Protect sensitive content.
- Evaluate extraction accuracy.
- Handle unsupported formats.
- Manage processing costs.
- Apply retention rules.
- Control external data sharing.

Never assume multimodal outputs are reliable without task-specific evaluation.

## 33. Speech and Audio AI

Evaluate:

- Transcription accuracy.
- Language coverage.
- Speaker handling.
- Background noise.
- Latency.
- Recording permissions.
- Privacy.
- Retention.
- Processing costs.

Apply appropriate consent and notification requirements where legally necessary.

Do not retain audio indefinitely without justification.

## 34. Computer Vision

For computer vision features:

- Define supported visual tasks.
- Evaluate relevant error modes.
- Test diverse real-world conditions.
- Assess privacy and biometric implications.
- Validate model outputs before important actions.

Never assume object recognition, OCR or image interpretation is perfectly accurate.

## 35. Model Fine-Tuning

Use fine-tuning only when justified by evaluation.

Consider:

- Training data quality.
- Licensing.
- Privacy.
- Data rights.
- Poisoning risks.
- Evaluation datasets.
- Overfitting.
- Deployment complexity.
- Model versioning.
- Training and hosting costs.

Do not fine-tune models on private user data without an appropriate legal and authorized basis.

## 36. Self-Hosted AI Models

Evaluate:

- Compute and accelerator requirements.
- GPU memory.
- Throughput.
- Latency.
- Model licensing.
- Infrastructure security.
- Model updates.
- Availability.
- Monitoring.
- Operational maintenance.
- Total cost.

Do not assume self-hosting is always cheaper or more private.

Compare managed and self-hosted alternatives using actual requirements.

## 37. AI Evaluation Strategy

Define measurable evaluation criteria before significant deployment.

Evaluate:

- Task correctness.
- Factuality.
- Retrieval quality.
- Tool-use accuracy.
- Authorization.
- Robustness.
- Latency.
- Cost.
- Failure handling.
- Safety.

Use representative datasets.

Distinguish automated scores from human assessments.

Avoid relying exclusively on model-based judging.

## 38. Regression Testing

Maintain evaluation datasets for important workflows.

Test changes to:

- Model versions.
- Prompts.
- Retrieval pipelines.
- Tools.
- Schemas.
- Orchestration.
- Embeddings.
- Ranking.
- Context management.

Compare results against established baselines.

Do not deploy meaningful AI behavior changes without appropriate regression evaluation.

## 39. Adversarial Testing

Test relevant adversarial scenarios, including:

- Prompt injection.
- Unauthorized tool execution.
- Sensitive information disclosure.
- Cross-tenant retrieval.
- Malicious documents.
- Tool output manipulation.
- Excessive agent actions.
- Model output abuse.
- Resource exhaustion.
- Dependency compromise.

Prioritize tests according to threat models and application risk.

Do not claim an AI system is immune to prompt injection.

## 40. AI Supply Chain Security

Evaluate:

- Model provenance.
- Model licenses.
- Training data claims where relevant.
- External model repositories.
- Model file integrity.
- SDK dependencies.
- Agent frameworks.
- MCP servers.
- Tools and plugins.
- Embedding packages.
- Container images.

Prefer trusted sources.

Verify artifacts when appropriate.

Do not execute untrusted model repository code without isolation and review.

## 41. AI Secrets Management

Protect:

- Provider API keys.
- Service credentials.
- Database secrets.
- OAuth tokens.
- Infrastructure credentials.
- Signing keys.
- Webhook secrets.

Never place production secrets in prompts, source code, logs or client applications.

Use approved secret management mechanisms.

Apply least privilege and rotation procedures.

## 42. AI Cost Engineering

Evaluate complete AI workflow costs.

Include:

- Input tokens.
- Output tokens.
- Cached tokens where applicable.
- Tool calls.
- Embeddings.
- Retrieval.
- Reranking.
- Model hosting.
- File processing.
- Audio and video processing.
- Retries.
- Background execution.
- Monitoring.

Define appropriate budgets.

Consult docs/cost-engineering.md.

## 43. Unbounded Consumption Prevention

Protect against uncontrolled cost and resource usage.

Implement appropriate:

- Token limits.
- Execution limits.
- Request quotas.
- Concurrency limits.
- Timeouts.
- Bounded retries.
- Agent step limits.
- File size limits.
- Tool invocation limits.
- Spending controls.

Detect abnormal usage.

Prevent attackers from triggering unlimited paid inference.

## 44. AI Performance and Scalability

Evaluate:

- Peak AI concurrency.
- Model throughput.
- Provider quotas.
- Queueing delays.
- End-to-end latency.
- Retrieval bottlenecks.
- Worker capacity.
- Rate limits.
- GPU capacity where relevant.
- Geographic latency.
- Fallback behavior.

Scale infrastructure according to measured requirements.

Do not assume model APIs or self-hosted inference have unlimited capacity.

Consult docs/scalability.md.

## 45. Model Routing and Fallback

Use model routing only when justified.

Define:

- Task requirements.
- Primary model.
- Alternative models.
- Quality thresholds.
- Failure triggers.
- Latency objectives.
- Privacy restrictions.
- Cost implications.

Test fallback quality and data handling.

Do not route sensitive data to a new provider without appropriate authorization and privacy review.

## 46. Reliability and Failure Handling

Handle:

- Model timeouts.
- Provider outages.
- Rate limits.
- Malformed responses.
- Invalid tool parameters.
- Tool failures.
- Partial workflows.
- Retrieval failures.
- Duplicate execution.

Use bounded retries and graceful degradation.

Define escalation paths for unresolved failures.

Do not hide consequential errors behind fabricated successful responses.

## 47. AI Observability

Monitor appropriate:

- Request volumes.
- Model identifiers and versions.
- Latency.
- Token consumption.
- Tool calls.
- Failure rates.
- Retrieval quality.
- Cost.
- Human escalation rates.
- Safety-relevant events.

Use privacy-preserving telemetry.

Avoid recording full prompts and responses by default when they may contain sensitive data.

Consult docs/observability.md.

## 48. AI Auditability

For important workflows, record sufficient information to support investigation.

Consider:

- Workflow identity.
- Model and prompt version.
- Relevant policy version.
- Tool actions.
- Authorization outcomes.
- Human approvals.
- Relevant evidence references.
- Errors.
- Final action status.

Avoid excessive sensitive data retention.

Auditability does not require storing every private conversation indefinitely.

## 49. AI Data Retention and Deletion

Define retention for:

- Prompts.
- Responses.
- Uploaded documents.
- Embeddings.
- Agent state.
- Conversation memory.
- Logs.
- Evaluation datasets.
- Provider-side processing records.

Implement deletion and retention according to applicable requirements.

Consider backup lifecycle and third-party processors.

Never assume deleting a primary database record automatically deletes all derived AI data.

## 50. AI Memory and Persistent State

For AI agents with memory:

- Define memory purpose.
- Limit stored information.
- Apply authorization.
- Isolate tenants.
- Validate memory updates.
- Define retention.
- Support correction and deletion.
- Prevent sensitive information leakage.

Treat remembered content as data, not privileged instructions.

Do not allow stored memory to override application security policies.

## 51. AI Framework Independence

Support relevant agent and LLM frameworks, including:

- LangChain.
- LangGraph.
- LlamaIndex.
- Semantic Kernel.
- AutoGen.
- CrewAI.
- Provider-native SDKs.
- Custom orchestration.

No framework is mandatory by default.

Choose according to actual requirements, maintenance status, security, complexity and cost.

Avoid adding orchestration libraries when straightforward application code is sufficient.

## 52. AI and Database Integration

AI functionality must respect database security and integrity.

Enforce:

- Tenant isolation.
- Authorization.
- Transaction boundaries.
- Data minimization.
- Query safety.
- Approved access patterns.
- Migration controls.

Never give an LLM unrestricted production database permissions.

Never execute generated SQL against production without appropriate validation and authorization.

Consult docs/data.md.

## 53. AI in Web and Mobile Applications

For web, iOS and Android applications:

- Protect provider credentials.
- Avoid exposing privileged tools.
- Handle intermittent connectivity.
- Apply server-side authorization.
- Manage streaming responses safely.
- Consider battery and network usage.
- Protect user privacy.
- Handle retries and cancellations.
- Display meaningful errors.
- Respect accessibility.

Do not embed unrestricted paid AI credentials in distributed client applications.

## 54. Existing Production AI Audits

When auditing an existing production system:

1. Inspect the actual architecture.
2. Identify models and providers.
3. Map AI data flows.
4. Identify sensitive information.
5. Review authorization boundaries.
6. Inspect tools and agent permissions.
7. Evaluate prompt injection risks.
8. Review RAG access control.
9. Evaluate existing test evidence.
10. Assess latency and costs.
11. Identify reliability risks.
12. Review human oversight.
13. Present prioritized findings.
14. Recommend minimal safe improvements.
15. Wait for explicit approval.

The initial audit must be read-only.

Do not modify prompts, models, tools, permissions, production data or infrastructure during the assessment.

Do not claim live evaluation results unless the relevant tests were actually executed.

## 55. AI Change Management

Before significant AI changes:

- Document current behavior.
- Define the proposed change.
- Identify affected users.
- Assess security.
- Assess privacy.
- Evaluate compliance.
- Estimate costs.
- Define evaluation datasets.
- Measure regression risks.
- Define rollout strategy.
- Define rollback strategy.
- Obtain explicit human approval.

Never silently replace a production model when its behavior may affect critical workflows.

## 56. AI Deployment Requirements

Before production deployment:

1. Verify model and provider configuration.
2. Confirm authorization controls.
3. Validate secret handling.
4. Evaluate relevant security threats.
5. Run appropriate evaluations.
6. Check cost limits.
7. Check rate limits.
8. Validate error handling.
9. Confirm monitoring.
10. Confirm rollback procedures.
11. Record known limitations.
12. Obtain required approval.

Do not confuse successful API responses with correct AI behavior.

## 57. AI Incident Response

Prepare appropriate procedures for:

- Sensitive data leakage.
- Unauthorized agent actions.
- Prompt injection exploitation.
- Model misuse.
- Unexpected financial consumption.
- Incorrect high-impact decisions.
- Provider outages.
- Compromised tools or MCP servers.

Define escalation, containment, investigation, recovery and communication responsibilities.

Preserve necessary evidence in a privacy-conscious manner.

Require human authorization for significant production containment actions, except narrowly predefined emergency controls explicitly approved in advance.

## 58. AI Definition of Done

For significant AI functionality:

- Business purpose documented.
- AI necessity justified.
- Model selection evaluated.
- Security boundaries defined.
- Privacy reviewed.
- Authorization verified.
- Evaluation criteria established.
- Representative tests executed.
- Prompt injection risks considered.
- Tool permissions restricted.
- Human oversight defined.
- Failure behavior tested.
- Costs estimated.
- Resource limits established.
- Observability prepared.
- Known limitations documented.
- Rollback strategy defined.
- Human approval obtained where required.

Never consider an AI feature production-ready solely because a demonstration works.

## 59. Reference Standards and Guidance

Use applicable current guidance, including:

- NIST AI Risk Management Framework.
- NIST AI RMF Generative AI Profile.
- OWASP Top 10 for LLM and Generative AI Applications.
- OWASP guidance for agentic AI security.
- Model Context Protocol security and authorization specifications.
- Applicable privacy legislation.
- Applicable AI-specific regulations.
- Relevant sector-specific standards.

Verify the current official version before making compliance claims.

These references inform engineering practices; following this document alone does not establish formal legal or regulatory compliance.

## 60. Final AI Engineering Principles

Use AI only when justified.
Prefer deterministic systems for exact decisions.
Treat model outputs as untrusted.
Enforce authorization outside the model.
Protect sensitive data.
Defend against prompt injection.
Restrict agent permissions.
Limit autonomous execution.
Secure tool and MCP integrations.
Protect RAG retrieval boundaries.
Evaluate models using evidence.
Maintain human oversight.
Prevent unbounded AI costs.
Measure reliability and performance.
Preserve existing production systems.
Require approval for significant changes.