// // 加载 HTTP 模块
// const http = require("http");
// const ip = "127.0.0.1";
// const port = 8081;

// // 创建 HTTP 服务器
// const server = http.createServer((request, response) => {
// response.end("Hellow From NodeJS Server");
// });

// // 监听 3000 端口的请求，注册一个回调函数记录监听开始
// server.listen(port, ip, () => {
//   console.log(`服务器运行于 http://${ip}:${port}/`);
// });


const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  user :'root',
  host: 'localhost',
 password: 'max20160621',
 database:'products'
});

app.post("/create",(req,res) => {
  // const id = req.body.id
  const product_id = req.body.product_id;
  const product_date = req.body.product_date;
  const product_enddate = req.body.product_enddate;
  const product_status = req.body.product_status;
  const product_object = req.body.product_object;
  const product_name = req.body.product_name;
  const product_price = req.body.product_price;

db.query('INSERT INTO product (product_id, product_date, product_enddate, product_status, product_object, product_name, product_price) VALUES(?,?,?,?,?,?,?)',
[product_id, product_date, product_enddate, product_status, product_object, product_name, product_price],
(err,result)=>{
  if(err){
    console.log(err);
  }else{
    res.send("Values Inserted");
  }
}
);
});


    app.get("/product",(req,res) =>{
      db.query("SELECT * FROM product",
      (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

    app.delete('/delete/:id',(req,res) => {
      const id = req.params.id;
      db.query("DELETE FROM products.product WHERE id = ?", id,(err,result) => {
        if(err){
          console.log(err);
        }else{
          res.send(result);
        }
      });
    });


    app.put("/update/:id",(req,res) => {

        const id = req.body.id
       const product_id = req.body.product_id;
        const product_date = req.body.product_date;
        const product_enddate = req.body.product_enddate;
       const product_status = req.body.product_status;
       const product_object = req.body.product_object;
        const product_name = req.body.product_name;
       const product_price = req.body.product_price;

      console.log(req.body);
 
     db.query("UPDATE products.product SET product_id = "+ product_id +", product_date = '"+ product_date +"', product_enddate = '"+ product_enddate +"', product_status = ' "+ product_status +"', product_object= ' "+ product_object +"', product_name=  ' "+ product_name +"', product_price=  ' "+ product_price +"' WHERE id="+ id +" ;",
        (err,result) => {
          if(err){
           console.log(err);
         }else{
            res.send(result);
          }
        });
    });

// -===================================================================
    app.put("/status/:id",(req,res) => {

     const id = req.body.id;
    
    console.log(req.body);

   db.query("UPDATE products.product SET  product_status = '已核銷' WHERE id in ("+ id +" );",
      (err,result) => {
        if(err){
         console.log(err);
       }else{
          res.send(result);
        }
      });
  });

  // ===========================================================================
  app.put("/status2/:id",(req,res) => {

    const id = req.body.id;
   
   console.log(req.body);

  db.query("UPDATE products.product SET  product_status = '申請中' WHERE id in ("+ id +" );",
     (err,result) => {
       if(err){
        console.log(err);
      }else{
         res.send(result);
       }
     });
 });


  

   // db.query("UPDATE products.product SET product_id = "+ product_id +", product_date = "+ product_date +", product_enddate = 6, product_status ='申請中', product_object = 6, product_name = 6, product_price = 6 WHERE id=17;",
      //  (err,result) => {
      //    if(err){
      //     console.log(err);
      //   }else{
      //      res.send(result);
      //    }
      //  });



      // db.query("UPDATE products.product SET product_id=" + product_id+ ", product_date=5, product_enddate=5, product_status='已付款', product_object=5, product_name=5, product_price=5 WHERE id=16;"
      // ,(err,result) => {
      //   if(err){
      //     console.log(err);
      //   }else{
      //     res.send(result);
      //   }
      // });


  // app.delete("/delete:product_id",(req,res)=>{
  //    db.query('DELETED from product WHERE product_id =:product_id',
  //     (err,result)=>{
  //       if(err){
  //       console.log(err);
  //      }else{
  //        res.send("Values deleted");
  //       }
  //      }
  //      );
  //   })


app.listen(8081,() => {
  console.log("OK Runnig your server on port 8081")
})
