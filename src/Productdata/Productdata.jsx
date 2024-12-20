import "./Productdata.css";
function Productdata(){
    const productdata = [
        { "id": 1, "name": "Laptop", "price": "$999", "image": "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craigmdennis-205421.jpg&fm=jpg" },
        { "id": 2, "name": "Phone", "price": "$499", "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/iphone-17-series-260810340-1x1.jpg?VersionId=8MOHccDoGLfWGxQ09cWuo_c4Rl4LYiYy" },
        { "id": 3, "name": "Tablet", "price": "$299", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BqowGhfzdMpO2xRCcN-UNrlgKQiy-nFV7Q&s" }
        ]
        
    return(
        <div>
         <h1>Product Data</h1>
         {
            productdata.map((element)=>(
               <div className="product">
                <img src= {element.image} width="300px" height="300px" id="image"/>
                <h3>Name : {element.name}</h3>
                <h3>Price : {element.price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Productdata;