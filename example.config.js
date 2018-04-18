module.exports = {
	sftp: {
		host: "8.8.8.8", // Your IP or domain name of one of websites
		username: "root", // user which can login and access backups folder
		password: "password", // password or privateKey should be undefined
		privateKey: undefined, // password or privateKey should be undefined
		port: 22 // ssh port
	},
	pathPrefix: '/home/my-backup-user/', // path with folder where backups are stored
	targetPath: '/home/my-user/backups-folder/', // absolute path, or ./ on local machine
	users: [
		'admin',
		'mywebsite',
		'nobodyreadsit'
	] // the list of VESTA users backups of which are expected to be downloaded
}