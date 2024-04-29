import React from 'react'

const EditTopicForm = () => {
  return (
    <div>
        <form className = "flex flex-col gap-3">
            <input 
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic Title"
            >
            </input>
            <input 
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Topic description"
            >
            </input>
            <button className = "bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Update Topic
            </button>
        </form>
    </div>
  )
}

export default EditTopicForm