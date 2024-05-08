'use client'
import React from 'react'
import { ArchiveX } from 'lucide-react'
import { useRouter } from 'next/navigation'

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm('Are you Sure?');

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok){
        router.refresh();
      }
      
    }
  }

  return (
    <>
      <button onClick={removeTopic} className="text-red-400">
          <ArchiveX/>
      </button>
    </>
  )
}

export default RemoveBtn