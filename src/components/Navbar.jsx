import { useLocation, Link } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    const navItems = [
        { label: 'Dashboard', path:'/'},
        { label: 'Transaction', path: '/transaction'},
        { label: 'Splitter', path:'/splitter'},
    ]

  return (
    <nav className='fixed top-0 w-full bg-white border-b border-gray-200 z-50'>
        <div className='flex justify-around items-center h-14 max-w-lg mx-auto'>
            {navItems.map((item) => {
                const isActive = location.pathname === item.path

                return (
                    <Link 
                        key={item.path}
                        to={item.path}
                        className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200
                            ${isActive ? 'bg-blue-600 text-white': 'text-gray-500 hover:text-blue-600'}`}
                            >
                                {item.label}
                            </Link>
                )
            })}
        </div>
    </nav>
  )
}

export default Navbar