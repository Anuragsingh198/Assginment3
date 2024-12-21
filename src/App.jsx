import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import CourseSection from './components/CourseSection'
import Table from './components/Table'

function App() {

  return (
    <>
    <div className='bg-[#f5f5f5cc] '>
     <Header/>
     <CourseSection/>
     <Table/>
    </div>
    </>
  )
}

export default App
