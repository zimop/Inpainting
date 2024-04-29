
import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { ArchiveX } from "lucide";

const Topics = () => {
  return (
    <>
      <div>
        <div>
          <h2>Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div>
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <ArchiveX/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topics;
