function alertNameAndCheckedBoxCount(){
    const name = document.querySelector("input");
    const movieCheckBoxes = document.getElementsByClassName("form-check-input");
    let correctCount = 0;
    for(const movieCheckBox of movieCheckBoxes){
        if(movieCheckBox.checked){
            correctCount += 1;
        }
    }
    alert(name.value+"님, 저와 "+correctCount+"개의 취향이 같으시네요");
}
function resetTextBoxAndCheckBoxes (){
    document.querySelector("input").value="";
    const movieCheckBoxes = document.getElementsByClassName("form-check-input");
    for(const movieCheckBox of movieCheckBoxes){
        movieCheckBox.checked=false;
    }
}