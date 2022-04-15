import axios from 'axios';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { makePostDataLoader } from './post/dataloaders';

export const context = () => {
	return {
		userDataLoader: makeUserDataLoader(getUsers(axios)),
		postDataLoader: makePostDataLoader(getPosts(axios)),
		getUsers: getUsers(axios),
		getPosts: getPosts(axios),
	};
};
