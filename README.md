# Evergarden Winter - VS Code Themes

Nature-inspired winter color themes for Visual Studio Code, inspired by the Evergarden color scheme. Perfect for long coding sessions with carefully balanced forest and winter tones.

## 🎨 Available Themes

### 🌲 Evergarden Winter (Dark)
A cozy dark theme with deep forest green-grey backgrounds and light grey foreground.

![Theme Preview](preview.webp)

### ❄️ Evergarden Winter Light  
A gentle light theme with warm paper white backgrounds and rich dark brown text.

![Theme Preview](preview10.webp)

## Features

- 🌲 **Dual theme support** - Both dark and light variants for all conditions
- 👀 **Excellent contrast** - Carefully tuned for readability in both modes
- 🎨 **Consistent colors** - Matches WezTerm and Alacritty configurations
- 💚 **Syntax highlighting** - Thoughtful colors for all major languages
- 🌙 **Easy on the eyes** - Designed for extended coding sessions
- 🔄 **Modern VS Code** - Full support for latest features and semantic highlighting

## Color Palette

Both themes use a carefully selected winter forest palette:

### Dark Theme
- **Background**: Deep forest green-grey (#0E1012)
- **Foreground**: Light grey (#e2e3e4)
- **Accent**: Soft aqua/green (#a8c9b0, #9ae8a8)

### Light Theme  
- **Background**: Warm paper white (#f8f7f3)
- **Foreground**: Dark brown (#3a2f27)
- **Accent**: Forest green (#6d6500, #1f5942)

### Dark Theme Syntax Colors:
- **Purple**: #a080c0 (keywords, modifiers)
- **Green**: #80a090 (strings, namespaces)
- **Olive**: #a08070 (functions, operators)
- **Brown**: #a08060 (classes, types, enums)
- **Teal**: #90c0a0 (numbers)
- **Pink**: #f5d0e3 (constants, variables)
- **Cyan**: #b8f0e0 (enum members)
- **Grey**: #9fb5bb (comments)

### Light Theme Syntax Colors:
- **Red**: #a63355 (keywords, modifiers)
- **Green**: #1f5942 (strings, namespaces, classes)
- **Olive**: #6d6500 (functions, operators, parameters)
- **Brown**: #8d4620 (classes, types, enums)
- **Teal**: #1a5858 (numbers)
- **Pink**: #c75080 (constants, variables, decorators)
- **Blue**: #2d5080 (enum members, events)
- **Grey**: #696f75 (comments)

## Installation

### Method 1: Manual Installation (Recommended for custom themes)

1. **Locate your VS Code extensions folder:**
   - **Windows**: `C:\Users\YourUsername\.vscode\extensions\`
   - **macOS**: `~/.vscode/extensions/`
   - **Linux**: `~/.vscode/extensions/`

2. **Create the theme folder structure:**
   ```
   .vscode/extensions/evergarden-winter-1.0.0/
   ├── package.json
   └── themes/
       ├── evergarden-winter-dark-theme.json
       └── evergarden-winter-light-theme.json
   ```

3. **Copy the files:**
   - Copy `package.json` to the root of the theme folder
   - Create a `themes` subfolder
   - Copy both theme files into the `themes` folder

4. **Reload VS Code:**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
   - Type "Developer: Reload Window"
   - Press Enter

5. **Activate the theme:**
   - Press `Ctrl+K Ctrl+T` (or `Cmd+K Cmd+T` on macOS)
   - Select either "Evergarden Winter" (dark) or "Evergarden Winter Light" from the list

### Method 2: Quick Settings.json (Alternative)

If you prefer, you can add custom colors directly to your `settings.json`:

1. Press `Ctrl+,` (or `Cmd+,` on macOS) to open Settings
2. Click the `{}` icon in the top right to open `settings.json`
3. Copy the entire contents of `evergarden-winter-[dark|light]-theme.json`
4. Add it to your settings under `"workbench.colorCustomizations"` and `"editor.tokenColorCustomizations"`

## Matching Terminal Theme

This theme is designed to work seamlessly with the Evergarden Winter themes for:
- **WezTerm** (wezterm.lua)
- **Alacritty** (alacritty.toml)

All three use the exact same color palette for a consistent development environment!

## Customization

You can customize the theme by modifying the color values in `evergarden-winter-[dark|light]-theme.json`. Some common customizations:

### Change background opacity
Add to your `settings.json`:
```json
"workbench.colorCustomizations": {
  "[Evergarden Winter]": {
    "editor.background": "#0E1012"
  }
}
```

### Adjust font styles
Modify the `fontStyle` properties in the theme file:
- `"italic"` - Italicize text
- `"bold"` - Bold text
- `"italic bold"` - Both
- `""` - Remove styling

### Change accent color
Find and replace the accent color `#9ae8a8` with your preferred color throughout the theme file.

## Supported Languages

The theme includes optimized syntax highlighting for:

- JavaScript / TypeScript
- Python
- HTML / CSS / SCSS
- JSON
- Markdown
- And many more!

## Tips

- **Enable font ligatures** for an even better experience:
  ```json
  "editor.fontLigatures": true
  ```

- **Recommended fonts:**
  - JetBrains Mono
  - Fira Code
  - Cascadia Code

- **Enable semantic highlighting:**
  ```json
  "editor.semanticHighlighting.enabled": true
  ```

## Marketplace Publishing

### Prerequisites
- [Visual Studio Code Extension CLI](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions)
- [Microsoft Azure DevOps Account](https://marketplace.visualstudio.com/manage)

### Publishing Steps
1. Install VSCE: `npm install -g vsce`
2. Create publisher account at [VS Code Marketplace](https://marketplace.visualstudio.com/manage)
3. Login: `vsce login <publisher-name>`
4. Package: `vsce package`
5. Publish: `vsce publish`

### Extension Metadata
Update `package.json` with:
- Repository URL
- Publisher name
- Extension icon
- Marketplace categories
- Tags and keywords

## Contributing

Found an issue or have a suggestion? Feel free to customize the theme to your liking!

## License

MIT License - Feel free to modify and share!

## Credits

Inspired by:
- [Evergarden](https://github.com/everviolet/nvim) by everviolet
- [Everforest](https://github.com/sainnhe/everforest) by sainnhe
- [Nord](https://github.com/nordtheme/nord) color scheme

---

**Enjoy your cozy coding sessions!** 🌲❄️✨

**Enjoy your cozy coding sessions!** 🌲❄️✨
