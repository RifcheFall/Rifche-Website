#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 Copy Charity Website Files to Project"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Please provide the FULL PATH to your charity website folder"
echo "Example: /Users/cheriffall/Desktop/Charity-Website"
echo ""
read -p "Enter folder path: " SOURCE_FOLDER

if [ ! -d "$SOURCE_FOLDER" ]; then
    echo "❌ Error: Folder not found: $SOURCE_FOLDER"
    exit 1
fi

echo ""
echo "📁 Copying files..."
echo ""

# Create destination folders
mkdir -p public/charity-website/css
mkdir -p public/charity-website/images

# Copy index.html (or any HTML file)
if [ -f "$SOURCE_FOLDER/index.html" ]; then
    cp "$SOURCE_FOLDER/index.html" public/charity-website/
    echo "✅ Copied index.html"
elif ls "$SOURCE_FOLDER"/*.html 1> /dev/null 2>&1; then
    HTML_FILE=$(ls "$SOURCE_FOLDER"/*.html | head -1)
    cp "$HTML_FILE" public/charity-website/index.html
    echo "✅ Copied $(basename "$HTML_FILE") as index.html"
else
    echo "⚠️  No HTML file found. Please copy manually."
fi

# Copy CSS files
if [ -d "$SOURCE_FOLDER/css" ]; then
    cp -r "$SOURCE_FOLDER/css/"* public/charity-website/css/ 2>/dev/null
    echo "✅ Copied CSS files from css/ folder"
elif ls "$SOURCE_FOLDER"/*.css 1> /dev/null 2>&1; then
    cp "$SOURCE_FOLDER"/*.css public/charity-website/css/
    echo "✅ Copied CSS files"
else
    echo "⚠️  No CSS files found"
fi

# Copy images
if [ -d "$SOURCE_FOLDER/images" ]; then
    cp -r "$SOURCE_FOLDER/images/"* public/charity-website/images/ 2>/dev/null
    echo "✅ Copied images from images/ folder"
elif [ -d "$SOURCE_FOLDER/img" ]; then
    cp -r "$SOURCE_FOLDER/img/"* public/charity-website/images/ 2>/dev/null
    echo "✅ Copied images from img/ folder"
else
    echo "⚠️  No images folder found"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Copy complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Check your HTML file: public/charity-website/index.html"
echo "   2. Update image paths in HTML:"
echo "      Change: src=\"images/photo.jpg\""
echo "      To: src=\"/charity-website/images/photo.jpg\""
echo "   3. Update CSS paths in HTML:"
echo "      Change: href=\"style.css\""
echo "      To: href=\"/charity-website/css/style.css\""
echo ""
echo "🌐 Your website will be available at: /charity-website/index.html"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
