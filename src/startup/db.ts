import mongoose from "mongoose";

export class Db {
  private static connectionString: string = "mongodb://localhost:27017/TodoDb";
  public static connectToMongoDb() {
    mongoose.connect(this.connectionString, { useNewUrlParser: true })
      .then(() => { console.log("Db connection success") })
      .catch(err => {
        console.log("Db connection failed"); console.log(err);
      });
  }
}