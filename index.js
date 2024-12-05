import express from 'express'
import { connectToDatabase } from './constants/connection.js'
import  cors from 'cors'
import bodyParser from 'body-parser'

 import ProductRouteV1  from  './v1/routes/routes.js'
// //import  ServiceRoutesV2 from  './v2/routes/routes.js'
// import ServiceRoutesV2 from './v2/services/routes.js'
// import JobsRoutesV2 from './v2/jobs/routes.js'
// import postLength from './v2/postLength/routes.js'
// import v3Routes from './v3/routes.js'


const app = express()
const port = 3000


app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.json());





app.get('/', (req, res) => {
  res.send('Hello From Sumdha Info Tec!')
})


 app.use('/api/v1' ,ProductRouteV1)
// app.use('/api/v2' ,ServiceRoutesV2)
// app.use('/api/v2' ,JobsRoutesV2)
// app.use('/api/v2' ,postLength)
// app.use('/api/v3' ,v3Routes)



connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
