#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🌲 Testing Evergarden Winter Theme Package\n');

// Test JSON validity
function testJSONFile(filePath, description) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(content);
        console.log(`✅ ${description}: Valid JSON`);
        return parsed;
    } catch (error) {
        console.log(`❌ ${description}: Invalid JSON - ${error.message}`);
        return null;
    }
}

// Test package.json
console.log('📦 Testing package.json...');
const packageJson = testJSONFile('package.json', 'package.json');
if (packageJson) {
    console.log(`   Name: ${packageJson.name}`);
    console.log(`   Version: ${packageJson.version}`);
    console.log(`   Themes: ${packageJson.contributes.themes.length} theme(s)`);
    
    packageJson.contributes.themes.forEach((theme, index) => {
        console.log(`   ${index + 1}. ${theme.label} (${theme.uiTheme})`);
    });
}

// Test theme files
console.log('\n🎨 Testing theme files...');

const darkTheme = testJSONFile('themes/evergarden-winter-theme.json', 'Dark Theme');
const lightTheme = testJSONFile('themes/evergarden-winter-light-theme.json', 'Light Theme');

if (darkTheme) {
    console.log(`   Dark theme background: ${darkTheme.colors['editor.background']}`);
    console.log(`   Dark theme foreground: ${darkTheme.colors['editor.foreground']}`);
    console.log(`   Color properties: ${Object.keys(darkTheme.colors).length}`);
    console.log(`   Token colors: ${darkTheme.tokenColors.length}`);
    console.log(`   Semantic tokens: ${darkTheme.semanticTokenColors ? 'Yes' : 'No'}`);
}

if (lightTheme) {
    console.log(`   Light theme background: ${lightTheme.colors['editor.background']}`);
    console.log(`   Light theme foreground: ${lightTheme.colors['editor.foreground']}`);
    console.log(`   Color properties: ${Object.keys(lightTheme.colors).length}`);
    console.log(`   Token colors: ${lightTheme.tokenColors.length}`);
    console.log(`   Semantic tokens: ${lightTheme.semanticTokenColors ? 'Yes' : 'No'}`);
}

// Test for required properties
console.log('\n🔍 Testing required VS Code theme properties...');

const requiredProperties = [
    'editor.background',
    'editor.foreground',
    'activityBar.background',
    'sideBar.background',
    'tab.activeBackground',
    'statusBar.background'
];

function testRequiredProperties(theme, themeName) {
    const missing = requiredProperties.filter(prop => !theme.colors[prop]);
    if (missing.length === 0) {
        console.log(`✅ ${themeName}: All required properties present`);
    } else {
        console.log(`❌ ${themeName}: Missing properties: ${missing.join(', ')}`);
    }
}

if (darkTheme) testRequiredProperties(darkTheme, 'Dark Theme');
if (lightTheme) testRequiredProperties(lightTheme, 'Light Theme');

// Test file structure
console.log('\n📁 Testing file structure...');

const requiredFiles = [
    'package.json',
    'README.md',
    'themes/evergarden-winter-theme.json',
    'themes/evergarden-winter-light-theme.json'
];

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}: Exists`);
    } else {
        console.log(`❌ ${file}: Missing`);
    }
});

// Contrast ratio test (simplified)
console.log('\n👀 Testing contrast ratios...');

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

if (darkTheme) {
    const contrast = getContrastRatio(
        darkTheme.colors['editor.foreground'],
        darkTheme.colors['editor.background']
    );
    console.log(`   Dark theme contrast: ${contrast.toFixed(2)} ${contrast >= 4.5 ? '✅' : '⚠️'}`);
}

if (lightTheme) {
    const contrast = getContrastRatio(
        lightTheme.colors['editor.foreground'],
        lightTheme.colors['editor.background']
    );
    console.log(`   Light theme contrast: ${contrast.toFixed(2)} ${contrast >= 4.5 ? '✅' : '⚠️'}`);
}

console.log('\n🎉 Theme testing complete!');
console.log('\n📋 Next steps:');
console.log('1. Open test-theme.html in your browser to visualize the theme');
console.log('2. Install the theme in VS Code to test in real environment');
console.log('3. Test with different file types and languages');
console.log('4. Verify all UI elements look correct');
