
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
    //"specifications": "3 In 1 Pack of Men's Cotton T-shirts",
    description: String,
    sliders:Array ,
  
 
//   uid:String, 
//   active: Boolean,
//   category:String,
//   title:String,
//   userId:String,
//   type:String,
//   description:String,
//   //job specific
//   qualifications:String,
//   exprience:String,
//   jobType:String,
//   skills:Array,
//   workPlaceType:String,
//   timeOpen:String,
//   timeClose:String,
//   workOnSunday:Boolean,
//   openingTime:String,
//   closingTime:String,
//   servicesProvided:String,
// isGovernmentJob:{
//     type:Boolean,
//     default:false
// },
//   address: String,
//   country:String,
//   state:String,
//   city:String,
//   town:String,
 
//   adID:String,
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
