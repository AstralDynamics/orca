
import React from 'react'
import Card from './card';

import { css, StyleSheet } from 'aphrodite'
import { gaps } from '../constants/styles'

const styles = StyleSheet.create({
})

function Competency(competency) {
  const { id, doc } = competency

  return (
    <Card key={id}>
      {doc.name}
    </Card>
  )
}

function StudentCompetencyList({ competencies, year }) {
  return (
    <div>
      {competencies
        .filter(comp => comp.doc.year === year)
        .map(Competency)}
    </div>
  )
}

export default StudentCompetencyList

