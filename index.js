'use strict'

const Quark = require('proton-quark')
const _ = require('lodash')
const authKey = process.env.ONESIGNAL_USER_AUTH_KEY
const restApiKey = process.env.ONESIGNAL_REST_API_KEY
const appId = process.env.ONESIGNAL_APP_ID
const PushClient = require('./client')

/**
 * @class OneSignalQuark
 * @description A quark that expose an one signal client object for send push
 * notifications
 */
class OneSignalQuark extends Quark {

  constructor(proton) {
    super(proton)
  }

  validate() {
    if (!authKey || !restApiKey || !appId) {
      throw new Error(`Some keys are not defined: Rest api key -> ${restApiKey}, Auth Key -> ${authKey}, App ID -> ${appId}`)
    }
  }

  initialize() {
    global.pushClient = new PushClient(authKey, restApiKey, appId)
  }

}

module.exports = OneSignalQuark
