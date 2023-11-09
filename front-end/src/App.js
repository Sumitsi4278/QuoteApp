import React from 'react'
import './App.css'
import MainNavigation from './components/Navigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes'
import NewQuote from './components/pages/NewQuote'
import ShowQuotes from './components/pages/ShowQuotes'
import EditQuote from './components/pages/EditQuote'
const App = () => {
  return (
    <>
    <MainNavigation/>

    <Routes>
      <Route path='/' element={<AllQuotes/>}></Route>
      <Route path='/new' element={<NewQuote/>}></Route>
      <Route path='/quotes/:id' element={<ShowQuotes/>}></Route>
      <Route path='/quotes/:id/edit' element={<EditQuote/>}></Route>
    </Routes>
    </>
  )
}

export default App