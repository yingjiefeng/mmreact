import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text, View,TextInput } from 'react-native';

class UselessTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '妹妹' };
    }

    onSearchPress (event) {
       console.log('onSearchPress==='+this.state.text);
    }
    render() {
        return (
            <View  style={styles.row}>
                <TextInput
                    style={{height: 50,width:250, borderColor: '#05a5d1', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Text
                    onPress={this.onSearchPress.bind(this)}
                    style={{height: 40,width:80,paddingTop:10,paddingLeft:25,paddingBottom:10,color:'#ffffff',backgroundColor:'#fc5677'}}
                >搜索</Text>
            </View>
        );
    }
}

/*布局样式*/
var styles = StyleSheet.create({

    row:{
        flexDirection:'row',
        margin:10,
    },

});
module.exports = UselessTextInput;
// App registration and rendering
// AppRegistry.registerComponent('helloworld', () => UselessTextInput);