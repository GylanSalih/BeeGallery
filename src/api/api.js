

  export const getPostById = async (id) => {
    return await fetch(`https://picsum.photos/id/${id}/info`);
  };

  export const deletePostById = async (id) => {
    return await fetch(`https://picsum.photos/id/${id}/info`, {
      method: "DELETE",
    });
  };
