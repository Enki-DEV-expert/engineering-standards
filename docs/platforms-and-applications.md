
# Global Platforms, Desktop Applications and Game Engineering Standards

## 1. Mission

Design, develop, test, deploy and maintain secure, reliable, efficient, accessible, maintainable and cost-aware software across desktop operating systems, application frameworks, programming languages and game engines.

These standards apply to new projects and existing production software.

They apply to software developed, reviewed or maintained by AI coding agents, including Claude Code, OpenAI Codex and other AI-assisted engineering tools.

Supported categories include:

- Windows applications.
- macOS applications.
- Linux applications.
- Cross-platform desktop applications.
- Enterprise software.
- Native applications.
- Command-line tools.
- Background services.
- System utilities.
- Developer tools.
- Game development.
- Game servers.
- 2D and 3D applications.
- Simulation software.
- Graphics applications.
- Desktop AI applications.
- Hybrid and multiplatform products.

These standards are technology-independent and vendor-neutral.

No programming language, operating system, framework or game engine is mandatory by default.

## 2. Fundamental Principles

Apply:

1. Security by Design.
2. Privacy by Design.
3. Correctness.
4. Maintainability.
5. Platform Compatibility.
6. Performance.
7. Accessibility.
8. Reliability.
9. Resource Efficiency.
10. Controlled Distribution.
11. Supply-Chain Security.
12. Cost Awareness.
13. Backward Compatibility.
14. Evidence-Based Testing.
15. Explicit Human Approval.

Prefer simple, robust solutions.

Do not introduce unnecessary platform-specific complexity.

Preserve existing working software unless changes are justified and approved.

## 3. Platform and Language Independence

Support appropriate technologies including:

### Programming Languages

- Java.
- Kotlin.
- C#.
- C.
- C++.
- Python.
- Rust.
- Go.
- Swift.
- Objective-C.
- Dart.
- JavaScript.
- TypeScript.
- Lua.
- GDScript.
- Visual Basic.
- F#.
- Other maintained programming languages.

### Desktop Frameworks

- JavaFX.
- Swing.
- AWT.
- WPF.
- WinUI.
- Windows Forms.
- .NET MAUI.
- Qt.
- GTK.
- Electron.
- Tauri.
- Flutter Desktop.
- Avalonia.
- wxWidgets.
- Native platform SDKs.

### Game Engines

- Unity.
- Unreal Engine.
- Godot.
- GameMaker.
- Defold.
- MonoGame.
- Custom game engines.
- Other maintained game development frameworks.

These lists are examples, not approved-only technology lists.

Evaluate tools according to existing requirements, licensing, maintenance, platform compatibility, team capabilities and operational cost.

Never migrate frameworks solely because another technology is newer.

## 4. Project Assessment First

Before significant changes:

1. Inspect the actual repository.
2. Identify supported operating systems.
3. Identify the programming language.
4. Identify frameworks and engines.
5. Identify build systems.
6. Identify runtime dependencies.
7. Review application architecture.
8. Review data storage.
9. Review networking.
10. Review security boundaries.
11. Identify deployment requirements.
12. Review existing tests.
13. Identify performance constraints.
14. Identify licensing obligations.
15. Present findings and recommendations.

The initial audit of existing production software must be read-only.

## 5. Desktop Architecture

Choose architecture according to application requirements.

Consider:

- Clear module boundaries.
- Separation of concerns.
- Presentation and domain logic.
- State management.
- Persistence.
- Background processing.
- Dependency boundaries.
- Error handling.
- Testability.

Avoid unnecessarily complex architectural patterns.

Do not introduce microservices or distributed components into desktop applications without justification.

Consult docs/architecture.md.

## 6. Native Versus Cross-Platform Development

Evaluate native and cross-platform approaches.

Consider:

- Required operating systems.
- Native API access.
- Performance.
- UI consistency.
- Accessibility.
- Distribution.
- Maintainability.
- Framework maturity.
- Dependency risks.
- Development costs.

Share code where it improves maintainability.

Do not force code sharing when native implementations provide better reliability or performance.

## 7. Operating System Integration

Evaluate platform-specific integration requirements.

Examples:

- Filesystem access.
- Notifications.
- System tray or menu bar.
- Clipboard.
- Drag and drop.
- Default application handlers.
- File associations.
- Background services.
- Startup behavior.
- Power management.
- Device permissions.

Respect operating system security boundaries.

Do not request unnecessary privileges.

## 8. Windows Engineering

For Windows applications, evaluate:

- Supported Windows versions.
- CPU architectures.
- Win32 integration.
- Windows SDK compatibility.
- User Account Control.
- Application permissions.
- Filesystem locations.
- Registry usage.
- Windows services.
- Application packaging.
- Code signing.
- Installer behavior.
- Update mechanisms.
- Accessibility.
- High-DPI displays.
- Crash reporting.

Avoid requiring administrator privileges unless technically justified.

Do not modify system-wide settings without explicit approval.

## 9. macOS Engineering

For macOS applications, evaluate:

- Supported macOS versions.
- Apple Silicon compatibility.
- Intel compatibility where required.
- Application sandboxing.
- Entitlements.
- Keychain integration.
- Privacy permissions.
- Filesystem access.
- Background agents.
- Menu bar integration.
- Code signing.
- Notarization.
- Application updates.
- Accessibility.
- Energy efficiency.

Use platform-supported security mechanisms.

Never bypass macOS security protections merely for implementation convenience.

## 10. Linux Engineering

For Linux applications, evaluate:

- Supported distributions.
- Architecture compatibility.
- Desktop environment differences.
- Display server requirements.
- Filesystem conventions.
- Runtime dependencies.
- Permissions.
- Packaging.
- Service management.
- Sandboxing.
- Security updates.
- Accessibility.
- Distribution compatibility.

Avoid unnecessary assumptions about the user's Linux distribution.

Test on supported environments.

## 11. Cross-Platform Compatibility

Define the actual supported operating system matrix.

Evaluate:

- OS versions.
- CPU architectures.
- Filesystem differences.
- Path conventions.
- Case sensitivity.
- Process execution.
- Permissions.
- Network behavior.
- Native dependencies.
- UI scaling.
- Localization.

Do not claim cross-platform compatibility based only on compilation.

Test representative supported environments.

## 12. Java Application Engineering

For Java applications, evaluate:

- Supported Java runtime versions.
- JVM compatibility.
- Dependency management.
- Memory management.
- Threading.
- Concurrency.
- Exception handling.
- Module boundaries.
- Native integration.
- Packaging.
- Security.
- Performance.

Relevant build tools may include Maven and Gradle.

Relevant desktop frameworks may include JavaFX and Swing.

Use existing project conventions.

Avoid unnecessary JVM upgrades without compatibility analysis.

## 13. C# and .NET Engineering

For .NET applications, evaluate:

- Target framework.
- Runtime compatibility.
- Dependency management.
- Async and await behavior.
- Threading.
- Resource disposal.
- UI framework integration.
- Native interoperability.
- Security.
- Packaging.
- Performance.

Support appropriate .NET frameworks and application models.

Do not assume all .NET desktop technologies support identical operating systems.

## 14. C and C++ Engineering

For native C and C++ applications, evaluate:

- Memory safety.
- Resource ownership.
- Undefined behavior.
- Thread safety.
- Buffer management.
- Integer overflow.
- Dependency safety.
- Compiler warnings.
- Build configurations.
- Platform compatibility.
- Performance.

Use appropriate static analysis and runtime sanitizers where supported.

Prefer established safe resource management practices.

Never suppress critical memory-safety findings without justification.

## 15. Python Desktop Engineering

For Python desktop applications, evaluate:

- Supported Python versions.
- Virtual environments.
- Dependency locking.
- Application packaging.
- Native library compatibility.
- GUI event loops.
- Background execution.
- Runtime distribution.
- Security.
- Startup performance.
- Memory consumption.

Review executable packaging and update mechanisms.

Do not assume users have Python installed.

## 16. Rust and Go Applications

For Rust and Go applications, evaluate:

- Dependency management.
- Concurrency.
- Resource consumption.
- Native library dependencies.
- Cross-compilation.
- Platform support.
- Error handling.
- Binary distribution.
- Security.
- Performance.

Use language-native tooling where appropriate.

Respect existing architecture and build conventions.

## 17. Desktop User Experience

Design interfaces around actual user tasks.

Prioritize:

- Clear navigation.
- Predictable behavior.
- Keyboard accessibility.
- Helpful error messages.
- Consistent actions.
- Appropriate shortcuts.
- Visible system status.
- Easy recovery.
- Responsive layouts.
- Platform conventions.

Do not assume a complex interface is professional merely because it exposes many controls.

## 18. Desktop Accessibility

Evaluate:

- Screen reader compatibility.
- Keyboard navigation.
- Focus management.
- Contrast.
- Text scaling.
- High-DPI behavior.
- Accessible names.
- Motion preferences.
- Color independence.
- Input alternatives.

Apply appropriate platform accessibility APIs.

Do not claim accessibility compliance based only on visual inspection.

## 19. Desktop Performance

Monitor and optimize appropriate:

- Startup time.
- Memory usage.
- CPU utilization.
- Disk usage.
- UI responsiveness.
- Background processing.
- Network utilization.
- GPU utilization.
- Energy consumption.

Avoid blocking the main UI thread with expensive operations.

Use profiling evidence before major optimization.

## 20. Memory and Resource Management

Manage resources deliberately.

Evaluate:

- Memory leaks.
- File handles.
- Network sockets.
- GPU resources.
- Threads.
- Background tasks.
- Event listeners.
- Native handles.
- Cache growth.

Release resources according to language and framework requirements.

Test long-running application behavior where relevant.

## 21. Concurrency and Threading

Evaluate:

- Race conditions.
- Deadlocks.
- Thread synchronization.
- Shared mutable state.
- Background jobs.
- UI thread affinity.
- Task cancellation.
- Resource contention.

Use language-appropriate concurrency primitives.

Never assume thread-safe behavior without analysis or testing.

## 22. Filesystem Security

Protect local and shared filesystem access.

Consider:

- File permissions.
- Path traversal.
- Symbolic links.
- Temporary files.
- Atomic writes.
- File locking.
- Data integrity.
- User-controlled paths.
- Backup behavior.

Validate paths and file operations.

Do not overwrite unrelated user files.

Require explicit approval for destructive filesystem operations.

## 23. Local Data Storage

Evaluate appropriate storage approaches.

Examples:

- SQLite.
- Embedded databases.
- Encrypted local storage.
- Files.
- Application-managed caches.
- Platform credential stores.

Select according to actual data requirements.

Protect sensitive data.

Use safe migration and recovery procedures.

Consult docs/data.md.

## 24. Credential and Secret Storage

Use secure platform-supported mechanisms.

Examples include:

- Windows credential protection mechanisms.
- macOS Keychain.
- Linux desktop secret services where available.
- Approved enterprise secret stores.

Never embed production secrets in application binaries.

Do not assume code obfuscation provides secret protection.

## 25. Desktop Application Security

Evaluate:

- Input validation.
- Dependency vulnerabilities.
- Unsafe native operations.
- File access.
- Privilege escalation.
- Process execution.
- Inter-process communication.
- Network exposure.
- Deserialization.
- Plugin loading.
- Update security.

Apply least privilege.

Do not execute untrusted commands or scripts automatically.

Consult docs/security.md.

## 26. Application Sandboxing

Use sandboxing where supported and appropriate.

Evaluate:

- Filesystem boundaries.
- Process isolation.
- Network permissions.
- System capabilities.
- User consent.
- Extension permissions.

Do not disable sandbox restrictions merely to simplify development.

Document required privileges.

## 27. Native Libraries and FFI

For native bindings and foreign function interfaces:

- Validate memory ownership.
- Validate pointer lifetimes.
- Handle errors.
- Review thread safety.
- Validate binary compatibility.
- Protect against unsafe inputs.
- Test supported architectures.

Treat FFI boundaries as high-risk integration points.

## 28. Inter-Process Communication

For applications using IPC:

- Authenticate peers where appropriate.
- Validate messages.
- Enforce permissions.
- Protect sensitive data.
- Handle process failure.
- Apply timeouts.
- Prevent resource exhaustion.

Do not expose privileged operations through unauthenticated local endpoints.

## 29. Desktop Networking

Evaluate:

- Transport security.
- Endpoint validation.
- Authentication.
- Authorization.
- Timeouts.
- Retries.
- Offline behavior.
- Proxy environments.
- Certificate handling.
- Network interruptions.

Do not disable TLS verification to make connections succeed.

Use bounded retries.

## 30. Background Services

For system services and background agents:

- Define purpose.
- Restrict privileges.
- Limit resource consumption.
- Handle restarts.
- Define logging.
- Define update behavior.
- Protect credentials.
- Document installation.
- Provide safe removal.

Never install persistent background services without explicit user approval.

## 31. Application Packaging

Define reproducible packaging procedures.

Consider:

- Required runtime.
- Native dependencies.
- Target architecture.
- Build configuration.
- Asset inclusion.
- Version metadata.
- Security.
- Installer permissions.

Verify packages on clean representative systems.

Do not assume successful development builds guarantee successful installation.

## 32. Code Signing

Use appropriate signing mechanisms for distributed applications.

Protect signing identities and private keys.

Do not commit signing credentials to repositories.

Document certificate and identity requirements.

Never falsely claim a binary is signed or trusted without verification.

## 33. Installers and Uninstallers

Installers must:

- Explain required permissions.
- Install only necessary components.
- Avoid unrelated system changes.
- Preserve existing user data.
- Handle failures.
- Provide safe rollback where feasible.

Uninstallers should remove application components safely.

Do not delete user-created documents automatically without explicit authorization.

## 34. Application Updates

Design secure update mechanisms.

Evaluate:

- Update authenticity.
- Transport security.
- Version compatibility.
- Rollback.
- Partial downloads.
- Interrupted updates.
- Data migrations.
- User notification.
- Release channels.

Do not execute unsigned or untrusted update payloads.

Do not silently introduce breaking changes.

## 35. Backward Compatibility

Preserve compatibility with supported:

- Operating systems.
- Runtime versions.
- File formats.
- Plugins.
- APIs.
- Stored data.
- External integrations.

Document deprecated functionality.

Require approval before removing support for existing production environments.

## 36. Enterprise Desktop Software

For enterprise applications, evaluate:

- Identity integration.
- Role-based access.
- Organizational policies.
- Device management.
- Secure configuration.
- Audit logging.
- Data retention.
- Network restrictions.
- Software deployment.
- Supportability.

Do not assume enterprise requirements justify unnecessary complexity for every project.

## 37. CLI Engineering

For command-line tools:

- Provide clear commands.
- Validate arguments.
- Use meaningful exit codes.
- Separate standard output and error output.
- Protect credentials.
- Support noninteractive execution where appropriate.
- Handle interruptions.
- Avoid destructive defaults.

Use explicit confirmation for dangerous operations.

Never execute destructive actions because a command argument was ambiguous.

## 38. Developer Tool Engineering

For developer tools, evaluate:

- Repository safety.
- Filesystem scope.
- External command execution.
- Credential access.
- Plugin security.
- Configuration handling.
- Compatibility.
- Performance.
- Error reporting.

Do not assume access to a repository authorizes changes outside its intended scope.

## 39. Game Engineering Mission

Design, develop, test and maintain stable, performant, secure and engaging games.

These requirements apply to:

- 2D games.
- 3D games.
- Single-player games.
- Multiplayer games.
- Online games.
- Mobile games.
- Desktop games.
- Simulation applications.
- Virtual and augmented reality where relevant.

No game engine is mandatory.

Preserve existing gameplay and assets unless changes are explicitly approved.

## 40. Game Engine Independence

Support engines and frameworks including:

- Unity.
- Unreal Engine.
- Godot.
- GameMaker.
- Defold.
- MonoGame.
- Custom engines.

Select according to:

- Target platforms.
- Gameplay requirements.
- Graphics requirements.
- Team capabilities.
- Licensing.
- Build pipeline.
- Runtime performance.
- Tooling.
- Maintenance.
- Costs.

Do not recommend engine migration without strong technical justification and approval.

## 41. Unity Engineering

For Unity projects, evaluate:

- Unity editor version.
- C# scripting conventions.
- Scene structure.
- Prefabs.
- ScriptableObjects.
- Asset references.
- Package dependencies.
- Rendering pipelines.
- Physics.
- Animation.
- Input systems.
- Build targets.
- Profiling.
- Memory.
- Platform compatibility.

Preserve project metadata and asset relationships.

Do not remove or regenerate asset metadata without understanding its impact.

Validate changes in the relevant Unity environment.

## 42. Unreal Engine Engineering

For Unreal Engine projects, evaluate:

- Unreal Engine version.
- C++ modules.
- Blueprint architecture.
- Asset references.
- Actors.
- Components.
- Gameplay framework.
- Rendering.
- Animation.
- Physics.
- Replication.
- Build targets.
- Plugins.
- Profiling.

Respect engine-specific lifecycle and ownership requirements.

Do not assume Blueprint and C++ changes are interchangeable.

Validate project compatibility before engine upgrades.

## 43. Godot Engineering

For Godot projects, evaluate:

- Engine version.
- Scene structure.
- Node hierarchy.
- Signals.
- Scripts.
- Resource references.
- GDScript or C# usage.
- Physics.
- Rendering.
- Input.
- Export targets.
- Performance.

Preserve scene and resource integrity.

Do not assume compatibility between major engine versions.

## 44. Gameplay Architecture

Separate responsibilities where appropriate.

Consider:

- Player input.
- Gameplay state.
- Rules.
- Physics.
- Animation.
- Audio.
- Rendering.
- Persistence.
- Networking.
- UI.

Avoid monolithic gameplay scripts when modular boundaries improve maintainability.

Do not introduce unnecessary abstraction into small games.

## 45. Frame Time and FPS

Define performance objectives according to target hardware and game requirements.

Evaluate:

- Frames per second.
- Average frame time.
- Frame time distribution.
- CPU frame time.
- GPU frame time.
- Rendering latency.
- Input responsiveness.
- Stuttering.

Frame time consistency is often more informative than average FPS alone.

Use profiling evidence.

Do not claim a game is optimized solely because it reaches a target FPS in one test environment.

## 46. Rendering Performance

Evaluate:

- Draw calls.
- Shader complexity.
- GPU utilization.
- Texture memory.
- Overdraw.
- Lighting.
- Shadows.
- Post-processing.
- Material usage.
- Render resolution.
- Level of detail.

Apply optimizations according to actual bottlenecks.

Preserve visual quality requirements.

## 47. 3D Asset Optimization

For 3D projects, consider:

- Polygon counts.
- Mesh complexity.
- Texture resolution.
- Texture compression.
- Asset streaming.
- Level of detail.
- Animation rigs.
- Materials.
- Collision meshes.
- GPU memory.

Do not remove visual assets or reduce quality without justification.

## 48. 2D Asset Optimization

For 2D projects, consider:

- Sprite atlases.
- Texture size.
- Animation frames.
- Draw calls.
- UI rendering.
- Collision complexity.
- Asset loading.
- Memory consumption.

Optimize based on representative target devices.

## 49. Game Physics

Evaluate:

- Fixed timestep behavior.
- Collision detection.
- Rigidbody interactions.
- Determinism requirements.
- Physics performance.
- Simulation stability.
- Network synchronization.

Do not assume physics results are identical across all devices or frame rates.

Use suitable update cycles.

## 50. Animation Systems

Evaluate:

- Animation state management.
- Transition logic.
- Blend trees.
- Skeletal animation.
- Asset reuse.
- Animation events.
- Performance.
- Synchronization.

Preserve gameplay-critical animation timing.

Test changes under actual runtime conditions.

## 51. Game Input Systems

Support appropriate:

- Keyboard.
- Mouse.
- Controllers.
- Touch.
- Accessibility input.
- Platform-specific input devices.

Use clear input mapping.

Avoid hardcoding controls when remapping is required.

Validate input responsiveness.

## 52. Game Audio

Evaluate:

- Audio quality.
- Compression.
- Memory usage.
- Streaming.
- Spatial audio.
- Mixing.
- Accessibility.
- Device compatibility.

Avoid unnecessary simultaneous audio processing.

Handle missing audio devices gracefully.

## 53. Game UI and UX

Design understandable interfaces.

Evaluate:

- HUD readability.
- Menu navigation.
- Inventory interfaces.
- Tutorials.
- Accessibility.
- Controller support.
- Settings.
- Error feedback.
- Save and load workflows.

Do not prioritize decorative complexity over gameplay usability.

## 54. Game State Management

Define ownership of:

- Player state.
- World state.
- Session state.
- Inventory.
- Progression.
- Match state.
- Persistent state.

Avoid inconsistent duplicated state.

Document synchronization and persistence behavior.

## 55. Save Systems

For save games:

- Define serialization formats.
- Validate stored data.
- Preserve backward compatibility.
- Handle corrupted files.
- Use atomic writes where appropriate.
- Protect sensitive state.
- Consider cloud synchronization.
- Define recovery behavior.

Do not overwrite user progress without safeguards.

## 56. Multiplayer Architecture

For multiplayer games, evaluate:

- Server authority.
- Client prediction.
- State replication.
- Latency.
- Bandwidth.
- Matchmaking.
- Session management.
- Authentication.
- Reconnection.
- Failure handling.
- Anti-cheat controls.

Do not trust client-reported authoritative game state.

Use architecture appropriate to gameplay requirements.

## 57. Multiplayer Security

Protect against:

- Unauthorized game actions.
- State manipulation.
- Replay attacks.
- Invalid client input.
- Resource abuse.
- Account compromise.
- Matchmaking abuse.
- Inventory manipulation.
- Economy exploits.

Enforce critical rules on trusted servers where appropriate.

Do not assume client-side anti-cheat controls are sufficient.

## 58. Networked Game Performance

Evaluate:

- Tick rate.
- Packet size.
- Bandwidth.
- Latency.
- Jitter.
- Packet loss.
- State interpolation.
- Prediction.
- Reconciliation.
- Server load.

Select techniques according to gameplay requirements.

Test under representative network conditions.

## 59. Game Backend Services

For online games, evaluate:

- Authentication.
- Matchmaking.
- Player profiles.
- Inventories.
- Persistence.
- Leaderboards.
- Messaging.
- Anti-abuse controls.
- Server hosting.
- Regional latency.
- Operational costs.

Do not introduce expensive persistent servers without demand-based justification.

Consult docs/scalability.md.

## 60. Game Economy Integrity

For games with currencies, items, trading or purchases:

- Enforce authoritative transactions.
- Validate ownership.
- Prevent duplication.
- Protect payment flows.
- Record important operations.
- Test concurrency.
- Apply fraud and abuse controls.

Do not trust client-only balance calculations.

Never compromise transaction integrity to reduce latency.

## 61. Game AI Systems

For game AI, evaluate:

- Behavior trees.
- State machines.
- Navigation.
- Pathfinding.
- Utility systems.
- Procedural behavior.
- Machine learning where justified.
- Performance.
- Determinism where required.

Do not use LLM inference for every gameplay decision when simpler deterministic approaches are more appropriate.

Consult docs/ai-and-llm.md where applicable.

## 62. Procedural Generation

For procedural content:

- Define generation constraints.
- Validate output.
- Manage random seeds.
- Consider reproducibility.
- Evaluate performance.
- Prevent invalid levels or states.
- Test generated content.

Do not assume generated content is automatically playable or balanced.

## 63. Game Testing

Evaluate:

- Gameplay correctness.
- Input handling.
- Progression.
- Save and load.
- Physics behavior.
- Rendering.
- Multiplayer synchronization.
- Network failure.
- Memory usage.
- Frame time.
- Platform compatibility.

Combine automated testing with appropriate manual playtesting.

Do not claim a game is production-ready solely because it launches.

## 64. Game Profiling

Use engine-supported profiling where appropriate.

Evaluate:

- CPU.
- GPU.
- Memory.
- Rendering.
- Physics.
- Scripts.
- Garbage collection.
- Asset loading.
- Network traffic.

Profile representative scenes and target hardware.

Do not optimize solely from assumptions.

## 65. Mobile and Console Game Targets

When targeting additional platforms, apply their relevant constraints.

Consider:

- CPU and GPU budgets.
- Memory.
- Battery.
- Thermal limits.
- Storage.
- Input methods.
- Display characteristics.
- Network behavior.
- Platform certification requirements.

For mobile games, also consult docs/mobile-and-web.md.

For console development, verify applicable platform SDK, licensing, certification and confidentiality requirements.

Do not assume console development resources are publicly accessible.

## 66. VR and AR Applications

Where relevant, evaluate:

- Frame-time requirements.
- Motion-to-photon latency.
- Tracking.
- Interaction comfort.
- GPU performance.
- Thermal limits.
- Input devices.
- Accessibility.
- Platform SDK requirements.

Do not introduce VR or AR dependencies into unrelated projects.

## 67. Game Build and Distribution

Define appropriate release processes.

Consider:

- Target operating systems.
- Engine version.
- Build reproducibility.
- Asset packaging.
- Content licensing.
- Platform requirements.
- Signing.
- Updates.
- Compatibility.
- Crash reporting.

Verify actual release builds.

Do not publish games automatically without explicit approval.

## 68. Game Content and Asset Licensing

Review applicable licenses for:

- Game engines.
- Plugins.
- Textures.
- 3D models.
- Audio.
- Fonts.
- Animation assets.
- Middleware.
- AI-generated assets.

Do not assume assets downloaded from the internet are free for commercial use.

Document required attribution and distribution restrictions.

## 69. Game Monetization and Cost

Evaluate applicable:

- In-app purchases.
- Platform fees.
- Payment processing.
- Multiplayer hosting.
- Matchmaking services.
- Content delivery.
- Storage.
- Analytics.
- AI inference.
- Third-party services.

Do not introduce paid services or monetization mechanisms without authorization.

Consult docs/cost-engineering.md.

## 70. Software Licensing

Evaluate:

- Open-source licenses.
- Proprietary dependencies.
- Distribution obligations.
- Copyleft requirements.
- Attribution.
- Commercial-use restrictions.
- Runtime redistribution.
- Engine licensing.

Do not assume all libraries and tools are freely redistributable.

Escalate uncertain licensing requirements for review.

## 71. Application Supply Chain

Protect:

- Source repositories.
- Build systems.
- Package registries.
- CI/CD credentials.
- Signing keys.
- Update infrastructure.
- Plugins.
- Native dependencies.
- Game assets.
- Distribution packages.

Review new dependencies.

Avoid unverified external binaries and scripts.

Consult docs/security.md.

## 72. Crash Reporting and Observability

Monitor appropriate:

- Application crashes.
- Unhandled exceptions.
- Startup failures.
- Resource exhaustion.
- Rendering failures.
- Network errors.
- Game server failures.
- FPS degradation.
- Deployment regressions.

Protect personal information.

Consult docs/observability.md.

## 73. Performance and Scalability

Evaluate performance against actual requirements.

For online or distributed applications, assess:

- Peak concurrency.
- Request throughput.
- Server capacity.
- Database demand.
- Network usage.
- Realtime traffic.
- Recovery requirements.
- Infrastructure costs.

Design for growth without prematurely provisioning expensive systems.

Consult docs/scalability.md.

## 74. Testing and Quality Gates

Use appropriate tools and tests according to the stack.

Possible checks include:

- Compiler validation.
- Static analysis.
- Unit tests.
- Integration tests.
- UI tests.
- Runtime profiling.
- Memory sanitizers.
- Security scanning.
- Dependency scanning.
- Packaging verification.
- Platform compatibility testing.

Do not impose irrelevant tools on unsupported languages.

Consult docs/quality-and-testing.md.

## 75. Existing Production Software Audits

For existing applications and games:

1. Inspect the actual project.
2. Identify target platforms.
3. Review languages and frameworks.
4. Identify runtime dependencies.
5. Review architecture.
6. Review security boundaries.
7. Assess data integrity.
8. Review performance evidence.
9. Evaluate compatibility.
10. Review tests.
11. Assess release processes.
12. Identify confirmed risks.
13. Prioritize findings.
14. Propose incremental improvements.
15. Wait for explicit human approval.

The initial audit must be read-only.

Do not rewrite functioning code merely to adopt newer technologies.

Do not migrate game engines without an approved technical justification.

## 76. Cross-Document Responsibilities

Consult:

- docs/security.md for security requirements.
- docs/privacy.md for privacy and data protection.
- docs/architecture.md for architectural decisions.
- docs/data.md for persistence and data integrity.
- docs/scalability.md for performance and capacity.
- docs/cost-engineering.md for financial implications.
- docs/ai-and-llm.md for AI features.
- docs/quality-and-testing.md for verification.
- docs/observability.md for operational monitoring.
- docs/mobile-and-web.md for web and mobile requirements.

Resolve documentation paths relative to the engineering-standards repository.

Use only the specialized standards relevant to the actual project.

## 77. Safe Change Governance

Before significant changes:

- Identify affected components.
- Establish current behavior.
- Assess compatibility.
- Review security.
- Review data integrity.
- Evaluate performance.
- Assess costs.
- Define tests.
- Define rollback procedures.
- Present a change plan.
- Obtain explicit approval.

Do not make destructive or production-changing modifications automatically.

## 78. Platforms and Applications Definition of Done

For significant work:

- Requirements understood.
- Target platforms identified.
- Existing architecture respected.
- Security reviewed.
- Privacy considered.
- Data integrity protected.
- Performance evaluated.
- Compatibility reviewed.
- Licensing considered.
- Relevant tests executed.
- Distribution requirements assessed.
- Operational costs considered.
- Remaining risks documented.
- Required approval obtained.

Never claim production readiness solely because software compiles or a game launches.

## 79. Final Platform Engineering Principles

Support the actual project technology.
Preserve existing working applications.
Protect operating system boundaries.
Apply least privilege.
Prioritize maintainability.
Verify platform compatibility.
Test representative environments.
Profile performance before optimizing.
Protect user data and credentials.
Preserve application and game state.
Validate multiplayer authority.
Respect software and asset licenses.
Control infrastructure and distribution costs.
Avoid unnecessary migrations.
Audit existing software before modifying it.
Require approval for significant changes.