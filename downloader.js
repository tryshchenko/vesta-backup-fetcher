module.exports = (connection) => 
	(remote, local) => new Promise((res, rej) => {
		console.log(`Downloading ${remote} to ${local}`);
		connection.download(remote, local, (err) => {
			err ? rej(err) : res();
		});
	});