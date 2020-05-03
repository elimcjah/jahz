import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsConfig from '~/aws-exports'

Amplify.configure(awsConfig)

Vue.use(AmplifyPlugin, AmplifyModules)
