var myRover = {
  position: [5,5], 
  direction: 'S'
};


function f(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      direction: 'N'
      break;
    case 'E':
      rover.position[0]++
      direction: 'E'
      break;
    case 'S':
      rover.position[1]--
      direction: 'S'
      break;
    case 'W':
      rover.position[0]--
      direction: 'W'
      break;
  };


  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + ", " + rover.direction +  "]")
}

function b(rover){
  switch(rover.direction){ 
  case 'N':
    rover.position[1]--
    direction: 'N'
    break;
  case 'E':
    rover.position[0]--
    direction: 'E'
    break;
  case 'S':
    rover.position[1]++
    direction: 'S'
    break;
  case 'W':
  rover.position[0]++
    direction: 'W'
    break;
};

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + ", " + rover.direction +  "]")
}

function l(rover){
  switch(rover.direction){ 
  case 'N':
    rover.direction = 'W'
    break;
  case 'E':
    rover.direction = 'N'
    break;
  case 'S':
    rover.direction = 'E'
    break;
  case 'W':
    rover.direction = 'S'
    break;
};

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + ", " + rover.direction +  "]")
}

function r(rover){
  switch(rover.direction){ 
  case 'N':
      rover.direction = 'E'
    break;
  case 'E':
    rover.direction = 'S'
    break;
  case 'S':
    rover.direction = 'W'
    break;
  case 'W':
    rover.direction = 'N'
    break;
};

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + ", " + rover.direction +  "]")
}

f(myRover);
b(myRover);

