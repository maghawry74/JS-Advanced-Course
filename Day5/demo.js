// Task 1
function courseDisplay(course) {
  return Object.assign(
    {
      courseName: "Default Name",
      courseDuration: "Default Duration",
      courseOwner: "Default Owner",
    },
    course
  )
}

// Task 2
// 1- using Fetch --> then --> catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json()
  })
  .then((users) => {
    let usersSection = document.querySelector(".tabs")
    users.forEach((user) => {
      usersSection.innerHTML += `<button class="user" data-id=${user.id}>${user.name}</button>`
    })
    document.querySelectorAll(".user").forEach((item) => {
      item.addEventListener("click", (e) => {
        fetchPosts(e)
      })
    })
  })
  .catch((error) => {
    console.log(error)
  })

function fetchPosts(e) {
  document.querySelectorAll(".user").forEach((button) => button.classList.remove("checked"))
  e.target.classList.add("checked")

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.dataset.id}`)
    .then((respose) => respose.json())
    .then((data) => {
      let displaySection = document.querySelector(".display")
      displaySection.innerHTML = ""
      data.forEach((post) => {
        displaySection.innerHTML += `<h3>${post.title}</h3>`
      })
    })
}

// 2- using Async Await

async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  let users = await response.json()
  let usersSection = document.querySelector(".tabs")
  users.forEach((user) => {
    usersSection.innerHTML += `<button class="user" data-id=${user.id}>${user.name}</button>`
  })
  document.querySelectorAll(".user").forEach((item) => {
    item.addEventListener("click", (e) => {
      fetchPosts(e)
    })
  })
}

async function fetchPosts(e) {
  document.querySelectorAll(".user").forEach((button) => button.classList.remove("checked"))
  e.target.classList.add("checked")

  let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e.target.dataset.id}`)
  let userPosts=await response.json()
  let displaySection = document.querySelector(".display")
  displaySection.innerHTML = ""
  userPosts.forEach((post) => {
    displaySection.innerHTML += `<h3>${post.title}</h3>`
  })
}
