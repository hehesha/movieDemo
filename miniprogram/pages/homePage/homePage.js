// pages/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource:[],
    hasMore:true
  },
  getData:function(){
    if (!this.data.hasMore)return
    wx.showLoading({
      title: '加载中',
    })
   wx.cloud.callFunction({
     name:"getList",
     data:{
       start: this.data.dataSource.length,
       count:10
     }
   }).then(res=>{
     console.log(JSON.parse(res.result))
     let data = JSON.parse(res.result).subjects;
     if(!data.length){
       this.setData({
         hasMore:false
       })
       return
     }
     this.setData({
       dataSource: this.data.dataSource.concat(data)
     })
   }).catch(err=>{
     console.log(err)
   }).finally(res=>{
     wx.hideLoading()
   })
  },
  toCommon:function(e){
    console.log(e)
    let id = e.target.dataset.movieid
    wx.navigateTo({
      url: `/pages/common/common?id=${id}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})