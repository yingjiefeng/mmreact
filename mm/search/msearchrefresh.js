/**
 * reactnative(1) - RefreshControl 使用案例

 http://www.cnblogs.com/thbbsky/p/5772460.html
 */





'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    RefreshControl,
    NativeModules

} from 'react-native';
let jsoupModule = NativeModules.ReactBaseJsoupModule;
class ListRowComponent extends React.Component{
    render(){
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.alt}
                </Text>
                <Image
                    source={{uri:this.props.data.dataimg}}
                    style={styles.Img}>
                </Image>
                <Text style={styles.text}>
                    {this.props.data.postmeta}
                </Text>
            </View>
        );
    }
};
class msearchrefresh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            // rowData: Array.from(new Array(10)).map(
            //     (val, i) => ({text: '初次加载的数据行 ' + i})),
            rowData:[],
            pageNo:1,

        };
        this.getByFetch();
    }

    render() {


         var rows = this.state.rowData.map((row, indexKey) => {
            return <ListRowComponent key={indexKey} data={row}/>;
        });


        return (
            <ScrollView style={styles.scrollview}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isRefreshing}
                                onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                                tintColor='red'
                                title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                            />
                        }>
                {rows}
            </ScrollView>
        );
    }

    getByFetch(){
        //调用native module过去数据
        var params = {
            url:'http://m.mm131.com/search.php?text=%C3%C3%C3%C3&page=',
            pageNo:this.state.pageNo
        };

        // {"alt":"女神漫兮身材曼妙火辣翘臀诱惑难挡",
        //     "dataimg":"http://img1.mm131.com/pic/2985/m.jpg",
        //     "href":"http://m.mm131.com/xinggan/2985.html",
        //     "postmeta":"2017-06-21 19:20:08",
        //     "src":"http://img1.mm131.com/pic/2985/m.jpg"}
        jsoupModule.msearch(JSON.stringify(params),(status,data)=>{
            //成功
            console.log('marticle=='+data);
            var data = JSON.parse(data);
            if (data.list) {
                var newrowData = [];
                console.log('pageNo==='+this.state.pageNo);
                if(this.state.pageNo==1){
                    console.log('initdata===');
                    this.setState({
                        rowData:data.list,
                        isRefreshing: false,
                        pageNo:this.state.pageNo+1
                    });
                }else{
                    console.log('moredata===');
                    newrowData = Array.from(data.list).concat(this.state.rowData);
                    this.setState({
                        rowData:newrowData,
                        isRefreshing: false,
                        pageNo:this.state.pageNo+1
                    });
                }
            }
        }, (status,exception)=>{
            //失败
            console.log('mleftmenu=='+exception);
        });
    }

    onRefresh() {
        this.setState({
            isRefreshing: true,
        });

        this.getByFetch();
        // setTimeout(() => {
        //     // 准备下拉刷新的5条数据
        //     var rowNewData = Array.from(new Array(5))
        //         .map((val, i) => ({
        //             text: '下拉刷新增加的数据行 ' + (+this.state.loaded + i)
        //         }))
        //         .concat(this.state.rowData);
        //     this.setState({
        //         loaded: this.state.loaded + 5,
        //         isRefreshing: false,
        //         rowData: rowNewData,
        //     });
        // }, 2000);
    }

}

const styles = StyleSheet.create({
    row: {
        margin:5,
    },
    text:{
        alignSelf:'center',
        color:'#000000',
    },
    Img:{
        flex:1,
        height:600,
    },
    scrollerview:{
        flex:1,
    }
});
module.exports = msearchrefresh;
// AppRegistry.registerComponent('helloworld', () => helloworld);