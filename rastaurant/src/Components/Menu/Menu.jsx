import "./Menu.css";
const Menu = () => {
    return (
        <>
        <section id="menu" className="menu">
        <h2>Our Menu</h2>
        <div className="menu-grid">
        <div className="menu-card">
        <h3>Grilled Chicken</h3>
        <p>Juicy chicken with house spices</p>
        <span>$12</span>
        </div>
        <div className="menu-card">
        <h3>Pasta Alfredo</h3>
        <p>Creamy sauce with fresh herbs</p>
        <span>$10</span>
        </div>
        <div className="menu-card">
        <h3>Classic Burger</h3>
        <p>Beef patty, cheese & fresh veggies</p>
        <span>$9</span>
        </div>
        </div>
        </section>
        </>
    )
};


export default Menu;