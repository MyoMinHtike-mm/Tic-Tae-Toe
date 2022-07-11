`Use strick`

// firstStep
// Select Element from the starting_page
//

let section_one = document.getElementById('starting_page');
let section_one_btns = document.querySelectorAll('.btns');
let main = document.getElementById('main');
let slider = document.getElementById('slide');
let boxes = document.querySelectorAll('.box');
let win_stitution = document.getElementById('win_stitution');
let winner_player = document.getElementById('winner_player');

let playAgain_btn = document.getElementById('playAgain_btn');
let playAgain_btn_button = document.getElementById('playAgain_btn_button');

// let win = document.getElementById('win_stitution');

let winmode = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let winwin = () => {
  for (let i = 0; i <=7 ; i++) {
    let a = winmode[i];
    if (boxes[a[0]].id == "" || boxes[a[1]].id == "" || boxes[a[2]].id == "") {
          continue;
    }else if (boxes[a[0]].id == "x" && boxes[a[1]].id == "x" && boxes[a[2]].id == "x") {
      main.style.display = "none";
      win_stitution.style.display = "block";
      playAgain_btn.addEventListener('click', () => {
        section_one.style.display = "block";
        win_stitution.style.display = "none";
        boxes.innerHTML = "";
        // boxes.forEach(box => {
        //   box.innerHTML = " ";
        // });
      })
    }else if (boxes[a[0]].id == "y" && boxes[a[1]].id == "y" && boxes[a[2]].id == "y") {
      main.style.display = "none";
      win_stitution.style.display = "block";
      winner_player.innerHTML = "Player'Y win the game";
      playAgain_btn.addEventListener('click', () => {
        win_stitution.style.display = "none";
      })
    }
    break;
  }

};

let turn = null;

section_one_btns.forEach((items) => {
  items.addEventListener('click', () => {
    if (items.id === 'playerX') {
            turn = false;
            slider.style.left = `0px`;
            section_one.style.display = 'none';
            main.style.display = `block`;
    }else {
      turn = true;
      slider.style.left = `50%`;
      section_one.style.display = 'none';
      main.style.display = `block`;
    };
  })
});

boxes.forEach((item) => {
  item.innerHTML = " ";
  item.addEventListener('click', () => {
        if (turn == false) {
            item.id = "x";
            item.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
            slider.style.left = `50%`;
            turn = true;
        }else {
            slider.style.left = `0px`;
            item.id = "y";
            item.innerHTML = `<i class="fa fa-circle-thin" aria-hidden="true"></i>`;
            turn = false;
        }
            winwin();
            
  });
});


playAgain_btn_button.addEventListener('click', () => {
  section_one.style.display = "block";
  boxes.forEach(element => {
    element.innerHTML = "";
  });
});




// if (turn === false) {
//   boxes.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
// }else {
//   boxes.innerHTML = `<i class="fa fa-circle-thin" aria-hidden="true"></i>`;
// }
