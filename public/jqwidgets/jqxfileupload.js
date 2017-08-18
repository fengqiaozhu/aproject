/*
 jQWidgets v4.1.1 (2016-Mar)
 Copyright (c) 2011-2016 jQWidgets.
 License: http://jqwidgets.com/license/
 */

(function(a) {
    a.jqx.jqxWidget("jqxFileUpload", "", {});
    a.extend(a.jqx._jqxFileUpload.prototype, {
        defineInstance: function() {
            var b = {
                width: null,
                height: "auto",
                uploadUrl: "",
                fileInputName: "",
                autoUpload: false,
                multipleFilesUpload: true,
                accept: null,
                browseTemplate: "",
                uploadTemplate: "",
                cancelTemplate: "",
                localization: null,
                renderFiles: null,
                disabled: false,
                rtl: false,
                events: ["select", "remove", "uploadStart", "uploadEnd"]
            };
            a.extend(true, this, b)
        },
        createInstance: function() {
            var b = this;
            if (b.host.jqxButton === undefined) {
                throw new Error("jqxFileUpload: Missing reference to jqxbuttons.js")
            }
            b._createFromInput("jqxFileUpload");
            if (a.jqx.browser.msie) {
                if (a.jqx.browser.version < 11) {
                    b._ieOldWebkit = true;
                    if (a.jqx.browser.version < 8) {
                        b._ie7 = true
                    }
                }
            } else {
                if (a.jqx.browser.webkit) {
                    b._ieOldWebkit = true
                }
            }
            b._fluidWidth = typeof b.width === "string" && b.width.charAt(b.width.length - 1) === "%";
            b._fluidHeight = typeof b.height === "string" && b.height.charAt(b.height.length - 1) === "%";
            b._render(true)
        },
        _createFromInput: function(c) {
            var f = this;
            if (f.element.nodeName.toLowerCase() == "input") {
                f.field = f.element;
                if (f.field.className) {
                    f._className = f.field.className
                }
                var e = {
                    title: f.field.title
                };
                if (f.field.id.length) {
                    e.id = f.field.id.replace(/[^\w]/g, "_") + "_" + c;
                    d
                } else {
                    e.id = a.jqx.utilities.createId() + "_" + c
                }
                var h = a("<div></div>", e);
                h[0].style.cssText = f.field.style.cssText;
                if (!f.width) {
                    f.width = a(f.field).width()
                }
                if (!f.height) {
                    f.height = a(f.field).outerHeight()
                }
                a(f.field).hide().after(h);
                var g = f.host.data();
                f.host = h;
                f.host.data(g);
                f.element = h[0];
                f.element.id = f.field.id;
                f.field.id = e.id;
                if (f._className) {
                    f.host.addClass(f._className);
                    a(f.field).removeClass(f._className)
                }
                if (f.field.tabIndex) {
                    var b = f.field.tabIndex;
                    f.field.tabIndex = -1;
                    f.element.tabIndex = b
                }
            }
        },
        _render: function(b) {
            var c = this;
            c._setSize();
            c._addClasses();
            if (b === true) {
                c._appendElements()
            } else {
                c._removeHandlers()
            }
            c._addHandlers();
            if (c._ie7) {
                c._borderAndPadding("width", c.host);
                if (c.height !== "auto") {
                    c._borderAndPadding("height", c.host)
                }
            }
            a.jqx.utilities.resize(c.host, null, true);
            a.jqx.utilities.resize(c.host,
                function() {
                    if (c._fluidWidth) {
                        if (c._ie7) {
                            c.host.css("width", c.width);
                            c._borderAndPadding("width", c.host)
                        }
                        for (var g = 0; g < c._fileRows.length; g++) {
                            var e = c._fileRows[g];
                            var k = e.fileRow;
                            if (c._ie7) {
                                k.css("width", "100%");
                                c._borderAndPadding("width", k)
                            }
                            if (!c.renderFiles) {
                                c._setMaxWidth(e)
                            }
                        }
                        if (c.rtl && c._ieOldWebkit) {
                            for (var f = 0; f < c._forms.length; f++) {
                                var h = c._browseButton.position();
                                c._forms[f].form.css({
                                    left: h.left,
                                    top: h.top
                                })
                            }
                        }
                    }
                    if (c._ie7 && c._fluidHeight) {
                        c.host.css("height", c.height);
                        c._borderAndPadding("height", c.host)
                    }
                })
        },
        render: function() {
            this._render(false)
        },
        refresh: function(b) {
            if (b !== true) {
                this._render(false)
            }
        },
        destroy: function() {
            var b = this;
            b.cancelAll();
            b._removeHandlers(true);
            b.host.remove()
        },
        browse: function() {
            if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                return
            }
            var b = this;
            if (b.multipleFilesUpload === true || (b.multipleFilesUpload === false && b._fileRows.length === 0)) {
                b._forms[b._forms.length - 1].fileInput.click()
            }
        },
        _uploadFile: function(b) {
            var c = this;
            if (c._uploadQueue.length === 0) {
                c._uploadQueue.push(b)
            }
            if (!c.renderFiles) {
                b.uploadFile.add(b.cancelFile).hide();
                b.loadingElement.show()
            }
            b.fileInput.attr("name", c.fileInputName);
            c._raiseEvent("2", {
                file: b.fileName
            });
            b.form[0].submit();
            c._fileObjectToRemove = b
        },
        uploadFile: function(b) {
            var c = this,
                e = c._fileRows[b];
            if (e !== undefined) {
                c._uploadFile(e)
            }
        },
        uploadAll: function() {
            var c = this;
            if (c._fileRows.length > 0) {
                for (var b = c._fileRows.length - 1; b >= 0; b--) {
                    c._uploadQueue.push(c._fileRows[b])
                }
                c._uploadFile(c._fileRows[0])
            }
        },
        cancelFile: function(b) {
            var c = this;
            c._removeSingleFileRow(c._fileRows[b])
        },
        cancelAll: function() {
            var c = this;
            if (c._fileRows.length > 0) {
                for (var b = 0; b < c._fileRows.length; b++) {
                    c._removeFileRow(c._fileRows[b])
                }
                setTimeout(function() {
                        c._browseButton.css("margin-bottom", 0)
                    },
                    400);
                c._fileRows.length = 0;
                c._hideButtons(true)
            }
        },
        propertyChangedHandler: function(f, n, c, m) {
            var b = f.element.id;
            if (n === "localization") {
                if (m.browseButton && (!c || m.browseButton !== c.browseButton)) {
                    f._browseButton.text(m.browseButton);
                    f._browseButton.jqxButton({
                        width: "auto"
                    })
                }
                if (m.uploadButton && (!c || m.uploadButton !== c.uploadButton)) {
                    f._uploadButton.text(m.uploadButton);
                    f._uploadButton.jqxButton({
                        width: "auto"
                    })
                }
                if (m.cancelButton && (!c || m.cancelButton !== c.cancelButton)) {
                    f._cancelButton.text(m.cancelButton);
                    f._cancelButton.jqxButton({
                        width: "auto"
                    })
                }
                if (!f.renderFiles) {
                    if (m.uploadFileTooltip && (!c || m.uploadFileTooltip !== c.uploadFileTooltip)) {
                        a("#" + b + " .jqx-file-upload-file-upload").attr("title", m.uploadFileTooltip)
                    }
                    if (m.uploadFileTooltip && (!c || m.cancelFileTooltip !== c.cancelFileTooltip)) {
                        a("#" + b + " .jqx-file-upload-file-cancel").attr("title", m.cancelFileTooltip)
                    }
                }
                return
            }
            if (m !== c) {
                switch (n) {
                    case "width":
                        f.host.css("width", m);
                        if (f._ie7) {
                            f._borderAndPadding("width", f.host);
                            for (var e = 0; e < f._fileRows.length; e++) {
                                var o = f._fileRows[e].fileRow;
                                o.css("width", "100%");
                                f._borderAndPadding("width", o)
                            }
                        }
                        f._fluidWidth = typeof m === "string" && m.charAt(m.length - 1) === "%";
                        return;
                    case "height":
                        f.host.css("height", m);
                        if (f._ie7) {
                            f._borderAndPadding("height", f.host)
                        }
                        f._fluidHeight = typeof m === "string" && m.charAt(m - 1) === "%";
                        return;
                    case "uploadUrl":
                        for (var h = 0; h < f._forms.length; h++) {
                            f._forms[h].form.attr("action", m)
                        }
                        return;
                    case "accept":
                        for (var g = 0; g < f._forms.length; g++) {
                            f._forms[g].fileInput.attr("accept", m)
                        }
                        return;
                    case "theme":
                        a.jqx.utilities.setTheme(c, m, f.host);
                        f._browseButton.jqxButton({
                            theme: m
                        });
                        f._uploadButton.jqxButton({
                            theme: m
                        });
                        f._cancelButton.jqxButton({
                            theme: m
                        });
                        return;
                    case "browseTemplate":
                        f._browseButton.jqxButton({
                            template:
                            m
                        });
                        return;
                    case "uploadTemplate":
                        f._uploadButton.jqxButton({
                            template:
                            m
                        });
                        return;
                    case "cancelTemplate":
                        f._cancelButton.jqxButton({
                            template:
                            m
                        });
                        return;
                    case "disabled":
                        f._browseButton.jqxButton({
                            disabled:
                            m
                        });
                        f._uploadButton.jqxButton({
                            disabled:
                            m
                        });
                        f._cancelButton.jqxButton({
                            disabled:
                            m
                        });
                        if (m === true) {
                            f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"))
                        } else {
                            f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))
                        }
                        return;
                    case "rtl":
                        var k = function(l) {
                            var p = l ? "addClass": "removeClass";
                            f._browseButton[p](f.toThemeProperty("jqx-file-upload-button-browse-rtl"));
                            f._cancelButton[p](f.toThemeProperty("jqx-file-upload-button-cancel-rtl"));
                            f._uploadButton[p](f.toThemeProperty("jqx-file-upload-button-upload-rtl"));
                            if (a.jqx.browser.msie && a.jqx.browser.version > 8) {
                                f._uploadButton[p](f.toThemeProperty("jqx-file-upload-button-upload-rtl-ie"))
                            }
                            for (var i = 0; i < f._fileRows.length; i++) {
                                var j = f._fileRows[i];
                                j.fileNameContainer[p](f.toThemeProperty("jqx-file-upload-file-name-rtl"));
                                j.cancelFile[p](f.toThemeProperty("jqx-file-upload-file-cancel-rtl"));
                                j.uploadFile[p](f.toThemeProperty("jqx-file-upload-file-upload-rtl"));
                                j.loadingElement[p](f.toThemeProperty("jqx-file-upload-loading-element-rtl"))
                            }
                        };
                        k(m);
                        return
                }
            }
        },
        _raiseEvent: function(g, c) {
            if (c === undefined) {
                c = {
                    owner: null
                }
            }
            var e = this.events[g];
            c.owner = this;
            var f = new a.Event(e);
            f.owner = this;
            f.args = c;
            if (f.preventDefault) {
                f.preventDefault()
            }
            var b = this.host.trigger(f);
            return b
        },
        _setSize: function() {
            var b = this;
            b.host.css("width", b.width);
            b.host.css("height", b.height)
        },
        _borderAndPadding: function(e, c) {
            var b;
            if (e === "width") {
                b = parseInt(c.css("border-left-width"), 10) + parseInt(c.css("border-right-width"), 10) + parseInt(c.css("padding-left"), 10) + parseInt(c.css("padding-right"), 10)
            } else {
                b = parseInt(c.css("border-top-width"), 10) + parseInt(c.css("border-bottom-width"), 10) + parseInt(c.css("padding-top"), 10) + parseInt(c.css("padding-bottom"), 10)
            }
            c.css(e, c[e]() - b)
        },
        _addClasses: function() {
            var b = this;
            b.host.addClass(b.toThemeProperty("jqx-widget jqx-widget-content jqx-rc-all jqx-file-upload"));
            if (b.disabled === true) {
                b.host.addClass(b.toThemeProperty("jqx-fill-state-disabled"))
            }
        },
        _appendElements: function() {
            var h = this,
                c = "浏览",
                b = 90,
                i = "上传全部",
                f = 90,
                e = "取消全部",
                g = 90;
            var j = h.element.id;
            if (h.localization) {
                if (h.localization.browseButton) {
                    c = h.localization.browseButton;
                    b = "auto"
                }
                if (h.localization.uploadButton) {
                    i = h.localization.uploadButton;
                    f = "auto"
                }
                if (h.localization.cancelButton) {
                    e = h.localization.cancelButton;
                    g = "auto"
                }
            }
            h._browseButton = a('<button id="' + j + 'BrowseButton" class="' + h.toThemeProperty("jqx-file-upload-button-browse") + '">' + c + "</button>");
            h.host.append(h._browseButton);
            h._browseButton.jqxButton({
                theme: h.theme,
                width: b,
                template: h.browseTemplate,
                disabled: h.disabled
            });
            h._browseButton.after('<div style="clear: both;"></div>');
            h._bottomButtonsContainer = a('<div class="' + h.toThemeProperty("jqx-file-upload-buttons-container") + '"></div>');
            h.host.append(h._bottomButtonsContainer);
            h._uploadButton = a('<button id="' + j + 'UploadButton" class="' + h.toThemeProperty("jqx-file-upload-button-upload") + '">' + i + "</button>");
            h._bottomButtonsContainer.append(h._uploadButton);
            h._uploadButton.jqxButton({
                theme: h.theme,
                width: f,
                template: h.uploadTemplate,
                disabled: h.disabled
            });
            h._cancelButton = a('<button id="' + j + 'CancelButton" class="' + h.toThemeProperty("jqx-file-upload-button-cancel") + '">' + e + "</button>");
            h._bottomButtonsContainer.append(h._cancelButton);
            h._cancelButton.jqxButton({
                theme: h.theme,
                width: g,
                template: h.cancelTemplate,
                disabled: h.disabled
            });
            h._bottomButtonsContainer.after('<div style="clear: both;"></div>');
            if (h.rtl) {
                h._browseButton.addClass(h.toThemeProperty("jqx-file-upload-button-browse-rtl"));
                h._cancelButton.addClass(h.toThemeProperty("jqx-file-upload-button-cancel-rtl"));
                h._uploadButton.addClass(h.toThemeProperty("jqx-file-upload-button-upload-rtl"));
                if (a.jqx.browser.msie && a.jqx.browser.version > 8) {
                    h._uploadButton.addClass(h.toThemeProperty("jqx-file-upload-button-upload-rtl-ie"))
                }
            }
            h._uploadIframe = a('<iframe name="' + j + 'Iframe" class="' + h.toThemeProperty("jqx-file-upload-iframe") + '" src=""></iframe>');
            h.host.append(h._uploadIframe);
            h._iframeInitialized = false;
            h._uploadQueue = [];
            h._forms = [];
            h._addFormAndFileInput();
            h._fileRows = []
        },
        _addFormAndFileInput: function() {
            var g = this;
            var j = g.element.id;
            var f = a('<form class="' + g.toThemeProperty("jqx-file-upload-form") + '" action="' + g.uploadUrl + '" target="' + j + 'Iframe" method="post" enctype="multipart/form-data"></form>');
            g.host.append(f);
            var e = a('<input type="file" class="' + g.toThemeProperty("jqx-file-upload-file-input") + '" />');
            if (g.accept) {
                e.attr("accept", g.accept)
            }
            f.append(e);
            if (g._ieOldWebkit) {
                var c = g._browseButton.position();
                var h = g._browseButton.outerWidth();
                var i = g._browseButton.outerHeight();
                var b = g.rtl && g._ie7 ? 12 : 0;
                f.css({
                    left: c.left - b,
                    top: c.top,
                    width: h,
                    height: i
                });
                f.addClass(g.toThemeProperty("jqx-file-upload-form-ie9"));
                e.addClass(g.toThemeProperty("jqx-file-upload-file-input-ie9"));
                g.addHandler(f, "mouseenter.jqxFileUpload" + j,
                    function() {
                        g._browseButton.addClass(g.toThemeProperty("jqx-fill-state-hover"))
                    });
                g.addHandler(f, "mouseleave.jqxFileUpload" + j,
                    function() {
                        g._browseButton.removeClass(g.toThemeProperty("jqx-fill-state-hover"))
                    });
                g.addHandler(f, "mousedown.jqxFileUpload" + j,
                    function() {
                        g._browseButton.addClass(g.toThemeProperty("jqx-fill-state-pressed"))
                    });
                g.addHandler(a(document), "mouseup.jqxFileUpload" + j,
                    function() {
                        if (g._browseButton.hasClass("jqx-fill-state-pressed")) {
                            g._browseButton.removeClass(g.toThemeProperty("jqx-fill-state-pressed"))
                        }
                    })
            }
            g.addHandler(e, "change.jqxFileUpload" + j,
                function() {
                    var m = this.value,
                        k;
                    if (!a.jqx.browser.mozilla) {
                        if (m.indexOf("fakepath") !== -1) {
                            m = m.slice(12)
                        } else {
                            m = m.slice(m.lastIndexOf("\\") + 1)
                        }
                    }
                    if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                        k = "IE9 and earlier do not support getting the file size."
                    } else {
                        k = this.files[0].size
                    }
                    var l = g._addFileRow(m, f, e, k);
                    if (g._fileRows.length === 1) {
                        g._browseButton.css("margin-bottom", "10px");
                        g._hideButtons(false)
                    }
                    if (g._ieOldWebkit) {
                        g.removeHandler(f, "mouseenter.jqxFileUpload" + j);
                        g.removeHandler(f, "mouseleave.jqxFileUpload" + j);
                        g.removeHandler(f, "mousedown.jqxFileUpload" + j)
                    }
                    g._addFormAndFileInput();
                    g.removeHandler(e, "change.jqxFileUpload" + j);
                    if (g.autoUpload === true) {
                        g._uploadFile(l)
                    }
                });
            if (g._ieOldWebkit === true) {
                g.addHandler(e, "click.jqxFileUpload" + j,
                    function(k) {
                        if (g.multipleFilesUpload === false && g._fileRows.length > 0) {
                            k.preventDefault()
                        }
                    })
            }
            g._forms.push({
                form: f,
                fileInput: e
            })
        },
        _addFileRow: function(g, b, f, e) {
            var i = this,
                m, h, n, k, o, j = "Cancel",
                l = "Upload File";
            m = a('<div class="' + i.toThemeProperty("jqx-widget-content jqx-rc-all jqx-file-upload-file-row") + '"></div>');
            if (i._fileRows.length === 0) {
                i._browseButton.after(m)
            } else {
                i._fileRows[i._fileRows.length - 1].fileRow.after(m)
            }
            if (!i.renderFiles) {
                h = a('<div class="' + i.toThemeProperty("jqx-widget-header jqx-rc-all jqx-file-upload-file-name") + '">' + g + "</div>");
                m.append(h);
                if (i.localization) {
                    if (i.localization.cancelFileTooltip) {
                        j = i.localization.cancelFileTooltip
                    }
                    if (i.localization.uploadFileTooltip) {
                        l = i.localization.uploadFileTooltip
                    }
                }
                k = a('<div class="' + i.toThemeProperty("jqx-widget-header jqx-rc-all jqx-file-upload-file-cancel") + '" title="' + j + '"><div class="' + i.toThemeProperty("jqx-icon-close jqx-file-upload-icon") + '"></div></div>');
                m.append(k);
                o = a('<div class="' + i.toThemeProperty("jqx-widget-header jqx-rc-all jqx-file-upload-file-upload") + '" title="' + l + '"><div class="' + i.toThemeProperty("jqx-icon-arrow-up jqx-file-upload-icon jqx-file-upload-icon-upload") + '"></div></div>');
                m.append(o);
                n = a('<div class="' + i.toThemeProperty("jqx-file-upload-loading-element") + '"></div>');
                m.append(n);
                if (i.rtl) {
                    h.addClass(i.toThemeProperty("jqx-file-upload-file-name-rtl"));
                    k.addClass(i.toThemeProperty("jqx-file-upload-file-cancel-rtl"));
                    o.addClass(i.toThemeProperty("jqx-file-upload-file-upload-rtl"));
                    n.addClass(i.toThemeProperty("jqx-file-upload-loading-element-rtl"))
                }
                i._setMaxWidth({
                    fileNameContainer: h,
                    uploadFile: o,
                    cancelFile: k
                })
            } else {
                m.html(i.renderFiles(g))
            }
            if (i._ie7) {
                i._borderAndPadding("width", m);
                i._borderAndPadding("height", m);
                if (!i.renderFiles) {
                    i._borderAndPadding("height", h);
                    i._borderAndPadding("height", o);
                    i._borderAndPadding("height", k)
                }
            }
            var c = {
                fileRow: m,
                fileNameContainer: h,
                fileName: g,
                uploadFile: o,
                cancelFile: k,
                loadingElement: n,
                form: b,
                fileInput: f,
                index: i._fileRows.length
            };
            i._addFileHandlers(c);
            i._fileRows.push(c);
            i._raiseEvent("0", {
                file: g,
                size: e
            });
            return c
        },
        _setMaxWidth: function(c) {
            var f = this;
            var g = c.cancelFile.outerWidth(true) + c.uploadFile.outerWidth(true);
            var b = f._ie7 ? 6 : 0;
            var e = f.host.width() - parseInt(f.host.css("padding-left"), 10) - parseInt(f.host.css("padding-right"), 10) - g - b - 7;
            c.fileNameContainer.css("max-width", e)
        },
        _addFileHandlers: function(b) {
            var c = this;
            if (!c.renderFiles) {
                var e = c.element.id;
                c.addHandler(b.uploadFile, "mouseenter.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            b.uploadFile.addClass(c.toThemeProperty("jqx-fill-state-hover"))
                        }
                    });
                c.addHandler(b.uploadFile, "mouseleave.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            b.uploadFile.removeClass(c.toThemeProperty("jqx-fill-state-hover"))
                        }
                    });
                c.addHandler(b.uploadFile, "click.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            c._uploadFile(b)
                        }
                    });
                c.addHandler(b.cancelFile, "mouseenter.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            b.cancelFile.addClass(c.toThemeProperty("jqx-fill-state-hover"))
                        }
                    });
                c.addHandler(b.cancelFile, "mouseleave.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            b.cancelFile.removeClass(c.toThemeProperty("jqx-fill-state-hover"))
                        }
                    });
                c.addHandler(b.cancelFile, "click.jqxFileUpload" + e,
                    function() {
                        if (c.disabled === false) {
                            c._removeSingleFileRow(b)
                        }
                    })
            }
        },
        _removeSingleFileRow: function(c) {
            var e = this;
            e._removeFileRow(c);
            e._fileRows.splice(c.index, 1);
            if (e._fileRows.length === 0) {
                setTimeout(function() {
                        e._browseButton.css("margin-bottom", 0)
                    },
                    400);
                e._hideButtons(true)
            } else {
                for (var b = 0; b < e._fileRows.length; b++) {
                    e._fileRows[b].index = b
                }
            }
        },
        _removeFileRow: function(b) {
            var c = this;
            var e = c.element.id;
            if (!c.renderFiles) {
                c.removeHandler(b.uploadFile, "mouseenter.jqxFileUpload" + e);
                c.removeHandler(b.uploadFile, "mouseleave.jqxFileUpload" + e);
                c.removeHandler(b.uploadFile, "click.jqxFileUpload" + e);
                c.removeHandler(b.cancelFile, "mouseenter.jqxFileUpload" + e);
                c.removeHandler(b.cancelFile, "mouseleave.jqxFileUpload" + e);
                c.removeHandler(b.cancelFile, "click.jqxFileUpload" + e)
            }
            b.fileRow.fadeOut(function() {
                b.fileRow.remove();
                b.form.remove()
            });
            c._raiseEvent("1", {
                file: b.fileName
            })
        },
        _hideButtons: function(b) {
            var c = this;
            if (b === true) {
                c._bottomButtonsContainer.fadeOut()
            } else {
                c._bottomButtonsContainer.fadeIn()
            }
        },
        _addHandlers: function() {
            var b = this;
            var c = b.element.id;
            if (!b._ieOldWebkit) {
                b.addHandler(b._browseButton, "click.jqxFileUpload" + c,
                    function() {
                        b.browse()
                    })
            }
            b.addHandler(b._uploadButton, "click.jqxFileUpload" + c,
                function() {
                    b.uploadAll()
                });
            b.addHandler(b._cancelButton, "click.jqxFileUpload" + c,
                function() {
                    b.cancelAll()
                });
            b.addHandler(b._uploadIframe, "load.jqxFileUpload" + c,
                function() {
                    if (a.jqx.browser.chrome || a.jqx.browser.webkit) {
                        b._iframeInitialized = true
                    }
                    if (b._iframeInitialized === false) {
                        b._iframeInitialized = true
                    } else {
                        var e = b._uploadIframe.contents().find("body").html();
                        b._raiseEvent("3", {
                            file: b._uploadQueue[b._uploadQueue.length - 1].fileName,
                            response: e
                        });
                        if (b._fileObjectToRemove) {
                            b._removeSingleFileRow(b._fileObjectToRemove);
                            b._fileObjectToRemove = null
                        }
                        b._uploadQueue.pop();
                        if (b._uploadQueue.length > 0) {
                            b._uploadFile(b._uploadQueue[b._uploadQueue.length - 1])
                        }
                    }
                })
        },
        _removeHandlers: function(b) {
            var e = this;
            var f = e.element.id;
            e.removeHandler(e._browseButton, "click.jqxFileUpload" + f);
            e.removeHandler(e._uploadButton, "click.jqxFileUpload" + f);
            e.removeHandler(e._cancelButton, "click.jqxFileUpload" + f);
            e.removeHandler(e._uploadIframe, "load.jqxFileUpload" + f);
            if (b === true) {
                var c = e._forms[e._forms.length - 1];
                e.removeHandler(c.fileInput, "change.jqxFileUpload" + f);
                if (e._ieOldWebkit) {
                    e.removeHandler(c.form, "mouseenter.jqxFileUpload" + f);
                    e.removeHandler(c.form, "mouseleave.jqxFileUpload" + f);
                    e.removeHandler(c.form, "mousedown.jqxFileUpload" + f);
                    e.removeHandler(a("body"), "mouseup.jqxFileUpload" + f)
                }
            }
        }
    })
})(jqxBaseFramework);