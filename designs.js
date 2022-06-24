// Select color input
// Select size 


// When size is submitted by the user, call makeGrid()

  
  
  // Your code goes here!
  let color = document.getElementById("colorPicker");
  let table = document.getElementById("pixelCanvas");
  let sizePicker = document.getElementById("sizePicker");
  
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  
  

  // Select color input
  // Select size 
  
  
  // When size is submitted by the user, call makeGrid()
  
  
  function makeGrid(height, width) {
    table.innerHTML = '';

    for (let i = 0; i < height; i++) {
      let row = table.insertRow(i);
      for (let r = 0; r < width; r++) {
        let cell = row.insertCell(r);
        cell.addEventListener("click", (o) => {
          cell.style.backgroundColor = color.value;
        })
      }
    }
  }
  
  
  
  
  sizePicker.addEventListener("submit", (o) => {
  
    o.preventDefault();
  
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
  }
  )
  