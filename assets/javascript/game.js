
var goalTotal = 0;

var ruby = {
	
		name: "ruby",
		value: 0
		}

var emerald = {
	
		name: "emerald",
		value: 0
		}

var citrine = {
	
		name: "citrine",
		value: 0
		}	

var diamond = {
	
		name: "diamond",
		value: 0
		}

	

var runningTotal;
var goalTotal; 

//  EmeraldValue = #Emerald [Math.floor(Math.random() * 10)]

//  var CitrineValue = #Citrine [Math.floor(Math.random() * 10)]

//  var DiamondValue = #Diamond [Math.floor(Math.random() * 10)]

	var getRandom = function (min,max) {
		return Math.floor(Math.random() * (max - min + 1))
		}

//	console.log("getRandom() " + getRandom(19,120));
//		 <script>
//        $("#Ruby").on("click", function() {
//            console.log(`clicked`)
//        })		

	

        
    
	var startGame = function()  {
	
		runningTotal = 0;

		goalTotal = getRandom(19,120);

		ruby = getRandom (1,12);

		emerald = getRandom (1,12);

		citrine = getRandom (1,12);

		diamond = getRandom (1,12);

	
	$("#goalTotal").text(goalTotal);
	$("#runningTotal").text(runningTotal);
	}


	$("#button-Emerald").on("click", function() {

//            console.log(`clicked`)
//        })        
		button-Emerald.attr("data-emeraldValue");

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  		
  // This time, our click event applies to every single crystal on the page. Not just one.
 // 		$(".crystals").on("click", function() {

    var emeraldValue = ($(this).attr("data-emeraldValue"));
    emeraldValue = parseInt(emeraldValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    runningTotal += emeraldValue;
	})


	$("#button-Citrine").on("click", function() {

//            console.log(`clicked`)
//        })        
		button-Citrine.attr("data-citrineValue");

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  		
  // This time, our click event applies to every single crystal on the page. Not just one.
 // 		$(".crystals").on("click", function() {
    
    var citrineValue = ($(this).attr("data-citrineValue"));
    citrineValue = parseInt(citrineValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    runningTotal += citrineValue;
	})


	$("#button-Diamond").on("click", function() {

//            console.log(`clicked`)
//        })        
		button-Diamond.attr("data-diamondValue");
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  		
  // This time, our click event applies to every single crystal on the page. Not just one.
 // 		$(".crystals").on("click", function() {
    
    var diamondValue = ($(this).attr("data-diamondValue"));
    diamondValue = parseInt(diamondValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    runningTotal += diamondValue;
	})

	if (runningTotal === goalTotal) {
      alert("You win!");
      wins ++;
    }

    else if (runningTotal >= goalTotal) {
      alert("You lose!!");
      losses ++;
    }
