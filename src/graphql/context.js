import axios from 'axios';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';

export const context = () => {
	return {
		userDataLoader: makeUserDataLoader(getUsers(axios)),
		getUsers: getUsers(axios),
		getPosts: getPosts(axios),
	};
};
