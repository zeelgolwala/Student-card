let btn = document.getElementById("generatorBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");

// marks value show
marksInput.addEventListener("input", function () {
    marksValue.innerText = marksInput.value;
});

btn.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;


    //gender
    let gender = document.querySelector('input[name="gender"]:checked');
    gender = gender ? gender.value : "--";

    //course
    let selectedCourses = document.querySelectorAll('input[type="checkbox"]:checked');
    let course = [];
    selectedCourses.forEach((c) => course.push(c.value));


//marks
let marks = marksInput.value;

//show card

document.getElementById("cardName").innerText = name || "Student Name";
document.getElementById("cardRoll").innerText = roll
    ? "Roll No:" + roll
    : "Roll No:--";

document.getElementById("cardEmail").innerText = email
    ? "Email:" + email
    : "Email:--";

document.getElementById("cardAge").innerText = age
    ? "Age:" + age
    : "Age:--";


document.getElementById("cardGender").innerText = "Gender:" + gender;
document.getElementById("cardCourse").innerText = course.length ? "course:" + course.join(",")
    : "course:--";

document.getElementById("cardMarks").innerText = "Marks:" + marks + "/100";


//image 
const photoInput = document.getElementById("photo");
const cardImage = document.getElementById("cardImage");

if(photoInput.files && photoInput.files[0]){
    const reder = new FileReader();
    reder.onload = function(e){
        cardImage.src = e.target.result;
    };
    reder.readAsDataURL(photoInput.files[0]);
}else{
    cardImage.src = "https://picsum.photos/200";
}
});