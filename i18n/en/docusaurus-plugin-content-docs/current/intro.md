---
title: CodePins Plugin User Guide
sidebar_position: 1
description: Detailed introduction to all features of the CodePins plugin, helping you get started quickly and use it efficiently
---

# CodePins – IntelliJ Plugin User Guide

This guide aims to introduce all features of the CodePins plugin in detail, helping you get started quickly and use it efficiently.

## Plugin Introduction

> CodePins is a lightweight pin system plugin that helps developers efficiently organize and navigate code.

**Core Features:**

- "📌" Pin any code line or code block as a marker
- Support for notes, navigation, search, and tag filtering
- Provide delete, clear, import/export, and sharing functions
- Support sorting, drag-and-drop sorting, copying, refreshing, and other operations

**Use Cases:**

- Temporary code notes
- Error location and tracking
- TODO task management
- Code navigation and marking

## Open Source Announcement

We are excited to announce that CodePins plugin is now completely free and open source! All features are available without any limitations, including:

| Feature | Description |
| ------- | ----------- |
| **Pin Features** | Complete functionality (add, delete, search, navigate) |
| **Tag Count** | Unlimited |
| **Tag Types** | Unlimited |
| **Pin Count** | Unlimited |
| **Sharing Features** | Support for multiple sharing methods |
| **Sorting Features** | Support for multiple sorting methods |
| **Import/Export** | Support for multiple formats |
| **Watermark Settings** | Support for custom export image watermarks |
| **Technical Support** | Community support |

> Note: We welcome community contributions. If you have any suggestions or want to participate in development, please visit our GitHub repository.

## Installation and Configuration

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <h4>Installation Methods</h4>
    <ol>
      <li><strong>Via JetBrains Marketplace</strong>: Open your IDE, go to Settings/Preferences → Plugins → Marketplace, search for "CodePins" and click Install</li>
      <li><strong>Manual Installation</strong>: Download the plugin file (.zip) from the <a href="https://plugins.jetbrains.com/plugin/20158-codepins" target="_blank">JetBrains Marketplace</a>, then install it via Settings/Preferences → Plugins → ⚙️ → Install Plugin from Disk</li>
    </ol>
    
    <h4>Compatibility</h4>
    <ul>
      <li>Supports all IntelliJ-based IDEs: IntelliJ IDEA, WebStorm, PyCharm, PhpStorm, etc.</li>
      <li>Compatible with IDE versions 2020.3 and above</li>
      <li>Supports both Community and Ultimate editions</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-install.png" alt="Installation Example" className="feature-image" />
  <div className="image-caption">Plugin installation via JetBrains Marketplace</div>
</div>

## Adding Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins allows you to quickly mark any code line or code block:</p>
    
    <h4>Adding a Pin</h4>
    <ol>
      <li>Place the cursor on the line you want to mark</li>
      <li>Right-click and select "Add CodePin" from the context menu, or use the shortcut <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd></li>
      <li>In the pop-up dialog, enter a note (optional) and tags (optional, using # format)</li>
      <li>Click "Add" to complete the pin creation</li>
    </ol>
    
    <h4>Pin Types</h4>
    <ul>
      <li><strong>Line Pin</strong>: Marks a single line of code</li>
      <li><strong>Block Pin</strong>: Marks a block of code (select multiple lines before adding)</li>
      <li><strong>File Pin</strong>: Marks an entire file</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-add.png" alt="Adding Pin Example" className="feature-image" />
  <div className="image-caption">Adding a pin with notes and tags</div>
</div>

:::tip Pro Tip
When adding tags, use meaningful categories like #bug, #todo, #important to better organize your pins. Tags can be used for filtering later.
:::

## Editing Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>In the "Pins" panel, you can edit the notes and tags of existing pins at any time:</p>
    
    <h4>Editing Methods</h4>
    <ol>
      <li><strong>Via Context Menu</strong>: Right-click on a pin in the panel and select "Edit"</li>
      <li><strong>Via Keyboard Shortcut</strong>: Select a pin and press <kbd>F2</kbd> (or the shortcut configured in your IDE)</li>
      <li><strong>Double-click</strong>: Double-click on the pin's note text</li>
    </ol>
    
    <h4>Editable Fields</h4>
    <ul>
      <li><strong>Notes</strong>: Update the description or details of the pin</li>
      <li><strong>Tags</strong>: Add, remove, or modify tags using the # format</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-edit.png" alt="Editing Pin Example" className="feature-image" />
  <div className="image-caption">Editing a pin's notes and tags</div>
</div>

## Navigating with Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>One of the core features of CodePins is quick navigation to marked code locations:</p>
    
    <h4>Navigation Methods</h4>
    <ol>
      <li><strong>Click</strong>: Click on any pin in the panel to jump to its location</li>
      <li><strong>Keyboard Navigation</strong>: Use <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> to navigate between pins</li>
      <li><strong>Search and Jump</strong>: Use the search box to find specific pins, then click to navigate</li>
    </ol>
    
    <h4>Navigation Features</h4>
    <ul>
      <li>When navigating to a pin, the IDE will automatically open the corresponding file</li>
      <li>For block pins, the entire code block will be selected</li>
      <li>The current pin is highlighted in the panel</li>
      <li>Navigation history is preserved in the IDE's standard navigation history</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-navigate.png" alt="Navigation Example" className="feature-image" />
  <div className="image-caption">Navigating between pins</div>
</div>

## Searching and Filtering

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins provides powerful search and filtering capabilities to help you quickly find specific pins:</p>
    
    <h4>Search Methods</h4>
    <ol>
      <li>Enter keywords in the search box at the top of the panel</li>
      <li>The search is performed in real-time as you type</li>
      <li>Search results are highlighted in the panel</li>
    </ol>
    
    <h4>Search Scope</h4>
    <ul>
      <li><strong>File Path</strong>: Search by file name or path</li>
      <li><strong>Notes</strong>: Search within pin notes</li>
      <li><strong>Tags</strong>: Search by tag name (with or without the # symbol)</li>
      <li><strong>Code Content</strong>: Search within the pinned code content</li>
    </ul>
    
    <h4>Tag Filtering</h4>
    <ul>
      <li>Click on any tag in the panel to filter pins by that tag</li>
      <li>Click the tag again to remove the filter</li>
      <li>Multiple tags can be selected for combined filtering</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-search.png" alt="Search Example" className="feature-image" />
  <div className="image-caption">Searching and filtering pins</div>
</div>

## Managing Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins provides various ways to manage pins, including individual deletion, batch deletion, and clearing all:</p>
    
    <h4>Deletion Methods</h4>
    <ol>
      <li><strong>Delete Individual Pin</strong>: Right-click on a pin and select "Delete", or select a pin and press <kbd>Delete</kbd></li>
      <li><strong>Batch Deletion</strong>: Hold <kbd>Ctrl</kbd> (or <kbd>⌘</kbd> on Mac) and select multiple pins, then right-click and select "Delete Selected"</li>
      <li><strong>Clear All</strong>: Click the "Clear All" button in the panel toolbar to remove all pins</li>
    </ol>
    
    <h4>Other Management Features</h4>
    <ul>
      <li><strong>Copy</strong>: Right-click on a pin and select "Copy" to copy the pin's information</li>
      <li><strong>Share</strong>: Right-click on a pin and select "Share" to generate a shareable link</li>
      <li><strong>Batch Operations</strong>: Select multiple pins to perform batch operations like tagging, copying, or deleting</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-manage.png" alt="Pin Management Example" className="feature-image" />
  <div className="image-caption">Managing pins in the panel</div>
</div>

:::warning Caution
The "Clear All" operation cannot be undone. Make sure to export your pins before clearing if you might need them later.
:::

## Sorting Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins provides multiple sorting options to help you organize and view pins in different ways:</p>
    
    <h4>Sorting Methods</h4>
    <ol>
      <li><strong>Manual Sorting</strong>: Drag and drop pins to arrange them in your preferred order</li>
      <li><strong>Automatic Sorting</strong>: Use the sort button in the toolbar to sort by different criteria</li>
    </ol>
    
    <h4>Sort Criteria</h4>
    <ul>
      <li><strong>By File Path</strong>: Group pins by their file location</li>
      <li><strong>By Creation Time</strong>: Sort pins from newest to oldest</li>
      <li><strong>By Name/Note</strong>: Sort pins alphabetically by their notes</li>
      <li><strong>By Tags</strong>: Group pins by their tags</li>
    </ul>
    
    <h4>Drag and Drop</h4>
    <ul>
      <li>Click and hold a pin, then drag it to a new position</li>
      <li>The pin order is automatically saved</li>
      <li>You can drag multiple selected pins together</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-sort.png" alt="Sorting Example" className="feature-image" />
  <div className="image-caption">Sorting pins in the panel</div>
</div>

## Import and Export

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins allows you to export your pins for backup or sharing, and import pins from files:</p>
    
    <h4>Export Features</h4>
    <ol>
      <li>Click the "Export" button in the panel toolbar</li>
      <li>Choose a location to save the export file (.codepins format)</li>
      <li>All pins, including their notes, tags, and positions, will be exported</li>
    </ol>
    
    <h4>Import Features</h4>
    <ol>
      <li>Click the "Import" button in the panel toolbar</li>
      <li>Select a previously exported .codepins file</li>
      <li>Choose whether to merge with existing pins or replace them</li>
      <li>The imported pins will appear in the panel</li>
    </ol>
    
    <h4>Use Cases</h4>
    <ul>
      <li><strong>Backup</strong>: Regularly export pins to prevent data loss</li>
      <li><strong>Sharing</strong>: Share exported pins with team members</li>
      <li><strong>Migration</strong>: Transfer pins between different projects or computers</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-export.png" alt="Export/Import Example" className="feature-image" />
  <div className="image-caption">Exporting and importing pins</div>
</div>

## Refreshing Pins

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>The refresh feature helps update pin positions when code changes:</p>
    
    <h4>How to Refresh</h4>
    <ol>
      <li>Click the "Refresh" button in the panel toolbar</li>
      <li>The pin list will reload and update all pin statuses</li>
    </ol>
    
    <h4>Use Cases</h4>
    <ul>
      <li>When you switch branches or update your codebase and need to update pin positions</li>
      <li>When the pin list appears abnormal or incomplete</li>
      <li>When you suspect pin data is out of sync with actual files</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-refresh.png" alt="Refresh Example" className="feature-image" />
  <div className="image-caption">Pin refresh feature demonstration</div>
</div>

:::tip Tip
When you pull new code changes in team collaboration or switch branches, it's recommended to click the refresh button to ensure pin positions are consistent with the current code state.
:::

## Persistence and Auto-Save

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins provides a comprehensive data persistence mechanism to ensure your pin data is safe and reliable:</p>
    
    <h4>Auto-Save</h4>
    <ul>
      <li>Data is automatically saved after each pin addition, edit, or deletion</li>
      <li>No need to manually click a "Save" button; all operations are automatically synced to storage</li>
      <li>Your pin data won't be lost even if the IDE is closed unexpectedly</li>
    </ul>
    
    <h4>Data Storage Location</h4>
    <ul>
      <li>Pin data is stored in the project's <code>.idea/codepins.xml</code> file</li>
      <li>This file can be managed by version control systems for team sharing</li>
      <li>The professional version supports custom storage locations and cloud sync</li>
    </ul>
  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-persist.png" alt="Persistence Example" className="feature-image" />
  <div className="image-caption">Pin data auto-save demonstration</div>
</div>

:::info Backup Recommendation
Although CodePins provides a reliable data persistence mechanism, we still recommend regularly using the export feature to back up important pin data, especially before major project changes or IDE upgrades.
:::

## Frequently Asked Questions

<div className="faq-container">
  <div className="faq-item">
    <h4>Question: What should I do if pin positions don't match or are offset from the code?</h4>
    <div className="faq-answer">
      <p>This is usually caused by code changes. Try these solutions:</p>
      <ol>
        <li>Click the <strong>Refresh Pins</strong> button in the panel to update all pin positions</li>
        <li>If still incorrect after refreshing, delete the pin and recreate it</li>
        <li>If many pin positions are incorrect, it may be due to large-scale code refactoring; consider using the export/import feature to remap pins</li>
      </ol>
    </div>
  </div>
  
  <div className="faq-item">
    <h4>Question: What should I do if pin data is lost?</h4>
    <div className="faq-answer">
      <p>If your pin data is accidentally lost, try these recovery methods:</p>
      <ol>
        <li>Check if the <code>.idea/codepins.xml</code> file exists in your project</li>
        <li>If you have previously exported pin data backups, you can use the import feature to restore</li>
        <li>If you use a version control system, try recovering the <code>codepins.xml</code> file from historical commits</li>
      </ol>
    </div>
  </div>
  
  <div className="faq-item">
    <h4>Question: What should I do if the pin panel doesn't display or can't be opened?</h4>
    <div className="faq-answer">
      <p>If the pin panel doesn't display or can't be opened, try these solutions:</p>
      <ol>
        <li>Check if the CodePins plugin is installed and enabled (confirm in the IDE's plugin manager)</li>
        <li>Try restarting the IDE, which can sometimes resolve plugin loading issues</li>
        <li>If still unresolved, try reinstalling the plugin or updating to the latest version</li>
      </ol>
    </div>
  </div>
  
  <div className="faq-item">
    <h4>Question: How do I share pins within a team?</h4>
    <div className="faq-answer">
      <p>There are several ways to share pins in a team:</p>
      <ol>
        <li>Include the <code>.idea/codepins.xml</code> file in version control so team members can automatically get the latest pin data</li>
        <li>Use the export/import feature to manually share pin data files</li>
        <li>Use the share feature to share specific pins with team members</li>
        <li>The professional version provides more team collaboration features, such as cloud sync and real-time collaboration</li>
      </ol>
    </div>
  </div>
</div>

:::tip Get More Help
If you encounter issues not mentioned above or need more technical support, please visit our [official support website](https://codepins.support) or send an email to support@codepins.com.
:::

## Usage Tips

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <h4>Tag Management Tips</h4>
    <ul>
      <li>Use meaningful tags (such as <code>#bug</code>, <code>#todo</code>, <code>#important</code>) to organize pins</li>
      <li>Create consistent tag naming conventions for team members to understand</li>
      <li>Using multiple tag combinations can more precisely categorize pins</li>
      <li>Professional version users can use unlimited tags to create a more refined classification system</li>
    </ul>
    
    <h4>Shortcut Usage Tips</h4>
    <ul>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> - Add pin</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> - Navigate between pins</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> - Show/hide pin panel (professional version)</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> - Quick clear search box (professional version)</li>
      <li>Shortcuts can be customized in settings according to personal habits</li>
    </ul>
    
    <h4>Code Block Marking Tips</h4>
    <ul>
      <li>Select a code block before adding a pin to mark an entire function or method</li>
      <li>Block pins will automatically select the entire code block when navigating</li>
      <li>For complex code logic, using block pins can mark the complete context</li>
    </ul>
    
    <h4>Team Collaboration Tips</h4>
    <ul>
      <li>Add <code>.idea/codepins.xml</code> to version control for team pin sharing</li>
      <li>Use a standardized tag system to ensure team members use consistent categorization</li>
      <li>Regularly export pin data as backups to prevent accidental loss</li>
      <li>Use pins to mark code points that need discussion during code reviews</li>
    </ul>
  </div>
</div>

:::tip Professional Version Exclusive Features
If you need more advanced features, consider upgrading to CodePins Professional, which provides more powerful features such as cloud sync, team collaboration, advanced tag management, custom themes, etc. Visit our official website for more information.
:::

## Technical Support

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>If you encounter any issues during use or have any suggestions, we provide multiple ways to support you:</p>
    
    <h4>Contact Methods</h4>
    <ul>
      <li>Submit feedback on the <a href="https://plugins.jetbrains.com/plugin/20158-codepins" target="_blank">JetBrains Marketplace</a> plugin page</li>
      <li>Submit problem reports through the <a href="/bug-report">Bug Report</a> page</li>
      <li>Send an email to our support email: <a href="mailto:ilikexff@gmail.com">ilikexff@gmail.com</a></li>
    </ul>
    
    <h4>Response Time</h4>
    <p>We usually respond to your questions within 1-2 business days. For urgent issues, we will try to provide faster responses.</p>
  </div>
</div>

<div className="cta-container">
  <div className="cta-box">
    <h3>Start Using CodePins</h3>
    <p>Download and install CodePins now to enhance your code navigation experience!</p>
    <div className="cta-buttons">
      <a href="https://plugins.jetbrains.com/plugin/20158-codepins" className="button button--primary" target="_blank">Download Plugin</a>
      <a href="/docs/faq" className="button button--secondary">View FAQ</a>
    </div>
  </div>
</div>
