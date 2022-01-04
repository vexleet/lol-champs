import Home from './pages/Home';
import { NativeRouter, Route, Routes } from 'react-router-native';
import ChampDetails from './pages/ChampDetails';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/champion/:championName' element={<ChampDetails />} />
      </Routes>
    </NativeRouter>
  );
}
