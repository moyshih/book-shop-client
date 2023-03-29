import { useRouteError } from "react-router-dom";
import './ErrorPage.scss';

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="error-page-container">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Error: {error.statusText || error.message}</i>
            </p>
        </div>
    );
}