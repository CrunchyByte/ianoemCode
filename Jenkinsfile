pipeline {
    agent any
    stages {
        stage('Pull Latest Code') {
            steps {
                git branch: 'main', url: 'https://github.com/CrunchyByte/ianoemCode.git'
                //sh 'cd /usr/share/nginx/html'
                //sh 'git pull origin main'

            }
        }
        stage('Deploy to Web Server') {
            steps {
                //sh 'echo "is this running too?"'
                //sh 'cp -r * /usr/share/nginx/html/' // Nginx web root directory
                //sh 'ls -l /usr/share/nginx/html/'  // List files in the web root
                sh 'cp -r index.html /usr/share/nginx/html/'
                sh 'sudo systemctl restart nginx' // Restart Nginx
            }
        }
    }
}