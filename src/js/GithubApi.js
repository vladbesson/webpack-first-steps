export class GithubApi {
	getUserInfo(user) {
		return fetch(`https://api.github.com/users/${user}`)
			.then(res => {
				if (!res.ok) {
					return Promise.reject(res.status);
				} else {
					return res.json();
				}
			});
	}

	getUserRepos(user) {
		return fetch(`https://api.github.com/users/${user}/repos`)
			.then(res => {
				if (!res.ok) {
					return Promise.reject(res.status);
				} else {
					return res.json();
				}
			});
	}
}
