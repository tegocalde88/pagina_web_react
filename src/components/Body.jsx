import { useState, useCallback } from 'react';

function Body() {
    const [message, setMessage] = useState("");
    const [clicked, setClicked] = useState(false);
    const [hover, setHover] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleStartProject = useCallback(() => {
        setClicked(prev => {
            const newState = !prev;
            setMessage(newState ? "🥊 ¡Combate iniciado! Prepárate para la gloria." : "");
            return newState;
        });
    }, []);

    const handleCardClick = useCallback((index) => {
        setSelectedCard(prev => prev === index ? null : index);
    }, []);

    const handleCardHover = useCallback((index) => {
        setActiveCard(index);
    }, []);

    const handleCardLeave = useCallback(() => {
        setActiveCard(null);
    }, []);

   const cardsData = [
        {
            id: 0,
            emoji: "🥊",
            title: "Peso Pesado",
            desc: "Golpes poderosos y resistencia brutal",
            extra: "🧠 Jones, Aspinall, Miocic - 85% KO rate",
            image: "https://images3.alphacoders.com/138/thumb-1920-1383275.jpg",
            alt: "Peso Pesado UFC",
            campeon: "Jon Jones",
            records: "27-1-0 (1 NC)",
            titulos: "3 veces campeón de peso semipesado, 1 vez campeón peso pesado",
            signature_move: "Golpe de rodilla volador, Codazos en clinch",
            peso: "120 kg - 265 lb",
            edad: "36 años",
            apodo: "Bones"
        },
        {
            id: 1,
            emoji: "⚡",
            title: "Peso Mediano",
            desc: "Velocidad y precisión letal",
            extra: "🔥 Adesanya, Whittaker, Du Plessis",
            image: "https://ufc.com/images/styles/card_advance_small_280x356/s3/2025-02/292025-Dricus-du-Plessis-UFC-312-GettyImages-2198479570.jpeg?itok=YVGDspH0",
            alt: "Peso Mediano UFC",
            campeon: "Dricus Du Plessis",
            records: "21-2-0",
            titulos: "1 vez campeón peso mediano",
            signature_move: "Cross de izquierda, Sumisión",
            peso: "84 kg - 185 lb",
            edad: "30 años",
            apodo: "Stillknocks"
        },
        {
            id: 2,
            emoji: "🔥",
            title: "Peso Pluma",
            desc: "Técnica y explosión máxima",
            extra: "👑 Topuria, Volkanovski, Holloway",
            image: "https://preview.redd.it/5ft6-ilia-topuria-defends-and-kos-5ft-11-max-holloway-on-v0-uqh1dsz1rcxd1.png?width=640&crop=smart&auto=webp&s=51f8548cd2e0b7390b3d3b34e080ef5d5d65ac21",
            alt: "Peso Pluma UFC",
            campeon: "Ilia Topuria",
            records: "15-0-0",
            titulos: "1 vez campeón peso pluma (invicto)",
            signature_move: "Sumisión mortal, KO certero",
            peso: "66 kg - 145 lb",
            edad: "27 años",
            apodo: "El Matador"
        }
    ];




    const selectedCardData = selectedCard !== null ? cardsData[selectedCard] : null;

    return (
        <main style={styles.main}>
            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .hero-title {
                    animation: fadeInUp 0.8s ease-out;
                }
                .hero-subtitle {
                    animation: fadeInUp 0.8s ease-out 0.2s both;
                }
                .hero-button {
                    animation: fadeInUp 0.8s ease-out 0.4s both;
                }
            `}</style>
            
            {/* Sección HERO mejorada */}
            <section id="hero" style={styles.hero}>
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContainer}>
                    <div style={styles.heroBadge}>🔥 EVENTO PRINCIPAL 🔥</div>
                    <h1 className="hero-title" style={styles.title}>
                        ENTrena como un <br />
                        <span style={styles.titleAccent}>GUERRERO</span>
                    </h1>
                    <p className="hero-subtitle" style={styles.subtitle}>
                        Preparación extrema, combate real y gloria eterna.
                        Únete al octágono más letal del desarrollo digital.
                    </p>
                    <button 
                        className="hero-button"
                        style={{
                            ...styles.ctaButton,
                            backgroundColor: clicked ? "#f97316" : "#dc2626",
                            color: "white",
                            transform: hover ? "scale(1.05)" : "scale(1)"
                        }}
                        onClick={handleStartProject}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        id="cta-button"
                    >
                        {clicked ? "⚡ Combate activo" : "🔥 Iniciar combate"}
                    </button>
                    <p style={{
                        ...styles.message,
                        opacity: message ? 1 : 0
                    }}>{message}</p>
                </div>
            </section>

            {/* Sección CATEGORÍAS */}
            <section id="categorias" style={styles.features}>
                <h2 style={styles.featuresTitle}>🏆 Categorías de combate</h2>
                <p style={styles.featuresSubtitle}>
                    Haz clic en cualquier categoría para ver los detalles del campeón
                </p>
                
                <div style={styles.grid}>
                    {cardsData.map((card, index) => (
                        <div 
                            key={card.id}
                            style={{
                                ...styles.card,
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), url(${card.image})`,
                                border: `3px solid ${selectedCard === index ? "#ef4444" : activeCard === index ? "#dc2626" : "#2c2c2c"}`,
                                boxShadow: selectedCard === index
                                    ? "0 0 30px rgba(239,68,68,0.6), 0 10px 25px rgba(0,0,0,0.5)"
                                    : activeCard === index
                                    ? "0 0 20px rgba(220,38,38,0.4), 0 8px 20px rgba(0,0,0,0.4)"
                                    : "0 8px 20px rgba(0,0,0,0.3)",
                                transform: activeCard === index ? "translateY(-10px) scale(1.02)" : "translateY(0)"
                            }}
                            onMouseEnter={() => handleCardHover(index)}
                            onMouseLeave={handleCardLeave}
                            onClick={() => handleCardClick(index)}
                        >
                            {selectedCard === index && (
                                <div style={styles.selectedBadge}>✓ SELECCIONADO</div>
                            )}
                            <h3 style={styles.cardTitle}>{card.emoji} {card.title}</h3>
                            <p style={styles.cardDesc}>{card.desc}</p>
                            <p style={styles.cardExtra}>{card.extra}</p>
                        </div>
                    ))}
                </div>

                <div style={{
                    ...styles.detailSection,
                    maxHeight: selectedCard !== null ? "800px" : "0px",
                    opacity: selectedCard !== null ? 1 : 0,
                    padding: selectedCard !== null ? "40px 20px" : "0 20px",
                    margin: selectedCard !== null ? "40px auto 0 auto" : "0 auto"
                }}>
                    {selectedCardData && (
                        <div style={styles.detailContent}>
                            <img 
                                src={selectedCardData.image} 
                                alt={selectedCardData.title}
                                style={styles.detailImage}
                            />
                            <h3 style={styles.detailTitle}>
                                {selectedCardData.emoji} {selectedCardData.title}
                            </h3>
                            <p style={styles.detailSubtitle}>🏅 Categoría: {selectedCardData.title}</p>
                            
                            <div style={styles.detailGrid}>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>🏆 Campeón Actual</h4>
                                    <p style={styles.detailCardValue}>{selectedCardData.campeon}</p>
                                    <p style={styles.detailCardSmall}>Apodo: {selectedCardData.apodo}</p>
                                </div>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>📊 Récord</h4>
                                    <p>{selectedCardData.records}</p>
                                </div>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>👑 Títulos</h4>
                                    <p style={styles.detailCardSmall}>{selectedCardData.titulos}</p>
                                </div>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>💥 Golpe Signature</h4>
                                    <p style={styles.detailCardSmall}>{selectedCardData.signature_move}</p>
                                </div>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>⚖️ Peso</h4>
                                    <p>{selectedCardData.peso}</p>
                                </div>
                                <div style={styles.detailCard}>
                                    <h4 style={styles.detailCardTitle}>🎂 Edad</h4>
                                    <p>{selectedCardData.edad}</p>
                                </div>
                            </div>
                            
                            <div style={styles.detailButtons}>
                                <button 
                                    style={styles.vsButton}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.background = "#f97316";
                                        e.target.style.color = "#0a0a0a";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                        e.target.style.background = "#dc2626";
                                        e.target.style.color = "white";
                                    }}
                                    onClick={() => alert(`🥊 ¡Combate estelar! ${selectedCardData.campeon} vs Retador - En vivo pronto`)}
                                >
                                    VS Peleador Retador
                                </button>
                                <button 
                                    style={styles.closeButton}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.background = "#f97316";
                                        e.target.style.color = "#0a0a0a";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                        e.target.style.background = "transparent";
                                        e.target.style.color = "#ef4444";
                                    }}
                                    onClick={() => setSelectedCard(null)}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Sección RANKINGS */}
            <section id="rankings" style={styles.rankingsSection}>
                <div style={styles.rankingsContainer}>
                    <h2 style={styles.rankingsTitle}>🏆 Rankings Oficiales UFC</h2>
                    <div style={styles.tableWrapper}>
                        <table style={styles.table}>
                            <thead>
                                <tr>
                                    <th style={styles.th}>División</th>
                                    <th style={styles.th}>Campeón 🏆</th>
                                    <th style={styles.th}>#1 Contender</th>
                                    <th style={styles.th}>#2 Contender</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={styles.tr}>
                                    <td style={styles.td}>Peso Pesado</td>
                                    <td style={{...styles.td, ...styles.champion}}>👑 Jon Jones</td>
                                    <td style={styles.td}>🥈 Tom Aspinall</td>
                                    <td style={styles.td}>🥉 Ciryl Gane</td>
                                </tr>
                                <tr style={styles.tr}>
                                    <td style={styles.td}>Peso Mediano</td>
                                    <td style={{...styles.td, ...styles.champion}}>👑 Dricus Du Plessis</td>
                                    <td style={styles.td}>🥈 Israel Adesanya</td>
                                    <td style={styles.td}>🥉 Sean Strickland</td>
                                </tr>
                                <tr style={styles.tr}>
                                    <td style={styles.td}>Peso Pluma</td>
                                    <td style={{...styles.td, ...styles.champion}}>👑 Ilia Topuria</td>
                                    <td style={styles.td}>🥈 Alexander Volkanovski</td>
                                    <td style={styles.td}>🥉 Max Holloway</td>
                                </tr>
                                <tr style={styles.tr}>
                                    <td style={styles.td}>Peso Ligero</td>
                                    <td style={{...styles.td, ...styles.champion}}>👑 Islam Makhachev</td>
                                    <td style={styles.td}>🥈 Charles Oliveira</td>
                                    <td style={styles.td}>🥉 Justin Gaethje</td>
                                </tr>
                                <tr style={styles.tr}>
                                    <td style={styles.td}>Peso Wélter</td>
                                    <td style={{...styles.td, ...styles.champion}}>👑 Leon Edwards</td>
                                    <td style={styles.td}>🥈 Kamaru Usman</td>
                                    <td style={styles.td}>🥉 Belal Muhammad</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Sección EVENTOS */}
            <section id="eventos" style={styles.eventosSection}>
                <div style={styles.eventosContainer}>
                    <h2 style={styles.eventosTitle}>📅 Próximos Eventos</h2>
                    <div style={styles.eventosGrid}>
                        <div style={styles.eventCard}>
                            <div style={styles.eventDate}>15 JUN 2026</div>
                            <h3 style={styles.eventName}>UFC 315: Jones vs Aspinall</h3>
                            <p style={styles.eventLocation}>📍 T-Mobile Arena, Las Vegas</p>
                            <button 
                                style={styles.eventButton}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "#f97316";
                                    e.target.style.color = "#0a0a0a";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "#dc2626";
                                    e.target.style.color = "white";
                                }}
                                onClick={() => alert('🎟️ Boletas disponibles pronto. Prepárate para la pelea!')}
                            >
                                Comprar Boletas
                            </button>
                        </div>
                        <div style={styles.eventCard}>
                            <div style={styles.eventDate}>28 JUL 2026</div>
                            <h3 style={styles.eventName}>UFC Fight Night: Du Plessis vs Adesanya</h3>
                            <p style={styles.eventLocation}>📍 Sydney, Australia</p>
                            <button 
                                style={styles.eventButton}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "#f97316";
                                    e.target.style.color = "#0a0a0a";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "#dc2626";
                                    e.target.style.color = "white";
                                }}
                                onClick={() => alert('🎟️ Boletas disponibles pronto. Prepárate para la pelea!')}
                            >
                                Comprar Boletas
                            </button>
                        </div>
                        <div style={styles.eventCard}>
                            <div style={styles.eventDate}>12 SEP 2026</div>
                            <h3 style={styles.eventName}>UFC 320: Topuria vs Volkanovski 2</h3>
                            <p style={styles.eventLocation}>📍 Madrid, España</p>
                            <button 
                                style={styles.eventButton}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "scale(1.05)";
                                    e.target.style.background = "#f97316";
                                    e.target.style.color = "#0a0a0a";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.background = "#dc2626";
                                    e.target.style.color = "white";
                                }}
                                onClick={() => alert('🎟️ ¡Evento en tierra española! Boletas disponibles pronto.')}
                            >
                                Comprar Boletas
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

const styles = {
    main: {
        flex: 1,
        fontFamily: "'Oswald', 'Arial', sans-serif",
        background: "#050505",
        width: "100%"
    },
    hero: {
        position: "relative",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #2a0000 100%)",
        color: "white",
        padding: "120px 20px",
        textAlign: "center",
        borderBottom: "4px solid #dc2626",
        overflow: "hidden"
    },
    heroOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='rgba(220,38,38,0.05)' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
        pointerEvents: "none"
    },
    heroContainer: {
        position: "relative",
        maxWidth: "900px",
        margin: "0 auto",
        zIndex: 2
    },
    heroBadge: {
        display: "inline-block",
        background: "rgba(220,38,38,0.2)",
        border: "1px solid #dc2626",
        borderRadius: "30px",
        padding: "8px 20px",
        fontSize: "0.8rem",
        fontWeight: "bold",
        letterSpacing: "2px",
        marginBottom: "30px",
        color: "#ef4444"
    },
    title: {
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        marginBottom: "20px",
        fontWeight: "800",
        textTransform: "uppercase",
        letterSpacing: "4px",
        color: "#ffffff",
        lineHeight: "1.2"
    },
    titleAccent: {
        color: "#ef4444",
        textShadow: "0 0 30px rgba(239,68,68,0.5)",
        display: "inline-block"
    },
    subtitle: {
        fontSize: "clamp(1rem, 3vw, 1.3rem)",
        marginBottom: "35px",
        lineHeight: "1.6",
        color: "#cbd5e1",
        maxWidth: "700px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    ctaButton: {
        padding: "16px 40px",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
        fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
        fontWeight: "bold",
        boxShadow: "0 4px 20px rgba(220,38,38,0.5)",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    message: {
        marginTop: "20px",
        fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
        fontWeight: "bold",
        color: "#f97316",
        transition: "opacity 0.5s ease",
        textShadow: "0 0 5px black",
        minHeight: "60px"
    },
    features: {
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(to bottom, #0f0f0f, #050505)"
    },
    featuresTitle: {
        fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
        color: "#ef4444",
        textTransform: "uppercase",
        letterSpacing: "3px",
        marginBottom: "15px"
    },
    featuresSubtitle: {
        color: "#94a3b8",
        marginBottom: "40px",
        fontSize: "1rem"
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "20px"
    },
    card: {
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 20px",
        borderRadius: "20px",
        width: "280px",
        maxWidth: "100%",
        minHeight: "350px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    selectedBadge: {
        position: "absolute",
        top: "15px",
        right: "15px",
        background: "#ef4444",
        color: "white",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "0.7rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        zIndex: 3,
        animation: "pulse 1s ease"
    },
    cardTitle: {
        fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
        marginBottom: "10px",
        textTransform: "uppercase",
        textShadow: "0 2px 10px rgba(0,0,0,0.8)",
        position: "relative",
        zIndex: 2
    },
    cardDesc: {
        fontSize: "0.9rem",
        textShadow: "0 1px 5px rgba(0,0,0,0.8)",
        position: "relative",
        zIndex: 2,
        marginBottom: "15px"
    },
    cardExtra: {
        fontSize: "0.8rem",
        color: "#f97316",
        position: "relative",
        zIndex: 2
    },
    detailSection: {
        overflow: "hidden",
        transition: "all 0.5s ease-in-out",
        background: "linear-gradient(135deg, #1a1a1a, #0f0f0f)",
        borderRadius: "20px",
        width: "90%",
        maxWidth: "900px",
        border: "2px solid #ef4444",
        boxShadow: "0 0 30px rgba(239,68,68,0.3)"
    },
    detailContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
    },
    detailImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid #ef4444",
        boxShadow: "0 0 20px rgba(239,68,68,0.5)"
    },
    detailTitle: {
        fontSize: "2rem",
        color: "#ef4444",
        textTransform: "uppercase",
        marginBottom: "10px"
    },
    detailSubtitle: {
        color: "#94a3b8",
        fontSize: "0.9rem"
    },
    detailGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        width: "100%",
        textAlign: "center"
    },
    detailCard: {
        background: "rgba(255,255,255,0.1)",
        padding: "15px",
        borderRadius: "12px",
        backdropFilter: "blur(10px)",
        transition: "transform 0.3s ease"
    },
    detailCardTitle: {
        color: "#f97316",
        marginBottom: "8px"
    },
    detailCardValue: {
        fontSize: "1.2rem",
        fontWeight: "bold"
    },
    detailCardSmall: {
        fontSize: "0.8rem",
        color: "#aaa"
    },
    detailButtons: {
        display: "flex",
        gap: "15px",
        marginTop: "10px"
    },
    vsButton: {
        background: "#dc2626",
        color: "white",
        border: "none",
        padding: "12px 30px",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease"
    },
    closeButton: {
        background: "transparent",
        color: "#ef4444",
        border: "2px solid #ef4444",
        padding: "12px 30px",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease"
    },
    rankingsSection: {
        padding: "80px 20px",
        background: "linear-gradient(to bottom, #050505, #0a0a0a)",
        borderTop: "2px solid #dc2626",
        borderBottom: "2px solid #dc2626"
    },
    rankingsContainer: {
        maxWidth: "1100px",
        margin: "0 auto"
    },
    rankingsTitle: {
        textAlign: "center",
        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
        color: "#ef4444",
        marginBottom: "40px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: "0 0 10px rgba(239,68,68,0.5)"
    },
    tableWrapper: {
        overflowX: "auto",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(220,38,38,0.3)"
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        background: "#0f0f0f",
        minWidth: "600px"
    },
    th: {
        background: "#dc2626",
        color: "white",
        padding: "15px",
        textAlign: "left",
        fontSize: "clamp(0.8rem, 3vw, 1rem)",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    td: {
        padding: "12px 15px",
        color: "#e5e5e5",
        borderBottom: "1px solid #2c2c2c",
        fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)"
    },
    champion: {
        color: "#ef4444",
        fontWeight: "bold"
    },
    tr: {
        transition: "background 0.2s ease",
        ':hover': {
            background: "#1a1a1a"
        }
    },
    eventosSection: {
        padding: "80px 20px",
        background: "#050505"
    },
    eventosContainer: {
        maxWidth: "1100px",
        margin: "0 auto"
    },
    eventosTitle: {
        textAlign: "center",
        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
        color: "#ef4444",
        marginBottom: "40px",
        textTransform: "uppercase",
        letterSpacing: "2px"
    },
    eventosGrid: {
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap"
    },
    eventCard: {
        background: "linear-gradient(145deg, #181818, #0c0c0c)",
        padding: "30px",
        borderRadius: "20px",
        width: "300px",
        textAlign: "center",
        border: "1px solid #2c2c2c",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    eventDate: {
        background: "#dc2626",
        color: "white",
        padding: "8px 16px",
        borderRadius: "30px",
        display: "inline-block",
        fontSize: "0.8rem",
        fontWeight: "bold",
        marginBottom: "15px"
    },
    eventName: {
        fontSize: "1.3rem",
        color: "#ef4444",
        marginBottom: "10px"
    },
    eventLocation: {
        color: "#94a3b8",
        fontSize: "0.9rem",
        marginBottom: "20px"
    },
    eventButton: {
        background: "#dc2626",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "30px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "all 0.3s ease",
        width: "100%"
    }
};

export default Body;