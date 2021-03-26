import { Restaurant, RestaurantResenia, Review } from '../models/index';

export async function createResenia(req,res){
    
    try{
        const { comments, rating, email, restaurantes } = req.body;

        let newResenia = await Review.create({
            comments,
            rating,
            email
        },{fields:['comments','rating','email']
    })

        restaurantes.forEach(async (re) => {
            const restaurant = await Restaurant.findByPk(re.id);

            if(!restaurant){
                return res.status(400)
            }

            const rre = {
                reseniaid:newResenia.reseniaid,
                restauranteid:re.id
            }

            const savedRestauranteResenia = 
                    await RestaurantResenia.create(rre,
                    {
                        fields:['restauranteid','reseniaid']
                    }
            )
        });

        res.json({
            message:'Reseña create succesfully',
            data:newResenia
        })

    }catch(error){
        res.status(500).json({
            message:'Something goes wrong',
            data:[]
        });
    }
}

export async function getResenias(req,res) {
    
    try {
        const resenias = await Review.findAll({
            include:[{
                model:Restaurant,
                as:'restaurantes',
                required:false,
                attributes:['restauranteid','name'],
                through:{
                    model:RestaurantResenia,
                    as:'restauranteResenia'
                }
            }]
        });

        res.json({
            data:resenias
        })        
    } catch (error) {
        throw error;
        //console.log(JSON.stringify(error));
    }

}

export async function getOneResenia(req,res) {
    
    try {
        const { id } = req.params;

        const resenia = await Review.findOne({
                include:[{
                    model:Restaurant,
                    as:'restaurantes',
                    required:false,
                    attributes:['restauranteid','name'],
                    through:{
                        model:RestaurantResenia,
                        as:'restaurantResenia'
                    }

                }],
                where:{
                    reseniaid:id
                }
            });

        res.json({data:resenia});        
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

export async function deleteResenia(req,res) {

    try {

        const {id} = req.params;
        const resenia = await Review.findByPk(id);

        const restaurantes = await resenia.getRestaurantes();
        resenia.removeRestaurantes(restaurantes);

        const deleteRowCount = await Review.destroy({
            where:{
                reseniaid:id
            }
        }); 
        
        res.json({
            message:'Resenia Deleted succesfully',
            count:deleteRowCount
        });

    } catch (error) {
        throw error;
        console.log(JSON.stringify(error));
    }
}

export async function updateResenia(req,res) {

    try {
        const {id} = req.params;
        const { comments, rating, email, restaurantes } = req.body;

        const resenia = await Review.findByPk(id);
        
        const restaurantes_r = await resenia.getRestaurantes();
        resenia.removeRestaurantes(restaurantes_r);

        restaurantes.forEach(async (re) => {
            const rre = { 
                reseniaid:resenia.reseniaid,
                restauranteid:re.id
            };

            const savedRestauranteResenia = await RestaurantResenia.create(rre,{
                    fields:['restauranteid','categoriaid']
                }
            );

        });

        const updatedResenia = await Review.update(
            {
                comments,
                rating,
                email
            },
            {
                where:{reseniaid:id}
            }
        )

        return res.json({
            message:'Resenia updated succesfully',
            data:updatedResenia
        })
        
    } catch (error) {
        throw error;
        console.log(JSON.stringify(error));
    }   
}