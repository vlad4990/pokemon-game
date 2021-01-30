import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.jpg'

const App = () => {
    return (
        <>
            <Header
                title = 'Hello'
                descr = 'description Header'
            />
            <Layout
                title = 'Layout title 1'
                descr = 'Description Layout 1'
                id = '1'
                urlBg = {bg1}
            />
            <Layout
                title = 'Layout title 2'
                descr = 'Description Layout 2'
                colorBg = 'pink'
                id = '2'
            />
            <Layout
                title = 'Layout title 3'
                descr = 'Description Layout 3'
                id = '3'
                urlBg = {bg3}
            />
            <Footer/>
        </>
    );
}

export default App;
