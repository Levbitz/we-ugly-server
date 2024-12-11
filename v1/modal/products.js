
import mongoose from 'mongoose';

const weUglySchema = mongoose.Schema({

 
    name:String,
    category:String,
    subCategory:String,

    availability:Boolean,
    colors: Array,
    selectedColor: String,
    sizes: Array,
    selectedSize: String,
    availability:{
default:true,
type:Boolean
    },
    //"seller": "levbitz",
    count: {
      default: 1,
      type: Number
    },
    price: Number,
   description: String,
    sliders:Array ,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})



// weUglySchema.index({
//   category:'text',
//   state:'text',
//   city:'text',
//   town:'text',
//    title: 'text',
//    description: 'text',
//    state:'text',
//    city:'text',
//    town:'text' });
var product = mongoose.model('product', weUglySchema)

export default product
