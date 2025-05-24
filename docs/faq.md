---
title: 常见问题解答 (FAQ)
sidebar_position: 3
---

# 常见问题解答 (FAQ)

本页面收集了用户在使用 CodePins 插件过程中常见的问题和解答。如果您没有找到您的问题，请通过[问题反馈](/bug-report)页面联系我们。

## 安装与配置

### Q: CodePins 插件支持哪些 IDE？

**A:** CodePins 插件目前支持所有基于 IntelliJ 平台的 IDE，包括：
- IntelliJ IDEA
- WebStorm
- PyCharm
- PhpStorm
- Android Studio
- CLion
- GoLand
- Rider
- RubyMine
- AppCode
- DataGrip

### Q: 如何安装 CodePins 插件？

**A:** 您可以通过以下两种方式安装 CodePins 插件：

1. **通过 JetBrains Marketplace 安装**（推荐）
   - 在 IDE 中，打开 Settings/Preferences → Plugins
   - 点击 "Marketplace" 标签
   - 搜索 "CodePins"
   - 点击 "Install" 按钮

2. **手动安装**
   - 从 [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/27300-codepins--code-bookmarks) 下载插件的 .zip 文件
   - 在 IDE 中，打开 Settings/Preferences → Plugins
   - 点击齿轮图标，选择 "Install Plugin from Disk..."
   - 选择下载的 .zip 文件

### Q: 安装后需要重启 IDE 吗？

**A:** 是的，安装完成后需要重启 IDE 以激活插件。

### Q: 我可以自定义快捷键吗？

**A:** 可以。在 IDE 中，打开 Settings/Preferences → Keymap，搜索 "CodePins"，您可以为各种操作设置自定义快捷键。

## 使用问题

### Q: 如何添加一个图钉？

**A:** 在代码行上右键点击，选择 "📌 Pin This Line"，或使用默认快捷键 Alt+Shift+P（可自定义）。

### Q: 如何为图钉添加标签？

**A:** 添加图钉时，在备注中使用 # 符号后跟标签名称，例如 "这是一个重要函数 #important #review"。您也可以在图钉列表中右键点击图钉，选择 "编辑标签"。

### Q: 如何按标签筛选图钉？

**A:** 在 CodePins 工具窗口顶部，点击标签筛选器下拉菜单，选择您想要筛选的标签。

### Q: 图钉数据保存在哪里？

**A:** 图钉数据保存在项目的 `.idea` 目录下，文件名为 `codepins.xml`。这确保了图钉信息会随项目一起保存和版本控制。

### Q: 如何在团队成员之间共享图钉？

**A:** 将 `.idea/codepins.xml` 文件添加到版本控制系统（如 Git）中，这样团队成员就可以看到相同的图钉。

## 故障排除

### Q: 安装后看不到 CodePins 工具窗口怎么办？

**A:** 请尝试以下步骤：
1. 确认插件已成功安装（Settings/Preferences → Plugins → Installed）
2. 使用 View → Tool Windows 菜单查看是否有 CodePins 选项
3. 如果仍然看不到，尝试重启 IDE
4. 如果问题依然存在，请通过[问题反馈](/bug-report)页面联系我们

### Q: 图钉添加后没有显示在列表中？

**A:** 这可能是由于以下原因：
1. 确认您查看的是正确的项目窗口
2. 尝试刷新图钉列表（点击工具窗口顶部的刷新按钮）
3. 检查是否启用了标签筛选，可能过滤掉了您的图钉

### Q: 更新插件后图钉丢失了怎么办？

**A:** 图钉数据应该不会因为更新而丢失。如果发生这种情况：
1. 检查 `.idea/codepins.xml` 文件是否存在
2. 尝试从版本控制系统恢复此文件
3. 如果您有导出的备份，可以通过导入功能恢复

## 功能与限制

### Q: CodePins 是否完全免费？

**A:** 是的，CodePins 现在是完全免费开源的。所有功能均可无限制使用，没有任何付费墙或功能限制。您可以在[插件教程](/docs/intro#开源说明)中了解更多信息。

### Q: 有图钉数量的限制吗？

**A:** 没有，CodePins 现在是完全开源的，没有任何图钉数量、标签数量或标签种类的限制。

### Q: 支持哪些编程语言？

**A:** CodePins 支持所有 IntelliJ 平台 IDE 支持的编程语言，没有语言限制。

### Q: 可以导出/导入图钉吗？

**A:** 是的，CodePins 支持导出和导入图钉功能。在工具窗口顶部的菜单中，您可以找到导出和导入选项。

## 社区贡献

### Q: 如何参与 CodePins 的开发？

**A:** 作为一个开源项目，我们非常欢迎社区贡献：
1. 访问我们的 GitHub 仓库
2. 查看 Issues 列表，寻找您感兴趣的任务
3. Fork 仓库并提交 Pull Request
4. 提出新功能建议或报告 Bug

### Q: 我可以为 CodePins 添加新功能吗？

**A:** 当然可以！我们欢迎所有形式的贡献，包括新功能开发、文档改进、Bug 修复等。请先在 GitHub 上提出 Issue 讨论您的想法，然后再开始开发。

### Q: 如何报告 Bug 或提出功能请求？

**A:** 您可以通过以下方式报告 Bug 或提出功能请求：
1. 在 GitHub 仓库上创建新的 Issue
2. 使用我们的[问题反馈](/bug-report)页面
3. 通过电子邮件联系我们
