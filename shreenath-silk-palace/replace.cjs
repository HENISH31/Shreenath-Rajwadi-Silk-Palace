const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (!filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Replace max-w-[1400px] and max-w-7xl containers with full width
    if (content.includes('max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8')) {
        content = content.replace(/max-w-\[1400px\] mx-auto px-4 sm:px-6 lg:px-8/g, 'w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16');
        changed = true;
    }
    
    if (content.includes('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8')) {
        content = content.replace(/max-w-7xl mx-auto px-4 sm:px-6 lg:px-8/g, 'w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16');
        changed = true;
    }

    // Special fix for AboutUs without pt
    if (content.includes('max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20')) {
        content = content.replace(/max-w-\[1400px\] mx-auto px-4 sm:px-6 lg:px-8 pb-20/g, 'w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pb-20');
        changed = true;
    }
    
    // For navigation container without padding
    if (content.includes('max-w-[1400px] mx-auto')) {
        content = content.replace(/max-w-\[1400px\] mx-auto/g, 'w-full max-w-[1800px] mx-auto');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated', filePath);
    }
});
