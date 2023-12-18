import markdownImage from "../../Assets/images/MARKDOWN.jpg";
import dictionaryImage from "../../Assets/images/DICTIONARY.jpg";
import chatImage from "../../Assets/images/CHAT.jpg";
import lockImage from "../../Assets/images/LOCK.jpg";

const ProjectData = [
  {
    title: "Markdown Editor",
    slug: "_note-editor",
    short_description: "A online markdown editor, used to capture notes.",
    image: markdownImage,
    view_url: "https://markdown-share.netlify.app/",
    code_url: "https://github.com/rlharsh/markdown-editor",
    long_description: `# Inspiration

My Markdown Editor was part of a coding challenge from **frontendmentor.io** which gives users designs and challenges them to recreate the design, and add **full-functionality** to said design. Everything from backend development, database management are all included in these challenges. Furthermore, I not only went for the **stretch goals**, but I extended the functionality of the application by utilizing **Firebase** so that users could store their notes online.

## About

The program was written in React and utilizes **JSX** for the frontend. The backend system leverages the power of **Firebase** for the data delivery network. Currently it allows users to sign-up with email, their **Google** account, and provides unlimited access to their online files. This project for me is one that I am very pleased with, since I pride myself with my level of note-taking.

## What I learned

During the creation of this project I learned a great deal, everything from UI design to application scopes. Furthermore, this is the first project that employs a fully-fledged database for content management. This application allows users anywhere access to their online notes.`,
  },
  {
    title: "Dictionary",
    slug: "_online-dictionary",
    short_description:
      "An online dictionary created with Vite & React. Supports multiple definitions, spoken audio, and user searching.",
    long_description: `# Inspiration

My online dictionary is the culmination of wanting to explore external **APIs**. I myself am always looking online for various definitions of words & phrases, so I thought to myself; why not just create your own dictionary. After having found a design that I liked, which I heavily modified for this project, I set forth on my coding journey, to develop a dictionary app that would suit my day-to-day needs.

## About

The entire program was developed using **React** and consumes several public **APIs** that allow it to locate literal definitions and return them to the user. This was also my entry-point to **TypeScript**, as the frontend was developed using the technology.


## What I learned

This application taught me the importance of verifying data, and ensuring that all conditions and edge-cases are met. This piece of software utilizes multiple checks and balances to ensure the data in-transit is correct before serving to the end-user. Furthermore, this is the first project I ever developed that utilizes browser audio.`,
    image: dictionaryImage,
    view_url: "https://online-dictionary-ronald.netlify.app/",
    code_url: "https://github.com/rlharsh/react-dictionary",
  },
  {
    title: "Anonymous Chat",
    slug: "_private-chat",
    short_description:
      "A two-way private chat, where participants can all talk without fear of knowing how is sending each message.",
    long_description: `# Inspiration

This project is the result of an **idea** that I had after attending a meeting where users were asked to give their input regarding education/employment policies. The participants agreed, only to not realize that the input they gave **was not** anonymous. This, of course resulted in a clear violation of the users privacy, and was very unbecoming of a welcoming sense of professionalism.

Anonymous chat is designed in such a way, that you can view all of the participants within the room, but as users speak, their information is not broadcast (i.e., **you cannot see who a message was sent by**).

## About

The entire program was developed using **React** and utlizes **Socket.io** for the backend, the backend itself was developed using **Node** as the primary framework. The application does not store chat history **this is by design** and users can remain anonymous whilst in the chatroom. For security reasons, sharing of images is not allowed within any room.

## What I learned

I learned a great many deal of things when developing this application, such as practical **Socket.io** techniques, as well as the convenience of proper code formatting. This project is actually one of my **favorite** projects that I have worked on.`,
    image: chatImage,
    view_url: "https://anonymous-chatting-ronald.netlify.app/",
    code_url: "https://github.com/rlharsh/chat-client",
  },
  {
    title: "Password",
    slug: "_password_generator",
    short_description:
      "An online password generator, designed for strong password generation.",
    view_url: "https://password-gens.netlify.app/",
    code_url: "https://github.com/rlharsh/Password-Generator",
    image: lockImage,
    long_description: `# Inspiration
I was inspired to write this application due to the need of requiring strong passwords that are not easily broken. This project was originally a challenge offered by **Scrimba**, and I had a great time challenging myself while creating it.

## About

This application holds a special place in my heart, as it was one of my earliest projectts that I created. It is written in pure **JavaScript**, and requires no frameworks to run. Looking back now on the project there are **several** things that I probably would have added to the application, such as the option to not allow ambiguious characters. However, as mentioned earlier, this is one of my first projects, and one that really fueled my passion for web-development.

## What I learned

This project actually taught me a great deal about **JavaScript** itself, and what a powerful language it is. I remember going through the code whilst developing this application, and making a lot of assumptions, only to have those assumptions change dynamically in front of me. However, after about a day the application was complete, and it was at that time that I began to really appreciate **JavaScript** and all of the subtle nuances that make it such a great development language.
    `,
  },
];

export { ProjectData };
