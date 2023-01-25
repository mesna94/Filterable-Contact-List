// Get input Element
let filterInput = document.getElementById('filterInput');
// add Event Listener
filterInput.addEventListener('keyup',filterNames);

function filterNames() {
     //console.log(1);
  // Get value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  //console.log(filterValue);
  //Get names ul
  let ul = document.getElementById('names');
  // Get li's from ul
  let li = ul.querySelectorAll('li.collection-item');
  //loop through collection-item li's
  for(let i=0;i<li.length;i++){

    let a = li[i].getElementsByTagName('a')[0];
     
    //if matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
         li[i].style.display = ""; 
    }else {
        li[i].style.display = "none"; // to disappear
    }
  }
}
