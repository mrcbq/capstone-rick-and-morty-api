const fetchComments = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments?item_id=${id}`);
    const data = await response.json();

    if (response.ok) {
      return data;
    }
    const noComments = ['No comments yet'];
    return noComments;
  } catch (error) {
    console.log(error.message);
  }
  return data;
};

export default fetchComments;
