import Home from './screens/Home';
import { NativeRouter, Route, Routes } from 'react-router-native';
import ChampDetails from './screens/ChampDetails';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NativeRouter>
      <StatusBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/champion/:championName' element={<ChampDetails />} />
      </Routes>
    </NativeRouter>
  );
}
