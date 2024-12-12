# NASA App with Redux Toolkit

## Overview
The **NASA App** is a React-based web application designed to provide users with interactive and visually appealing access to NASA's publicly available data. The application leverages the power of the **Redux Toolkit** for efficient state management, making it scalable and easy to maintain.

## Features
- **Fetch Data from NASA APIs**: Seamless integration with NASA's APIs to retrieve data like:
  - Astronomy Picture of the Day (APOD)
  - Mars Rover Photos
  - Other space-related resources
- **State Management with Redux Toolkit**: Centralized state management for handling API data, user interactions, and UI state.
- **Responsive Design**: Optimized for use on both desktop and mobile devices.
- **User-Friendly Interface**: Clean and intuitive design for easy navigation.

## Technologies Used
- **Frontend**:
  - React
  - Redux Toolkit
  - React Router (for navigation)
  - Axios (for API calls)
  
- **Styling**:
  - CSS/SCSS or styled-components

- **Tools and Utilities**:
  - Redux Toolkit Query (RTK Query) for API data fetching and caching
  - npm or pnpm for package management

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/lukabagash/nasa-app-redux-toolkit.git
    cd nasa-app-redux-toolkit
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```
    Or, if you are using `pnpm`:
    ```bash
    pnpm install
    ```

3. **Run the Development Server**:
    ```bash
    npm start
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

## Usage
1. **Browse NASA Data**: Explore different sections of the app to view NASA's images and information.
2. **Search and Filter**: Use the search or filter functionalities (if available) to find specific data.
3. **Interact**: Engage with interactive elements like image galleries or additional data displays.

## Project Structure
```
├── public
├── src
│   ├── components        # Reusable UI components
│   ├── features          # Redux slices for different app features
│   ├── pages             # Page components for routing
│   ├── services          # API service definitions using RTK Query
│   ├── styles            # Global and component-specific styles
│   ├── App.js            # Main application component
│   └── index.js          # Entry point of the application
├── package.json
└── README.md
```

## Future Enhancements
- Add more NASA API endpoints for additional data and insights.
- Implement dark mode for improved accessibility.
- Optimize performance for handling large datasets.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

---

### Contact
**Maintainer**: Luka Bagashvili  
Feel free to reach out for questions or suggestions!

