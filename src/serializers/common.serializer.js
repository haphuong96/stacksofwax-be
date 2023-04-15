
/**
 * Transform main dataset 
 * @param {any[]} mainDataset Main dataset to be transformed
 * @param {Array.<{propertyName: string, data: any[]}>} childDatasetList List of child data sets used to transform mainDataset. Each dataset has a property name used to label the child data set in the main data set. 
 * @param {string} key Key of main data set. This key must be present in every mainDataset element and in every data element of every child dataset 
 * @returns 
 */
function transformAlbum(mainDataset, key, childDatasetList) {
  /**
   * Create a map of key and each main dataset object.
   */
  const keyMap = new Map();

  mainDataset.forEach((item) => {
    childDatasetList.forEach((child) => {
      item[child.propertyName] = [];
    })
    keyMap.set(item[key], item);
  })

  childDatasetList.forEach((child) => {
    child.data.forEach((row) => {
      const mainKey = row[key];
      delete row[key];
      keyMap.get(mainKey)[child.propertyName].push(row);
    });
  });

  return mainDataset;


  // let resultAlbums = new Map(); 

  // data.forEach((row) => {
  //   // album format
  //   const { artist_id, artist_name, album_id, ...rest } = row;

  //   if (resultAlbums.has(album_id)) {
  //     resultAlbums.get(album_id).artists.push({artist_id, artist_name});
  //   } else {
  //     resultAlbums.set(album_id, {
  //       album_id,
  //       ...rest,
  //       artists: [
  //         {
  //           artist_id,
  //           artist_name
  //         }
  //       ]
  //     })
  //   }
  // })

  // return Array.from(resultAlbums.values());
}

module.exports = { transformAlbum };