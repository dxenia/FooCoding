import axios from 'axios';
import { question } from '../api-cli.js';

export const updatePost = async (baseURL, id) => {
  try {
    const currentPost = await axios.get(`${baseURL}/posts/${id}`);
    const postData = currentPost.data;

    const updatedPost = {};

    const postText = await question(
      `Enter updated post text or press enter to skip this field (currently: ${postData.data.post_text}): `
    );
    if (postText.length > 0) {
      updatedPost.post_text = postText;
    }

    const postDate = await question(
      `Enter updated post date or press enter to skip this field (currently: ${postData.data.post_date}): `
    );
    if (postDate.length > 0) {
      updatedPost.post_date = postDate;
    }

    const likes = await question(
      `Enter updated likes or press enter to skip this field (currently: ${postData.data.likes}): `
    );
    if (likes.length > 0) {
      updatedPost.likes = likes;
    }

    const comments = await question(
      `Enter updated comments or press enter to skip this field (currently: ${postData.data.comments}): `
    );
    if (comments.length > 0) {
      updatedPost.comments = comments;
    }

    const hashtags = await question(
      `Enter updated hashtags or press enter to skip this field (currently: ${postData.data.hashtags}): `
    );
    if (hashtags.length > 0) {
      updatedPost.hashtags = hashtags;
    }

    const location = await question(
      `Enter updated location or press enter to skip this field (currently: ${postData.data.location}): `
    );
    if (location.length > 0) {
      updatedPost.location = location;
    }

    const postImage = await question(
      `Enter updated post image or press enter to skip this field (currently: ${postData.data.post_image}): `
    );
    if (postImage.length > 0) {
      updatedPost.post_image = postImage;
    }

    if (Object.keys(updatedPost).length > 0) {
      const response = await axios.patch(`${baseURL}/posts/${id}`, updatedPost);
      console.log(JSON.stringify(response.data, null, 2));
    } else {
      console.log('No fields were updated.');
    }
  } catch (error) {
    console.error('Post not found.', error.message);
  }
};

export const updateUser = async (baseURL, id) => {
  try {
    const currentUser = await axios.get(`${baseURL}/users/${id}`);
    const userData = currentUser.data;

    const updatedUser = {};

    const firstName = await question(
      `Update first name or press enter to skip this field (currently: ${userData.data.first_name}): `
    );
    if (firstName.length > 0) {
      updatedUser.first_name = firstName;
    }

    const lastName = await question(
      `Update last name or press enter to skip this field (currently: ${userData.data.last_name}): `
    );
    if (lastName.length > 0) {
      updatedUser.last_name = lastName;
    }

    const email = await question(
      `Update email or press enter to skip this field (currently: ${userData.data.email}): `
    );
    if (email.length > 0) {
      updatedUser.email = email;
    }

    const gender = await question(
      `Update gender or press enter to skip this field (currently: ${userData.data.gender}): `
    );
    if (gender.length > 0) {
      updatedUser.gender = gender;
    }

    if (Object.keys(updatedUser).length > 0) {
      const response = await axios.patch(`${baseURL}/users/${id}`, updatedUser);
      console.log(JSON.stringify(response.data, null, 2));
    } else {
      console.log('No fields were updated.');
    }
  } catch (error) {
    console.error('User not found.', error.message);
  }
};
