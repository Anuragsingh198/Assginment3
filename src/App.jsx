import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import CourseSection from './components/CourseSection'
import Table from './components/Table'
import { SideBar } from './components/sideBar'


function App() {

  return (
    <>
    <div className='bg-[#f5f5f5cc]   flex justify-around  w-[100%]'>
      <div className=''>
    <SideBar/>
      </div>
      <div className='flex-1'>
     <Header/>
     <div className='bg-white rounded-lg p-1'>
     <CourseSection/>
     <Table/>
     </div>
      </div>
    </div>
    </>
  )
}

export default App
