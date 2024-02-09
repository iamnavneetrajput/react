import React from "react";
import { Course } from '../../pages/Data'
import PageHeader from "../PageHeader/PageHeader";
import PageTitles from "../../pages/PageTitles";
import './course.css'

const Courses = () => {

    return (
        <>
            <div className='main'>
                <PageHeader
                    title="Welcome To Courses "
                    paragraph="This Line Contains about COurse"
                    buttonText=" View Tranding Courses "
                    className='home-image'
                />
                <div className="course-card">
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
            </div>
        </>
    )
}

export default Courses;