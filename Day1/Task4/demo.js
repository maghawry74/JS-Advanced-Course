var startPage = document.querySelector(".Start-up")
var savedPage = document.querySelector(".Save")
var registerBtn = document.querySelector(".register")
if (document.cookie != "") {
  startPage.style.display = "none"
  savedPage.style.display = "flex"
  let imgscr = document.cookie.split("; ")[3].split("=")[1]
  let Username = document.cookie.split("; ")[0].split("=")[1]
  let color = document.cookie.split("; ")[2].split("=")[1]
  let numberOfVistes = document.cookie.split("; ")[4].split("=")[1]
  setCookie("numOfVisites", Number(numberOfVistes) + 1)
  savedPage.innerHTML = `
  <img src=${imgscr}></img>
  <h3>Welcome <span style="color:${color}"> ${Username}</span> you have visited the site <span style="color:${color}">${numberOfVistes}</span> times</h3>
  `
} else {
  startPage.style.display = "block"
  savedPage.style.display = "none"
}
registerBtn.addEventListener("click", function () {
  console.log("clicked")
  var Name = document.querySelector("#name")
  var age = document.querySelector("#age")
  var gender = document.getElementsByName("gender")
  var gendervalue
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      gendervalue = gender[i]
    }
  }
  console.log(gendervalue)
  var color = document.querySelector("#color")
  setCookie("name", Name.value)
  setCookie("age", age.value)
  setCookie("color", color.value)
  if (gendervalue.value == "male") {
    setCookie("img", "./imgs/male.jpg")
  } else {
    setCookie("img", "./imgs/female.jpg")
  }
  setCookie("numOfVisites", 1)
})

function setCookie(key, value) {
  document.cookie = `${key}=${value};expires=${new Date() + 3}`
}
