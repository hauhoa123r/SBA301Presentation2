import react from 'react';
import ListPlayer from '../demo-class-component/ListPlayer';
import JobCard from '../features/jobs/components/JobCard';
import ViewJobListPosting from '../features/jobs/pages/ViewJobListPosting';

function App({ data }) {
  // Logic

  // UI
  return (

   <ViewJobListPosting />
  );
  //     <div className="container-fluid">
  //       <div className="row d-flex justify-content-center align-items-center mb-5" style={{ height: "100vh" }}>
  //         <div className="col-md-5 p-5 border rounded-5 mt-3 shadow " style={{ height: "100%" }}>
  //           <h2 className="mt-2 text-center">Welcome Back</h2>
  //           <p className="text-center">Sign in to track your applications and manage your account.</p>
  //           <button className="btn btn-outline-secondary w-100 mt-4">Sign in with Google</button>
  //           <button className="btn btn-outline-secondary w-100 my-4">Sign in with GitHub</button>
  //           <p className="text-center">or sign in with email</p>
  //           <form className="flex-column">
  //             <div className="mb-3">
  //               <label htmlFor="email" className="form-label">Email address</label>
  //               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="admin@gmail.com" value={data} />
  //             </div>
  //             <div className="mb-3">
  //               <label htmlFor="password" className="form-label">Password</label>
  //               <input type="password" className="form-control" id="password" placeholder="*******" />
  //             </div>
  //             <button type="submit" className="btn btn-primary">Submit</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  // );
}

export default App;
