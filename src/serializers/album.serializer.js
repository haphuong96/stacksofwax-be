
function transformAlbum(data) {
    const { artist_id, artist_name, ...rest } = data;
    return {
      ...rest,
      artist: {
        artist_id,
        artist_name
      },
    };
}

module.exports = { transformAlbum };