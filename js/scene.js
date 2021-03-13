const scene = {
  key: "gameStart",
  preload: function () {
    this.load.image("bg4", "images/bg/bg4.png");
    this.load.image("rock1", "images/item-level-1-rock.png");
    this.load.image("rock2", "images/item-level-2-smoke-sm.png");
    this.load.spritesheet("user", "images/player.png", {
      frameWidth: 144,
      frameHeight: 120,
    });
  },

  create: function () {
    this.bg4 = this.add.tileSprite(400, 225, cw, ch, "bg4");
    this.rock = this.physics.add.sprite(100, 200, "rock1");
    this.player = this.physics.add.sprite(600, 300, "user");
    this.bull = this.physics.add.sprite(0, 0, "rock2");

    this.player.setCollideWorldBounds(true); //角色邊界限制

    this.bull.active = false;
    this.bull.visible = false;
    this.bull.isShot = false;
    this.bull.setScale(0.1); //設定顯示大小
    this.player.setScale(0.5); //設定顯示大小

    const hittest = (player, rock) => {
      this.rock.destroy();
      this.bull.active = false;
      this.bull.visible = false;
    };

    this.physics.add.collider(this.player, this.rock, hittest);
    this.physics.add.collider(this.bull, this.rock, hittest);
  },
  update: function () {
    // const rockX = this.rock.x;
    // const rockY = this.rock.y;
    // const playerX = this.player.x;
    // const playerY = this.player.y;
    // const rotation = Phaser.Math.Angle.Between(rockX, rockY, playerX, playerY);
    // this.rock.setRotation(rotation);

    //  move zob
    const rockX = this.rock.x;
    const rockY = this.rock.y;
    const playerX = this.player.x;
    const playerY = this.player.y;

    this.rock.diffX = rockX - playerX;
    this.rock.diffY = rockY - playerY;

    console.log(this.rock.diffX);

    if (rockX > playerX) {
      this.rock.x -= Math.abs(this.rock.diffX / 50);
    } else if (rockX < playerX) {
      this.rock.x += Math.abs(this.rock.diffX / 50);
    }

    if (rockY > playerY) {
      this.rock.y -= Math.abs(this.rock.diffY / 50);
    } else if (rockY < playerY) {
      this.rock.y += Math.abs(this.rock.diffY / 50);
    }

    useBullLimit(this.bull);
    useBullShoting(this.bull);

    let cursors = this.input.keyboard.createCursorKeys();

    useKeyBoardPress(cursors, this.bull, this.player);
  },
};
