
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #193d30;
  background: #f8f6ed;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  --green: #204b3a;
  --green-dark: #123529;
  --green-deep: #0d2a20;
  --green-light: #e7eee5;
  --gold: #b69a58;
  --gold-light: #ddca91;
  --ivory: #f8f6ed;
  --white: #fffdf7;
  --text: #294539;
  --muted: #7c897c;
  --border: #d9d7c3;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 24px;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--ivory);
}

button,
input,
select {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

button {
  cursor: pointer;
}

.invitation {
  min-height: 100vh;
  overflow: hidden;
  color: var(--text);
  background:
    radial-gradient(ellipse at 50% 0%, #e9ecdf 0%, transparent 44%),
    var(--ivory);
}

/* Top navigation */

.topbar {
  min-height: 66px;
  padding: 18px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background: var(--green-dark);
  color: #f6efda;
  border-bottom: 1px solid rgba(221, 202, 145, .6);
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 1.5px;
}

.topbar-label {
  font-size: 10px;
  letter-spacing: 3px;
  color: var(--gold-light);
}

/* Admin editor */

.admin-toggle {
  position: fixed;
  z-index: 50;
  right: 18px;
  bottom: 18px;
  padding: 13px 19px;
  border: 1px solid var(--gold);
  border-radius: 40px;
  background: var(--green-dark);
  color: var(--white);
  box-shadow: 0 8px 28px #0d2a2030;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  transition: transform .2s, background .2s;
}

.admin-toggle:hover {
  background: var(--green);
  transform: translateY(-2px);
}

.admin-panel {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  width: min(92%, 440px);
  max-height: 85vh;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  padding: 30px;
  border: 1px solid var(--gold);
  border-radius: 8px;
  background: var(--white);
  box-shadow: 0 25px 90px #102e2240;
}

.admin-panel h2 {
  margin: 5px 0 22px;
  color: var(--green-dark);
  font-family: 'Manrope', sans-serif;
  font-size: 25px;
}

.admin-panel label,
.rsvp-form label {
  display: grid;
  gap: 8px;
  margin: 16px 0;
  color: var(--green-dark);
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

.admin-panel input,
.rsvp-form input,
.rsvp-form select {
  width: 100%;
  min-height: 46px;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 5px;
  outline: none;
  background: #fffefa;
  color: var(--green-dark);
  font-size: 14px;
  transition: border-color .2s, box-shadow .2s;
}

.admin-panel input:focus,
.rsvp-form input:focus,
.rsvp-form select:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px #b69a581b;
}

/* Hero */

.hero {
  position: relative;
  isolation: isolate;
  padding: 66px 24px 76px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 45%, #2c5b46 0%, #204b3a 49%, #123529 100%);
  color: var(--white);
  text-align: center;
}

.hero::before,
.hero::after {
  position: absolute;
  z-index: -1;
  content: '';
  pointer-events: none;
}

.hero::before {
  inset: 17px;
  border: 1px solid rgba(221, 202, 145, .7);
}

.hero::after {
  inset: 24px;
  border: 1px solid rgba(221, 202, 145, .22);
  background:
    radial-gradient(ellipse at top left, #ffffff08, transparent 45%),
    radial-gradient(ellipse at bottom right, #ffffff08, transparent 45%);
}

.hero-frame {
  position: relative;
  width: min(100%, 900px);
  margin: auto;
}

.eyebrow {
  margin: 0 0 15px;
  color: #a98c4d;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.9;
}

.hero .eyebrow {
  padding-top: 4px;
  color: var(--gold-light);
}

.tamil-blessing {
  color: var(--gold);
  font-size: 16px;
  line-height: 1.9;
}

.hero .tamil-blessing {
  color: #e8d9ae;
}

.ornament {
  margin: 24px 0;
  color: var(--gold-light);
  font-size: 17px;
  letter-spacing: 7px;
}

.small-title {
  margin: 24px 0 12px;
  color: #e5e7d9;
  font-size: 14px;
  letter-spacing: 2px;
}

.hero h1,
footer h2 {
  margin: 12px 0;
  color: #f6edcf;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(38px, 6.5vw, 72px);
  font-weight: 500;
  letter-spacing: -2px;
  line-height: 1.18;
  overflow-wrap: anywhere;
}

.ampersand,
footer h2 span {
  color: var(--gold-light);
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-weight: 400;
}

.subtitle {
  max-width: 520px;
  margin: 20px auto;
  color: #e1e8dd;
  font-size: 16px;
  line-height: 1.8;
}

/* Floral-inspired CSS illustration */

.hero-art {
  position: relative;
  width: min(100%, 520px);
  height: 280px;
  margin: 35px auto 28px;
  overflow: hidden;
  border: 1px solid var(--gold);
  border-radius: 180px 180px 8px 8px;
  background:
    radial-gradient(ellipse at 50% 20%, #fff9e7 0%, #eadfc1 57%, #c4aa76 100%);
  box-shadow:
    inset 0 0 0 7px #204b3a,
    inset 0 0 0 9px var(--gold),
    0 14px 32px #071f1530;
}

.art-sun {
  position: absolute;
  top: 8px;
  right: 0;
  left: 0;
  color: #a78a4b;
  font-size: 56px;
}

.art-mandap {
  position: absolute;
  top: 37px;
  left: 50%;
  transform: translateX(-50%);
  color: #a38a52;
  font-size: 135px;
  opacity: .55;
}

.art-couple {
  position: absolute;
  bottom: 14px;
  left: 50%;
  display: flex;
  align-items: end;
  transform: translateX(-50%);
}

.bride-art,
.groom-art {
  position: relative;
  width: 112px;
  height: 190px;
}

.bride-face,
.groom-face {
  position: absolute;
  z-index: 2;
  top: 34px;
  left: 34px;
  width: 44px;
  height: 51px;
  padding-top: 20px;
  border: 2px solid #956b4a;
  border-radius: 45% 45% 48% 48%;
  background: #d9a27a;
  color: #6a4431;
  font-size: 8px;
  text-align: center;
}

.bride-hair {
  position: absolute;
  z-index: 3;
  top: 23px;
  left: 29px;
  width: 54px;
  height: 60px;
  border-radius: 50% 50% 25% 25%;
  background: #33241f;
}

.bride-jewellery {
  position: absolute;
  z-index: 4;
  top: 35px;
  left: 44px;
  color: #f0d17b;
  font-size: 27px;
}

.bride-saree {
  position: absolute;
  bottom: 0;
  left: 4px;
  width: 104px;
  height: 120px;
  padding-top: 45px;
  border: 2px solid #e2c578;
  border-radius: 48% 48% 8px 8px;
  background: repeating-linear-gradient(
    45deg,
    #1d5c43,
    #1d5c43 10px,
    #2b7152 11px,
    #2b7152 14px
  );
  color: #ead18b;
  font-size: 27px;
}

.groom-turban {
  position: absolute;
  z-index: 4;
  top: 6px;
  left: 25px;
  width: 64px;
  height: 37px;
  padding-top: 0;
  border: 2px solid #a98b4b;
  border-radius: 50% 50% 25% 25%;
  background: #e3c577;
  color: #28543d;
  text-align: center;
  font-size: 24px;
}

.groom-face {
  top: 38px;
  background: #c88c63;
}

.groom-sherwani {
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 92px;
  height: 125px;
  padding-top: 50px;
  border: 2px solid #e8d194;
  border-radius: 35% 35% 5px 5px;
  background: repeating-linear-gradient(
    90deg,
    #d7bd7b,
    #d7bd7b 12px,
    #ecddb0 13px,
    #ecddb0 16px
  );
  color: #295640;
  text-align: center;
  font-size: 23px;
}

.garland {
  position: absolute;
  z-index: 5;
  top: 63px;
  left: 82px;
  color: #f0d68b;
  font-size: 37px;
  transform: rotate(90deg);
}

.art-lotus {
  position: absolute;
  right: 0;
  bottom: 4px;
  left: 0;
  color: #617b51;
  font-size: 20px;
}

/* Date plaque and buttons */

.date-plaque {
  display: grid;
  gap: 11px;
  width: min(100%, 380px);
  margin: 30px auto;
  padding: 23px 16px;
  border-top: 1px solid var(--gold);
  border-bottom: 1px solid var(--gold);
  color: #f1e8c9;
}

.date-plaque span {
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 3px;
}

.date-plaque strong {
  color: #fff7dc;
  font-family: 'Manrope', sans-serif;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.5;
}

.venue {
  max-width: 560px;
  margin: 20px auto 27px;
  color: #e1e8dc;
  font-size: 14px;
  line-height: 1.9;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 46px;
  padding: 14px 22px;
  border: 1px solid var(--gold);
  border-radius: 3px;
  background: var(--gold);
  color: var(--green-deep);
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.3px;
  line-height: 1.5;
  transition: background .2s, color .2s, transform .2s;
}

.primary-button:hover {
  background: #e4d09a;
  transform: translateY(-2px);
}

.secondary-button {
  margin-left: 8px;
  background: transparent;
  color: var(--green);
}

.secondary-button:hover {
  background: var(--green-light);
}

/* Main sections */

.section {
  padding: 78px 24px;
  text-align: center;
}

.section h2 {
  margin: 6px 0 18px;
  color: var(--green-dark);
  font-family: 'Manrope', sans-serif;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1.3;
}

.section-intro {
  max-width: 580px;
  margin: 0 auto 30px;
  color: #6f7d70;
  font-size: 15px;
  line-height: 1.9;
}

.countdown {
  border-bottom: 1px solid #ded9c7;
  background:
    radial-gradient(ellipse at 50% 0%, #fffef8, transparent 70%),
    #f1f0e5;
}

.timer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin: 35px auto 22px;
}

.timer > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 118px;
  min-height: 112px;
  border: 1px solid #c8b982;
  border-radius: 5px;
  background: #fffdf7;
  box-shadow: 0 7px 22px #24493609;
}

.timer strong {
  color: var(--green);
  font-family: 'Manrope', sans-serif;
  font-size: 34px;
  font-weight: 500;
}

.timer span {
  color: #9a8045;
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 2px;
}

/* Family cards */

.family {
  background: var(--ivory);
}

.family-grid,
.event-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  width: min(100%, 850px);
  margin: 38px auto 0;
}

.family-card,
.event-card {
  position: relative;
  padding: 35px 25px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: var(--white);
  box-shadow: 0 10px 30px #183f2a08;
}

.family-card::before,
.event-card::before {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  border: 1px solid #b69a582b;
  border-radius: 2px;
  content: '';
  pointer-events: none;
}

.family-symbol,
.event-icon {
  display: inline-block;
  color: var(--gold);
  font-size: 30px;
}

.family-card h3,
.event-card h3 {
  margin: 16px 0;
  color: var(--green);
  font-family: 'Manrope', sans-serif;
  font-size: 22px;
  font-weight: 500;
}

.family-name {
  color: var(--green-dark);
  font-size: 19px;
  font-weight: 500;
}

.family-caption {
  color: #9a8045;
  font-size: 12px;
  letter-spacing: .5px;
}

.parent-name {
  color: #6b796b;
  font-size: 14px;
  line-height: 1.8;
}

/* Events */

.events {
  background:
    radial-gradient(ellipse at 50% 0%, #edf0e4, transparent 65%),
    #e9ede3;
}

.event-card {
  line-height: 1.8;
}

.event-card .tamil-blessing {
  font-size: 14px;
}

.event-date {
  color: #9a8045;
  font-size: 14px;
  font-weight: 600;
}

.event-divider {
  margin: 17px 0;
  color: var(--gold);
}

.event-venue {
  color: var(--green-dark);
  font-weight: 600;
}

.text-link {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-top: 16px;
  color: var(--green);
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration-color: var(--gold);
  text-underline-offset: 5px;
}

/* RSVP */

.rsvp {
  background:
    radial-gradient(ellipse at 50% 0%, #fffdf7, transparent 70%),
    #f8f6ed;
}

.rsvp > .primary-button {
  margin: 8px auto 25px;
}

.rsvp-form {
  width: min(100%, 430px);
  margin: 22px auto 0;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background: #fffdf7;
  box-shadow: 0 12px 32px #183f2a08;
}

.rsvp-form .primary-button {
  width: 100%;
  margin-top: 12px;
}

/* Footer */

footer {
  padding: 54px 20px;
  border-top: 1px solid var(--gold);
  background: var(--green-dark);
  color: #e8e8d7;
  text-align: center;
}

.floral {
  color: var(--gold-light);
  font-size: 36px;
}

footer h2 {
  font-size: clamp(31px, 5vw, 52px);
}

footer .tamil-blessing {
  color: var(--gold-light);
}

.footer-caption {
  color: #d3d8c7;
  font-family: 'DM Sans', sans-serif;
  font-size: 9px;
  letter-spacing: 2.5px;
}

/* Mobile responsiveness */

@media (max-width: 600px) {
  .topbar {
    padding: 14px 18px;
    flex-direction: column;
    gap: 7px;
    font-size: 11px;
  }

  .topbar-label {
    font-size: 9px;
    letter-spacing: 2px;
  }

  .hero {
    padding: 45px 17px 50px;
  }

  .hero::before {
    inset: 9px;
  }

  .hero::after {
    inset: 14px;
  }

  .hero .eyebrow {
    font-size: 9px;
    letter-spacing: 2px;
  }

  .hero h1 {
    letter-spacing: -1px;
  }

  .hero-art {
    height: 245px;
    margin-top: 28px;
  }

  .bride-art,
  .groom-art {
    transform: scale(.88);
    transform-origin: bottom center;
  }

  .section {
    padding: 56px 17px;
  }

  .timer {
    gap: 9px;
  }

  .timer > div {
    width: calc(50% - 6px);
    max-width: 145px;
    min-height: 95px;
  }

  .timer strong {
    font-size: 29px;
  }

  .family-grid,
  .event-grid {
    grid-template-columns: 1fr;
    gap: 17px;
  }

  .family-card,
  .event-card {
    padding: 30px 20px;
  }

  .rsvp-form {
    padding: 20px;
  }

  .admin-panel {
    padding: 23px;
  }

  .admin-toggle {
    right: 12px;
    bottom: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}

/* WEDDING DECORATIVE LAYER */

.hero {
  background:
    radial-gradient(ellipse at 50% 40%, #2b6048 0%, #204b3a 52%, #102f23 100%);
}

.hero-frame {
  padding: 24px 18px;
  border: 1px solid #c5a45c;
  outline: 1px solid #c5a45c55;
  outline-offset: -10px;
}

.hero .small-title::before,
.hero .small-title::after {
  content: "❧";
  display: inline-block;
  margin: 0 13px;
  color: #dfc982;
  font-size: 21px;
}

.hero-art {
  border: 2px solid #c4a45e;
  box-shadow:
    inset 0 0 0 7px #204b3a,
    inset 0 0 0 9px #d5b96d,
    0 12px 35px #061e1440;
}

.section {
  position: relative;
  isolation: isolate;
}

.countdown,
.rsvp {
  background:
    radial-gradient(ellipse at 0% 50%, #d9dfc7a0, transparent 35%),
    radial-gradient(ellipse at 100% 50%, #e6d6a866, transparent 35%),
    #f8f6ed;
}

.countdown::before,
.family::before,
.events::before,
.rsvp::before {
  display: block;
  margin: 0 auto 22px;
  color: #b69a58;
  content: "✿  ──────  ❦  ──────  ✿";
  font-size: 15px;
  letter-spacing: 2px;
}

.family {
  background:
    radial-gradient(ellipse at top left, #e4eadb, transparent 48%),
    #f8f6ed;
}

.family-card,
.event-card {
  border: 1px solid #c6ad70;
  border-radius: 4px;
  box-shadow:
    inset 0 0 0 5px #f4eedc,
    inset 0 0 0 6px #d8c58f,
    0 10px 28px #153c2910;
}

.family-card::after,
.event-card::after {
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  content: "❀";
  color: #b69a58;
  font-size: 18px;
  pointer-events: none;
}

.family-card,
.event-card {
  padding-top: 48px;
}

.events {
  background:
    radial-gradient(ellipse at 50% 0%, #dce5d5, transparent 70%),
    #e9ede3;
}

.timer > div {
  position: relative;
  border: 1px solid #b69a58;
  border-radius: 3px;
  box-shadow:
    inset 0 0 0 4px #fffdf7,
    inset 0 0 0 5px #e6d8b1,
    0 8px 22px #153c2910;
}

.timer > div::before {
  content: "✦";
  color: #b69a58;
  font-size: 12px;
}

.rsvp-form {
  border: 1px solid #c6ad70;
  box-shadow:
    inset 0 0 0 5px #fffdf7,
    inset 0 0 0 6px #e4d7b5,
    0 12px 30px #153c2910;
}

footer {
  position: relative;
  border-top: 3px double #c6ad70;
  border-bottom: 3px double #c6ad70;
  background:
    radial-gradient(ellipse at top left, #28563f, transparent 50%),
    radial-gradient(ellipse at bottom right, #28563f, transparent 50%),
    #123529;
}

footer::before,
footer::after {
  display: block;
  color: #c6ad70;
  content: "❦  ✧  ❀  ✧  ❦";
  font-size: 18px;
  letter-spacing: 5px;
}

footer::before {
  margin-bottom: 22px;
}

footer::after {
  margin-top: 22px;
}

.primary-button {
  border-radius: 3px;
  box-shadow: 0 4px 12px #081e1420;
}

.primary-button:hover {
  box-shadow: 0 7px 18px #081e1430;
}

@media (max-width: 600px) {
  .hero-frame {
    padding: 20px 10px;
  }

  .hero .small-title::before,
  .hero .small-title::after {
    margin: 0 5px;
  }

  .countdown::before,
  .family::before,
  .events::before,
  .rsvp::before {
    font-size: 11px;
    letter-spacing: 0;
  }
}

/* Layout corrections for the existing App.tsx */

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 16px 5%;
  border-bottom: 1px solid #d5b96d;
  background: #fffaf0;
  color: #214533;
  font-size: 13px;
}

.topbar-label {
  color: #927439;
  font-size: 10px;
  letter-spacing: 2px;
  text-align: right;
}

.admin-toggle {
  position: fixed;
  top: 14px;
  right: 14px;
  z-index: 1100;
  padding: 10px 14px;
  border: 1px solid #d5b96d;
  border-radius: 5px;
  background: #214533;
  color: #fffdf6;
  cursor: pointer;
}

.admin-panel {
  position: relative;
  z-index: 1200;
  width: calc(100% - 32px);
  max-width: 500px;
  margin: 24px auto;
  padding: 28px;
  border: 1px solid #d5b96d;
  border-radius: 10px;
  background: #fffdf6;
  box-shadow: 0 12px 36px #173e2b18;
}

.admin-panel label,
.rsvp-form label {
  display: block;
  margin: 16px 0;
  color: #214533;
  text-align: left;
  font-size: 13px;
}

.admin-panel input {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 12px;
  border: 1px solid #d5b96d;
  border-radius: 5px;
  background: #fffaf0;
}

.secondary-button {
  margin: 10px;
  padding: 12px 18px;
  border: 1px solid #b99a53;
  border-radius: 5px;
  background: #fffaf0;
  color: #214533;
  cursor: pointer;
}

/* Countdown: keep the heading above the timer */
.section.countdown {
  display: block;
}

.timer {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  width: 100%;
  max-width: 620px;
  margin: 32px auto;
}

.timer > div {
  min-width: 0;
  padding: 22px 8px;
  border: 1px solid #d5b96d;
  border-radius: 8px;
  background: #fffdf6;
  text-align: center;
}

.timer strong {
  display: block;
  color: #214533;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 500;
}

.timer span {
  display: block;
  margin-top: 8px;
  color: #927439;
  font-size: 10px;
  letter-spacing: 1px;
}

/* Family cards */
.family-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  width: 100%;
  max-width: 900px;
  margin: 32px auto;
}

.family-card {
  min-width: 0;
  padding: 28px 20px;
  border: 1px solid #d5b96d;
  border-radius: 8px;
  background: #fffdf6;
  text-align: center;
}

.family-symbol,
.event-icon {
  color: #b99a53;
  font-size: 25px;
}

.family-name {
  color: #214533;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 20px;
}

.family-caption {
  color: #927439;
  font-size: 12px;
}

/* Event cards */
.event-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  width: 100%;
  max-width: 1000px;
  margin: 32px auto;
  text-align: left;
}

.event-card {
  min-width: 0;
  padding: 28px 24px;
  border: 1px solid #d5b96d;
  border-radius: 8px;
  background: #fffdf6;
  overflow-wrap: anywhere;
}

.event-card h3 {
  color: #214533;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 25px;
  font-weight: 500;
}

.event-date {
  color: #927439;
  font-weight: 600;
}

.event-divider {
  margin: 20px 0;
  color: #b99a53;
}

.text-link {
  display: inline-block;
  margin-top: 12px;
  color: #214533;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration-color: #b99a53;
  text-underline-offset: 4px;
}

/* RSVP and footer */
.rsvp-form {
  width: 100%;
  max-width: 480px;
  margin: 28px auto 0;
}

.rsvp-form label {
  color: #fffdf6;
}

footer {
  padding: 48px 20px;
  border-top: 1px solid #d5b96d;
  background: #fffaf0;
  text-align: center;
}

footer h2 {
  color: #214533;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 500;
  overflow-wrap: anywhere;
}

footer h2 span {
  color: #b99a53;
  font-style: italic;
}

.floral {
  color: #b99a53;
  font-size: 32px;
}

.footer-caption {
  color: #927439;
  font-size: 10px;
  letter-spacing: 2px;
}

@media (max-width: 600px) {
  .topbar {
    padding: 16px 12px;
    font-size: 11px;
  }

  .topbar-label {
    max-width: 120px;
    font-size: 8px;
    letter-spacing: 1px;
  }

  .admin-toggle {
    top: 8px;
    right: 8px;
    padding: 8px 10px;
    font-size: 11px;
  }

  .timer {
    gap: 6px;
    margin: 24px auto;
  }

  .timer > div {
    padding: 16px 3px;
  }

  .timer span {
    font-size: 8px;
    letter-spacing: 0;
  }

  .family-grid,
  .event-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .admin-panel {
    padding: 22px 16px;
  }
}
