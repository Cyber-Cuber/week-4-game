
var totalGoalValue = 0;

var crystal = {
	ruby: {
		name: "ruby"
		value: 0
		}

var crystal = {
	emerald: {
		name: "emerald"
		value: 0
		}

var crystal = {
	citrine: {
		name: "citrine"
		value: 0
		}	

var crystal = {
	diamond: {
		name: "diamond"
		value: 0
		}

	}

var runningTotal = 0;
var goalTotal = 0; 

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

	//	$(".number").on("click", function() {

        
    ///    if (isCalculated) return;
var startGame = function()  {
	runningTotal = 0;

	goalTotal = getRandom(19,120);

	crystal.ruby.value = getRandom (1,12);

	crystal.emerald.value = getRandom (1,12);

	crystal.citrine.value = getRandom (1,12);

	crystal.diamond.value = getRandom (1,12);

	$("#goalTotal").text(goalTotal);
	$("#runningTotal").text()

}