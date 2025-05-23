---

title: CodePins 插件使用教程
sidebar_position: 1

description: 详细介绍 CodePins 插件的所有功能，帮助您快速上手并高效使用
---

# CodePins – IntelliJ 插件使用教程

本教程旨在详细介绍 CodePins 插件的所有功能，帮助您快速上手并高效使用。


## 插件简介

> CodePins 是一款轻量级图钉系统插件，帮助开发者高效组织和导航代码。

**核心功能：**

- 将任意代码行或代码块“📌”固定为标记
- 支持备注、跳转、搜索、标签筛选
- 提供删除、清空、导入导出、分享功能
- 支持排序、拖放排序、复制、刷新等操作

**适用场景：**

- 临时代码笔记
- 错误定位与跟踪
- TODO 任务管理
- 代码导航与标记

## 版本对比

| 功能         | 免费版                             | 专业版                    |
| ------------ | ---------------------------------- | ------------------------- |
| **图钉功能** | 基础功能（添加、删除、搜索、跳转） | 全部免费版功能 + 高级功能 |
| **标签数量** | 每个图钉最多 3 个                  | 无限标签数量              |
| **标签种类** | 最多 10 种不同标签                 | 无限标签种类              |
| **图钉数量** | 最多 100 个                        | 无限图钉数量              |
| **分享功能** | 基础分享                           | 高级分享（多种分享方式）  |
| **排序功能** | 基础排序                           | 高级排序（多种排序方式）  |
| **导入导出** | 基础格式                           | 高级格式（支持更多格式）  |
| **水印设置** | 不支持                             | 自定义导出图片水印        |
| **技术支持** | 标准支持                           | 优先技术支持              |

> 注：专业版部分功能尚在开发中，升级到专业版将自动享受后续全部高级功能。

## 快速开始

### 安装与设置

<div className="step-container">
  <div className="step-number">1</div>
  <div className="step-content">
    <strong>安装插件</strong> - 通过 <a href="https://plugins.jetbrains.com/plugin/27300-codepins--code-bookmarks/edit/versions" target="_blank">JetBrains Marketplace</a> 或在 IDEA 中的插件市场搜索“CodePins”并安装。
  </div>
</div>


### 基本操作

<div className="step-container">
  <div className="step-number">2</div>
  <div className="step-content">
    <strong>添加图钉</strong> - 在任意代码行上右键点击 → <code>Add CodePin Here</code>，或使用快捷键 <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>。
  </div>
</div>


<div className="step-container">
  <div className="step-number">3</div>
  <div className="step-content">
    <strong>查看图钉</strong> - 打开左侧工具栏中的 <code>CodePins</code> 面板查看所有图钉。
  </div>
</div>


<div className="step-container">
  <div className="step-number">4</div>
  <div className="step-content">
    <strong>使用图钉</strong> - 双击图钉跳转到代码位置，右键点击图钉进行更多操作。
  </div>
</div>


<div className="step-container">
  <div className="step-number">5</div>
  <div className="step-content">
    <strong>组织图钉</strong> - 使用标签（如 <code>#bug</code>、<code>#todo</code>）来组织和筛选图钉。
  </div>
</div>


### 高级功能

- 拖放排序 - 直接拖动图钉调整顺序
- 搜索过滤 - 使用顶部搜索框快速找到图钉
- 批量操作 - 支持批量删除、导出和分享
- 导入导出 - 在不同项目或团队成员间共享图钉

## 图钉的添加

### 添加单行图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>在任意代码行上，右键点击 → <code>Add CodePin Here</code>，或使用快捷键 <kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>。</p>
    <p>弹出对话框后，可以输入备注文本（可选），然后点击“确定”完成添加。</p>
  </div>
</div>


### 添加代码块图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>选中多行代码，然后右键点击 → <code>Add CodePin Here</code>。</p>
    <p>插件会自动识别选中的代码块，并将其作为一个图钉添加。</p>
  </div>
</div>


### 添加效果

![image-20250523221032703](https://images.waer.ltd/notes/202505232211169.png)

> 添加图钉后，左侧的 CodePins 面板中会显示新添加的图钉，包含文件名、行号和备注信息。

## 图钉备注与标签

### 添加备注与标签

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>在添加图钉时，可以在弹出的对话框中输入备注信息。备注支持任意文本，包括：</p>
    <ul>
      <li>纯文本描述：“这里需要修复性能问题”</li>
      <li>带标签的备注：“#bug 用户登录时偏移量计算错误”</li>
      <li>多标签组合：“#important #todo 需要重构这部分逻辑”</li>
    </ul>
  </div>
</div>


### 编辑备注与标签

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>在“图钉”面板中，您可以随时编辑现有图钉的备注和标签：</p>
    <ul>
      <li>右键点击图钉 → <strong>修改备注</strong> 可重新编辑备注文本</li>
      <li>右键点击图钉 → <strong>编辑标签</strong> 可打开标签编辑对话框</li>
    </ul>
    <p>在标签编辑对话框中，您可以添加、删除或修改标签。</p>
  </div>
</div>



### 标签筛选

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>标签是组织和筛选图钉的强大工具：</p>
    <ul>
      <li>在“图钉”面板中，点击 <strong>标签筛选</strong> 面板</li>
      <li>勾选您感兴趣的标签，图钉列表将自动过滤</li>
      <li>可以选择多个标签进行组合筛选</li>
    </ul>
  </div>
</div>

![image-20250523221228791](https://images.waer.ltd/notes/202505232212861.png)

![image-20250523221249794](https://images.waer.ltd/notes/202505232212858.png)

## 拖放排序

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供直观的拖放排序功能，帮助您按照自己的需求组织图钉：</p>
    <ol>
      <li>在“图钉”面板中，选中您想要移动的图钉</li>
      <li>按住鼠标左键并开始拖动</li>
      <li>将图钉拖动到您想要的新位置</li>
      <li>松开鼠标完成排序操作</li>
    </ol>
    <p>排序操作完成后，新的排序将自动保存，并在重启 IDE 后仍然保持。</p>
  </div>
</div>

<div className="image-container">
  <img src="https://images.waer.ltd/notes/202505232213699.png" alt="拖放排序示例" className="feature-image" />
  <div className="image-caption">图钉拖放排序演示</div>
</div>

:::tip 提示
拖放排序特别适合于按照任务优先级或工作流程组织图钉。您可以将重要的图钉移到列表顶部，以便于快速访问。
:::

## 搜索图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供强大的搜索功能，帮助您快速找到需要的图钉：</p>
    <ul>
      <li><strong>多维度搜索</strong> - 支持按文件路径、备注内容或标签搜索</li>
      <li><strong>实时过滤</strong> - 输入关键字后，图钉列表将立即更新</li>
      <li><strong>模糊匹配</strong> - 不需要精确匹配完整字符串</li>
    </ul>
    <p>使用方法：在“图钉”面板顶部的搜索框中输入关键字或知识点。</p>
  </div>
</div>

![image-20250523221519021](https://images.waer.ltd/notes/202505232215079.png)


:::tip 搜索技巧

- 使用标签前缀（如 <code>#bug</code>）可以快速筛选所有带有该标签的图钉
- 输入文件名的一部分可以找到特定文件中的图钉
- 结合标签和关键字可以进行更精确的搜索
  :::

## 图钉跳转

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 的核心功能之一是快速跳转到代码位置，让您能够高效地在代码库中导航：</p>


    <h4>基本跳转</h4>
    <ul>
      <li>在“图钉”面板中，<strong>双击</strong>任意图钉即可跳转到对应代码位置</li>
      <li>跳转时，编辑器会自动定位到目标位置并高亮显示</li>
    </ul>


    <h4>快捷键导航</h4>
    <ul>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> - 跳转到上一个图钉</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> - 跳转到下一个图钉</li>
    </ul>
    <p>这些快捷键可以在不离开编辑器的情况下快速在图钉之间切换。</p>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-jump.png" alt="图钉跳转示例" className="feature-image" />
  <div className="image-caption">图钉跳转功能演示</div>
</div>

:::info 代码块跳转
当跳转到代码块图钉时，编辑器会自动选中整个代码块，并将其滚动到视图中心，便于您查看完整的代码上下文。
:::

## 删除与清空

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供多种管理图钉的方式，包括单个删除、批量删除和全部清空：</p>


    <h4>删除单个图钉</h4>
    <ol>
      <li>在“图钉”面板中，右键点击目标图钉</li>
      <li>选择 <strong>删除本钉</strong> 选项</li>
      <li>图钉将立即被删除，无需确认</li>
    </ol>


    <h4>批量删除图钉</h4>
    <ol>
      <li>使用 <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> 或 <kbd>Shift</kbd> 选中多个图钉</li>
      <li>点击工具栏中的 <strong>批量删除</strong> 按钮</li>
      <li>在确认对话框中确认操作</li>
    </ol>


    <h4>清空所有图钉</h4>
    <ol>
      <li>点击“图钉”面板顶部的 <strong>清空图钉</strong> 按钮</li>
      <li>在确认对话框中确认操作</li>
      <li>所有图钉将被删除（此操作不可撤销）</li>
    </ol>

  </div>
</div>

<div className="image-container">
  <div className="image-row">
    <div className="image-col">
      <img src="https://your-image-url-delete.png" alt="删除图钉示例" className="feature-image" />
      <div className="image-caption">删除单个图钉</div>
    </div>
    <div className="image-col">
      <img src="https://your-image-url-clear.png" alt="清空图钉示例" className="feature-image" />
      <div className="image-caption">清空所有图钉</div>
    </div>
  </div>
</div>


:::caution 警告
清空图钉操作不可撤销。如果您想保留图钉数据，请在清空前先使用导出功能备份您的图钉。
:::

## 导入与导出

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供完善的导入导出功能，方便您备份、迁移或共享图钉数据：</p>


    <h4>导出图钉</h4>
    <ol>
      <li>在“图钉”面板中，点击顶部的 <strong>导出图钉</strong> 按钮</li>
      <li>在弹出的对话框中，选择导出文件的保存路径</li>
      <li>点击“保存”完成导出操作</li>
    </ol>
    <p>导出的文件包含所有图钉数据，包括文件路径、行号、备注和标签等信息。</p>

    <h4>导入图钉</h4>
    <ol>
      <li>在“图钉”面板中，点击顶部的 <strong>导入图钉</strong> 按钮</li>
      <li>在弹出的对话框中，选择要导入的图钉文件</li>
      <li>点击“打开”完成导入操作</li>
    </ol>
    <p>导入时，插件会自动处理重复项，并尝试匹配相应的文件和位置。</p>

  </div>
</div>

<div className="image-container">
  <div className="image-row">
    <div className="image-col">
      <img src="https://your-image-url-export.png" alt="导出图钉示例" className="feature-image" />
      <div className="image-caption">导出图钉数据</div>
    </div>
    <div className="image-col">
      <img src="https://your-image-url-import.png" alt="导入图钉示例" className="feature-image" />
      <div className="image-caption">导入图钉数据</div>
    </div>
  </div>
</div>


:::tip 使用技巧

- 定期导出图钉数据作为备份，防止意外丢失
- 在团队协作时，可以通过导出/导入功能共享重要的代码标记
- 专业版支持更多导出格式，如 JSON、Markdown 等
  :::

## 分享图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 的分享功能让团队协作更加高效，帮助您轻松地与团队成员分享重要的代码标记：</p>


    <h4>分享图钉的步骤</h4>
    <ol>
      <li>在“图钉”面板中，选中您想要分享的一个或多个图钉</li>
      <li>点击面板中的 <strong>分享图钉</strong> 按钮</li>
      <li>在弹出的对话框中，选择您需要的分享方式</li>
    </ol>


    <h4>支持的分享方式</h4>
    <ul>
      <li><strong>复制到剪贴板</strong> - 将图钉信息以文本格式复制到剪贴板</li>
      <li><strong>导出为图片</strong> - 将图钉信息生成为图片（专业版）</li>
      <li><strong>生成 Markdown</strong> - 将图钉信息转换为 Markdown 格式（专业版）</li>
      <li><strong>其他格式</strong> - 专业版支持更多分享格式和选项</li>
    </ul>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-share.png" alt="分享图钉示例" className="feature-image" />
  <div className="image-caption">图钉分享对话框</div>
</div>


:::info 团队协作
分享图钉功能特别适合团队协作场景，如代码审查、问题讨论和知识共享。当您需要向同事展示特定代码位置时，分享图钉比发送文件路径和行号更直观。
:::

## 排序图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供多种排序选项，帮助您以不同的方式组织和查看图钉：</p>


    <h4>排序方式</h4>
    <ul>
      <li><strong>按文件路径</strong> - 将相同文件中的图钉分组显示</li>
      <li><strong>按添加时间</strong> - 按图钉创建的时间顺序排列</li>
      <li><strong>按标签</strong> - 根据标签对图钉进行分组</li>
      <li><strong>按优先级</strong> - 根据自定义优先级排序（专业版）</li>
      <li><strong>自定义排序</strong> - 通过拖放手动调整图钉顺序</li>
    </ul>


    <h4>使用方法</h4>
    <ol>
      <li>在“图钉”面板中，点击顶部的 <strong>排序图钉</strong> 按钮</li>
      <li>在弹出的菜单中，选择您需要的排序方式</li>
      <li>图钉列表将立即按照选择的方式重新排序</li>
    </ol>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-sort.png" alt="排序图钉示例" className="feature-image" />
  <div className="image-caption">图钉排序选项菜单</div>
</div>


:::tip 排序技巧

- 当处理大量图钉时，按文件路径排序可以帮助您更快地找到相关代码
- 按添加时间排序可以帮助您追踪最近的工作进展
- 结合搜索和排序功能可以快速定位到特定类型的图钉
  :::

## 复制图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 的复制功能可以帮助您快速创建具有相似属性的图钉：</p>


    <h4>复制图钉的步骤</h4>
    <ol>
      <li>在“图钉”面板中，右键点击您想要复制的图钉</li>
      <li>选择菜单中的 <strong>复制本钉</strong> 选项</li>
      <li>复制的图钉将保留原图钉的标签和备注信息</li>
      <li>您可以将复制的图钉添加到其他位置</li>
    </ol>


    <h4>应用场景</h4>
    <ul>
      <li>快速创建多个具有相同标签或备注的图钉</li>
      <li>在相关位置复制相同类型的图钉，例如标记多个需要修复的 bug</li>
      <li>快速创建一系列相关的代码标记点</li>
    </ul>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-copy.png" alt="复制图钉示例" className="feature-image" />
  <div className="image-caption">图钉复制功能演示</div>
</div>


## 刷新图钉

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 的刷新功能可以帮助您在遇到显示问题或文件变化时更新图钉列表：</p>


    <h4>使用方法</h4>
    <ol>
      <li>在“图钉”面板中，点击顶部的 <strong>刷新图钉</strong> 按钮</li>
      <li>图钉列表将重新加载，并更新所有图钉的状态</li>
    </ol>


    <h4>应用场景</h4>
    <ul>
      <li>当您切换分支或更新代码库后，需要更新图钉位置</li>
      <li>当图钉列表显示异常或不完整时</li>
      <li>当您怀疑图钉数据与实际文件不同步时</li>
    </ul>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-refresh.png" alt="刷新图钉示例" className="feature-image" />
  <div className="image-caption">图钉刷新功能演示</div>
</div>


:::tip 小提示
当您在团队协作中拉取了新的代码变更，或者切换分支后，建议点击刷新按钮以确保图钉位置与当前代码状态一致。
:::

## 持久化与自动保存

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>CodePins 提供完善的数据持久化机制，确保您的图钉数据安全可靠：</p>


    <h4>自动保存</h4>
    <ul>
      <li>每次添加、编辑或删除图钉后，数据会自动保存</li>
      <li>无需手动点击“保存”按钮，所有操作都会自动同步到存储中</li>
      <li>即使在意外关闭 IDE 的情况下，您的图钉数据也不会丢失</li>
    </ul>


    <h4>数据存储位置</h4>
    <ul>
      <li>图钉数据存储在项目的 <code>.idea/codepins.xml</code> 文件中</li>
      <li>该文件可以被版本控制系统管理，便于团队共享</li>
      <li>专业版支持自定义存储位置和云同步功能</li>
    </ul>

  </div>
</div>

<div className="image-container">
  <img src="https://your-image-url-persist.png" alt="持久化示例" className="feature-image" />
  <div className="image-caption">图钉数据自动保存演示</div>
</div>


:::info 备份建议
尽管 CodePins 提供了可靠的数据持久化机制，但对于重要的图钉数据，我们仍然建议定期使用导出功能进行备份，特别是在进行重大项目改动或 IDE 升级前。
:::

## 常见问题

<div className="faq-container">
  <div className="faq-item">
    <h4>问题：图钉位置与代码不匹配或偏移了怎么办？</h4>
    <div className="faq-answer">
      <p>这通常是由于代码变更导致的。尝试以下解决方法：</p>
      <ol>
        <li>点击面板中的 <strong>刷新图钉</strong> 按钮，更新所有图钉的位置</li>
        <li>如果刷新后仍然不正确，可以删除该图钉并重新创建</li>
        <li>如果是大量图钉位置不正确，可能是由于大规模代码重构导致的，建议使用导出/导入功能重新映射图钉</li>
      </ol>
    </div>
  </div>


  <div className="faq-item">
    <h4>问题：图钉数据丢失怎么办？</h4>
    <div className="faq-answer">
      <p>如果您的图钉数据意外丢失，可以尝试以下方法恢复：</p>
      <ol>
        <li>检查项目的 <code>.idea/codepins.xml</code> 文件是否存在</li>
        <li>如果您有之前导出的图钉数据备份，可以使用导入功能恢复</li>
        <li>如果您使用版本控制系统，可以尝试从历史提交中恢复 <code>codepins.xml</code> 文件</li>
      </ol>
    </div>
  </div>


  <div className="faq-item">
    <h4>问题：图钉面板不显示或无法打开怎么办？</h4>
    <div className="faq-answer">
      <p>如果图钉面板不显示或无法打开，可以尝试以下解决方法：</p>
      <ol>
        <li>检查 CodePins 插件是否已经安装并启用（在 IDE 的插件管理器中确认）</li>
        <li>尝试重启 IDE，有时候这可以解决插件加载问题</li>
        <li>如果仍然无法解决，可以尝试重新安装插件或更新到最新版本</li>
      </ol>
    </div>
  </div>


  <div className="faq-item">
    <h4>问题：如何在团队中共享图钉？</h4>
    <div className="faq-answer">
      <p>在团队中共享图钉有以下几种方式：</p>
      <ol>
        <li>将 <code>.idea/codepins.xml</code> 文件纳入版本控制，这样团队成员可以自动获取最新的图钉数据</li>
        <li>使用导出/导入功能手动共享图钉数据文件</li>
        <li>使用分享功能将特定图钉分享给团队成员</li>
        <li>专业版提供了更多团队协作功能，如云同步和实时协作</li>
      </ol>
    </div>
  </div>

</div>

:::tip 获取更多帮助
如果您遇到了上述未提及的问题，或需要更多技术支持，请访问我们的 [官方支持网站](https://codepins.support) 或发送邮件至 support@codepins.com。
:::

## 使用技巧

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <h4>标签管理技巧</h4>
    <ul>
      <li>使用有意义的标签（如 <code>#bug</code>、<code>#todo</code>、<code>#important</code>）来组织图钉</li>
      <li>创建一致的标签命名规范，方便团队成员理解</li>
      <li>使用多个标签组合可以更精确地分类图钉</li>
      <li>专业版用户可以使用无限标签，创建更精细的分类系统</li>
    </ul>


    <h4>快捷键使用技巧</h4>
    <ul>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> - 添加图钉</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd> - 在图钉间导航</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> - 显示/隐藏图钉面板（专业版）</li>
      <li><kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> - 快速清除搜索框（专业版）</li>
      <li>在设置中可以自定义快捷键，根据个人习惯调整</li>
    </ul>


    <h4>代码块标记技巧</h4>
    <ul>
      <li>选中代码块再添加图钉，可以标记整个函数或方法</li>
      <li>代码块图钉在跳转时会自动选中整个代码块</li>
      <li>对于复杂的代码逻辑，使用代码块图钉可以标记完整的上下文</li>
    </ul>


    <h4>团队协作技巧</h4>
    <ul>
      <li>将 <code>.idea/codepins.xml</code> 添加到版本控制中，实现团队图钉共享</li>
      <li>使用标准化的标签系统，确保团队成员使用一致的分类方式</li>
      <li>定期导出图钉数据作为备份，防止意外丢失</li>
      <li>在代码审查中使用图钉标记需要讨论的代码点</li>
    </ul>

  </div>
</div>

:::tip 专业版特有功能
如果您需要更多高级功能，请考虑升级到 CodePins 专业版，它提供了更多强大的功能，如云同步、团队协作、高级标签管理、自定义主题等。访问我们的官方网站了解更多信息。
:::

## 技术支持

<div className="feature-box">
  <div className="feature-icon"></div>
  <div className="feature-content">
    <p>如果您在使用过程中遇到任何问题，或有任何建议，我们提供多种方式为您提供支持：</p>


    <h4>联系方式</h4>
    <ul>
      <li>在 <a href="https://plugins.jetbrains.com/plugin/20158-codepins" target="_blank">JetBrains Marketplace</a> 插件页面提交反馈</li>
      <li>通过<a href="/bug-report">问题反馈</a>页面提交问题报告</li>
      <li>发送邮件至我们的支持邮箱：<a href="mailto:ilikexff@gmail.com">ilikexff@gmail.com</a></li>
    </ul>


    <h4>响应时间</h4>
    <p>我们通常会在 1-2 个工作日内回复您的问题。对于紧急问题，我们会尽力提供更快的响应。</p>

  </div>
</div>

<div className="cta-container">
  <div className="cta-box">
    <h3>开始使用 CodePins</h3>
    <p>立即下载并安装 CodePins，提升您的代码导航体验！</p>
    <div className="cta-buttons">
      <a href="https://plugins.jetbrains.com/plugin/20158-codepins" className="button button--primary" target="_blank">下载插件</a>
      <a href="/docs/faq" className="button button--secondary">查看常见问题</a>
    </div>
  </div>
</div>