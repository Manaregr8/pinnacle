"use client";
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, get, DataSnapshot } from 'firebase/database';
import { db } from '../../firebase';
import BlogCard from './blogsCard'; // Assuming BlogCard is already implemented
import BlogModal from './blogModel'; // Import the modal component

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

interface FirebaseBlogPost {
  title: string;
  content: string;
}

const IndexPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null); // State to hold selected post
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = ref(db, 'blogs/');
      try {
        const snapshot: DataSnapshot = await get(postsRef);
        if (snapshot.exists()) {
          const fetchedPosts: BlogPost[] = Object.entries(snapshot.val()).map(([id, post]) => {
            const blogPost = post as FirebaseBlogPost; // Type assertion
            return {
              id,
              title: blogPost.title,
              content: blogPost.content,
            };
          });
          setPosts(fetchedPosts);
        } else {
          console.log('No blog posts found');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleCardClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true); // Show modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedPost(null); // Clear selected post
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              content={post.content}
              onClick={() => handleCardClick(post)} // Handle card click
            />
          ))
        ) : (
          <p>Loading blog posts...</p>
        )}
      </div>

      {/* Modal to display full blog content */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedPost?.title || ''}
        content={selectedPost?.content || ''}
      />
    </div>
  );
};

export default IndexPage;
