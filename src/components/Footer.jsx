import { useState } from "react";

function Footer() {

    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <footer style={styles.footer}>
            <div style={styles.overlay}></div>

            <div style={styles.container}>

                {/* Marca */}
                <div style={styles.column}>
                    <h2 style={styles.logo}>
                        TEGO
                        <span style={styles.logoAccent}>
                            -SA
                        </span>
                    </h2>

                    <p style={styles.description}>
                        Creamos soluciones web modernas, seguras y escalables
                        para impulsar tu negocio al siguiente nivel digital.
                    </p>
                </div>

                {/* Navegación */}
                <div style={styles.column}>
                    <h3 style={styles.title}>Enlaces</h3>

                    {["Inicio","Servicios","Contacto"].map((item, i) => (
                        <span
                            key={i}
                            style={{
                                ...styles.link,
                                color: hoveredLink === i ? "#4ade80" : "#cbd5f5",
                                transform: hoveredLink === i ? "translateX(5px)" : "translateX(0)"
                            }}
                            onMouseEnter={() => setHoveredLink(i)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Contacto */}
                <div style={styles.column}>
                    <h3 style={styles.title}>Contacto</h3>

                    <p style={styles.text}>📧 Me.villa@unitecnica.net</p>
                    <p style={styles.text}>📞 +57 3207394785</p>
                    <p style={styles.text}>📍 Manizales, Colombia</p>
                </div>

            </div>

            {/* Línea inferior */}
            <div style={styles.bottom}>
                <p style={styles.copy}>
                    © 2026 TEGO-SA — Todos los derechos reservados. Los mejores siempre.
                </p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        position: "relative",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "white",
        marginTop: "80px",
        overflow: "hidden"
    },

    overlay: {
        position: "absolute",
        top: "-50px",
        left: "-50px",
        width: "200px",
        height: "200px",
        background: "radial-gradient(circle, rgba(34,197,94,0.25), transparent 70%)",
        filter: "blur(60px)"
    },

    container: {
        position: "relative",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "70px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px"
    },

    column: {
        flex: "1",
        minWidth: "220px"
    },

    // 🔥 logo mejorado
    logo: {
        fontSize: "1.8rem",
        marginBottom: "15px",
        letterSpacing: "1px",
        color: "#f1f5f9"
    },

    logoAccent: {
        color: "#4ade80",
        marginLeft: "4px",
        textShadow: "0 0 8px rgba(74,222,128,0.6)"
    },

    description: {
        fontSize: "14px",
        lineHeight: "1.7",
        color: "#94a3b8"
    },

    title: {
        marginBottom: "15px",
        fontSize: "1.1rem",
        color: "#e2e8f0"
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
        borderTop: "1px solid rgba(255,255,255,0.08)",
        textAlign: "center",
        padding: "20px"
    },

    copy: {
        fontSize: "13px",
        color: "#64748b"
    }
};

export default Footer;