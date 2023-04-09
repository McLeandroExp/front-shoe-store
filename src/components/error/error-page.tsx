import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  }
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Unknown error</i>
      </p>
    </div>
  );
}
