import { Categoria } from "../models/Categoria";

export async function createCategory(req,res) {

    const { name } = req.body;
    
    try {

        let newCategory = await Categoria.create(
            {name},
            {fields:['name']}
        );
        
        res.json({
            message:'Category create succesfully',
            data:newCategory
        })
    }catch (error) {
        // console.log(JSON.stringify(error));
        
        throw error
    }
}

export async function getCategories(req,res) {
    
    try {
        const categories = await Categoria.findAll({
            attributes:['slug','name'],
            // order:[
            //     ['slug','DESC']
            // ]
        });

        res.json({categories})        
    } catch (error) {
        throw error
    }

}

export async function deleteCategory(req,res) {
    const {id} = req.params;

    try {
        const deleteRowCount = await Categoria.destroy({
            where:{
                slug:id
            }
        }); 
        
        res.json({
            message:'Category Deleted succesfully',
            count:deleteRowCount
        });

    } catch (error) {
        console.log(JSON.stringify(error));
    }
}

export async function updateCategory(req,res) {

    try {
        const {id} = req.params;
        const { name } = req.body;

        const category = await Categoria.findOne({attributes:["slug","name"],where:{slug:id}});

        const updatedCategory = await Categoria.update({name},{where:{slug:id}});
        
        return res.json({
            message:'Category updated succesfully',
            updatedCategory
        })
        
    } catch (error) {
        console.log(JSON.stringify(error));
    }   
}


export async function getOneCategory(req,res) {
    
    try {        
        const {id} = req.params;

        const category = await Categoria.findOne({
            where:{slug:id},
            attributes:["slug","name"]
        });

        res.json({category})
    } catch (error) {
        console.log(JSON.stringify(error));
    }
}