/**
 * Created by jaysen.lin@foxmail.com on 2017/3/13.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';

import {observable, action, computed} from 'mobx-react';

export default class MyRNDemo extends Component {
    addTodos(task) {
        myState.todos.push({
            task: task,
            finished: false,
        })
    }
    @observable
    myState = {
        title: "",
        todos: []
    };
    @computed
    get getTodosCount() {
        return myState.todos.filter((todoItem) => {
            todoItem.findished === true;
        }).length;
    }

    @action
    changeState = () => {
        myState.title = "changed tile";
    };



    tmpText: string;

    render() {
        return (
            <View>
                <TextInput placeholder={"input task"}
                           onChangeText={(txt)=>this.tmpText=txt}
                >
                </TextInput>
                <TouchableOpacity onPress={this.addTodos(this.tmpText)}
                                  activeOpacity={0.3}>
                    <Text>
                        add task
                    </Text>
                </TouchableOpacity>
                <Text>
                    {myState.title} {myState.todos.task} complete count{this.getTodosCount} of {myState.todos.length}
                </Text>
            </View>
        );
    }
}



AppRegistry.registerComponent('MyRNDemo', () => MyRNDemo);