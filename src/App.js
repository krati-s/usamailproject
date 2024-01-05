import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './pages/Root';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/AboutUs/AboutUs';
import { ContactUs } from './components/ContactUs/ContactUs';
import { FAQ } from './components/FAQ/FAQ';
import { ArticlesPage } from './components/Articles/ArticlesPage';
import PlaceOrderForm from './components/Forms/PlaceOrderForm';
import ArticleDetails from './components/Articles/ArticleComponents/ArticleDetails';
import CampaignForm from './components/Forms/CampaignForm';
import { Provider } from 'react-redux';
import store from './redux/store/store';
function App() {

  const router = createBrowserRouter([
    {
      path : '',
      element : <Root />,
      children : [
        {
          path : '',
          element : <Home />
        },
        {
          path : 'about-us',
          element : <AboutUs />
        },
        {
          path : 'contact-us',
          element : <ContactUs />
        },
        {
          path : 'faq',
          element : <FAQ />
        },
        {
          path : 'articles',
          element :<ArticlesPage />
        },
        {
          path : 'place-order',
          element : <PlaceOrderForm />
        },
        {
          path : 'get-started',
          element : <CampaignForm />
        },
        {
          path : 'article-details',
          element : <ArticleDetails />
        },
      ]
    }
  ])
  return (
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
