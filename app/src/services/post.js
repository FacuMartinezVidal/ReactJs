function getAll() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((parsedResponse) => parsedResponse)
    .catch((error) => {
      console.error("[getAllPosts] - ERROR: ", error);
      return [];
    });
}
getAll();
