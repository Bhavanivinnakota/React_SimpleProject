import "./Userprofile.css"
function Userprofile(){
   const profile= [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" },
    { "id": 3, "name": "Alice Johnson", "email": "alice@example.com" }
    ]
    return(
        <div>
            <h1>User-Profile card</h1>
            {
                profile.map((element)=>(
            <div className="profilecards">
                <h3 id="user">UserName : {element.name}</h3>
                 <h5>Email: {element.email}</h5>
            </div>
))}
        </div>
    )
}

export default Userprofile;