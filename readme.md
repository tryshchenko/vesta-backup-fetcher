# 🛳 Vesta Backup Fetcher
`SFTP downloader for vesta panel backups. Node.js >= 7.6 is required`

*Vesta Backup Fetcher* is a configurable mini node.js library which logs with a chosen user to your server via SFTP and downloads chosen backups to chosen folder. Vesta can push backup archives as a master to FTP slaves. I wanted it to behave as a slave and download backups from another server. Relays only on one dependency: scp2.

Supposed to be running on your:
- Backup VPS server
- Home server
- Raspberry PI
- Smart toaster
- ... or even normal computer, if you need it occasionally

Library is fairly small (less than 40 lines of formatted code), you can easily check the library and decide, do you ready to trust it or not. (I spent more time on docs rather then on writing code here)

## How to
1. Rename example.config.js to config.js
2. Replace data inside with your credentials.
Example of config:
```
module.exports = {
    sftp: {
        host: "8.8.8.8", // Your IP or domain name of one of websites
        username: "root", // user which can login and access backups folder
        password: "password", // your 123456 or qwertyui
        privateKey: undefined, // privateKey may be undefined
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
```

- *sftp* - configure your ssh credentials. You can configure a private key either. If you don't use it - keep undefined.
- *pathprefix* - path on the remote server with a folder where backups are stored
- *targetPath* - absolute path, or ./ on local machine
- *users* - array of strings, the list of VESTA users backups of which are expected to be downloaded

*run it with node index.js or npm start*

npm and npx are coming.

## Contribution
Feel free to open Issues and PRs.

## Roadmap
Features going to be implemented soon:
- keep it a *mini* library
- validations for configuration and backup existence on the remote server
- validation of "enough space on the disk."

## Important to know
SFTP errors are passed from the library. They aren't very readable, so don't rely on the library in checking your errors.
If it fails - check backup existence and your data.


