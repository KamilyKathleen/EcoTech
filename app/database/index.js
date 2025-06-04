import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexão com o MongoDB estabelecida com sucesso.")
    } catch (error) {
        throw new Error("Erro ao conectar ao MongoDb.");
    }
}

export default connectToDatabase;