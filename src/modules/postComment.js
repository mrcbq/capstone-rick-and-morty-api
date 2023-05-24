import fetchComments from "./fetchComments";

const postComment = async (id, username, commente) => {
    try {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xqHl95viv3D6FREdQd3p/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },      
        body: JSON.stringify({
          item_id: id,
          username: username,
          comment: commente,
        }),
      });
    } catch (error) {
      alert(error);
    }   
}

export default postComment;
