import Layout from "../../../components/Layout/Layout";
import { useEffect } from "react";

/**
 * TODO: Fix alert message when user logs out successfully
 * @returns HomePage screen
 */
const HomePage = () => {
    const cards = [
        { id: 1, emoji: "🏖️", caption: "Beach Getaways", sub: "Sun, sand, and the whole crew", gradient: "linear-gradient(135deg, #f97316, #ec4899, #a855f7)" },
        { id: 2, emoji: "🏔️", caption: "Mountain Escapes", sub: "Hit the trails together", gradient: "linear-gradient(135deg, #22c55e, #0ea5e9, #1e3a8a)" },
        { id: 3, emoji: "🌆", caption: "City Adventures", sub: "Explore every corner", gradient: "linear-gradient(135deg, #1e293b, #0ea5e9, #6366f1)" },
        { id: 4, emoji: "🌴", caption: "Tropical Paradise", sub: "Where every day is summer", gradient: "linear-gradient(135deg, #06b6d4, #10b981, #84cc16)" },
        { id: 5, emoji: "⛷️", caption: "Winter Retreats", sub: "Slopes and hot cocoa", gradient: "linear-gradient(135deg, #bae6fd, #93c5fd, #818cf8)" },
        { id: 6, emoji: "🏜️", caption: "Desert Wonders", sub: "Sunsets like nowhere else", gradient: "linear-gradient(135deg, #fbbf24, #f97316, #dc2626)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add("card-visible");
            }),
            { threshold: 0.15 }
        );
        document.querySelectorAll(".photo-card").forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    const airplane = (
        <div id="plane-scene">
            <div id="plane-wrapper">
                <svg id="plane-svg" viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg">
                    {/* Fuselage main body */}
                    <path d="M28,50 C30,38 52,35 88,34 L245,34 C265,34 278,38 287,44 Q293,47 295,50 Q293,53 287,56 C278,62 265,66 245,66 L88,66 C52,65 30,62 28,50 Z" fill="white"/>
                    {/* Underside shading */}
                    <path d="M30,54 C34,62 54,64 88,65 L245,65 C264,65 276,61 284,56 C276,63 264,68 245,68 L88,68 C52,67 30,64 30,54 Z" fill="#dde0e5"/>
                    {/* Nose section */}
                    <path d="M245,34 C265,34 278,38 287,44 Q292,47 295,50 Q292,53 287,56 C278,62 265,66 245,66 C250,58 252,42 245,34 Z" fill="#e8e8e8"/>
                    {/* Nose tip */}
                    <path d="M290,47 Q297,49.5 300,50 Q297,50.5 290,53 Z" fill="#d0d0d0"/>
                    {/* Cockpit windows - angled Boeing style */}
                    <path d="M237,37 Q249,35 259,37 L257,45 Q245,43 236,45 Z" fill="#4da6c8" opacity="0.9"/>
                    <line x1="248" y1="35.5" x2="247" y2="44.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
                    {/* Fuselage window row */}
                    <ellipse cx="220" cy="38" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="207" cy="37.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="194" cy="37.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="181" cy="37.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="168" cy="37.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="155" cy="38" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="142" cy="38" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="129" cy="38.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="116" cy="39" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    <ellipse cx="103" cy="39.5" rx="4.5" ry="3" fill="#87ceeb" opacity="0.9"/>
                    {/* Livery stripe */}
                    <path d="M88,50 L268,50" stroke="#1a56db" strokeWidth="3" opacity="0.55"/>
                    {/* Main wing - swept back side view */}
                    <path d="M148,60 L174,10 L190,14 L164,62 Z" fill="#c8d4e2"/>
                    {/* Wing leading edge highlight */}
                    <path d="M148,60 L174,10 L176,12 L150,61 Z" fill="#dce8f4"/>
                    {/* Wing trailing edge flap line */}
                    <line x1="158" y1="61" x2="182" y2="13" stroke="#b0bece" strokeWidth="0.8"/>
                    {/* Engine pylon */}
                    <path d="M159,60 L161,68" stroke="#8fa0b0" strokeWidth="4" strokeLinecap="round"/>
                    {/* CFM56 nacelle body */}
                    <path d="M147,74 Q156,67 178,68 L180,75 Q156,78 147,75 Z" fill="#a8b8c4"/>
                    {/* Nacelle top highlight */}
                    <path d="M152,67 Q168,65.5 178,68 L178,69.5 Q168,67 152,68.5 Z" fill="#c0d0dc"/>
                    {/* Engine intake */}
                    <ellipse cx="147" cy="74" rx="5" ry="6" fill="#607888"/>
                    <ellipse cx="147" cy="74" rx="2.5" ry="3" fill="#3a4e5a"/>
                    {/* Engine exhaust */}
                    <ellipse cx="180" cy="72" rx="3" ry="4" fill="#8898a8"/>
                    {/* Vertical tail fin */}
                    <path d="M40,50 L52,15 L74,38 L70,50 Z" fill="#c8d4e0"/>
                    {/* Fin leading edge highlight */}
                    <path d="M52,15 L74,38 L72,39.5 L53,17 Z" fill="#dce6f2"/>
                    {/* Horizontal stabilizers */}
                    <path d="M36,44 L17,29 L44,42 Z" fill="#c8d4e0"/>
                    <path d="M36,56 L17,68 L44,58 Z" fill="#c8d4e0"/>
                    {/* Tail cone */}
                    <path d="M28,50 Q34,46 46,48.5 Q34,52 28,50 Z" fill="#d5d8dc"/>
                </svg>
                <div id="contrail"></div>
            </div>
        </div>
    );

    const gallery = (
        <div id="gallery-section">
            <h2 id="gallery-heading">Where will your group go next?</h2>
            <div id="gallery-grid">
                {cards.map((card, i) => (
                    <div
                        key={card.id}
                        className="photo-card"
                        style={{ background: card.gradient, animationDelay: `${i * 0.1}s`, transitionDelay: `${i * 0.1}s` }}
                    >
                        <div className="card-emoji">{card.emoji}</div>
                        <div className="card-frame-bottom">
                            <p className="card-caption">{card.caption}</p>
                            <p className="card-sub">{card.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (localStorage.getItem("loggedOut")) {
        return (
            <>
                <Layout />
                {airplane}
                <div id="home">
                    <title>Home | FG-2.0</title>
                    <header>
                        <h1 id="fg-header">Welcome to FG 2.0</h1>
                    </header>
                </div>
                {gallery}
            </>
        )
    }
    return (
        <>
            <Layout />
            {airplane}
            <div id="home">
                <title>Home | FG-2.0</title>
                <header>
                    <h1 id="fg-header">Welcome to FG 2.0</h1>
                </header>
            </div>
            {gallery}
        </>
    )
}

export default HomePage;
