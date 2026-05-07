import { useState, useCallback } from 'react';

function Footer() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = useCallback((index) => {
        setHoveredLink(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredLink(null);
    }, []);

    const linksData = ["Eventos", "Peleadores", "Rankings", "Entrenamiento"];

    return (
        <footer style={styles.footer}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h2 style={styles.logo}>
                        UFC<span style={styles.logoAccent}>-SA</span>
                    </h2>
                    <p style={styles.description}>
                        Entrenamiento extremo, combate real y gloria eterna. 
                        Únete al octágono más letal del desarrollo digital.
                    </p>
                </div>

                <div style={styles.column}>
                    <h3 style={styles.title}>Combates</h3>
                    {linksData.map((item, i) => (
                        <span
                            key={item}
                            style={{
                                ...styles.link,
                                color: hoveredLink === i ? "#f97316" : "#cbd5f5",
                                transform: hoveredLink === i ? "translateX(5px)" : "translateX(0)"
                            }}
                            onMouseEnter={() => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div style={styles.column}>
                    <h3 style={styles.title}>Contacto</h3>
                    <p style={styles.text}>🥊 fight@ufc-sa.com</p>
                    <p style={styles.text}>📞 +57 3207394785</p>
                    <p style={styles.text}>📍 Las Vegas, Nevada</p>
                </div>
            </div>

            <div style={styles.bottom}>
                <p style={styles.copy}>
                    © 2026 UFC-SA — Solo los guerreros entienden el camino. 🏆
                </p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        position: "relative",
        background: "linear-gradient(135deg, #020202, #1a0000)",
        color: "white",
        borderTop: "4px solid #dc2626",
        fontFamily: "'Oswald', 'Arial', sans-serif",
        flexShrink: 0,
        width: "100%"
    },
    overlay: {
        position: "absolute",
        top: "-50px",
        left: "-50px",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(220,38,38,0.3), transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none"
    },
    container: {
        position: "relative",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px"
    },
    column: {
        flex: "1",
        minWidth: "220px"
    },
    logo: {
        fontSize: "2rem",
        marginBottom: "15px",
        letterSpacing: "2px",
        color: "#ef4444",
        textShadow: "0 0 8px rgba(239,68,68,0.6)"
    },
    logoAccent: {
        color: "#dc2626",
        marginLeft: "4px"
    },
    description: {
        fontSize: "14px",
        lineHeight: "1.7",
        color: "#94a3b8"
    },
    title: {
        marginBottom: "15px",
        fontSize: "1.2rem",
        color: "#ef4444",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    link: {
        display: "block",
        textDecoration: "none",
        marginBottom: "10px",
        fontSize: "14px",
        cursor: "pointer",
        transition: "all 0.25s ease"
    },
    text: {
        fontSize: "14px",
        color: "#94a3b8",
        marginBottom: "8px"
    },
    bottom: {
        borderTop: "1px solid rgba(220,38,38,0.3)",
        textAlign: "center",
        padding: "20px"
    },
    copy: {
        fontSize: "13px",
        color: "#64748b"
    }
};

export default Footer;