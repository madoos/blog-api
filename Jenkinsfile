#!groovy

#!groovy

node {

    def GIT_USER = "madoos"
    def GIT_REPO = "blog-api"
    def GIT_BRANCH = env.BRANCH_NAME
    def GIT_TOKEN =  env.GIT_TOKEN

    stage("Checkout SCM"){
      checkout scm
    }

    stage("Test"){
      sh "./bin/test.sh ${GIT_USER} ${GIT_REPO} ${GIT_BRANCH} ${GIT_TOKEN}"
    }

    stage("Publish Report"){
      publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: false, reportDir: "./test/reports/coverage/lcov-report",
        reportFiles: "index.html",
        reportName: "Coverage Report"
      ])
    }

    if( env.BRANCH_NAME ==~ /.*release.*/ ){
        def RELEASE = sh (script: "./bin/get-release.sh ${env.BRANCH_NAME}", returnStdout: true)
        def PROJECT = "blog-api"

        stage("Deploy"){
          sh "./bin/upgrade-deployment.sh ${RELEASE} ${env.RANCHER_HOST} ${PROJECT} ${env.RANCHER_KEY} ${env.RANCHER_SECRET}"
        }

    }
}
