class Helpers {
   /*  1 - Implement a function “getUsersByAge“  helper.methods.js file.
The function should return the users from the api.response object aged between 30 - 40 (including 30 and 40!)
expected result:  [ Alice, Eva, Frank, Henry, Karon ]
-ANS WITH for LOOP
getUsersByAge(response, ageMin, ageMax) {

        const users = [];

        for (let i = 0; i <response.users.length; i++) {
            const element = response.users[i];
            if (element.age >= ageMin && element.age <= ageMax) {
                users.push(element.name);
            }
        }

        return users;
    }*/
    //OR ANS WITH forEach LOOP
    getUsersByAge(response, ageMin, ageMax){
         const users = [];

        response.users.forEach(element => {
            if (element.age >= ageMin && element.age <= ageMax) {
                users.push(element.name);

              }
            
         });
      return users;
    }
         //2 - Implement a function “getUsersByRole“ in the helper.methods.js file 
          //The function should return the users from the api.response object who has role admin
           // Expected result: // [ Alice, Eva, Henry ]
    getUsersByRole(response, role) {
        
        const users = [];

        for (let i = 0; i <response.users.length; i++) {
            const element = response.users[i];
            if (element.role === role) {
                users.push(element.name);
            }
        }


        return users;
    }

         
          //3 - Implement a function “getUsersByCountry“ in the helper.methods.js file 
           //The function should return the users from the api.response object who has the country USA         
            //Expected result: // [ Alice, David, Henry ]

    getUsersByCountry(response, country) {


        const users = [];

        for (let i = 0; i <response.users.length; i++) {
            const element =response.users[i];
            if (element.country === country) {
                 users.push(element.name);
            }
            }

        return users;
    }
    //4 - Implement a function “getUsersByBalance“ in the helper.methods.js file 
    //The function should return the users from the api.response object who has a balance 1100 between 2000
    //Expected result: // [ David ]
    getUsersByBalance(response, balance) {


        const users = [];

        for (let i = 0; i <response.users.length; i++) {
            const element =response.users[i];
            if (element.balance >= 1100 && element.balance <= 2000) {
                 users.push(element.name);
            }
            }

        return users;
    }




}

export default new Helpers()