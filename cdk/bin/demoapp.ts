#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DemoAppStack } from '../lib/demoapp-stack';

const sandboxuse2 = { account: '855363317312', region: 'us-east-2' }
const stageuse1 = { account: '123456789012', region: 'us-east-1' }
const produse1 = { account: '123456789012', region: 'us-east-1' }

const app = new cdk.App();

new DemoAppStack(app, 'DemoAppStack-sandbox-us-east-2', 'sandbox', { env: sandboxuse2 });
new DemoAppStack(app, 'DemoAppStack-stage-us-east-1', 'staging', { env: stageuse1 });
new DemoAppStack(app, 'DemoAppStack-prod-us-east-1', 'prod', { env: produse1 });
