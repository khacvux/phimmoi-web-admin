export default function Signin() {
  return (
    <div className="flex flex-col space-y-3 h-full items-center justify-center">

        <input 
            className=" bg-slate-100 rounded-md py-2 px-3 outline-none w-80"
            placeholder="Email"
        />
         <input 
            className=" bg-slate-100 rounded-md py-2 px-3 outline-none w-80"
            placeholder="Password"
        />
        <button className=" bg-red-700 w-80 py-3 rounded-md">
            <p className='text-white font-bold'>Login</p>
        </button>
        
    </div>
  )
}
