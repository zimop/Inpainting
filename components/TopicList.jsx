import React from 'react'
import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { NotebookPen } from 'lucide-react';

const TopicList = () => {
  return (
    <div className = "p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className = "font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div>
            <RemoveBtn/>
            <Link href={"/editTopic/123"}>
                <NotebookPen/>
            </Link>
        </div>
    </div>
  )
}

export default TopicList