
function transformAlbum(data) {
  let resultAlbums = new Map(); 

  data.forEach((row) => {
    // album format
    const { artist_id, artist_name, album_id, ...rest } = row;
    
    if (resultAlbums.has(album_id)) {
      resultAlbums.get(album_id).artists.push({artist_id, artist_name});
    } else {
      resultAlbums.set(album_id, {
        album_id,
        ...rest,
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
}

module.exports = { transformAlbum };