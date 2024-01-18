import { useGetPostById } from '@/lib/react-query/queriesAndMutations'
import { formatDateString } from '@/lib/utils';
import { Loader } from 'lucide-react';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const PostDetails = () => {

  const { id } = useParams()
  const { data: post, isPending } = useGetPostById(id || '');

  return (
    <div className="post_details-container">
      {isPending ? <Loader /> : (
        <div className="post_details-card">
            <div className="flex items-center gap-3">
                <Link to={`/profile/${post?.creator.$id}`} >
                    <img src={post?.creator?.imageUrl || '/asset/icons/profile-placeholder.svg'} alt="creator" className='rouded-full w-12 lg:h-12' />
                </Link>
                <div className="flex flex-col">
                    <p className='base-medium lg:body-bold text-light-1'>{post?.creator.name}</p>
                    <div className='flex-center gap-2 text-light-3'>
                        <p className='subtle-semibold lg:small-regular'> {formatDateString(post?.$createdAt)} </p>
                    </div>
                    -
                    <p className='subtle-semibold lg:small-regular'>{post?.creator.location}</p>
                </div>
            </div>
        </div>
      )}
      
    </div>
  )
}

export default PostDetails