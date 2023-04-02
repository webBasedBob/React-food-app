export const getRestaurants = (latLng, mapObj, mapState) => {
  return new Promise((resolve, reject) => {
    const location = new window.google.maps.LatLng(latLng);
    const request = {
      query: "shawarma",
      openNow: false,
      location: location,
      radius: 500,
    };
    const callback = (results, status) => {
      let filteredResults = results.filter((address) => {
        return address.formatted_address.includes(mapState.city);
      });

      resolve(cleanRestaurantsData(filteredResults));
    };
    let service = new window.google.maps.places.PlacesService(mapObj);
    service.textSearch(request, callback);
  });
};

const cleanRestaurantsData = (restaurants) => {
  const cleanedData = restaurants.map((restaurant) => {
    return {
      name: restaurant.name,
      latLng: JSON.parse(JSON.stringify(restaurant.geometry.location)),
      rating: restaurant.rating,
      address: restaurant.formatted_address,
      placeId: restaurant.place_id,
    };
  });
  return cleanedData;
};
