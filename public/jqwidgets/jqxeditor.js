/*
jQWidgets v4.1.1 (2016-Mar)
Copyright (c) 2011-2016 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(b) {
    b.jqx.jqxWidget("jqxEditor", "", {});
    b.extend(b.jqx._jqxEditor.prototype, {
        defineInstance: function() {
            var d = {
                width: null,
                height: null,
                disabled: false,
                pasteMode: "html",
                editable: true,
                lineBreak: "default",
                changeType: null,
                toolbarPosition: "top",
                fontFamily: "sans-serif",
                commands: {
                    bold: {
                        tooltip: "bold",
                        command: "bold",
                        type: "toggleButton"
                    },
                    italic: {
                        tooltip: "Italic",
                        command: "italic",
                        type: "toggleButton"
                    },
                    underline: {
                        tooltip: "Underline",
                        command: "underline",
                        type: "toggleButton"
                    },
                    format: {
                        placeHolder: "Format Block",
                        tooltip: "Format Block",
                        command: "formatblock",
                        value: [{
                            value: "p",
                            label: "Paragraph"
                        }, {
                            value: "h1",
                            label: "Header 1"
                        }, {
                            value: "h2",
                            label: "Header 2"
                        }, {
                            value: "h3",
                            label: "Header 3"
                        }, {
                            value: "h4",
                            label: "Header 4"
                        }],
                        type: "list",
                        width: 120,
                        dropDownWidth: 190,
                        height: 25
                    },
                    font: {
                        placeHolder: "字体",
                        tooltip: "Font Name",
                        command: "fontname",
                        value: [{
                            label: "微软雅黑",
                            value:"微软雅黑"
                        }, {
                                label: "宋体",
                                value:"宋体"
                            }, {
                                label: "黑体",
                                value:"黑体"
                            },{
                            label: "Arial",
                            value: "Arial, Helvetica, sans-serif"
                        }, {
                            label: "Comic Sans MS",
                            value: '"Comic Sans MS", cursive, sans-serif'
                        }, {
                            label: "Courier New",
                            value: '"Courier New", Courier, monospace'
                        }, {
                            label: "Georgia",
                            value: "Georgia,serif"
                        }, {
                            label: "Impact",
                            value: "Impact,Charcoal,sans-serif"
                        }, {
                            label: "Lucida Console",
                            value: "'Lucida Console',Monaco,monospace"
                        }, {
                            label: "Tahoma",
                            value: "Tahoma,Geneva,sans-serif"
                        }, {
                            label: "Times New Roman",
                            value: "'Times New Roman',Times,serif"
                        }, {
                            label: "Trebuchet MS",
                            value: '"Trebuchet MS",Helvetica,sans-serif'
                        }, {
                            label: "Verdana",
                            value: "Verdana,Geneva,sans-serif"
                        }],
                        type: "list",
                        width: 160,
                        height: 25,
                        dropDownWidth: 160
                    },
                    size: {
                        placeHolder: "Size",
                        tooltip: "Font Size",
                        command: "fontsize",
                        value: [{
                            label: "1 (8pt)",
                            value: "xx-small"
                        }, {
                            label: "2 (10pt)",
                            value: "x-small"
                        }, {
                            label: "3 (12pt)",
                            value: "small"
                        }, {
                            label: "4 (14pt)",
                            value: "medium"
                        }, {
                            label: "5 (18pt)",
                            value: "large"
                        }, {
                            label: "6 (24pt)",
                            value: "x-large"
                        }, {
                            label: "7 (36pt)",
                            value: "xx-large"
                        }],
                        type: "list",
                        width: 45,
                        height: 25,
                        dropDownWidth: 160
                    },
                    color: {
                        tooltip: "Text Color",
                        command: "forecolor",
                        value: "#000",
                        type: "colorPicker"
                    },
                    background: {
                        tooltip: "Fill Color",
                        command: "backcolor",
                        value: "#fff",
                        type: "colorPicker"
                    },
                    left: {
                        tooltip: "Align Left",
                        command: "justifyleft",
                        type: "toggleButton"
                    },
                    center: {
                        tooltip: "Align Center",
                        command: "justifycenter",
                        type: "toggleButton"
                    },
                    right: {
                        tooltip: "Align Right",
                        command: "justifyright",
                        type: "toggleButton"
                    },
                    outdent: {
                        tooltip: "Indent Less",
                        command: "outdent",
                        type: "button"
                    },
                    indent: {
                        tooltip: "Indent More",
                        command: "indent",
                        type: "button"
                    },
                    ul: {
                        tooltip: "Insert unordered list",
                        command: "insertunorderedlist",
                        type: "toggleButton"
                    },
                    ol: {
                        tooltip: "Insert ordered list",
                        command: "insertorderedlist",
                        type: "toggleButton"
                    },
                    image: {
                        tooltip: "Insert image",
                        command: "insertimage",
                        type: "button"
                    },
                    link: {
                        tooltip: "Insert link",
                        command: "createlink",
                        type: "toggleButton"
                    },
                    html: {
                        tooltip: "View source",
                        command: "viewsource",
                        type: "toggleButton"
                    },
                    clean: {
                        tooltip: "Remove Formatting",
                        command: "removeformat",
                        type: "button"
                    }
                },
                createCommand: null,
                defaultLocalization: {
                    bold: "加粗",
                    italic: "斜体",
                    underline: "下划线",
                    format: "段落",
                    font: "字体名称",
                    size: "字体大小",
                    color: "字符颜色",
                    background: "背景颜色",
                    left: "左对齐",
                    center: "中对齐",
                    right: "右对齐",
                    outdent: "前缩进",
                    indent: "后缩进",
                    ul: "无序列表",
                    ol: "有序列表",
                    image: "图片",
                    link: "链接",
                    html: "源码",
                    clean: "清除格式",
                    Remove: "删除",
                    Ok: "确定",
                    Cancel: "取消",
                    Change: "Change",
                    "Go to link": "Go to link",
                    "Open in a new window/tab": "在新窗口或新标签页中打开",
                    Align: "Align",
                    VSpace: "VSpace",
                    HSpace: "HSpace",
                    Width: "Width",
                    Height: "Height",
                    Title: "Title",
                    URL: "URL",
                    "Insert Image": "Insert Image",
                    "Insert Link": "插入链接",
                    "Alt Text": "Alt Text",
                    "not set": "&ltnot set&gt",
                    Left: "Left",
                    Right: "Right",
                    Paragraph: "段落",
                    Header: "标题",
                    Arial: "Arial",
                    "Comic Sans MS": "Comic Sans MS",
                    "Courier New": "Courier New",
                    Georgia: "Georgia",
                    Impact: "Impact",
                    "Lucida Console": "Lucida Console",
                    Tahoma: "Tahoma",
                    "Times New Roman": "Times New Roman",
                    "Trebuchet MS": "Trebuchet MS",
                    Verdana: "Verdana"
                },
                localization: null,
                tools: "bold italic underline | format font size | color background | left center right | outdent indent | ul ol | image | link | clean | html",
                readOnly: false,
                stylesheets: new Array(),
                rtl: false,
                colorPickerTemplate: '<div class="jqx-editor-color-picker"><div role="grid"><table class="jqx-editor-color-picker-table" cellspacing="0" cellpadding="0"><tbody><tr><td aria-label="RGB (0, 0, 0)"><div title="RGB (0, 0, 0)" style="background-color: rgb(0, 0, 0);"></div></td><td aria-label="RGB (68, 68, 68)"><div title="RGB (68, 68, 68)" style="background-color: rgb(68, 68, 68);"></div></td><td aria-label="RGB (102, 102, 102)"><div title="RGB (102, 102, 102)" style="background-color: rgb(102, 102, 102);"></div></td><td aria-label="RGB (153, 153, 153)"><div title="RGB (153, 153, 153)" style="background-color: rgb(153, 153, 153);"></div></td><td aria-label="RGB (204, 204, 204)"><div title="RGB (204, 204, 204)" style="background-color: rgb(204, 204, 204);"></div></td><td aria-label="RGB (238, 238, 238)"><div title="RGB (238, 238, 238)" style="background-color: rgb(238, 238, 238);"></div></td><td aria-label="RGB (243, 243, 243)"><div title="RGB (243, 243, 243)" style="background-color: rgb(243, 243, 243);"></div></td><td aria-label="RGB (255, 255, 255)"><div title="RGB (255, 255, 255)" style="background-color: rgb(255, 255, 255);"></div></td></tr></tbody></table></div><div role="grid"><table class="jqx-editor-color-picker-table" cellspacing="0" cellpadding="0"><tbody><tr><td aria-label="RGB (255, 0, 0)"><div title="RGB (255, 0, 0)" style="background-color: rgb(255, 0, 0);"></div></td><td aria-label="RGB (255, 153, 0)"><div title="RGB (255, 153, 0)" style="background-color: rgb(255, 153, 0);"></div></td><td aria-label="RGB (255, 255, 0)"><div title="RGB (255, 255, 0)" style="background-color: rgb(255, 255, 0);"></div></td><td aria-label="RGB (0, 255, 0)"><div title="RGB (0, 255, 0)" style="background-color: rgb(0, 255, 0);"></div></td><td aria-label="RGB (0, 255, 255)"><div title="RGB (0, 255, 255)" style="background-color: rgb(0, 255, 255);"></div></td><td aria-label="RGB (0, 0, 255)"><div title="RGB (0, 0, 255)" style="background-color: rgb(0, 0, 255);"></div></td><td aria-label="RGB (153, 0, 255)"><div title="RGB (153, 0, 255)" style="background-color: rgb(153, 0, 255);"></div></td><td aria-label="RGB (255, 0, 255)"><div title="RGB (255, 0, 255)" style="background-color: rgb(255, 0, 255);"></div></td></tr></tbody></table></div><div role="grid"><table class="jqx-editor-color-picker-table" cellspacing="0" cellpadding="0"><tbody><tr><td aria-label="RGB (244, 204, 204)"><div title="RGB (244, 204, 204)" style="background-color: rgb(244, 204, 204);"></div></td><td aria-label="RGB (252, 229, 205)"><div title="RGB (252, 229, 205)" style="background-color: rgb(252, 229, 205);"></div></td><td aria-label="RGB (255, 242, 204)"><div title="RGB (255, 242, 204)" style="background-color: rgb(255, 242, 204);"></div></td><td aria-label="RGB (217, 234, 211)"><div title="RGB (217, 234, 211)" style="background-color: rgb(217, 234, 211);"></div></td><td aria-label="RGB (208, 224, 227)"><div title="RGB (208, 224, 227)" style="background-color: rgb(208, 224, 227);"></div></td><td aria-label="RGB (207, 226, 243)"><div title="RGB (207, 226, 243)" style="background-color: rgb(207, 226, 243);"></div></td><td aria-label="RGB (217, 210, 233)"><div title="RGB (217, 210, 233)" style="background-color: rgb(217, 210, 233);"></div></td><td aria-label="RGB (234, 209, 220)"><div title="RGB (234, 209, 220)" style="background-color: rgb(234, 209, 220);"></div></td></tr><tr><td id="T-Kw-Jn88" aria-label="RGB (234, 153, 153)"><div title="RGB (234, 153, 153)" style="background-color: rgb(234, 153, 153);"></div></td><td aria-label="RGB (249, 203, 156)"><div title="RGB (249, 203, 156)" style="background-color: rgb(249, 203, 156);"></div></td><td aria-label="RGB (255, 229, 153)"><div title="RGB (255, 229, 153)" style="background-color: rgb(255, 229, 153);"></div></td><td aria-label="RGB (182, 215, 168)"><div title="RGB (182, 215, 168)" style="background-color: rgb(182, 215, 168);"></div></td><td aria-label="RGB (162, 196, 201)"><div title="RGB (162, 196, 201)" style="background-color: rgb(162, 196, 201);"></div></td><td aria-label="RGB (159, 197, 232)"><div title="RGB (159, 197, 232)" style="background-color: rgb(159, 197, 232);"></div></td><td aria-label="RGB (180, 167, 214)"><div title="RGB (180, 167, 214)" style="background-color: rgb(180, 167, 214);"></div></td><td aria-label="RGB (213, 166, 189)"><div title="RGB (213, 166, 189)" style="background-color: rgb(213, 166, 189);"></div></td></tr><tr><td aria-label="RGB (224, 102, 102)"><div title="RGB (224, 102, 102)" style="background-color: rgb(224, 102, 102);"></div></td><td aria-label="RGB (246, 178, 107)"><div title="RGB (246, 178, 107)" style="background-color: rgb(246, 178, 107);"></div></td><td aria-label="RGB (255, 217, 102)"><div title="RGB (255, 217, 102)" style="background-color: rgb(255, 217, 102);"></div></td><td aria-label="RGB (147, 196, 125)"><div title="RGB (147, 196, 125)" style="background-color: rgb(147, 196, 125);"></div></td><td aria-label="RGB (118, 165, 175)"><div title="RGB (118, 165, 175)" style="background-color: rgb(118, 165, 175);"></div></td><td aria-label="RGB (111, 168, 220)"><div title="RGB (111, 168, 220)" style="background-color: rgb(111, 168, 220);"></div></td><td aria-label="RGB (142, 124, 195)"><div title="RGB (142, 124, 195)" style="background-color: rgb(142, 124, 195);"></div></td><td aria-label="RGB (194, 123, 160)"><div title="RGB (194, 123, 160)" style="background-color: rgb(194, 123, 160);"></div></td></tr><tr><td id="T-Kw-Jn104" aria-label="RGB (204, 0, 0)"><div title="RGB (204, 0, 0)" style="background-color: rgb(204, 0, 0);"></div></td><td aria-label="RGB (230, 145, 56)"><div title="RGB (230, 145, 56)" style="background-color: rgb(230, 145, 56);"></div></td><td aria-label="RGB (241, 194, 50)"><div title="RGB (241, 194, 50)" style="background-color: rgb(241, 194, 50);"></div></td><td aria-label="RGB (106, 168, 79)"><div title="RGB (106, 168, 79)" style="background-color: rgb(106, 168, 79);"></div></td><td aria-label="RGB (69, 129, 142)"><div title="RGB (69, 129, 142)" style="background-color: rgb(69, 129, 142);"></div></td><td aria-label="RGB (61, 133, 198)"><div title="RGB (61, 133, 198)" style="background-color: rgb(61, 133, 198);"></div></td><td aria-label="RGB (103, 78, 167)"><div title="RGB (103, 78, 167)" style="background-color: rgb(103, 78, 167);"></div></td><td aria-label="RGB (166, 77, 121)"><div title="RGB (166, 77, 121)" style="background-color: rgb(166, 77, 121);"></div></td></tr><tr><td aria-label="RGB (153, 0, 0)"><div title="RGB (153, 0, 0)" style="background-color: rgb(153, 0, 0);"></div></td><td aria-label="RGB (180, 95, 6)"><div title="RGB (180, 95, 6)" style="background-color: rgb(180, 95, 6);"></div></td><td aria-label="RGB (191, 144, 0)"><div title="RGB (191, 144, 0)" style="background-color: rgb(191, 144, 0);"></div></td><td aria-label="RGB (56, 118, 29)"><div title="RGB (56, 118, 29)" style="background-color: rgb(56, 118, 29);"></div></td><td aria-label="RGB (19, 79, 92)"><div title="RGB (19, 79, 92)" style="background-color: rgb(19, 79, 92);"></div></td><td aria-label="RGB (11, 83, 148)"><div title="RGB (11, 83, 148)" style="background-color: rgb(11, 83, 148);"></div></td><td aria-label="RGB (53, 28, 117)"><div title="RGB (53, 28, 117)" style="background-color: rgb(53, 28, 117);"></div></td><td aria-label="RGB (116, 27, 71)"><div title="RGB (116, 27, 71)" style="background-color: rgb(116, 27, 71);"></div></td></tr><tr><td aria-label="RGB (102, 0, 0)"><div title="RGB (102, 0, 0)" style="background-color: rgb(102, 0, 0);"></div></td><td aria-label="RGB (120, 63, 4)"><div title="RGB (120, 63, 4)" style="background-color: rgb(120, 63, 4);"></div></td><td aria-label="RGB (127, 96, 0)"><div title="RGB (127, 96, 0)" style="background-color: rgb(127, 96, 0);"></div></td><td aria-label="RGB (39, 78, 19)"><div title="RGB (39, 78, 19)" style="background-color: rgb(39, 78, 19);"></div></td><td aria-label="RGB (12, 52, 61)"><div title="RGB (12, 52, 61)" style="background-color: rgb(12, 52, 61);"></div></td><td aria-label="RGB (7, 55, 99)"><div title="RGB (7, 55, 99)" style="background-color: rgb(7, 55, 99);"></div></td><td aria-label="RGB (32, 18, 77)"><div title="RGB (32, 18, 77)" style="background-color: rgb(32, 18, 77);"></div></td><td aria-label="RGB (76, 17, 48)"><div title="RGB (76, 17, 48)" style="background-color: rgb(76, 17, 48);"></div></td></tr></tbody></table></div></div>',
                touchMode: false,
                keyPressed: null,
                events: ["change"]
            };
            b.extend(true, this, d);
            this.localization = this.defaultLocalization;
            return d
        },
        createInstance: function(f) {
            var j = this;
            j.textArea = j.host;
            var d = j.host.attr("contenteditable");
            j.host.addClass(j.toThemeProperty("jqx-widget"));
            if (d == true || d == "true") {
                j.inline = true;
                j.widget = j.host;
                j.editorDocument = document;
                j.selection = new a(j.editorDocument);
                var i = b("<div class='jqx-editor-toolbar-container' unselectable='on' aria-label='Formatting options' role='toolbar'><div class='jqx-editor-toolbar'></div>");
                i.insertBefore(j.host);
                j.toolbarContainer = i;
                j.toolbar = i.find(".jqx-editor-toolbar");
                j.editor = j.host;
                j.contentEditableElement = j.element
            } else {
                var g = b("<div class='jqx-editor'><div class='jqx-editor-container'><div class='jqx-editor-toolbar-container' aria-label='Formatting options' role='toolbar'><div class='jqx-editor-toolbar'></div></div><div class='jqx-editor-content'><iframe  src='javascript:\"<html></html>\"' allowtransparency='true' frameborder='0'></iframe></div></div></div>");
                j.widget = g;
                j.widget[0].className = j.widget[0].className + " " + j.element.className;
                try {
                    j.widget[0].style = j.element.style
                } catch (e) {}
                var h = b.trim(j.host.html()) + "&#8203;";
                if (j.lineBreak == "default" || j.lineBreak == "div") {
                    h = "<div>" + h + "</div>"
                } else {
                    if (j.lineBreak == "p") {
                        h = "<p>" + h + "</p>"
                    }
                }
                h = h.replace(/&lt;/ig, "<");
                h = h.replace(/&gt;/ig, ">");
                j.host.css("display", "none");
                j.host.after(g);
                g.find("iframe").after(j.host);
                j.container = g.find(".jqx-editor-container");
                j.toolbarContainer = g.find(".jqx-editor-toolbar-container");
                j.toolbar = g.find(".jqx-editor-toolbar");
                j.iframe = g.find("iframe");
                j.content = g.find(".jqx-editor-content");
                var k = function() {
                    j.editorDocument = j.iframe[0].contentWindow.document;
                    j.selection = new a(j.editorDocument);
                    var o = 0;
                    j.addHandler(j.iframe, "load", function() {
                        o++;
                        if (o > 1) {
                            j.iframe.off("load");
                            j.content.find("iframe").remove();
                            var q = b("<iframe  src='javascript:\"<html></html>\"' allowtransparency='true' frameborder='0'></iframe>").appendTo(j.content);
                            j.iframe = g.find("iframe");
                            k()
                        }
                    });
                    if (!b.jqx.browser.mozilla) {
                        j.editorDocument.designMode = "On"
                    }
                    j.editorDocument.open();
                    var m = j.rtl ? "direction:rtl;" : "";
                    var l = b.jqx.browser.msie ? "::selection{color: #fff; background: #328EFD;};::-moz-selection{color: #fff; background: #328eD;};::selection:window-inactive {background: #c7c7c7; color: #000;}::-moz-selection:window-inactive {background: #c7c7c7; color: #000;}html{font-size:13px; height:100%;}body{padding-top:1px;margin-top:-1px; padding-right: 1px; overflow-x: hidden;word-wrap: break-word;-webkit-nbsp-mode: space;-webkit-line-break: after-white-space;" : "";
                    j.editorDocument.write("<!DOCTYPE html><html><head><meta charset='utf-8' /><style>html,body{padding:0; margin:0; font-size: 13px; font-family: " + j.fontFamily + "; min-height:100%; " + m + "}" + l + "}h1{font-size:2em;margin:.67em 0}h2{font-size: 1.5em; margin: .75em 0}h3{font-size: 1.17em; margin: .83em 0}h4{font-size:1em; margin: 1.12em 0 }h5{font-size: .83em; margin: 1.5em 0}h6{font-size: .75em; margin: 1.67em 0}p{margin: 0px;padding:0 .2em}ul,ol{padding-left:2.5em}a{color:#00a}code{font-size:1.23em}.jqx-editor-paste-element {position: absolute; left: -1000px; height: 1px; overflow: hidden; top: -1000px;}.jqx-editor-focus {border: 1px solid #aaa !important;}</style>" + b.map(j.stylesheets, function(q) {
                            return "<link rel='stylesheet' href='" + q + "'>"
                        }).join("") + "</head><body autocorrect='off' contenteditable='true'></body></html>");
                    j.contentEditableElement = j.editorDocument.body;
                    if (j.host.is("textarea")) {
                        j._textArea = j.element;
                        var n = j.host.data();
                        n.jqxEditor.host = g;
                        n.jqxEditor.element = g[0];
                        j.element = g[0];
                        g[0].id = j._textArea.id;
                        j._textArea.id = j._textArea.id + "TextArea";
                        b(j.element).addClass(j.toThemeProperty("jqx-widget"));
                        j.host = b(j.element);
                        j.host.data(n)
                    } else {
                        var n = j.host.data();
                        n.jqxEditor.host = g;
                        n.jqxEditor.element = g[0];
                        j.element = g[0];
                        j.host = b(j.element);
                        j.host.data(n)
                    }
                    try {
                        j.editorDocument.execCommand("useCSS", false, false);
                        j.editorDocument.execCommand("enableInlineTableEditing", null, false)
                    } catch (p) {}
                    try {
                        j.editorDocument.execCommand("styleWithCSS", 0, true)
                    } catch (p) {}
                    j.editorDocument.close();
                    j.editor = b(j.editorDocument.body);
                    j.editor.html(h).attr("spellcheck", false).attr("autocorrect", "off")
                };
                k();
                b.jqx.utilities.resize(j.host, function() {
                    j.widget.css("width", j.width);
                    j.widget.css("height", j.height);
                    j._arrange()
                })
            }
        },
        focus: function() {
            var e = this;
            if (b.jqx.browser.mozilla) {
                if (!e.focused) {
                    if (e.iframe) {
                        e.iframe.focus()
                    }
                    e.selection.selectNode(e.editor[0].firstChild, true);
                    e.selection.getRange().collapse(true)
                }
            }
            e.editor.focus();
            var d = e.range != null ? e.range : e.getRange();
            e.selectRange(d)
        },
        print: function() {
            var d = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
            d.document.open();
            d.document.write('<!doctype html><html><head><title>Print</title></head><body onload="print();">' + this.val() + "</body></html>");
            d.document.close()
        },
        refresh: function(d) {
            var m = this;
            b.each(this.defaultLocalization, function(i, r) {
                if (!m.localization[i]) {
                    m.localization[i] = r
                }
            });
            m._removeHandlers();
            m.toolbar.addClass(m.toThemeProperty("jqx-widget-header"));
            if (m.content) {
                m.widget.css("width", m.width);
                m.widget.css("height", m.height);
                m.widget.addClass(m.toThemeProperty("jqx-editor"));
                m.widget.addClass(m.toThemeProperty("jqx-widget"));
                m.widget.addClass(m.toThemeProperty("jqx-rc-all"));
                m.widget.addClass(m.toThemeProperty("jqx-widget-header"));
                m.content.addClass(m.toThemeProperty("jqx-widget-content"));
                m.container.addClass(m.toThemeProperty("jqx-editor-container"))
            } else {
                m.toolbarContainer.addClass(m.toThemeProperty("jqx-widget-header"));
                m.toolbarContainer.addClass(m.toThemeProperty("jqx-editor-toolbar-inline"));
                m.toolbarContainer.addClass(m.toThemeProperty("jqx-widget"));
                m.toolbarContainer.addClass(m.toThemeProperty("jqx-rc-all"));
                m.toolbarContainer.hide();
                m.toolbarContainer.css("position", "absolute");
                m.editor.addClass(m.toThemeProperty("jqx-editor-inline"));
                m.toolbarContainer.css("width", m.host.outerWidth() + "px")
            }
            var n = m.toolbarContainer.index();
            if (m.toolbarPosition == "top" && n != 0 || m.toolbarPosition == "bottom" && n != 1) {
                switch (m.toolbarPosition) {
                    case "bottom":
                        m.toolbarContainer.insertAfter(m.content);
                        break;
                    case "top":
                    default:
                        m.toolbarContainer.insertBefore(m.content);
                        break
                }
            }
            var h = m.tools;
            if (h !== false) {
                var l = h.split(" ");
                var p = h.split(" | ");
                var q = function(i, r) {
                    b.each(r, function(y, F) {
                        var u = m.commands[this];
                        if (!u) {
                            if (m.createCommand) {
                                u = m.createCommand(this.toString());
                                if (!u) {
                                    return true
                                }
                                if (!m.commands[this]) {
                                    m.commands[this] = u
                                }
                            } else {
                                return true
                            }
                        } else {
                            if (m.createCommand) {
                                var x = m.createCommand(this.toString());
                                u = b.extend(u, x)
                            }
                        }
                        if (m.localization[this]) {
                            u.tooltip = m.localization[this]
                        }
                        switch (u.type) {
                            case "list":
                                if (u.widget) {
                                    u.widget.jqxDropDownList("destroy")
                                }
                                var A = function(R, Q, S) {
                                    if (u.command == "formatblock") {
                                        return "<" + S + ' unselectable="on" style="padding: 0px; margin: 0px;">' + Q + "</" + S + ">"
                                    } else {
                                        if (u.command == "fontname") {
                                            return '<span unselectable="on" style="font-family: ' + S + ';">' + Q + "<span>"
                                        } else {
                                            if (u.command == "fontsize") {
                                                return '<span unselectable="on" style="font-size: ' + S + ';">' + Q + "<span>"
                                            }
                                        }
                                    }
                                };
                                var t = function() {
                                    var Q = m.toThemeProperty("jqx-editor-toolbar-icon") + " " + m.toThemeProperty("jqx-editor-toolbar-icon-" + u.command);
                                    var R = "<div unselectable='on' style='margin-top: 0px; padding:0px;' class='" + Q + "'></div>";
                                    return R
                                };
                                var C = u.command == "formatblock" || u.command == "fontname" || u.command == "fontsize";
                                var z = u.value || [];
                                var N = new Array();
                                var J = u.placeHolder || "Please Choose:";
                                if (u.command == "fontname") {
                                    b.each(z, function() {
                                        var Q = m.localization[this.label];
                                        N.push({
                                            label: Q,
                                            value: this.value
                                        })
                                    })
                                } else {
                                    if (u.command == "formatblock") {
                                        J = m.localization.format;
                                        b.each(z, function() {
                                            if (this.label.indexOf("Header") >= 0) {
                                                var Q = this.label.replace("Header", m.localization.Header)
                                            } else {
                                                var Q = m.localization[this.label]
                                            }
                                            N.push({
                                                label: Q,
                                                value: this.value
                                            })
                                        })
                                    } else {
                                        N = z
                                    }
                                }
                                var P = {
                                    enableBrowserBoundsDetection: true,
                                    touchMode: m.touchMode,
                                    width: u.width || 100,
                                    height: u.height || 25,
                                    dropDownWidth: u.dropDownWidth || "auto",
                                    autoDropDownHeight: (u.value && u.value.length) < 12 ? true : false,
                                    placeHolder: J,
                                    source: N,
                                    theme: m.theme,
                                    keyboardSelection: false,
                                    focusable: false,
                                    disabled: m.disabled,
                                    rtl: m.rtl,
                                    selectionRenderer: u.command == "fontsize" ? t : null,
                                    renderer: C ? A : null
                                };
                                var D = "jqx-disableselect " + m.toThemeProperty("jqx-editor-dropdownlist") + " " + m.toThemeProperty("jqx-editor-toolbar-item");
                                var w = b("<div unselectable='on' class='" + D + "'></div>");
                                w.appendTo(i);
                                w.jqxDropDownList(P);
                                if (u.init) {
                                    u.init(w)
                                }
                                var F = null;
                                var E = null;
                                var K = "";
                                m.addHandler(w, "mousedown", function(R) {
                                    if (b(".jqx-editor-dropdownpicker").length > 0) {
                                        b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                                    }
                                    if (b(".jqx-editor-dropdownlist").length > 0) {
                                        var Q = b(".jqx-editor-dropdownlist");
                                        b.each(Q, function(S, T) {
                                            if (T != w[0]) {
                                                b(T).jqxDropDownList("close")
                                            }
                                        })
                                    }
                                });
                                m.addHandler(w, "open", function(Q) {
                                    if (!m.focused) {
                                        m.focus()
                                    }
                                    m.updating = true;
                                    m.activeElement = w;
                                    F = w.val();
                                    K = ""
                                });
                                m.addHandler(w, "change", function(Q) {
                                    m.updating = false;
                                    m.activeElement = null;
                                    E = w.val();
                                    K = Q.args.type;
                                    if (b.jqx.browser.msie && b.jqx.browser.version < 9) {
                                        m.focus()
                                    }
                                });
                                m.addHandler(w, "close", function(Q) {
                                    m.updating = false;
                                    m.activeElement = null;
                                    if (F != E) {
                                        if (K == "mouse" || K == "keyboard") {
                                            m._refreshTools()
                                        }
                                    }
                                });
                                m._addCommandHandler(w, "change", u.command, null, u);
                                break;
                            case "colorPicker":
                                if (u.widget) {
                                    b(u.colorPicker).remove();
                                    u.widget.jqxDropDownButton("destroy")
                                }
                                var B = b('<div unselectable="on" style="padding-top: 4px;"></div>').attr("id", "picker-" + u.command);
                                var D = "jqx-disableselect " + m.toThemeProperty("jqx-editor-dropdownpicker") + " " + m.toThemeProperty("jqx-editor-toolbar-item");
                                var w = b("<div unselectable='on' class='" + D + "'></div>");
                                w.appendTo(i);
                                w.append(B);
                                w.jqxDropDownButton({
                                    touchMode: m.touchMode,
                                    disabled: m.disabled,
                                    enableBrowserBoundsDetection: true,
                                    width: u.width || 45,
                                    height: u.height || 25,
                                    rtl: m.rtl,
                                    focusable: false,
                                    theme: m.theme
                                });
                                var I = b('<div unselectable="on" style="z-index: 55;">');
                                var s = m.toThemeProperty("jqx-editor-toolbar-icon") + " " + m.toThemeProperty("jqx-editor-toolbar-icon-" + u.command);
                                var O = b("<div unselectable='on' class='" + s + "'></div>");
                                I.append(O);
                                var L = b('<div unselectable="on" class="jqx-editor-color-bar">').attr("id", "bar-" + u.command).css("background-color", u.value);
                                I.append(L);
                                w.jqxDropDownButton("setContent", I);
                                B.append(b(m.colorPickerTemplate));
                                u.colorPicker = B;
                                if (u.init) {
                                    u.init(w)
                                }
                                B.find("tr").attr("role", "row").attr("unselectable", "on");
                                B.find("td").attr("role", "gridcell").attr("unselectable", "on").css("-webkit-user-select", "none");
                                B.find("div").attr("unselectable", "on");
                                m.addHandler(w, "mousedown", function(R) {
                                    if (b(".jqx-editor-dropdownlist").length > 0) {
                                        b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                                    }
                                    if (b(".jqx-editor-dropdownpicker").length > 0) {
                                        var Q = b(".jqx-editor-dropdownpicker");
                                        b.each(Q, function(S, T) {
                                            if (T != w[0]) {
                                                b(T).jqxDropDownButton("close")
                                            }
                                        })
                                    }
                                });
                                m.addHandler(w, "open", function() {
                                    if (!m.focused) {
                                        m.focus()
                                    }
                                    m.updating = true;
                                    m.activeElement = B
                                });
                                m.addHandler(w, "close", function(Q) {
                                    m.updating = false;
                                    m.activeElement = null;
                                    if (F != E) {
                                        if (K == "mouse" || K == "keyboard") {
                                            m._refreshTools()
                                        }
                                    }
                                });
                                m.addHandler(B, "keydown", function(Q) {
                                    var Y = Q.keyCode;
                                    var V = b(B).find(".jqx-editor-color-picker-selected-cell");
                                    var aa = B.find("tr");
                                    var T = aa.length;
                                    var S = V.parent().children().length;
                                    var U = V.index();
                                    var W = -999;
                                    var Z = V.parent();
                                    b.each(aa, function(ab, ac) {
                                        if (this == Z[0]) {
                                            W = ab;
                                            return false
                                        }
                                    });
                                    switch (Y) {
                                        case 27:
                                            w.jqxDropDownButton("close");
                                            break;
                                        case 13:
                                            b(V).trigger("mousedown");
                                            break;
                                        case 38:
                                            W--;
                                            break;
                                        case 40:
                                            W++;
                                            break;
                                        case 39:
                                            U++;
                                            break;
                                        case 37:
                                            U--;
                                            break
                                    }
                                    if (W >= 0 && W <= T) {
                                        if (U >= 0 && U <= S) {
                                            var Z = B.find("tr")[W];
                                            var X = b(Z).children()[U];
                                            var R = b(X).children().css("background-color");
                                            u.val(R)
                                        }
                                    }
                                });
                                var M = b(B).find("td");
                                u.val = function(Q) {
                                    var R = m._rgbToHex(Q);
                                    b.each(M, function() {
                                        var S = b(this).children().css("background-color");
                                        var T = m._rgbToHex(S);
                                        if (T == R) {
                                            M.removeClass("jqx-editor-color-picker-selected-cell");
                                            b(this).addClass("jqx-editor-color-picker-selected-cell");
                                            b("#bar-" + u.command).css("background", S);
                                            return false
                                        }
                                    })
                                };
                                u.val(u.value);
                                m._addCommandHandler(M, "mousedown", u.command, null, u);
                                break;
                            case "button":
                            case "toggleButton":
                            default:
                                if (u.widget) {
                                    if (u.type == "button") {
                                        u.widget.jqxButton("destroy")
                                    } else {
                                        u.widget.jqxToggleButton("destroy")
                                    }
                                }
                                var v = u.command;
                                var H = u.action;
                                var s = m.toThemeProperty("jqx-editor-toolbar-icon") + " " + m.toThemeProperty("jqx-editor-toolbar-icon-" + v);
                                var O = b("<div unselectable='on' class='" + s + "'></div>");
                                var w = b("<div unselectable='on'></div>").addClass("jqx-disableselect").addClass(m.toThemeProperty("jqx-editor-toolbar-button"));
                                if (!u.init) {
                                    w.append(O)
                                } else {
                                    if (v) {
                                        w.append(O)
                                    }
                                }
                                w.appendTo(i);
                                if (u.type == "button") {
                                    w.jqxButton({
                                        disabled: m.disabled,
                                        rtl: m.rtl,
                                        theme: m.theme
                                    })
                                } else {
                                    if (u.type == "toggleButton") {
                                        w.jqxToggleButton({
                                            disabled: m.disabled,
                                            rtl: m.rtl,
                                            uiToggle: false,
                                            theme: m.theme
                                        })
                                    }
                                }
                                if (u.init) {
                                    u.init(w)
                                }
                                u.toggled = false;
                                u.toggle = function() {
                                    u.toggled = !u.toggled
                                };
                                m.addHandler(w, "mousedown", function(Q) {
                                    if (Q.preventDefault) {
                                        Q.preventDefault()
                                    }
                                    if (Q.stopPropagation) {
                                        Q.stopPropagation()
                                    }
                                    return false
                                });
                                if (!b.jqx.mobile.isTouchDevice()) {
                                    m._addCommandHandler(w, "click", v, H, u)
                                } else {
                                    m._addCommandHandler(w, "mousedown", v, H, u)
                                }
                                break
                        }
                        u.widget = w;
                        if (w) {
                            try {
                                if (u.tooltip != "") {
                                    u.widget.attr("title", u.tooltip);
                                    u.widget.attr("data-tooltip", u.tooltip)
                                }
                                if (u.command) {
                                    u.widget.attr("data-command", u.command)
                                }
                                u.widget.attr("aria-label", u.tooltip)
                            } catch (G) {}
                            if (u.type == "button" || u.type == "toggleButton") {
                                if (r.length > 2) {
                                    if (y == 0) {
                                        w.css("border-right-radius", "0px");
                                        w.addClass(m.toThemeProperty("jqx-rc-l"))
                                    } else {
                                        if (y == r.length - 1) {
                                            w.css("border-left-radius", "0px");
                                            w.addClass(m.toThemeProperty("jqx-rc-r"))
                                        }
                                    }
                                    w.removeClass(m.toThemeProperty("jqx-rc-all"))
                                }
                                if (y != 0 && y != r.length - 1 && r.length > 2) {
                                    w.css("border-left-radius", "0px");
                                    w.css("border-right-radius", "0px");
                                    w.removeClass(m.toThemeProperty("jqx-rc-all"))
                                } else {
                                    if (r.length == 2) {
                                        if (y == 0) {
                                            w.css("border-right-radius", "0px");
                                            w.addClass(m.toThemeProperty("jqx-rc-l"))
                                        } else {
                                            w.css("border-left-radius", "0px");
                                            w.addClass(m.toThemeProperty("jqx-rc-r"))
                                        }
                                        w.removeClass(m.toThemeProperty("jqx-rc-all"))
                                    } else {
                                        if (r.length == 1) {
                                            w.css("margin-right", "0px")
                                        }
                                    }
                                }
                            }
                        }
                    })
                };
                m.toolbar.css("direction", !this.rtl ? "ltr" : "rtl");
                if (p.length == 0) {
                    q(m.toolbar, l)
                } else {
                    for (var j = 0; j < p.length; j++) {
                        var f = p[j];
                        var l = f.split(" ");
                        var o = m.toThemeProperty("jqx-editor-toolbar-group") + " " + m.toThemeProperty("jqx-fill-state-normal");
                        var k = b("<div class='" + o + "'></div>");
                        k.addClass(m.toThemeProperty("jqx-rc-all"));
                        m.toolbar.append(k);
                        q(k, l)
                    }
                    var g = m.toolbar.find(".jqx-editor-toolbar-group");
                    var e = g.length;
                    for (var j = 0; j < e; j++) {
                        if (b(g[j]).children().length == 0) {
                            b(g[j]).remove()
                        }
                    }
                }
                if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                    b(".jqx-editor-toolbar-group").css("float", "left");
                    b(".jqx-editor-toolbar-group").children().css("float", "left");
                    b(".jqx-editor-toolbar-group").css("zoom", "1");
                    b(".jqx-editor-toolbar-group").children().css("zoom", "1")
                }
            }
            m._arrange();
            m._addHandlers()
        },
        _arrange: function() {
            var d = this;
            if (d.content) {
                if (d.tools == "" || d.tools == false) {
                    d.content.height(d.container.outerHeight() - parseInt(d.container.css("padding-top")) - parseInt(d.container.css("padding-bottom")) - 6);
                    d.content.css("margin-top", "4px");
                    d.toolbar.hide()
                } else {
                    d.toolbar.show();
                    d.content.css("margin-top", "0px");
                    d.content.height(d.container.outerHeight() - d.toolbar.outerHeight() - parseInt(d.container.css("padding-top")) - parseInt(d.container.css("padding-bottom")) - 2);
                    if (d.toolbarPosition != "top") {
                        d.content.css("margin-top", "4px");
                        d.content.css("margin-bottom", "0px")
                    }
                }
                if (b.jqx.browser.msie && b.jqx.browser.version < 8) {
                    d.content.css("margin-top", "4px");
                    d.content.height(d.container.height() - d.toolbar.outerHeight() - 2 * parseInt(d.container.css("padding-bottom")) - 10);
                    d.content.width(d.container.width() - 2 * parseInt(d.container.css("padding-left")) - 2)
                }
                if (d.editor.height() < d.content.height()) {
                    d.editor.height(d.content.height())
                }
            }
        },
        propertyChangedHandler: function(d, e, h, g) {
            var f = d;
            if (f.isInitialized == undefined || f.isInitialized == false) {
                return
            }
            if (e == "pasteMode" || e == "lineBreak" || e == "editable") {
                return
            }
            if (e == "disabled") {
                d._refreshTools()
            }
            if (e == "width" || e == "height" || e == "toolbarPosition") {
                d._arrange();
                return
            }
            if (e == "theme") {
                b.jqx.utilities.setTheme(h, g, d.host)
            }
            d.refresh()
        },
        selectRange: function(d) {
            var e = this;
            if (!d) {
                d = e.getRange()
            }
            e.selection.selectRange(d)
        },
        getRange: function() {
            var d = this;
            return d.selection.getRange()
        },
        getSelectedElement: function() {
            var h, k, d, g;
            var i = this;
            try {
                if (i.editorDocument.getSelection) {
                    var l = i.editorDocument.getSelection();
                    h = l.getRangeAt(l.rangeCount - 1);
                    d = h.startContainer;
                    g = h.endContainer;
                    k = h.commonAncestorContainer;
                    if (d.nodeName == "#text") {
                        k = k.parentNode
                    }
                    if (d.nodeName == "#text") {
                        d = d.parentNode
                    }
                    if (d.nodeName.toLowerCase() == "body") {
                        d = d.firstChild
                    }
                    if (g.nodeName == "#text") {
                        g = g.parentNode
                    }
                    if (g.nodeName.toLowerCase() == "body") {
                        g = g.lastChild
                    }
                    if (d == g) {
                        k = d
                    }
                    return g
                } else {
                    if (i.editorDocument.selection) {
                        h = i.editorDocument.selection.createRange();
                        if (!h.duplicate) {
                            return null
                        }
                        k = h.parentElement();
                        var f = h.duplicate();
                        var e = h.duplicate();
                        f.collapse(true);
                        e.moveToElementText(f.parentElement());
                        e.setEndPoint("EndToStart", f);
                        d = f.parentElement();
                        f = h.duplicate();
                        e = h.duplicate();
                        e.collapse(false);
                        f.moveToElementText(e.parentElement());
                        f.setEndPoint("StartToEnd", e);
                        g = e.parentElement();
                        if (d.nodeName.toLowerCase() == "body") {
                            d = d.firstChild
                        }
                        if (g.nodeName.toLowerCase() == "body") {
                            g = g.lastChild
                        }
                        if (d == g) {
                            k = d
                        }
                        return g
                    }
                }
            } catch (j) {
                return null
            }
            return null
        },
        _addHandlers: function() {
            var e = this;
            e.addHandler(e.toolbar, "mousedown.editor" + e.element.id, function(g) {
                if (g.preventDefault) {
                    g.preventDefault()
                }
                if (g.stopPropagation) {
                    g.stopPropagation()
                }
                return false
            });
            var f = function() {
                if (e._textArea) {
                    if (!e.updating) {
                        e._textArea.value = e.val()
                    }
                }
                if (e.changed) {
                    e._raiseEvent("change");
                    e.changed = false
                }
                e.focused = false;
                if (e.inline) {
                    e.host.removeClass(e.toThemeProperty("jqx-fill-state-focus"));
                    e.host.removeClass(e.toThemeProperty("jqx-editor-inline-focus"));
                    if (e.tools == "" || e.tools == null) {
                        return
                    }
                    e.toolbarContainer.fadeOut("fast")
                }
            };
            var d = function() {
                e.focused = true;
                if (e.inline) {
                    e.host.addClass(e.toThemeProperty("jqx-fill-state-focus"));
                    e.host.addClass(e.toThemeProperty("jqx-editor-inline-focus"));
                    e.host.addClass(e.toThemeProperty("jqx-rc-all"));
                    if (e.tools == "" || e.tools == null) {
                        return
                    }
                    e.toolbarContainer.fadeIn("fast");
                    var g = e.host.coord();
                    if (e.toolbarPosition != "bottom") {
                        e.toolbarContainer.offset({
                            left: g.left,
                            top: g.top - e.toolbarContainer.outerHeight() - 5
                        })
                    } else {
                        e.toolbarContainer.offset({
                            left: g.left,
                            top: g.top + 5 + e.host.height()
                        })
                    }
                }
            };
            if (b.jqx.browser.mozilla) {
                this.addHandler(b(document), "mousedown.editor" + e.element.id, function(g) {
                    f()
                })
            }
            e.addHandler(e.editor, "blur.editor" + e.element.id, function(g) {
                f()
            });
            e.addHandler(e.editor, "focus.editor" + e.element.id, function(g) {
                d()
            });
            e.addHandler(e.editor, "beforedeactivate.editor" + e.element.id, function(g) {
                e.range = e.getRange()
            });
            e.addHandler(e.editor, "mousedown.editor" + e.element.id, function(g) {
                if (!g.target.href) {
                    if (e.linkPopup) {
                        e.linkPopup.remove()
                    }
                }
                e.range = e.getRange();
                if (b.jqx.browser.mozilla) {
                    d();
                    g.stopPropagation()
                }
                if (b(".jqx-editor-dropdownpicker").length > 0) {
                    b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                }
                if (b(".jqx-editor-dropdownlist").length > 0) {
                    b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                }
                if (e.inline) {
                    e.editor.focus()
                }
            });
            if (b.jqx.mobile.isTouchDevice()) {
                e.addHandler(b(e.editorDocument), "selectionchange.editor" + e.element.id, function() {
                    if (e.editorDocument.activeElement != e.editor[0]) {
                        setTimeout(function() {
                            if (e.iframe) {
                                e.iframe[0].contentWindow.focus()
                            }
                        }, 500)
                    }
                });
                e.addHandler(b(e.editorDocument), "touchstart.editor" + e.element.id, function() {
                    setTimeout(function() {
                        if (e.iframe) {
                            e.iframe[0].contentWindow.focus()
                        }
                    }, 500)
                })
            }
            e.addHandler(e.editor, "mouseup.editor" + e.element.id, function(g) {
                if (e._documentMode == "source") {
                    return true
                }
                e.range = e.getRange();
                e._refreshTools(null, true)
            });
            e.addHandler(e.editor, "keydown.editor" + e.element.id, function(g) {
                if (e.keyPressed) {
                    e.keyPressed(g)
                }
                if (e._documentMode == "source") {
                    return true
                }
                if (b.jqx.browser.mozilla) {
                    if (!e.focused) {
                        d()
                    }
                }
                e.changeType = "keyboard";
                if (e.disabled) {
                    if (g.preventDefault) {
                        g.preventDefault()
                    }
                    return false
                }
                if (e.updating) {
                    if (e.activeElement) {
                        var m = b.Event("keydown");
                        b.extend(m, g);
                        e.activeElement.trigger(m)
                    }
                    if (g.preventDefault) {
                        g.preventDefault()
                    }
                    return false
                }
                var n = g || window.event;
                var q = n.keyCode;
                var r = String.fromCharCode(q).toLowerCase();
                if (!e.editable) {
                    var l = [9, 33, 34, 35, 36, 37, 38, 39, 40, 40, 45];
                    if (b.inArray(n.keyCode, l) == -1 && !(n.ctrlKey && r == "c") && !(n.ctrlKey && r == "a")) {
                        g.preventDefault()
                    }
                }
                if (e.selection.getText().length > 0 || e.linkPopup) {
                    var l = [8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, 40, 45, 46];
                    if (!b.inArray(n.keyCode, l) != -1 || (n.keyCode == 65 && n.ctrlKey && !n.altKey && !n.shiftKey)) {
                        if (e._refreshToolsTimer) {
                            clearTimeout(e._refreshToolsTimer)
                        }
                        e._refreshToolsTimer = setTimeout(function() {
                            e._refreshTools(null, true, n.keyCode)
                        }, 10)
                    }
                }
                if (q == 13 && e.lineBreak != "default") {
                    var k = e.getSelectedElement();
                    if (k) {
                        var o = k.nodeName.toLowerCase();
                        switch (o) {
                            case "pre":
                            case "li":
                            case "ul":
                            case "ol":
                            case "h1":
                            case "h2":
                            case "h3":
                            case "h4":
                            case "h5":
                            case "h6":
                                return true
                        }
                        var p = k;
                        while (p != null) {
                            if (p.nodeName == "#document") {
                                p = e.editorDocument.body;
                                break
                            }
                            if (p.parentNode == e.editorDocument.body || p == e.editorDocument.body) {
                                break
                            }
                            p = p.parentNode
                        }
                    }
                    if (p) {
                        var j = e.getRange();
                        if (e.editorDocument.body.innerHTML == "<div></div>" && e.lineBreak != "br") {
                            e.selection.insertContent("&#8203;")
                        }
                        if (e.lineBreak == "div") {
                            if (p == e.editorDocument.body) {
                                b(p).append("<div>&#8203;</div><span id='INSERTION_MARKER'>&nbsp;</span>")
                            } else {
                                b("<div>&#8203;</div><span id='INSERTION_MARKER'>&nbsp;</span>").insertAfter(p)
                            }
                        } else {
                            if (e.lineBreak == "p") {
                                if (p == e.editorDocument.body) {
                                    b(p).append("<p>&#8203;</p><span id='INSERTION_MARKER'>&nbsp;</span>")
                                } else {
                                    b("<p>&#8203;</p><span id='INSERTION_MARKER'>&nbsp;</span>").insertAfter(p)
                                }
                            } else {
                                e.execute("insertHTML", "<br/>&#8203;<span id='INSERTION_MARKER'>&nbsp;</span>")
                            }
                        }
                        e.selectRange(j);
                        var i = b(e.editorDocument).find("#INSERTION_MARKER");
                        if (e.lineBreak != "br") {
                            e.selection.selectNode(b(i).prev()[0], true)
                        } else {
                            e.selection.selectNode(i[0], true);
                            if (e.getRange().setStartAfter) {
                                e.getRange().setStartAfter(i[0])
                            }
                        }
                        i.remove();
                        e.selection.collapse(false);
                        if (p && p.nodeName && e.lineBreak == "br") {
                            if (p.nodeName.toLowerCase() != "#text") {
                                e.selection.selectNode(p, true);
                                if (e.getRange().setStartAfter) {
                                    e.getRange().setStartAfter(p)
                                }
                                e.selection.collapse(false)
                            }
                        }
                        if (e.lineBreak != "br") {
                            j = e.getRange();
                            if (j.select) {
                                j.select()
                            }
                        }
                        if (g.preventDefault) {
                            g.preventDefault()
                        }
                        return false
                    }
                }
                if (n.ctrlKey && (r == "k" || r == "u" || r == "b" || r == "i")) {
                    if (g.preventDefault) {
                        g.preventDefault()
                    }
                    var h = null;
                    switch (r) {
                        case "k":
                            h = "link";
                            break;
                        case "u":
                            h = "underline";
                            break;
                        case "b":
                            h = "bold";
                            break;
                        case "i":
                            h = "italic";
                            break
                    }
                    if (e.commands[h].widget) {
                        e.commands[h].widget.trigger("click")
                    }
                    return false
                }
            });
            e.addHandler(e.editor, "paste.editor" + e.element.id, function(g) {
                if (e._documentMode == "source") {
                    return true
                }
                if (e.readOnly) {
                    return true
                }
                e.updating = true;
                e.readOnly = true;
                var k = g;
                try {
                    var h = function(r, q) {
                        if (q) {
                            if (!e.paragraphise) {
                                r = r.replace(/\n/g, "<br />")
                            } else {
                                r = "<p>" + r + "</p>";
                                r = r.replace(/\n/g, "</p><p>");
                                r = r.replace(/<p>\s<\/p>/gi, "")
                            }
                        } else {
                            r = r.replace(/<html[^>]*?>(.*)/gim, "$1");
                            r = r.replace(/<\/html>/gi, "");
                            r = r.replace(/<body[^>]*?>(.*)/gi, "$1");
                            r = r.replace(/<\/body>/gi, "");
                            r = r.replace(/<style[^>]*?>[\s\S]*?<\/style[^>]*>/gi, "");
                            r = r.replace(/<(?:meta|link)[^>]*>\s*/gi, "");
                            r = r.replace(/<\\?\?xml[^>]*>/gi, "");
                            r = r.replace(/<w:[^>]*>[\s\S]*?<\/w:[^>]*>/gi, "");
                            r = r.replace(/<o:p>\s*<\/o:p>/g, "");
                            r = r.replace(/<o:p>[\s\S]*?<\/o:p>/g, "&nbsp;");
                            r = r.replace(/<\/?\w+:[^>]*>/gi, "");
                            r = r.replace(/<\!--[\s\S]*?-->/g, "");
                            r = r.replace(/<\!\[[\s\S]*?\]>/g, "");
                            r = r.replace(/\s*mso-[^:]+:[^;"']+;?/gi, "");
                            r = r.replace(/<(\w[^>]*) style='([^\']*)'([^>]*)/gim, "<$1$3");
                            r = r.replace(/<(\w[^>]*) style="([^\"]*)"([^>]*)/gim, "<$1$3");
                            r = r.replace(/\s*margin: 0cm 0cm 0pt\s*;/gi, "");
                            r = r.replace(/\s*margin: 0cm 0cm 0pt\s*"/gi, '"');
                            r = r.replace(/\s*text-indent: 0cm\s*;/gi, "");
                            r = r.replace(/\s*text-indent: 0cm\s*"/gi, '"');
                            r = r.replace(/\s*text-align: [^\s;]+;?"/gi, '"');
                            r = r.replace(/\s*page-break-before: [^\s;]+;?"/gi, '"');
                            r = r.replace(/\s*font-variant: [^\s;]+;?"/gi, '"');
                            r = r.replace(/\s*tab-stops:[^;"']*;?/gi, "");
                            r = r.replace(/\s*tab-stops:[^"']*/gi, "");
                            r = r.replace(/\s*face="[^"']*"/gi, "");
                            r = r.replace(/\s*face=[^ >]*/gi, "");
                            r = r.replace(/\s*font-family:[^;"']*;?/gi, "");
                            r = r.replace(/\s*font-size:[^;"']*;?/gi, "");
                            r = r.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3");
                            r = r.replace(/<(\w+)[^>]*\sstyle="[^"']*display\s?:\s?none[\s \S]*?<\/\1>/ig, "");
                            r = r.replace(/\s*style='\s*'/gi, "");
                            r = r.replace(/\s*style="\s*"/gi, "");
                            r = r.replace(/<span\s*[^>]*>\s*&nbsp;\s*<\/span>/gi, "&nbsp;");
                            r = r.replace(/<span\s*[^>]*><\/span>/gi, "");
                            r = r.replace(/<(\w[^>]*) align=([^ |>]*)([^>]*)/gi, "<$1$3");
                            r = r.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3");
                            r = r.replace(/<span([^>]*)>([\s\S]*?)<\/span>/gi, "$2");
                            r = r.replace(/<font\s*>([\s\S]*?)<\/font>/gi, "$1");
                            r = r.replace(/<(u|i|strike)>&nbsp;<\/\1>/gi, "&nbsp;");
                            r = r.replace(/<h\d>\s*<\/h\d>/gi, "");
                            r = r.replace(/<(\w[^>]*) language=([^ |>]*)([^>]*)/gi, "<$1$3");
                            r = r.replace(/<(\w[^>]*) onmouseover="([^\"']*)"([^>]*)/gi, "<$1$3");
                            r = r.replace(/<(\w[^>]*) onmouseout="([^\"']*)"([^>]*)/gi, "<$1$3");
                            r = r.replace(/<h(\d)([^>]*)>/gi, "<h$1>");
                            r = r.replace(/<(h\d)><font[^>]*>([\s\S]*?)<\/font><\/\1>/gi, "<$1>$2</$1>");
                            r = r.replace(/<(h\d)><em>([\s\S]*?)<\/em><\/\1>/gi, "<$1>$2</$1>");
                            r = r.replace(/<b\b[^>]*>(.*?)<\/b[^>]*>/gi, "<strong>$1</strong>");
                            r = r.replace(/<i\b[^>]*>(.*?)<\/i[^>]*>/gi, "<em>$1</em>");
                            r = r.replace(/<\s+[^>]*>/gi, "");
                            r = r.replace(/<span>([\s\S]*?)<\/span>/gi, "$1");
                            r = r.replace(/<span>([\s\S]*?)<\/span>/gi, "$1");
                            r = r.replace(/<div>([\s\S]*?)<\/div>/gi, "$1");
                            r = r.replace(/<div>([\s\S]*?)<\/div>/gi, "$1");
                            r = r.replace(/<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, "");
                            r = r.replace(/<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, "");
                            r = r.replace(/<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, "");
                            if (r.trim) {
                                r = r.trim()
                            }
                            if (!e.paragraphise) {
                                r.replace(/<p>/gi, "<br />");
                                r.replace(/<\/p>/gi, "")
                            } else {
                                var p = r.substr(0, 2);
                                if ("<p" !== p) {
                                    r = "<p>" + r + "</p>";
                                    r = r.replace(/\n/g, "</p><p>");
                                    r = r.replace(/<br[^>]*>/gi, "</p><p>")
                                }
                            }
                            r = r.replace(/<br>/gi, "<br />");
                            r = r.replace(/<br[^>]*><\/p>/gim, "</p>");
                            r = r.replace(/<p>&nbsp;<\/p>/gi, "");
                            r = r.replace(/<p>\s<\/p>/gi, "");
                            r = r.replace(/<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, "");
                            r = r.replace(/MsoNormal/gi, "");
                            r = r.replace(/<\/?meta[^>]*>/gi, "");
                            r = r.replace(/<\/?xml[^>]*>/gi, "");
                            r = r.replace(/<\?xml[^>]*\/>/gi, "");
                            r = r.replace(/<!--(.*)-->/gi, "");
                            r = r.replace(/<!--(.*)>/gi, "");
                            r = r.replace(/<!(.*)-->/gi, "");
                            r = r.replace(/<w:[^>]*>(.*)<\/w:[^>]*>/gi, "");
                            r = r.replace(/<w:[^>]*\/>/gi, "");
                            r = r.replace(/<\/?w:[^>]*>/gi, "");
                            r = r.replace(/<m:[^>]*\/>/gi, "");
                            r = r.replace(/<m:[^>]>(.*)<\/m:[^>]*>/gi, "");
                            r = r.replace(/<o:[^>]*>(.*)<\/o:[^>]*>/gi, "");
                            r = r.replace(/<o:[^>]*\/>/gi, "");
                            r = r.replace(/<\/?m:[^>]*>/gi, "");
                            r = r.replace(/style=\"([^>]*)\"/gi, "");
                            r = r.replace(/style=\'([^>]*)\'/gi, "");
                            r = r.replace(/class=\"(.*)\"/gi, "");
                            r = r.replace(/class=\'(.*)\'/gi, "");
                            r = r.replace(/<b>/gi, "<strong>");
                            r = r.replace(/<\/b>/gi, "</strong>");
                            r = r.replace(/<p[^>]*>/gi, "<p>");
                            r = r.replace(/<\/p[^>]*>/gi, "</p>");
                            r = r.replace(/<span[^>]*>/gi, "");
                            r = r.replace(/<\/span[^>]*>/gi, "");
                            r = r.replace(/<st1:[^>]*>/gi, "");
                            r = r.replace(/<\/st1:[^>]*>/gi, "");
                            r = r.replace(/<font[^>]*>/gi, "");
                            r = r.replace(/<\/font[^>]*>/gi, "");
                            r = r.replace("  ", "");
                            r = r.replace(/<strong><\/strong>/gi, "");
                            r = r.replace(/<p><\/p>/gi, "");
                            r = r.replace(/\/\*(.*)\*\//gi, "");
                            r = r.replace(/<!--/gi, "");
                            r = r.replace(/-->/gi, "");
                            r = r.replace(/<style[^>]*>[^<]*<\/style[^>]*>/gi, "");
                            r = r.trim()
                        }
                        return r
                    };
                    var m = e.getRange();
                    if (e.pasteMode == "text" && !b.jqx.browser.mozilla) {
                        e.selection.insertContent('<textarea cols="50" contenteditable="false" class="jqx-editor-paste-element"></textarea>')
                    } else {
                        e.selection.insertContent('<div class="jqx-editor-paste-element">&nbsp;</div>')
                    }
                    var n = b(window).scrollTop();
                    var i = b(e.editorDocument).find(".jqx-editor-paste-element");
                    i.css("top", n + "px");
                    if (e.editor[0].createTextRange) {
                        g.preventDefault();
                        var o = e.editor[0].createTextRange();
                        o.moveToElementText(i[0]);
                        o.execCommand("Paste")
                    } else {
                        var j = e.editorDocument.createRange();
                        j.selectNodeContents(i[0]);
                        e.selectRange(j)
                    }
                    if (e.pasteMode == "text" && !b.jqx.browser.mozilla) {
                        i.select()
                    }
                    e.marker = i;
                    setTimeout(function() {
                        e.selectRange(m);
                        var s = function(B) {
                            var z = e.editorDocument.createElement("div");
                            var A = e.editorDocument.createDocumentFragment();
                            z.innerHTML = B;
                            while (z.firstChild) {
                                A.appendChild(z.firstChild)
                            }
                            return A
                        };
                        if (e.pasteMode != "text") {
                            var y = s(e.marker.html());
                            if (y.firstChild && y.firstChild.className === "jqx-editor-paste-element") {
                                var q = [];
                                for (var v = 0, t = y.childNodes.length; v < t; v++) {
                                    q.push(y.childNodes[v].innerHTML)
                                }
                                y = s(q.join("<br />"))
                            }
                            var p = document.createElement("div");
                            p.appendChild(y.cloneNode(true));
                            var x = p.innerHTML
                        } else {
                            var x = e.marker.val();
                            if (e.marker.html() != "" && e.marker.val().indexOf("\n") == -1) {
                                var x = e.marker.html();
                                x = x.replace(/&nbsp;/gm, "");
                                x = x.replace(/\n\n/gm, "\n");
                                x = x.replace(/<br[^>]*>/gi, "\n");
                                x = x.replace(/<li[^>]*>/gi, "\n");
                                x = x.replace(/<p[^>]*>/gi, "\n");
                                e.marker.html(x);
                                var x = e.marker.text()
                            }
                        }
                        var r = h(x, e.pasteMode == "text");
                        var w = e.getRange();
                        e.selection.insertContent(r + "<span id='INSERTION_MARKER'>&nbsp;</span>");
                        e.marker.remove();
                        var u = b(e.editorDocument).find("#INSERTION_MARKER");
                        e.selection.selectNode(u[0], true);
                        if (e.getRange().setStartAfter) {
                            e.getRange().setStartAfter(u[0])
                        }
                        u.remove();
                        e.selection.collapse(false);
                        u.removeAttr("id");
                        e._refreshTools();
                        e.changed = true
                    }, 100);
                    e.updating = false;
                    e.readOnly = false
                } catch (l) {
                    if (console) {
                        console.log(l)
                    }
                }
            });
            e.addHandler(e.editor, "keyup.editor" + e.element.id, function(i) {
                if (e._documentMode == "source") {
                    return true
                }
                if (e.updating || e.disabled || !e.editable) {
                    if (i.preventDefault) {
                        i.preventDefault()
                    }
                    if (i.stopPropagation) {
                        i.stopPropagation()
                    }
                    return false
                }
                e.range = e.getRange();
                e.changed = true;
                var h = i || window.event;
                var g = h.keyCode;
                var j = [8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, 40, 45, 46];
                if (b.inArray(h.keyCode, j) != -1 || (h.keyCode == 65 && h.ctrlKey && !h.altKey && !h.shiftKey)) {
                    e._refreshTools(null, true, h.keyCode)
                }
            });
            e.addHandler(e.editor, "click.editor" + e.element.id, function(g) {
                if (e._documentMode == "source") {
                    return true
                }
                if (e.editImage) {
                    b(e.editImage).removeClass("jqx-editor-focus");
                    e.editImage = null
                }
                if (g.target.tagName.toLowerCase() == "img") {
                    var h = g.target;
                    e.editImage = h;
                    b(e.editImage).addClass("jqx-editor-focus")
                }
            });
            e.addHandler(e.editor, "dblclick.editor" + e.element.id, function(g) {
                if (e._documentMode == "source") {
                    return true
                }
                if (g.target.tagName.toLowerCase() == "img") {
                    var h = g.target;
                    if (b("#imageWindow" + this.element.id).length > 0) {
                        e.editImage = h;
                        e._updateImageWindow()
                    }
                }
            })
        },
        _updateLinkWindow: function() {
            var g = this;
            var i = b("#linkWindow" + this.element.id);
            i.jqxWindow({
                position: {
                    center: g.widget
                }
            });
            i.jqxWindow("open");
            var e = i.find("input");
            var h = i.find(".jqx-editor-link-checkbox");
            var f = i.find("button:first");
            var d = b(i.find("button")[1]);
            if (g.editLink && g.editLink.href) {
                e[0].value = g.editLink.href || "";
                e[1].value = b(g.editLink).text() || g.editLink.href;
                h.val(b(g.editLink).attr("target") == "_blank");
                d.show()
            } else {
                e[0].value = "";
                e[1].value = "";
                if (!g.selection.isCollapsed()) {
                    var j = g.selection.getText();
                    if (j.match(/^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i)) {
                        e[0].value = j
                    } else {
                        e[1].value = j
                    }
                }
                h.val(false);
                d.hide()
            }
            if (e[0].value.length > 0) {
                f.jqxButton({
                    disabled: false
                })
            } else {
                f.jqxButton({
                    disabled: true
                })
            }
        },
        _updateImageWindow: function() {
            var g = this;
            var i = g.editImage;
            if (!i) {
                i = b("<img>")[0]
            }
            var h = b("#imageWindow" + this.element.id);
            h.jqxWindow({
                position: {
                    center: g.widget
                }
            });
            h.jqxWindow("open");
            var e = h.find("input");
            var d = b(h.find("button")[1]);
            if (g.editImage) {
                d.show()
            } else {
                d.hide()
            }
            e[0].value = i.src;
            if (e[0].value == "") {
                e[0].value = ""
            }
            e[1].value = i.alt;
            if (i.style.width != "auto") {
                e[2].value = i.style.width
            } else {
                e[2].value = ""
            }
            if (i.style.height != "auto") {
                e[3].value = i.style.height
            } else {
                e[3].value = ""
            }
            if (i.style.marginLeft && i.style.marginLeft != "0px") {
                e[4].value = i.style.marginLeft
            } else {
                e[4].value = ""
            }
            if (i.style.marginTop && i.style.marginTop != "0px") {
                e[5].value = i.style.marginTop
            } else {
                e[5].value = ""
            }
            var j = h.find(".jqx-editor-align");
            var f = b(i).css("float");
            if (f == "left") {
                j.jqxDropDownList({
                    selectedIndex: 1
                })
            } else {
                if (f == "right") {
                    j.jqxDropDownList({
                        selectedIndex: 2
                    })
                } else {
                    j.jqxDropDownList({
                        selectedIndex: 0
                    })
                }
            }
        },
        _removeHandlers: function() {
            var d = this;
            if (d.editor) {
                d.removeHandler(d.editor, "blur.editor" + d.element.id);
                d.removeHandler(d.editor, "focus.editor" + d.element.id);
                d.removeHandler(d.editor, "click.editor" + d.element.id);
                d.removeHandler(d.editor, "mousedown.editor" + d.element.id);
                d.removeHandler(d.editor, "mouseup.editor" + d.element.id);
                d.removeHandler(d.editor, "keyup.editor" + d.element.id);
                d.removeHandler(d.editor, "keydown.editor" + d.element.id);
                d.removeHandler(d.editor, "beforedeactivate.editor" + d.element.id);
                d.removeHandler(d.editor, "dblclick.editor" + d.element.id)
            }
            if (d.toolbar) {
                d.removeHandler(d.toolbar, "mousedown.editor" + d.element.id)
            }
        },
        getParentByTag: function(e, d) {
            var d = d.toLowerCase(),
                f = e;
            do {
                if (d == "" || f.nodeName.toLowerCase() == d) {
                    return f
                }
            } while (f = f.parentNode);
            return e
        },
        isStyleProperty: function(g, f, j, i) {
            var f = f.toLowerCase(),
                h = g;
            do {
                if (h.nodeName.toLowerCase() == f && h.style[j] == i) {
                    return !0
                }
            } while (h = h.parentNode);
            return !1
        },
        setStyleProperty: function(e, d) {
            this.style[d] = !1;
            var f = this.getParentByTag(e, d);
            f && f.tagName.toLowerCase() == d && (this.style[d] = !0);
            if (d == "del" && this.getParentByTag(e, "strike") && this.getParentByTag(e, "strike").tagName.toLowerCase() == "strike") {
                this.style.del = !0
            }
        },
        updateStyle: function(f) {
            var g = this;
            var f = g.getSelectedElement() ? g.getSelectedElement() : f;
            if (!f || !g.setStyleProperty) {
                return
            }
            try {
                if (window.getComputedStyle) {
                    if (f.nodeName.toLowerCase() == "#text") {
                        f = g.editor[0]
                    }
                    var d = window.getComputedStyle(f, null);
                    var i = ((d.getPropertyValue("font-weight") == 401) ? 700 : d.getPropertyValue("font-weight"));
                    g.style = {
                        fontStyle: d.getPropertyValue("font-style"),
                        fontSize: d.getPropertyValue("font-size"),
                        textDecoration: d.getPropertyValue("text-decoration"),
                        fontWeight: i,
                        fontFamily: d.getPropertyValue("font-family"),
                        textAlign: d.getPropertyValue("text-align"),
                        color: g._rgbToHex(d.color),
                        backColor: g._rgbToHex(d.backgroundColor)
                    };
                    g.style.fontStyle = d.getPropertyValue("font-style");
                    g.style.vAlign = d.getPropertyValue("vertical-align");
                    g.style.del = g.isStyleProperty(f, "span", "textDecoration", "line-through");
                    g.style.u = g.isStyleProperty(f, "span", "textDecoration", "underline");
                    var h = function(l) {
                        var k = "transparent";
                        var e = "rgba(0, 0, 0, 0)";
                        while (l && (window.getComputedStyle(l).backgroundColor == k || window.getComputedStyle(l).backgroundColor == e)) {
                            l = l.parentNode
                        }
                        return l ? window.getComputedStyle(l).backgroundColor : k
                    };
                    if (!g.style.backColor) {
                        g.style.backColor = g._rgbToHex(h(f))
                    }
                } else {
                    var d = f.currentStyle;
                    g.style = {
                        fontStyle: d.fontStyle,
                        fontSize: d.fontSize,
                        textDecoration: d.textDecoration,
                        fontWeight: d.fontWeight,
                        fontFamily: d.fontFamily,
                        textAlign: d.textAlign,
                        color: g._rgbToHex(d.color),
                        backColor: g._rgbToHex(d.backgroundColor)
                    }
                }
                g.setStyleProperty(f, "h1");
                g.setStyleProperty(f, "h2");
                g.setStyleProperty(f, "h3");
                g.setStyleProperty(f, "h4");
                g.setStyleProperty(f, "h5");
                g.setStyleProperty(f, "h6");
                g.setStyleProperty(f, "del");
                g.setStyleProperty(f, "sub");
                g.setStyleProperty(f, "sup");
                g.setStyleProperty(f, "u");
                if (f.nodeName.toLowerCase() == "a") {
                    if (g.style.textDecoration == "underline") {
                        g.style.u = true
                    }
                }
                if (g.style.h1 || g.style.h2 || g.style.h3 || g.style.h4 || g.style.h5 || g.style.h6) {
                    g.style.heading = true
                }
            } catch (j) {
                return null
            }
        },
        _refreshTools: function(e, f, n) {
            var k = this;
            if (k.updating) {
                return
            }
            var e = k.getSelectedElement() ? k.getSelectedElement() : e;
            if (!e || !k.setStyleProperty) {
                return
            }
            k.updateStyle(e);
            var o = k.readOnly;
            k.readOnly = true;
            if (k.tools !== false) {
                var j = k.tools.split(" ");
                var l = k.tools.split(" | ");
                var m = function(i) {
                    b.each(i, function(q, r) {
                        var p = k.commands[this];
                        if (!p) {
                            return true
                        }
                        switch (p.type) {
                            case "list":
                                p.widget.jqxDropDownList("clearSelection");
                                p.widget.jqxDropDownList({
                                    disabled: k.disabled
                                });
                                break;
                            case "colorPicker":
                                p.val(p.value);
                                p.widget.jqxDropDownButton({
                                    disabled: k.disabled
                                });
                                break;
                            case "toggleButton":
                                p.widget.jqxToggleButton("unCheck");
                                p.widget.jqxToggleButton({
                                    disabled: k.disabled
                                });
                                break;
                            case "button":
                            default:
                                p.widget.jqxButton({
                                    disabled: k.disabled
                                });
                                break
                        }
                    })
                };
                if (l.length == 0) {
                    m(j)
                } else {
                    for (var h = 0; h < l.length; h++) {
                        var d = l[h];
                        var j = d.split(" ");
                        m(j)
                    }
                }
                if (k.style) {
                    var g = function(i) {
                        b.each(i, function(x, E) {
                            var t = k.commands[this];
                            if (!t) {
                                return true
                            }
                            if (t.refresh) {
                                t.refresh(t.widget, k.style);
                                return true
                            }
                            switch (t.type) {
                                case "list":
                                    if (t.command == "fontname") {
                                        var B = -1;
                                        var D = 999;
                                        for (var H = 0; H < t.value.length; H++) {
                                            var E = t.value[H].label.toLowerCase();
                                            var w = k.style.fontFamily.toLowerCase().indexOf(E);
                                            if (w >= 0) {
                                                if (w < D) {
                                                    B = H
                                                }
                                                D = Math.min(D, w)
                                            }
                                        }
                                        t.widget.jqxDropDownList("selectIndex", B)
                                    } else {
                                        if (t.command == "formatblock") {
                                            var E = null;
                                            if (k.style.h1) {
                                                E = "h1"
                                            } else {
                                                if (k.style.h2) {
                                                    E = "h2"
                                                } else {
                                                    if (k.style.h3) {
                                                        E = "h3"
                                                    } else {
                                                        if (k.style.h4) {
                                                            E = "h4"
                                                        } else {
                                                            if (k.style.h5) {
                                                                E = "h5"
                                                            } else {
                                                                if (k.style.h6) {
                                                                    E = "h6"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            t.widget.jqxDropDownList("selectItem", E)
                                        } else {
                                            if (t.command == "fontsize") {
                                                var A = "xx-small,x-small,small,medium,large,x-large,xx-large".split(",");
                                                var C = -1;
                                                try {
                                                    var C = e.getAttribute("size") - 1;
                                                    if (C == -1) {
                                                        C = k.editorDocument.queryCommandValue(t.command) - 1
                                                    }
                                                } catch (I) {}
                                                var s = A[C];
                                                t.widget.val(s)
                                            }
                                        }
                                    }
                                    break;
                                case "colorPicker":
                                    var r = function(J) {
                                        if (typeof J != "number") {
                                            return J
                                        }
                                        return "rgb(" + (J & 255) + ", " + ((J & 65280) >> 8) + ", " + ((J & 16711680) >> 16) + ")"
                                    };
                                    var F = r(k.editorDocument.queryCommandValue(t.command));
                                    if (t.command == "backcolor") {
                                        if (k.style.backColor == null) {
                                            F = "#FFFFFF"
                                        }
                                    }
                                    var z = k._rgbToHex(F);
                                    if (z) {
                                        t.val(z)
                                    } else {
                                        if (t.command == "forecolor") {
                                            t.val(k.style.color)
                                        } else {
                                            if (t.command == "backcolor") {
                                                t.val(k.style.backColor)
                                            }
                                        }
                                    }
                                    break;
                                case "toggleButton":
                                    if (t.command == "viewsource") {
                                        return
                                    }
                                    if (!t.command) {
                                        return
                                    }
                                    var q = false;
                                    var p = k.editorDocument.queryCommandState(t.command) && k.editorDocument.queryCommandEnabled(t.command);
                                    if (t.command == "createlink" && e.nodeName.toLowerCase() == "a") {
                                        var y = true;
                                        if (b(e).text().indexOf(k.selection.getText()) == -1 && k.selection.getText() != "") {
                                            y = false
                                        }
                                        if (y) {
                                            if (k.linkPopup) {
                                                k.linkPopup.remove()
                                            }
                                            p = true;
                                            k.linkPopup = b("<div class='jqx-editor-link-popup' contentEditable='false' style='overflow: hidden; white-space: nowrap; padding: 5px; height: 17px; font-size: 12px; color: #222222; background: #F5F5F5; position: absolute; z-index: 9999;'>" + k.localization["Go to link"] + ": <a target='_blank' style='color:#222222;' href='" + e.href + "'>" + e.href + "</a> - <a style='color:#222222;' href='#change'>" + k.localization.Change + "</a> - <a style='color:#222222;' href='#remove'>" + k.localization.Remove + "</a></div>").appendTo(k.editor);
                                            var u = b(e).coord();
                                            var v = u.left;
                                            if (u.left + k.linkPopup.width() > k.editor.width()) {
                                                v = k.editor.width() - k.linkPopup.width() - 15
                                            }
                                            k.linkPopup.offset({
                                                top: b(e).height() + u.top + 5,
                                                left: v
                                            });
                                            k.addHandler(k.linkPopup, "mousedown", function(K) {
                                                if (K.target && K.target.href) {
                                                    var J = b(K.target).index();
                                                    switch (J) {
                                                        case 1:
                                                            k.editor.focus();
                                                            k.selection.selectNode(e, true);
                                                            k.commands.link.widget.trigger("click");
                                                            break;
                                                        case 2:
                                                            try {
                                                                k.editor.focus();
                                                                k.selection.selectNode(e);
                                                                k.execute("unlink");
                                                                k.commands.underline.toggled = false;
                                                                k.selection.collapse(false);
                                                                k._refreshTools()
                                                            } catch (L) {}
                                                            break;
                                                        default:
                                                            window.open(K.target.href, "_blank");
                                                            break
                                                    }
                                                }
                                                if (K.preventDefault) {
                                                    K.preventDefault()
                                                }
                                                if (K.stopPropagation) {
                                                    K.stopPropagation()
                                                }
                                                return false
                                            })
                                        }
                                    }
                                    if (t.command == "bold") {
                                        if (k.style.fontWeight && (k.style.fontWeight >= 600 || k.style.fontWeight == "bold")) {
                                            q = true
                                        }
                                        if (k.selection.isCollapsed()) {
                                            t.toggled = p
                                        } else {
                                            t.toggled = p || q
                                        }
                                        p = t.toggled
                                    } else {
                                        if (t.command == "italic") {
                                            if (k.style.fontStyle && k.style.fontStyle == "italic") {
                                                q = true
                                            }
                                            if (!f) {
                                                p = t.toggled
                                            } else {
                                                t.toggled = p
                                            }
                                        } else {
                                            if (t.command == "underline") {
                                                if (k.style.u) {
                                                    q = true
                                                }
                                                if (!f) {
                                                    p = t.toggled
                                                } else {
                                                    t.toggled = p
                                                }
                                            } else {
                                                if (t.command == "justifyleft") {
                                                    if (k.style.textAlign == "left") {
                                                        q = true
                                                    }
                                                } else {
                                                    if (t.command == "justifyright") {
                                                        if (k.style.textAlign == "right") {
                                                            q = true
                                                        }
                                                    } else {
                                                        if (t.command == "justifycenter") {
                                                            if (k.style.textAlign == "center") {
                                                                q = true
                                                            }
                                                        } else {
                                                            if (t.command == "justifyfull") {
                                                                if (k.style.textAlign == "justify") {
                                                                    q = true
                                                                }
                                                            } else {
                                                                b.each(k.style, function(J, K) {
                                                                    if (t.command == J.toLowerCase()) {
                                                                        q = true
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    var G = p;
                                    if (q && t.command.indexOf("justify") != -1) {
                                        t.widget.jqxToggleButton("check")
                                    } else {
                                        if (G) {
                                            t.widget.jqxToggleButton("check")
                                        } else {
                                            if (q && k.range.collapsed === false) {
                                                t.widget.jqxToggleButton("check")
                                            } else {
                                                if (b.jqx.browser.msie && b.jqx.browser.version < 9 && q && !k.selection.isCollapsed()) {
                                                    t.widget.jqxToggleButton("check")
                                                }
                                            }
                                        }
                                    }
                                    break;
                                case "button":
                                default:
                                    if (t.refresh) {
                                        t.refresh(t.widget, k.style)
                                    }
                                    break
                            }
                        })
                    };
                    if (l.length == 0) {
                        g(j)
                    } else {
                        for (var h = 0; h < l.length; h++) {
                            var d = l[h];
                            var j = d.split(" ");
                            g(j)
                        }
                    }
                }
            }
            k.readOnly = o
        },
        _rgbToHex: function(e) {
            if (e) {
                if (e.substr(0, 1) === "#") {
                    if (e.length == 4) {
                        var h = e.substr(1, 1);
                        var f = e.substr(2, 1);
                        var d = e.substr(3, 1);
                        return "#" + h + h + f + f + d + d
                    }
                    return e
                }
                var i = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(e);
                if (!i) {
                    return null
                }
                var h = parseInt(i[2], 10).toString(16);
                var f = parseInt(i[3], 10).toString(16);
                var d = parseInt(i[4], 10).toString(16);
                return "#" + ((h.length == 1 ? "0" + h : h) + (f.length == 1 ? "0" + f : f) + (d.length == 1 ? "0" + d : d))
            }
            return null
        },
        _preventDefault: function(d, e) {
            if (e !== false) {
                if (b(".jqx-editor-dropdownpicker").length > 0) {
                    b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                }
                if (b(".jqx-editor-dropdownlist").length > 0) {
                    b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                }
            }
            if (d.preventDefault) {
                d.preventDefault()
            }
            if (d.stopPropagation) {
                d.stopPropagation()
            }
            d.cancelBubble = true;
            d.returnValue = false
        },
        _addCommandHandler: function(g, f, i, h, d) {
            var e = this;
            if (!i && d.init) {
                i = "custom"
            }
            switch (i) {
                case "custom":
                    switch (d.type) {
                        case "list":
                            action = function(j) {
                                if (e._documentMode != "source") {
                                    if (j.args.type != "none") {
                                        d.value = b(this).val();
                                        e.execute("custom", d);
                                        if (!e.readOnly) {
                                            e._refreshTools()
                                        }
                                    }
                                }
                                e._preventDefault(j, false)
                            };
                            break;
                        case "colorPicker":
                            action = function(l) {
                                if (e._documentMode != "source") {
                                    var j = b(d.colorPicker).find("td").removeClass("jqx-editor-color-picker-selected-cell");
                                    if (l.target.nodeName.toLowerCase() == "div") {
                                        var k = b(l.target).css("background-color");
                                        b(l.target).parent().addClass("jqx-editor-color-picker-selected-cell")
                                    } else {
                                        var k = b(l.target).find("div").css("background-color");
                                        b(l.target).addClass("jqx-editor-color-picker-selected-cell")
                                    }
                                    b("#bar-" + i).css("background", k);
                                    d.widget.val = function() {
                                        var n = function(p) {
                                            if (typeof p != "number") {
                                                return p
                                            }
                                            return "rgb(" + (p & 255) + ", " + ((p & 65280) >> 8) + ", " + ((p & 16711680) >> 16) + ")"
                                        };
                                        var o = n(k);
                                        var m = e._rgbToHex(o);
                                        return m
                                    };
                                    d.widget.jqxDropDownButton("close");
                                    e.execute("custom", d)
                                }
                                e._preventDefault(l);
                                return false
                            };
                            break;
                        case "button":
                        case "toggleButton":
                        default:
                            action = function(j) {
                                if (b(".jqx-editor-dropdownpicker").length > 0) {
                                    b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                                }
                                if (b(".jqx-editor-dropdownlist").length > 0) {
                                    b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                                }
                                e._preventDefault(j);
                                var l = b(this).attr("data-command");
                                var k = this;
                                if (e._documentMode != "source") {
                                    if (d.toggle) {
                                        d.toggle()
                                    }
                                    e.execute("custom", d);
                                    e._refreshTools()
                                }
                                return false
                            };
                            break
                    }
                    break;
                case "formatblock":
                    action = function(j) {
                        if (e._documentMode != "source") {
                            if (j.args.type != "none") {
                                e.execute(b(this).attr("data-command"), "<" + b(this).val() + ">", d);
                                if (!e.readOnly) {
                                    e.commands.bold.toggled = false;
                                    e._refreshTools()
                                }
                            }
                        }
                        e._preventDefault(j, false)
                    };
                    break;
                case "fontsize":
                    action = function(j) {
                        if (e._documentMode != "source") {
                            if (j.args.type != "none") {
                                var l = b(this).val();
                                var m = "xx-small,x-small,small,medium,large,x-large,xx-large".split(",");
                                var k = b(this).jqxDropDownList("getSelectedIndex") + 1;
                                var k = 1 + m.indexOf(l);
                                e.execute(b(this).attr("data-command"), k, d)
                            }
                        }
                        e._preventDefault(j, false)
                    };
                    break;
                case "fontname":
                    action = function(j) {
                        if (e._documentMode != "source") {
                            if (j.args.type != "none") {
                                var k = b(this).val();
                                e.execute(b(this).attr("data-command"), k, d)
                            }
                        }
                        e._preventDefault(j, false)
                    };
                    break;
                case "forecolor":
                case "backcolor":
                    action = function(l) {
                        if (e._documentMode != "source") {
                            var j = b(d.colorPicker).find("td").removeClass("jqx-editor-color-picker-selected-cell");
                            if (l.target.nodeName.toLowerCase() == "div") {
                                var k = b(l.target).css("background-color");
                                b(l.target).parent().addClass("jqx-editor-color-picker-selected-cell")
                            } else {
                                var k = b(l.target).find("div").css("background-color");
                                b(l.target).addClass("jqx-editor-color-picker-selected-cell")
                            }
                            b("#bar-" + i).css("background", k);
                            d.widget.jqxDropDownButton("close");
                            e.execute(i, k, d)
                        }
                        e._preventDefault(l);
                        return false
                    };
                    break;
                case "viewsource":
                    action = function(j) {
                        if (e.linkPopup) {
                            e.linkPopup.remove()
                        }
                        d.toggle();
                        e.setMode(d.toggled);
                        if (b(".jqx-editor-dropdownpicker").length > 0) {
                            b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                        }
                        if (b(".jqx-editor-dropdownlist").length > 0) {
                            b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                        }
                        e._preventDefault(j);
                        return false
                    };
                    break;
                case "insertimage":
                    action = function(j) {
                        e._insertImageAction(j, e, d)
                    };
                    break;
                case "createlink":
                    action = function(j) {
                        e._createLinkAction(j, e, d)
                    };
                    break;
                default:
                    action = function(j) {
                        if (b(".jqx-editor-dropdownpicker").length > 0) {
                            b(".jqx-editor-dropdownpicker").jqxDropDownButton("close")
                        }
                        if (b(".jqx-editor-dropdownlist").length > 0) {
                            b(".jqx-editor-dropdownlist").jqxDropDownList("close")
                        }
                        e._preventDefault(j);
                        var m = b(this).attr("data-command");
                        var k = this;
                        if (e._documentMode != "source") {
                            if (m == "underline") {
                                if (e.getSelectedElement()) {
                                    var l = e.getSelectedElement();
                                    if (l && l.nodeName.toLowerCase() == "a") {
                                        if (d.toggled) {
                                            b(l).css("text-decoration", "none")
                                        } else {
                                            b(l).css("text-decoration", "underline")
                                        }
                                        d.toggle();
                                        e._refreshTools();
                                        return false
                                    }
                                }
                            }
                            if (d.toggle) {
                                d.toggle()
                            }
                            e.execute(m, b(this).val(), d);
                            e._refreshTools()
                        }
                        return false
                    };
                    break
            }
            e.addHandler(g, f, action);
            return false
        },
        _createLinkAction: function(d, k, l) {
            var k = this;
            if (k._documentMode == "source") {
                k._preventDefault(d);
                return
            }
            if (!k.focused) {
                k.editor.focus()
            }
            k.range = k.getRange();
            var e = k.getSelectedElement();
            if (e.nodeName.toLowerCase() == "a") {
                k.editLink = e
            } else {
                k.editLink = null
            }
            if (b("#linkWindow" + this.element.id).length > 0) {
                if (k.editLink) {
                    k.selection.selectNode(e, true)
                }
                k._updateLinkWindow();
                k._preventDefault(d);
                return false
            }
            var m = b("<div class='jqx-editor-window jqx-editor-link-window'><div>" + k.localization["Insert Link"] + "</div><div><table style='border-collapse: separate; border-spacing: 2px;'><tr><td align='right'>" + k.localization.URL + ":</td><td><input style='width: 200px; height: 23px;' value=''/></td><tr/><tr><td align='right'>" + k.localization.Title + ":</td><td><input style='width: 200px; height: 23px;' value=''/></td><tr/><tr><td align='right'></td><td><div class='jqx-editor-link-checkbox'>" + k.localization["Open in a new window/tab"] + "</div></td><tr/><tr><td align='right'></td><td align='right'><button>Ok</button><button style='margin-left: 5px;'>Remove</button><button style='margin-left: 5px;'>Cancel</button></td><tr/></table></div></div>");
            m[0].id = "linkWindow" + this.element.id;
            var j = m.find("input");
            j.addClass(k.toThemeProperty("jqx-widget"));
            j.addClass(k.toThemeProperty("jqx-widget-content"));
            j.addClass(k.toThemeProperty("jqx-input"));
            var i = m.find(".jqx-editor-link-checkbox").jqxCheckBox({
                theme: k.theme,
                height: 23,
                width: 180
            });
            var g = m.find("button:first").jqxButton({
                theme: k.theme,
                disabled: true
            });
            var o = b(m.find("button")[1]).jqxButton({
                theme: k.theme
            });
            var h = m.find("button:last").jqxButton({
                theme: k.theme
            });
            g.val(k.localization.Ok);
            h.val(k.localization.Cancel);
            o.val(k.localization.Remove);
            k.addHandler(h, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(p) {
                k.editor.focus();
                k.selectRange(k.range);
                k._refreshTools();
                k._preventDefault(p)
            });
            if (!k.editLink || (k.editLink && !k.editLink.href)) {
                o.hide()
            }
            var f = false;
            k.addHandler(b(j[0]), "focus", function() {
                if (j[1].value == "" || j[1].value == j[0].value) {
                    f = true
                } else {
                    f = false
                }
            });
            k.addHandler(b(j[1]), "keyup", function(p) {
                if (p.keyCode) {
                    if (p.keyCode == 13) {
                        g.trigger("click")
                    }
                    if (p.keyCode == 27) {
                        h.trigger("click")
                    }
                }
            });
            k.addHandler(b(j[0]), "keyup change", function(p) {
                if (j[0].value.length > 0) {
                    g.jqxButton({
                        disabled: false
                    })
                } else {
                    g.jqxButton({
                        disabled: true
                    })
                }
                if (f) {
                    j[1].value = j[0].value
                }
                if (p.keyCode) {
                    if (p.keyCode == 13) {
                        g.trigger("click")
                    }
                    if (p.keyCode == 27) {
                        h.trigger("click")
                    }
                }
            });
            k.addHandler(o, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(p) {
                m.jqxWindow("close");
                try {
                    k.editor.focus();
                    k.selection.selectNode(k.editLink);
                    k.execute("unlink");
                    k.selection.collapse(false);
                    k.commands.underline.toggled = false;
                    k._refreshTools()
                } catch (q) {}
                k._preventDefault(p)
            });
            k.addHandler(g, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(s) {
                var q = m.find("input");
                var r = b("<a>" + (q[1].value || q[0].value) + "</a>");
                if (i.val()) {
                    r.attr("target", "_blank")
                }
                r[0].href = b.trim(q[0].value);
                if (q[0].value.indexOf("http") == -1 && q[0].value.indexOf("mailto") == -1) {
                    r[0].href = "http://" + b.trim(q[0].value)
                }
                if (!k.focused) {
                    k.editor.focus()
                }
                if (k.range) {
                    k.selectRange(k.range)
                }
                if (k.editLink) {
                    b(k.editLink).remove()
                }
                k.execute("insertHTML", "" + r[0].outerHTML + "<span id='INSERTION_MARKER'>&nbsp;</span>", l);
                k.editor.focus();
                var p = b(k.editorDocument).find("#INSERTION_MARKER");
                k.selection.selectNode(p[0], true);
                if (k.getRange().setStartAfter) {
                    k.getRange().setStartAfter(p[0])
                }
                p.remove();
                k.selection.collapse(false);
                k._refreshTools();
                k._preventDefault(s)
            });
            k.updating = true;
            m.appendTo(document.body);
            k.addHandler(m, "open", function() {
                k.updating = true;
                setTimeout(function() {
                    k.range = k.getRange();
                    b(j[0]).focus()
                }, 25)
            });
            m.jqxWindow({
                resizable: false,
                width: 280,
                okButton: g,
                cancelButton: h,
                theme: k.theme,
                isModal: true,
                position: {
                    center: k.widget
                }
            });
            k.addHandler(m, "close", function() {
                k.updating = false
            });
            if (!k.focused) {
                k.editor.focus();
                k.selectRange(k.range)
            }
            if (k.editLink) {
                j[0].value = k.editLink.href || "";
                j[1].value = b(k.editLink).text();
                i.val(b(k.editLink).attr("target") == "_blank")
            } else {
                if (!k.selection.isCollapsed()) {
                    var n = k.selection.getText();
                    if (n.match(/^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i)) {
                        j[0].value = n
                    } else {
                        j[1].value = n
                    }
                }
            }
            if (j[0].value.length > 0) {
                g.jqxButton({
                    disabled: false
                })
            } else {
                g.jqxButton({
                    disabled: true
                })
            }
            k._preventDefault(d);
            return false
        },
        _insertImageAction: function(j, i, g) {
            if (i._documentMode == "source") {
                i._preventDefault(j);
                return
            }
            if (!i.focused) {
                i.editor.focus()
            }
            i.range = i.getRange();
            if (b("#imageWindow" + this.element.id).length > 0) {
                i._updateImageWindow();
                i._preventDefault(j);
                return false
            }
            var h = b("<div class='jqx-editor-window jqx-editor-image-window'><div>" + i.localization["Insert Image"] + "</div><div><table style='border-collapse: separate; border-spacing: 2px;'><tr><td align='right'>" + i.localization.URL + ":</td><td><input style='width: 180px; height: 23px;' value=''/></td><tr/><tr><td align='right'>" + i.localization["Alt Text"] + ":</td><td><input style='width: 180px; height: 23px;' value=''/></td><tr/><tr><td align='right'>" + i.localization.Width + ":</td><td><input style='width: 180px; height: 23px;' value=''/></td><tr/><tr><td align='right'>" + i.localization.Height + ":</td><td><input style='width: 180px; height: 23px;' value=''/></td><tr/><tr><td align='right'>" + i.localization.HSpace + ":</td><td><input style='width: 180px; height: 23px;' class='jqx-editor-hspace'/></td><tr/><tr><td align='right'>" + i.localization.VSpace + ":</td><td><input style='width: 180px; height: 23px;' class='jqx-editor-vspace'/></td><tr/><tr><td align='right'>" + i.localization.Align + ":</td><td><div class='jqx-editor-align'></div></td><tr/><tr><td align='right'></td><td align='right'><button>Ok</button><button style='margin-left: 5px;'>Remove</button><button style='margin-left: 5px;'>Cancel</button></td><tr/></table></div></div>");
            h[0].id = "imageWindow" + this.element.id;
            var e = h.find("input");
            e.addClass(i.toThemeProperty("jqx-widget"));
            e.addClass(i.toThemeProperty("jqx-widget-content"));
            e.addClass(i.toThemeProperty("jqx-input"));
            h.find(".jqx-editor-align").jqxDropDownList({
                autoDropDownHeight: true,
                selectedIndex: 0,
                theme: i.theme,
                height: 23,
                width: 180,
                source: [i.localization["not set"], i.localization.Left, i.localization.Right]
            });
            var f = h.find("button:first").jqxButton({
                theme: i.theme
            });
            var k = h.find("button:last").jqxButton({
                theme: i.theme
            });
            var d = b(h.find("button")[1]).jqxButton({
                theme: i.theme
            });
            f.val(i.localization.Ok);
            k.val(i.localization.Cancel);
            d.val(i.localization.Remove);
            d.hide();
            i.addHandler(d, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(l) {
                b(i.editImage).removeClass("jqx-editor-focus");
                b(i.editImage).remove();
                i.editImage = null;
                i._preventDefault(l);
                h.jqxWindow("close");
                i._raiseEvent("change")
            });
            i.addHandler(k, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(l) {
                b(i.editImage).removeClass("jqx-editor-focus");
                i.editImage = null;
                i._preventDefault(l)
            });
            i.addHandler(f, !b.jqx.mobile.isTouchDevice() ? "click" : b.jqx.mobile.getTouchEventName("touchstart"), function(o) {
                b(i.editImage).removeClass("jqx-editor-focus");
                var m = h.find("input");
                var p = i.editImage ? b(i.editImage) : b('<img style="border: 1px solid transparent;">');
                var n = p.attr("src", m[0].value).attr("unselectable", "on");
                if (m[1].value) {
                    n.attr("alt", m[1].value).attr("title", m[1].value)
                }
                if (m[2].value && !isNaN(parseInt(m[2].value))) {
                    n.width(m[2].value)
                } else {
                    n.css("width", "auto")
                }
                if (m[3].value && !isNaN(parseInt(m[3].value))) {
                    n.height(m[3].value)
                } else {
                    n.css("height", "auto")
                }
                if (m[4].value) {
                    if (m[4].value.toString() == "auto") {
                        n.css("margin-left", "auto");
                        n.css("margin-right", "auto")
                    } else {
                        if (m[4].value.toString().indexOf("%") != -1) {
                            n.css("margin-left", parseInt(m[4].value) + "%");
                            n.css("margin-right", parseInt(m[4].value) + "%")
                        } else {
                            n.css("margin-left", parseInt(m[4].value) + "px");
                            n.css("margin-right", parseInt(m[4].value) + "px")
                        }
                    }
                } else {
                    n.css("margin-left", "0px");
                    n.css("margin-right", "0px")
                }
                if (m[5].value) {
                    if (m[5].value.toString() == "auto") {
                        n.css("margin-top", "auto");
                        n.css("margin-bottom", "auto")
                    } else {
                        if (m[5].value.toString().indexOf("%") != -1) {
                            n.css("margin-top", parseInt(m[5].value) + "%");
                            n.css("margin-bottom", parseInt(m[5].value) + "%")
                        } else {
                            n.css("margin-top", parseInt(m[5].value) + "px");
                            n.css("margin-bottom", parseInt(m[5].value) + "px")
                        }
                    }
                } else {
                    n.css("margin-top", "0px");
                    n.css("margin-bottom", "0px")
                }
                var q = h.find(".jqx-editor-align").jqxDropDownList("selectedIndex");
                if (q == 1) {
                    n.css("float", "left")
                } else {
                    if (q == 2) {
                        n.css("float", "right")
                    } else {
                        if (q == 0) {
                            n.css("float", "none")
                        }
                    }
                }
                n.css("resize", false);
                n[0].oncontrolselect = function() {
                    return false
                };
                n[0].selectstart = function() {
                    return false
                };
                if (!i.editImage) {
                    if (!i.focused) {
                        i.editor.focus()
                    }
                    if (i.range) {
                        i.selectRange(i.range)
                    }
                    i.execute("insertHTML", n[0].outerHTML + "<span id='INSERTION_MARKER'>&nbsp;</span>", g);
                    i.editor.focus();
                    var l = b(i.editorDocument).find("#INSERTION_MARKER");
                    i.selection.selectNode(l[0], true);
                    if (i.getRange().setStartAfter) {
                        i.getRange().setStartAfter(l[0])
                    }
                    l.remove();
                    i.selection.collapse(false);
                    i._refreshTools();
                    i._preventDefault(o)
                }
                i.editImage = null;
                i._preventDefault(o)
            });
            h.appendTo(document.body);
            i.updating = true;
            i.addHandler(h, "open", function() {
                i.updating = true;
                setTimeout(function() {
                    i.range = i.getRange();
                    b(e[0]).focus()
                }, 25)
            });
            h.jqxWindow({
                resizable: false,
                width: 280,
                okButton: f,
                cancelButton: k,
                theme: i.theme,
                isModal: true,
                position: {
                    center: i.widget
                }
            });
            i.addHandler(h, "close", function() {
                i.updating = false
            });
            if (!i.focused) {
                i.editor.focus();
                i.selectRange(i.range)
            }
            i._preventDefault(j);
            return false
        },
        editmode: function(f) {
            var e = this;
            if (!f && !e.readOnly) {
                e._removeHandlers();
                e.editor.attr("contentEditable", false);
                var d = document.createTextNode(e.editor.html());
                var g = b("<pre>");
                g.html(d).attr({
                    id: "sourceText",
                    contentEditable: true
                }).css("height", "100%");
                e.editor.html(g);
                if (e.buttons.hasOwnProperty("html")) {
                    e.buttons.html.addClass("active")
                }
                g.focus()
            } else {
                if (f && e.readOnly) {
                    var d = e.editor.find("#sourceText").text();
                    e.editor.html(d);
                    if (e.buttons.hasOwnProperty("html")) {
                        e.buttons.html.removeClass("active")
                    }
                    e.editor.attr("contentEditable", true);
                    e._addHandlers()
                }
            }
            e.readOnly = !f
        },
        setMode: function(f) {
            var i = this;
            if (!i.range) {
                i.editor.focus();
                i.range = i.getRange()
            }
            var h;
            var e = i.editor[0];
            if (f) {
                i._documentMode = "source";
                var k = new c();
                var j = k.HTMLtoXML(e.innerHTML);
                j = k.FormatHTML(j);
                h = document.createTextNode(j);
                e.innerHTML = "";
                var d = document.createElement("pre");
                e.contentEditable = false;
                d.style.height = "100%";
                d.style.margin = "0px";
                d.style.outline = "none";
                d.style.display = "block";
                d.id = "sourceText";
                d.contentEditable = true;
                d.appendChild(h);
                e.appendChild(d);
                this.readOnly = true
            } else {
                this._documentMode = "html";
                if (document.all) {
                    e.innerHTML = e.innerText
                } else {
                    if (e.textContent) {
                        e.innerHTML = e.textContent
                    } else {
                        h = document.createRange();
                        h.selectNodeContents(e.firstChild);
                        e.innerHTML = h.toString()
                    }
                }
                e.contentEditable = true;
                i.readOnly = false;
                i._refreshTools();
                i.editor.focus();
                i.selection.selectNode(i.editor[0]);
                i.editor.scrollTop(0);
                i.selection.collapse(true)
            }
            b.each(this.commands, function() {
                if (this.widget) {
                    if (this.command != "viewsource") {
                        switch (this.type) {
                            case "list":
                                this.widget.jqxDropDownList({
                                    disabled: f
                                });
                                break;
                            case "colorPicker":
                                this.widget.jqxDropDownButton({
                                    disabled: f
                                });
                                break;
                            case "button":
                                this.widget.jqxButton({
                                    disabled: f
                                });
                                break;
                            case "toggleButton":
                                this.widget.jqxToggleButton({
                                    toggled: false,
                                    disabled: f
                                });
                                break
                        }
                    }
                }
            });
            i.editor.focus();
            if (b.jqx.browser.mozilla) {
                var g = b("<a href='#'>anchor</a>");
                i.editor.prepend(g);
                g.focus();
                g.remove();
                i.selection.collapse(true)
            }
            if (i.commands.html.widget) {
                i.commands.html.widget.jqxToggleButton({
                    toggled: f == "source" || f == true
                });
                i.commands.html.toggled = f == "source" || f == true
            }
        },
        execute: function(i, f, e) {
            var g = this;
            if (!g.readOnly) {
                var j = g.editorDocument;
                if (g._documentMode == "source") {
                    return
                }
                g.changeType = "mouse";
                if (g.linkPopup) {
                    g.linkPopup.remove()
                }
                g.editor.focus();
                if (b.jqx.browser.mozilla) {}
                if (b.jqx.mobile.isTouchDevice()) {
                    setTimeout(function() {}, 25)
                }
                var d = function(m) {
                    try {
                        if (m.command && m.command.toLowerCase() == "inserthtml") {
                            var l = g.getRange();
                            var n = m.value;
                            if (n.toString().indexOf("<") == -1) {
                                n = "<span>" + m.value + "</span>"
                            }
                            g.selection.insertContent("" + n + "<span id='INSERTION_MARKER'>&nbsp;</span>");
                            g.selectRange(l);
                            setTimeout(function() {
                                var p = b(g.editorDocument).find("#INSERTION_MARKER");
                                g.selection.selectNode(b(p).prev()[0], true);
                                p.remove();
                                g.selection.collapse(false)
                            }, 10)
                        } else {
                            if (m.command) {
                                if (j.queryCommandEnabled(m.command)) {
                                    j.execCommand(m.command, false, m.value)
                                } else {
                                    return false
                                }
                            } else {
                                if (j.queryCommandEnabled(m)) {
                                    j.execCommand(m, false, m)
                                } else {
                                    return false
                                }
                            }
                        }
                    } catch (o) {}
                };
                if (i == "custom") {
                    var h = f.action(f.widget, g.editor);
                    if (h) {
                        d(h)
                    }
                } else {
                    try {
                        if (e && e.action) {
                            var h = e.action(e.widget, g.editor);
                            d(h)
                        } else {
                            if (j.queryCommandEnabled(i)) {
                                j.execCommand(i, false, f)
                            } else {
                                if (i == "insertHTML") {
                                    g.selection.insertContent(f)
                                } else {
                                    return false
                                }
                            }
                        }
                    } catch (k) {
                        if (i == "insertHTML") {
                            g.selection.insertContent(f)
                        } else {
                            return false
                        }
                    }
                }
                if (b.jqx.mobile.isTouchDevice()) {
                    setTimeout(function() {
                        if (g.iframe) {
                            g.iframe[0].contentWindow.focus()
                        }
                    }, 500)
                }
                g._raiseEvent("change", {
                    command: i,
                    args: f
                });
                g.changed = true;
                g.range = g.getRange()
            }
        },
        destroy: function() {
            var h = this;
            h._removeHandlers();
            var l = h.tools.split(" ");
            var g = h.tools.split(" | ");
            b.jqx.utilities.resize(this.host, null, true);
            var f = function(i) {
                b.each(i, function(n, o) {
                    var m = h.commands[this];
                    if (!m) {
                        return true
                    }
                    switch (m.type) {
                        case "list":
                            m.widget.jqxDropDownList("destroy");
                            break;
                        case "colorPicker":
                            m.colorPicker.remove();
                            m.widget.jqxDropDownButton("destroy");
                            break;
                        case "toggleButton":
                            m.widget.jqxToggleButton("destroy");
                            break;
                        case "custom":
                            if (h.destroyTool) {
                                h.destroyTool(this)
                            }
                            break;
                        case "button":
                        default:
                            m.widget.jqxToggleButton("destroy");
                            if (m.command === "insertimage") {
                                if (b("#imageWindow" + h.element.id).length > 0) {
                                    b("#imageWindow" + h.element.id).find(".jqx-editor-align").jqxDropDownList("destroy");
                                    b("#imageWindow" + h.element.id).find("button").jqxButton("destroy")
                                }
                            } else {
                                if (m.command === "createlink") {
                                    if (b("#linkWindow" + h.element.id).length > 0) {
                                        b("#linkWindow" + h.element.id).find(".jqx-editor-align").jqxDropDownList("destroy");
                                        b("#linkWindow" + h.element.id).find("button").jqxButton("destroy");
                                        b("#linkWindow" + h.element.id).find(".jqx-editor-link-checkbox").jqxCheckBox("destroy")
                                    }
                                }
                            }
                            break
                    }
                })
            };
            if (g.length == 0) {
                f(l)
            } else {
                for (var e = 0; e < g.length; e++) {
                    var d = g[e];
                    var l = d.split(" ");
                    f(l)
                }
            }
            var j = b("#linkWindow" + this.element.id);
            var k = b("#imageWindow" + this.element.id);
            if (j && j.length > 0) {
                j.jqxWindow("destroy")
            }
            if (k && k.length > 0) {
                k.jqxWindow("destroy")
            }
            if (h.inline) {
                h.toolbar.remove()
            } else {
                h.widget.remove();
                h.host.remove()
            }
            h.iframe.remove();
            h.iframe = null;
            h.selection = null;
            h.editorDocument = null;
            h.contentEditableElement = null
        },
        val: function(d) {
            if (d != undefined && typeof d != "object") {
                this.editor.html(d)
            }
            return this.editor.html()
        },
        _raiseEvent: function(h, e) {
            if (e == undefined) {
                e = {
                    owner: null
                }
            }
            if (this._documentMode == "source") {
                return true
            }
            var f = h;
            e.type = this.changeType;
            this.changeType = null;
            args = e;
            args.owner = this;
            var g = new b.Event(f);
            g.owner = this;
            g.args = args;
            if (this._textArea) {
                var d = b(this._textArea).trigger(g)
            } else {
                var d = this.host.trigger(g)
            }
            e = g.args;
            return d
        }
    });
    var a = function(d) {
        var e = {
            initialize: function(f) {
                this.document = f
            },
            getSelection: function() {
                return (this.document.getSelection) ? this.document.getSelection() : this.document.selection
            },
            getRange: function() {
                var f = this.getSelection();
                if (!f) {
                    return null
                }
                try {
                    return f.rangeCount > 0 ? f.getRangeAt(0) : (this.document.createRange ? this.document.createRange() : this.document.selection.createRange())
                } catch (g) {
                    return this.document.body.createTextRange()
                }
            },
            selectRange: function(f) {
                if (f.select) {
                    f.select()
                } else {
                    var g = this.getSelection();
                    if (g.addRange) {
                        g.removeAllRanges();
                        g.addRange(f)
                    }
                }
            },
            selectNode: function(i, j) {
                var h = this.getRange();
                var g = this.getSelection();
                if (h.moveToElementText) {
                    h.moveToElementText(i);
                    h.select()
                } else {
                    if (g.addRange) {
                        try {
                            j ? h.selectNodeContents(i) : h.selectNode(i);
                            g.removeAllRanges();
                            g.addRange(h)
                        } catch (f) {
                            var k = f
                        }
                    } else {
                        g.setBaseAndExtent(i, 0, i, 1)
                    }
                }
                return i
            },
            isCollapsed: function() {
                var f = this.getRange();
                if (f.item) {
                    return false
                }
                return f.boundingWidth == 0 || this.getSelection().isCollapsed
            },
            collapse: function(f) {
                var h = this.getRange();
                var g = this.getSelection();
                if (h.select) {
                    h.collapse(f);
                    h.select()
                } else {
                    f ? g.collapseToStart() : g.collapseToEnd()
                }
            },
            getContent: function() {
                var h = this.getRange();
                var f = b("<div>")[0];
                if (this.isCollapsed()) {
                    return ""
                }
                if (h.cloneContents) {
                    f.appendChild(h.cloneContents())
                } else {
                    if (h.item != undefined || h.htmlText != undefined) {
                        b(f).html(h.item ? h.item(0).outerHTML : h.htmlText)
                    } else {
                        b(f).html(h.toString())
                    }
                }
                var g = b(f).html();
                return g
            },
            getText: function() {
                var g = this.getRange();
                var f = this.getSelection();
                return this.isCollapsed() ? "" : g.text || (f.toString ? f.toString() : "")
            },
            getNode: function() {
                var g = this.getRange();
                if (!b.jqx.browser.msie || b.jqx.browser.version >= 9) {
                    var f = null;
                    if (g) {
                        f = g.commonAncestorContainer;
                        if (!g.collapsed) {
                            if (g.startContainer == g.endContainer) {
                                if (g.startOffset - g.endOffset < 2) {
                                    if (g.startContainer.hasChildNodes()) {
                                        f = g.startContainer.childNodes[g.startOffset]
                                    }
                                }
                            }
                        }
                        while (typeof(f) != "element") {
                            f = f.parentNode
                        }
                    }
                    return d.id(f)
                }
                return d.id(g.item ? g.item(0) : g.parentElement())
            },
            insertContent: function(i) {
                var h = this.getRange();
                if (h.pasteHTML) {
                    h.pasteHTML(i);
                    h.collapse(false);
                    h.select()
                } else {
                    if (h.insertNode) {
                        h.deleteContents();
                        if (h.createContextualFragment) {
                            h.insertNode(h.createContextualFragment(i))
                        } else {
                            var j = this.document;
                            var g = j.createDocumentFragment();
                            var f = j.createElement("div");
                            g.appendChild(f);
                            f.outerHTML = i;
                            h.insertNode(g)
                        }
                    }
                }
            }
        };
        e.initialize(d);
        return e
    };
    var c = function() {
        var n = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
            f = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
            j = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
        var i = e("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");
        var d = e("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");
        var l = e("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
        var g = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
        var m = e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
        var k = e("script,style");
        var h = this.HTMLParser = function(p, x) {
            var s, t, q, u = [],
                v = p;
            u.last = function() {
                return this[this.length - 1]
            };
            while (p) {
                t = true;
                if (!u.last() || !k[u.last()]) {
                    if (p.indexOf("<!--") == 0) {
                        s = p.indexOf("-->");
                        if (s >= 0) {
                            if (x.comment) {
                                x.comment(p.substring(4, s))
                            }
                            p = p.substring(s + 3);
                            t = false
                        }
                    } else {
                        if (p.indexOf("</") == 0) {
                            q = p.match(f);
                            if (q) {
                                p = p.substring(q[0].length);
                                q[0].replace(f, r);
                                t = false
                            }
                        } else {
                            if (p.indexOf("<") == 0) {
                                q = p.match(n);
                                if (q) {
                                    p = p.substring(q[0].length);
                                    q[0].replace(n, o);
                                    t = false
                                }
                            }
                        }
                    }
                    if (t) {
                        s = p.indexOf("<");
                        var w = s < 0 ? p : p.substring(0, s);
                        p = s < 0 ? "" : p.substring(s);
                        if (x.chars) {
                            x.chars(w)
                        }
                    }
                } else {
                    p = p.replace(new RegExp("(.*)</" + u.last() + "[^>]*>"), function(y, z) {
                        z = z.replace(/<!--(.*?)-->/g, "$1").replace(/<!\[CDATA\[(.*?)]]>/g, "$1");
                        if (x.chars) {
                            x.chars(z)
                        }
                        return ""
                    });
                    r("", u.last())
                }
                v = p
            }
            r();

            function o(y, B, C, z) {
                B = B.toLowerCase();
                if (d[B]) {
                    while (u.last() && l[u.last()]) {
                        r("", u.last())
                    }
                }
                if (g[B] && u.last() == B) {
                    r("", B)
                }
                z = i[B] || !! z;
                if (!z) {
                    u.push(B)
                }
                if (x.start) {
                    var A = [];
                    C.replace(j, function(E, D) {
                        var F = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : m[D] ? D : "";
                        A.push({
                            name: D,
                            value: F,
                            escaped: F.replace(/(^|[^\\])"/g, '$1\\"')
                        })
                    });
                    if (x.start) {
                        x.start(B, A, z)
                    }
                }
            }
            function r(y, A) {
                if (!A) {
                    var B = 0
                } else {
                    for (var B = u.length - 1; B >= 0; B--) {
                        if (u[B].toLowerCase() == A.toLowerCase()) {
                            break
                        }
                    }
                }
                if (B >= 0) {
                    for (var z = u.length - 1; z >= B; z--) {
                        if (x.end) {
                            x.end(u[z])
                        }
                    }
                    u.length = B
                }
            }
        };
        this.HTMLtoXML = function(p) {
            var o = "";
            p = p.replace(/\r/ig, "");
            p = p.replace(/\n/ig, "");
            h(p, {
                start: function(q, s, r) {
                    o += "<" + q;
                    for (var t = 0; t < s.length; t++) {
                        o += " " + s[t].name + '="' + s[t].escaped + '"'
                    }
                    o += (r ? "/" : "") + ">"
                },
                end: function(q) {
                    o += "</" + q + ">\r\n"
                },
                chars: function(q) {
                    o += q
                },
                comment: function(q) {
                    o += "<!--" + q + "-->"
                }
            });
            return o
        };
        this.FormatHTML = function(D, r) {
            var H, C, A, u, v, G;
            r = r || {};
            C = r.indent_size || 4;
            A = r.indent_char || " ";
            v = r.brace_style || "collapse";
            u = Infinity;
            G = r.unformatted || ["a", "span", "bdo", "em", "strong", "dfn", "code", "samp", "kbd", "var", "cite", "abbr", "acronym", "q", "sub", "sup", "tt", "i", "b", "big", "small", "u", "s", "strike", "font", "ins", "del", "pre", "address", "dt", "h1", "h2", "h3", "h4", "h5", "h6"];

            function q() {
                this.pos = 0;
                this.token = "";
                this.current_mode = "CONTENT";
                this.tags = {
                    parent: "parent1",
                    parentcount: 1,
                    parent1: ""
                };
                this.tag_type = "";
                this.token_text = this.last_token = this.last_text = this.token_type = "";
                this.Utils = {
                    whitespace: "\n\r\t ".split(""),
                    single_token: "br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(","),
                    extra_liners: "head,body,/html".split(","),
                    in_array: function(J, t) {
                        for (var I = 0; I < t.length; I++) {
                            if (J === t[I]) {
                                return true
                            }
                        }
                        return false
                    }
                };
                this.get_content = function() {
                    var t = "",
                        J = [],
                        K = false;
                    while (this.input.charAt(this.pos) !== "<") {
                        if (this.pos >= this.input.length) {
                            return J.length ? J.join("") : ["", "TK_EOF"]
                        }
                        t = this.input.charAt(this.pos);
                        this.pos++;
                        this.line_char_count++;
                        if (this.Utils.in_array(t, this.Utils.whitespace)) {
                            if (J.length) {
                                K = true
                            }
                            this.line_char_count--;
                            continue
                        } else {
                            if (K) {
                                if (this.line_char_count >= this.max_char) {
                                    J.push("\n");
                                    for (var I = 0; I < this.indent_level; I++) {
                                        J.push(this.indent_string)
                                    }
                                    this.line_char_count = 0
                                } else {
                                    J.push(" ");
                                    this.line_char_count++
                                }
                                K = false
                            }
                        }
                        J.push(t)
                    }
                    return J.length ? J.join("") : ""
                };
                this.get_contents_to = function(J) {
                    if (this.pos == this.input.length) {
                        return ["", "TK_EOF"]
                    }
                    var t = "";
                    var K = "";
                    var L = new RegExp("</" + J + "\\s*>", "igm");
                    L.lastIndex = this.pos;
                    var I = L.exec(this.input);
                    var M = I ? I.index : this.input.length;
                    if (this.pos < M) {
                        K = this.input.substring(this.pos, M);
                        this.pos = M
                    }
                    return K
                };
                this.record_tag = function(t) {
                    if (this.tags[t + "count"]) {
                        this.tags[t + "count"]++;
                        this.tags[t + this.tags[t + "count"]] = this.indent_level
                    } else {
                        this.tags[t + "count"] = 1;
                        this.tags[t + this.tags[t + "count"]] = this.indent_level
                    }
                    this.tags[t + this.tags[t + "count"] + "parent"] = this.tags.parent;
                    this.tags.parent = t + this.tags[t + "count"]
                };
                this.retrieve_tag = function(t) {
                    if (this.tags[t + "count"]) {
                        var I = this.tags.parent;
                        while (I) {
                            if (t + this.tags[t + "count"] === I) {
                                break
                            }
                            I = this.tags[I + "parent"]
                        }
                        if (I) {
                            this.indent_level = this.tags[t + this.tags[t + "count"]];
                            this.tags.parent = this.tags[I + "parent"]
                        }
                        delete this.tags[t + this.tags[t + "count"] + "parent"];
                        delete this.tags[t + this.tags[t + "count"]];
                        if (this.tags[t + "count"] == 1) {
                            delete this.tags[t + "count"]
                        } else {
                            this.tags[t + "count"]--
                        }
                    }
                };
                this.get_tag = function() {
                    var K = "",
                        M = [],
                        t = false,
                        O, J;
                    do {
                        if (this.pos >= this.input.length) {
                            return M.length ? M.join("") : ["", "TK_EOF"]
                        }
                        K = this.input.charAt(this.pos);
                        this.pos++;
                        this.line_char_count++;
                        if (this.Utils.in_array(K, this.Utils.whitespace)) {
                            t = true;
                            this.line_char_count--;
                            continue
                        }
                        if (K === "'" || K === '"') {
                            if (!M[1] || M[1] !== "!") {
                                K += this.get_unformatted(K);
                                t = true
                            }
                        }
                        if (K === "=") {
                            t = false
                        }
                        if (M.length && M[M.length - 1] !== "=" && K !== ">" && t) {
                            if (this.line_char_count >= this.max_char) {
                                this.print_newline(false, M);
                                this.line_char_count = 0
                            } else {
                                M.push(" ");
                                this.line_char_count++
                            }
                            t = false
                        }
                        if (K === "<") {
                            O = this.pos - 1
                        }
                        M.push(K)
                    } while (K !== ">");
                    var P = M.join("");
                    var I;
                    if (P.indexOf(" ") != -1) {
                        I = P.indexOf(" ")
                    } else {
                        I = P.indexOf(">")
                    }
                    var N = P.substring(1, I).toLowerCase();
                    if (P.charAt(P.length - 2) === "/" || this.Utils.in_array(N, this.Utils.single_token)) {
                        this.tag_type = "SINGLE"
                    } else {
                        if (N === "script") {
                            this.record_tag(N);
                            this.tag_type = "SCRIPT"
                        } else {
                            if (N === "style") {
                                this.record_tag(N);
                                this.tag_type = "STYLE"
                            } else {
                                if (this.Utils.in_array(N, G)) {
                                    var L = this.get_unformatted("</" + N + ">", P);
                                    M.push(L);
                                    if (O > 0 && this.Utils.in_array(this.input.charAt(O - 1), this.Utils.whitespace)) {
                                        M.splice(0, 0, this.input.charAt(O - 1))
                                    }
                                    J = this.pos - 1;
                                    if (this.Utils.in_array(this.input.charAt(J + 1), this.Utils.whitespace)) {
                                        M.push(this.input.charAt(J + 1))
                                    }
                                    this.tag_type = "SINGLE"
                                } else {
                                    if (N.charAt(0) === "!") {
                                        if (N.indexOf("[if") != -1) {
                                            if (P.indexOf("!IE") != -1) {
                                                var L = this.get_unformatted("-->", P);
                                                M.push(L)
                                            }
                                            this.tag_type = "START"
                                        } else {
                                            if (N.indexOf("[endif") != -1) {
                                                this.tag_type = "END";
                                                this.unindent()
                                            } else {
                                                if (N.indexOf("[cdata[") != -1) {
                                                    var L = this.get_unformatted("]]>", P);
                                                    M.push(L);
                                                    this.tag_type = "SINGLE"
                                                } else {
                                                    var L = this.get_unformatted("-->", P);
                                                    M.push(L);
                                                    this.tag_type = "SINGLE"
                                                }
                                            }
                                        }
                                    } else {
                                        if (N.charAt(0) === "/") {
                                            this.retrieve_tag(N.substring(1));
                                            this.tag_type = "END"
                                        } else {
                                            this.record_tag(N);
                                            this.tag_type = "START"
                                        }
                                        if (this.Utils.in_array(N, this.Utils.extra_liners)) {
                                            this.print_newline(true, this.output)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return M.join("")
                };
                this.get_unformatted = function(I, J) {
                    if (J && J.indexOf(I) != -1) {
                        return ""
                    }
                    var t = "";
                    var K = "";
                    var L = true;
                    do {
                        if (this.pos >= this.input.length) {
                            return K
                        }
                        t = this.input.charAt(this.pos);
                        this.pos++;
                        if (this.Utils.in_array(t, this.Utils.whitespace)) {
                            if (!L) {
                                this.line_char_count--;
                                continue
                            }
                            if (t === "\n" || t === "\r") {
                                K += "\n";
                                this.line_char_count = 0;
                                continue
                            }
                        }
                        K += t;
                        this.line_char_count++;
                        L = true
                    } while (K.indexOf(I) == -1);
                    return K
                };
                this.get_token = function() {
                    var t;
                    if (this.last_token === "TK_TAG_SCRIPT" || this.last_token === "TK_TAG_STYLE") {
                        var I = this.last_token.substr(7);
                        t = this.get_contents_to(I);
                        if (typeof t !== "string") {
                            return t
                        }
                        return [t, "TK_" + I]
                    }
                    if (this.current_mode === "CONTENT") {
                        t = this.get_content();
                        if (typeof t !== "string") {
                            return t
                        } else {
                            return [t, "TK_CONTENT"]
                        }
                    }
                    if (this.current_mode === "TAG") {
                        t = this.get_tag();
                        if (typeof t !== "string") {
                            return t
                        } else {
                            var J = "TK_TAG_" + this.tag_type;
                            return [t, J]
                        }
                    }
                };
                this.get_full_indent = function(t) {
                    t = this.indent_level + t || 0;
                    if (t < 1) {
                        return ""
                    }
                    return Array(t + 1).join(this.indent_string)
                };
                this.printer = function(K, J, t, M, L) {
                    this.input = K || "";
                    this.output = [];
                    this.indent_character = J;
                    this.indent_string = "";
                    this.indent_size = t;
                    this.brace_style = L;
                    this.indent_level = 0;
                    this.max_char = M;
                    this.line_char_count = 0;
                    for (var I = 0; I < this.indent_size; I++) {
                        this.indent_string += this.indent_character
                    }
                    this.print_newline = function(P, N) {
                        this.line_char_count = 0;
                        if (!N || !N.length) {
                            return
                        }
                        if (!P) {
                            while (this.Utils.in_array(N[N.length - 1], this.Utils.whitespace)) {
                                N.pop()
                            }
                        }
                        N.push("\n");
                        for (var O = 0; O < this.indent_level; O++) {
                            N.push(this.indent_string)
                        }
                    };
                    this.print_token = function(N) {
                        this.output.push(N)
                    };
                    this.indent = function() {
                        this.indent_level++
                    };
                    this.unindent = function() {
                        if (this.indent_level > 0) {
                            this.indent_level--
                        }
                    }
                };
                return this
            }
            H = new q();
            H.printer(D, A, C, u, v);
            while (true) {
                var w = H.get_token();
                H.token_text = w[0];
                H.token_type = w[1];
                if (H.token_type === "TK_EOF") {
                    break
                }
                switch (H.token_type) {
                    case "TK_TAG_START":
                        H.print_newline(false, H.output);
                        H.print_token(H.token_text);
                        H.indent();
                        H.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_STYLE":
                    case "TK_TAG_SCRIPT":
                        H.print_newline(false, H.output);
                        H.print_token(H.token_text);
                        H.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_END":
                        if (H.last_token === "TK_CONTENT" && H.last_text === "") {
                            var F = H.token_text.match(/\w+/)[0];
                            var y = H.output[H.output.length - 1].match(/<\s*(\w+)/);
                            if (y === null || y[1] !== F) {
                                H.print_newline(true, H.output)
                            }
                        }
                        H.print_token(H.token_text);
                        H.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_SINGLE":
                        var o = H.token_text.match(/^\s*<([a-z]+)/i);
                        if (!o || !H.Utils.in_array(o[1], G)) {
                            H.print_newline(false, H.output)
                        }
                        H.print_token(H.token_text);
                        H.current_mode = "CONTENT";
                        break;
                    case "TK_CONTENT":
                        if (H.token_text !== "") {
                            H.print_token(H.token_text)
                        }
                        H.current_mode = "TAG";
                        break;
                    case "TK_STYLE":
                    case "TK_SCRIPT":
                        if (H.token_text !== "") {
                            H.output.push("\n");
                            var x = H.token_text;
                            if (r.indent_scripts == "keep") {
                                var z = 0
                            } else {
                                if (r.indent_scripts == "separate") {
                                    var z = -H.indent_level
                                } else {
                                    var z = 1
                                }
                            }
                            var p = H.get_full_indent(z);
                            var s = x.match(/^\s*/)[0];
                            var B = s.match(/[^\n\r]*$/)[0].split(H.indent_string).length - 1;
                            var E = H.get_full_indent(z - B);
                            x = x.replace(/^\s*/, p).replace(/\r\n|\r|\n/g, "\n" + E).replace(/\s*$/, "");
                            if (x) {
                                H.print_token(x);
                                H.print_newline(true, H.output)
                            }
                        }
                        H.current_mode = "TAG";
                        break
                }
                H.last_token = H.token_type;
                H.last_text = H.token_text
            }
            return H.output.join("")
        };

        function e(r) {
            var q = {},
                o = r.split(",");
            for (var p = 0; p < o.length; p++) {
                q[o[p]] = true
            }
            return q
        }
    }
})(jqxBaseFramework);