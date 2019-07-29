// your code here
const baseURL = "https://api.github.com"

function getRepositories(){
  let userName = document.getElementById('username').value;
  let repoURL = `${baseURL}/users/${userName}/repos`

  const req = new XMLHttpRequest();

  req.addEventListener('load', displayCommits)
  req.open('GET', baseURL)
  req.send()
  return false;
}
function displayCommits(event, data){
  let repos = JSON.parse(this.responseText)

  const repoList = "<ul>" + repos.map(repo =>{
    return (
      `<li>
        <a href="${repo.html_url}">${repo.name}</a>
        <span><a href="#" data-repository="${repo.name}" data-username="${repo['owner']['login']} onclick="getCommits(this)">Get Commits</a></span>
        <span><a href="#" data-repository="${repo.name}" data-username="${repo['owner']['login']} onclick="getBranches(this)">Get Branches</a></span>
      </li>`
    )
  }).join('') + "</ul>"
  document.getElementById('repositories').innerHTML = repoList;
}
