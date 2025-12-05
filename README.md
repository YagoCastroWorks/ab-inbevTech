# ab-inbevTech
Desafio Tecnico em Cypress

## Features

Testes E2E (Frontend): 3 cenários de testes automatizados.
o Aplicação Frontend: https://front.serverest.dev/
Testes Automatizados (API): 3 cenários de testes automatizados.
o API (Swagger): https://serverest.dev/

## Prerequisites

- Git for version control
- [Node.js](https://nodejs.org/)
- VS Code

## Installation

1. Clone the repository:
   ```bash
   git clone 
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
## Usage

### Running Tests

#### UI

```bash
npm run test:ui
```
#### API

```bash
npm run test:api
```

## Folder Structure

```
.
├── pages/                # Page Object Models (POMs) organized alphabetically
│   ├── LoginPage.js      # Root-level page objects
│   └── PageManager.js    # Hierarchical fixture system combining all pages
│
├── tests/                # Test scripts organized by type
│   ├── api/              # API test scripts
│   └── ui/               # UI test scripts organized by functional domain│
├── support/              # Utility functions
├── fixtures/             # Test files
├── test-results/         # Test artifacts
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies
```
