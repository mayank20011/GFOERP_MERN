import mongoose from "mongoose";

const PurchaseSchema=new mongoose.Schema(
  {
     clientName:
     {
        type:String,
        trim: true,
        required: [true, 'Add Client Name'],
     },
    quantity:
    {
      type:String,
      required:[true, 'Enter The Quantity of milk you are offering']
    },
    fat:
    {
      type:String,
      required:[true, "Enter the Fat % in your milk"],
    },
    clr:
    {
      type:String,
      required:[true, "Enter the CLR of your milk"],
    },
    alchol:{
      type:String,
      required:[true,"Enter Alchol Percent"],
    },
    acidity:{
      type:String,
      required:[true,"Enter Acidity Percent"],
    },
    adulteration:{
      type:String,
      required:[true,"Enter Adulteration Value"],
    },
    timeStamp:{
      type:String,
      required:[true,"Enter the TimeStamp"],
    },
    whatToDo:{
      type:String,
      required:[true,"Please Tell What to do with this Batch, Accept or Reject"],
    }
  }
);
export default mongoose.model('Purchase', PurchaseSchema);