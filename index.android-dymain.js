/**React 解析Json
 */
'use strict';


var React = require('react');
var ReactNative = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Navigator,
    ListView,
} = ReactNative;
import  AndroidImageView from './AndroidImageView';
import AndroidHelloView from './AndroidHelloView';
var DyMainView = React.createClass({
    /*--  lifecycle --*/
    getInitialState: function() {
        return {
            // (row1, row2) => row1 !== row2：如果两次的数据不同的话，告诉数据源该数据发生了改变
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    },
    render: function() {
        var listViewContent;
        if (this.state.dataSource.getRowCount() === 0) {
            listViewContent = <Text></Text>;
            this.getByFetch();
        } else {
            listViewContent =
                <ListView
                    ref='listview'
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    automaticallyAdjustConntentInsets={false}
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={true} />
        }


        return (
            <View style={styles.container}>
                <Text>React 解析Json</Text>
                {listViewContent}
            </View>
        );
    },



    getByFetch : function(){
        fetch('http://192.168.1.15:8081/reactlist.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.warn('getByFetch=====');
                if (responseJson.list) {
                    this.setState({
                        dataSource : this.state.dataSource.cloneWithRows(responseJson.list)
                    });
                }

            })
            .catch((error) => {
                console.error(error);
            }).done();

    },

    pressRow:function (item) {
        console.log(JSON.stringify(item));
        this.props.navigator.push({
            name:item.jSMainModuleName,
            component:AndroidImageView
        })
    },

    //渲染列表中的每一行数据
    renderRow: function(item) {
        return (
            <View>
                <View  style={styles.row}>
                    <Image
                        source={require('./img/favicon.png')}
                        style={styles.Img}
                    />

                    <View>
                        <Text style={styles.name} onPress={()=>this.pressRow(item)}>
                            {item.bundleAssetName}
                        </Text>
                        <Text style={styles.name}>
                            {item.jSMainModuleName}
                        </Text>
                        <Text style={styles.name}>
                            {item.moduleName}
                        </Text>
                    </View>
                </View>
                <View style={styles.cellBorder}></View>
            </View>
        );
    },

});

/*布局样式*/
var styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    searchView:{
        marginTop:30,
        padding:5,
        margin:5,
        fontSize:15,
        height:30,
        backgroundColor:'#EAEAEA'
    },
    row:{
        flexDirection:'row',
        padding:8,
    },
    name:{
        marginBottom:8,
        marginLeft:8,
    },
    Img:{
        width:50,
        height:50,
    },
    cellBorder:{
        height:1,
        marginLeft:2,
        backgroundColor:'#EAEAEA',
    }
});

module.exports = DyMainView;
// AppRegistry.registerComponent('helloworld', () => helloworld);