const PushClient = require('../client')
<<<<<<< HEAD
const ONESIGNAL_USER_AUTH_KEY = 'YmZjMTlmODItZTFlMy00YzQ0LTgxNGItMDllOWFiMWI1NzU1'
const ONESIGNAL_APP_ID = '5bc8fcef-6bc5-4b61-8903-6c9263d4bc38'
const ONESIGNAL_REST_API_KEY = 'MTk0MTk4NTUtMWUwNC00N2VkLWEwODEtYjIzM2Q3OWFmYjgx'

describe('client tests',  () => {
  it('should send a notification', (done) => {
    const client = new PushClient(ONESIGNAL_USER_AUTH_KEY, ONESIGNAL_REST_API_KEY, ONESIGNAL_APP_ID)
    client.setData({name: 'Luis Hernandez'}).setAsBackground()
    client.setAsBackground()
    client.send()
      .then(response => {
        console.log(response)
        done()
      })
      .catch(err => {
        console.log(err)
        done(err)
      })
=======

describe('client tests',  () => {
  it('should send a notification', (done) => {

    done()
>>>>>>> 9bc62891b0aa4e07b95f619b0ca38d5be2b63423
  })
})
