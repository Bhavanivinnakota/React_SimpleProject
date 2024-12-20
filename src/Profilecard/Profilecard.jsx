import "./Profilecard.css"


 function Profilecard(){
    function Profile(props){
        return(
            <div className ="contained">
                <div id="left">
                <img  src ={props.url} width="300px" height="300px"/>
                </div>
                <div id="right">
                    <dl>
                        <dt><b>{props.user}</b></dt>
                        <dd>{props.role}</dd>
                    </dl>
                     <table>
                        <thead>
                       <th>Articles</th>
                       <th>Followers</th>
                       <th>Rating</th>
                     </thead>
                     <tbody>
                    <tr>
                        <td>{props.arti}</td>
                        <td>{props.follo}</td>
                        <td>{props.rate}</td>
                    </tr>
                        </tbody>
                     </table>
                     <div id="buttons">
                        <button className="chat-btn">CHAT</button>
                        <button className="follow-btn">FOLLOW</button>
                     </div>
                </div>
            </div>
        )
    }
    return(
        <div>
        <h1>Profile Cards</h1>
        <Profile url={"https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg="} user={"Manoj kumar"} role={"Senior Developer"} arti={100} follo={25000} rate={9.2}/>
        <Profile url={"https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="} user={"Harshith Reddy"} role={"Assisant Manager"} arti={100} follo={25000} rate={9.2}/>
        <Profile url={"https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg"} user={"Rohit singh"} role={"Fullstack Developer"} arti={100} follo={25000} rate={9.2}/>
        </div>
    )
 }
 export default Profilecard;