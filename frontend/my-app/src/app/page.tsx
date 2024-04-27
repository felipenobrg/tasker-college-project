import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import Board from "@/components/board"

export default function Home() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
         <Board />
      </div>
    </div>
  )
}
