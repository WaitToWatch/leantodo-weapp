// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      index: 0,
      text: '首页',
      src: '../../res/tabar_home_normol.png',
      selectSrc: '../../res/tabar_home_select.png',
      isSelect: true,
    }, {
      index: 1,
      text: '我的',
      src: '../../res/tabar_me_normol.png',
      selectSrc: '../../res/tabar_me_select.png',
      isSelect: false,
    }],
    navbarData:{
      leftContent:'left',
      centerContent:'center',
      rightContent:'right'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  rightClick: function (e) {
    wx.showToast({
      title: e.detail,
      icon: 'success',
      duration: 1000
    })
  },
  tabbarClick: function(e){
    console.log(this.data.array[0].isSelect + '---' + this.data.array[1].isSelect)
    // this.data.array = e.detail
    this.setData({ array: e.detail })
    // if (e.detail.index == this.data.selectIndex) return;
    // this.data.array[this.data.selectIndex].isSelect = false
    // this.data.array[e.detail.index].isSelect = true
    // this.data.selectIndex = e.detail.index,
    // //必须要进行setData使得数据在界面上生效
    // this.setData({ array: this.data.array })
  }
})