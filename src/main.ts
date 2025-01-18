import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="title">$CYBERTANK</h1>
          <div style="justify-content: center; grid-template-columns: 40% !important" class="hero-images">
            <img 
              style="border: 5px solid orange;
              border-radius: 10%;
              box-shadow: 0 0 20px orange;
              animation: glow 1.5s infinite alternate;
              display: block;
              margin-left: auto;
              margin-right: auto;"
              src="https://pbs.twimg.com/profile_images/1880646812836478976/tdbOaeTb_400x400.jpg" 
              alt="Cybertank" 
              class="hero-image"
            >
          </div>
          <div class="features">
            <div class="feature">
              <h3 class="feature-title">Mars-Ready Design</h3>
              <p>Built for the harshest terrains</p>
            </div>
            <div class="feature">
              <h3 class="feature-title">Military Grade</h3>
              <p>Advanced combat capabilities</p>
            </div>
            <div class="feature">
              <h3 class="feature-title">Future Tech</h3>
              <p>Next-gen autonomous systems</p>
            </div>
          </div>
          <p class="subtitle">
            Join the revolution! When $CYBERTANK reaches critical mass, we'll make Elon Musk create this 
            revolutionary Mars-ready combat vehicle. Be part of the next evolution in military-grade 
            automotive technology.
          </p>
          <a href="https://pump.fun/coin/Ch8xtC6uBTzU9Ewg3KpoEktVQ4KDWGuY1j4TLpEZpump" target="_blank" class="cta-button">
            Invest Now
          </a>
        </div>
      </div>
    </div>
  `,
})
export class App {}

bootstrapApplication(App);
