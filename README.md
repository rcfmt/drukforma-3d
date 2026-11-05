# DrukForma 3D

Polish-language website for a custom FDM 3D-printing and 3D-design service based in Dąbrowa Górnicza.

## Features

- Responsive marketing website in Polish
- Service, material, equipment, and process sections
- Quote form with model URL support
- STL, 3MF, OBJ, STEP, STP, and ZIP uploads up to 25 MB
- D1-backed quote storage and R2-backed file storage
- Private deployment through OpenAI Sites

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The hosting configuration is declared in `.openai/hosting.json`. Local environment files, generated builds, databases, uploaded files, and credentials are excluded from Git.

## Brand

**DrukForma 3D** — druk 3D na zamówienie, od pomysłu do gotowego elementu.
