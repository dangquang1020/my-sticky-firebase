webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "input#message {\n    background:#fff;\n    border:none;\n    outline:none;\n    box-shadow:none;\n    font-size:1.6em;\n    font-weight:300;\n    margin-bottom: 3em;\n    padding:1.2em .7em;\n}\n\n#details-container {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap:wrap;\n        flex-wrap:wrap;\n    width:100%;\n}\n\n#details-container p {\n    background:#fff;\n    padding:1.4em;\n    color:#696969;\n    margin: 12px;\n    width:auto;\n    min-width:200px;\n}\n\nimg {\n    display:block;\n    margin-bottom:12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>-->\n\n<div class=\"row columns\">\n  <button (click)=\"login()\" *ngIf=\"!name\">Anonymous Login</button>\n\n  <input type=\"text\" id=\"message\" *ngIf=\"name\" placeholder=\"What is it that you do?\" (keyup.enter)=\"Send($event.target.value)\" [(ngModel)]=\"msgVal\" />\n  <div id=\"details-container\">\n      <p *ngFor=\"let item of items | async\"><img src=\"../assets/images/notes.png\">{{item.message}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(100);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(af) {
        var _this = this;
        this.af = af;
        this.title = 'app works!';
        this.msgVal = '';
        this.items = af.database.list('/messages', {
            query: {
                limitToLast: 50
            }
        });
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    AppComponent.prototype.login = function () {
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Anonymous,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Anonymous
        });
    };
    AppComponent.prototype.Send = function (desc) {
        this.items.push({ message: desc });
        this.msgVal = '';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(169),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var firebaseConfig = {
    apiKey: 'AIzaSyCqe7H2wRJfb3CH_a8arpQDmc8BBixzay8',
    authDomain: 'my-sticky.firebaseapp.com',
    databaseURL: 'https://my-sticky.firebaseio.com',
    storageBucket: 'my-sticky.appspot.com',
    messagingSenderId: '767160531904'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.bundle.js.map