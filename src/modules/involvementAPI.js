export const postLike = async (id) => {
  const headersList = {
    'Content-Type': 'application/json',
  };
  const bodyContent = JSON.stringify({
    item_id: id,
  });
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes/',
    {
      method: 'POST',
      body: bodyContent,
      headers: headersList,
    },
  );
  const data = await response.text();
  // console.log(data);
  return data;
};

export const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/likes',
  );
  const likesData = await response.json();
  return likesData;
};
