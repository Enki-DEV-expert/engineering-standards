
# Global Mobile and Web Application Engineering Standards

## 1. Mission

Design, develop, test, deploy and maintain secure, accessible, intuitive, performant, scalable and maintainable web and mobile applications.

These standards apply to applications created, reviewed or maintained by AI coding agents, including Claude Code, OpenAI Codex and other AI-assisted engineering tools.

Supported platforms include:

- Web browsers.
- Progressive Web Apps (PWA).
- Native iOS applications.
- Native Android applications.
- Cross-platform mobile applications.
- Hybrid applications.
- Responsive web applications.
- Mobile web applications.
- SaaS client applications.
- AI-powered user interfaces.
- Realtime and offline-capable applications.

These requirements apply to new applications and existing production systems.

Never assume the application framework before inspecting the project.

## 2. Fundamental Principles

Apply:

1. User-centered design.
2. Security by Design.
3. Privacy by Design.
4. Accessibility.
5. Simplicity.
6. Consistency.
7. Performance.
8. Reliability.
9. Maintainability.
10. Cross-platform compatibility.
11. Cost awareness.
12. Progressive enhancement.
13. Backward compatibility.
14. Human approval for significant changes.

Prioritize understandable user journeys over decorative complexity.

A visually attractive interface is not necessarily intuitive.

Validate usability using realistic tasks.

## 3. Technology Independence

These standards are language-independent, framework-independent and provider-neutral.

Support technologies including:

### Web

- HTML.
- CSS.
- JavaScript.
- TypeScript.
- React.
- Next.js.
- Vue.
- Nuxt.
- Angular.
- Svelte.
- SvelteKit.
- Astro.
- ASP.NET.
- PHP-based frameworks.
- Server-rendered applications.
- Static applications.
- Web Components.

### iOS

- Swift.
- SwiftUI.
- UIKit.
- Objective-C.
- Native Apple frameworks.

### Android

- Kotlin.
- Java.
- Jetpack Compose.
- Android Views.
- Native Android frameworks.

### Cross-Platform

- Flutter.
- Dart.
- React Native.
- Expo.
- Kotlin Multiplatform.
- Capacitor.
- Ionic.
- .NET MAUI.
- Other maintained cross-platform frameworks.

No technology is mandatory by default.

Preserve existing project conventions when appropriate.

Avoid unnecessary rewrites to adopt newer frameworks.

## 4. Platform Assessment First

Before significant implementation:

1. Inspect the existing repository.
2. Identify supported platforms.
3. Identify languages and frameworks.
4. Identify application architecture.
5. Review navigation patterns.
6. Review existing design systems.
7. Identify authentication mechanisms.
8. Review data storage.
9. Identify API dependencies.
10. Review platform permissions.
11. Identify performance constraints.
12. Review accessibility.
13. Review existing tests.
14. Identify release and compatibility requirements.
15. Present findings and proposed changes.

Existing production application assessments must begin read-only.

## 5. User Experience First

Design user experiences around actual tasks.

Prioritize:

- Clear navigation.
- Predictable interactions.
- Understandable terminology.
- Visible system status.
- Helpful feedback.
- Error prevention.
- Easy recovery.
- Minimal unnecessary steps.
- Consistent interface behavior.

Avoid interfaces that require users to understand the internal technical architecture.

Do not assume developers' familiarity reflects end-user usability.

## 6. Information Architecture

Organize information according to user needs.

Evaluate:

- Navigation hierarchy.
- Content grouping.
- Feature discoverability.
- Search.
- Filtering.
- Progressive disclosure.
- Contextual actions.
- Clear labels.

Avoid excessively nested navigation.

Do not expose every advanced feature on the primary screen.

Prioritize frequently used workflows.

## 7. Task-Oriented Interface Design

For significant interfaces:

1. Identify primary users.
2. Identify their goals.
3. Map critical journeys.
4. Identify unnecessary steps.
5. Define expected feedback.
6. Define error states.
7. Define recovery paths.
8. Validate navigation.
9. Test representative scenarios.

Prefer task-oriented screens over interfaces organized only around database entities.

## 8. Visual Hierarchy

Use clear visual hierarchy.

Evaluate:

- Typography.
- Spacing.
- Alignment.
- Contrast.
- Grouping.
- Primary actions.
- Secondary actions.
- Content density.
- Responsive behavior.

Avoid excessive visual decoration.

Do not use color as the only way to communicate meaning.

## 9. Design Systems

Use consistent design tokens and reusable components where justified.

Consider:

- Typography scales.
- Spacing scales.
- Color systems.
- Component states.
- Border radii.
- Icon usage.
- Layout conventions.
- Responsive breakpoints.
- Accessibility states.

Preserve existing brand identity unless redesign is explicitly approved.

Avoid adding competing component libraries without justification.

## 10. Consistency Across Platforms

Maintain consistent product concepts across supported platforms.

Respect platform-specific interaction conventions.

Do not force identical navigation patterns where native platform behavior differs.

Ensure that important features remain understandable regardless of platform.

Document intentional platform differences.

## 11. Responsive Design

Design responsive layouts for relevant screen sizes.

Evaluate:

- Small mobile screens.
- Large phones.
- Tablets.
- Laptops.
- Desktop monitors.
- Orientation changes.
- Split-screen modes.
- Dynamic text sizes.

Avoid fixed layouts that break under different content sizes.

Test realistic viewport configurations.

## 12. Accessibility

Apply relevant accessibility requirements.

Consider:

- Semantic structure.
- Accessible names.
- Keyboard navigation.
- Screen readers.
- Focus management.
- Color contrast.
- Touch target size.
- Dynamic text.
- Error identification.
- Motion sensitivity.
- Accessible media.
- Predictable interaction.

Use applicable WCAG guidance and platform accessibility standards.

Do not claim full accessibility compliance based only on automated tests.

## 13. Internationalization

Design for multiple languages when product requirements justify it.

Consider:

- Translation systems.
- Text expansion.
- Date formats.
- Number formats.
- Currency formats.
- Time zones.
- Right-to-left languages.
- Locale-specific content.
- Accessibility.

Avoid hardcoded user-facing strings when localization is required.

Do not assume all users share the same language or geographic conventions.

## 14. Forms and Input Design

Design forms to minimize user errors.

Apply:

- Clear labels.
- Appropriate input types.
- Helpful validation.
- Explicit required fields.
- Accessible error messages.
- Input preservation.
- Submission feedback.
- Duplicate submission protection.

Validate critical inputs on trusted servers.

Never rely exclusively on client-side validation.

## 15. Loading and Feedback States

Every significant asynchronous operation should have appropriate feedback.

Consider:

- Loading.
- Success.
- Failure.
- Empty states.
- Offline states.
- Partial completion.
- Retry availability.
- Cancellation.

Avoid interfaces that appear frozen during operations.

Do not show success before the operation is actually confirmed.

## 16. Error Recovery

Provide understandable error messages.

Explain what happened and what the user can do next when appropriate.

Avoid revealing internal secrets or sensitive implementation details.

Preserve recoverable user input.

Use safe retries.

Do not retry financial or destructive operations without appropriate idempotency controls.

## 17. Authentication UX

Design secure and understandable authentication flows.

Consider:

- Registration.
- Login.
- Password recovery.
- Session expiration.
- MFA.
- Passkeys where appropriate.
- Device changes.
- Account recovery.
- Logout.

Avoid confusing authentication errors.

Never weaken security merely to reduce friction.

## 18. Authorization and Frontend Boundaries

Frontend access controls improve usability but are not sufficient security boundaries.

Enforce authorization through trusted backend systems.

Validate:

- User identity.
- Roles.
- Permissions.
- Tenant membership.
- Resource ownership.

Never assume hidden buttons prevent unauthorized operations.

Consult docs/security.md.

## 19. Session Management

Use appropriate session management.

Consider:

- Token storage.
- Token rotation.
- Session expiration.
- Logout invalidation.
- Multiple devices.
- Device loss.
- Session revocation.
- Network failure.

Avoid exposing authentication tokens to unnecessary application components.

Follow platform-appropriate secure storage practices.

## 20. Secure Client Storage

Classify client-side information before storage.

Evaluate:

- Browser storage.
- Cookies.
- IndexedDB.
- iOS Keychain.
- Android Keystore.
- Encrypted local databases.
- Application caches.

Use appropriate protections for credentials and sensitive information.

Never embed privileged server credentials in distributed client applications.

Do not assume local encryption protects against every compromised-device scenario.

## 21. Web Application Security

Evaluate:

- Cross-site scripting.
- Cross-site request forgery.
- Injection.
- Broken access control.
- Session fixation.
- Insecure redirects.
- Clickjacking.
- Unsafe dependency loading.
- Insecure content handling.
- Sensitive data exposure.

Apply suitable controls such as:

- Output encoding.
- Input validation.
- Secure cookie settings.
- Content Security Policy.
- CSRF defenses where applicable.
- Trusted API authorization.

Do not treat frontend validation as a substitute for server-side validation.

## 22. Browser Security Headers

Evaluate appropriate browser security headers.

Consider:

- Content-Security-Policy.
- Strict-Transport-Security.
- X-Content-Type-Options.
- Referrer-Policy.
- Permissions-Policy.
- Frame embedding restrictions.

Configure headers according to application architecture.

Validate compatibility before enforcing restrictive policies in production.

## 23. Cross-Origin Resource Sharing

Configure CORS according to actual requirements.

Avoid unrestricted origins when credentials or sensitive resources are involved.

Do not treat CORS as an authentication or authorization mechanism.

Review allowed methods, headers and origins.

Test browser behavior.

## 24. Mobile Application Security

Evaluate:

- Secure local storage.
- Transport security.
- Deep links.
- App permissions.
- Embedded secrets.
- WebViews.
- Third-party SDKs.
- Sensitive screenshots.
- Application backups.
- Device integrity signals where relevant.

Use platform-supported security mechanisms.

Do not assume mobile applications are trusted clients.

Consult docs/security.md.

## 25. iOS Security

For native iOS applications, evaluate:

- Keychain usage.
- App Transport Security.
- Entitlements.
- App Groups.
- Universal Links.
- Secure file handling.
- Privacy declarations.
- Background access.
- App permissions.

Use least privilege.

Never include unrestricted production API secrets in distributed application binaries.

## 26. Android Security

For native Android applications, evaluate:

- Android Keystore.
- Network Security Configuration.
- Component exports.
- Intent handling.
- Deep links.
- Permission models.
- Secure storage.
- Backup behavior.
- WebView security.
- Third-party SDKs.

Restrict exported components appropriately.

Never assume application package contents are secret.

## 27. API Integration

Use well-defined client and server contracts.

Consider:

- Authentication.
- Authorization.
- Request validation.
- Response validation.
- Versioning.
- Timeouts.
- Retries.
- Idempotency.
- Pagination.
- Error handling.

Avoid unnecessary duplicate requests.

Do not expose privileged server-side operations directly to untrusted clients.

## 28. Network Reliability

Design for unreliable connectivity.

Consider:

- High latency.
- Packet loss.
- Connection interruption.
- Slow networks.
- Network switching.
- Offline states.
- Retry behavior.
- Duplicate submissions.

Use bounded retries and appropriate timeouts.

Avoid infinite polling and uncontrolled retries.

## 29. Offline-First and Offline-Capable Design

Use offline capabilities when product requirements justify them.

Define:

- Which features work offline.
- What data is stored locally.
- How long data remains available.
- What operations are queued.
- What happens on reconnect.
- How conflicts are resolved.
- How permissions are revalidated.

Do not assume every application needs complete offline functionality.

## 30. Data Synchronization

Define reliable synchronization between client and server.

Consider:

- Version tracking.
- Conflict detection.
- Optimistic updates.
- Idempotency.
- Network interruptions.
- Partial synchronization.
- Data deletion.
- Authorization changes.

Never overwrite newer authoritative data without an appropriate conflict strategy.

Do not assume client timestamps are authoritative.

## 31. Realtime User Interfaces

For realtime applications, evaluate:

- Connection lifecycle.
- Subscription authorization.
- Duplicate events.
- Event ordering.
- Reconnection.
- Offline recovery.
- Background restrictions.
- UI consistency.
- Resource consumption.

Do not assume realtime transport guarantees correct business state.

Validate events before applying important state transitions.

## 32. Web Performance

Evaluate:

- Core Web Vitals.
- Largest Contentful Paint.
- Interaction to Next Paint.
- Cumulative Layout Shift.
- Time to First Byte.
- JavaScript execution.
- Rendering.
- Network requests.
- Asset sizes.
- Caching.

Measure using representative conditions.

Avoid introducing large dependencies without performance justification.

## 33. Frontend Bundle Optimization

Evaluate:

- Code splitting.
- Lazy loading.
- Tree shaking.
- Unused dependencies.
- JavaScript bundle size.
- CSS delivery.
- Asset loading.
- Third-party scripts.

Optimize based on actual measurements.

Do not make architectural rewrites solely to improve theoretical bundle size.

## 34. Image Optimization

Use appropriate image handling.

Consider:

- Resolution.
- Compression.
- Responsive variants.
- Modern formats.
- Lazy loading.
- Placeholder behavior.
- Caching.
- CDN delivery.
- Accessibility descriptions.

Avoid transferring excessively large images to mobile devices.

Preserve adequate visual quality.

## 35. Video and Audio Optimization

For media-rich applications, evaluate:

- Streaming.
- Adaptive bitrates.
- Compression.
- Playback startup time.
- Buffering.
- Device capabilities.
- Network usage.
- Battery impact.
- Accessibility captions.
- Media processing costs.

Do not automatically load large media assets when they are not needed.

## 36. iOS Performance

Evaluate:

- Cold start.
- Warm start.
- Main-thread responsiveness.
- Memory usage.
- Battery consumption.
- Network traffic.
- Background execution.
- Animation performance.
- Scrolling performance.
- Crash rates.

Use appropriate Apple profiling tools.

Validate performance on representative supported devices.

## 37. Android Performance

Evaluate:

- Cold start.
- Warm start.
- ANR rates.
- UI thread performance.
- Memory usage.
- Battery consumption.
- Background restrictions.
- Rendering performance.
- Network efficiency.
- Crash rates.

Use appropriate Android profiling tools.

Test representative device capabilities and supported OS versions.

## 38. Battery and Resource Efficiency

For mobile applications:

- Avoid unnecessary polling.
- Limit background work.
- Reduce redundant network requests.
- Use appropriate scheduling APIs.
- Optimize media processing.
- Manage location updates.
- Minimize unnecessary wakeups.

Do not trade significant battery consumption for negligible interface improvements.

## 39. Memory Management

Evaluate:

- Memory leaks.
- Unreleased resources.
- Image caches.
- Large object retention.
- Component lifecycle.
- Background memory usage.
- Navigation state.

Use profiling tools when appropriate.

Do not claim memory efficiency without evidence.

## 40. State Management

Use state management appropriate to project complexity.

Consider:

- Local component state.
- Shared UI state.
- Server state.
- Persistent state.
- Cache state.
- Authentication state.

Avoid unnecessary state duplication.

Do not introduce complex state management libraries without justification.

Maintain clear ownership of authoritative data.

## 41. Navigation Architecture

Design navigation according to user tasks.

Evaluate:

- Clear hierarchy.
- Predictable back navigation.
- Deep links.
- Tab navigation.
- Route protection.
- Authentication transitions.
- State restoration.

Respect platform-specific navigation conventions.

Avoid surprising navigation behavior.

## 42. Deep Linking

Validate deep links and universal links.

Consider:

- Input validation.
- Authentication state.
- Authorization.
- Expired resources.
- Unsupported routes.
- External origin handling.

Never allow deep links to bypass access controls.

## 43. Notifications

For notifications, evaluate:

- User preferences.
- Permission requests.
- Delivery reliability.
- Duplicate notifications.
- Deep-link behavior.
- Sensitive content exposure.
- Background handling.
- Provider costs.

Avoid excessive or intrusive notifications.

Do not include unnecessary sensitive information in lock-screen notifications.

## 44. Mobile Permissions

Request only permissions needed for actual functionality.

Examples:

- Camera.
- Microphone.
- Location.
- Photos.
- Notifications.
- Bluetooth.
- Contacts.

Explain permission purpose clearly.

Handle denial gracefully.

Do not request broad permissions solely for implementation convenience.

## 45. Privacy and Platform Disclosures

Evaluate applicable:

- Privacy notices.
- App Store privacy disclosures.
- Google Play data safety disclosures.
- Tracking permissions.
- Consent requirements.
- Data retention.
- Account deletion requirements.

Verify current platform policies before release.

Do not assume approval by an app store establishes legal compliance.

Consult docs/privacy.md.

## 46. Third-Party SDK Governance

Before adding client SDKs, evaluate:

- Necessity.
- Data collection.
- Privacy impact.
- Security.
- Maintenance status.
- Binary size.
- Performance.
- Battery usage.
- Network consumption.
- Cost.

Avoid unnecessary analytics, advertising or tracking SDKs.

Review SDK data processing and platform disclosure requirements.

## 47. Web Browser Compatibility

Define supported browsers according to product requirements.

Test relevant versions of:

- Safari.
- Chrome.
- Firefox.
- Edge.
- Mobile browsers.

Use progressive enhancement where appropriate.

Avoid relying on experimental browser capabilities without fallback strategies.

## 48. iOS Compatibility

Define supported iOS versions and devices.

Evaluate:

- API availability.
- Platform deprecations.
- Device capabilities.
- Screen sizes.
- Background execution.
- Privacy permissions.
- Accessibility.

Do not automatically increase the minimum supported iOS version without approval and impact analysis.

## 49. Android Compatibility

Define supported Android versions and device classes.

Evaluate:

- API levels.
- Permission changes.
- Background restrictions.
- Device diversity.
- Screen sizes.
- Manufacturer differences.
- Platform deprecations.

Do not automatically increase the minimum supported Android version without approval.

## 50. Progressive Web Applications

For PWAs, evaluate:

- Service workers.
- Cache strategies.
- Offline behavior.
- Installability.
- Manifest configuration.
- Update mechanisms.
- Push notifications where supported.
- Platform differences.
- Storage limits.

Do not assume PWA capabilities are identical across browsers and operating systems.

## 51. Cross-Platform Architecture

For multiplatform products, identify:

- Shared business logic.
- Platform-specific capabilities.
- Shared data contracts.
- Native integrations.
- Design consistency.
- Testing requirements.
- Release independence.

Share code when it improves maintainability.

Do not force complete code sharing when platform-specific solutions provide better quality.

## 52. Web and Mobile AI Features

For AI-powered interfaces, consider:

- Response latency.
- Streaming behavior.
- Cancellation.
- Error handling.
- Human review.
- Source presentation.
- User trust.
- Privacy.
- Cost.
- Authorization.

Clearly distinguish AI-generated recommendations from verified facts where relevant.

Never expose privileged AI provider credentials in client applications.

Consult docs/ai-and-llm.md.

## 53. Authentication and Backend Integration

Evaluate secure integration with existing backend and identity providers.

Possible providers include:

- Supabase.
- Firebase.
- Custom authentication systems.
- Enterprise identity providers.
- Cloud-managed identity systems.

No authentication provider is mandatory.

Enforce authorization in trusted systems.

Do not migrate existing authentication providers without evidence and approval.

## 54. Multi-Tenant Client Applications

For multi-tenant applications:

- Maintain clear tenant context.
- Revalidate tenant access.
- Isolate cached data.
- Protect local storage.
- Handle tenant switching safely.
- Prevent stale cross-tenant UI state.
- Validate backend authorization.

Never treat UI-based tenant selection as sufficient access control.

## 55. Error and Crash Monitoring

Monitor relevant:

- Frontend exceptions.
- Mobile crashes.
- ANRs.
- API failures.
- Rendering errors.
- Navigation failures.
- Authentication errors.
- Network failures.

Use privacy-preserving telemetry.

Avoid logging sensitive form data or authentication credentials.

Consult docs/observability.md.

## 56. Web Testing

Use appropriate tests for:

- UI components.
- Navigation.
- Forms.
- Authentication.
- Authorization.
- API integration.
- Accessibility.
- Responsive behavior.
- Browser compatibility.
- Critical user journeys.

Use existing project test frameworks where suitable.

Do not assume screenshot comparison alone proves functional correctness.

## 57. iOS Testing

Evaluate:

- Unit tests.
- UI tests.
- Integration tests.
- Lifecycle tests.
- Accessibility checks.
- Offline behavior.
- Network interruptions.
- Permission handling.
- Release builds.

Use appropriate Apple tooling.

Do not claim iOS compatibility without testing supported environments.

## 58. Android Testing

Evaluate:

- Unit tests.
- UI tests.
- Instrumented tests.
- Integration tests.
- Lifecycle tests.
- Accessibility.
- Device compatibility.
- Network interruptions.
- Permission handling.
- Release builds.

Use appropriate Android tooling.

Do not claim Android compatibility based only on emulator testing when real-device behavior is material.

## 59. Cross-Platform Testing

For applications targeting multiple platforms:

- Verify shared functionality.
- Test native integrations.
- Validate platform-specific UI.
- Test navigation.
- Test permissions.
- Evaluate startup performance.
- Test offline behavior.
- Verify release builds.

Do not assume successful tests on one platform prove correctness on another.

## 60. Release Engineering

Define controlled release processes.

Consider:

- Versioning.
- Build reproducibility.
- Signing.
- Environment configuration.
- Feature flags.
- Rollback strategies.
- Release notes.
- Compatibility.
- Crash monitoring.
- User impact.

Never distribute production signing keys through repositories or AI prompts.

## 61. App Store Releases

Before submitting mobile applications:

1. Verify release builds.
2. Review permissions.
3. Review privacy disclosures.
4. Validate signing.
5. Review compatibility.
6. Check critical functionality.
7. Review release notes.
8. Verify applicable store requirements.
9. Obtain required approval.

Do not submit applications automatically without explicit authorization.

## 62. Mobile Version Compatibility

Assume some users will remain on older application versions.

Preserve compatible APIs where required.

Plan backend changes accordingly.

Use staged deprecation.

Do not assume instant upgrades.

Test server behavior with supported older clients.

## 63. Feature Flags

Use feature flags where they provide controlled rollout or operational safety.

Consider:

- Gradual exposure.
- Tenant-specific enablement.
- Emergency rollback.
- Experimentation.
- Compatibility.
- Security.

Do not treat client-side flags as security controls.

Remove obsolete flags through approved maintenance.

## 64. Application Security Review

Before important releases, review:

- Authentication.
- Authorization.
- Secure storage.
- Transport security.
- External SDKs.
- Sensitive data handling.
- API exposure.
- Platform permissions.
- Dependency vulnerabilities.
- Error handling.

Apply controls according to actual application risk.

Consult docs/security.md.

## 65. Cost-Aware Client Engineering

Evaluate costs caused by client behavior.

Consider:

- API requests.
- Database reads.
- Realtime connections.
- Cloud storage.
- Media delivery.
- AI inference.
- Push notifications.
- Analytics events.
- Background synchronization.
- Excessive polling.

Avoid unnecessary requests and resource consumption.

Consult docs/cost-engineering.md.

## 66. Existing Production Application Audits

For existing web and mobile applications:

1. Inspect the actual repository.
2. Identify platforms and frameworks.
3. Review existing navigation.
4. Evaluate critical user journeys.
5. Identify usability problems.
6. Assess accessibility.
7. Review authentication and authorization.
8. Assess performance.
9. Evaluate API and data integration.
10. Review platform compatibility.
11. Identify relevant security risks.
12. Review tests and release processes.
13. Prioritize findings.
14. Present an evidence-based report.
15. Wait for explicit human approval.

The initial audit must be read-only.

Do not redesign existing screens automatically.

Do not replace frameworks or dependencies merely because alternatives are newer.

## 67. UX Redesign Governance

Before significant interface redesign:

- Identify user problems.
- Analyze current workflows.
- Define measurable objectives.
- Review existing brand identity.
- Preserve business functionality.
- Identify affected users.
- Evaluate accessibility.
- Present proposed layouts.
- Explain expected improvements.
- Obtain explicit approval.

Use prototypes or visual comparisons when helpful.

Never deploy a major redesign without authorization.

## 68. Progressive Improvement

Existing production applications may not meet every standard immediately.

Prioritize:

- Security issues.
- Broken critical workflows.
- Data integrity problems.
- Severe accessibility barriers.
- Confirmed performance bottlenecks.
- Important usability problems.
- High-risk compatibility issues.

Apply incremental improvements.

Avoid broad rewrites without strong justification.

Document approved exceptions.

## 69. Cross-Document Responsibilities

Consult:

- docs/security.md for application security.
- docs/privacy.md for privacy and data protection.
- docs/architecture.md for architectural decisions.
- docs/data.md for data integrity and persistence.
- docs/scalability.md for performance and capacity.
- docs/cost-engineering.md for financial impact.
- docs/ai-and-llm.md for AI integrations.
- docs/quality-and-testing.md for test requirements.
- docs/observability.md for monitoring.

For desktop applications, games and other non-web/mobile platforms, also consult docs/platforms-and-applications.md when available.

Resolve these documentation paths relative to the engineering-standards repository.

Do not duplicate entire specialized standards unnecessarily.

## 70. Mobile and Web Definition of Done

For significant mobile or web changes:

- User objective understood.
- Existing platform inspected.
- Architecture respected.
- UX reviewed.
- Accessibility considered.
- Security verified.
- Privacy reviewed.
- Data integrity preserved.
- Performance evaluated.
- Offline behavior considered where relevant.
- Platform compatibility assessed.
- Critical tests executed.
- Costs considered.
- Monitoring prepared.
- Release implications reviewed.
- Remaining risks documented.
- Required approvals obtained.

Do not consider an interface production-ready merely because it looks visually attractive.

## 71. Final Mobile and Web Principles

Design for real users.
Prioritize intuitive workflows.
Maintain accessible interfaces.
Respect platform conventions.
Protect authentication and authorization.
Never expose privileged client credentials.
Handle unreliable networks.
Preserve data integrity.
Optimize performance and battery usage.
Control API and infrastructure costs.
Test supported platforms.
Preserve production compatibility.
Avoid unnecessary framework migrations.
Audit existing applications before modifying them.
Require approval for significant changes.