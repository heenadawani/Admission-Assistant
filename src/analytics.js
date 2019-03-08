module.exports = async bp => {
    bp.analytics.custom.addGraph({
        name: 'Number of conversations',
        type: 'count',
        description: 'Number of conversations with each user',
        variables: ['conversation']
    })
    
    bp.analytics.custom.addGraph({
        name: 'Understood Messages',
        type: 'count',
        description: 'Number of understood messages',
        variables: ['understood']
    })
    
    bp.analytics.custom.addGraph({
        name: 'Unsatisfied Messages',
        type: 'piechart',
        description: 'Percentage of unsatisfied messages',
        variables: ['misunderstood', 'conversation'],
       // fnAvg: (misunderstood, conversations) => misunderstood / conversations
    })
}
  