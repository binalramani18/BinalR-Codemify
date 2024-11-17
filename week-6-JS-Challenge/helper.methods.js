class Helpers {
    filterMatchesByLocationAndStatus(response) {
        

        // Challenge 1: Filter Matches by Location and Status
        // Write a function to find all matches where "locationlvl1" = "Germany" and "status" = "canceled" in the array.
        // The function should return an array of "matchId"s of the matches.
        // Example usage:
        // console.log(filterMatchesByLocationAndStatus(response); // Returns: ["10-016", "10-015"]
        const result = [];
        response.matches.forEach(element => {
            
            if (element.locationlvl1 === 'Germany' && element.status === 'canceled') {
                result.push(element.matchId)
            }
            }
        );
        

        return result;
    }

    // Challenge 2: Filter Matches by Coating and Shower Availability
    // Write a function to find all matches where "coating" = "Main.artificialGrass" and "isShower" = true in the array.
    // The function should return an array of "matchId"s of the matches.
    // Example usage:
    // console.log(filterMatchesByCoatingAndShower(response)); // Returns: ["10-015"]
    
      //  response.matches.forEach(element => {    |<----here we log each element to see it's structure
        //    console.log(element);                | 
        //});                                      | 

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
        
       // Challenge 3: Filter Matches by Location and Price
        // Write a function to find all matches where "locationlvl2" = "Berlin" and "price" > 0 in the array.
        // The function should return an array of "matchId"s of the matches.
        // Example usage:
        // console.log(filterMatchesByLocationAndPrice(response)); // Returns: ["10-015"]

        const locationAndPrice = [];
        response.matches.forEach(element => {
            if (element.locationlvl2 === "Berlin" && element.price > 0) {
                locationAndPrice.push(element.matchId);
            }
            
        });

        return locationAndPrice;
    }

    // Challenge 4: Filter Matches by Creator Fee and Status
    // Write a function to find all matches where "creatorFeePerPlayer" > 3 and "status" = "canceled" in the array.
    // The function should return an array of "matchId"s of the matches.
    // Example usage:
    // console.log(filterMatchesByCreatorFeeAndStatus(response)); // Returns: ["10-016", "10-015"]
    
    
    filterMatchesByCreatorFeeAndStatus(response) {
        
        let result = [];
        response.matches.forEach(element => {
            if (element.creatorFeePerPlayer > 3 && element.status === "canceled" ) {
                result.push(element.matchId);
            }
            
        });
     

        return result;
    }
        // Challenge 5: Filter Matches by Covering and Dressing Room Availability
        // Write a function to find all matches where "covering" = "Main.onTheStreet" and "isDressingRoom" = true in the array.
        // The function should return an array of "matchId"s of the matches.
        // Example usage:
        // console.log(filterMatchesByCoveringAndDressingRoom(response)); // Returns: ["10-016"]
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