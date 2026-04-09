function Header() {

    const headerStyle = {
        width: "100%",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000
    };

    const containerStyle = {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const logoStyle = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#1e3c72"
    };

    const navStyle = {
        display: "flex",
        gap: "25px",
        alignItems: "center"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#333",
        fontSize: "1rem",
        cursor: "pointer"
    };

    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#018601",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                
                {/* Logo */}
                <div style={logoStyle}>
                    TEGO-SA
                </div>

                {/* Navegación */}
                <nav style={navStyle}>
                    <span style={linkStyle}>Inicio</span>
                    <span style={linkStyle}>Servicios</span>
                    <span style={linkStyle}>Nosotros</span>
                    <span style={linkStyle}>Contacto</span>

                    {/* CTA */}
                    <button style={buttonStyle}>
                        Empezar
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default Header;