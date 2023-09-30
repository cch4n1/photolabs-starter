# Photolabs

Welcome to PhotoLabs, a React-based single-page application (SPA) that allows users to view and interact with photos from various categories. This project combines the knowledge gained from building mini-projects using React to create a larger project with a few more moving pieces.


## Table of Contents
- [Behavior](#behavior)
- [Functionality](#functionality)
- [Technical Specifications](#technical-specifications)
- [Getting Started](#getting-started)
- [Setup](#setup)

## Behavior

This application provides the following functionality to users:

- Users can view photos from the homepage loaded from the API.
- Users can navigate to different photo categories (topics).
- Users can click on a photo to view a larger version and related/similar photos.
- Users can like a photo from anywhere within the application where the photo is displayed.
- Users can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and a heart icon.

## Functionality


- The client-side application is a React single-page application called PhotoLabs.
- The server and persistence layer include a PostgreSQL database and a Node Express.js server application.
- The client communicates with the API over HTTP using the JSON format.
- The client application make API requests to load and persist data.

## Technical Specifications

The project utilizes the following technologies:

- React
- Create React App
- Webpack
- Babel
- Express
- PostgreSQL

The PhotoLabs client application uses Create React App (CRA), and Express serves as the basis for the PhotoLabs API server application. During development, two different servers will be running: the client-side Webpack development server and the API server to provide photo data.

## Getting Started

To get started with PhotoLabs, follow these steps:

1. Clone this repository.
2. Install the necessary dependencies for the client and API server.
3. Set up the PostgreSQL database.
4. Configure environment variables.
5. Run the development servers.


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
