const Quark = require('../index')
const should = require('should')
process.env.ONESIGNAL_USER_AUTH_KEY = 'YmZjMTlmODItZTFlMy00YzQ0LTgxNGItMDllOWFiMWI1NzU1'
process.env.ONESIGNAL_REST_API_KEY = 'MTk0MTk4NTUtMWUwNC00N2VkLWEwODEtYjIzM2Q3OWFmYjgx'
process.env.ONESIGNAL_APP_ID = '5bc8fcef-6bc5-4b61-8903-6c9263d4bc38'


describe('Quark test',  () => {
  it('should expose an object for send push notifications using onesignal as provider', done => {
    const quark = new Quark({})
    quark.validate()
    quark.initialize()
    global.should.have.property('pushClient')
    done()
  })

  it('should send a push notification using the object that expose the quark', done => {
    pushClient.setData({name: 'Luis Hernandez'}).setAsBackground()
    pushClient.send()
      .then(response => {
        response.should.have.property('id')
        response.should.have.property('recipients')
        console.log('Response:', response)
        done()
      })
      .catch(err => done(err))
  })

  it('should send a push notification to a particular tag', done => {
    const tags = [{"key": "Hustling", "relation": "=","value": 1}]
    pushClient.setData({name: 'Carlos Marcano'}).setAsBackground()
    pushClient.setTags(tags)
    pushClient.send()
      .then(response => {
        response.should.have.property('id')
        response.should.have.property('recipients')
        console.log('Response:', response)
        done()
      })
      .catch(err => done(err))
  })

})
