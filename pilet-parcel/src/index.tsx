import * as React from "react";
import { PiletApi } from "sample-shell";
import { Link } from "react-router-dom";
import './style.css';

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.showNotification("Hello from Parcel v1 (Pilet v2)!!", {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/foo-parcel">Parcel</Link>);
  app.registerPage("/foo-parcel", Page);
  app.registerTile(() => <div className="foo-parcel">Welcome to Pilet v2 Parcel v1!</div>, {
    initialColumns: 2, 
    initialRows: 2,
  });
}
