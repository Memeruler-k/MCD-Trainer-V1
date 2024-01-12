// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar3")
                .setItems([
                    {
                        "id" : "menu1",
                        "caption" : "Player Hacks",
                        "sub" : [
                            {
                                "id" : "normal",
                                "caption" : "normal"
                            },
                            {
                                "id" : "disabled",
                                "caption" : "disabled",
                                "disabled" : true
                            },
                            {
                                "id" : "image",
                                "caption" : "image",
                                "imageClass" : "xui-icon-xui"
                            },
                            {
                                "id" : "menu1-a",
                                "type" : "split"
                            },
                            {
                                "id" : "checkbox 1",
                                "caption" : "checkbox 1",
                                "type" : "checkbox"
                            },
                            {
                                "id" : "checkbox 2",
                                "caption" : "checkbox 2",
                                "type" : "checkbox"
                            }
                        ]
                    },
                    {
                        "id" : "menu2",
                        "caption" : "Accessory Hacks",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    {
                                        "id" : "sub 3"
                                    },
                                    {
                                        "id" : "sub 4"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id" : "menu3",
                        "caption" : "Buff Hacks"
                    },
                    {
                        "id" : "menu4",
                        "caption" : "Teleport Hacks"
                    },
                    {
                        "id" : "menu5",
                        "caption" : "Wing Hacks"
                    },
                    {
                        "id" : "menu6",
                        "caption" : "Proj Editor"
                    },
                    {
                        "id" : "menu7",
                        "caption" : "World"
                    },
                    {
                        "id" : "menu8",
                        "caption" : "Mount Hacks"
                    },
                    {
                        "id" : "menu9",
                        "caption" : "Damage Hacks"
                    },
                    {
                        "id" : "menu10",
                        "caption" : "Debuff Hacks"
                    },
                    {
                        "id" : "menu11",
                        "caption" : "Settings"
                    },
                    {
                        "id" : "menu12",
                        "caption" : "Visual Hacks"
                    }
                ])
                .setTop("0.7619047619047619em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});