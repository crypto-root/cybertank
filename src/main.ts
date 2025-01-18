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
          <div class="hero-images">
            <img 
              src="src/image-2.jpg" 
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
          <a href="https://pancakeswap.finance/" target="_blank" class="cta-button">
            Invest Now
          </a>
        </div>
      </div>
    </div>
  `,
})
export class App {}

bootstrapApplication(App);
