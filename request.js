const 
request =require('request'),

requestOption={
    method:'POST',
url:'https://api.telegram.org/bot717405451:AAEMZAncqYwPHNGBAShY731Ijcf_g8raIvY/sendMessage',
body:{
    chat_id:448486440,
    text:"hi dana"
},
json:true,

}


makeRequest=()=>{
    request(requestOption, (error, response, body) =>{
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
}
makeRequest();
