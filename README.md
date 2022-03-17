![Werewolf - The Social Deduction Game](public/images/werewolf-banner.png)
# Introduction

Sus Puppies is an online multiplayer game based on the classic social deduction game *Werewolf*. The application supports up to 35 players to log in and participate live, with secret chats based on your role, all synchronized live. The game’s internal logic serves as the game narrator, so you and your friends can play, as one of the four main roles: Werewolf, Healer, Seer, or Villager.

# Tech Stack

- React.js: Version 17.0.2
- Node.js with Express: Version 4.17.2
- MongoDB with mongoose: Version 4.3.1
- Socket.io: Version 4.4.1
- Axios: Version 0.25.0
- Bootstrap: Version 2.1.1
- Styled Components: Version 5.3.3
- use-Sound: Version 4.0.1
- Webpack: Version 5.67.0
- Babel: Version 17.16.12

# Repo Installation

## Local setup

1. After cloning the repo, ensure that your terminal is in the root folder of the repo and run `npm install`
2. Ensure you have an instance of mongodb running prior to moving on to next step.
3. In your terminal still in the sus-puppies root dir, run the `start` script.
4. After running start script, navigate to [localhost:3000](http://localhost:3000) in your browser

## Scripts to run

- `npm start` - Runs server instance and webpack

# Demo

![Imgur](https://i.imgur.com/nl6Zukw.gif)

![Imgur](https://i.imgur.com/KGePMvz.gif)

![Imgur](https://i.imgur.com/PO6elJl.gif)

![Imgur](https://i.imgur.com/L77x5xT.gif)

## Features

- Sync'd multiplayer experience
  - Match/Rule customization
  - Rendering different views based on role
- Async chats
  - With exclusive rules
- Animation & Sounds
- Host controls
- Login authentication
- Fully functional warewolf game set (include roles/timer/voting)

# Future Feature Updates

- Video capabilities
- Additional villager roles implemented
- Leaderboard

# Technical Challenges

- Maintaining real time connections
  - Firebase vs Socket.io
- Synchronizing state across multiple users
  - Having a selective state for different roles
  - Event management
- Authentication for unique profiles
- Adapting source material into a web application
- Connecting front end to back end
  - Designing routes


# Contributors

- [Alex Kenney](https://www.linkedin.com/in/dareitus/)
- [Megan Wolf](https://www.linkedin.com/in/megan-n-wolf/)
- [Himmat Singh Khalsa](https://www.linkedin.com/in/himmatkhalsa/)
- [Ryder Wendt](https://www.linkedin.com/in/ryder-wendt/)
- [Javier Tamez](https://www.linkedin.com/in/javier-tamez/)
- [Daniel Gonzalez](https://www.linkedin.com/in/daniel-gonzalezmoreno/)
