import React from "react";
import { videodata } from "./videodata";
import PaginationControls from "./PaginationControls";

function MusicVideo({ searchParams }) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "3";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const entries = videodata.slice(start, end);

  return (
    <main className="bg-bg1 min-h-screen ">
      <div className=" w-full h-full p-4 min-h-[760px] grid items-center">
        <div>
          <h1 className="text-center font-extrabold italic text-2xl font-serif ">
            Music Video
          </h1>
          <div className="w-full xl:grid grid-cols-3 gap-4 items-center mt-4  ">
            {entries.map((item) => (
              <div className=" w-full p-4" key={item.id}>
                <iframe
                  className="w-full aspect-video  rounded-xl "
                  src={`https://www.youtube-nocookie.com/embed/${item.link}?rel=0&showinfo=0&controls=1&autohide=1&modestbranding=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            ))}
          </div>
          <PaginationControls
            hasNextPage={end < videodata.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </main>
  );
}

export default MusicVideo;
