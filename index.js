import { GithubApi } from './js/GithubApi.js';

const userName = document.getElementById('user-name');
const userCompany = document.getElementById('user-company');
const userWebsite = document.getElementById('user-website');
const searchResultsRepos = document.getElementById('search-results-repos');

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const showReposButton = document.getElementById('show-repos');

const githubApi = new GithubApi();

const fillUserInfo = (data) => {
	if (data.name) {
		userName.innerHTML = `Name: ${data.name}`;
	}
	if (data.company) {
		userCompany.innerHTML = `Company: ${data.company}`;
	}
	if (data.blog) {
		userWebsite.innerHTML = `Website: ${data.blog}`;
	}
}

const fillUserRepos = (data) => {
	data.forEach(item => {
		let listItem = document.createElement('li');
		let listItemLink = document.createElement('a');

		listItemLink.setAttribute('href', item.html_url);
		listItemLink.setAttribute('target', '_blank');
		listItemLink.innerHTML = item.full_name;

		listItem.append(listItemLink);
		searchResultsRepos.append(listItem)
	});
}

const formSubmitHandler = (evt) => {
	evt.preventDefault();

	const userName = input.value;

	githubApi.getUserInfo(userName)
		.then(data => fillUserInfo(data));
};

const onButtonClickHandler = () => {
	const userName = input.value;

	githubApi.getUserRepos(userName)
		.then(data => fillUserRepos(data));
}

form.addEventListener('submit', formSubmitHandler);
showReposButton.addEventListener('click', onButtonClickHandler);




