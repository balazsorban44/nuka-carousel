let _createClass=function(){function a(b,c){for(var e,d=0;d<c.length;d++)e=c[d],e.enumerable=e.enumerable||!1,e.configurable=!0,'value'in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_index=require('./lib/index'),_index2=_interopRequireDefault(_index),_react=require('react'),_react2=_interopRequireDefault(_react),_reactDom=require('react-dom'),_reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&(typeof b=='object'||typeof b=='function')?b:a}function _inherits(a,b){if(typeof b!='function'&&b!==null)throw new TypeError(`Super expression must either be null or a function, not ${typeof b}`);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}let colors=['7732bb','047cc0','00884b','e3bc13','db7c00','aa231f'],App=function(a){function b(){_classCallCheck(this,b);let c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return c.state={slideIndex:0,length:6,wrapAround:!1,underlineHeader:!1,slidesToShow:1,cellAlign:'left',transitionMode:'scroll',heightMode:'max',withoutControls:!1},c.handleImageClick=c.handleImageClick.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'handleImageClick',value:function handleImageClick(){this.setState({underlineHeader:!this.state.underlineHeader})}},{key:'render',value:function render(){let c=this;return _react2.default.createElement('div',{style:{width:'50%',margin:'auto'}},_react2.default.createElement(_index2.default,{withoutControls:this.state.withoutControls,transitionMode:this.state.transitionMode,cellAlign:this.state.cellAlign,slidesToShow:this.state.slidesToShow,wrapAround:this.state.wrapAround,slideIndex:this.state.slideIndex,heightMode:this.state.heightMode,renderTopCenterControls:function renderTopCenterControls(d){let e=d.currentSlide;return _react2.default.createElement('div',{style:{fontFamily:'Helvetica',color:'#fff',textDecoration:c.state.underlineHeader?'underline':'none'}},'Nuka Carousel: Slide ',e+1)}},colors.slice(0,this.state.length).map((d,e) => {return _react2.default.createElement('img',{src:'http://placehold.it/1000x400/'+d+'/ffffff/&text=slide'+(e+1),key:d,onClick:c.handleImageClick,style:{height:'current'===c.state.heightMode?100*(e+1):400}})})),_react2.default.createElement('div',{style:{display:'flex',justifyContent:'space-between'}},_react2.default.createElement('div',null,_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:0})}},'1'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:1})}},'2'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:2})}},'3'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:3})}},'4'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:4})}},'5'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slideIndex:5})}},'6')),_react2.default.createElement('div',null,_react2.default.createElement('button',{onClick:function onClick(){return c.setState({length:2})}},'2 Slides Only'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({transitionMode:c.state.transitionMode==='fade'?'scroll':'fade'})}},'Toggle Fade ',this.state.transitionMode==='fade'?'Off':'On'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState((d) => {return{wrapAround:!d.wrapAround}})}},'Toggle Wrap Around'))),this.state.transitionMode!=='fade'&&_react2.default.createElement('div',{style:{display:'flex',justifyContent:'space-between'}},this.state.slidesToShow>1&&_react2.default.createElement('div',null,_react2.default.createElement('button',{onClick:function onClick(){return c.setState({cellAlign:'left'})}},'Left'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({cellAlign:'center'})}},'Center'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({cellAlign:'right'})}},'Right')),_react2.default.createElement('div',{style:{marginLeft:'auto'}},_react2.default.createElement('button',{onClick:function onClick(){return c.setState({slidesToShow:c.state.slidesToShow>1?1:1.25})}},'Toggle Partially Visible Slides'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({heightMode:c.state.heightMode==='current'?'max':'current'})}},'Toggle Height Mode Current'),_react2.default.createElement('button',{onClick:function onClick(){return c.setState({withoutControls:!c.state.withoutControls})}},'Toggle Controls'))))}}]),b}(_react2.default.Component);_reactDom2.default.render(_react2.default.createElement(App,null),document.getElementById('content'));