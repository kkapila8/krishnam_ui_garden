# UC Component Library with Code Quality Checks

## Project Overview

This project is a UI Component Library built using React and Storybook. It includes code quality tools and a CI/CD pipeline to ensure that all code is clean, consistent, and tested before being committed or deployed.

The application is containerized using Docker and runs on localhost:8018.

---

## Features

* Reusable UI components (Button, Card, Dropdown, etc.)
* Storybook for component visualization
* ESLint for code quality checks
* Prettier for code formatting
* Husky for pre-commit hooks
* GitHub Actions for CI/CD pipeline
* Docker for containerized deployment

---

## Installation

Clone the repository:

```bash
git clone <your-repo-link>
cd krishnam_ui_garden
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Run React app:

```bash
npm start
```

Run Storybook:

```bash
npm run storybook
```

---

## Code Quality Tools

### ESLint

Used to detect code errors and enforce best practices.

```bash
npm run lint
```

### Prettier

Used to maintain consistent code formatting.

Check formatting:

```bash
npm run format:check
```

Fix formatting:

```bash
npm run format
```

---

## Husky (Pre-commit Hooks)

Husky is used to run checks before committing code.

Pre-commit checks include:

* ESLint
* Prettier
* Tests

If any check fails, the commit is blocked.

---

## CI/CD Pipeline (GitHub Actions)

GitHub Actions runs automatically on every push and pull request.

Pipeline steps:

1. Install dependencies
2. Run ESLint
3. Run Prettier check
4. Run tests
5. Build Storybook

If any step fails, the build fails.

---

## Docker Setup

Build Docker image:

```bash
docker build -t kapila_krishnam_coding_assignment13 .
```

Run Docker container:

```bash
docker run -p 8018:8018 kapila_krishnam_coding_assignment13
```

---

## Access Application

Open in browser:

http://localhost:8018

This will display the Storybook UI Component Library.

---

## Testing

Run tests:

```bash
npm test
```

---

## Summary

This project demonstrates:

* Local code quality enforcement using Husky
* Code validation using ESLint and Prettier
* Automated checks using GitHub Actions
* Deployment using Docker

---

## Author

Krishnam Kapila

## 1 break any code
const a=1

## 2: 
git add .
git commit -m "break code"

## 3:
git commit -m "force commit" --no-verify
git push
## Go to GitHub → Actions
Expected: Build FAILS

## 3: FIX CODE
Run: npx prettier --write .
npm run lint
npm test

## 4: Commit again
git add .
git commit -m "fix code"
git push
## GitHub Actions Expected: Build PASSES

## FOR ESCLINT

## Step 1: check the rules of the eslint
## Step 2: Break code intentionally
Add this in any file:
const a = 10;
## Step 3: Try to commit
git add .
git commit -m "eslint error demo"
## Expected result: Commit FAILS Husky blocks it

## Step 4: Show GitHub failure
git commit -m "force commit" --no-verify
git push

## Step 5: Fix it
Remove the error: remove unused variable or console.log

## Then:
npm run lint
git add .
git commit -m "fix eslint"
git push
## Result: Build passes