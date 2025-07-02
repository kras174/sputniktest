import './App.css';

import ProductCart from './components/ProductCart';

function App() {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold underline">Sputnik test</h1>
      <div className="flex justify-center adaptive gap-4">
        <ProductCart title="Product Name" origin="Product Origin" />
        <ProductCart title="Product Name" origin="Product Origin" />
        <ProductCart title="Product Name" origin="Product Origin" />
      </div>
    </div>
  );
}

export default App;
