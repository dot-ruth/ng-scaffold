# Angular Project Scaffold (`ng-scaf`)

A simple CLI tool to scaffold Angular projects with a clean, best-practice folder structure. Ideal for quickly setting up modular and maintainable Angular applications.

---

## Features

- Generates a new Angular project with sensible defaults
- Creates a scalable folder structure (`features`, `core`, `shared`, etc.)
- Supports additional configuration options (style, tests, strict mode, etc.)

---

## Usage

```bash
npm i -g ng-scaf

ng-scaf <project-name> [options] 

# To create a project in your current directory
ng-scaf . [options] 
```
### Options
| Option                    | Example                         | Description                                                     |
| ------------------------- | ------------------------------- | --------------------------------------------------------------- |
| `--prefix`                | `--prefix=app`                  | Sets the prefix for generated components (e.g., `app-header`)   |
| `--style`                 | `--style=css`                   | Chooses default stylesheet format (`css`, `scss`, `sass`, etc.) |
| `--skip-tests`            | `--skip-tests=true`             | If `true`, skips generating `.spec.ts` test files               |
| `--skip-package-json`     | `--skip-package-json=false`     | If `true`, skips creating `package.json`                        |
| `--skip-install`          | `--skip-install=true`           | Prevents automatic installation of npm packages                 |
| `--strict`                | `--strict=true`                 | Enables Angular strict mode for better type safety              |
| `--minimal`               | `--minimal=false`               | If `true`, generates the most basic setup without example code  |
| `--standalone`            | `--standalone=true`             | Uses standalone components instead of NgModules                 |
| `--ssr`                   | `--ssr=false`                   | Enables Server-Side Rendering (Angular Universal)               |



 
