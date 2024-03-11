pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }

        stage('Gulp') {
            steps {
                echo 'Running Gulp tasks...'
                sh 'npx gulp sampleTaskSync'
                sh 'npx gulp sampleTaskAsync'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'npm start &'
            }
        }
    }
}
