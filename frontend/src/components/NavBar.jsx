function NavBar() {
    return <nav className="navbar">
      <div className="navbar-brand">
        <link to="/">Movie App</link>
      </div> 

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorite" className="nav-link">Favorite</Link>
        
     </div> 
    </nav>
}

export default NavBar