import logo from "../assets/logowhite.png"
const footer = () => {
  return (
    <footer className="flex gradient--bg text-white font-semibold w-full sm:h-20 absolute bottom-0">
            
                <div className="md:container grid sm:grid-cols-3 grid-cols-1 m-auto">
                    <div className="flex sm:justify-start  justify-center sm:m-0 my-2">
                        <img className="me-2" src={logo} alt="Footer Logo" width="25px"/>Rajesh&#39;s ToDo List
                    </div>
                    <div className="flex justify-center sm:m-0 my-2">
                        <a className="link-light text-decoration-none" rel="noreferrer" href="http://sangamrajsh.com" target="_blank">
                            sangamrajsh.com
                        </a>
                    </div>
                    <div className="flex sm:justify-end justify-center sm:m-0 my-2">
                        <a className="" rel="noreferrer" href="https://sangamrajsh.github.io/" target="_blank">
                            Github Page
                        </a>
                    </div>
                </div>    
            
            
        </footer>
  )
}

export default footer
