import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Tour from './Tour'
import Tag from './Tag'
import Logo from './Logo'

const Layout = (): any => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/logo">Logo</a>
          </li>
          <li>
            <a href="/tag">Tag</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

function App (): any {
  return (
    <div className="App">
      <header className="App-header">
        <Tour run={true}></Tour>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1
        </a>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route path="logo" element={<Logo />} />
            <Route path="tag" element={<Tag />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
