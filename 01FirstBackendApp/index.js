const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.port

const githubData = {
    login: "TanayMukadam",
    id: 96699601,
    node_id: "U_kgDOBcOE0Q",
    avatar_url: "https://avatars.githubusercontent.com/u/96699601?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/TanayMukadam",
    html_url: "https://github.com/TanayMukadam",
    followers_url: "https://api.github.com/users/TanayMukadam/followers",
    following_url:
        "https://api.github.com/users/TanayMukadam/following{/other_user}",
    gists_url: "https://api.github.com/users/TanayMukadam/gists{/gist_id}",
    starred_url:
        "https://api.github.com/users/TanayMukadam/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/TanayMukadam/subscriptions",
    organizations_url: "https://api.github.com/users/TanayMukadam/orgs",
    repos_url: "https://api.github.com/users/TanayMukadam/repos",
    events_url: "https://api.github.com/users/TanayMukadam/events{/privacy}",
    received_events_url:
        "https://api.github.com/users/TanayMukadam/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: "Tanay Mukadam",
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 7,
    public_gists: 0,
    followers: 1,
    following: 4,
    created_at: "2021-12-26T19:14:15Z",
    updated_at: "2024-10-29T10:11:47Z",
};

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/user', (req, res) => {
    res.send("Hello User")
})

app.get('/githubData', (req, res) => {
    res.json(githubData)
})


app.listen(port, () => {
    console.log(`Listening the app on ${port}`);
})