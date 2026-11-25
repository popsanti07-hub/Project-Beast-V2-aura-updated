# Project Beast Mode 2.0

A mobile-first Progressive Web App for PET preparation, daily habits, Life Cells and performance records.

## Deploy to GitHub Pages

1. Download and extract this ZIP.
2. Open your existing GitHub repository.
3. Upload the contents of the `Projects-main` folder to the same published folder/path that currently hosts the app. Keep the existing filenames.
4. Commit the changes.
5. Open the deployed app online once and wait for it to finish loading. Refresh once to activate the new service worker.
6. Test the app online before testing offline.

## Existing data compatibility

This version intentionally keeps the existing localStorage key `beastModeDataV1` and retains the existing workout group IDs, event IDs, daily reflections and performance record structure. New habit history, Life Cells balance, reward claims and reward ledger are added to the same stored object.

Before replacing files, export a JSON backup from the currently deployed app. After deployment, open the app on the same device/browser profile. Do not clear browser storage or uninstall the existing PWA during the upgrade.

Importing a JSON backup replaces the current local data after confirmation. Export a fresh backup before importing.

## Life Cells rules

- +10 LC per completed daily habit (8 habits), once per date.
- +50 LC when all eight habits are completed for a date, once per date.
- +150 LC after all seven daily completion bonuses are earned in a configured calendar week.
- Previously earned Life Cells are not deducted when a habit is later unticked or a day is missed.

## Offline behavior

The service worker caches the app shell and uses a versioned cache (`beast-mode-v2`). It is configured for a project subpath such as GitHub Pages `/Projects/`. Offline behavior still needs to be verified on the actual deployed URL and target Android browser.

## Notes

- Data is stored locally in the browser; it is not cloud-synced.
- Water, reading and study targets can be adjusted in Settings.
- Life Cells are motivational points, not money or a medical measure.
- The app does not claim guaranteed health benefits from habit streaks.


## Recovery Mission & Aura Evolution

The Recovery tab adds a configurable personal challenge, daily reflection and urge-management log, a 10-minute Urge Emergency reset, weekly programme, persistent aura XP, milestone unlocks, and a comeback/restart history. Recovery data is stored in the existing `beastModeDataV1` local-storage record under `recovery`, so existing user data is migrated without replacing their existing habits, PET records or Life Cells.

Aura XP and unlocked milestones are cumulative and are not reset when the current challenge streak is restarted. Challenge boundaries are user-configurable. The tracker is a self-management and gamification tool, not a medical measure or a promise of specific health outcomes. Normal sexual thoughts, involuntary erections and nocturnal emissions are not treated as failures.

Export a JSON backup before clearing browser data or changing devices. All app data remains local to the browser unless the user exports it.
