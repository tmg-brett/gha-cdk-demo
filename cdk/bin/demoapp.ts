#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DemoAppStack } from '../lib/demoapp-stack';

const mmsandboxuse1 = { account: '123456789012', region: 'us-east-1' }
const mmstageuse1 = { account: '123456789012', region: 'us-east-1' }
const mmproduse1 = { account: '123456789012', region: 'us-east-1' }

const app = new cdk.App();

new DemoAppStack(app, 'DemoAppStack-sandbox-us-east-1', 'sandbox', { env: mmsandboxuse1 });
new DemoAppStack(app, 'DemoAppStack-stage-us-east-1', 'staging', { env: mmstageuse1 });
new DemoAppStack(app, 'DemoAppStack-prod-us-east-1', 'prod', { env: mmproduse1 });
