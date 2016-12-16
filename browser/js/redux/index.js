import { combineReducers } from 'redux';
import users from './users';
import stories, { currentStory } from './stories';
import currentUser from './auth';

export default combineReducers({ users, stories, currentStory, currentUser });
