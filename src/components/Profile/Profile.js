import { useParams } from "react-router";

export default function Profile() {
  return (
    <div >
      <h1 className="text-center">User Profile </h1>
      <div className="card text-center mx-auto" style={{width:"400px"}}>
        <img className="card-img-top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">Sophia Doe</h4>
          <p className="card-text" >19 years old.</p> 
        </div>
      </div>
    </div>
  );

}
