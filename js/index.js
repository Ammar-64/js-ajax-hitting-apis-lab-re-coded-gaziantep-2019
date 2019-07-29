// your code here
const baseURL = "https://api.github.com"

function getRepositories(){
  let userName = document.getElementById('username').value;
  let repoURL = "https://api.github.com/users/octocat/repos"

  const req = new XMLHttpRequest();

  req.addEventListener('load', displayRepositories)
  req.open('GET', repoURL)
  req.send()

}

function displayRepositories(event, data){
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


function getCommits(element){
  const repoName = element.dataset.repository;
  const userName = element.dataset.username;
  const commitsURL = `${baseURL}/repos/${userName}/${repoName}/commits`

  const req = new XMLHttpRequest;

  creq.addEventListener('load', displayCommits)
  req.open('GET', commitsURL)
  req.send()
}

function displayCommits(){
  const commits = JSON.parse(this.responseText);

  const commitList = "<ul>" + commits.map(commit => {
      const commitAuthor = commit['author']['login'];
      const commitAuthorName = commit['commit']['autor']['name'];
      const commitMessage = commit['commit']['message'];
      return (
        `<li>
        <span><strong>Author's Name:</strong> ${commitAuthorName}</span>
        <span><strong>${commitAuthor}</storng> - ${commitMessage}</span>
        </li>`
      )
  }).join('')+ "</ul>"
  document.getElementById('details').innerHTML = commitList;
}
