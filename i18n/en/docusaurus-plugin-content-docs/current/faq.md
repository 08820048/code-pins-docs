---
title: Frequently Asked Questions (FAQ)
sidebar_position: 3
---

# Frequently Asked Questions (FAQ)

This page collects common questions and answers from users while using the CodePins plugin. If you don't find your question here, please contact us through the [Bug Report](/bug-report) page.

## Installation and Configuration

### Q: Which IDEs does the CodePins plugin support?

**A:** The CodePins plugin currently supports all IntelliJ-based IDEs, including:
- IntelliJ IDEA
- WebStorm
- PyCharm
- PhpStorm
- Android Studio
- CLion
- GoLand

### Q: What are the minimum system requirements?

**A:** CodePins has very minimal system requirements:
- IntelliJ-based IDE version 2020.3 or higher
- 4GB RAM (recommended)
- 100MB free disk space

### Q: How do I install the plugin?

**A:** You can install the CodePins plugin in two ways:
1. **Via the IDE**: Go to Settings/Preferences → Plugins → Marketplace, search for "CodePins" and click Install
2. **Manual installation**: Download the plugin from [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/20158-codepins), then go to Settings/Preferences → Plugins → ⚙️ → Install Plugin from Disk

### Q: Does CodePins work with both Community and Ultimate editions?

**A:** Yes, CodePins works with both Community and Ultimate editions of all supported IDEs.

## Usage Issues

### Q: Why can't I see the CodePins panel after installation?

**A:** There could be several reasons:
1. Make sure the plugin is enabled in Settings/Preferences → Plugins
2. Try restarting your IDE after installation
3. Open the panel manually via View → Tool Windows → CodePins
4. Check if there's a conflict with another plugin

### Q: How do I add a pin to my code?

**A:** To add a pin:
1. Place your cursor on the line you want to pin
2. Right-click and select "Add CodePin" from the context menu, or use the shortcut Alt+Shift+P
3. Enter optional notes and tags in the dialog that appears
4. Click "Add" to create the pin

### Q: Can I pin multiple lines of code?

**A:** Yes, you can select multiple lines of code before adding a pin to create a "block pin". When you navigate to a block pin, the entire block will be selected.

### Q: How do I navigate between pins?

**A:** You can navigate between pins in several ways:
1. Click on any pin in the CodePins panel to jump to its location
2. Use the keyboard shortcuts Alt+Shift+← and Alt+Shift+→ to move to the previous or next pin
3. Use the search function to find specific pins, then click on them

## Troubleshooting

### Q: Why are my pins showing in the wrong position after code changes?

**A:** When code is added or removed, pin positions may shift. To fix this:
1. Click the "Refresh" button in the CodePins panel to update all pin positions
2. If specific pins are still misaligned, delete and recreate them
3. For major code restructuring, consider using the export/import feature to remap pins

### Q: I lost all my pins after updating the IDE or plugin. How can I recover them?

**A:** Try these recovery steps:
1. Check if the `.idea/codepins.xml` file still exists in your project
2. Restore this file from your version control system if available
3. If you previously exported your pins, use the import feature to restore them
4. Restart your IDE to see if the pins reappear

### Q: Why do some pins appear as "invalid" or "orphaned"?

**A:** Pins may become invalid if:
1. The file containing the pin has been deleted or moved
2. The line containing the pin has been removed
3. The project structure has changed significantly

To fix this, you can either delete invalid pins or refresh the pins panel to attempt automatic recovery.

## Feature Limitations

### Q: Is there a limit to how many pins I can create?

**A:** No, there are no limits. CodePins is now completely free and open source, with no restrictions on the number of pins, tags, or any other features.

### Q: Can I share my pins with team members?

**A:** Yes, you can share pins in several ways:
1. Include the `.idea/codepins.xml` file in your version control system
2. Use the export/import feature to share pin collections
3. Use the built-in sharing features to collaborate with your team

### Q: Does CodePins work with remote development?

**A:** Yes, CodePins works with remote development features in IntelliJ IDEs. Pins are stored locally by default, but you can use version control or the export/import features to synchronize them across different environments.

### Q: Can I use CodePins across different projects?

**A:** Pins are project-specific by default. However, you can export pins from one project and import them into another to reuse your pins across different projects.

## Community Contribution

### Q: How can I contribute to CodePins?

**A:** As an open-source project, we welcome contributions from the community:
1. Visit our GitHub repository
2. Look through the Issues list to find tasks you're interested in
3. Fork the repository and submit Pull Requests
4. Suggest new features or report bugs

### Q: Can I add new features to CodePins?

**A:** Absolutely! We welcome all forms of contribution, including new feature development, documentation improvements, bug fixes, and more. Please open an Issue on GitHub to discuss your ideas before starting development.

### Q: How can I get involved in the CodePins community?

**A:** There are many ways to get involved:
1. Star and watch the GitHub repository for updates
2. Join discussions on existing Issues
3. Help answer questions from other users
4. Contribute code, documentation, or translations
5. Share CodePins with your network

## Other Questions

### Q: How can I provide feedback or report bugs?

**A:** We welcome your feedback! You can:
1. Use the [Bug Report](/bug-report) page on our website
2. Submit issues on our [GitHub repository](https://github.com/codepins/codepins-intellij)
3. Email us directly at support@codepins.com

### Q: Is CodePins available in languages other than English?

**A:** Currently, CodePins supports English and Chinese. We plan to add more languages in future updates.

### Q: How often is the plugin updated?

**A:** We typically release updates every 1-2 months with bug fixes and minor improvements. Major feature updates are released 2-3 times per year.

### Q: Does CodePins collect any usage data?

**A:** CodePins collects minimal anonymous usage statistics to help improve the plugin. No personal information or code content is ever collected. You can opt out of this in the plugin settings.
