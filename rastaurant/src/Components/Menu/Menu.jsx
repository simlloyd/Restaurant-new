import "./Menu.css";
const Menu = () => {
    return (
        <>
        <section id="menu" className="menu">
        <h2 className="section-title">Our Best Sellers</h2>
        <div className="menu-grid">
        <div className="menu-card">
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Grilled Chicken" />
        <h3>Grilled Chicken</h3>
        <p>House-marinated, flame grilled</p>
        <span>$12</span>
        </div>
        <div className="menu-card">
        <img src="https://images.unsplash.com/photo-1525755662778-989d0524087e" alt="Pasta" />
        <h3>Pasta Alfredo</h3>
        <p>Creamy sauce, fresh herbs</p>
        <span>$10</span>
        </div>
        <div className="menu-card">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349" alt="Burger" />
        <h3>Classic Burger</h3>
        <p>Juicy beef, cheddar cheese</p>
        <span>$9</span>
        </div>
        </div>
        </section>
        </>
    )
};


export default Menu;