import React, { Fragment } from 'react'
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { NotebookPen } from 'lucide-react';

const getTopics = async () => {
  try{
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    })

    if (!res.ok){
      throw new Error("Failed to Fetch data")
    }
    return res.json()
  } catch (error) {
    console.log("Error loading topics:" , error)
  }
}

const TopicList = async () => {
  const {topics} = await getTopics()
  return (
    <>
      {topics.map(t => (
        <div className = "p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className = "font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>
            <div>
                <RemoveBtn id = {t._id}/>
                <Link href={`/editTopic/${t._id}`}>
                    <NotebookPen/>
                </Link>
            </div>
        </div>
      ))}
    </>
  )
}

export default TopicList