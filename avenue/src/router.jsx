import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ARComponent from './ARComponent'
import About from "./routes/About"
import Service from './routes/Services'
import Work from './routes/Work'
import News from './routes/News'
import Contact from './routes/Contact'
import Uniiione from './work/uniiione'
import Takami from './work/takami'
import LloydsPartOne from './work/lloyds_part_one'
import LloydsPartTwo from './work/lloyds_part_two'
import LauraSweetMonsterSeries from './work/laura_sweet_monster_series'
import LauraCyberpunkSeries from './work/laura_cyberpunk_series'
import LauraSpaceCapsuleSeries from './work/laura_space_capsule_series'
import LofficielXLouisVuitton from './work/lofficiel_china_louis_vuitton'
import LarmoireVirtualStore from './work/larmoire_virtual_store'
import AvenueJuvederm from './work/avenue_juvederm'
import Kappa from './work/kappa'
import Zhangweili from './work/zhangweili'


export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/about", element: <About/>},
    {path: "/service", element: <Service/>},
    {path: "/work", element: <Work/>},
    {path: "/news", element: <News/>},
    {path: "/contact", element: <Contact/>},
    {path: "/work/uniiione", element: <Uniiione/>},
    {path: "/work/takami", element: <Takami/>},
    {path: "/work/lloyds_part_one", element: <LloydsPartOne/>},
    {path: "/work/lloyds_part_two", element: <LloydsPartTwo/>},
    {path: "/work/laura_sweet_monster_series", element: <LauraSweetMonsterSeries/>},
    {path: "/work/laura_cyberpunk_series", element: <LauraCyberpunkSeries/>},
    {path: "/work/laura_space_capsule_series", element: <LauraSpaceCapsuleSeries/>},
    {path: "/work/lofficiel_china_louis_vuitton", element: <LofficielXLouisVuitton/>},
    {path: "/work/larmoire_virtual_store", element: <LarmoireVirtualStore/>},
    {path: "/work/avenue_juvederm", element: <AvenueJuvederm/>},
    {path: "/work/kappa", element: <Kappa/>},
    {path: "/work/zhangweili", element: <Zhangweili/>},
    {path: "/ar", element: <ARComponent/>},
    
  ])