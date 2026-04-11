pipeline {
    agent any

    stages {
        stage('1. Planificacion (Git)') {
            steps {
                echo 'Descargando la última versión del código (Frontend y Backend) desde GitHub...'
            }
        }

        stage('2. Construccion (Build)') {
            steps {
                echo 'Empaquetando el Backend y Frontend en imágenes Docker separadas...'
                
                // Construye la imagen del backend
                sh 'docker build -t app-backend-gps ./backend'
                
                // Construye la imagen del frontend
                sh 'docker build -t app-frontend-gps ./frontend'
            }
        }

        stage('3. Despliegue (Deploy con Traefik)') {
            steps {
                echo 'Desplegando contenedores y conectando con el Guardia Mágico (Traefik)...'
                
            
                sh 'docker rm -f testing-backend-1 || true'
                sh 'docker rm -f testing-frontend-1 || true'
                
                // 2. Levantamos el nuevo Backend 
                sh '''
                docker run -d --name testing-backend-1 \
                  --network testingpipeline_default \
                  -l "traefik.enable=true" \
                  -l 'traefik.http.routers.mibackend.rule=PathPrefix(`/api`)' \
                  -l "traefik.http.services.mibackend.loadbalancer.server.port=3000" \
                  app-backend-gps
                '''

                // 3. Levantamos el nuevo Frontend
                sh '''
                docker run -d --name testing-frontend-1 \
                  --network testingpipeline_default \
                  -l "traefik.enable=true" \
                  -l 'traefik.http.routers.mifrontend.rule=PathPrefix(`/`)' \
                  -l "traefik.http.services.mifrontend.loadbalancer.server.port=80" \
                  app-frontend-gps
                '''
            }
        }
    }
}