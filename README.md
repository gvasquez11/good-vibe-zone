# Good Vibe Zone Social Network App

![Good Vibe Zone Logo](link-to-logo)

Welcome to Good Vibe Zone, a vibrant social network application that spreads positivity and connection. With user authentication, image sharing, comments, likes, and more, Good Vibe Zone provides a platform for users to share their moments, connect with friends, and spread good vibes.

## Video Demo

https://github.com/gvasquez11/good-vibe-zone/assets/36422346/e7de769f-d137-4d46-99d4-b4ac689fb45a

## Introduction

In a world that could always use more positivity, Good Vibe Zone steps in to create a virtual space where users can share their joyful moments, interact with friends, and create a supportive online community. By offering features such as image sharing, comments, likes, and secure user authentication, this application fosters an atmosphere of good vibes and connections.

## Features

- User authentication: Sign up and log in with your own accounts using bcrypt for password hashing and passport-local for local authentication strategy.
- Image sharing: Post and share your favorite pictures with other users to spread joy and positivity.
- Comments: Engage with posts by leaving comments and connecting with others in a meaningful way.
- Likes: Express appreciation for others' posts by liking them and sharing the love.
- Cloudinary integration: Utilize Cloudinary for seamless image management and hosting.
- Session management: Manage user sessions using express-session to ensure secure and persistent logins.
- MongoDB integration: Connect with MongoDB using mongoose and connect-mongo to store user data and posts securely.
- Express middleware: Implement morgan and method-override for enhanced server functionality.
- File uploads: Allow users to upload images using multer for a seamless sharing experience.

## Installation

Follow these steps to set up the Good Vibe Zone social network application on your local machine:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/gvasquez11/good-vibe-zone
```

2. Navigate to the project directory:

```bash
cd good-vibe-zone
```

3. Install the required dependencies using npm:

```bash
npm install
```

4. Create a `.env` file in the root directory and provide the necessary environment variables:

```env
PORT=8000
DB_STRING=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

5. Start the application:

```bash
node server.js
```

6. Access the Good Vibe Zone application by opening your web browser and visiting `http://localhost:8000`.

## Usage

- Sign up: Create an account using your email and a secure password to join the Good Vibe Zone community.
- Log in: Log in with your registered credentials to start sharing and connecting.
- Post images: Share your favorite images along with captions to spread positivity.
- Interact: Like posts to show appreciation and leave comments to engage with others.
- Connect: Build connections and foster a community of good vibes and support.

## Dependencies

Good Vibe Zone is built using the following packages and dependencies:

- bcrypt
- cloudinary
- connect-mongo
- dotenv
- ejs
- express
- express-flash
- express-session
- method-override
- mongodb
- mongoose
- morgan
- multer
- nodemon
- passport
- passport-local

Ensure that you have these dependencies installed before running the application.

## Contributing

We welcome contributions to enhance the features and positive atmosphere of the Good Vibe Zone social network application. If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Let's work together to spread even more good vibes!

## License

The Good Vibe Zone social network application is open-source and licensed under the [MIT License](LICENSE). Feel free to modify and distribute the code according to the terms of the license.

---

Thank you for joining the Good Vibe Zone and contributing to a community of positivity and connection. Let's keep the good vibes flowing!
