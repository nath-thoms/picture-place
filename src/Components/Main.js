import React, { Component } from 'react';
import List from './Lists';
import Title from './Title';

class Main extends Component {

    render() {
        return <div>
            <Title title={'Todos'} />
            <List tasks={['Mow the lawn', 'walk the dog']} />
            <List tasks={['Hose the driveway', 'finish the laundry']} />
        </div>
    }

}

export default Main;