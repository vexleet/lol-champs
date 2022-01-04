import Home from './pages/Home';
import { NativeRouter, Route, Routes } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </NativeRouter>
  );
}
