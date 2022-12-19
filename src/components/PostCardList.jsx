import React from 'react';

import postOneImg from '../assets/images/blog-post-1.jpg';
import postTwoImg from '../assets/images/blog-post-2.jpg';
import postThereImg from '../assets/images/blog-post-3.jpg';
import PostCard from './PostCard';

const PostCardList = () => {
  const postsData = [
    {
      title: 'The ultimate guide to shopping in New York',
      desc: "Most people enjoy shopping, whether it's for clothes, food, or souvenirs. ",
      id: 1,
      date: {
        year: 2022,
        mm: 11,
        dd: 2
      },
      imgUrl: postOneImg
    },
    {
      title: 'Shop smarter - tips for finding the best deals',
      desc: 'Quarantine and self isolation created a great opportunity for us',
      id: 2,
      date: {
        year: 2022,
        mm: 2,
        dd: 19
      },
      imgUrl: postTwoImg
    },
    {
      title: 'Shop until you drop - the best sales happening now',
      desc: 'There are a few things that you can do to make shopping more enjoyable',
      id: 3,
      date: {
        year: 2021,
        mm: 4,
        dd: 23
      },
      imgUrl: postThereImg
    }
  ];

  return (
    <section className='flex mt-4 mb-12 flex-wrap justify-around gap-4'>
      {postsData.map((post) => {
        return <PostCard key={post.id} data={post} />;
      })}
    </section>
  );
};

export default PostCardList;
