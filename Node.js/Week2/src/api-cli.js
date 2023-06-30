import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import axios from 'axios';
import { argsHandler } from './utils/argsHandler.js';
import { updatePost, updateUser } from './utils/updateResources.js';

const values = argsHandler();
const baseURL = 'http://127.0.0.1:3000';

/**
 * Ask an asynchronous question to the user and get the answer from stdin
 *
 * @param {string} query
 * @returns {Promise.<string>}
 */
export const question = async (query) => {
  const readline = createInterface({
    input: stdin,
    output: stdout,
  });

  const answer = await readline.question(query);
  readline.close();

  return answer;
};

export const promptsHandler = async () => {
  const resource =
    values.resource || (await question('Perform action on users or posts? '));
  const method =
    values.method ||
    (await question(
      'What method do you want to work with (DELETE, GET, PATCH, POST)? '
    ));

  if (!resource || !method) {
    console.log('Resource and method are both required.');
  }

  switch (resource.toLowerCase()) {
    case 'users': {
      switch (method.toUpperCase()) {
        case 'POST': {
          const newUser = {
            first_name: await question(
              'You chose to create a new user.\nEnter first name: '
            ),
            last_name: await question('Enter last name: '),
            email: await question('Enter email: '),
            gender: await question('Enter gender: '),
          };
          const response = await axios.post(`${baseURL}/users`, newUser);
          console.log(JSON.stringify(response.data, null, 2));

          break;
        }

        case 'GET': {
          if (values.id) {
            try {
              const response = await axios.get(`${baseURL}/users/${values.id}`);
              console.log(JSON.stringify(response.data, null, 2));
            } catch (error) {
              console.error('User not found.', error.message);
            }
            return;
          } else if (values.all) {
            const response = await axios.get(`${baseURL}/users`);
            console.log(JSON.stringify(response.data, null, 2));
            return;
          } else {
            const select = await question(
              'You chose GET, do you want to display all users, or by id? (id/all) '
            );

            try {
              if (select === 'id') {
                const id = await question('Enter the user ID: ');

                const response = await axios.get(`${baseURL}/users/${id}`);
                console.log(JSON.stringify(response.data, null, 2));
              } else if (select === 'all') {
                const response = await axios.get(`${baseURL}/users`);
                console.log(response.data);
              }
            } catch (error) {
              console.error('User not found.', error.message);
            }

            break;
          }
        }

        case 'PATCH': {
          const id =
            values.id ||
            (await question("You chose PATCH, enter the user's id: "));
          updateUser(baseURL, id);

          break;
        }

        case 'DELETE': {
          try {
            const id =
              values.id ||
              (await question("You chose DELETE, enter the user's id: "));

            await axios.delete(`${baseURL}/users/${id}`);
            console.log(`User with id ${id} deleted successfully.`);
          } catch (error) {
            console.error(`User not found.`, error.message);
          }

          break;
        }

        default:
          console.log('Invalid method.');

          break;
      }

      break;
    }

    case 'posts': {
      switch (method.toUpperCase()) {
        case 'POST': {
          const newPost = {
            user_id: await question(
              'You chose to create a new post.\nEnter user id: '
            ),
            post_text: await question('Enter post text: '),
            post_date: await question('Enter post date: '),
            likes: await question('Enter amount of likes: '),
            comments: await question('Enter amount of comments: '),
            hashtags: await question('Enter hashtags: '),
            location: await question('Enter location: '),
            post_image: await question('Enter post image: '),
          };
          const response = await axios.post(`${baseURL}/posts`, newPost);
          console.log(JSON.stringify(response.data, null, 2));

          break;
        }

        case 'GET': {
          if (values.id) {
            try {
              const response = await axios.get(`${baseURL}/posts/${values.id}`);
              console.log(JSON.stringify(response.data, null, 2));
            } catch (error) {
              console.error('User not found.', error.message);
            }
            return;
          } else if (values.all) {
            const response = await axios.get(`${baseURL}/posts`);
            console.log(JSON.stringify(response.data, null, 2));
            return;
          } else {
            const select = await question(
              'You chose GET, do you want to display all posts, or by id? (id/all) '
            );
            try {
              if (select === 'id') {
                const id = await question('Enter the post ID: ');

                const response = await axios.get(`${baseURL}/posts/${id}`);
                console.log(JSON.stringify(response.data, null, 2));
              } else if (select === 'all') {
                const response = await axios.get(`${baseURL}/posts`);
                console.log(JSON.stringify(response.data, null, 2));
              }
            } catch (error) {
              console.error('User not found.', error.message);
            }

            break;
          }
        }

        case 'PATCH': {
          const id =
            values.id ||
            (await question("You chose PATCH, enter the post's id: "));
          updatePost(baseURL, id);

          break;
        }

        case 'DELETE': {
          try {
            const id =
              values.id ||
              (await question("You chose DELETE, enter the post's id: "));
            await axios.delete(`${baseURL}/posts/${id}`);
            console.log(`Post with id ${id} deleted successfully.`);
          } catch (error) {
            console.error(`Post not found.`, error.message);
          }

          break;
        }
        default:
          console.log('Invalid method.');

          break;
      }

      break;
    }
    default:
      if (resource !== '') {
        console.log('Invalid resource.');
      }

      break;
  }
};

promptsHandler();
