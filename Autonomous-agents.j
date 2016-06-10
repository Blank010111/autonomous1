var space;
class Vehicle2{
Pvector location;
PVector velocity;
PVector acceleration;
float maxspeed;
float maxforce;
float r;

Vehicle(x,y){
acceleration=new PVector(0,0);
velocity= new PVector(0,0);
location= new PVector(x,y)
maxspeed=2.0
r=2;
maxforce=0.1;
}
};
void update{
acceleration.mult(0);
velocity.add(acceleration);
velocity.limit(maxspeed);
location.add(velocity);
};

void seek(PVector target){
PVector desired = PVector.sub(space-target,space-location);
desired.normalize();
desired.mult(maxspeed);
PVector target = PVector.sub(desired,velocity);
applyForce(steer);
};
void display{
float theta=velocity.heading()+PI/2;
fill(170);
stroke(0);
pushMatrix();
rotate(theta);
beginShape(){
vertex(0,r*2);
vertex(r,-r*2);
vertex(r,r*2);
endShape(CLOSE);
popMatrix();
};

