import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img: "/project_1.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img: "/project_2.jpg",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Weather Widget",
        desc: "A Next.js and TypeScript based tool for fetching and displaying real-time weather data.",
        img: "/project_3.jpg",
        tags: ["Next.JS", "Node", "CSS", "Typescript"],


    },
];
const Projects = () => {
    return (
        <div id='projects' className='container pt-32'>
            <Heading title='My Projects' />
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (<Card
                    key={el.id}
                    title={el.title}
                    desc={el.desc}
                    img={el.img}
                    tags={el.tags}
                />))}
            </div>

        </div>
    )
}

export default Projects
