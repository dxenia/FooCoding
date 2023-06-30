import { readFile, writeFile } from 'node:fs/promises';

export async function readFiles(path) {
  try {
    const data = await readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function writeFiles(path, data) {
  try {
    await writeFile(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(error);
  }
}
