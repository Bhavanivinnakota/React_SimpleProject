import './gridteam.css'
const jsonData = ([
    { "id": 1, "name": "Alice", "role": "Developer" },
    { "id": 2, "name": "Bob", "role": "Designer" },
    { "id": 3, "name": "Carol", "role": "Project Manager" },
  ]);
function Gridteam(){
    return(
        <div>
          <h1>Profile Card</h1>
          
          {
            jsonData.map((element)=>(
                <div className="card">
                    <h2>Name : {element.name}</h2>
                    <h4>Role : {element.role}</h4>
                    </div>
            ))}

        </div>
    );
}

export default Gridteam;