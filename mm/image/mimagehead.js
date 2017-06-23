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
    ListView,
    NativeModules
} = ReactNative;

let jsoupModule = NativeModules.ReactBaseJsoupModule;
var mimagehead = React.createClass({
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
                    renderRow={this.renderRow}
                    automaticallyAdjustConntentInsets={false}
                    keyboardShouldPersistTaps={true}
                    showsVerticalScrollIndicator={true} />
        }


        return (
            <View style={styles.container}>
                {listViewContent}
            </View>
        );
    },



    getByFetch : function(){
        // fetch('http://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.warn('getByFetch=====');
        //         if (responseJson.movies) {
        //             this.setState({
        //                 dataSource : this.state.dataSource.cloneWithRows(responseJson.movies)
        //             });
        //         }
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     }).done();
        //调用native module过去数据
        // var params = {
        //     url:'http://m.mm131.com',
        //     pageNo:1
        // };
        jsoupModule.mimagehead('http://m.mm131.com/xinggan/2847.html',(status,data)=>{
            //成功
            console.log('mimagehead=='+data);
            var data = JSON.parse(data);
            if (data.list) {
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(data.list)
                });
            }
        }, (status,exception)=>{
           //失败
            console.log('mimagehead=='+exception);
            });
    },

    //渲染列表中的每一行数据
    renderRow: function(item) {
        return (
            <View>
                <View  style={styles.row}>
                    <Text style={styles.name}>
                        {item.alt}
                    </Text>
                    <Text style={styles.name}>
                        {item.postmeta}
                    </Text>
                    <Text style={styles.name}>
                        {item.meta}
                    </Text>
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
        flexDirection:'column',
        padding:1,
    },
    name:{
        marginBottom:8,
        marginLeft:8,
    },
    Img:{
        flex:1,
        height:600,
    },
    cellBorder:{
        height:1,
        marginLeft:2,
        backgroundColor:'#EAEAEA',
    }
});
module.exports = mimagehead;
// AppRegistry.registerComponent('helloworld', () => helloworld);