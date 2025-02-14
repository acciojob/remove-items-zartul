//your JS code here. If required.
// const selectElem = document.getElementById("colorSelect");
// const pElem = document.getElementById("p");

// selectElem.addEventListener("change", () => {
//   const index = selectElem.selectedIndex;
//   pElem.textContent = `selectedIndex: ${index}`;
// });
function removeColor() {
    const selectElem = document.getElementById("colorSelect");
    selectElem.remove(selectElem.selectedIndex); // Remove the selected option
}