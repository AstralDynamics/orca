import { STUDENTS_LOADED, STUDENT_LOADED, STUDENTS_LOADING_ERROR } from '../constants/students'

function studentsReducer(students={}, action) {
  switch(action.type) {
    case STUDENTS_LOADED:
      return { ...students, students: action.students }
    case STUDENTS_LOADING_ERROR:
      return { ...students, error: action.error }
    case STUDENT_LOADED:
      return {
        ...students,
        currentStudent: action.student,
        // also update this student in the loaded list
        students: (
          students.students &&
          students.students.map(student => {
            if(student._id === action.student._id) {
              return action.student
            } else {
              return student
            }
          })
        )
      }
    default:
      return students
  }
}

export default studentsReducer

