// JavaScript/TypeScript Syntax Test File
// This file tests various syntax elements to verify theme colors

// ===== COMMENTS =====
// Single line comment
/* Multi-line comment */
/**
 * JSDoc comment with @param and @return
 * @param {string} name - The name parameter
 * @returns {string} - A greeting
 */

// ===== KEYWORDS & CONTROL FLOW =====
const name = "Evergarden";
let version = 1.0;
var isDark = true;

if (isDark) {
    console.log("Dark theme active");
} else if (!isDark) {
    console.log("Light theme active");
} else {
    console.log("Unknown theme");
}

for (let i = 0; i < 10; i++) {
    console.log(`Iteration ${i}`);
}

while (condition) {
    // do something
}

do {
    // something
} while (condition);

switch (theme) {
    case "dark":
        console.log("Dark");
        break;
    case "light":
        console.log("Light");
        break;
    default:
        console.log("Default");
}

// ===== FUNCTIONS & ARROWS =====
function greet(name) {
    return `Hello, ${name}`;
}

const arrowFunction = (param1, param2) => {
    return param1 + param2;
};

const shortArrow = x => x * 2;

// ===== CLASSES & INTERFACES =====
class ThemeManager {
    private currentTheme: string;
    protected version: number;
    
    constructor(theme: string) {
        this.currentTheme = theme;
        this.version = 1.0;
    }
    
    public getTheme(): string {
        return this.currentTheme;
    }
    
    public setTheme(theme: string): void {
        this.currentTheme = theme;
    }
}

interface ITheme {
    name: string;
    colors: string[];
}

interface IConfigurable {
    configure(options: any): void;
}

// ===== TYPES & TYPEDEFINITIONS =====
type ThemeType = "dark" | "light" | "auto";
type ColorHex = string;
type ThemeConfig = {
    name: string;
    background: ColorHex;
    foreground: ColorHex;
};

enum ThemeEnum {
    DARK = "dark",
    LIGHT = "light",
    AUTO = "auto"
}

// ===== STRINGS & NUMBERS =====
const stringValue = "This is a string";
const templateString = `Template string with ${name} interpolation`;
const multilineString = `
    Multiline
    string
    example
`;

const integer = 42;
const float = 3.14159;
const hex = 0xFF0000;
const binary = 0b1010;
const octal = 0o755;
const bigInt = 9007199254740991n;

// ===== OPERATORS =====
const sum = a + b;
const difference = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;

const isEqual = a === b;
const isNotEqual = a !== b;
const isGreater = a > b;
const isLessOrEqual = a <= b;

const logicalAnd = a && b;
const logicalOr = a || b;
const logicalNot = !a;

const bitwiseAnd = a & b;
const bitwiseOr = a | b;
const bitwiseXor = a ^ b;
const leftShift = a << b;
const rightShift = a >> b;

// ===== REGULAR EXPRESSIONS =====
const regex = /pattern/g;
const regexWithFlags = /test[0-9]+/gi;
const regexConstructor = new RegExp("pattern", "flags");

// ===== IMPORTS & EXPORTS =====
import { useState, useEffect } from "react";
import * as fs from "fs";
import { ThemeManager as TM } from "./theme-manager";
import type { ThemeType } from "./types";

export default ThemeManager;
export { ThemeManager, ITheme };
export type { ThemeConfig };

// ===== DECORATORS & METADATA =====
@sealed
class DecoratorExample {
    @log
    method() {
        console.log("Method called");
    }
}

// ===== ERROR HANDLING =====
try {
    riskyOperation();
} catch (error) {
    console.error("Error occurred:", error);
} finally {
    console.log("Cleanup complete");
}

throw new Error("Something went wrong");

// ===== ASYNC/AWAIT =====
async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}

// ===== GENERATORS =====
function* numberGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// ===== MODULES & NAMESPACES =====
namespace ThemeNamespace {
    export const VERSION = "1.0.0";
    
    export class Util {
        static formatColor(hex: string): string {
            return hex.toUpperCase();
        }
    }
}

// ===== PROPERTIES & ACCESSORS =====
class ColorScheme {
    private _primary: string = "#000000";
    
    get primary(): string {
        return this._primary;
    }
    
    set primary(value: string) {
        this._primary = value;
    }
}

// ===== NULL & UNDEFINED =====
const nullValue = null;
const undefinedValue = undefined;
const optionalValue?: string = undefined;

// ===== SYMBOLS =====
const symbolKey = Symbol("key");
const wellKnownSymbol = Symbol.iterator;

// ===== OBJECTS & PROPERTIES =====
const themeConfig = {
    name: "Evergarden",
    version: 1.0,
    colors: {
        background: "#0E1012",
        foreground: "#e2e3e4"
    },
    ["computed-key"]: "value"
};

const { name, version } = themeConfig;
const { colors: { background, foreground } } = themeConfig;

// ===== ARRAY METHODS =====
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// ===== SPREAD & REST =====
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

function restParams(...args: any[]) {
    console.log(args);
}

// ===== DESTRUCTURING =====
const [first, second, ...rest] = array1;
const { primary: mainColor, secondary: accentColor } = colorScheme;
