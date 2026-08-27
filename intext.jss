* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    background: #050505;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.container {
    width: 100%;
    max-width: 450px;
    padding: 20px;
}

.card {
    background: #1a1a1a;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    margin-top: 60px;
    border: 1px solid #00ffcc;
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
}

.logo { color: #00ffcc; text-shadow: 0 0 10px #00ffcc; margin-bottom: 10px; }

input {
    width: 100%;
    padding: 15px;
    margin: 20px 0;
    border-radius: 10px;
    border: none;
    background: #333;
    color: white;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background: #00ffcc;
    color: black;
    font-weight: bold;
    cursor: pointer;
}

/* Home Page Design */
.home-container { width: 100%; margin-top: 20px; }

.profile-header {
    background: #1a1a1a;
    padding: 15px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #00ffcc;
}

.id-badge {
    background: #00ffcc;
    color: black;
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 5px;
    font-weight: bold;
}

.avatar { font-size: 2rem; background: #333; padding: 10px; border-radius: 50%; }

.welcome-section { text-align: center; margin: 40px 0; }
.neon-text { color: #00ffcc; text-shadow: 0 0 15px #00ffcc; }

.game-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.game-box {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid #333;
    transition: 0.3s;
}

.game-box:hover { border-color: #00ffcc; transform: translateY(-5px); }
.game-thumb { font-size: 2.5rem; margin-bottom: 10px; }

.logout-btn { margin-top: 30px; background: #ff3366; color: white; }
