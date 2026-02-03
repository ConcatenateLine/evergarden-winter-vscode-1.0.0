#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 Evergarden Winter Theme Contrast Analysis\n');

// Load both themes
const darkTheme = JSON.parse(fs.readFileSync('themes/evergarden-winter-theme.json', 'utf8'));
const lightTheme = JSON.parse(fs.readFileSync('themes/evergarden-winter-light-theme.json', 'utf8'));

// Color utilities
function getLuminance(hex) {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
    
    const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1, color2) {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

function testContrast(fg, bg, name, theme) {
    const ratio = getContrastRatio(fg, bg);
    const status = ratio >= 7 ? '✅ AAA' : ratio >= 4.5 ? '⚠️ AA' : '❌ FAIL';
    console.log(`${theme} | ${name.padEnd(25)} | ${ratio.toFixed(2).padStart(6)} | ${status}`);
    return ratio;
}

console.log('Theme | Element                  | Ratio | Status');
console.log('------|--------------------------|-------|-------');

// Test critical UI elements for both themes
const tests = [
    // Editor
    { fg: 'editor.foreground', bg: 'editor.background', name: 'Editor Text' },
    { fg: 'editorLineNumber.foreground', bg: 'editor.background', name: 'Line Numbers' },
    { fg: 'editorLineNumber.activeForeground', bg: 'editor.background', name: 'Active Line Number' },
    
    // Sidebar
    { fg: 'sideBar.foreground', bg: 'sideBar.background', name: 'Sidebar Text' },
    { fg: 'sideBarTitle.foreground', bg: 'sideBar.background', name: 'Sidebar Title' },
    
    // Tabs
    { fg: 'tab.activeForeground', bg: 'tab.activeBackground', name: 'Active Tab Text' },
    { fg: 'tab.inactiveForeground', bg: 'tab.inactiveBackground', name: 'Inactive Tab Text' },
    
    // Status Bar
    { fg: 'statusBar.foreground', bg: 'statusBar.background', name: 'Status Bar Text' },
    { fg: 'statusBarItem.errorForeground', bg: 'statusBarItem.errorBackground', name: 'Status Error' },
    { fg: 'statusBarItem.warningForeground', bg: 'statusBarItem.warningBackground', name: 'Status Warning' },
    
    // Buttons
    { fg: 'button.foreground', bg: 'button.background', name: 'Button Text' },
    
    // Inputs
    { fg: 'input.foreground', bg: 'input.background', name: 'Input Text' },
    { fg: 'input.placeholderForeground', bg: 'input.background', name: 'Input Placeholder' },
    
    // Lists
    { fg: 'list.activeSelectionForeground', bg: 'list.activeSelectionBackground', name: 'List Selection' },
    { fg: 'list.hoverForeground', bg: 'list.hoverBackground', name: 'List Hover' },
    
    // Widgets
    { fg: 'editorSuggestWidget.foreground', bg: 'editorSuggestWidget.background', name: 'Suggestion Widget' },
    { fg: 'quickInput.foreground', bg: 'quickInput.background', name: 'Quick Input' },
    
    // Terminal
    { fg: 'terminal.foreground', bg: 'terminal.background', name: 'Terminal Text' },
];

console.log('\n🌲 DARK THEME CONTRAST TESTS');
tests.forEach(test => {
    const fg = darkTheme.colors[test.fg];
    const bg = darkTheme.colors[test.bg];
    testContrast(fg, bg, test.name, 'Dark ');
});

console.log('\n❄️ LIGHT THEME CONTRAST TESTS');
tests.forEach(test => {
    const fg = lightTheme.colors[test.fg];
    const bg = lightTheme.colors[test.bg];
    testContrast(fg, bg, test.name, 'Light');
});

// Find problematic contrasts
console.log('\n🚨 POTENTIAL CONTRAST ISSUES TO REVIEW:');

function findIssues(theme, themeName) {
    const issues = [];
    tests.forEach(test => {
        const fg = theme.colors[test.fg];
        const bg = theme.colors[test.bg];
        const ratio = getContrastRatio(fg, bg);
        if (ratio < 4.5) {
            issues.push({ name: test.name, ratio, fg, bg });
        }
    });
    return issues;
}

const darkIssues = findIssues(darkTheme, 'Dark');
const lightIssues = findIssues(lightTheme, 'Light');

if (darkIssues.length > 0) {
    console.log('\nDark Theme Issues:');
    darkIssues.forEach(issue => {
        console.log(`  ❌ ${issue.name}: ${issue.ratio.toFixed(2)} (${issue.fg} on ${issue.bg})`);
    });
}

if (lightIssues.length > 0) {
    console.log('\nLight Theme Issues:');
    lightIssues.forEach(issue => {
        console.log(`  ❌ ${issue.name}: ${issue.ratio.toFixed(2)} (${issue.fg} on ${issue.bg})`);
    });
}

if (darkIssues.length === 0 && lightIssues.length === 0) {
    console.log('✅ No critical contrast issues found!');
} else {
    console.log('\n💡 Consider improving these elements for better accessibility.');
}

console.log('\n📊 WCAG Guidelines:');
console.log('  • AAA: 7:1 contrast (enhanced accessibility)');
console.log('  • AA: 4.5:1 contrast (minimum accessibility)');
