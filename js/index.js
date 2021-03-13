const config = {
  type: Phaser.AUTO,
  width: cw,
  height: ch,
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [scene],
};

const game = new Phaser.Game(config);
