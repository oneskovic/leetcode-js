import glob
import os

js_files = glob.glob('*.js')
for js_file in js_files:
    with open(js_file, 'r', encoding='utf-8') as f:
        src_lines = f.readlines()
    # Find indices of lines that contain // another
    line_sep = [i for i, line in enumerate(src_lines) if '// another' in line or '//another' in line]
    if len(line_sep) > 0:
        new_lines = src_lines[:line_sep[0]]
        # Rewrite the file
        with open(js_file, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        
