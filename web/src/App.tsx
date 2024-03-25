import React, { useEffect, useState } from "react";
import RouteButton from "./RouteButton";

interface Props {}

// Note: this interface is also included in BE (is there a sensible way to
// reuse that rather than duplicate here?). I've renamed this instance just
// to differentiate it for now.
interface BusData {
  id: number;
  busId: number;
  destination: string;
  minutesUntilArrival: number;
}

// JS object key names are always converted to strings?
interface UniqueBusRoutes {
  [busId: string]: boolean;
}

const App: React.FC<Props> = () => {
  const [busData, setBusData] = useState<Array<BusData> | null>(null);
  const [uniqueBusRoutes, setUniqueBusroutes] =
    useState<UniqueBusRoutes | null>(null);
  const [filterRoutes, setFilterRoutes] = useState<boolean>(false);

  useEffect(() => {
    const endpoint_url: string = "http://localhost:3000/bus-times";

    // Todo: update URL with query string - just to allow users to bookmark
    // their filter (it doesn't affect API request or reponse).
    // const url = new URL(location);
    // url.searchParams.set("route", urlQuery);
    // history.pushState({}, "", url);

    // Todo: basic error-handling for empty response etc.
    const fetchData = () => {
      fetch(endpoint_url)
        .then((response) => response.json())
        .then((response) => {
          setBusData(response);
        });
    };

    fetchData();

    const interval = setInterval(() => fetchData(), 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Get a list of unique, sorted bus routes for the current data response:
    const uniqueRoutesArray: Array<number> = [];
    busData?.forEach((busTime) => {
      if (!uniqueRoutesArray.includes(busTime.busId)) {
        uniqueRoutesArray.push(busTime.busId);
      }
    });
    uniqueRoutesArray.sort();

    const uniqueRoutesObj: UniqueBusRoutes = {};

    const currentUniqueRoutes = { ...uniqueBusRoutes };

    // Create the object of bus routes, each route is not selected by default:
    uniqueRoutesArray.forEach((route) => {
      // Check to see if the route is already selected in state, and maintain that if so:
      if (currentUniqueRoutes[String(route)] === true) {
        uniqueRoutesObj[String(route)] = true;
      } else {
        uniqueRoutesObj[String(route)] = false;
      }
    });

    setUniqueBusroutes(uniqueRoutesObj);
  }, [busData]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // Copy existing unique routes object
    const currentUniqueRoutes = { ...uniqueBusRoutes };

    // Toggle selected route's bool
    const clickedBusRoute: string = event.target?.value;
    currentUniqueRoutes[clickedBusRoute] =
      !currentUniqueRoutes[clickedBusRoute];

    // If any routes are filtered, make sure the global flag knows this:
    let flag: boolean = false;
    Object.keys(currentUniqueRoutes).forEach((route) => {
      if (currentUniqueRoutes[route] === true) {
        flag = true;
      }
    });
    setFilterRoutes(flag);

    // Set the array in state again
    setUniqueBusroutes(currentUniqueRoutes);

    event.preventDefault();
  };

  return (
    <div className="App">
      <div>
        {/* Todo: semantic markup improvements? This isn't _really_ an h1 */}
        <h1>
          Live bus times for <b>Park Road</b>
        </h1>
        {!busData && <div>Loading...</div>}
        {busData && (
          <>
            {uniqueBusRoutes && (
              <div className="ButtonContainer">
                {Object.keys(uniqueBusRoutes).map((route) => (
                  <RouteButton
                    route={route}
                    key={route}
                    selected={uniqueBusRoutes[route]}
                    onClick={handleClick}
                  />
                ))}
              </div>
            )}
            <div className="CardContainer">
              {busData.map((busTime) => {
                if (
                  filterRoutes === false ||
                  uniqueBusRoutes[busTime.busId] === true
                ) {
                  return (
                    <div className="Card" key={busTime.id}>
                      <div className="Card__Header">
                        <b>{busTime.busId}</b>
                      </div>
                      <div className="Card__Details">
                        <div className="Card__Destination">
                          To {busTime.destination}
                        </div>
                        <div>
                          {busTime.minutesUntilArrival <= 1
                            ? // Todo: could use <span> with class to highlight "Due"
                              "Due"
                            : `${busTime.minutesUntilArrival} mins`}
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
