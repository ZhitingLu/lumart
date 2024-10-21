
const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">LuMart</a>
                </div>
                <nav className="space-x-8">
                    <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="/">Home</a>
                    <a className="text-gray-600 hover:text-gray-900 transition-colors duration-200" href="/cart">Cart</a>
                </nav>
            </div>
        </header >
    );
}

export default Header;