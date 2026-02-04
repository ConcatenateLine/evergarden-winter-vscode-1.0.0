# Python Syntax Test File
# This file tests various syntax elements to verify theme colors

# ===== COMMENTS =====
# Single line comment
"""
Multi-line comment
with multiple lines
"""

# ===== KEYWORDS & CONTROL FLOW =====
name = "Evergarden"
version = 1.0
is_dark = True
is_enabled = False
none_value = None

if is_dark:
    print("Dark theme active")
elif not is_dark:
    print("Light theme active")
else:
    print("Unknown theme")

for i in range(10):
    print(f"Iteration {i}")

while condition:
    # do something
    pass

try:
    risky_operation()
except ValueError as error:
    print(f"Error occurred: {error}")
except (TypeError, AttributeError) as error:
    print(f"Multiple error types: {error}")
finally:
    print("Cleanup complete")

# ===== FUNCTIONS & DEFINITIONS =====
def greet(name: str) -> str:
    """Function with type hints and docstring"""
    return f"Hello, {name}"

def arrow_function(param1: int, param2: int) -> int:
    return param1 + param2

def *args_func(*args, **kwargs):
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

# ===== CLASSES =====
class ThemeManager:
    """Theme manager class with various methods"""
    
    def __init__(self, theme: str):
        self.current_theme = theme
        self.version = 1.0
        self._private_var = "private"
    
    @property
    def theme(self) -> str:
        return self.current_theme
    
    @theme.setter
    def theme(self, value: str):
        self.current_theme = value
    
    def get_theme(self) -> str:
        return self.current_theme
    
    def set_theme(self, theme: str) -> None:
        self.current_theme = theme
    
    @staticmethod
    def static_method():
        return "Static method"
    
    @classmethod
    def class_method(cls):
        return f"Class method of {cls.__name__}"

class ColorScheme(ThemeManager):
    """Inherited class"""
    
    def __init__(self, theme: str, colors: dict):
        super().__init__(theme)
        self.colors = colors

# ===== IMPORTS =====
import os
import sys
from typing import List, Dict, Optional, Union, Any
from dataclasses import dataclass
from enum import Enum
import json as js
from .local_module import local_function
from ..parent_module import parent_function

# ===== TYPES & TYPE HINTS =====
ThemeType = str
ColorHex = str
ThemeConfig = Dict[str, Any]
OptionalString = Optional[str]

# ===== ENUMS =====
class ThemeEnum(Enum):
    DARK = "dark"
    LIGHT = "light"
    AUTO = "auto"

# ===== DATA CLASSES =====
@dataclass
class ThemeData:
    name: str
    version: float
    colors: List[str]
    enabled: bool = True

# ===== STRINGS & NUMBERS =====
string_value = "This is a string"
raw_string = r"Raw string with \n no escape"
unicode_string = "Unicode string with ñiño"

template_string = f"Template string with {name} interpolation"
multiline_string = """
    Multiline
    string
    example
"""

integer = 42
float_val = 3.14159
hex_val = 0xFF0000
octal_val = 0o755
binary_val = 0b1010
complex_val = 3 + 4j

# ===== OPERATORS =====
sum_val = a + b
difference = a - b
product = a * b
quotient = a / b
floor_div = a // b
remainder = a % b
power = a ** b

is_equal = a == b
is_not_equal = a != b
is_greater = a > b
is_less_or_equal = a <= b

logical_and = a and b
logical_or = a or b
logical_not = not a

bitwise_and = a & b
bitwise_or = a | b
bitwise_xor = a ^ b
left_shift = a << b
right_shift = a >> b

# ===== LISTS, TUPLES, DICTS =====
numbers = [1, 2, 3, 4, 5]
nested_list = [[1, 2], [3, 4]]
list_comprehension = [x * 2 for x in numbers if x % 2 == 0]

coordinates = (10, 20)
named_tuple = (x=1, y=2, z=3)

theme_config = {
    "name": "Evergarden",
    "version": 1.0,
    "colors": {
        "background": "#0E1012",
        "foreground": "#e2e3e4"
    }
}

dict_comprehension = {x: x**2 for x in range(5)}

# ===== SETS =====
unique_numbers = {1, 2, 3, 4, 5}
set_comprehension = {x**2 for x in range(5)}

# ===== LAMBDA FUNCTIONS =====
square = lambda x: x * 2
add = lambda x, y: x + y

# ===== GENERATORS & ITERATORS =====
def number_generator():
    for i in range(10):
        yield i

gen_exp = (x * 2 for x in range(5))

# ===== CONTEXT MANAGERS =====
with open("file.txt", "r") as f:
    content = f.read()

# ===== ASYNC/AWAIT =====
import asyncio

async def fetch_data(url: str) -> dict:
    try:
        response = await asyncio.get_event_loop().run_in_executor(
            None, lambda: {"data": "mock"}
        )
        return response
    except Exception as error:
        print(f"Fetch error: {error}")
        raise

async def main():
    data = await fetch_data("https://example.com")
    print(data)

# ===== DECORATORS =====
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(0.1)

# ===== REGULAR EXPRESSIONS =====
import re
pattern = r"test[0-9]+"
regex = re.compile(pattern, re.IGNORECASE | re.MULTILINE)

# ===== EXCEPTIONS =====
class ThemeError(Exception):
    """Custom exception for theme errors"""
    pass

class ColorError(ThemeError):
    """Custom exception for color errors"""
    pass

# ===== MODULES & PACKAGES =====
if __name__ == "__main__":
    print("Running as main module")

# ===== BUILT-IN FUNCTIONS =====
print(len(numbers))
print(max(numbers))
print(min(numbers))
print(sum(numbers))
print(sorted(numbers))
print(reversed(numbers))
print(enumerate(numbers))
print(zip(numbers, numbers))

# ===== TYPE CHECKING =====
isinstance(name, str)
issubclass(ColorScheme, ThemeManager)
hasattr(theme_config, "get")
callable(greet)

# ===== ATTRIBUTES =====
getattr(theme_config, "name", "default")
setattr(theme_config, "new_key", "new_value")
delattr(theme_config, "new_key")

# ===== SLICING =====
numbers[0:5]
numbers[::2]
numbers[::-1]

# ===== BOOLEAN OPERATIONS =====
bool_value = bool(0)
all_values = all([True, False, True])
any_values = any([True, False, True])

# ===== MATH OPERATIONS =====
import math
math.sqrt(16)
math.pow(2, 3)
math.pi
math.e
