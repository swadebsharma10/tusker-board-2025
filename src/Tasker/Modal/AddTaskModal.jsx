import { useState } from "react";

const AddTaskModal = ({onSave}) => {

  const [task, setTask] = useState({
    title: "",
    description:"",
    tags: [],
    priority: "",
    isFavorite: false 
  })


  const handleChange = (e)=>{
    
    const name = e.target.name;
    let value = e.target.value;

    if(name === "tags"){
      value = value.split(",");
    }

    setTask({
      ...task,
      [name]: value
    })

  }

  return (
    <>
      <div className="bg-black z-10 opacity-85 h-full w-full absolute top-0 left-0">
        <form className="z-10 absolute top-1/4 left-1/3 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add New Task
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="title">Title</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="title"
                id="title"
                value={task.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                value={task.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="tags">Tags</label>
                <input
                  className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                  type="text"
                  name="tags"
                  id="tags"
                  value={task.tags}
                onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="priority">Priority</label>
                <select
                  className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                  name="priority"
                  id="priority"
                  value={task.priority}
                onChange={handleChange}
                  required
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              onClick={()=>onSave(task)}
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Create new Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTaskModal;
