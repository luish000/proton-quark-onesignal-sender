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
    return new Promise((resolve, reject) => {
      if (!this.authKey || !this.restApiKey || !this.appId) {
        reject(`Some keys are not defined: Rest api key -> ${this.restApiKey}, Auth Key -> ${this.authKey}, App ID -> ${this.appId}`)
      }
      resolve(true)
    })
  }

  initialize() {
    return new Promise(resolve => {
      global.pushClient = new PushClient(this.authKey, this.restApiKey, this.appId)
      resolve(true)
    })
  }

  get authKey() {
    return process.env.ONESIGNAL_USER_AUTH_KEY
  }

  get restApiKey() {
    return process.env.ONESIGNAL_REST_API_KEY
  }

  get appId() {
    return process.env.ONESIGNAL_APP_ID
  }

}

module.exports = OneSignalQuark
