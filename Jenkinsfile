#!groovy

#!groovy

node {

    stage("Checkout SCM"){
      checkout scm
    }

    stage("Test"){
      sh "./bin/test.sh"
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

        stage("Deploy"){
          sh "./bin/upgrade-deployment.sh ${RELEASE} ${env.RANCHER_HOST} ${env.RANCHER_KEY} ${env.RANCHER_SECRET}"
        }

    }
}