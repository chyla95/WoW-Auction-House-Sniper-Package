# WoW-Auction-House-Sniper

This project allows users to search for in-game items listed in the in-game auction house, within multiple realm-span.

**Project Status**: Functional / In Development
**Note**: The Project will further be converted into an NPM package, and served as a part of [CommunityManager](https://github.com/chyla95/CommunityManager) system. The content of app.ts, shows the sample usage of the package.

## Installation

Before starting the app, it is required to register it in [Battle.Net Developer Portal](https://develop.battle.net/), and obtain **OAuth2** credentials. Make sure to keep `client_id` and `client_secret` secure and handy.

**Both keys** have to be provided as _Environment Variables_, with the following names, for the app to work:

| Variable Name              | Key             |
| -------------------------- | --------------- |
| `BATTLE_NET_CLIENT_ID`     | `client_id`     |
| `BATTLE_NET_CLIENT_SECRET` | `client_secret` |

**The application can be launched with the following commands:**

- `npm install` - to download and install all the dependencies;
- `npm run start:dev` - to start the application in **_development environment_**;
- `npm start` - to start the application in **_production environment_**;

## Useful Resources

- [Battle.Net Developer Portal](https://develop.battle.net/)
