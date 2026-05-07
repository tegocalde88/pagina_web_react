import { useState, useMemo } from "react";

function RankingsTable() {
    const [hoveredRow, setHoveredRow] = useState(null);

    const rankingsData = useMemo(() => [
        { id: 1, division: "Peso Pesado", champion: "Jon Jones", contender1: "Tom Aspinall", contender2: "Ciryl Gane" },
        { id: 2, division: "Peso Mediano", champion: "Dricus Du Plessis", contender1: "Israel Adesanya", contender2: "Sean Strickland" },
        { id: 3, division: "Peso Pluma", champion: "Ilia Topuria", contender1: "Alexander Volkanovski", contender2: "Max Holloway" },
        { id: 4, division: "Peso Ligero", champion: "Islam Makhachev", contender1: "Charles Oliveira", contender2: "Justin Gaethje" },
        { id: 5, division: "Peso Wélter", champion: "Leon Edwards", contender1: "Kamaru Usman", contender2: "Belal Muhammad" }
    ], []);

    const containerStyle = {
        padding: "60px 20px",
        background: "linear-gradient(to bottom, #050505, #0a0a0a)",
        borderTop: "2px solid #e11d1d",
        borderBottom: "2px solid #e11d1d"
    };

    const titleStyle = {
        textAlign: "center",
        fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
        color: "#facc15",
        marginBottom: "40px",
        textTransform: "uppercase",
        letterSpacing: "2px",
        textShadow: "0 0 10px rgba(241,196,15,0.5)"
    };

    const tableWrapperStyle = {
        maxWidth: "1100px",
        margin: "0 auto",
        overflowX: "auto",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(225,29,29,0.3)"
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        background: "#0f0f0f",
        minWidth: "600px"
    };

    const thStyle = {
        background: "#e11d1d",
        color: "white",
        padding: "15px",
        textAlign: "left",
        fontSize: "clamp(0.8rem, 3vw, 1rem)",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px"
    };

    const getTdStyle = (isHovered) => ({
        padding: "12px 15px",
        color: "#e5e5e5",
        borderBottom: "1px solid #2c2c2c",
        backgroundColor: isHovered ? "#1a1a1a" : "transparent",
        transition: "all 0.2s ease",
        cursor: "pointer",
        fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)"
    });

    const championStyle = {
        color: "#facc15",
        fontWeight: "bold"
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>🏆 Rankings Oficiales UFC</h2>
            <div style={tableWrapperStyle}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>División</th>
                            <th style={thStyle}>Campeón 🏆</th>
                            <th style={thStyle}>#1 Contender</th>
                            <th style={thStyle}>#2 Contender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankingsData.map((item) => (
                            <tr
                                key={item.id}
                                onMouseEnter={() => setHoveredRow(item.id)}
                                onMouseLeave={() => setHoveredRow(null)}
                            >
                                <td style={getTdStyle(hoveredRow === item.id)}>{item.division}</td>
                                <td style={{...getTdStyle(hoveredRow === item.id), ...championStyle}}>
                                    👑 {item.champion}
                                </td>
                                <td style={getTdStyle(hoveredRow === item.id)}>🥈 {item.contender1}</td>
                                <td style={getTdStyle(hoveredRow === item.id)}>🥉 {item.contender2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RankingsTable;