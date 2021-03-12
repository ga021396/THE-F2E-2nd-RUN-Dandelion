const scene = {
  key: "gameStart",
  preload: function () {
    this.load.image("bg4", "images/bg/bg4.png");
    this.load.image("rock1", "images/item-level-1-rock.png");
    this.load.spritesheet("user", "images/player.png", {
      frameWidth: 144,
      frameHeight: 120,
    });
  },

  create: function () {
    this.bg4 = this.add.tileSprite(400, 225, cw, ch, "bg4");
    this.rock = this.physics.add.sprite(400, 200, "rock1");
    this.player = this.physics.add.sprite(400, 300, "user");

    this.player.setScale(0.5); //設定顯示大小

    const hittest = (player, rock) => {
      this.rock.destroy();
    };

    this.physics.add.collider(this.player, this.rock, hittest);
  },
  update: function () {
    const rockX = this.rock.x;
    const rockY = this.rock.y;
    const playerX = this.player.x;
    const playerY = this.player.y;

    const rotation = Phaser.Math.Angle.Between(rockX, rockY, playerX, playerY);
    this.rock.setRotation(rotation);

    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.right.isDown && cursors.up.isDown) {
      this.player.x += 5;
      this.player.y -= 5;
    } else if (cursors.right.isDown && cursors.down.isDown) {
      this.player.x += 5;
      this.player.y += 5;
    } else if (cursors.left.isDown && cursors.up.isDown) {
      this.player.x -= 5;
      this.player.y -= 5;
    } else if (cursors.left.isDown && cursors.down.isDown) {
      this.player.x -= 5;
      this.player.y += 5;
    } else if (cursors.right.isDown) {
      this.player.x += 5;
    } else if (cursors.left.isDown) {
      this.player.x -= 5;
    } else if (cursors.up.isDown) {
      this.player.y -= 5;
    } else if (cursors.down.isDown) {
      this.player.y += 5;
    }
  },
};
