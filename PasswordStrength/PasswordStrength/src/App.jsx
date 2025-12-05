import { Password } from "./Password"


function App() {


  return (
    <div className="flex flex-col items-center py-15 w-full h-screen gap-10">
      <h1 className="text-8xl cursive text-[#2c2c2c]">Password Strength</h1>
      <Password />
    </div>
  )
}

export default App
