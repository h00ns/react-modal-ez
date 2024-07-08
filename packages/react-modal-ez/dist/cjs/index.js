'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useDimmedClick = function (ref, callback, enalbe) {
    if (enalbe === void 0) { enalbe = true; }
    react.useEffect(function () {
        if (!ref.current)
            return;
        var handleClick = function (e) {
            var _a;
            if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) && enalbe) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClick);
        return function () {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback]);
};
var useEscDown = function (callback, enable) {
    react.useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === "Escape" && enable) {
                callback();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return function () {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [callback, enable]);
};
var useScrollLock = function (enable) {
    var _a = react.useState(""), prevOverflowY = _a[0], setPrevOverflowY = _a[1];
    react.useEffect(function () {
        var preventDefault = function (e) { return e.preventDefault(); };
        var body = document.querySelector("body");
        if (body && enable) {
            setPrevOverflowY(window.getComputedStyle(body).overflowY);
            body.style.overflowY = "hidden";
            document.addEventListener("touchmove", preventDefault, {
                passive: false,
            });
        }
        return function () {
            if (body) {
                body.style.overflowY = prevOverflowY;
                document.removeEventListener("touchmove", preventDefault);
            }
        };
    }, [enable]);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@keyframes Controller-module_fadeIn__f--8R {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.Controller-module_dimmed__RtmQE {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 100;\n  animation: Controller-module_fadeIn__f--8R 0.2s ease-in-out;\n}\n\n.Controller-module_modal__R2-Mc {\n  position: fixed;\n  animation: Controller-module_fadeIn__f--8R 0.2s ease-in-out;\n}\n\n.Controller-module_position-top-left__ByITm {\n  top: 24px;\n  left: 24px;\n}\n\n.Controller-module_position-top-center__-21-v {\n  top: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Controller-module_position-top-right__DpOY9 {\n  top: 24px;\n  right: 24px;\n}\n\n.Controller-module_position-left__qANc1 {\n  top: 50%;\n  left: 24px;\n  transform: translateY(-50%);\n}\n\n.Controller-module_position-center__HFRUC {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.Controller-module_position-right__DXkpq {\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n\n.Controller-module_position-bottom-left__dwrWn {\n  bottom: 24px;\n  left: 24px;\n}\n\n.Controller-module_position-bottom-center__-of0v {\n  bottom: 24px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.Controller-module_position-bottom-right__8i8dd {\n  bottom: 24px;\n  right: 24px;\n}\n";
var css = {"dimmed":"Controller-module_dimmed__RtmQE","fadeIn":"Controller-module_fadeIn__f--8R","modal":"Controller-module_modal__R2-Mc","position-top-left":"Controller-module_position-top-left__ByITm","position-top-center":"Controller-module_position-top-center__-21-v","position-top-right":"Controller-module_position-top-right__DpOY9","position-left":"Controller-module_position-left__qANc1","position-center":"Controller-module_position-center__HFRUC","position-right":"Controller-module_position-right__DXkpq","position-bottom-left":"Controller-module_position-bottom-left__dwrWn","position-bottom-center":"Controller-module_position-bottom-center__-of0v","position-bottom-right":"Controller-module_position-bottom-right__8i8dd"};
styleInject(css_248z);

function Controller(_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? "center" : _b, top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right, _c = _a.dimmed, dimmed = _c === void 0 ? true : _c, _d = _a.closeOnDimmedClick, closeOnDimmedClick = _d === void 0 ? true : _d, _e = _a.closeOnEscape, closeOnEscape = _e === void 0 ? true : _e, _f = _a.scrollable, scrollable = _f === void 0 ? false : _f, modalClassName = _a.modalClassName, dimmedClassName = _a.dimmedClassName, handleClose = _a.handleClose;
    var modalRef = react.useRef(null);
    useDimmedClick(modalRef, handleClose, dimmed && closeOnDimmedClick);
    useEscDown(handleClose, closeOnEscape);
    useScrollLock(!scrollable);
    var positionCss = position ? css["position-".concat(position)] : null;
    var style = {
        top: typeof top === "number" ? "".concat(top, "px") : top,
        bottom: typeof bottom === "number" ? "".concat(bottom, "px") : bottom,
        left: typeof left === "number" ? "".concat(left, "px") : left,
        right: typeof right === "number" ? "".concat(right, "px") : right,
    };
    if (dimmed) {
        return (jsxRuntime.jsx("div", { className: "".concat(css.dimmed, " ").concat(dimmedClassName), children: jsxRuntime.jsx(ModalWrap, {}) }));
    }
    return jsxRuntime.jsx(ModalWrap, {});
    function ModalWrap() {
        return (jsxRuntime.jsx("div", { ref: modalRef, className: "".concat(css.modal, " ").concat(positionCss, " ").concat(modalClassName), style: style, children: children }));
    }
}

var ModalContext = react.createContext(null);
function ModalProvider(_a) {
    var children = _a.children;
    var _b = react.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react.useState(null), modal = _c[0], setModal = _c[1];
    var handleOpen = function () { return setIsOpen(true); };
    var handleClose = function () {
        setIsOpen(false);
        setModal(null);
    };
    return (jsxRuntime.jsxs(ModalContext.Provider, { value: { isOpen: isOpen, modal: modal, handleOpen: handleOpen, handleClose: handleClose, setModal: setModal }, children: [children, isOpen && modal && (jsxRuntime.jsx(Controller, __assign({ handleClose: handleClose }, modal.options, { children: modal.element })))] }));
}

var useModal = function () {
    var context = react.useContext(ModalContext);
    if (context == null) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    var isOpen = context.isOpen, handleOpen = context.handleOpen, handleClose = context.handleClose, setModal = context.setModal;
    var open = function (element, options) {
        setModal({ element: element, options: options || {} });
        handleOpen();
    };
    return { isOpen: isOpen, open: open, close: handleClose };
};

exports.ModalProvider = ModalProvider;
exports.useModal = useModal;
