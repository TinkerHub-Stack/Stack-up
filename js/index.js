import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js'
  import{ getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js'
  const databaseobject={
    database:"https://e-commerce-13450-default-rtdb.asia-southeast1.firebasedatabase.app/"
  }
const app = initializeApp(databaseobject)
const database = getDatabase(app)
const logindata = ref(database,'login')

const username =document.getElementById("recipient-name1")
const password = document.getElementById("recipient-password1")
const submit=document.getElementById("submitt")
submit.addEventListener('click',function(){
 let value1 = username.value
 let value2=password.value
 const userData = {
  username: value1,
  password: value2
};
 push(logindata,userData)
 .then(() => {
  console.log('Data successfully pushed to Firebase');
})
.catch((error) => {
  console.error('Error pushing data to Firebase:', error);
});

})

