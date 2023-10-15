# Blog Website

This project is a simple blog website built using Node.js, Express.js, and MongoDB. It allows users to view, create, and read articles on various topics. Additionally, users can contact the website administrators through a contact form.

## Table of Contents
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of articles on the home page.
- Read individual articles by clicking on them.
- Compose new articles with titles, content, images, and videos.
- Upload images and videos, or provide URLs for them.
- Contact administrators through the contact page.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gauravbhaskar080/blog-post.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   cd blog-post
   ```
   ```bash
   npm install
   ```

3. **Set up MongoDB:**

   - Create a `.env` file in the root directory and add your MongoDB URL:

     ```
     MONGO_URL = 'your_mongo_db_url'
     PORT = 3000
     ```

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000`.

2. **Access the website:**

   Open a web browser and go to `http://localhost:3000`.

## File Structure

- `models/`: Contains Mongoose models for MongoDB.
- `views/`: Contains EJS templates for rendering HTML.
- `public/`: Holds static files like CSS, images, and JavaScript.
- `dbConnection.js`: Establishes a connection to the MongoDB database.
- `index.js`: The main entry point of the application.
- `...` (other files): Additional supporting files.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

---

Feel free to replace the placeholders (`yourusername` and `blog-website`) with your actual GitHub username and repository name. Make sure to create a new repository on GitHub and push your local code to that repository.