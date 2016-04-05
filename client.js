'use strict'

const _ = require('lodash')
const request = require('request-promise')
const provider = 'https://onesignal.com/api/v1'

/**
 * @class OneSignalQuark
 * @description A quark that expose an one signal client object for send push
 * notifications
 */
class PushClient {

  constructor(authKey, restApiKey, appId) {
    this.notification = {}
    this.authKey = authKey
    this.restApiKey = restApiKey
    this.notification.app_id = appId
    this.notification.included_segments = ['All']
  }

  setAsBackground() {
    this.notification.android_background_data = true
    this.notification.content_available = true
    return this
  }

  setContents(contents) {
    this.notification.contents = contents
    return this
  }

  setHeadings(headings) {
    this.notification.headings = headings
    return this
  }

  setData(data) {
    this.notification.data = data
    return this
  }

  setTags(tags) {
    this.notification.tags = tags
    return this
  }

  send() {
    const opts = {
      uri: `${provider}/notifications`,
      method: "POST",
      body: this.notification,
      headers: this._buildAuthorizationHeaders(),
      json: true
    }
    return request(opts)
  }


  _buildAuthorizationHeaders() {
    return {
      'Authorization': `Basic ${this.restApiKey}`,
      'Content-Type': 'application/json'
    }
  }

}
module.exports = PushClient
