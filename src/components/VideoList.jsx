const videos = [
  {
    name: "Dune. Part 1",
    duration: 3,
    id: 1,
  },
  {
    name: "Dune. Part 2",
    duration: 3,
    id: 2,
  },
  {
    name: "Dune. Part 3",
    duration: 3,
    id: 3,
  },
];

export function VideoList() {
  return (
    <>
      <h1>Video List</h1>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.name}</p>
            <p>{video.duration}</p>
            <button>Like!</button>
          </div>
        );
      })}
    </>
  );
}
