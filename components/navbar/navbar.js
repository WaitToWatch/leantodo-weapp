// pages/list/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leftContent: String,
    centerContent: String,
    rightContent: {
      type: String,
      value: '',
      observer: '_rightChange'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    rightContent:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    leftClick:function(){
      wx.showToast({
        title: 'left',
        icon: 'success',
        duration: 1000
      })
    },
    centerClick:function(){
      wx.showToast({
        title: 'center',
        icon: 'success',
        duration: 1000
      })
    },
    rightClick: function () {
      // wx.showToast({
      //   title: this.rightContent,
      //   icon: 'success',
      //   duration: 5000
      // })
      this.triggerEvent('rightClick', this.rightContent)
    },
    _rightChange: function(newV, oldV){
      this.rightContent = newV;
    },
    showLoading(){
      wx.showLoading({
        title: '加载中',
      })
    },
    hideLoading(){
      wx.hideLoading()
    }
  }
})
