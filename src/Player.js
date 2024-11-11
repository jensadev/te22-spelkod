import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 1
    this.maxSpeedY = 5
    this.color = "255, 0, 0"
  }

  update (deltaTime) {
    if (this.game.input.keys.has("ArrowLeft")) {
      console.log("pil vänster")
      this.speedX -= this.maxSpeedX
    }
    if (this.game.input.keys.has("ArrowRight")) {
      this.speedX += this.maxSpeedX
    }
    if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft")) {
      this.speedX = 0
    }
    if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft")) {
      this.speedX = 0
    }

    if (this.game.input.keys.has("ArrowUp")) {
      this.speedY -= this.maxSpeedY
    }

    console.log(this.y)
    if (this.y > 320) {
      this.speedY = 0
    } else {
      this.speedY += 5
    }

    this.y += this.speedY
    this.x += this.speedX
  }

  draw(ctx) {
      ctx.fillStyle = `rgba(${this.color}, 0.8)`
      ctx.fillRect(this.x + this.speedX, this.y, this.width, this.height)
      ctx.fillStyle = `rgba(${this.color}, 1)`
      ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
