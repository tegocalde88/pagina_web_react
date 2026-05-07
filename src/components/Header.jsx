import { useState, useCallback } from 'react';

function Header() {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoveredButton, setHoveredButton] = useState(false);

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    const handleNavigation = useCallback((section) => {
        switch(section) {
            case 'inicio':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'peleadores':
                scrollToSection('categorias');
                break;
            case 'rankings':
                scrollToSection('rankings');
                break;
            case 'eventos':
                scrollToSection('eventos');
                break;
            default:
                break;
        }
    }, [scrollToSection]);

    const handleCtaClick = useCallback(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        alert('🥊 ¡Prepárate para tu primera pelea! Contáctanos para comenzar tu entrenamiento.');
    }, []);

    const handleMouseEnterLink = useCallback((index) => {
        setHoveredLink(index);
    }, []);

    const handleMouseLeaveLink = useCallback(() => {
        setHoveredLink(null);
    }, []);

    const handleMouseEnterButton = useCallback(() => {
        setHoveredButton(true);
    }, []);

    const handleMouseLeaveButton = useCallback(() => {
        setHoveredButton(false);
    }, []);

    const links = [
        { name: "Inicio", section: "inicio", id: "inicio" },
        { name: "Peleadores", section: "peleadores", id: "categorias" },
        { name: "Rankings", section: "rankings", id: "rankings" },
        { name: "Eventos", section: "eventos", id: "eventos" }
    ];

    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div 
                    style={styles.logo}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    UFC<span style={styles.logoAccent}>-SA</span>
                </div>
                
                <nav style={styles.nav}>
                    {links.map((link, index) => (
                        <span
                            key={link.name}
                            style={{
                                ...styles.link,
                                color: hoveredLink === index ? "#f97316" : "#e5e5e5",
                                textShadow: hoveredLink === index ? "0 0 4px #f97316" : "none"
                            }}
                            onMouseEnter={() => handleMouseEnterLink(index)}
                            onMouseLeave={handleMouseLeaveLink}
                            onClick={() => handleNavigation(link.section)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && handleNavigation(link.section)}
                        >
                            {link.name}
                        </span>
                    ))}
                    
                    <button
                        style={{
                            ...styles.button,
                            boxShadow: hoveredButton 
                                ? "0 6px 20px rgba(220,38,38,0.8)" 
                                : "0 4px 14px rgba(220,38,38,0.5)",
                            transform: hoveredButton ? "translateY(-2px)" : "translateY(0)"
                        }}
                        onMouseEnter={handleMouseEnterButton}
                        onMouseLeave={handleMouseLeaveButton}
                        onClick={handleCtaClick}
                    >
                        Pelea ya
                    </button>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        width: "100%",
        background: "#0a0a0a",
        backdropFilter: "blur(6px)",
        borderBottom: "3px solid #dc2626",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "'Oswald', 'Arial', sans-serif",
        flexShrink: 0,
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "18px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px"
    },
    logo: {
        fontSize: "2rem",
        fontWeight: "800",
        color: "#ef4444",
        letterSpacing: "2px",
        cursor: "pointer",
        textTransform: "uppercase",
        textShadow: "0 0 8px rgba(239,68,68,0.6)",
        transition: "transform 0.3s ease",
    },
    logoAccent: {
        color: "#dc2626"
    },
    nav: {
        display: "flex",
        gap: "30px",
        alignItems: "center",
        flexWrap: "wrap"
    },
    link: {
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
    button: {
        padding: "10px 28px",
        background: "linear-gradient(135deg, #dc2626, #991b1b)",
        color: "white",
        border: "none",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "0.95rem",
        transition: "all 0.25s ease",
        textTransform: "uppercase"
    }
};

export default Header;