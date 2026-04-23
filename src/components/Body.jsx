import { useState } from "react";

function Body() {

    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const [activeCard, setActiveCard] = useState(null); // ✅ necesario

    const handleStartProject = () => {
        setClicked(prev => {
            const newState = !prev;

            if (newState) {
                setMessage("Bienvenido a Tego-SA, tu mejor opción.");
            } else {
                setMessage("");
            }

            return newState;
        });
    };

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
        backgroundColor: clicked ? "#28a745" : "#ff1818",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        transform: hover ? "scale(1.05)" : "scale(1)"
    };

    const messageStyle = {
        marginTop: "20px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#ffd700",
        opacity: message ? 1 : 0,
        transition: "opacity 0.5s ease"
    };

    // 🔥 ESTILO MEJORADO
    const featuresStyle = {
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(to bottom, #f8fafc, #eef2f7)"
    };

    const gridStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "40px"
    };

    const cardStyle = (isActive) => ({
        background: "linear-gradient(145deg, #ffffff, #f1f5f9)",
        padding: "30px",
        borderRadius: "16px",
        width: "280px",
        boxShadow: isActive
            ? "0 20px 40px rgba(0,0,0,0.15)"
            : "0 8px 20px rgba(0,0,0,0.08)",
        transform: isActive ? "translateY(-10px) scale(1.02)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer"
    });

    const extraTextStyle = (isActive) => ({
        marginTop: "10px",
        fontSize: "0.9rem",
        color: "#475569",
        opacity: isActive ? 1 : 0,
        transform: isActive ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.3s ease"
    });

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

                    <button 
                        style={buttonStyle}
                        onClick={handleStartProject}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {clicked ? "Proyecto Iniciado" : "Comenzar Proyecto"}
                    </button>

                    <p style={messageStyle}>
                        {message}
                    </p>
                </div>
            </section>

            {/* FEATURES */}
            <section style={featuresStyle}>
                <h2 style={{fontSize:"2rem", color:"#0f172a"}}>¿Qué ofrecemos?</h2>

                <div style={gridStyle}>
                    
                    {/* CARD 1 */}
                    <div 
                        style={cardStyle(activeCard === 1)}
                        onMouseEnter={() => setActiveCard(1)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        <h3>🌐 Desarrollo Web</h3>
                        <p>Sitios y sistemas optimizados y escalables.</p>

                        <p style={extraTextStyle(activeCard === 1)}>
                            Creamos plataformas modernas, tiendas online y sistemas a medida.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div 
                        style={cardStyle(activeCard === 2)}
                        onMouseEnter={() => setActiveCard(2)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        <h3>🔐 Backend Seguro</h3>
                        <p>APIs robustas con PHP y MySQL.</p>

                        <p style={extraTextStyle(activeCard === 2)}>
                            Implementamos seguridad, autenticación y protección de datos.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div 
                        style={cardStyle(activeCard === 3)}
                        onMouseEnter={() => setActiveCard(3)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        <h3>🎨 Diseño UI/UX</h3>
                        <p>Interfaces modernas y enfocadas en el usuario.</p>

                        <p style={extraTextStyle(activeCard === 3)}>
                            Diseños atractivos optimizados para conversión y experiencia.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}

export default Body;