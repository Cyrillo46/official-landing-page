import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const skillSet = [
  {
    id: 1,
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-200" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-200" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: 3,
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-200" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: 1,
    img: "/src/assets/StacyD.png",
    url: "https://stacysdash.netlify.app/",
    github: "https://github.com/Cyrillo46/Stacy-s-Dash",
    title: "Stacy's Dash",
    text: "A dynamic home dashboard that displays the current date, time, and stunning background photos. It pulls real-time data from Unsplash, Open Weather App, and Coin Gecko APIs. Built with vanilla JavaScript, this project highlights essential frontend skills like DOM manipulation and API integration.",
  },
  {
    id: 2,
    img: "/src/assets/Tour.png",
    url: "https://five-tours.netlify.app/",
    github: "https://github.com/Cyrillo46/tours",
    title: "Five Tours",
    text: "A simple tour listing website that fetches tour data from a specified API and displays it to the user. The app includes features to handle loading states, refreshing tours, and removing individual tours from the list.",
  },
  {
    id: 3,
    img: "/src/assets/Review.png",
    url: "https://four-reviews.netlify.app/",
    github: "https://github.com/Cyrillo46/four-reviews",
    title: "Four Reviews",
    text: "A dynamic React application to showcase user reviews, employing React Hooks for efficient state management and ensuring a seamless user experience.",
  },
];
