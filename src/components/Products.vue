<template>
  <div class="products">
    <h3>未來視覺實驗室記帳系統</h3>
    <!-- <h3>Blogs:{{blogs}}</h3> -->
    <div class="card">
      <div class="card-header">
        新增項目
      </div>
      <div class="card-body">
        <form class="form-inline" v-on:submit.prevent="onSubmit">
          <!-- <div class="form-group">
            <label>ID:</label>
            <input v-model="productData.id" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div> -->

          <div class="form-group">
            <label>預算編號:</label>
            <input v-model="productData.product_id" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div>

          <div class="form-group">
            <label>申請日期:</label>
            <input v-model="productData.product_date" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div>
          <div class="form-group">
            <label>核銷日期:</label>
            <input v-model="productData.product_enddate" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div>

          <div class="form-group">
            <label>項目:</label>
            <input v-model="productData.product_object" type="text" class="form-control ml-sm-2 mr-sm-4 my-2"  required>
          </div>

          <div class="form-group">
            <label>姓名:</label>
            <input v-model="productData.product_name" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>

          <div class="form-group">
            <label>價錢:</label>
            <input v-model="productData.product_price" type="text" class="form-control ml-sm-2 mr-sm-4 my-2" required>
          </div>
           <!-- -----------狀態選單------------------ -->
          <div class="form-group">
          <select id="dropdown" v-model="productData.product_status">
            <option value="">請選擇狀態</option>
            <option value="申請中">申請中</option>
            <option value="已付款">已付款</option>
          </select>
          </div>
           <!-- ----------------------------------------- -->

          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2" @click="addproduct()">新增</button>
          </div>
        </form>
      </div>
    </div>
    <div class="card mt-5">
      <div class="card-header d-flex">
          <div class="list-title">核銷清單</div>

           <div class="wrap d-flex" >
               <div style="flex-direction: row; justify-content: center;">
                <button class="btn btn-primary my-2" id="btnSubmit" @click="changeStatus(blogs)">已核銷</button>
                <button class="btn btn-primary my-2" id="btnSubmit" @click="changeTwice(blogs)">申請中</button>
                 <!-- <input class="search-bar" type="text" placeholder="搜尋" v-model="search" > -->
               </div>
           </div>
            <!-- <button class="search-button" type="submit"><i class="fa fa-search"></i></button> -->
            </div> 

      </div>  
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead style="text-align:center;">
              <tr>
                <th>
                </th>
                <th scope="col">
                  預算編號
                </th>
                <th>
                  申請日期
                </th>
                <th>
                  核銷日期
                </th>
                <th>
                  狀態
                </th>
                <th>
                  項目
                </th>
                <th>
                  姓名
                </th>
                <th>
                  金額
                </th>
                <th>
                  刪除/編輯
                </th>
              </tr>
            </thead>

              <tbody style="text-align: center;"  id="myBody">
              <tr v-for="product in sortedProducts" v-bind:key="product.id">
                <template v-if="editId == product.id">
                  <div id="checkboxes">
                <td>
                  <input type="checkbox" v-bind:id="product.id" v-bind:value="product.id" v-model="blogs">
                </td>
                  </div>
                  <td><input v-model="editProductData.product_id" type="text"></td>
                  <td><input v-model="editProductData.product_date" type="text"></td>
                  <td><input v-model="editProductData.product_enddate" type="text"></td>
                  <td><input v-model="editProductData.product_status" type="text"></td>
                  <td><input v-model="editProductData.product_object" type="text"></td>
                  <td><input v-model="editProductData.product_name" type="text"></td>
                  <td><input v-model="editProductData.product_price" type="text"></td>
                  <td>
                    <span class="icon">
                      <i  @click="onEditSubmit(product.id)" class="fa fa-check"></i>
                    </span>
                     <span class="icon">
                      <i  @click="onCancel" class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>
                <template v-else >
                  <td>
                    <input type="checkbox" v-bind:id="product.id" v-bind:value="product.id" v-model="blogs">
                  </td>
                
                  <td>
                    {{product.product_id}}
                  </td>
                  <td>
                    {{product.product_date}} 
                  </td>
                  <td>
                    {{product.product_enddate}} 
                  </td>

                  <td>
                     {{product.product_status}} 
                  </td>

                  <td>
                    {{product.product_object}}
                  </td>
                  <td>
                    {{product.product_name}}
                  </td>
                  <td>
                    ${{product.product_price}}
                  </td>
                  <td>
                     <!-- 刪除icon -->
                    <a href="#" class="icon">
                      <i v-on:click="onDelete(product.id)" class="fa fa-trash"></i>
                    </a>
                      <!-- 編輯icon -->
                    <a href="#" class="icon">
                      <i v-on:click="onEdit(product)" class="fa fa-pencil"></i>
                    </a>
                    <!-- <router-link 
                    :to="{
                      name:'ProductPage', 
                      params:{id: product.id}
                    }" 
                    class="icon"
                    >
                      <i class="fa fa-eye"></i>
                    </router-link> -->
                  </td>
                </template>
               </tr>
               </tbody>
          </table>
        </div>
      </div>
    </div>
   <!-- </div> -->
</template>

<script>
// <!-- -------JQuery----------- -->
  //  $(document).ready(function(){
  //     $("#search").on("keyup",function(){
  //     var value = $(this).val().toLowerCase();
  //     $("#myBody tr").fliter(function(){
  //    $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
  //      });
  //    });
  //  });

import db from '@/db'
import axios from 'axios'
export default {
  name: 'Products',
  data () {
    
    return {
      search:'',
      editId: '',
      productData : {
        'id' : '',
        'product_id': '',
        'product_date':'',
        'product_enddate':'',
        'product_status':'',
        'product_object': '',
        'product_name': '',
        'product_price': ''
      },
      editProductData: {
        'id' : '',
        'product_id': '',
        'product_date':'',
        'product_enddate':'',
        'product_status':'',
        'product_object': '',
        'product_name': '',
        'product_price': ''
      },
      products: [],
       blogs :[],
    }
    
  },
  created() {
    this.getProducts()
    
  },
  computed:{
    filteredProduct(){
       return this.products.fliter((product)=>{
       return product.title.match(this.search)
       })

    },
    sortedProducts(){
      return this.products.slice().sort((a,b)=>{
        return a.product_id - b.product_id
      })
    },
    
    // sortedProducts(){
    //   return this.data.filter(searchResult => searchResult.title.match(this.keyWord));
    // }
  },
  methods: { 

     getProducts() {
      // db.collection('products').get().then(querySnapshot =>{
      //   const products = []
      //   // querySnapshot.forEach((doc)=>{
      //   //   products.push(doc.data())
      //   // })
      //   const productsArray = []
      //   let i = 0
      //   querySnapshot.forEach((doc)=>{
      //     productsArray.push(doc.data())
      //     productsArray[i].id = doc.id
      //     products.push(productsArray[i])
      //     i++
      //   })

        axios.get('http://localhost:8081/product').then((response)=>{
          this.products = response.data
          console.log(response.data)
        })
        // for(let key in querySnapshot.docs){
        //   productsArray.push(querySnapshot.docs[key].data())
        //   productsArray[key].id = querySnapshot.docs[key].id
        //   products.push(productsArray[key])
        // }
    
      // })
    },

     addproduct(){
      // if(!this.productData.product_id) return false;
      // if(!this.productData.product_date) return false;
      if(!this.productData.product_enddate) return false;
      // if(!this.productData.product_object) return false;
       if(!this.productData.product_name) return false;
      // if(!this.productData.product_price) return false;

      axios.post("http://localhost:8081/create",{
      //  id : this.productData.id,
       product_id:this.productData.product_id,
       product_date:this.productData.product_date,
       product_enddate:this.productData.product_enddate,
       product_status:this.productData.product_status,
       product_object:this.productData.product_object,
       product_name:this.productData.product_name,
       product_price:this.productData.product_price,
      }).then((res)=>{
      this.productData.id = ''
      this.productData.product_id= ''
      this.productData.product_date= ''
      this.productData.product_enddate= ''
      this.productData.product_status= ''
      this.productData.product_object= ''
      this.productData.product_name= ''
      this.productData.product_price= ''
      this.getProducts(res);
      this.products.push(res.data);
      console.log("success")

    })
    },

     onSubmit(){
      console.log(this.productData.product_status)
      db.collection('products').add(this.productData).then(this.getProducts)
      this.productData.id = ''
      this.productData.product_id= ''
      this.productData.product_date= ''
      this.productData.product_enddate= ''
      this.productData.product_status= ''
      this.productData.product_object= ''
      this.productData.product_name= ''
      this.productData.product_price= ''

    //   axios.post('http://localhost:8081/create',{
    //    id : this.productData.id,
    //    product_id:this.productData.product_id,
    //    product_date:this.productData.product_date,
    //    product_enddate:this.productData.product_enddate,
    //    product_status:this.productData.product_status,
    //    product_object:this.productData.product_object,
    //    product_name:this.productData.product_name,
    //    product_price:this.productData.product_price,
    //   }).then(()=>{
    //   console.log("success")
    // })
    },
    // onDelete(product_id){
    //   db.collection('products').where('product_id', '==', product_id).get().then(querySnapshot =>{
    //     querySnapshot.forEach(doc=>{
    //       doc.ref.delete().then(this.getProducts)
    //     })
    //   })
    // }
    

    
    onDelete(id){
      // db.collection('products').doc(id).delete().then((data)=> {
      //     this.getProducts()
      // }),

      axios.delete(`http://localhost:8081/delete/${id}`).then((res)=>{
        this.getProducts(res);
        this.products.push(res.data);
        console.log("deleted")
      });
    },
    
      
    onEdit(product){
      this.editId = product.id
      this.editProductData.product_id = product.product_id
      this.editProductData.product_date = product.product_date
      this.editProductData.product_enddate = product.product_enddate
      this.editProductData.product_object = product.product_object
      this.editProductData.product_name = product.product_name
      this.editProductData.product_price = product.product_price
      this.editProductData.product_status = product.product_status
    },

    onCancel(){
      this.editId = ''
      this.editProductData.product_id = ''
      this.editProductData.product_date = ''
      this.editProductData.product_enddate = ''
      this.editProductData.product_status = ''
      this.editProductData.product_object = ''
      this.editProductData.product_name = ''
      this.editProductData.product_price = ''
    },
    
    onEditSubmit(id){
      // db.collection("products").doc(id).set(this.editProductData).then(
      //   this.getProducts)
      
        axios.put(`http://localhost:8081/update/${id}`,
        {product_id:this.editProductData.product_id,
         product_date:this.editProductData.product_date,
         product_enddate: this.editProductData.product_enddate,
         product_status:this.editProductData.product_status,
         product_object: this.editProductData.product_object,
         product_name: this.editProductData.product_name,
         product_price:this.editProductData.product_price,
         id:id
          }).then((res)=>{ 
          this.getProducts(res);
          this.products.push(res.data);
          console.log("updated");

           this.editId = ''
           this.editProductData.product_id = ''
           this.editProductData.product_date = ''
           this.editProductData.product_enddate = ''
           this.editProductData.product_status = ''
           this.editProductData.product_object = ''
           this.editProductData.product_name = ''
           this.editProductData.product_price = ''
        }).catch((err)=>{
          console.log(err)
        });
       },

// ===========================================================================================

       changeStatus(id){
          
        axios.put(`http://localhost:8081/status/${id}`,
        {
      
         product_status:this.productData.product_status,
         id:id
          }).then((res)=>{ 
          this.getProducts(res);
          this.products.push(res.data);
          console.log("status_updated");

        }).catch((err)=>{
          console.log(err)
        });
       },

// ===========================================================================================
       changeTwice(id){
        axios.put(`http://localhost:8081/status2/${id}`,
        {
      
         product_status:this.productData.product_status,
         id:id
          }).then((res)=>{ 
          this.getProducts(res);
          this.products.push(res.data);
          console.log("status_updated");

        }).catch((err)=>{
          console.log(err)
        });
       }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
.btn btn-primary {
   background-color:blue
}
.card-header{
  /* background-color: aqua; */
  flex-direction:row;
  justify-content: space-between;
}
.wrap{
  margin: 0px;
  margin-left:2em;
  /* background-color: blueviolet; */
  align-items: center;
  padding:5px;
}
.list-title{
  /* background-color: blueviolet; */
  padding: 10px;
}
.d-flex{
  display: flex;
}
.search-bar{
  border-radius: 5px;
}
.search-button{
  /* height: 30px; */
   /* width: 30px; */
  margin-left:10px;
  border-radius: 5px; 
  background-color: white;
  border-color:aliceblue;
} 
tr:hover{
  background-color:#eaeaea;
  color: grey;
  transition:0.3s;
}
.list-title{
  font-size:18px;
}
.card-header{
  font-size:18px;
}
.form-control{
height: 30px;
}

</style>
