import React from "react";
import ReactDOM from "react-dom";
import { StructuredData } from "./structured-data";

interface IAppState {
    //
    // Structured data to be displayed.
    //
    data?: any;
}

class App extends React.Component<{}, IAppState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            data: {
                hello: "world",
                a: [1, 2, 3],
            },
        };
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