document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".profile-name");
    const usernameElement = document.querySelector(".profile-username");
    const avatarElement = document.querySelector(".profile-avatar");
    const reposElement = document.querySelector(".numbers-item-repos");
    const followersElement = document.querySelector(".numbers-item-followers");
    const followingElement = document.querySelector(".numbers-item-following");
    const linkElement = document.querySelector(".profile-link");

    fetch("https://api.github.com/users/Claudenir-Nojosa")
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
})