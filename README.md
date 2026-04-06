# PORTFOLIO - [WEBSITE](https://portfolio-self-beta-33.vercel.app/)

## Introduction
Crafting digital experiences with code – welcome to my portfolio project where creativity meets functionality.
<br/>

## Features

1. **GitHub Integration:**
   Fetches project data effortlessly through GitHub APIs, eliminating the need for hardcoding and ensuring real-time updates.

2. **Automated Email Service:**
   Seamlessly integrated with EmailJS for hassle-free email functionality. Send personalized emails with ease using customizable templates.

3. **Responsive Design:**
   Ensures a seamless and optimal user experience on all devices with a fully responsive design, making your portfolio accessible and engaging across various devices.

## Tech Stack

- React.js
- Tailwind
- GitHub APIs

## Steps

**By implementing the following steps you can make a portfolio like this too with minimal coding.**

- Follow the `.example.env` file and then create a new `.env` file.
- Create a Personal Access Token on Github. You can either create Fine-grained personal access token (beta) or Personal access tokens (classic) based on your choices. Store the token in the respective field in `.env` file.
- Make sure that you have added necessary permissions while creating the token.
  <img width="802" alt="Screenshot 2024-01-29 at 1 25 29 PM" src="https://github.com/ChakitBhandari/Portfolio/assets/103818366/06fc46ec-b696-4fa2-aa81-a4b1563be00f">
- Create an account on EmailJS and generate Service ID, Template ID, Public Key and store them in the respecitve fields in `.env` file. You can refer [EmailJS](https://www.youtube.com/watch?v=NgWGllOjkbs) for generating the required parameters if you wish.
- Navigate to the `data.js` file and feel free to add your data and import the necessary tech stack images based on your skillsets. (Store the techstack images used in the skills section in the assets folder after donwloading and them import them in the `data.js` file).
- To have the image as shown below create a new folder named `demoImage` and then store the image in that.
   <img width="356" alt="Screenshot 2024-01-29 at 1 48 14 PM" src="https://github.com/ChakitBhandari/Portfolio/assets/103818366/d5a59733-ded0-452b-8938-37ea78f71290">
- Run **npm install**
- Run **npm start** to run the code.
- Demo contains the deployed link. After deploying your projects you wish to show on your portfolio add the link in Github. To add the deployed link to Github do the following steps -
   -  Click here in your repository <img width="1440" alt="Screenshot 2024-01-29 at 1 50 35 PM" src="https://github.com/ChakitBhandari/Portfolio/assets/103818366/6bd9409c-2683-4fae-9c1c-3de7a9d2000f">
   - Copy your deployed link and paste it here.
      <img width="1437" alt="Screenshot 2024-01-29 at 1 52 42 PM" src="https://github.com/ChakitBhandari/Portfolio/assets/103818366/f3e95030-5688-4e0e-b8dc-dc3f475b70d7">

## Congratulations you have your portfolio ready with minimal coding!

## Future Scope

- **Template Functionality:**
  Transform the portfolio website into a template, eliminating the need for any coding. Choose from a variety of backgrounds and customize colors effortlessly.

- **Live Preview and Input:**
  Enhance responsiveness by allowing users to observe real-time output while adding input values such as name and description, ensuring a dynamic and user-friendly experience.

- **Automated Tech Stack Images:**
  Implement APIs for automating the task of downloading tech stack images directly into the assets folder, complete with the necessary import statements for seamless integration.
