import { createContext, useEffect, useState } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";

/*
  context share data without passing props
  */
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { data, fetchError, isLoading } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data]); // run only when data changes, i dont understand why data need to be here???

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]); //run only posts, search changes

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        fetchError,
        isLoading,
        posts,
        setPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Only one default export allowed per module
//you can import that default export by omitting the curly braces:
export default DataContext;
