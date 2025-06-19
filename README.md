1. Check if Git is installed
git --version

2. Configure user details
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --list

3. Create a workspace
mkdir GitLabWorkspace
cd GitLabWorkspace
git init

4. Create and track a file
echo "print('Hello Git!')" > hello.py
git status
git add hello.py
git commit -m "Initial commit with hello.py"

5. View history
git log
