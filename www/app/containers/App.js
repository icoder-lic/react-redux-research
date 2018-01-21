import React from 'react';
//计数器
import Counter from "../components/counter";
//调查问卷
import Research from "../components/research";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Counter></Counter>
                <hr />
                <Research></Research>
            </div>
        );
    }
}
