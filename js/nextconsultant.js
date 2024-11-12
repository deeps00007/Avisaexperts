 // Get the modal
 const modal = document.getElementById("htmlModal");

 // Get all elements with the .label class
 const labels = document.querySelectorAll(".label");
 
 // Get the <span> element that closes the modal
 const closeBtn = document.querySelector(".close");
 
 // Add click event listener to each label to open the modal
 labels.forEach(label => {
   label.addEventListener("click", function() {
     modal.style.display = "block";
   });
 });
 
 // When the user clicks on <span> (x), close the modal
 closeBtn.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal content, close the modal
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }
 