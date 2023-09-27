import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const TodoDetail = ({ todoId, onClose }) => {
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (todoId) {
            setIsLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                .then((response) => response.json())
                .then((data) => setTodo(data)); setIsLoading(false);
        }
    }, [todoId]);

    return (
        <Dialog open={!!todoId} onClose={onClose}>

            {todo ? (
                <>
                    <DialogTitle>Todo Details</DialogTitle>
                    <DialogContent>
                        <p><strong>Title:</strong> {todo.title}</p>
                        <p><strong>ID:</strong> {todo.id}</p>
                        <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Incomplete'}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </>
            ) : (
                <DialogContent>Loading...</DialogContent>
            )}
        </Dialog>
    );
};

export default TodoDetail;
