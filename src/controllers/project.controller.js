import { Restaurant } from "../models/Restaurant";

export async function createRestaurant(req,res) {
    const {name,description,logo,rating} = req.body;
    try {
        let newRestaurant = await Restaurant.create({
            name,
            description,
            logo,
            rating
        });
        
        res.json({
            message:'Restaurant create succesfully',
            data:newRestaurant
        })
    }catch (error) {
        console.log(JSON.stringify(error));
        // res.status(500).json({
        //     message:'Something goes wrong',
        //     data:[]
        // });
    }
    // console.log(req.body);
    // res.send('received');
}