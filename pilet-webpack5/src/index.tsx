import * as React from "react";
import { PiletApi } from "sample-shell";
import { Link } from "react-router-dom";
import './style.css';

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.showNotification("Hello from Webpack v5 (Pilet v2)!!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/foo-wp5">Webpack 5</Link>);
  app.registerPage("/foo-wp5", Page);
  app.registerTile(() => <div className="foo-wp5">Welcome to Pilet v2 Webpack v5!</div>, {
    initialColumns: 2, 
    initialRows: 2,
  });
}
