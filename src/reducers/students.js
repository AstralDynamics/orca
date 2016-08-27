import { STUDENTS_LOADED, STUDENT_LOADED, STUDENTS_LOADING_ERROR } from '../constants/students'

function studentsReducer(students={}, action) {
  switch(action.type) {
    case STUDENTS_LOADED:
      return { ...students, students: action.students }
    case STUDENT_LOADED:
      return { ...students, currentStudent: action.student }
    case STUDENTS_LOADING_ERROR:
      return { ...students, error: action.error }
    default:
      return students
  }
}

export default studentsReducer

