
/* JavaScript codes of quiz.html file */

/* Question 01... */
// Attach event listeners to buttons
document.getElementById('backBtn').addEventListener('click', goBack);
document.getElementById('nextBtn').addEventListener('click', showQuestion2);
document.getElementById('nextBtn2').addEventListener('click', showQuestion2);

// Function to show question2 and hide question1
function showQuestion2() {
    // Check if all fields in question1 are filled
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;

    if (!name || !age || !height) {
        alert('Please fill in all fields.');
        return;
    }

    // Hide question1
    document.getElementById('question1').style.display = 'none';

    // Show question2
    document.getElementById('question2').style.display = 'block';
}

// Function to handle back button
function goBack() {
    // Redirect to /Home/home.html
    window.location.href = '/Home/home.html';
}



/* Question 02... */

/* selection for question2 */
function toggleOval(element) {
    element.classList.toggle("selected");
}

function goToQuestion(questionNumber) {
    // Hide current question
    document.getElementById("question2").style.display = "none";
    // Show the specified question
    document.getElementById("question" + questionNumber).style.display = "block";
}

function validateAndGoToNextQuestion() {
    var selectedOvals = document.getElementsByClassName("oval selected");
    if (selectedOvals.length === 0) {
        alert("Please select at least one option.");
    } else {
        // Hide current question
        document.getElementById("question2").style.display = "none";
        // Show the next question
        document.getElementById("question" + 3).style.display = "block";
    }
}


/* Question 03... */

// Function to show Question 3 and hide Question 2
function showQuestion3() {
    // Hide Question 2
    document.getElementById("question2").style.display = "none";

    // Show Question 3
    document.getElementById("question3").style.display = "block";
}

// Function to handle the back button in Question 3
function goBackToQuestion2() {
    // Hide Question 3
    document.getElementById("question3").style.display = "none";

    // Show Question 2
    document.getElementById("question2").style.display = "block";
}

// Function to validate and proceed to Question 4
function validateAndGoToQuestion4() {
    // Check if all fields in Question 3 are filled
    var bust = document.getElementById("bust").value;
    var waist = document.getElementById("waist").value;
    var hip = document.getElementById("hip").value;

    if (!bust || !waist || !hip) {
        alert("Please fill in all details.");
        return;
    }

    // Hide Question 3
    document.getElementById("question3").style.display = "none";

    // Show Question 4
    document.getElementById("question4").style.display = "block";
}

// Attach event listeners to buttons
document.getElementById("nextBtn2").addEventListener("click", function () {
    validateAndGoToNextQuestion();
});
document.getElementById("backBtn3").addEventListener("click", function () {
    goBackToQuestion2();
});
document.getElementById("nextBtn3").addEventListener("click", function () {
    validateAndGoToQuestion4();
});


/* Question 04... */

// Function to handle the back button in Question 4
function goBackToQuestion3() {
    // Hide Question 4
    document.getElementById("question4").style.display = "none";

    // Show Question 3
    document.getElementById("question3").style.display = "block";
}

// Function to validate Question 4 and go to Question 5
function validateAndGoToQuestion5() {
    // Check if all fields are filled
    var dressValue = document.getElementById("dress").value;
    var tshirtValue = document.getElementById("tshirt").value;
    var pantsValue = document.getElementById("pants").value;

    if (dressValue === "" || tshirtValue === "" || pantsValue === "") {
        alert("Please fill in all fields.");
    } else {
        // Go to Question 5
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "block";
    }
}


/* Question 05... */

// Function to handle the back button in Question 5
function goBackToQuestion4() {
    // Hide Question 5
    document.getElementById("question5").style.display = "none";

    // Show Question 4
    document.getElementById("question4").style.display = "block";
}

// Function to validate Question 5 and go to Question 6
function validateAndGoToQuestion6() {
    // Check if a color is selected
    var colorValue = document.getElementById("color").value;

    if (colorValue === "") {
        alert("Please choose a color.");
    } else {
        // Go to Question 6
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "block";
    }
}


/* Question 06... */

// Function to handle the back button in Question 6
function goBackToQuestion5() {
    // Hide Question 6
    document.getElementById("question6").style.display = "none";

    // Show Question 5
    document.getElementById("question5").style.display = "block";
}

// Function to validate Question 6 and go to Question 7
function validateAndGoToQuestion7() {
    // Check if skin tone is selected
    var skinValue = document.getElementById("skin").value;
    var skinImage = document.getElementById("skin-image").value;

    if (skinValue === "" || skinImage === "") {
        alert("Please fill in all fields.");
    } else {
        // Go to Question 7
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "block";
    }
}


/* Question 07... */

// Function to handle the back button in Question 7
function goBackToQuestion6() {
    // Hide Question 7
    document.getElementById("question7").style.display = "none";

    // Show Question 6
    document.getElementById("question6").style.display = "block";
}

// Function to validate Question 7 and go to Question 8
function validateAndGoToQuestion9() {
    // Check if occasion is selected
    var occasionValue = document.getElementById("occasion").value;

    if (occasionValue === "") {
        alert("Please choose an occasion.");
    } else {
        // Go to Question 9
        document.getElementById("question7").style.display = "none";
        document.getElementById("question9").style.display = "block";
    }
}


/* Question 08... */

// Function to handle the back button in Question 8
/*function goBackToQuestion7() {
    // Hide Question 8
    document.getElementById("question8").style.display = "none";
    
    // Show Question 7
    document.getElementById("question7").style.display = "block";
}

// Function to validate Question 8 and go to Question 9
function validateAndGoToQuestion9() {
    // Check if style is selected
    var styleValue = document.getElementById("style").value;

    if (styleValue === "") {
        alert("Please choose a clothing style.");
    } else {
        // Go to Question 9
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "block";
    }
} */

/* Question 09... */

// Function to handle the back button in Question 9
function goBackToQuestion7() {
    // Hide Question 9
    document.getElementById("question9").style.display = "none";
    // Show Question 7
    document.getElementById("question7").style.display = "block";
}

// Function to validate Question 9 and go to Question 10
function validateAndGoToQuestion10() {
    // Check if fabric is selected
    var fabricType = document.getElementById("fabric").value;
    if (fabricType === "") {
        alert("Please choose a fabric type");
    } else {
        // Go to Question 10
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "block";
    }
}


/* Question 10... */

// Function to handle the back button in Question 10
function goBackToQuestion9() {
    // Hide Question 10
    document.getElementById("question10").style.display = "none";
    // Show Question 9
    document.getElementById("question9").style.display = "block";
}

//Function to handle next button
function goToQuestion11() {
    // Go to Question 11
    document.getElementById("question10").style.display = "none";
    document.getElementById("question11").style.display = "block";
}



/* Question 11... */

function goBackToQuestion10() {
    // Hide Question 11
    document.getElementById("question11").style.display = "none";
    // Show Question 10
    document.getElementById("question10").style.display = "block";
}

// Function to validate Question 12 and go to the next part
function validateAndGoToQuestion12() {
    // Check if type is selected
    var clothingType = document.getElementById("type").value;
    if (clothingType === "") {
        alert("Please choose a clothing type");
    } else if (clothingType === "26") {
        // User selects Sports Wear, go to Question 12
        document.getElementById("question11").style.display = "none";
        document.getElementById("question12").style.display = "block";
    } else {
        // User selected other options, go to loading
        document.getElementById("question11").style.display = "none";
        document.getElementById("loading").style.display = "block";
        startLoadingAnimation();
    }
}



/* Question 12... */

// Function to handle the back button in Question 12
function goBackToQuestion11() {
    // Hide Question 12
    document.getElementById("question12").style.display = "none";
    // Show Question 11
    document.getElementById("question11").style.display = "block";
}

// Function to validate Question 12 and go to loading
function validateAndGoToLoading() {
    // Check if type is selected
    var selectedType = document.getElementById("type").value;
    if (selectedType === "" || selectedType === null || selectedType === undefined) {
      alert("Please choose a sports wear");
    } else {
      // Go to loading
      document.getElementById("question12").style.display = "none";
      document.getElementById("loading").style.display = "block";
      startLoadingAnimation();
    }
  }
  
  
  

// Loading...

function startLoadingAnimation() {
    var loadingText = document.querySelector(".loading-text");
    var loadingSection = document.getElementById("loading");
    var nextButton = document.getElementById("nextBtn12");

    var progress = 0;

    function updateLoadingText() {
        loadingText.innerText = progress + "%";
        if (progress === 10) {
            clearInterval(interval);
            // Show the "next" button and disable loading
            nextButton.style.display = "block";
            nextButton.disabled = false;
            // loadingSection.style.display = "none";
        } else {
            progress++;
        }
    }

    updateLoadingText();
    var interval = setInterval(updateLoadingText, 4000);

    // Hide the "next" button and disable it initially
    nextButton.style.display = "none";
    nextButton.disabled = true;
    // Show the loading section
    loadingSection.style.display = "block";
}