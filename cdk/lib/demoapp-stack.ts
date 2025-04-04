import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class DemoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, environment: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaRuntime = lambda.Runtime.NODEJS_22_X;
    const lambdaFunction = new lambda.Function(this, 'HelloHandler', {
      runtime: lambdaRuntime,
      code: lambda.Code.fromAsset('../lambda'),
      handler: 'index.handler',
      environment: {
        MY_ENV_VAR: 'Hello from Lambda!',
      },
    });
    const version = lambdaFunction.currentVersion;
    const alias = new lambda.Alias(this, 'LambdaAlias', {
      aliasName: environment,
      version,
    });
    new codedeploy.LambdaDeploymentGroup(this, 'DeploymentGroup', {
      alias,
      deploymentConfig: codedeploy.LambdaDeploymentConfig.ALL_AT_ONCE,
    });
  }
}
