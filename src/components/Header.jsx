function Header() {

    const headerStyle = {
        width: "100%",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(6px)",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 1000
    };

    const containerStyle = {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const logoStyle = {
        fontSize: "1.6rem",
        fontWeight: "700",
        color: "#0f172a",
        letterSpacing: "0.5px",
        cursor: "pointer"
    };

    const navStyle = {
        display: "flex",
        gap: "30px",
        alignItems: "center"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#475569",
        fontSize: "0.95rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "color 0.3s ease"
    };

    const buttonStyle = {
        padding: "10px 22px",
        background: "linear-gradient(135deg, #16a34a, #22c55e)",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        fontSize: "0.95rem",
        transition: "all 0.25s ease",
        boxShadow: "0 4px 14px rgba(34,197,94,0.35)"
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                
                {/* Logo */}
                <div style={logoStyle}>
                    TEGO<span style={{color:"#22c55e"}}>-SA</span>
                </div>

                {/* Navegación */}
                <nav style={navStyle}>
                    <span
                        style={linkStyle}
                        onMouseOver={e => e.target.style.color = "#16a34a"}
                        onMouseOut={e => e.target.style.color = "#475569"}
                    >
                        Inicio
                    </span>

                    <span
                        style={linkStyle}
                        onMouseOver={e => e.target.style.color = "#16a34a"}
                        onMouseOut={e => e.target.style.color = "#475569"}
                    >
                        Servicios
                    </span>

                    <span
                        style={linkStyle}
                        onMouseOver={e => e.target.style.color = "#16a34a"}
                        onMouseOut={e => e.target.style.color = "#475569"}
                    >
                        Nosotros
                    </span>

                    <span
                        style={linkStyle}
                        onMouseOver={e => e.target.style.color = "#16a34a"}
                        onMouseOut={e => e.target.style.color = "#475569"}
                    >
                        Contacto
                    </span>

                    {/* CTA */}
                    <button
                        style={buttonStyle}
                        onMouseOver={e => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 6px 18px rgba(34,197,94,0.45)";
                        }}
                        onMouseOut={e => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 4px 14px rgba(34,197,94,0.35)";
                        }}
                    >
                        Empezar
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default Header;