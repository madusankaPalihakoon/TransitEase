import { Outlet, Link } from "react-router-dom";
export default function Employee() {
  return (
    <div className=" flex w-full p-4 justify-start h-fit flex-wrap gap-2">
      <h2>Employee</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum
      dignissimos nostrum veniam ipsa, rem vero necessitatibus at delectus
      officiis perferendis et quia tenetur quod animi reiciendis quam sint sunt?
      <Link to="add">Add Employee</Link>
      <Outlet />
    </div>
  );
}
