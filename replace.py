import os
import glob

files = glob.glob('src/components/**/*.tsx', recursive=True) + glob.glob('src/app/**/*.tsx', recursive=True)

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    content = content.replace('blue-', 'pink-')
    content = content.replace('#2563eb', '#ef8b92')
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
