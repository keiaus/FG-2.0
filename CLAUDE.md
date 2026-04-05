# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack flight booking application built with Vite, a build tool that aims to provide a faster and leaner development experience for modern web projects. It uses axios@1.14.0 and express@4.22.1 for end-to-end connection between the frontend and backend.

## Tech Stack

- **Runtime**: Vite, Node.js
- **Framework**: React, Vite
- **Frontend**: React 19, axios@1.14.0
- **Styling**: CSS
- **External Service**: Duffel
- **Backend**: express@4.22.1, mongoose@8.16.1
- **Database**: MongoDB

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Local Database Setup

This project uses MongoDB:

```bash
cd /fg-2.0/src/server
node server.js  # Start mongoose server
```

Database connection string: `mongodb+srv://<user>:<db_password>@<host>.id6tcy7.mongodb.net/?appName=<app_name>`

## Architecture

### File Structure

- `/src/client/pages/` - React Router pages with file-based routing
- `/src/server/` - Backend API endpoints and database model implementation
- `/src/components/` - Base components

### Key Patterns

1. **API Calls**: All API communication goes through express@4.22.1, ensuring end-to-end client-server security
2. **Database Access**: Use mongoose@8.16.1 for all database operations with the schema defined in `/fg-2.0/src/server/models`
4. **Component Library**: UI components are in `/src/components/` - use these for consistent UI

## Important Notes

- Try to keep things in one function unless composable or reusablte
- DO NOT do unnecessary destructuring of variables
- DO NOT use else statements unless necessary
- DO NOT use try catch if it can be avoided
- DO NOT expose anything from the .env file
- DO NOT expose any API keys
- AVOID try catch where possible
- AVOID else statements
- AVOID using `any` type
- AVOID let statements
- PREFER single word variable names where possible
- No test or lint scripts are currently configured