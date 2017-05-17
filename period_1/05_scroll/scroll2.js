import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View
} from 'react-native';

let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;

let ImageData =  {data:[
    {
        title: 'beauty 1',
        icon: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
    },
    {
        title: 'beauty 2',
        icon: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
    },
    {
        title: 'The next banner has no title',
        icon: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
    },
    {
        // title: 'no title',
        icon: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
    },
]};

export  default class scrollViewTop extends Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: 0 };
    }

    static defaultProps = {
        duration: 1000,
    }

    componentDidMount() {
        this._startTimer();

    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.continer}>
                <ScrollView
                    ref='scrollView'
                    //水平方向
                    horizontal={true}
                    //当值为true时显示滚动条
                    showsHorizontalScrollIndicator={false}
                    //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上
                    pagingEnabled={true}
                    //滑动完一贞
                    onMomentumScrollEnd={(e)=>{this._onAnimationEnd(e)}}
                    //开始拖拽
                    onScrollBeginDrag={()=>{this._onScrollBeginDrag()}}
                    //结束拖拽
                    onScrollEndDrag={()=>{this._onScrollEndDrag()}}
                >
                    {this._renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {this._renderAllIndicator()}
                </View>
            </View>
        );
    }
    /**开始拖拽 */
    _onScrollBeginDrag(){
        console.log("开始拖拽");
        //两种清除方式 都是可以的没有区别
        // this.timer && clearInterval(this.timer);
        this.timer && clearTimeout(this.timer);
    }
    /**停止拖拽 */
    _onScrollEndDrag(){
        console.log("停止拖拽");
        this.timer &&this._startTimer();
    }

    /**1.轮播图片展示 */
    _renderAllImage() {
        let allImage = [];
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            let imgsItem = imgsArr[i];
            allImage.push(
                <Image key={i} source={{uri:imgsItem.icon}} style={styles.imageStyle} />
            );
        }
        return allImage;
    }

    /**2.手动滑动分页实现 */
    _onAnimationEnd(e) {
        //求出偏移量
        let offsetX = e.nativeEvent.contentOffset.x;
        //求出当前页数
        let pageIndex = Math.floor(offsetX / ScreenWidth);
        //更改状态机
        this.setState({ currentPage: pageIndex });
    }

    /**3.页面指针实现 */
    _renderAllIndicator() {
        let indicatorArr = [];
        let style;
        let imgsArr = ImageData.data;
        for (let i = 0; i < imgsArr.length; i++) {
            //判断
            style = (i==this.state.currentPage)?{color:'orange'}:{color:'white'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:30},style]}>
                    •
                </Text>
            );
        }
        return indicatorArr;
    }

    /**4.通过定时器实现自动播放轮播图 */
    _startTimer(){
        let scrollView = this.refs.scrollView;
        this.timer = setInterval(
            ()=>{console.log('开启定时器');
                let imageCount = ImageData.data.length;
                //4.1 设置圆点
                let activePage = 0;
                //4.2判断
                if(this.state.currentPage>=imageCount+1){
                    activePage = 0;
                }else{
                    activePage = this.state.currentPage+1;
                }
                //4.3 更新状态机
                this.setState({currentPage:activePage});
                //4.4 让scrollview 滚动起来
                let offsetX = activePage * ScreenWidth;
                scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
            },
            this.props.duration
        );
    }
}

const styles = StyleSheet.create({
    continer:{
        backgroundColor: '#dddddd'
    },
    imageStyle:{
        height:300,
        width:ScreenWidth
    },
    pageViewStyle:{
        height:25,
        width:ScreenWidth,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,

        flexDirection:'row',
        alignItems:'center',
    }
});  