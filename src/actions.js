/**
 * Description of the action goes here
 * @param  {String} params.name=value Description of the parameter goes here
 * @param  {Number} [params.age] Optional parameter
 */
const _ = require('lodash')


module.exports = { 
  trackNewConversation: async (state, { bp, user }) => {
    await bp.analytics.custom.increment(`${'conversation'}~${user.id}`)
  },
  
  trackUnderstood: async (state, { bp, user }) => {
    await bp.analytics.custom.increment(`${'understood'}~${user.id}`)
  },
  
  trackMisunderstood: async (state, { bp, user }) => {
    await bp.analytics.custom.increment(`${'misunderstood'}~${user.id}`)
  }
 }
