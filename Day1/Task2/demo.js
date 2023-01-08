var loginBtn = document.querySelector(".login-btn")
var getAllBtn = document.querySelector(".get-all-cookies-btn")
var getCookie = document.querySelector(".get-cookie-btn")
var deleteCookie = document.querySelector(".delete-cookie-btn")
var userNameInput = document.querySelector(".user-name")
var passwordInput = document.querySelector(".Password")
var keyInput = document.querySelector(".Key")
var messages = document.querySelector(".messages")
loginBtn.addEventListener("click", login)
getAllBtn.addEventListener("click", getAll)
getCookie.addEventListener("click", function () {
  getonlyOne(keyInput.value)
})
deleteCookie.addEventListener("click", function () {
  CookieDelete(keyInput.value)
})

function login() {
  var loingTime = new Date()
  loingTime.setHours(loingTime.getHours() + 1)
  console.log(loingTime)
  document.cookie = `userName=${userNameInput.value};expires=${loingTime}`
  document.cookie = `Password=${passwordInput.value};expires=${loingTime}`
}
function getAll() {
  var cookies = getCookiesArray()
  var div = document.createElement("div")
  for (var i = 0; i < cookies.length; i++) {
    div.innerHTML += `
    <div>
    <span>${cookies[i][0]}</span>
    <span>${cookies[i][1]}</span>
    </div>
    `
  }
  messages.append(div)
}
function getCookiesArray() {
  var cookies = document.cookie.split("; ")
  var cookiesArray = []
  for (var i = 0; i < cookies.length; i++) {
    cookiesArray.push(cookies[i].split("="))
  }
  return cookiesArray
}
function getonlyOne(key) {
  var cookieArray = getCookiesArray()
  console.log(cookieArray)
  var message = "Not Found"
  for (var i = 0; i < cookieArray.length; i++) {
    console.log(cookieArray[i][0])
    if (cookieArray[i][0] == key) {
      message = cookieArray[i][1]
    }
  }
  messages.innerHTML = message
}
function CookieDelete(key) {
  var cookieArray = getCookiesArray()
  console.log(cookieArray)
  for (var i = 0; i < cookieArray.length; i++) {
    console.log(cookieArray[i][0])
    if (cookieArray[i][0] == key) {
      document.cookie = `${cookieArray[i][0]} =
        {cookieArray[i][1]};expires=${-1}`
    }
  }
}
