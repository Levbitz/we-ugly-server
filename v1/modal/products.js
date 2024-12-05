
import mongoose from 'mongoose';

const weUglySchema = mongoose.Schema({

 
    title:String,
    subCategory:String,
    availability:Boolean,
    colors: Array,
    selectedColor: String,
    sizes: Array,
    selectedSize: String,
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
var product = mongoose.model('jireh', weUglySchema)

export default product
