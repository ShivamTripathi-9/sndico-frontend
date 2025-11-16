import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'



export default function App(){
return (
<div className="min-h-screen bg-gray-50 text-gray-900">
<Routes>
<Route path="/" element={<HomePage/>} />

</Routes>
</div>
)
}