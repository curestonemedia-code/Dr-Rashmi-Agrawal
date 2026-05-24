const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            var filepath = path.join(dir, file);
            fs.stat(filepath, function(err, stats) {
                if (stats.isDirectory()) {
                    walk(filepath, callback);
                } else if (stats.isFile() && (filepath.endsWith('.tsx') || filepath.endsWith('.ts'))) {
                    callback(filepath);
                }
            });
        });
    });
}

walk('./src', function(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;
    
    // Replace standard Tailwind classes
    content = content.replace(/blue-/g, 'pink-');
    // Replace hex codes for the specific blue
    content = content.replace(/#2563eb/g, '#ef8b92');
    
    if (content !== original) {
        fs.writeFileSync(filepath, content);
        console.log(`Updated ${filepath}`);
    }
});
