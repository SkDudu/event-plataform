import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

import "./styles/global.css"

const GET_LESSON_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const {data} = useQuery(GET_LESSON_QUERY)

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
