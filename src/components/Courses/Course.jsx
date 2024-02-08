import React from "react";
import {Course} from '../../pages/Data'
import PageTitles from "../../pages/PageTitles";
import './course.css'

const Courses = () => {

    return (
        <>

            <div className='main'>
                <div className="course-card">
                <h3> {PageTitles.courses} </h3>
                    <div className="course-list">
                        {Course.map(course => (
                            <div key={course.id} className="course">
                                <h2>{course.CourseName}</h2>
                                <p>{course.Description}</p>
                                <p>Instructor: {course.Instructor}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Courses;