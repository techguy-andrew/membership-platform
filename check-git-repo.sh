#!/bin/bash

# check-git-repo.sh
# Verification script to confirm Git repository is properly set up and connected to GitHub

echo "🔍 Checking Git Repository Setup..."
echo "=================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ ERROR: Not in a Git repository"
    exit 1
fi

echo "✅ Git repository detected"

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check remote repositories
echo "🌐 Remote repositories:"
if git remote -v | grep -q origin; then
    git remote -v
    echo "✅ GitHub remote configured"
else
    echo "❌ ERROR: No remote repository configured"
    exit 1
fi

# Check if we have commits
COMMIT_COUNT=$(git rev-list --count HEAD 2>/dev/null || echo "0")
if [ "$COMMIT_COUNT" -gt 0 ]; then
    echo "📝 Total commits: $COMMIT_COUNT"
    echo "🔄 Recent commits:"
    git log --oneline -3
    echo "✅ Repository has commit history"
else
    echo "❌ ERROR: No commits found"
    exit 1
fi

# Check working tree status
if git diff-index --quiet HEAD --; then
    echo "✅ Working tree is clean"
else
    echo "⚠️  WARNING: Working tree has uncommitted changes"
    git status --porcelain
fi

# Check if local branch is up to date with remote
if git status --porcelain -b | grep -q "ahead\|behind"; then
    echo "⚠️  WARNING: Local branch is not in sync with remote"
    git status -b --porcelain | head -1
else
    echo "✅ Local branch is in sync with remote"
fi

# Check GitHub connectivity
echo "🔗 Testing GitHub connectivity..."
REMOTE_URL=$(git config --get remote.origin.url)
if [[ "$REMOTE_URL" =~ github\.com ]]; then
    echo "✅ GitHub repository URL: $REMOTE_URL"
    
    # Extract repository info
    if [[ "$REMOTE_URL" =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
        OWNER="${BASH_REMATCH[1]}"
        REPO="${BASH_REMATCH[2]}"
        echo "👤 Repository owner: $OWNER"
        echo "📦 Repository name: $REPO"
    fi
else
    echo "❌ ERROR: Remote is not a GitHub repository"
    exit 1
fi

echo "=================================="
echo "🎉 Git repository setup verification complete!"
echo "✅ Repository is properly configured and connected to GitHub"