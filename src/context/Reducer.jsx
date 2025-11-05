/* --------------------- nochmal bearbeiten --------------------- */
function galleryReducer(state, action) {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
        currentlyLoadedPosts: action.payload.length,
      };
    case "ADD_POST":
      console.log(state);
      return {
        ...state,
        openUi: true,
        // posts: [...state.posts, action.payload],
      };
    case "DELETE_POST":
      return {
        ...state, // wir holen das was da ist kopieren es ab mit ...state
        isLoading: true,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case "HANDLE_ERROR":
      return {
        ...state,
        error: action.payload || true,
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                title: action.payload.title,
                body: action.payload.body,
              }
            : post
        ),
      };
    case "SET_FILTERED_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "SORT_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
      case "SET_LIMIT":
        return {
          ...state,
          limit: action.payload,
        };
    case "SET_USER_FILTER":
      return {
        ...state,
        userId: action.payload,
      };
      case "CLEAR_USER_ID":
        return {
          ...state,
          userId: "",
          selectedUserId: "",
        };
    case "TOGGLE_ADD_POST_MODAL":
      return {
        ...state,
        openUi: action.payload,
      };
    default:
      throw new Error("Error in Reducer something went wrong" + action.type);
  }
}

export default galleryReducer;
