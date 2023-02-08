import axios from 'axios';

export const newStories = 'https://hacker-news.firebaseio.com/v0/newstories.json';
export const story = 'https://hacker-news.firebaseio.com/v0/item/';

export const id = async () => {
    const result = await axios.get(newStories).then(({data})  => data);

    return result;
};

export const estrazione = async (id) => {
    const result = await axios.get(`${story}${id}.json`).then(({data}) => data);

    return result;
}