---
marp: true
title: 1-Hour Introduction to Modern Software and Git
description:
  Provide a foundational understanding of how modern software is built and how to use Git in collaborative development.
paginate: true
---

# Introduction to Modern Software and Git

### Objective

Provide a foundational understanding of how modern software is built and how to use Git in collaborative development.

---

# A quick video to get you started

![](https://www.youtube.com/embed/pBy1zgt0XPc?si=qbr6sBnxUlA_EXmS)

---

# Introduction to Version Control

## What is version control?

- A system that records changes to a file or set of files over time.
- Allows you to revert files to a previous state.

---

# Why is version control important?

- Track and manage changes in code.
- **Collaboration**: Multiple people can work on the same project.
- **Backup and restore**: Revert to previous versions of your project.
- **Branching and merging**: Experiment with different features safely.

---

# Overview of Git as a Version Control System

- Git is a **distributed** version control system.
- Created by Linus Torvalds in 2005.
- Allows for multiple workflows and collaboration models.

---

# Distributed?

- **Centralized**: A single server stores the repository.
- **Distributed**: Every user has a full copy of the repository.

This means, with Git, you can work offline and have full access to the repository's history.

---

# Remote and Local Repositories

- **Remote repository**: A copy of the repository stored on a server (often, GitHub).
- **Local repository**: A copy of the repository stored on your computer.

---

# Git Basics

- **Repository**: A collection of files and folders.
- **Commit**: A snapshot of the repository at a specific point in time.
- **Branch**: A parallel version of the repository.
- **Merge**: Combine changes from different branches.

---

# Git Workflow

1. **Clone** the repository or **pull** the latest changes.
2. **Create a branch** for your feature or bug fix.
3. **Make changes** to the code.
4. **Commit** your changes.
5. **Push** your changes to the remote repository.
6. **Create a pull request** for code review.
7. **Merge** the pull request.
8. Repeat!

---

# Git Workflow

**tl;dr**

You get the latest changes from the remote repository, make your changes locally on your own branch and test them, then
push your changes back to the remote repository and create a pull request for code review before merging.

---

# Push and Pull

- **Push** always refers to sending your changes to a remote repository.
- **Pull** always refers to getting changes from a remote repository.

---

# Basic Git Commands

## git init

Initialize a new Git repository.

```bash
git init
```

---

## git clone

Clone an existing repository.

```bash
git clone <repository-url>
```

---

## git status

Show the working tree status.

```bash
git status
```

---

## git add

Add file contents to the index.

```bash
git add <file>
```

Alternatively, use `git add .` to add all changes.

**NB: I use this... a lot.**

---

## git commit

Record changes to the repository.

```bash
git commit -m "Commit message"
```

---

## git push

Update remote refs along with associated objects.

```bash
git push
```

---

## git pull

Fetch from and integrate with another repository or a local branch.

```bash
git pull
```

---

## git branch

List, create, or delete branches.

```bash
git branch
```

---

## git checkout

Switch branches or restore working tree files.

```bash
git checkout <branch-name>
```

---

## git merge

Join two or more development histories together.

```bash
git merge <branch-name>
```

---

# Working with GitHub

## Creating a repository

1. Go to GitHub.
2. Click on "New repository".
3. Fill in the repository details.
4. Click "Create repository".

---

## Cloning a repository

```bash
git clone <repository-url>
```

---

## Understanding branches

- `master`/`main`: Default branch.
- Feature branches: Separate branches for new features or bug fixes.

---

## Pull requests (PRs)

- A method of submitting contributions.
- Allows for code review before merging.

---

## Merging PRs

1. Review the changes.
2. Address any feedback.
3. Merge the PR once approved.

---

# Collaboration Workflow

## Branching strategy

- Use feature branches.
- Keep `master`/`main` branch clean and **stable**.
- Conventions: `feature/your-name/your-feature`, `bugfix/issue-number/bug-description`.

---

## When to commit?

- Commit often.
- Commit small, logical changes.
- Write descriptive commit messages that explain the changes, such as "Add new endpoint for <yourFeature>".
- Start with a verb in the imperative (command) tense.

---

## Creating and reviewing PRs

- Create a PR for each feature or bug fix.
- Request reviews from team members.
- Discuss and make necessary changes.

---

## Resolving merge conflicts

- Occurs when changes from different branches conflict.
- Resolve by editing the conflicting files.
- Commit the resolved changes.

---

# Summary

- Version control is essential for modern software development.
- Git is a powerful tool for managing code changes.
- GitHub facilitates collaboration and code review.
- Effective branching and PR strategies enhance teamwork.

---

# Questions?

Feel free to ask any questions about Git, GitHub, or the collaboration workflow!
