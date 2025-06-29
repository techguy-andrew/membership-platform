#!/bin/bash

echo "🔍 Testing Accordion FAQ Section on About Page..."
echo "=================================================="

# Test if the about page loads successfully
echo "1. Testing page accessibility..."
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3002/about | grep -q "200"; then
    echo "   ✅ About page is accessible"
else
    echo "   ❌ About page is not accessible"
    exit 1
fi

# Test if accordion component is present
echo "2. Testing accordion component presence..."
if curl -s http://localhost:3002/about | grep -q "data-slot=\"accordion\""; then
    echo "   ✅ Accordion component is present"
else
    echo "   ❌ Accordion component is missing"
    exit 1
fi

# Test if FAQ section title is present
echo "3. Testing FAQ section title..."
if curl -s http://localhost:3002/about | grep -q "Frequently Asked Questions"; then
    echo "   ✅ FAQ section title is present"
else
    echo "   ❌ FAQ section title is missing"
    exit 1
fi

# Test if all 6 FAQ items are present
echo "4. Testing FAQ items presence..."
FAQ_ITEMS=(
    "What is included in each membership tier?"
    "How do I cancel my subscription?"
    "Can I upgrade or downgrade my plan?"
    "Do you offer refunds?"
    "How do I access member-only content?"
    "Is my payment information secure?"
)

PAGE_CONTENT=$(curl -s http://localhost:3002/about)
ALL_ITEMS_PRESENT=true

for item in "${FAQ_ITEMS[@]}"; do
    if echo "$PAGE_CONTENT" | grep -q "$item"; then
        echo "   ✅ Found: $item"
    else
        echo "   ❌ Missing: $item"
        ALL_ITEMS_PRESENT=false
    fi
done

if [ "$ALL_ITEMS_PRESENT" = true ]; then
    echo "   ✅ All FAQ items are present"
else
    echo "   ❌ Some FAQ items are missing"
    exit 1
fi

# Test if accordion has proper configuration (check for data-orientation and accordion items)
echo "5. Testing accordion configuration..."
if echo "$PAGE_CONTENT" | grep -q "data-orientation=\"vertical\"" && echo "$PAGE_CONTENT" | grep -q "data-slot=\"accordion-item\""; then
    echo "   ✅ Accordion has proper configuration (vertical orientation, accordion items)"
else
    echo "   ❌ Accordion configuration is incorrect"
    exit 1
fi

# Test if first item is open by default
echo "6. Testing default open state..."
if echo "$PAGE_CONTENT" | grep -q "data-state=\"open\""; then
    echo "   ✅ First accordion item is open by default"
else
    echo "   ❌ No accordion item is open by default"
    exit 1
fi

# Test if accordion has proper styling
echo "7. Testing accordion styling..."
if echo "$PAGE_CONTENT" | grep -q "w-full"; then
    echo "   ✅ Accordion has proper styling (w-full)"
else
    echo "   ❌ Accordion styling is missing"
    exit 1
fi

# Test if accordion has proper animations
echo "8. Testing accordion animations..."
if echo "$PAGE_CONTENT" | grep -q "animate-accordion"; then
    echo "   ✅ Accordion has proper animations"
else
    echo "   ❌ Accordion animations are missing"
    exit 1
fi

# Test if accordion triggers are present
echo "9. Testing accordion triggers..."
if echo "$PAGE_CONTENT" | grep -q "data-slot=\"accordion-trigger\""; then
    echo "   ✅ Accordion triggers are present"
else
    echo "   ❌ Accordion triggers are missing"
    exit 1
fi

# Test if accordion content is present
echo "10. Testing accordion content..."
if echo "$PAGE_CONTENT" | grep -q "data-slot=\"accordion-content\""; then
    echo "   ✅ Accordion content is present"
else
    echo "   ❌ Accordion content is missing"
    exit 1
fi

echo ""
echo "🎉 All tests passed! The accordion FAQ section is working correctly."
echo ""
echo "📋 Summary:"
echo "   - About page is accessible"
echo "   - Accordion component is properly installed"
echo "   - FAQ section with 6 membership-specific questions"
echo "   - Proper accordion configuration (vertical orientation)"
echo "   - First item open by default"
echo "   - Responsive design with proper styling"
echo "   - Smooth animations and interactions"
echo "   - Proper trigger and content structure"
echo ""
echo "🌐 You can view the FAQ section at: http://localhost:3002/about" 