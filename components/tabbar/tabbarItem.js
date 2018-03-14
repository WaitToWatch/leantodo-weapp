// components/tabbar/tabbarItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:Number,
    selectSrc:{
      type:String,
      value:'',
      // observer:'_iconChange'
    },
    src:{
      type:String,
      value:''
    },
    text:String,
    isSelect:{
      type:Boolean,
      value: false,
      // observer: '_isSelectChange'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick: function () {
      // var model = {
      //   isSelect: this.properties.isSelect,
      //   icon: this.properties.icon,
      //   text: this.properties.text
      // }
      this.triggerEvent('tabbarItemClick', this.properties)
    },
    // _isSelectChange:function(newVal, oldVal){
    //   this.data.isSelected = newVal;
    // },
    // _iconChange:function(newVal, oldVal){
    //   this.data.icon = newVal;
    // }
  }
})
