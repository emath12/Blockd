"use client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Todo from "./Todo/Todo"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
        <div className="bg-slate-200 grid grid-rows-4 grid-cols-4 flex-grow gap-1">
          <Todo />
          <div className="row-start-1 m-2 p-4 border-solid border-2 border-black row-span-4 col-start-2 col-span-3">
            <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
            />
          </div>
        </div>
      <Footer />
    </div>
  )
}
