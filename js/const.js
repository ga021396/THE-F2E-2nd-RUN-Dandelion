const cw = 800;
const ch = 450;
const scale = 0.6;
const monsterScale = 0.7;

const useBullLimit = (bull) => {
  if (bull.x > cw || bull.x < 0 || bull.y > ch || bull.y < 0) {
    bull.isShot = false;
    bull.active = false;
    bull.visible = false;
  }
};

const useBullShoting = (bull) => {
  if (bull.isShot) {
    if (bull.shotDir === "UpRight") {
      bull.x += 20;
      bull.y -= 20;
    } else if (bull.shotDir === "Up") {
      bull.y -= 20;
    } else if (bull.shotDir === "UpLeft") {
      bull.x -= 20;
      bull.y -= 20;
    } else if (bull.shotDir === "Left") {
      bull.x -= 20;
    } else if (bull.shotDir === "DownLeft") {
      bull.x -= 20;
      bull.y += 20;
    } else if (bull.shotDir === "Down") {
      bull.y += 20;
    } else if (bull.shotDir === "DownRight") {
      bull.x += 20;
      bull.y += 20;
    } else if (bull.shotDir === "Right") {
      bull.x += 20;
    }
  }
};

const useKeyBoardPress = (cursors, bull, player) => {
  if (cursors.space.isDown) {
    if (!bull.isShot) {
      bull.x = player.x;
      bull.y = player.y;
      bull.shotDir = player.shotDir;

      bull.isShot = true;
      bull.active = true;
      bull.visible = true;
    }
  }

  if (cursors.right.isDown && cursors.up.isDown) {
    player.x += 5;
    player.y -= 5;
    player.angle = 45;
    player.shotDir = "UpRight";
  } else if (cursors.right.isDown && cursors.down.isDown) {
    player.x += 5;
    player.y += 5;
    player.angle = -45;
    player.shotDir = "DownRight";
  } else if (cursors.left.isDown && cursors.up.isDown) {
    player.x -= 5;
    player.y -= 5;
    player.angle = 135;
    player.shotDir = "UpLeft";
  } else if (cursors.left.isDown && cursors.down.isDown) {
    player.x -= 5;
    player.y += 5;
    player.angle = 225;
    player.shotDir = "DownLeft";
  } else if (cursors.right.isDown) {
    player.x += 5;
    player.angle = 0;
    player.shotDir = "Right";
  } else if (cursors.left.isDown) {
    player.x -= 5;
    player.angle = 180;
    player.shotDir = "Left";
  } else if (cursors.up.isDown) {
    player.y -= 5;
    player.angle = 90;
    player.shotDir = "Up";
  } else if (cursors.down.isDown) {
    player.y += 5;
    player.angle = 270;
    player.shotDir = "Down";
  }
};
