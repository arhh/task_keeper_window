# G Apps Navigator
An electron app to log into Google Calendar.

## Rationale
As of November 2026, there is no desktop tool to interact with Google Calendar, Tasks, and Notes.

## Notes
* Executables for Linux are created on pushes to the `main` branch or pull requests to `main`. They are stored as _GitHub Actions Artifacts_ for one day.
* This application does not support Windows and macOS.

## Running Locally
The project is made with electron-builder and node.js 24
1. Clone repo.
2. Run `npm ci` in the project codebase.
3. Run `npm run start` to start the application in development mode (local storage location is printed to console in case you want to clear it later).
4. Run `npm run package` to create an executable for the current platform.
