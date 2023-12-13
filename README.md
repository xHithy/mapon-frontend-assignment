# Internship front-end assignment
The assignments main goal was to create a SPA with a map that displays a selected vehicles routes within a selected period.

## Built with
* React with TypeScript
* TailwindCSS
* Redux & Redux Thunk
* Mapon API
* react-google-maps/api

## Issue I ran into
Had an issue understanding how to display routes, because in the provided Figma design, the example only contained one route to display, but when I chose a longer period, I got myself three routes, so I made my workaround to this problem - introducing a route selector. My initial solution was to give routes unique colors, but even then, overlapping routes would get messy and wouldn't look good.

*This is how the implemented fix looks like:*
![Issue fix](https://github.com/xHithy/mapon-frontend-assignment/blob/main/src/assets/route-selector-example.png?raw=true)

## Installation
### 1. Clone repository
```bash
git clone https://github.com/xHithy/mapon-frontend-assignment.git
```

### 2. Open the repository root folder

### 3. Install dependencies
```bash
npm install
```

### 4. Create and populate the .env file
Create an `.env` file in the root directory of the project, then copy the variables from `.env.example` and paste them in the `.env` file and populate them with valid API keys

### 5. Start the project
```bash
npm start
```

## Personal summary (and excuses :D)
- Since this was my first time working with Redux or any sort of state managment outside of useContext, my first experience with it was quite overwhelming because to me the concept is very weird especially when trying to combine it with TS.
- Overall I think I did alright, I definitely need to work on my error handling and code structure (and redux).