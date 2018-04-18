const config = require('./config');
const Downloader = require('./downloader');
const Client = require('scp2').Client;
const fs = require('fs');

const fetchData = async (downloader, end) => {
	const today = new Date().toISOString().slice(0,10);
	for (let i = 0; i < config.users.length; i++) {
		try {
			const user = config.users[i];
			const remote = `${config.pathPrefix}${user}.${today}.tar`;
			const dir = `${config.targetPath}/${today}`;
			const local = `${dir}/${user}.tar`;

			if (!fs.existsSync(dir)){
			    fs.mkdirSync(dir);
			}

			await downloader(remote, local);
			console.log('Ok!');
		} catch(error) {
			console.error(error);
		}
	}

	end();
}

const connection = new Client(config.sftp);
fetchData(Downloader(connection), () => connection.close());