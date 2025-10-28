<template>
  <div class="container">
    <section class="hero" aria-label="Landing hero">
      <!-- Wave background -->
      <div class="hero-wave" aria-hidden="true">
        <img src="../assets/shared/wave.svg" alt="" />
      </div>

      <!-- decorative circles -->
      <div class="circle circle-1" aria-hidden="true"></div>
      <div class="circle circle-2" aria-hidden="true"></div>
      <div class="circle circle-3" aria-hidden="true"></div>

      <div
        style="max-width: 780px; margin: 0 auto; position: relative; z-index: 1"
      >
        <h1
          style="
            font-size: clamp(32px, 5vw, 48px);
            margin: 0 0 16px;
            color: #1e3a8a;
          "
        >
          TicketApp — fast ticket management
        </h1>
        <p style="font-size: 18px; color: #475569; margin: 0 0 24px">
          Create, track, and resolve customer support tickets — simple, fast,
          and secure. A seamless way to manage customer support — efficient,
          responsive, reliable.
        </p>
        <div class="cta">
          <router-link to="/auth/signup" class="btn-primary">
            Get Started
          </router-link>
          <router-link to="/auth/login" class="btn-outline">
            Login
          </router-link>
        </div>
      </div>

      <!-- feature cards -->
      <div class="grid cols-3" style="margin-top: 48px">
        <div class="card">
          <h3>Fast Resolution</h3>
          <p>Quick response and resolution to support tickets</p>
        </div>
        <div class="card">
          <h3>Easy Tracking</h3>
          <p>Monitor ticket status and progress in real-time</p>
        </div>
        <div class="card">
          <h3>Team Support</h3>
          <p>Collaborate efficiently to resolve customer issues</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.15s;
}
.btn-primary:hover {
  opacity: 0.9;
}

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--accent);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid #e2e8f0;
  transition: background 0.15s;
}
.btn-outline:hover {
  background: #f8fafc;
}

.grid {
  display: grid;
  gap: 16px;
  margin-top: 48px;
}
.grid.cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.hero {
  position: relative;
  background: linear-gradient(180deg, #ffffff 0%, #eff6ff 100%);
  padding: 80px 24px 120px;
  border-radius: 16px;
  overflow: hidden;
  margin: 24px 0;
  border: 1px solid rgba(37, 99, 235, 0.1);
}

.hero-wave {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 120px;
  pointer-events: none;
  filter: drop-shadow(0 -4px 8px rgba(37, 99, 235, 0.05));
}

.hero-wave img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: #2563eb;
  opacity: 0.15;
  top: -80px;
  left: -80px;
  border: 2px solid rgba(37, 99, 235, 0.2);
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: #2563eb;
  opacity: 0.1;
  bottom: 15%;
  right: -40px;
  border: 2px solid rgba(37, 99, 235, 0.15);
}

.circle-3 {
  width: 250px;
  height: 250px;
  background: #2563eb;
  opacity: 0.08;
  top: 5%;
  right: 15%;
  filter: blur(40px);
  border: 2px solid rgba(37, 99, 235, 0.1);
}

@media (max-width: 768px) {
  .grid.cols-3 {
    grid-template-columns: 1fr;
  }
  .hero {
    text-align: left;
  }
}
</style>
