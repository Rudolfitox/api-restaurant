import { Categoria, Restaurant } from "../models/index";

export async function createRestaurant(req,res) {
    const {name,description,logo,rating,categorias} = req.body;
   
    try {
        let newRestaurant = await Restaurant.create({
            name,
            description,
            logo,
            rating
            },{fields:['name','description','logo','rating']
        });

        categorias.forEach(async(ca) => {
            const categoria = await Categoria.findByPk(ca.id)
        })
        
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

export async function getRestaurants(req,res) {
    
    try {
        const restaurants = await Restaurant.findAll();

        res.json({
            data:restaurants
        })        
    } catch (error) {
        console.log(JSON.stringify(error));
    }

}

export async function getOneRestaurant(req,res) {
    
    try {
        const {id} = req.params;

        const restaurant = await Restaurant.findOne(
            {
                where:{
                    slug:id
                }
            });

        res.json({data:restaurant});        
    } catch (error) {
        console.log(JSON.stringify(error));
    }

}

export async function deleteRestaurant(req,res) {
    const {id} = req.params;

    try {
        const deleteRowCount = await Restaurant.destroy({
            where:{
                slug:id
            }
        }); 
        
        res.json({
            message:'Restaurant Deleted succesfully',
            count:deleteRowCount
        });

    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

export async function updateRestaurant(req,res) {

    try {
        const {id} = req.params;
        const { name,description,logo,rating } = req.body;

        const restaurants = await Restaurant.findAll({
            attributes:["slug","name", "description", "logo","rating"],
            where:{
                slug:id
            }
        });

        if(restaurants.length > 0) {
            restaurants.forEach(async restaurant => {
                await restaurant.update({
                    name,
                    description,
                    logo,
                    rating
                })
            })
        }

        return res.json({
            message:'Restaurant updated succesfully',
            data:restaurants
        })
        
    } catch (error) {
        console.log(JSON.stringify(error));
    }

    
}