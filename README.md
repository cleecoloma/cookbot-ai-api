<!-- PROJECT LOGO -->
<div id="readme-top"></div>
<br />
<div align="center">
  <a href="https://github.com/cleecoloma/portfolio-website">
    <img src="/public/images/cookbot-logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">CookBot-AI</h3>
<p align="center">
  <a href="https://app.netlify.com/sites/cleecoloma/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/67c37c2a-ffc6-4672-b1cb-708b7373433c/deploy-status" alt="Netlify Status" />
  </a>
</p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#note">Note</a>
      </li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#technologies">Technologies</a>
    </li>
        <li>
      <a href="#uml">UML Diagram</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
            <ul>
      <li><a href="#prerequisites">Prerequisites</a>
      </li>
            <li><a href="#cloning">Cloning the Repository</a>
      </li>
            <li><a href="#configure">Configure</a>
      </li>
      <li><a href="#start">Start</a>
      </li>
      </ul>
    </li>
        <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The CookBot AI Recipe Project is a web application designed to assist users in managing and exploring recipes. It leverages the power of artificial intelligence to simplify the process of creating, organizing, and discovering new recipes. Whether you're a cooking enthusiast, a culinary expert, or just looking for meal inspiration, CookBot AI offers a user-friendly platform to streamline your cooking experience.

### Note

This is a forked repository of my team project that was developed with 2 other teammates. I was a key contributor for this project. See below for old version of the application.

- [Old CookBotAI Repo](https://github.com/CookBotAI/cook-bot-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEMO -->

## Demo

Here's the live link: [CookBot AI](https://cookbot-ai-app.netlify.app/)

<div align="center">
    <img src="/public/images/how-to-shrimp.gif"  alt="Demo"/>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features

- **User Authentication:** Securely register and log in using authentication services.
- **Recipe Management:** Create, read, and delete your recipes with ease.
- **AI-Generated Content:** Access AI-generated images and content for your recipes.
- **Responsive Design:** Enjoy a seamless experience on various devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGIES -->

## Technologies

- **Frontend:** React.js for a dynamic and interactive user interface.
- **Backend:** Node.js and Express.js for server-side logic.
- **Database:** MongoDB for storing recipe data.
- **Authentication:** Auth0 for user authentication.
- **OpenAI Integration:** Chat Completions API for recipe generation and DALL·E‍ API for image generation.
- **Additional Libraries and Frameworks:** React Bootstrap, MUI icons.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- UML Diagram -->

## UML

![UML diagram](/public/images/uml-diagram.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (preferably the latest stable version)
- npm (usually comes with Node.js)
- Git for cloning the repository
- A text editor or IDE of your choice (e.g., VSCode, Sublime Text)

### Cloning

This is for the backend portion of this application.
See the following readme file for frontend portion: [CookBot APP](https://github.com/cleecoloma/cookbot-ai-app/blob/main/README.md)

1. git clone https://github.com/cleecoloma/cookbot-ai-api.git
2. cd cookbot-ai-api
3. npm install

### Configure

```text
OPEN_AI_URL={OpenAI Chat Completion Endpoint}
OPEN_AI_IMAGE_URL={OpenAI Image Generation Endpoint}
MONGODB_URL={MongoDB Atlas Cluster Connection String}
JWKS_URI={Auth0 JSON Web Key Set}
OPENAI_API_KEY={OpenAI API Key}
```

### Start

1. npm run dev (development mode)
2. npm run build (production mode)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## Contact

If you have any questions or comments, don't hesitate to reach out to me at [chesterleecoloma.com](https://chesterleecoloma.com/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
