const config = {
  type: Phaser.AUTO,
  width: cw,
  height: ch,
  parent: "app",
  physics: {
    default: "arcade",
  },
  scene: [scene],
};

const game = new Phaser.Game(config);
