import React from "react";
import { Course } from '../../pages/Data'
import PageHeader from "../PageHeader/PageHeader";
import PageTitles from "../../pages/PageTitles";
import './course.css'
import Topcourses from "../TopCourses/Topcourses";

const Courses = () => {

    return (
        <>
            <div className='main'>
                <PageHeader
                    title="Welcome To Courses "
                    paragraph="This Line Contains about COurse"
                    buttonText="Explore"
                    buttonLink="/blog"
                    className='home-image'
                />
                <div className="course-card">
                <h3>List Of Courses We Provided</h3>
                    <div className="course-list">
                        {Course.map(course => (
                            <a key={course.id} href={course.link}>
                                <div key={course.id} className="course">
                                    <h2>{course.CourseName}</h2>
                                    <p>{course.Description}</p>
                                    <p>Instructor: {course.Instructor}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <Topcourses/>
            </div>
        </>
    )
}

export default Courses;