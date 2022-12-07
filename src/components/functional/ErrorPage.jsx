import { useRouteError } from "react-router-dom";
import '../../css/error-page.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page" id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <a href="/"><p>Go to the Home page</p></a>
        </div>
    );
}