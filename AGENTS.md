# AGENTS.md

## Cursor Cloud specific instructions

### Repository layout

- `main` currently contains only a placeholder README.
- The runnable application lives on branch `cursor/portfolio-shell-47da` (React + TypeScript + Vite portfolio shell).
- Check out that branch before installing dependencies or running the app:

```bash
git checkout cursor/portfolio-shell-47da
```

### Services

| Service | Required | Start command | URL |
|---------|----------|---------------|-----|
| Vite dev server | Yes | `npm run dev` | http://localhost:5173 |

No database, Docker, or backend services are required.

### Common commands

See `README.md` on `cursor/portfolio-shell-47da` for the canonical setup steps:

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server (port 5173)
- `npm run build` — TypeScript check (`tsc --noEmit`) and production build
- `npm run preview` — preview the production build (port 4173)

There is no dedicated lint script; `npm run build` runs the TypeScript checker.

### Dev server notes

- Use `npm run dev -- --host 0.0.0.0` when the server must be reachable outside localhost (e.g. Cloud Agent VMs).
- For long-running dev sessions, start the server in a tmux session (e.g. `vite-dev-server`) so it survives backgrounding.

### External dependencies

None required for local development. Cloudinary and Vercel are mentioned in the UI/README as future deployment/image-hosting targets only.
