const student ={
    name: "luwi kiki",
    id: "STU001",
    programme: "Frontend development"
}

const courses =[{
    name: "HTML",
    score: 85 
},
{
    name: "CSS",
    score: 72
}, 
{
    name: "JavaScript",
    score: 45
}];
//there are three important part, which are:
// function declares a function ,  
// checkResultis the function's name, 
// score is a parameter.
//a parameter is a named variable that recevies a value when a function is called.

function checkResult(score) {
    if (score>=50){
        return "PASS";
    } else {
        return "FAIL";
    }
    
}

function calculateAverage(courses){
    let total = 0;

    for (let i=0; i<courses.length; i++){
        total = total +courses[i].score;
        

    }
    return total/courses.length;
}

//Display student info

document.getElementById("student-name").textContent = student.name;
document.getElementById("student-id").textContent = student.id;
document.getElementById("student-programme").textContent = student.programme;

/*<section class="results-section">
    <h2>Course Results</h2>
    <div id="course-container" class="course-grid">
        <!--JS will add the course here-->
    </div>
</section>  */

//Display courses
const courseContainer =
document.getElementById("course-container");

 for (let i=0; i<courses.length; i++){
    const course =courses[i];
    const result =  checkResult(course.score);
    const courseCard =document.createElement("div");
    courseCard.classList.add("course-card");

    courseCard.innerHTML =`
    <h3>${course.name}<h3>
    <p class="score">${course.score}%</p>
    <p class ="result ${result==="PASS"?"pass":"fail"}">${result}</p>`;
    courseContainer.appendChild(courseCard);
    }
    
/*  <section class="summary-section">
    <h2>Result Summary</h2>


<div class="summary-grid">

    <div class="summary-card">
        <span>Total Courses</span>
        <strong id="total-courses">0</strong>
    </div>

    <div class="summary-card">
        <span>Average Score</span>
        <strong id="average-score">0%</strong>
    </div>

    <div class="summary-card">
        <span>Overall Result</span>
        <strong id="overall-result">Loading...</strong>
    </div>
</div>
</section>*/

//calculate summary

const average = calculateAverage(courses);
const overallResult = checkResult(average);

//display summary

document.getElementById("total-courses").textContent = courses.length;

document.getElementById("average-score").textContent =
    average.toFixed(1) + "%";

document.getElementById("overall-result").textContent =
    overallResult;

let city = "Abuja";

city = "Lagos";

console.log(city);