import React, { useEffect, useState } from 'react';
import './App.css';
import { ListItem } from './components';
import { Passenger, PassengersPaginatedResponse } from './features/products';
import { http } from './services';
import { VariableSizeList as List } from 'react-window';

function App() {
  const [products, setProducts] = useState<Passenger[]>();
  const [totalPages, setTotalPages] = useState(0);

  const getProducts = async () => {
    http
      .get('/passenger?page=0&size=10')
      .then(({ data }) => {
        setProducts((data as PassengersPaginatedResponse).data);
        setTotalPages((data as PassengersPaginatedResponse).totalPages);
      })
      .catch((err) => console.log(err));
  };

  const loadMode = async () => {};
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='App'>
      {products && (
        // products.map((item, id) => <ListItem key={id} listItem={item.name} />)
        <List height={150} itemCount={1000} itemSize={() => 200} width={300}>
          {({ index, style }) => (
            <ListItem key={index} listItem={index.toString()} />
          )}
        </List>
      )}
    </div>
  );
}

export default App;
