// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


var cur_color = document.getElementById('colorPicker');
const sub_grid = document.getElementById('sub_1');
const CANVAS = document.getElementById("pixelCanvas");

function makeGrid() {
  
  if(CANVAS.firstChild){
    CANVAS.removeChild(CANVAS.firstChild);
  }

  const T_BOD = document.createElement("tbody");
  const ROWS = document.getElementById("inputHeight").value;
  const COLS = document.getElementById("inputWidth").value;

  for (let i = 1; i <= ROWS; i++) {
    const T_ROW = document.createElement("tr");

    for (let j = 1; j <= COLS; j++) {
      const T_COL = document.createElement("td");
      T_ROW.appendChild(T_COL);
    }
    T_BOD.appendChild(T_ROW );
  }
  CANVAS.appendChild(T_BOD);

}

sub_grid.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log('sub clicked!');

  makeGrid();

});

CANVAS.addEventListener('click', function(evt){
  if(evt.target.nodeName == "TD"){
    evt.target.style.cssText = `background: ${cur_color.value}`;
  }
});