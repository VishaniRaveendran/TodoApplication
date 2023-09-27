import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { Box, CircularProgress, Container, IconButton, ThemeProvider, createTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import TodoDetail from './TodoDetail';

const Todos = ({ }) => {
  const theme = createTheme({
    components: {

      MuiPagination: {
        styleOverrides: {
          root: {
            button: {
              color: '#fff',
            },
          },
        },
      }
    },
  });

  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;
  const [isLoading, setIsLoading] = useState(false);


  const [selectedTodoId, setSelectedTodoId] = useState(null); // State to manage the selected todo ID

  const handleTodoClick = (todoId) => {
    setSelectedTodoId(todoId); // Set the selected todo ID when a row is clicked
  };

  const handleCloseTodoDetail = () => {
    setSelectedTodoId(null); // Reset the selected todo ID when closing the dialog
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data)); setIsLoading(false);

  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <ThemeProvider theme={theme}>
      <div className="todo-container">
        <Container sx={{ mt: 25 }}>


          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Todos</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? <p>Loading...</p> : null}
                {currentTodos.map((todo) => (
                  <TableRow key={todo.id} onClick={() => handleTodoClick(todo.id)}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell>
                      {todo.completed ? <IconButton size='small'><CheckIcon color="success" fontSize="small" /></IconButton> : <IconButton size='small'><ClearIcon color="warning" fontSize="small" /></IconButton>}

                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 4 }}>
            <Pagination
              classes={{ ul: 'MuiPagination-ul' }}
              variant="outlined"
              color="primary"
              count={Math.ceil(todos.length / todosPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ mb: '5' }}
            />
          </Box>
        </Container>
        <TodoDetail todoId={selectedTodoId} onClose={handleCloseTodoDetail} />

      </div >
    </ThemeProvider>
  );
};

export default Todos;
