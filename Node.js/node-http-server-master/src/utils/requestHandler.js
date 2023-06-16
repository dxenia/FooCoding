import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { getRequestData } from './getRequestData.js';
import { sendResponse } from './sendResponse.js';
import { readFiles, writeFiles } from './readFilesWriteFiles.js';
import { IncomingMessage, ServerResponse } from 'http';

/**
 * This function manage a HTTP request
 *
 * @param {IncomingMessage} request
 * @param {ServerResponse} response
 */

export const requestHandler = async (request, response) => {
  const { headers, method, url } = request;
  const { address, port } = request.socket.server.address();
  const fullEndpoint = `http://${address}:${port}${url}`;

  console.log(url);
  const path = url.split('/')[1];

  switch (path) {
    case 'users': {
      const usersPattern = new URLPattern({ pathname: '/users/:id' });
      const usersEndpoint = usersPattern.exec(fullEndpoint);
      const id = usersEndpoint?.pathname?.groups?.id;

      const users = await readFiles('./data/users.json');
      const body = await getRequestData(request);

      switch (method) {
        case 'POST':
          console.log('Creating a new user');
          const newUser = { id: users.length + 1, ...JSON.parse(body) };
          users.push(newUser);
          if (newUser) {
            await writeFiles('./data/users.json', users);
            sendResponse(response, StatusCodes.CREATED, {
              status: ReasonPhrases.CREATED,
              message: 'New user created',
              newUser,
            });
          }
          break;

        case 'GET':
          if (id) {
            console.log(`Getting user with id: ${id}`);
            const user = users.find((object) => object.id === parseInt(id));
            if (user) {
              sendResponse(response, StatusCodes.OK, {
                status: ReasonPhrases.OK,
                message: `User with id ${id} found`,
                data: user,
              });
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `User with id ${id} not found`,
              });
            }
          } else {
            console.log('Getting all users');
            sendResponse(response, StatusCodes.OK, {
              status: ReasonPhrases.OK,
              message: `Displaying all users`,
              data: users,
            });
          }
          break;

        case 'PATCH':
          if (id) {
            console.log(`Updating data of user with id: ${id}`);
            const updatedData = JSON.parse(body);
            const index = users.findIndex(
              (object) => object.id === parseInt(id)
            );
            if (index !== -1) {
              users[index] = { ...users[index], ...updatedData };
              await writeFiles('./data/users.json', users);
              sendResponse(response, StatusCodes.CREATED, {
                status: ReasonPhrases.CREATED,
                message: 'User information updated',
                data: updatedData,
              });
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `User with id ${id} not found`,
              });
            }
          } else {
            sendResponse(response, StatusCodes.BAD_REQUEST, {
              error: ReasonPhrases.BAD_REQUEST,
              message: "Insert a valid id to update a user's information",
            });
          }
          break;

        case 'DELETE':
          if (id) {
            console.log(`Deleting user with id: ${id}`);
            const index = users.findIndex(
              (object) => object.id === parseInt(id)
            );
            if (index !== -1) {
              users.splice(index, 1);
              await writeFiles('./data/users.json', users);
              sendResponse(response, StatusCodes.NO_CONTENT, users);
              console.log(`User with id ${id} deleted`);
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `User with id ${id} not found`,
              });
            }
          } else {
            sendResponse(response, StatusCodes.BAD_REQUEST, {
              error: ReasonPhrases.BAD_REQUEST,
              message: 'Insert a valid id to delete a user',
            });
          }

          break;

        default:
          sendResponse(response, StatusCodes.METHOD_NOT_ALLOWED, {
            error: ReasonPhrases.METHOD_NOT_ALLOWED,
            message: 'This method is not allowed',
          });
          break;
      }
      break;
    }

    case 'posts': {
      const postsPattern = new URLPattern({ pathname: '/posts/:id' });
      const postsEndpoint = postsPattern.exec(fullEndpoint);
      const id = postsEndpoint?.pathname?.groups?.id;

      const posts = await readFiles('./data/posts.json');
      const body = await getRequestData(request);

      switch (method) {
        case 'POST':
          console.log('Creating a new post');
          const newPost = { post_id: posts.length + 1, ...JSON.parse(body) };
          posts.push(newPost);
          if (newPost) {
            await writeFiles('./data/posts.json', posts);
            sendResponse(response, StatusCodes.CREATED, {
              status: ReasonPhrases.CREATED,
              message: 'New post created',
              data: newPost,
            });
          }
          break;

        case 'GET':
          if (id) {
            console.log(`Getting post with id: ${id}`);
            const post = posts.find(
              (object) => object.post_id === parseInt(id)
            );
            if (post) {
              sendResponse(response, StatusCodes.OK, {
                status: ReasonPhrases.OK,
                message: `Post with id ${id} found`,
                data: post,
              });
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `Post with id ${id} not found`,
              });
            }
          } else {
            console.log('Getting all posts');
            sendResponse(response, StatusCodes.OK, {
              status: ReasonPhrases.OK,
              message: `Displaying all posts`,
              data: posts,
            });
          }
          break;

        case 'PATCH':
          if (id) {
            console.log(`Updating data of post with id: ${id}`);
            const updatedData = JSON.parse(body);
            const index = posts.findIndex(
              (object) => object.post_id === parseInt(id)
            );
            if (index !== -1) {
              posts[index] = { ...posts[index], ...updatedData };
              await writeFiles('./data/posts.json', posts);
              sendResponse(response, StatusCodes.CREATED, {
                status: ReasonPhrases.CREATED,
                message: 'Post information updated',
                data: updatedData,
              });
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `Post with id ${id} not found`,
              });
            }
          } else {
            sendResponse(response, StatusCodes.BAD_REQUEST, {
              error: ReasonPhrases.BAD_REQUEST,
              message: "Insert a valid id to update a post's information",
            });
          }
          break;

        case 'DELETE':
          if (id) {
            console.log(`Deleting post with id: ${id}`);
            const index = posts.findIndex(
              (object) => object.post_id === parseInt(id)
            );
            if (index !== -1) {
              posts.splice(index, 1);
              await writeFiles('./data/posts.json', posts);
              sendResponse(response, StatusCodes.NO_CONTENT, posts);
              console.log(`Post with id ${id} deleted`);
            } else {
              sendResponse(response, StatusCodes.NOT_FOUND, {
                error: ReasonPhrases.NOT_FOUND,
                message: `Post with id ${id} not found`,
              });
            }
          } else {
            sendResponse(response, StatusCodes.BAD_REQUEST, {
              error: ReasonPhrases.BAD_REQUEST,
              message: 'Insert a valid id to delete a post',
            });
          }
          break;

        default:
          sendResponse(response, StatusCodes.METHOD_NOT_ALLOWED, {
            error: ReasonPhrases.METHOD_NOT_ALLOWED,
            message: 'This method is not allowed',
          });
          break;
      }
      break;
    }
  }
};
