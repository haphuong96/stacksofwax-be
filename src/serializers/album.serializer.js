
function transformAlbum(data) {
  let resultAlbums = new Map(); 

  data.forEach((row) => {
    // album format
    const { artist_id, artist_name, album_id, ...rest } = row;
    
    if (resultAlbums.has(album_id)) {
      resultAlbums.get(album_id).artists.push({artist_id, artist_name});
    } else {
      resultAlbums.set(album_id, {
        ...rest,
        album_id,
        artists: [
          {
            artist_id,
            artist_name
          }
        ]
      })
    }
  })

  return Array.from(resultAlbums.values());
    // const { artist_id, artist_name, ...rest } = data;

    // return {
    //   ...rest,
    //   artist: {
    //     artist_id,
    //     artist_name
    //   },
    // };
}

module.exports = { transformAlbum };