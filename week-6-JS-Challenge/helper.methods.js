class Helpers {
    filterMatchesByLocationAndStatus(response) {
        

        const result = [];
        response.matches.forEach(element => {
            
            if (element.locationlvl1 === 'Germany' && element.status === 'canceled') {
                result.push(element.matchId)
            }
            }
        );
        

        return result;
    }

    

    filterMatchesByCoatingAndShower(response) {
        

     const match = [];
        response.matches.forEach(element => {
           
        
             if (element.matchInfo.coating === 'Main.artificialGrass' && element.matchInfo.isShower === true ) {  // it gives empty array.why?
                match.push(element.matchId)
                
            }
            
        });


        return match;
    }

    filterMatchesByLocationAndPrice(response) {
     
        const locationAndPrice = [];
        response.matches.forEach(element => {
            if (element.locationlvl2 === "Berlin" && element.price > 0) {
                locationAndPrice.push(element.matchId);
            }
            
        });

        return locationAndPrice;
    }

   
    
    filterMatchesByCreatorFeeAndStatus(response) {
        
        let result = [];
        response.matches.forEach(element => {
            if (element.creatorFeePerPlayer > 3 && element.status === "canceled" ) {
                result.push(element.matchId);
            }
            
        });
     

        return result;
    }

    
    filterMatchesByCoveringAndDressingRoom(response) {
        
        let result =[];
        response.matches.forEach(element => {
            if (element.matchInfo.covering === "Main.onTheStreet" && element.matchInfo.isDressingRoom === true) {
                result.push(element.matchId)
            }
            
        });
        


        return result;
    }
}

export default new Helpers()