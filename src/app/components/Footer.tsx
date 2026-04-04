const Footer = () => {
  return (
    <footer className="bg-olive-800 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest">Shoe Store</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Faisalabad favorite spot for trendy and comfortable shoes.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/wishlist" className="hover:text-white">Wishlist</a></li>
            <li><a href="/admin" className="hover:text-white">Admin Panel</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: info@shoestore.com</p>
          <p className="text-gray-400 text-sm mt-1">Phone: +92 300 1234567</p>
        </div>

      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-xs">
        <p>© 2026 Shoe Store. Built by *Eman Sajjad*</p>
      </div>
    </footer>
  );
};

export default Footer;