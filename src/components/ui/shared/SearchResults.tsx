import { Models } from 'appwrite'
import { Loader } from 'lucide-react';
import React from 'react'
import GridPostList from './GridPostList';
import { searchPosts } from '@/lib/appwrite/api';


type SearchedResultProps = {
    isSearchFetching: boolean,
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchedResultProps ) => {

    if(isSearchFetching) return <Loader />;

    if(searchedPosts && searchedPosts.documents.length > 0) return (
        <GridPostList posts={searchPosts.documents} />
    )

  return (
    <p className="text-light-4 text-center w-full">No results found</p>
  )
}

export default SearchResults