pipeline {
    agent any
    stages {
        stage('Pull Latest Code') {
            steps {
                sh 'git pull origin main'
            }
        }
        stage('Deploy to Web Server') {
            steps {
                sh 'cp -r * /usr/share/nginx/html/' // Nginx web root directory
                sh 'sudo systemctl restart nginx' // Restart Nginx
            }
        }
    }
}