#!groovy

#!groovy

node {

    stage("Checkout SCM"){
      checkout scm
    }

    stage("Tests"){
      sh "./bin/CI/test.sh"
    }

    stage("Publish Reports"){
      publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: false, reportDir: "./test/reports/coverage/lcov-report",
        reportFiles: "index.html",
        reportName: "Coverage Report"
      ])
    }

    if( env.BRANCH_NAME ==~ /.*release.*/ ){

        def TAG = sh (script: "./bin/CI/get-release.sh ${GIT_BRANCH}", returnStdout: true)

        stage("Build"){
          sh "./bin/CI/build.sh ${TAG}"
        }

        stage("Push"){
          sh "./bin/CI/build.sh ${TAG}"
        }

        stage("Deploy"){
          sh "./bin/CI/publish.sh ${GIT_USER} ${GIT_REPO} ${GIT_BRANCH} ${GIT_TOKEN} ${NPM_TOKEN} ${PACKAGE_VERSION}"
        }

    }
}