/**
 * Created by longshao on 2016/11/21.
 */

function songmanager(opts){
    this.title=opts.title;
    this.parent=opts.parent;
    this.datas=opts.datas;
    this.init();
};
songmanager.prototype={
    constructor:songmanager,
    //页面初始化
    init: function () {
        this.renderDom();
        this.blindEvent();
    },
    //渲染页面
    renderDom: function () {
        var self=this;
        this.$container=$("<div class='songmanager-container'>" +
            "<h3>"+this.title+"</h3>" +
            "<div>" +
               "<span>歌曲名:</span><input type='text' id='songname'>" +
               "<span>歌手名:</span><input type='text' id='singername'>" +
               "<input class='add' value='添加' type='button'>"+
            "</div>" +
            "<div class='tab-container'>" +
                "<div class='tab-header'>" +
                    "<span>歌曲名</span><span>歌手名</span><span>操作</span>"+
                 "</div>" +
                 "<div class='tab-content'></div>"+
            "</div>"+
            "</div>");
        $.each(this.datas, function () {
            self.addsong(this.songname,this.singername);
        })

        this.$container.appendTo(this.parent);
    },
    //绑定事件
    blindEvent: function () {
        var self=this;
       //事件委托
        this.$container.on("click.add",".add", function () {
            var $songname=$("#songname");
            var $singername=$("#singername");
            var songname=$songname.val();
            var singername=$singername.val();
            self.addsong(songname,singername);
            $songname.val("");
            $singername.val("");
        });
        this.$container.on("click.del",".del", function (){
            var del=this;
            self.deletesong(del);
        });
    },
    //添加歌曲
    addsong: function (songname,singername) {

        this.$container.find(".tab-content").append("<div class='row'>" +
            "<span>"+songname+"</span><span>"+singername+"</span><input class='del' value='删除' type='button'>"+
            "</div>")
    },
    //删除歌曲
    deletesong: function (del) {
        $(del).parent().remove();
    },
}
