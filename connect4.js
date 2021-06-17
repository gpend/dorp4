var player1 = prompt("Blue Player\nEnter your name:");
var player2 = prompt("Red Player\nEnter your name:");
var playerID = "player2"
var toggleColor = "toggleRed"

function restart() {
    $('td').removeClass('toggleRed toggleBlue')
}

function changePlayer(){
    
    //change playerID var
    // change dot color
    if (playerID === "player1"){
        playerID = "player2"
        player = player2
        toggleColor = "toggleRed"
    }
    else if (playerID === "player2"){
        playerID = "player1"
        player = player1
        toggleColor = "toggleBlue"
    }
    $('#status').text(player +" it's your turn. Pick a column to drop your chip.");
}
// solution checking assumptions
    // the dot will be at the top of a column
// TODO: check win vertical
// check the 5 dots around the one clicked
// TODO: check win horizontal
// TODO: check win diagonal

// returns the color of the td as either red, blue, or none
function returnColor(row, col) {
    if (($('.row'+row+'> td[col='+col+']')[0].classList).length == 1){
        return "none"
    }
    else if ($('.row'+row+'> td[col='+col+']')[0].classList[1] == "toggleRed"){
        return "red"
    }
    else if ($('.row'+row+'> td[col='+col+']')[0].classList[1] == "toggleBlue"){
        return "blue"
    }
}



function checkWin(){

    //check horizontal win
    for (let y = 7; y > 3; y--){
        

        for (let z = 7; z > 0; z--){
            dot1 = (returnColor(y, z))
            dot2 = (returnColor(y-1, z))
            dot3 = (returnColor(y-2, z))
            dot4 = (returnColor(y-3, z))
            if((dot1 == dot2 && dot1 != 'none') && (dot1 == dot3) && (dot1 == dot4)){
                console.log(player+" wins")
            }
        }
    }

    // check for a vertical win
    for (let y = 7; y > 0; y--){
        

        for (let z = 7; z > 3; z--){
            dot1 = (returnColor(y, z))
            dot2 = (returnColor(y, z-1))
            dot3 = (returnColor(y, z-2))
            dot4 = (returnColor(y, z-3))
            if((dot1 == dot2 && dot1 != 'none') && (dot1 == dot3) && (dot1 == dot4)){
                console.log(player+" wins")
            }
        }
    }
}





// setup click handlers
$(".dot").click(function(){
    whenClicked(($(this).attr("col")))
})

// for testing
//$(".dot").click(function(){console.log(($(this).attr("col")))})


// for testing
// for(i = 1; i<8; i++){
//     $(".col"+i).click(function(){console.log("col " + i + " clicked")})
// }

//  query format: $(".row1 > td[col=7]")
function whenClicked (column){
    // check all cells in a column
    for(i = 7; i>0; i--){
        if (($(".row"+i+"> td[col="+column+"]")[0].className).includes('toggle')){
            continue
        }
        else{
            $(".row"+i+"> td[col="+column+"]").addClass(toggleColor)
            break
        }
    }
    checkWin()
    changePlayer()
}

    
changePlayer()



// how to get a list of all classes: $('.row1 > td[col=1]')[0].classList[1]
