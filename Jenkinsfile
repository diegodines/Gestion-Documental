pipeline {
    agent any

    stages {
        stage('1. Planificacion (Git)') {
            steps {
                echo 'Descargando la última versión del código desde GitHub...'
            }
        }

        stage('2. Construccion (Build)') {
            steps {
                echo 'Empaquetando el Backend en una imagen Docker...'
                sh 'docker build -t app-backend-gps ./backend'
            }
        }

        stage('3. Despliegue con Traefik') {
            steps {
                echo 'Actualizando el contenedor y avisando a Traefik...'
                
                sh 'docker rm -f testing-backend-1 || true'
                
                // AQUÍ ESTÁ EL CAMBIO: --network testingpeliline_default
                sh '''
                docker run -d --name testing-backend-1 \
                  --network testingpipeline_default \
                  -l "traefik.enable=true" \
                  -l 'traefik.http.routers.mibackend.rule=PathPrefix(`/api`)' \
                  -l "traefik.http.services.mibackend.loadbalancer.server.port=3000" \
                  app-backend-gps
                '''
            }
        }
    }
}