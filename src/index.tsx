import React from "react";
import ReactDOM from "react-dom";
import { StructuredData } from "./structured-data";
import { connect } from "./host-communication-bridge";

interface IAppState {
    //
    // Structured data to be displayed.
    //
    data?: any;
}

class App extends React.Component<{}, IAppState> {

    constructor(props: {}) {
        super(props);

        this.state = {};
    }

    async componentDidMount() {
        // Connects to the visualization host.
        await connect({
            // Configures the plugin.
            configure: async (options) => {
                this.setState({
                    data: options.data,
                });
            },
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