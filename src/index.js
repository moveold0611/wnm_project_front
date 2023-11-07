import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

<<<<<<< HEAD
const quertClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={quertClient}>
=======
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient} >
>>>>>>> 86e53d2347052468d1890c72fc84b57bd7ee47e7
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
