document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".name");
    const usernameElement = document.querySelector(".username");
    const avatarElement = document.querySelector(".avatar");
    const reposElement = document.querySelector(".repos");
    const followersElement = document.querySelector(".followers");
    const followingElement = document.querySelector(".following");
    const linkElement = document.querySelector(".link");

    fetch("https://api.github.com/users/Claudenir-Nojosa")
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers_url;
            followingElement.innerText = json.following_url;
            linkElement.href = json.html_url;
        })
})