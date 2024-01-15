import Loader from '@/components/ui/shared/Loader';
import PostCard from '@/components/ui/shared/PostCard';
import { appwriteConfig } from '@/lib/appwrite/config';
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';
import React from 'react'

const Home = () => {

  const { data: posts, isPending: isPostLoading, isError: isErrorPosts } = useGetRecentPosts();
  console.log('this is the post: ', posts)
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          Home
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Feed
            { isPostLoading && !posts ? (
              <Loader />
            ) : (
              <ul className="flex flex-col flex-1 gap-9 w-full">
                { posts?.documents.map(( post: Models.Document ) => (
                  <PostCard key={post.caption} post={post} />
                ))}
              </ul>
            )}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home