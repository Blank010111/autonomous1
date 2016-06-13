class Flock {
  ArrayList< Bots > bots; // An ArrayList for all the boids

  Flock() {
    boids = new ArrayList< Bots >(); // Initialize the ArrayList
  }

  void run() {
    for (Bots b : bots) {
      b.run(bots);  // Passing the entire list of boids to each boid individually
    }
  }

  void addBoid(Bot b) {
    bots.add(b);
  }

}
