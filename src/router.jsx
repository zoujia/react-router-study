import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root, {
    loader as rootLoader,
    action as rootAction
} from './routes/root';
import ErrorPage from './error-page';
import Contact, {
    loader as contactLoader,
    action as contactAction
} from './routes/contact';
import EditContact, {
    action as editAction
} from './routes/edit';
import DestroyContact, {
    destroy as destroyAction
} from './routes/destroy';
import Index from './routes';
import ReduxIndex from './pages/Redux';

// Solution-2: create routes using JSX
export const routerUsingElements = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Root />}
            loader={rootLoader}
            action={rootAction}
            errorElement={<ErrorPage />}
        >
            <Route errorElement={<ErrorPage />}>
                <Route index={true} element={<Index />} />
                <Route
                    path="contacts/:contactId"
                    element={<Contact />}
                    loader={contactLoader}
                    action={contactAction}
                />
                <Route
                    path="contacts/:contactId/edit"
                    element={<EditContact />}
                    loader={contactLoader}
                    action={editAction}
                />
                <Route
                    path="contacts/:contactId/destroy"
                    element={<DestroyContact />}
                    action={destroyAction}
                    errorElement={<div>Oops! There was an error.</div>}
                />
                <Route
                    path="redux"
                    element={<ReduxIndex />}
                />
            </Route>
        </Route>
    )
);

// Solution-1: create routes using Object
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Index />
                    },
                    {
                        path: 'contacts/:contactId',
                        element: <Contact />,
                        loader: contactLoader,
                        action: contactAction
                    },
                    {
                        path: 'contacts/:contactId/edit',
                        element: <EditContact />,
                        loader: contactLoader,
                        action: editAction
                    },
                    {
                        path: 'contacts/:contactId/destroy',
                        element: <DestroyContact />,
                        action: destroyAction,
                        errorElement: <div>Oops! There was an error.</div>
                    },
                    // redux pages
                    {
                        path: 'redux',
                        element: <ReduxIndex />
                    }
                ]
            }
        ]
    }
]);
