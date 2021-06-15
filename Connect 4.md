# Connect 4



Input names

Player 1 starts

* Player setup
  * Line three changes to instructions and the player's name
  * A handler is added to each column to detect a click
  * Clicked = true is set
* Player clicks a column  
  * Variable is set with clicked column # clickedcol  
  * Column is assessed to find the uppermost uncolored dot  
  * The found dot changes to the players color  
  * Click handlers are removed  
  * Clicked = false is set  
* Player change

---

function to set player color

## global variables

Input names

``` javascript
var clicked = false
var colClicked = false
var player1 = prompt("Blue Player\nEnter your name:");
var player2 = prompt("Red Player\nEnter your name:");

```

Game starts with player 1

## Player setup

Line three changes to instructions and the player's name

``` javascript
function setStatus(player){
    
    $('#status').text(player +" it's your turn. Pick a column to drop your chip.");
}
```

A handler is added to each column to detect a click

``` javascript
for(i = 1; i<8; i++){
    $(".col"+i).click(whenClicked(i))
}
```

## Player clicks a column

Variable is set with clicked column

``` javascript
function whenClicked (column){
    clicked = true
    colClicked = column
    for(i = 1; i<8; i++){
        if ($(".row"+i+".col"+column)[0].className).includes('toggle')){
            continue
        }
        else{
            $(".row"+i+".col"+column).addClass("toggle"+playerColor)
        }

}

```

## to add somewhere

``` javascript
while(colClicked = false){
    continue;
}

```

	 # clickedcol
	Column is assessed to find the uppermost uncolored dot
	The found dot changes to the players color
	Click handlers are removed
	Clicked = false is set
Player change
Clicked = true is set