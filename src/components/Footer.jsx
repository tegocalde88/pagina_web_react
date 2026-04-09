function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>

                {/* Marca */}
                <div style={styles.column}>
                    <h2 style={styles.logo}>MiEmpresa</h2>
                    <p style={styles.description}>
                        Creamos soluciones web modernas, seguras y escalables
                        para impulsar tu negocio.
                    </p>
                </div>

                {/* Navegación */}
                <div style={styles.column}>
                    <h3 style={styles.title}>Enlaces</h3>
                    <a href="#" style={styles.link}>Inicio</a>
                    <a href="#" style={styles.link}>Servicios</a>
                    <a href="#" style={styles.link}>Contacto</a>
                </div>

                {/* Contacto */}
                <div style={styles.column}>
                    <h3 style={styles.title}>Contacto</h3>
                    <p style={styles.text}>email@empresa.com</p>
                    <p style={styles.text}>+1 234 567 890</p>
                </div>

            </div>

            {/* Línea inferior */}
            <div style={styles.bottom}>
                <p style={styles.copy}>
                    © 2026 MiEmpresa — Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: "#0f172a",
        color: "white",
        marginTop: "60px"
    },
    container: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "30px"
    },
    column: {
        flex: "1",
        minWidth: "220px"
    },
    logo: {
        color: "#38bdf8",
        marginBottom: "15px"
    },
    description: {
        fontSize: "14px",
        lineHeight: "1.6",
        opacity: 0.8
    },
    title: {
        marginBottom: "15px"
    },
    link: {
        display: "block",
        color: "#cbd5f5",
        textDecoration: "none",
        marginBottom: "8px",
        fontSize: "14px"
    },
    text: {
        fontSize: "14px",
        opacity: 0.8,
        marginBottom: "5px"
    },
    bottom: {
        borderTop: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
        padding: "15px"
    },
    copy: {
        fontSize: "13px",
        opacity: 0.7
    }
};

export default Footer;