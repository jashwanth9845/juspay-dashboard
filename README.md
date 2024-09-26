# Dashboard

A responsive dashboard application built with React that supports light and dark themes. This project utilizes various libraries and frameworks to create a dynamic and interactive user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)

## Features

- Light and Dark themes toggle
- Responsive layout
- Data visualization with charts
- User-friendly navigation with sidebar
- Filtering and sorting capabilities for data tables
- Breadcrumb navigation for easy access

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Framer Motion**: For animations and transitions.
- **Recharts**: For creating charts and data visualizations.
- **React Simple Maps**: For mapping functionalities.
- **Moment.js**: For date and time manipulations.

## Installation

To get started with this project, clone the repository and install the dependencies:

## Usage

For setup or the first time, you can run the application in development mode using:

```
npm run develop

```

For subsequent runs, you can use:

```
npm start

```

After this, open your browser and navigate to http://localhost:3000 to view the dashboard.

## Scripts

This project includes the following scripts:

```
npm start: Starts the development server.
```

```
npm run develop: Install and starts the development server.
```

```
npm run build: Builds the app for production to the build folder.
```

```
npm test: Runs the test suite.
```

```
npm run eject: Ejects the configuration for further customization.
```

## Folder Structure

```
dashboard/
│
├── public/                           # Public assets
│   ├── index.html                    # Main HTML file
│   ├── favicon.ico                   # Favicon
│   └── manifest.json                 # Web app manifest
│
├── src/                              # Source files
│   ├── components/                    # Reusable components
│   │   ├── ErrorBoundary/            # Error boundary component
│   │   │   └── ErrorBoundary.js
│   │   └── ...                       # Other shared components
│   │
│   ├── context/                       # Context providers
│   │   └── AppContext.js             # App context definition
│   │
│   ├── dashboard/                     # Dashboard main components
│   │   ├── Default/                   # Default dashboard view
│   │   │   └── Default.js
│   │   ├── ECommerce/                 # E-commerce related components
│   │   │   ├── Overview/              # Overview component
│   │   │   │   └── Overview.js
│   │   │   ├── Analytics/             # Analytics component
│   │   │   │   └── Analytics.js
│   │   │   └── Documents/             # Documents component
│   │   │       └── Documents.js
│   │   ├── Projects/                  # Projects related components
│   │   │   ├── Overview/              # Overview component
│   │   │   │   └── Overview.js
│   │   │   ├── Analytics/             # Analytics component
│   │   │   │   └── Analytics.js
│   │   │   └── Orders/                # Orders component
│   │   │       └── Orders.js
│   │   ├── OnlineCourses/             # Online Courses related components
│   │   │   ├── Analytics/             # Analytics component
│   │   │   │   └── Analytics.js
│   │   │   └── Documents/             # Documents component
│   │   │       └── Documents.js
│   │   └── ...                        # Other dashboard sections
│   │
│   ├── pages/                         # Different sections/pages
│   │   ├── Profile/                   # Profile related components
│   │   │   ├── Overview.js
│   │   │   ├── Projects.js
│   │   │   ├── Documents.js
│   │   │   ├── Followers.js
│   │   │   └── Campaigns.js
│   │   ├── Account/                   # Account related components
│   │   │   ├── Overview.js
│   │   │   ├── Projects.js
│   │   │   ├── Documents.js
│   │   │   ├── Followers.js
│   │   │   └── Campaigns.js
│   │   ├── Corporate/                 # Corporate related components
│   │   │   ├── Overview.js
│   │   │   ├── Projects.js
│   │   │   ├── Documents.js
│   │   │   ├── Followers.js
│   │   │   └── Campaigns.js
│   │   ├── Blog/                      # Blog related components
│   │   │   ├── Overview.js
│   │   │   ├── Projects.js
│   │   │   ├── Documents.js
│   │   │   ├── Followers.js
│   │   │   └── Campaigns.js
│   │   └── Social/                    # Social related components
│   │       ├── Overview.js
│   │       ├── Projects.js
│   │       ├── Documents.js
│   │       ├── Followers.js
│   │       └── Campaigns.js
│   │
│   ├── utils/                         # Utility functions and helpers
│   │   ├── helper.js                  # Helper functions
│   │   └── ...                        # Other utility files
│   │
│   ├── App.js                         # Main app component
│   ├── index.js                       # Entry point of the application
│   └── styles/                        # CSS or style files
│       ├── App.css                    # Main styles
│       └── ...                        # Other styles
│
├── package.json                       # Project metadata and dependencies
├── README.md                          # Project documentation
└── .gitignore                         # Git ignore file

```
