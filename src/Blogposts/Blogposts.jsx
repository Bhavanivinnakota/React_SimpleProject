import "./Blogposts.css"
function Blogposts(){
   const datas = [
        { "id": 1, "title": "React Basics", "summary": "Learn the basics of React." },
        { "id": 2, "title": "Hooks in React", "summary": "Understanding React Hooks." },
        { "id": 3, "title": "Advanced Patterns", "summary": "Explore advanced Reactpatterns." }
        ];
    return (
        <div className="content">
            <h1>List of Blog Data</h1>
            {
                datas.map((element) => (
                    <div className="cardcontent">
                        <dl>
                       <dt> <b>Title : {element.title}</b> </dt>
                       <dd> {element.summary}</dd>
                        </dl>
                        </div>
                ))}
        </div>
    )
}
export default Blogposts