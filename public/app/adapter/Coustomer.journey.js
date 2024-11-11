class CoustomerAdapter {
    constructor(){}

    coustomerNetworkFactory(customerList){
        const networkData = {
            nodes: [],
            links: []
        
          }
        
          networkData.nodes.push(
            {
              "id": `${customerList.name}-${1 + Math.floor((Math.random()) * 100)}`,
              "name": customerList.name,
              "type": "app"
            },
          )
        
        
          const getNetworkData = (actionDetails, currentNodeId, userId, profit, actionCount = 0) => {
            const actionNodeId = `${userId}-${actionCount}`;
            const node = {
              "id": actionNodeId,
              "name": actionDetails.action,
              "type": 'journey'
            };
            if (actionDetails.next === null) {
              node.profit = profit;
            }
            const link = {
              source: currentNodeId,
              target: actionNodeId
            };
        
            networkData.nodes.push(node);
            networkData.links.push(link);
        
            if (actionDetails.next === null) {
              return;
            } else if (Array.isArray(actionDetails.next)) {
              // Handle each next action if it is an array
              actionDetails.next.forEach((nextAction, index) => {
        
                let nodeId = actionCount + 'next' + index + 1;
                getNetworkData(nextAction, actionNodeId, userId, profit, nodeId);
              });
            } else {
              // Handle the single next action
              getNetworkData(actionDetails.next, actionNodeId, userId, profit, actionCount + 1);
            }
          };
        
          customerList.users.forEach((user) => {
            const node = {
              "id": user.id,
              "name": user.name,
              "type": 'user',
              'uniqueClass': 'name'
            };
            networkData.nodes.push(node);
        
            const link = {
              source: networkData.nodes[0].id,
              target: user.id
            };
        
            networkData.links.push(link);
            if (user.next) {
              getNetworkData(user.next, user.id, user.id, user.profit);
            }
          });
     return   networkData;  
    }
}

export default CoustomerAdapter ;