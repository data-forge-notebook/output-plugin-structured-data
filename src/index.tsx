import React from "react";
import ReactDOM from "react-dom";
import { StructuredData } from "./structured-data";

interface IAppState {
    //
    // Structured data to be displayed.
    data?: any;
}

class App extends React.Component<{}, IAppState> {

    constructor(props: {}) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        window.addEventListener("message", event => {
            console.log(`Output plugin received message: `);
            console.log(event);

            const payload = event.data;
            if (payload.name === "config") {
                // 
                // Configures the plugin.
                //
                this.setState({
                    data: payload.data,
                });

                event.source?.postMessage({
                    name: "configured",
                });
            }
        });
    }

    render() {
        return (
            <StructuredData
                data={this.state.data}
                />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));