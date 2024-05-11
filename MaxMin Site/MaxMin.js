var arr = [];

function addtoarray() {
   arr.push(parseInt(document.getElementById("index").value));
   console.table(arr);
   //alert("Ok! Now Insert a new Number");
}

function calculatemax(arr) {
   var max = arr[0];
   for (var j = 0; j < arr.length; j = j + 1) {
      if (arr[j] > max); {
         max = arr[j];
      }
   }
   document.getElementById("outputmax").value = max;
}

function calculatemin(arr) {
   var min = arr[0];
   for (var j = 0; j < arr.length; j = j + 1) {
      if (arr[j] < min) {
         min = arr[j];
      }
   }
   document.getElementById("outputmin").value = min;
}