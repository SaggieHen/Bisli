var Restaurant = require("../models/restaurant");

class restaurantController{
    
    static async createRestaurant(name, detail, lat, lon, accountId){
        let restaurant = new Restaurant({
            name: name,
            detail: detail,
            location: {
                lat,
                lon
            },
            accountId: accountId
        });
        try{
            let doc = await restaurant.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllRestaurants(){
        try{
            let restaurantList = await Restaurant.find({});
            return restaurantList;
        }
        catch(err){}
    }

    static async getRestaurantByName(restaurantName){
        try{
            let restaurantList = await Restaurant.find({name: restaurantName});
            return restaurantList;
        }
        catch(err){}
    }

    static async deleteRestaurant(restaurantID){
        try{
            await Restaurant.find({_id: restaurantID}).deleteOne();
        }
        catch(err){}
    }
}
module.exports = restaurantController;