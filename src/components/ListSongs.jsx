import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Songs } from "../Context";

function ListSongs(props) {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-auto">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Titles</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <FontAwesomeIcon icon={faDownload} />
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song) => (
            <tr
              key={song.id}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-[#475569] hover:text-[#59ead4] cursor-pointer ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{song.id + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
