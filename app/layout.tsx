import './globals.css';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </body>
      </html>
  );
}
