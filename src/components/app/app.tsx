import {
  ConstructorPage,
  Feed,
  ForgotPassword,
  Login,
  NotFound404,
  Profile,
  ProfileOrders,
  Register,
  ResetPassword
} from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';

import {
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { ProtectedRoute } from '../protected-route';

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();

  return (
    <>
      <Routes location={background || location}>
        <Route
          path='/'
          element={
            <>
              <div className={styles.app}>
                <AppHeader />
                <ConstructorPage />
              </div>
              <Outlet />
            </>
          }
        />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reset-password'
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFound404 />} />
        <Route
          path='/feed/:number'
          element={
            <>
              <div className={styles.app}>
                <AppHeader />
                <ConstructorPage />
              </div>
              <Outlet />
            </>
          }
        />
        <Route path='/ingredients/:id' element={<IngredientDetails />} />
        <Route
          path='/profile/orders/:number'
          element={
            <ProtectedRoute>
              <>
                <div className={styles.app}>
                  <AppHeader />
                  <ConstructorPage />
                </div>
                <Outlet />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>

      {background && (
        <Routes>
          {/* <Route
            path='/feed/:number'
            element={
              <Modal title='Order Info' onClose={() => {}}>
                <OrderInfo />
              </Modal>
            }
          /> */}
          <Route
            path='/ingredients/:id'
            element={
              <Modal
                title='Детали ингредиента'
                onClose={() => {
                  navigate(-1);
                }}
              >
                <IngredientDetails />
              </Modal>
            }
          />
          {/* <Route
            path='/profile/orders/:number'
            element={
              <ProtectedRoute>
                <Modal title='Order Info' onClose={() => {}}>
                  <OrderInfo />
                </Modal>
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      )}
    </>
  );
};
export default App;
