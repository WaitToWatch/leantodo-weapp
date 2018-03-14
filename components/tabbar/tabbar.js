// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    array:{
      type: Object,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex:0,
    // array:[{
    //   index:0,
    //   text:'首页',
    //   src:'../../res/tabar_home_normol.png',
    //   selectSrc:'../../res/tabar_home_select.png',
    //   isSelect:true,
    // },{
    //   index:1,
    //   text:'我的',
    //   src:'../../res/tabar_me_normol.png',
    //   selectSrc:'../../res/tabar_me_select.png',
    //   isSelect: false,
    // }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick: function (e) {
      // console.log(JSON.stringify(e.detail))

      if (e.detail.index == this.data.selectIndex) return;
      this.data.array[this.data.selectIndex].isSelect = false
      this.data.array[e.detail.index].isSelect = true
      this.data.selectIndex = e.detail.index,
      this.setData({ array: this.data.array })
      this.triggerEvent('tabbarClick', this.data.array)
    }
  },
  
})
