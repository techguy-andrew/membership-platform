#!/bin/bash
# Simple script to run all checks

echo "🔍 Running all checks..."

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Run all check scripts in the same directory
for script in "$SCRIPT_DIR"/*.sh; do
    if [ -f "$script" ] && [ "$(basename "$script")" != "run-checks.sh" ]; then
        echo "Running $(basename "$script")..."
        bash "$script"
        echo ""
    fi
done

echo "✅ All checks completed!" 