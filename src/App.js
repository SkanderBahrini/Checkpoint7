import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTodoForm';
import ListTask from './components/ListTask';
import Task from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Todo List</h1>
			<AddTask />
			<ListTask />
			<Task/>
		</div>
	);
};

export default App;

