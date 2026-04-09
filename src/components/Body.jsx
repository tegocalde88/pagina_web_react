function Body() {

    const mainStyle = {
        fontFamily: "Arial, sans-serif"
    };

    const heroStyle = {
        background: "linear-gradient(120deg, #3e4044, #3e444e)",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
    };

    const containerStyle = {
        maxWidth: "900px",
        margin: "0 auto"
    };

    const titleStyle = {
        fontSize: "3rem",
        marginBottom: "20px",
        fontWeight: "bold"
    };

    const textStyle = {
        fontSize: "1.2rem",
        marginBottom: "30px",
        lineHeight: "1.6"
    };

    const buttonStyle = {
        padding: "14px 30px",
        backgroundColor: "#ff1818",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "0.3s"
    };

    const featuresStyle = {
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f5f7fa"
    };

    const gridStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "40px"
    };

    const cardStyle = {
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        width: "260px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    };

    return (
        <main style={mainStyle}>
            
            {/* HERO */}
            <section style={heroStyle}>
                <div style={containerStyle}>
                    <h1 style={titleStyle}>Soluciones Web Profesionales</h1>
                    <p style={textStyle}>
                        Creamos aplicaciones web modernas, rápidas y seguras
                        adaptadas a tus necesidades de negocio.
                    </p>
                    <button style={buttonStyle}>
                        Comenzar Proyecto
                    </button>
                </div>
            </section>

            {/* FEATURES */}
            <section style={featuresStyle}>
                <h2>¿Qué ofrecemos?</h2>

                <div style={gridStyle}>
                    <div style={cardStyle}>
                        <h3>Desarrollo Web</h3>
                        <p>Sitios y sistemas optimizados y escalables.</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>Backend Seguro</h3>
                        <p>APIs robustas con PHP y bases de datos MySQL.</p>
                    </div>

                    <div style={cardStyle}>
                        <h3>Diseño UI/UX</h3>
                        <p>Interfaces modernas y enfocadas en el usuario.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Body;