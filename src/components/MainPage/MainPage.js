export default function MainPage({authed}) {
    return(
      <div>
          <h1 className="mt-5 text-center">Welcome to the homepage!</h1>
          <h3 className="text-center">{authed ? "You have successfully authed in your account! You can now enter your pages":"You are not authed! Please login in to the system"}</h3>
      </div>
    )
};


