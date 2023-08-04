const { PrismaClient }=  require( '@prisma/client')
const prisma = new PrismaClient() 


module.exports = class payment{
    async list(req, res){
        return res.json(await prisma.payment_method.findMany({
            include:{
                users: true
            }
        }))
    }

    async create(data, req, res){
        try {
            const savedPayment = await prisma.payment_method.create({
                data:{
                    name_onCard: data.name_onCard,
                    card_number: data.card_number,
                    exp_month: data.exp_month,
                    exp_year: data.exp_year,
                    cvv: data.cvv,
                    userId:req.user.id
                    // users: data.userId
                    // users: {
                    //     connect: {
                    //         id: data.user.id, // Replace with the actual user ID or use the correct property based on your data structure
                    //     },
                    // },
                },
            })
            return res.json ({
                payment: savedPayment,
                msg: "Create Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async update(id, data, req, res){
        try {
            const updatePayment = await prisma.payment_method.update({
                where:{
                    id: Number(id)
                },
                data:{
                    name_onCard: data.name_onCard,
                    card_number: data.card_number,
                    exp_month: data.exp_month,
                    exp_year: data.exp_year,
                    cvv: data.cvv
                },
            })
            return res.json ({
                user: updatePayment,
                msg: "Update Successful"
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Internal Server error"})
        }
    }

    async delete(id, req, res){
        try {
            return res.json({
                data: await prisma.payment_method.delete({
                    where:{
                        id: Number(id)
                    }
                }),
                msg: "Delete Successful"
            })
        } catch (error) {
            return res.status(500).json({msg: "Item not found"})
        }
    }
}

// const crypto = require('crypto-js');
// const prisma = require('./path-to-your-prisma-instance'); // Replace with the correct path

// async function create(data, req, res) {
//     try {
//         // Encrypt sensitive data before storing in the database
//         const encryptedData = {
//             name_onCard: encryptData(data.name_onCard),
//             card_number: encryptData(data.card_number),
//             exp_month: encryptData(data.exp_month.toString()), // Convert to string before encryption
//             exp_year: encryptData(data.exp_year.toString()),   // Convert to string before encryption
//             cvv: encryptData(data.cvv),
//             userId: encryptData(data.userId.toString()),       // Convert to string before encryption
//         };

//         const savedPayment = await prisma.payment_method.create({
//             data: encryptedData,
//         });

//         return res.json({
//             payment_method: savedPayment,
//             msg: "Create Successful",
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ msg: "Internal Server error" });
//     }
// }

// // Encryption function using AES symmetric encryption
// function encryptData(data) {
//     // Replace 'your-secret-key' with a strong and secure encryption key
//     const secretKey = 'your-secret-key';
//     return crypto.AES.encrypt(data, secretKey).toString();
// }

// // Decryption function using AES symmetric encryption
// function decryptData(encryptedData) {
//     const secretKey = 'your-secret-key';
//     const bytes = crypto.AES.decrypt(encryptedData, secretKey);
//     return bytes.toString(crypto.enc.Utf8);
// }
