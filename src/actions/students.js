import { createDB } from '../util/db'
import {
  STUDENTS_LOADED, STUDENT_LOADED, STUDENTS_LOADING_ERROR
} from '../constants/students'

const db = createDB('students')

export function loadStudents() {
  return (dispatch) => {
    db.allDocs({ include_docs: true })
      .then(res => res.rows)
      .then(students => students.map(student => student.doc))
      .then(docs => studentsLoaded(docs))
      .catch(studentsLoadingError)
      .then(dispatch)
  }
}

export function loadStudent(id) {
  return (dispatch) => {
    db.get(id)
      .then(studentLoaded)
      .catch(studentsLoadingError)
      .then(dispatch)
  }
}

export function saveStudent(doc) {
  return (dispatch) => {
    return db.put(doc)
  }
}

export function studentsLoaded(students) {
  return {
    type: STUDENTS_LOADED,
    students
  }
}

export function studentLoaded(student) {
  return {
    type: STUDENT_LOADED,
    student
  }
}

export function studentsLoadingError(error) {
  return {
    type: STUDENTS_LOADING_ERROR,
    error
  }
}

