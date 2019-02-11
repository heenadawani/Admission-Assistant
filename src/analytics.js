module.exports = async bp => {
    bp.analytics.custom.addGraph({
        name: 'Number of conversations',
        type: 'count',
        description: 'Number of conversations with each user',
        variables: ['conversation']
    })
    
    bp.analytics.custom.addGraph({
        name: 'Misunderstood Messages',
        type: 'percent',
        description: 'Percentage of misunderstood messages',
        variables: ['misunderstood', 'conversation'],
        fnAvg: (misunderstood, conversations) => misunderstood / conversations
    })
}
  