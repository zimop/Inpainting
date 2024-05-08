import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    })

    if (!res.ok){
      throw new Error('Failed to fetch topic')
    }
    console.log(res.json())
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const EditTopic = async ({params}) => {
  const {id} = params
  const {topic} = await getTopicById(id);
  const {title, description} = {topic};
  console.log(params)
  console.log(id)
  return (
    <div>
        <EditTopicForm id = {id} title={title} description={description}>
          
        </EditTopicForm>
    </div>
  )
}

export default EditTopic