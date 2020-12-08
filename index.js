// Rover Object Goes Here
// ======================
  var rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
  };
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}
function moveForward(rover){
  console.log("moveForward was called");
  let coordinate = "" + rover.x + "," + rover.y;
  rover.travelLog.push(coordinate);
  // Added enforced boundaries
  switch(rover.direction){
    case "N":
      rover.y -= 1;
      if(rover.y < 0) {
        rover.y = 0;
      }
      break;
    case "S":
      rover.y += 1;
      if(rover.y > 10) {
        rover.y = 10;
      }
      break;
    case "E":
      rover.x += 1;
      if(rover.x > 10) {
        rover.x = 10;
      }
      break;
    case "W":
      rover.x -= 1;
      if(rover.x < 0) {
        rover.x = 0;
      }
      break;
  }
}
function moveBackwards(rover){
  console.log("Move Backwards was called");
  let coordinate = "" + rover.x + "," + rover.y;
  rover.travelLog.push(coordinate);
  switch(rover.direction){
    case "N":
      rover.y += 1;
      if(rover.y > 10) {
        rover.y = 10;
      }
      break;
    case "S":
      rover.y -= 1;
      if(rover.y < 0) {
        rover.y = 0;
      }
      break;
    case "E":
      rover.x -= 1;
      if(rover.x < 0) {
        rover.x = 0;
      }
      break;
    case "W":
      rover.x += 1;
      if(rover.x > 10) {
        rover.x = 10;
      }
      break;
  }
}

function move(rover, commands){
   let temp = commands;
   for(let i = 0; i < temp.length; i++){
     letter = temp.charAt(i);
      if("frlb".includes(letter)) {
       switch (letter) {
         case "f":
           moveForward(rover);
           break;
         case "r":
           turnRight(rover);
           break;
         case "l":
           turnLeft(rover);
           break;
         case "b":
           moveBackwards(rover);
           break;
       }
     }
   }