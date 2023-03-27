import Logo from "../assets/logo.png"
export const Header = () => {
  return (
    
        <header className="h-28 sm:h-16 border-4 rounded-xl">
            <div className="flex  flex-col sm:flex-row justify-between items-center py-2 mx-2">
                <div className="flex items-center ">
                    <img className="w-12" src={Logo} alt=" P-Mart Logo" />
                    <span className="ml-2 text-2xl">P-Mart</span>
                </div>
                <nav className="max-sm:my-3">
                    <span className="p-2 text-lg hover:bg-gray-300 hover:cursor-pointer hover:rounded">Home</span>
                    <span className="p-2 text-lg hover:bg-gray-300 hover:cursor-pointer hover:rounded">Products</span>
                    <span className="p-2 text-lg hover:bg-gray-300 hover:cursor-pointer hover:rounded">About Us</span>
                </nav>
            </div>
        </header>
    
  )
}
