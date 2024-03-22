import { useEffect, useState } from "react";

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

const App: React.FC<Props> = () => {
  const [busData, setBusData] = useState<Array<BusData> | null>(null);

  useEffect(() => {
    const endpoint_url = "http://localhost:3000/bus-times";

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

  return (
    <div className="App">
      <div>
        {/* Todo: semantic markup improvements? This isn't _really_ an h1 */}
        <h1>
          Live bus times for <b>Park Road</b>
        </h1>
        {busData && (
          <div className="CardContainer">
            {busData.map((busTime) => (
              <div className="Card" key={busTime.id}>
                <div className="Card__Header">
                  <b>{busTime.busId}</b>
                </div>
                <div className="Card__Details">
                  <div>To {busTime.destination}</div>
                  <div>
                    {busTime.minutesUntilArrival <= 1
                      ? // Todo: could use <span> with class to highlight "Due"
                        "Due"
                      : `${busTime.minutesUntilArrival} mins`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
