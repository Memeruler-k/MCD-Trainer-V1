xui.Class('App.Settings', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label10")
                .setLeft("0.7619047619047619em")
                .setTop("17.523809523809526em")
                .setWidth("3.3523809523809525em")
                .setCaption("Version")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox2")
                .setLeft("0.7619047619047619em")
                .setTop("19.047619047619047em")
                .setWidth("7.466666666666667em")
                .setCaption("Steam")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button17")
                .setLeft("0.7619047619047619em")
                .setTop("27.428571428571427em")
                .setWidth("11.123809523809523em")
                .setCaption("Detect Version")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label8")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("3.580952380952381em")
                .setHeight("1.2190476190476192em")
                .setCaption("Settings")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("2.2857142857142856em")
                .setTop("9.904761904761905em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("0em")
                .setTop("8.380952380952381em")
                .setWidth("10.361904761904762em")
                .setCaption("Player Name")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox3")
                .setLeft("0.7619047619047619em")
                .setTop("20.571428571428573em")
                .setWidth("9.752380952380953em")
                .setHeight("0.9142857142857143em")
                .setCaption("tModLoader")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox4")
                .setLeft("0.7619047619047619em")
                .setTop("22.095238095238095em")
                .setWidth("7.466666666666667em")
                .setHeight("1.6761904761904762em")
                .setCaption("Cracked")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label11")
                .setLeft("0.7619047619047619em")
                .setTop("25.904761904761905em")
                .setHeight("1.2190476190476192em")
                .setCaption("Make sure game is launched before pressing")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});