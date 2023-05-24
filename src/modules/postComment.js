const postComment = async (id, username, commente) => {
  try {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        username,
        comment: commente,
      }),
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default postComment;
