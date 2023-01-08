var getUsersBtn = document.querySelector(".get-users-btn")
getUsersBtn.addEventListener("click", getUsers)
var table = document.querySelector(".users-table")
function getUsers() {
  var XHR = new XMLHttpRequest()
  XHR.open("GET", "https://jsonplaceholder.typicode.com/users")
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4) {
      if (XHR.status == 200) {
        console.log(JSON.parse(XHR.response))
        var usersArray = JSON.parse(XHR.response)
        for (let i = 0; i < usersArray.length; i++) {
          table.innerHTML += `
            <tr>
            <td>${usersArray[i].id}</td>
            <td>${usersArray[i].name}</td>
            <td>${usersArray[i].email}</td>
            </tr>`
        }
      }
    }
  }
  XHR.send()
}
