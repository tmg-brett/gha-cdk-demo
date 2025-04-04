import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as DemoApp from '../lib/demoapp-stack';

test('Lambda Function Created', () => {
  const demouse1 = { account: '123456789012', region: 'us-east-1' }
  const app = new cdk.App();
    // WHEN
  const stack = new DemoApp.DemoAppStack(app, 'DemoAppStack-demo-us-east-1', 'demo', { env: demouse1 });
    // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: "index.handler",
  });
});
