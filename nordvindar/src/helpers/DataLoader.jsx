import mock_data from "../data/mock_data.json"

export const dataLoader = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mock_data)
        }, 1000);
    })

}

export const dataLoaderByCat = async (category) => {
    const data = await dataLoader();
    return data.filter((obj) => obj.category === category);
  };
  
  




// export const itemLoaderByCat