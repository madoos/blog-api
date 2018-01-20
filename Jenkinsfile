#!groovy

node {
    def GIT_BRANCH = env.BRANCH_NAME

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
        keepAll: false, reportDir: "coverage/lcov-report",
        reportFiles: "index.html",
        reportName: "Coverage Report"
      ])
    }

    if( env.BRANCH_NAME ==~ /.*release.*/ ){
        def project = "blog-api"
        def rancherHost = env.RANCHER_HOST
        def key = env.RANCHER_KEY
        def secret = env.RANCHER_SECRET

        stage("Coveralls"){
          sh("./bin/coveralls.sh")
        }

        stage("Create deploy"){
          sh("./bin/deploy.sh create ${rancherHost} ${project} ${key} ${secret}")
        }

        stage("Deploy"){
          sh("./bin/deploy.sh update ${rancherHost} ${project} ${key} ${secret}")
        }
    }
}
