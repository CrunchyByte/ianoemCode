pipeline {
    agent any
    stages {
        stage('Pull Latest Code') {
            steps {
                sh 'cd /usr/share/nginx/html"'
                sh 'sudo git pull origin main'

            }
        }
        stage('Deploy to Web Server') {
            steps {
                sh 'echo "is this running too?"'
                sh 'sudo cp -r * /usr/share/nginx/html/' // Nginx web root directory
                sh 'sudo ls -l /usr/share/nginx/html/'  // List files in the web root
                sh 'sudo systemctl restart nginx' // Restart Nginx
            }
        }
    }
}