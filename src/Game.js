import GameObject from "./GameObject" 

export default class Game { // skapar klassen
  constructor(width, height) { // klassens constructor
    this.width = width
    this.height = height
    console.log("Ny instans av game ", this.width)
    this.box = new GameObject(40, 100, 200, 200, "purple")
  }

  update(deltaTime) {
    this.box.update(deltaTime)
  }

  draw(ctx) {
    this.box.draw(ctx)
  }
 }