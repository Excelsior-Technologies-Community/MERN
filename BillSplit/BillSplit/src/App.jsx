import BillSplit from "./BillSplit"

function App() {

  return (
    <div className="h-screen w-full flex flex-col items-center gap-15 py-15">
      <h1 className="text-8xl cursive text-[#2c2c2c]">Bill Split</h1>
      <BillSplit />
    </div>
  )
}

export default App
