//* Write example of fetching data with XMLHTTPRequest

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/noelys215/repos');
xhr.send();

// xhr.onload = function () {
// 	if (xhr.status !== 200) {
// 		console.log(`Error ${xhr.status} ${xhr.statusText}`);
// 	} else {
// 		console.log(`Success ${xhr.response}`);
// 	}
// };

xhr.onerror = function () {
	console.log('XHR Request failed');
};

//* Write an example of fetching data using fetch

// const fetchData = fetch('https://api.github.com/users/noelys215/repos')
// 	.then((res) => res.json())
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

//* Write an async function which executes callback after finishing its async task

const asyncFn = (callback) => {
	setTimeout(() => {
		callback('done');
	}, 2000);
};

// asyncFn((mes) => {
// 	console.log('callback', mes);
// });

//* Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

const asyncFunc1 = (callback) => {
	setTimeout(() => {
		callback(1);
	}, 3000);
};

const asyncFunc2 = (callback) => {
	setTimeout(() => {
		callback(2);
	}, 2000);
};

const asyncFunc3 = (callback) => {
	setTimeout(() => {
		callback(3);
	}, 1000);
};

asyncParallel = (asyncFuncs, callback) => {
	const resultArr = new Array(asyncFuncs.length);
	let resultCounter = 0;

	asyncFuncs.forEach((asyncFunc, index) => {
		asyncFunc((value) => {
			resultArr[index] = value;
			resultCounter++;
			if (resultCounter >= asyncFunc.length) {
				callback(resultArr);
			}
		});
	});
};

// asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
// 	console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
// });

// Create a promise function to be able to use a callback function via promise approach

const asyncFunction = (callback) => {
	setTimeout(() => {
		callback(1);
	}, 3000);
};

const promisifyAsyncFunc = () => {
	return new Promise((resolve) => {
		asyncFunction((data) => {
			resolve(data);
		});
	});
};

// promisifyAsyncFunc().then((res) => console.log(res));

//* You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users6 = [
	{
		id: 1,
		name: 'Jack',
	},
	{
		id: 2,
		name: 'John',
	},
	{
		id: 3,
		name: 'Mike',
	},
];
// const userStatuses = [
// 	{
// 		id: 1,
// 		isActive: true,
// 	},
// 	{
// 		id: 2,
// 		isActive: true,
// 	},
// 	{
// 		id: 3,
// 		isActive: false,
// 	},
// ];

// const getUsers = () => {
// 	return new Promise((resolve) => {
// 		resolve(users6);
// 	});
// };

// const getUserStatuses = () => {
// 	return new Promise((resolve) => {
// 		resolve(userStatuses);
// 	});
// };

// Solution Juan
// getUsers().then((users) => {
// 	getUserStatuses().then((userStatus) => {
// 		const mappedUsers = users.map((user) => {
// 			const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
// 			return { ...user, isActive };
// 		});
// 		console.log(mappedUsers);
// 	});
// });

// Solution Two

// const mapUsers = (users, userStatuses) => {
// 	return users.map((user) => {
// 		const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
// 		return { ...user, isActive };
// 	});
// };

// Promise.all([getUsers(), getUserStatuses()])
// 	.then(([users, userStatuses]) => mapUsers(users, userStatuses))
// 	.then((mappedUsers) => console.log(mappedUsers));

//* You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
//* Rewrite previous task in async await

const users9 = [
	{
		id: 1,
		name: 'Jack',
	},
	{
		id: 2,
		name: 'John',
	},
	{
		id: 3,
		name: 'Mike',
	},
];
const userStatuses = [
	{
		id: 1,
		isActive: true,
	},
	{
		id: 2,
		isActive: true,
	},
	{
		id: 3,
		isActive: false,
	},
];

const getUsers = () => {
	return new Promise((resolve) => {
		resolve(users9);
	});
};

const getUserStatuses = () => {
	return new Promise((resolve) => {
		resolve(userStatuses);
	});
};

const getMappedUSers = async () => {
	try {
		const users = await getUsers();
		const userStatuses = await getUserStatuses();
		const mappedUsers = users.map((user) => {
			const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
			return { ...user, isActive };
		});
		console.log(mappedUsers);
	} catch (err) {
		console.log(err);
	}
};

getMappedUSers();

//* Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested

const requestManager = (url, options = {}, attempts = 4) => {
	return new Promise((res, rej) => {
		fetch(url, options)
			.then(res)
			.catch((err) => {
				const isLastAttempt = attempts === 1;
				if (isLastAttempt) {
					return rej(err);
				}
				setTimeout(() => {
					requestManager(url, options, attempts - 1)
						.then(res)
						.catch(rej);
				}, 3000);
			});
	});
};

requestManager('https://foo.com')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err.message));
