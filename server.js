((express, server,bodyParser, fs)=>{
    server.use(bodyParser.urlencoded({extended:true
    }));
    server.use(express.static("pub"));
    server.get('/',(req, res)=>{
    fs.readFile('./templates/home.html',(err,results)=>{
        res.send(results.toString());
    });

    });
    server.get('/success/:orderID',(req,res)=>{
        let orderID = req.params.orderID;
    });
    server.get('/cancel/:orderID',(req,res)=>{
        let orderID = req.params.orderID;
    });
    server.get('/orderdeails/:orderID',(req,res)=>{
        let orderID = req.params.orderID;
    });
    server.get('/refund/:orderID',(req,res)=>{
        let orderID = req.params.orderID;
    });
    server.get('/recurring_success/:planID',(req,res)=>{
        let planID = req.params.planID;
    });
    server.get('/recurring_cancel/:planID',(req,res)=>{
        let planID = req.params.planID;
    });
    server.get('/recurring_orderdetails/:agreementID',(req,res)=>{
        let agreementID = req.params.agreementID;
    });
    server.post('/buysingle',(req,res)=>{
    let quantity = req.body.Quantity;

    });
    server.post('/buyrecurring',(req,res)=>{

    });

    server.listen(8080,'localhost',(err)=>{
        console.log((err || 'server online'));
    });

})
(
    require('express'),
    require('express')(),
    require('body-parser'),
    require('fs')
);




