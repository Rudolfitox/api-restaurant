import { Categoria, Restaurant, RestaurantCategoria } from "../models/index";

export async function createRestaurant(req,res) {
    
    try {

        const {name,description,logo,rating,categorias} = req.body;

        let newRestaurant = await Restaurant.create({
            name,
            description,
            logo,
            rating
            },{fields:['name','description','logo','rating']
        });

        categorias.forEach(async(ca) => {
            const categoria = await Categoria.findByPk(ca.id)
            
            if(!categoria){
                return res.status(400);
            }

            const rc = { restauranteid:newRestaurant.restauranteid,categoriaid:ca.id }

            const savedRestauranteCategoria = 
                    await RestaurantCategoria.create(rc,
                        {
                            fields:['restauranteid','categoriaid']
                        }
                    )
        });

        res.json({
            message:'Restaurant create succesfully',
            data:newRestaurant
        });

    }catch (error) {
        // throw error
        //console.log(JSON.stringify(error));
        res.status(500).json({
            message:'Something goes wrong',
            data:[]
        });
    }
    // console.log(req.body);
    // res.send('received');
}

export async function getRestaurants(req,res) {
    
    try {
        const restaurants = await Restaurant.findAll({
            include:[{
                model:Categoria,
                as:'categorias',
                required:false,
                attributes:['categoriaid','name'],
                through:{
                    model:RestaurantCategoria,
                    as:'restaurantCategorias'
                }
            }]
        });

        res.json({
            data:restaurants
        })        
    } catch (error) {
        throw error;
        //console.log(JSON.stringify(error));
    }

}

export async function getOneRestaurant(req,res) {
    
    try {
        const { id } = req.params;

        const restaurant = await Restaurant.findOne({
                include:[{
                    model:Categoria,
                    as:'categorias',
                    required:false,
                    attributes:['categoriaid','name'],
                    through:{
                        model:RestaurantCategoria,
                        as:'restaurantCategorias'
                    }

                }],
                where:{
                    restauranteid:id
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

        const restaurante = await Restaurant.findByPk(id);

        const categorias = await restaurante.getCategorias();
        restaurante.removeCategorias(categorias);

        const deleteRowCount = await Restaurant.destroy({
            where:{
                restauranteid:id
            }
        }); 
        
        res.json({
            message:'Restaurant Deleted succesfully',
            count:deleteRowCount
        });

    } catch (error) {
        throw error;
        console.log(JSON.stringify(error));
    }
}

export async function updateRestaurant(req,res) {

    try {
        const {id} = req.params;
        const { name,description,logo,rating,categorias } = req.body;

        const restaurante = await Restaurant.findByPk(id);
        
        const categorias_r = await restaurante.getCategorias();
        restaurante.removeCategorias(categorias_r);

        categorias.forEach(async (ca) => {
            const rc = { 
                restauranteid:restaurante.restauranteid,
                categoriaid:ca.id 
            };

            const savedRestauranteCategoria = await RestaurantCategoria.create(rc,{
                    fields:['restauranteid','categoriaid']
                }
            );

        });

        const updatedRestaurant = await Restaurant.update({name,description,logo,rating},{where:{restauranteid:id}})

        return res.json({
            message:'Restaurant updated succesfully',
            data:updatedRestaurant
        })
        
    } catch (error) {
        throw error;
        console.log(JSON.stringify(error));
    }

    
}