import React, { useContext } from "react";
import { Songs } from "../Context";

function DetailSong(props) {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold">Now playing</h2>
      <h2 className="text-neutral-400 text-2xl w-[402] whitespace-nowrap overflow-hidden text-ellipsis ">
        {song.name}
      </h2>
      <div className="w-[230px] h-[230px] m-auto mt-4">
        <img
          className="w-full h-full rounded-full"
          src={song.links.images[0].url}
          alt="ava"
        />
      </div>
      <div className="flex justify-evenly items-center mt-6">
        <img
          className="w-[40px] h-[40px]"
          src={song.links.images[0].url}
          alt="ava"
        />
        <span className="text-xl text-white">{song.author}</span>
      </div>
    </div>
  );
}

export default DetailSong;
