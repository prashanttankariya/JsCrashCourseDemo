
	var name = 'Prashant';
	console.log(name);

	var age = 22;

	// this is an example of coercion - 
	//means it changes automatically datatypes to string or number
	console.log(name+age);

	// same for numbers
	console.log(age+age);


	// Operator and precendence of 

	/*
		Priority
		---------

		first 	: / 
		second 	: *
		third	: +
		fourth	: -
	
	
	*/

	var ageOne = 25;
	var ageTwo = 30;

	ageOne = (3 + 5) * 4 - 6;
		

	// ad one 
	ageOne++

	console.log(ageOne);


	//////////////////////////

	// Function

	function calculateAge(yearOfBirth){

			var age = 2018 - yearOfBirth;
			return age;

	}

	// Print out

	var ageP = calculateAge(1996);
	console.log(ageP);


	// years until retirement

	function yearsUntilRetirement(name,year){

			var age = calculateAge(year);
			var retirement = 65 - age;

			if(retirement >= 0 ){

				console.log(name + " retires in " +retirement + " years.");	
			}
			else{
				console.log(name + " is already retires.");	
			}
			
	}

	var output = yearsUntilRetirement("Poorav",1996);



	 // Js Objects and Methods and Properties

	 var prashant = {
	 		age 		: '28',
	 		name 		: 'Prashant',
	 		lastName	: 'Tankariya',
	 		yearOfBirth	: 1996,
	 		job			: 'Tutor',
	 		isMarried	: false,
	 		friends		:['Kishan','Mohit','Chirag'],
	 		calculateAge: function(yearOfBirth){

	 				// return 2018 - yearOfBirth;
	 				this.age = 2018 - yearOfBirth;
	 		}
	 }

	 console.log(prashant.friends);

	 // age Define
	 console.log(prashant.calculateAge(1996));
	 console.log(prashant.age);
	 // some function also can be said as Methods



	 /// JS loops and Iterations

	 // set an array
	 //var names = ['Prashant','Kishan','Hem','Chirag','Mohit'];
	 var names = new Array('Prashant','Kishan','Hem','Chirag','Mohit');
	 
// For loops
	 for(var i =names.length - 1;i >= 0;i-- ){

	 			console.log(names[i]);
	 			//document.write(names[i]+"<br />");
	 }

// While Loops

	var i = 0;
	while ( i < names.length){

			console.log(names[i]);
			i++;
	}

	console.log("-----------------");
	// Break in For

	for ( i = 0; i < names.length ; i++){

				console.log(names[i]);
				if(i === 2){

						break;
				}
	}

	for ( i = 0; i < names.length ; i++){

				
				if(i === 2){

						continue;
				}
				console.log(names[i]);
	}



	///////////////////////////////////////////

	//Coding Challenge 2

	console.log("Coding Challenge 2 ----------------------------------");
	console.log("----------------------------------");
	var peopleNames = ['Amit','Vijay','Nirmal','Akshay','Viral'];

	var peopleAge	= [25,78,12,5,21];

	// Full age 
	var fullAge1 = false;
		


	for (i = 0; i < peopleNames.length; i++){

				//console.log(peopleNames[i]+"Age :"+peopleAge[i]);


					if(peopleAge[i] >= 18){
							fullAge1 = true;
					}
					else{
							fullAge1 = false;	
					}

			console.log(peopleNames[i]+" ,Age :"+peopleAge[i] + " ,Is Full Age ?"+fullAge1);
	}