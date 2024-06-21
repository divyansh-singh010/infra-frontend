import { Link } from "react-router-dom";

export default function Sidebar({ toggleSidebar, isOpen }) {
  if (isOpen) {
    return (
      <div>
        <div className="text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-end border-1 border-slate-200" >
          <button onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          </button>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/dashboard"}>Home</Link>
        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/queries"}>Queries</Link>
        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/complex"}>Complex Distribution</Link>
        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/room"}>Room Ranking</Link>
        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/issue"}>Issue Type</Link>
        </div>


      </div>
    )
  }
  else {
    return (
      <div>
        <div className="text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-end border-1 border-slate-200" >
          <button onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
          </button>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/dashboard"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg></Link>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/queries"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg></Link>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/complex"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg></Link>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/room"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
          </svg></Link>

        </div>
        <div className="text-2xl text-slate-500 text-center p-4 hover:bg-slate-300 flex justify-center border-1 border-slate-200" >
          <Link to={"/issue"}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg></Link>

        </div>


      </div>
    )
  }
}