import React, { Component } from 'react';

import CourseCard from './CourseCard';
import { Layout } from 'antd';
import { Paper } from "@mui/material";


class Index extends Component {
  state = {
    courses: [
      {
        GPA: 0.0,
        credits: 0,
        visible: true
      }
    ]
  };

  updateCourseGPA = (targetIndex, newGPA) => {
    this.setState(prevState => {
      const prevCourses = prevState.courses;
      prevCourses[targetIndex].GPA = newGPA;
      return {
        courses: prevCourses
      };
    })
  }

  updateCourseCredits = (targetIndex, newCredits) => {
    this.setState(prevState => {
      const prevCourses = prevState.courses;
      prevCourses[targetIndex].credits = newCredits;
      return {
        courses: prevCourses
      };
    })
  }

  addCourse = () => {
    this.setState(prevState => {
      return {
        courses: [...prevState.courses, {
          GPA: 0.0,
          credits: 0,
          visible: true
        }]
      }
    })
  }

  deleteCourse = (targetIndex) => {
    const newCourses = [...this.state.courses];
    newCourses[targetIndex].visible = false;
    this.setState({
      courses: newCourses
    });
  }

  calculateGPA = () => {
    let totalCredits = 0, earnedCredits = 0.0;
    this.state.courses.map(course => {
      if (course.visible) {
        totalCredits += course.credits;
        earnedCredits += course.GPA / 4.0 * course.credits;
      }
      return null;
    })
    if (totalCredits === 0.0) {
      return '0';
    }
    return (earnedCredits / totalCredits * 4.0).toFixed(2);
  }

  render() {
    let realIndex = 0;

    const courses = this.state.courses.map((course, currentIndex) => {
      realIndex += course.visible;

      return (
        <CourseCard
          visible={course.visible}
          realIndex={realIndex}
          index={currentIndex}
          updateCourseGPA={this.updateCourseGPA}
          updateCourseCredits={this.updateCourseCredits}
          deleteCourse={this.deleteCourse}
          key={currentIndex}
        />
      );
    });

    const currentGPA = 'GPA is ' + String(this.calculateGPA());

    return (
        <Paper elevation={6}
        style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
      <Layout className="layout" >
        <div className="container" style={{
        
        width : '1000px',
    }}>
          <div className="selectBody">
            {courses}
            <div className="addContainer">
              
              {/* <Button  size="large" type="default" className="addCourse"></Button> */}
              <button
            className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
            onClick={this.addCourse}
          >
           Add a course
          </button>
              {/* <Button size="large" type="dashed" className="resultantGPA"></Button> */}

              <button
            className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px] mx-2"
            
          >
          {currentGPA}
          </button>

            </div>
          </div>

        </div>
      </Layout>
      </Paper>
    );
  }
}

export default Index;