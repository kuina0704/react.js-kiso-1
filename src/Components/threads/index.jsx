import { Outlet } from "react-router-dom";

export const Thread = () => {  
  return (
    <>
     <h2>Posts</h2>
      <Outlet />
    </>
  );
}