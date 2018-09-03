(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n    background-color: rgb(224, 221, 221);\r\n}\r\n\r\n.header{\r\n\r\n    background-color: #023133;\r\n    display: block;\r\n    padding: 3%;\r\n    color: white;\r\n    font-size: 26px;\r\n\r\n}\r\n\r\n@media (max-width: 640px)\r\n{img {\r\n    width: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"text-align:center\">\n<!--\n  <div class=\"container\">\n    <div class=\"row header\">\n      <div class=\"col-md-12\">\n        <a style=\"color:white;\" [routerLink]=\"['/home']\"><b>World Information</b></a>\n        \n      </div>\n    </div>\n<br>\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n           \n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n      \n     \n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n\n                  <li><a [routerLink]=\"['/home']\">Home</a></li>\n\n            </ul>\n            \n          </div>\n\n        </div>\n    </nav>\n  </div>\n-->\n  <nav class=\"navbar sticky-top navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand active\" [routerLink]=\"['/home']\"><b>World Information Application</b></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n        <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/home']\">Regions</a>\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/countries']\">Countries</a>\n         \n        </div>\n      </div>\n    </nav>\n\n\n  <br><br>\n<router-outlet></router-outlet>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ng2_go_top_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-go-top-button */ "./node_modules/ng2-go-top-button/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./region-view/region-view.component */ "./src/app/region-view/region-view.component.ts");
/* harmony import */ var _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./country-view/country-view.component */ "./src/app/country-view/country-view.component.ts");
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./countries/countries.component */ "./src/app/countries/countries.component.ts");
/* harmony import */ var _language_filter_language_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./language-filter/language-filter.component */ "./src/app/language-filter/language-filter.component.ts");
/* harmony import */ var _currency_filter_currency_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./currency-filter/currency-filter.component */ "./src/app/currency-filter/currency-filter.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//To use ngModel importing the required files.

//to get tabs for country-view













//import files for filter pipe

//importing ngx-pagination to paginate API response

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_12__["RegionViewComponent"],
                _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_13__["CountryViewComponent"],
                _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__["CountriesComponent"],
                _language_filter_language_filter_component__WEBPACK_IMPORTED_MODULE_15__["LanguageFilterComponent"],
                _currency_filter_currency_filter_component__WEBPACK_IMPORTED_MODULE_16__["CurrencyFilterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_18__["NgxPaginationModule"],
                ng2_go_top_button__WEBPACK_IMPORTED_MODULE_5__["GoTopButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
                    { path: 'region/:regionName', component: _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_12__["RegionViewComponent"] },
                    { path: 'countries', component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__["CountriesComponent"] },
                    { path: 'country/:countryName', component: _country_view_country_view_component__WEBPACK_IMPORTED_MODULE_13__["CountryViewComponent"] },
                    { path: 'lang/:langCode', component: _language_filter_language_filter_component__WEBPACK_IMPORTED_MODULE_15__["LanguageFilterComponent"] },
                    { path: 'currency/:currCode', component: _currency_filter_currency_filter_component__WEBPACK_IMPORTED_MODULE_16__["CurrencyFilterComponent"] }
                    /*
                    {path:'books', component:BooksComponent},
                    {path:'books/:bookNumber', component:BookViewComponent},
                    {path:'houses', component:HousesComponent},
                    {path:'houses/:houseNumber', component:HouseViewComponent},
                    {path:'characters', component:CharactersComponent},
                    {path:'characters/:characterNumber' , component:CharacterViewComponent},
                  */
                ])
            ],
            providers: [_http_world_service__WEBPACK_IMPORTED_MODULE_11__["HttpWorldService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/countries/countries.component.css":
/*!***************************************************!*\
  !*** ./src/app/countries/countries.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card:hover { box-shadow: 8px 8px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/countries/countries.component.html":
/*!****************************************************!*\
  !*** ./src/app/countries/countries.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n \n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCountryName\" [(ngModel)]=\"filterCountryName.name\" placeholder=\"Search by Country Name\" />\n        </div>      \n    </form>\n\n\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCapitalName\" [(ngModel)]=\"filterCapitalName.capital\" placeholder=\"Search by Capital Name\" />\n        </div>      \n    </form>\n\n    \n    <br>\n\n  \n            <div class=\"row\" style=\"text-align:center\" *ngIf=\"countriesData.length>0\">\n               <div class=\"col-md-12\" style=\"font-size:26px\"><b>All Countries in The World</b></div><br><br><br>\n               <div *ngFor=\"let country of countriesData | filterBy: filterCountryName | filterBy : filterCapitalName | paginate:{ itemsPerPage:6, currentPage: p} \" class=\"col-md-4\">\n                   <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid;\"><br>\n                    <img class=\"card-img-top\" src=\"{{country.flag}}\" style=\"height:200px\" alt=\"Card image cap\">\n                     <div class=\"card-body\">\n                        Country Name: \n                       <h3 class=\"card-title\">{{country.name}}</h3><br>\n                         Capital: \n                       <h3 class=\"card-title\">{{country.capital}}</h3><br>\n                          Region:\n                      <a routerLink='/region/{{country.region}}'><h3 class=\"card-title\">{{country.region}}</h3></a><br>\n\n                      Language : \n                      <h3 *ngFor=\"let country1 of country.languages\" class=\"card-title\">\n                          <a routerLink='/lang/{{country1.iso639_1}}'>\n                            {{country1.name}}\n                          </a>\n                      </h3><br>\n                      <br>\n                \n                      Currency : \n                      <h3 *ngFor=\"let country2 of country.currencies\" class=\"card-title\">\n                          <a routerLink='/currency/{{country2.code}}'>\n                            {{country2.name}}\n                          </a><br>\n                      </h3><br>\n                      <hr>\n                       <a routerLink=\"/country/{{country.name}}\" class=\"btn btn-primary\">More Details</a>\n                       <br><br>\n                      \n\n                      </div>     \n                      \n                    </div>\n                     <br><br>\n             \n                     \n               </div>\n             \n             </div>\n<br><hr><br>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div> <br><br> \n             <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>   <br><br>\n\n               \n    <go-top-button   [animate]=\"true\"\n                 [speed]=\"50\"\n                 [acceleration]=\"2\"\n                 [scrollDistance]=\"300\"\n                 [styles]=\"{\n                    'border-radius': '20px 20px 20px 20px',\n                    'right': '5px',\n                    'color': 'black',\n                    'border': '5px solid',\n                    'line-height': '20px'\n                 }\">\n                <!-- <i class=\"fas fa-arrow-up\"></i> -->\n<i class='fa fa-arrow-up'></i>\n    </go-top-button>\n\n     \n     </div>\n"

/***/ }),

/***/ "./src/app/countries/countries.component.ts":
/*!**************************************************!*\
  !*** ./src/app/countries/countries.component.ts ***!
  \**************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(httpWorldService, _route, _router, location) {
        this.httpWorldService = httpWorldService;
        this._route = _route;
        this._router = _router;
        this.location = location;
        this.p = 1;
        this.filterCountryName = { name: '' };
        this.filterCapitalName = { capital: '' };
        this.countriesData = [];
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Countries ngOnInit called");
        this.httpWorldService.getCountries().subscribe(function (data) {
            _this.countriesData = data;
            console.log(_this.countriesData);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    CountriesComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countries',
            template: __webpack_require__(/*! ./countries.component.html */ "./src/app/countries/countries.component.html"),
            styles: [__webpack_require__(/*! ./countries.component.css */ "./src/app/countries/countries.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_2__["HttpWorldService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/country-view/country-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/country-view/country-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover { box-shadow: 8px 8px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/country-view/country-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/country-view/country-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentCountry\" >\n      <div class=\"col-md-12\" style=\"font-size:26px\">Country Details</div>\n      <br><br>\n    </div>\n   \n    <div *ngFor=\"let country of currentCountry\" class=\"col-md-12\">\n          <div class=\"card h-100\" style=\"border :1px solid rgb(226, 68, 68)\">\n              <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Card image cap\">\n              <div class=\"card-body\" style=\"padding:50px\">\n                Country Name :<br>\n                <h2 class=\"card-title\">{{country.name||defaultValue}}</h2><br>\n  \n   <!--             \n                <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\"> Region : {{country.region}}</li>\n                  <li class=\"list-group-item\">Capital : {{country.capital}}</li>\n                  <li class=\"list-group-item\">Native Name : {{country.nativeName}}</li>\n                  <li class=\"list-group-item\">Language : \n                      <h2 *ngFor=\"let country1 of country.languages\" class=\"card-title\">\n                          <a routerLink='/lang/{{country1.iso639_1}}'>\n                            {{country1.name}}\n                          </a>\n                      </h2><br>\n                  </li>\n                  <li class=\"list-group-item\">Currency :\n                      <h3 *ngFor=\"let country2 of country.currencies\" class=\"card-title\">\n                          <a routerLink='/currency/{{country2.code}}'>\n                            {{country2.name}}\n                          </a><br>\n                      </h3><br>\n        \n                  </li>\n                </ul>\n                <br>   \n                \n              -->            \n     \n              <div>\n                <tabset>\n                  <tab heading=\"Basic Details\" id=\"tab1\" style=\"text-align:left\"> <br>\n                    Native Name :<h4> {{country.nativeName||defaultValue}} </h4><br><hr><br>\n                    Demonym : <h4>{{country.demonym||defaultValue}}</h4><br><hr><br>\n                    Capital : <h4>{{country.capital||defaultValue}}</h4><br><hr><br>\n                    Region : <h4>{{country.region||defaultValue}}</h4><br><hr><br>\n                    Subregion : <h4>{{country.subregion||defaultValue}}</h4><br><hr><br>\n                    Time Zone :<h4>{{country.timezones||defaultValue}}</h4><br><hr><br>\n                    Calling Code :<h4>{{country.callingCodes||defaultValue}}</h4><br><hr><br>\n                    Internet TLD :<h4>{{country.topLevelDomain||defaultValue}}</h4><br><hr><br>\n                    Numeric Code :<h4>{{country.numericCode||defaultValue}}</h4><br><hr><br>\n                  \n                  </tab>\n                  <tab heading=\"Geographic Details\" style=\"text-align:left\">\n                      <br>\n                      Area : <h4>{{country.area||defaultValue}}</h4><br><hr><br>\n                      Shared Borders :<h4>{{country.borders||defaultValue}}</h4><br><hr><br>\n                      Gini Index :<h4>{{country.gini||defaultValue}}</h4><br><hr><br>\n                      Latlng : <h4>{{country.latlng||defaultValue}}</h4><br><hr><br>\n                      Population :<h4> {{country.population||defaultValue}}</h4><br><hr><br>\n                  </tab>\n                  <tab heading=\"Alternate Spelling\"  style=\"text-align:left\">\n                      <br>\n                      Alternate Spelling :<br><br><h4> {{country.altSpellings  || defaultValue}}</h4><br><hr><br>\n                  </tab>\n                  <tab heading=\"Currency\"  style=\"text-align:left\"><br>\n                    Currency :<br><br>\n                      <h4 *ngFor=\"let country2 of country.currencies\">\n                          <a routerLink='/currency/{{country2.code}}'>\n                            {{country2.name  || defaultValue}}\n                          </a>\n                      </h4><br><hr><br>\n                  </tab>\n\n                  <tab heading=\"Languages\"  style=\"text-align:left\"><br>\n                      Language :<br> <br>\n                      <h4 *ngFor=\"let country1 of country.languages\">\n                          <a routerLink='/lang/{{country1.iso639_1}}'>\n                            {{country1.name  || defaultValue}}\n                          </a>\n                      </h4><br><hr><br>\n                  </tab>\n                \n                  <!--                  \n                  <tab heading=\"Regional Blocks\"  style=\"text-align:left\"><br>\n                      Regional Blocks :<br><br><h4 *ngFor=\"let country3 of country.regionalBlocs\"> {{country3[0].name || defaultValue}}</h4><br><hr><br>\n                  </tab>\n  \n                -->\n                  <tab heading=\"Translations\"  style=\"text-align:left\"><br>\n                    Translations : <br><br><h4>{{country.translations.de  || defaultValue}}, {{country.translations.es || defaultValue}}, {{country.translations.fr || defaultValue}}, {{country.translations.ja || defaultValue}}, {{country.translations.it || defaultValue}}, {{country.translations.br || defaultValue}}, {{country.translations.pt || defaultValue}}, {{country.translations.nl || defaultValue}}, {{country.translations.hr || defaultValue}}, {{country.translations.fa || defaultValue}}</h4> <br><hr><br>\n                  </tab>\n\n                </tabset>\n              </div>\n     \n     \n     \n              <br><br>\n                 \n                <div class=\"row\" style=\"text-align:center\">\n                    <div class=\"col-md-12\">\n                      <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                    </div>\n                    <br><br>    \n                </div>\n        \n              </div>\n              <br><br>\n            </div>      \n          </div>      \n  <br><br>\n              <go-top-button   [animate]=\"true\"\n                        [speed]=\"50\"\n                        [acceleration]=\"2\"\n                        [scrollDistance]=\"300\"\n                        [styles]=\"{\n                            'border-radius': '20px 20px 20px 20px',\n                            'right': '5px',\n                            'color': 'black',\n                            'border': '5px solid',\n                            'line-height': '20px'\n                        }\">\n                        <!-- <i class=\"fas fa-arrow-up\"></i> -->\n                        <i class='fa fa-arrow-up'></i>\n              </go-top-button>\n  </div>"

/***/ }),

/***/ "./src/app/country-view/country-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-view/country-view.component.ts ***!
  \********************************************************/
/*! exports provided: CountryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryViewComponent", function() { return CountryViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryViewComponent = /** @class */ (function () {
    function CountryViewComponent(httpWorldService, _route, _router, location) {
        this.httpWorldService = httpWorldService;
        this._route = _route;
        this._router = _router;
        this.location = location;
        this.currentCountry = [];
        this.defaultValue = "None";
    }
    CountryViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Country-view ngOnInit called");
        var countryName = this._route.snapshot.paramMap.get('countryName');
        console.log(countryName);
        this.httpWorldService.getCountry(countryName).subscribe(function (data) {
            _this.currentCountry = data;
            console.log(_this.currentCountry);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    CountryViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CountryViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country-view',
            template: __webpack_require__(/*! ./country-view.component.html */ "./src/app/country-view/country-view.component.html"),
            styles: [__webpack_require__(/*! ./country-view.component.css */ "./src/app/country-view/country-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_2__["HttpWorldService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CountryViewComponent);
    return CountryViewComponent;
}());



/***/ }),

/***/ "./src/app/currency-filter/currency-filter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/currency-filter/currency-filter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover { box-shadow: 8px 8px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/currency-filter/currency-filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/currency-filter/currency-filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCountryName\" [(ngModel)]=\"filterCountryName.name\" placeholder=\"Search by Country Name\" />\n        </div>      \n    </form>\n\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCapitalName\" [(ngModel)]=\"filterCapitalName.capital\" placeholder=\"Search by Capital Name\" />\n        </div>      \n    </form>\n\n    \n    <br>\n\n    \n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"countrysDataByCurr.length>0\">\n       <div class=\"col-md-12\" style=\"font-size:26px\"><b>Filtered countries by \"{{countrysDataByCurr[0].currencies[0].name}}\" Currency</b></div><br><br><br>\n       <div *ngFor=\"let country of countrysDataByCurr | filterBy: filterCountryName | filterBy : filterCapitalName | paginate:{ itemsPerPage:6, currentPage: p} \" class=\"col-md-4\">\n           <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid;\"><br>\n            <img class=\"card-img-top\" src=\"{{country.flag}}\" style=\"height:200px\" alt=\"Card image cap\">\n             <div class=\"card-body\">\n                Country Name: \n               <h3 class=\"card-title\">{{country.name}}</h3><br>\n                 Capital: \n               <h3 class=\"card-title\">{{country.capital}}</h3><br>\n                  Region:\n              <a routerLink='/region/{{country.region}}'><h3 class=\"card-title\">{{country.region}}</h3></a><br>\n              <br>\n              Language : \n              <h3 *ngFor=\"let country1 of country.languages\" class=\"card-title\">\n                  <a routerLink='/lang/{{country1.iso639_1}}'>\n                    {{country1.name}}\n                  </a>\n              </h3><br>\n              <br>\n\n              Currency : \n              <h3 *ngFor=\"let country2 of country.currencies\" class=\"card-title\">\n                  <a routerLink='/currency/{{country2.code}}'>\n                    {{country2.name}}\n                  </a><br>\n              </h3><br>\n              <hr>\n              <a routerLink=\"/country/{{country.name}}\" class=\"btn btn-primary\">More Details</a>\n               <br><br>\n              </div>     \n              \n            </div>\n             <br><br>\n     \n             \n       </div>\n     \n     </div>\n\n     <br><hr>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div> <br><br> \n             <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>   <br><br>\n\n\n    <go-top-button   [animate]=\"true\"\n                 [speed]=\"50\"\n                 [acceleration]=\"2\"\n                 [scrollDistance]=\"300\"\n                 [styles]=\"{\n                    'border-radius': '20px 20px 20px 20px',\n                    'right': '5px',\n                    'color': 'black',\n                    'border': '5px solid',\n                    'line-height': '20px'\n                 }\">\n                <!-- <i class=\"fas fa-arrow-up\"></i> -->\n              <i class='fa fa-arrow-up'></i>\n    </go-top-button>\n             \n\n</div>"

/***/ }),

/***/ "./src/app/currency-filter/currency-filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/currency-filter/currency-filter.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrencyFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFilterComponent", function() { return CurrencyFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrencyFilterComponent = /** @class */ (function () {
    function CurrencyFilterComponent(httpWorldService, _route, _router, location) {
        this.httpWorldService = httpWorldService;
        this._route = _route;
        this._router = _router;
        this.location = location;
        this.p = 1;
        this.filterCountryName = { name: '' };
        this.filterCapitalName = { capital: '' };
        this.countrysDataByCurr = [];
    }
    CurrencyFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .forEach(function (params) {
            console.log("Currency-filter ngOnInit called");
            var currCode = _this._route.snapshot.paramMap.get('currCode');
            console.log(currCode);
            _this.httpWorldService.getCountryByCurr(currCode).subscribe(function (data) {
                _this.countrysDataByCurr = data;
                console.log(_this.countrysDataByCurr);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        });
    };
    CurrencyFilterComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CurrencyFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency-filter',
            template: __webpack_require__(/*! ./currency-filter.component.html */ "./src/app/currency-filter/currency-filter.component.html"),
            styles: [__webpack_require__(/*! ./currency-filter.component.css */ "./src/app/currency-filter/currency-filter.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_2__["HttpWorldService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CurrencyFilterComponent);
    return CurrencyFilterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n\n  <div class=\"row\" style=\"text-align:center\">\n    <br>\n    <div class=\"col-md-12\" style=\"font-size:26px\">\n     \n      <b>All Regions</b>\n    \n    </div>\n    <br>\n    <br>\n    <br>\n  </div>\n\n\n  <!--\n\n<div class=\"row\" style=\"text-align:center\" *ngIf=\"allRegions.length>0\">\n  <div *ngFor=\"let region of allRegions\" class=\"col-md-4\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 300px\"><br>\n        <div class=\"card-body\">\n           Region Name: \n          <h3 class=\"card-title\">{{region.region}}</h3>\n    \n         </div>     \n         \n       </div>\n        <br><br>\n\n        \n  </div>\n\n</div>\n-->\n  <div class=\"row\" style=\"text-align:center\">\n\n    <div class=\"col-md-6\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 100px\">\n        <br> \n        <button routerLink=\"/region/asia\" type=\"button\" class=\"btn btn-primary\"><a>Asia</a></button>\n\n      </div><br>\n    </div>\n\n<br><br>\n\n    <div class=\"col-md-6\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 100px\">\n        <br> \n        <button routerLink=\"/region/africa\" type=\"button\" class=\"btn btn-primary\"><a>Africa</a></button>\n      </div><br>\n    </div>\n\n    <br><br>\n\n    <div class=\"col-md-6\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 100px\">\n        <br> \n        <button routerLink=\"/region/americas\" type=\"button\" class=\"btn btn-primary\"><a>America</a></button>\n\n      </div><br>\n    </div>\n\n\n    <br><br>\n\n    <div class=\"col-md-6\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 100px\">\n        <br>\n        <button routerLink=\"/region/europe\" type=\"button\" class=\"btn btn-primary\"><a>Europe</a></button>\n\n      </div><br>\n    </div>\n\n    <br><br>\n    \n    <div class=\"col-md-6\">\n      <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid; height: 100px\">\n        <br> \n        <button routerLink=\"/region/oceania\" type=\"button\" class=\"btn btn-primary\"><a>Oceania</a></button>\n\n      </div>\n    </div><br>\n\n    <br><br>\n\n\n\n  </div>\n<br><br>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpWorldService) {
        this.httpWorldService = httpWorldService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("home component OnInit called");
        this.allRegions = this.httpWorldService.getRegions('europe').subscribe(function (data) {
            _this.allRegions = data;
            console.log(_this.allRegions);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_1__["HttpWorldService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-world.service.ts":
/*!***************************************!*\
  !*** ./src/app/http-world.service.ts ***!
  \***************************************/
/*! exports provided: HttpWorldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpWorldService", function() { return HttpWorldService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//importing HttpClient to make requests

//importing observable
var HttpWorldService = /** @class */ (function () {
    function HttpWorldService(_http) {
        this._http = _http;
        this.baseUrl = 'https://restcountries.eu/rest/v2/';
        console.log("Http Service constructor called");
    }
    HttpWorldService.prototype.getRegions = function (currentRegion) {
        var myResponse = this._http.get(this.baseUrl + "region/" + currentRegion);
        //  console.log(myResponse);
        return myResponse;
    };
    HttpWorldService.prototype.getCountries = function () {
        var myResponse = this._http.get(this.baseUrl + "all");
        //  console.log(myResponse);
        return myResponse;
    };
    HttpWorldService.prototype.getCountry = function (countryName) {
        var myResponse = this._http.get(this.baseUrl + "name/" + countryName);
        return myResponse;
    };
    HttpWorldService.prototype.getCountryByLang = function (LangCode) {
        var myResponse = this._http.get(this.baseUrl + "lang/" + LangCode);
        return myResponse;
    };
    HttpWorldService.prototype.getCountryByCurr = function (currCode) {
        var myResponse = this._http.get(this.baseUrl + "currency/" + currCode);
        return myResponse;
    };
    HttpWorldService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpWorldService);
    return HttpWorldService;
}());



/***/ }),

/***/ "./src/app/language-filter/language-filter.component.css":
/*!***************************************************************!*\
  !*** ./src/app/language-filter/language-filter.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover { box-shadow: 8px 8px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/language-filter/language-filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/language-filter/language-filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCountryName\" [(ngModel)]=\"filterCountryName.name\" placeholder=\"Search by Country Name\" />\n        </div>      \n    </form>\n\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCapitalName\" [(ngModel)]=\"filterCapitalName.capital\" placeholder=\"Search by Capital Name\" />\n        </div>      \n    </form>\n\n    <br>\n    \n    <div class=\"row\" style=\"text-align:center\" *ngIf=\"countrysDataByLang.length>0\">\n       <div class=\"col-md-12\" style=\"font-size:26px\"><b>Filtered countries by \"{{countrysDataByLang[0].languages[0].name}}\" Language</b></div><br><br><br>\n       <div *ngFor=\"let country of countrysDataByLang | filterBy: filterCountryName | filterBy : filterCapitalName | paginate:{ itemsPerPage:6, currentPage: p} \" class=\"col-md-4\">\n           <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid;\"><br>\n            <img class=\"card-img-top\" src=\"{{country.flag}}\" style=\"height:200px\" alt=\"Card image cap\">\n             <div class=\"card-body\">\n                Country Name: \n               <h3 class=\"card-title\">{{country.name}}</h3><br>\n                 Capital: \n               <h3 class=\"card-title\">{{country.capital}}</h3><br>\n                  Region:\n              <a routerLink='/region/{{country.region}}'><h3 class=\"card-title\">{{country.region}}</h3></a><br>\n              <br>\n              Language : \n              <h3 *ngFor=\"let country1 of country.languages\" class=\"card-title\">\n                  <a routerLink='/lang/{{country1.iso639_1}}'>\n                    {{country1.name}}\n                  </a>\n              </h3><br>\n              <br>\n\n              Currency : \n              <h3 *ngFor=\"let country2 of country.currencies\" class=\"card-title\">\n                  <a routerLink='/currency/{{country2.code}}'>\n                    {{country2.name}}\n                  </a><br>\n              </h3><br>\n              <hr>\n              <a routerLink=\"/country/{{country.name}}\" class=\"btn btn-primary\">More Details</a>\n               <br>\n              </div>     \n              \n            </div>\n             <br><br>\n     \n             \n       </div>\n     \n     </div>\n\n     <br><hr>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div> <br><br> \n             <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>   <br><br>\n\n    <go-top-button   [animate]=\"true\"\n                 [speed]=\"50\"\n                 [acceleration]=\"2\"\n                 [scrollDistance]=\"300\"\n                 [styles]=\"{\n                    'border-radius': '20px 20px 20px 20px',\n                    'right': '5px',\n                    'color': 'black',\n                    'border': '5px solid',\n                    'line-height': '20px'\n                 }\">\n                <!-- <i class=\"fas fa-arrow-up\"></i> -->\n<i class='fa fa-arrow-up'></i>\n    </go-top-button>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/language-filter/language-filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/language-filter/language-filter.component.ts ***!
  \**************************************************************/
/*! exports provided: LanguageFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageFilterComponent", function() { return LanguageFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageFilterComponent = /** @class */ (function () {
    function LanguageFilterComponent(httpWorldService, _route, _router, location) {
        this.httpWorldService = httpWorldService;
        this._route = _route;
        this._router = _router;
        this.location = location;
        this.p = 1;
        this.filterCountryName = { name: '' };
        this.filterCapitalName = { capital: '' };
        this.countrysDataByLang = [];
    }
    LanguageFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .forEach(function (params) {
            console.log("Language-filter ngOnInit called");
            var langCode = _this._route.snapshot.paramMap.get('langCode');
            console.log(langCode);
            _this.httpWorldService.getCountryByLang(langCode).subscribe(function (data) {
                _this.countrysDataByLang = data;
                console.log(_this.countrysDataByLang);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        });
    };
    LanguageFilterComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    LanguageFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language-filter',
            template: __webpack_require__(/*! ./language-filter.component.html */ "./src/app/language-filter/language-filter.component.html"),
            styles: [__webpack_require__(/*! ./language-filter.component.css */ "./src/app/language-filter/language-filter.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_1__["HttpWorldService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], LanguageFilterComponent);
    return LanguageFilterComponent;
}());



/***/ }),

/***/ "./src/app/region-view/region-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/region-view/region-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover { box-shadow: 8px 8px rgba(0, 0, 0, .5); }"

/***/ }),

/***/ "./src/app/region-view/region-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/region-view/region-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCountryName\" [(ngModel)]=\"filterCountryName.name\" placeholder=\"Search by Country Name\" />\n        </div>      \n    </form>\n\n\n    <form class=\"form-inline\" #myForm=\"ngForm\" class=\"row\">\n        <div class=\"form-group  col-md-12\">\n          <input type=\"text\" class=\"form-control btn-outline-info\" name=\"filterCapitalName\" [(ngModel)]=\"filterCapitalName.capital\" placeholder=\"Search by Capital Name\" />\n        </div>      \n    </form>\n    \n    <br>\n\n         <div class=\"row\" style=\"text-align:center\" *ngIf=\"currentRegion.length>0\">\n            <div class=\"col-md-12\" style=\"font-size:26px\">{{currentRegion[0].region}} Region Details</div><br><br><br>\n            <div *ngFor=\"let country of currentRegion | filterBy: filterCountryName | filterBy : filterCapitalName | paginate:{ itemsPerPage:6, currentPage: p}\" class=\"col-md-4\">\n                <div class=\"card text-center\" style=\"border:rgb(194, 63, 63) 2px solid;\"><br>\n                  <img class=\"card-img-top\" src=\"{{country.flag}}\" style=\"height:200px\" alt=\"Card image cap\">\n                  <div class=\"card-body\">\n                     Country Name: \n                    <h3 class=\"card-title\">{{country.name}}</h3><br>\n                      Capital: \n                    <h3 class=\"card-title\">{{country.capital}}</h3><br>\n\n                    Language : \n                    <h3 *ngFor=\"let country1 of country.languages\" class=\"card-title\">\n                        <a routerLink='/lang/{{country1.iso639_1}}'>\n                          {{country1.name}}\n                        </a>\n                    </h3><br>\n                    <br>\n      \n                    Currency : \n                    <h3 *ngFor=\"let country2 of country.currencies\" class=\"card-title\">\n                        <a routerLink='/currency/{{country2.code}}'>\n                          {{country2.name}}\n                        </a><br>\n                    </h3><br>\n                    <hr>\n                          <a routerLink=\"/country/{{country.name}}\" class=\"btn btn-primary\">More Details</a>\n\n                    <br>\n                   </div>     \n                   \n                 </div>\n                  <br><br>\n          \n                  \n            </div>\n          \n          </div>\n        \n          <br><hr>\n              <div class=\"row\" style=\"text-align:center\">\n                  <div class=\"col-md-12\">\n                    <a class=\"btn btn-primary\" (click)=\"goBackToPreviousPage()\">Go Back</a>\n                  </div>\n                  <br><br>    \n              </div> <br><br> \n             <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>   <br><br>\n\n    <go-top-button   [animate]=\"true\"\n                 [speed]=\"50\"\n                 [acceleration]=\"2\"\n                 [scrollDistance]=\"300\"\n                 [styles]=\"{\n                    'border-radius': '20px 20px 20px 20px',\n                    'right': '5px',\n                    'color': 'black',\n                    'border': '5px solid',\n                    'line-height': '20px'\n                 }\">\n                <!-- <i class=\"fas fa-arrow-up\"></i> -->\n          <i class='fa fa-arrow-up'></i>\n    </go-top-button>\n\n  \n  </div>"

/***/ }),

/***/ "./src/app/region-view/region-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/region-view/region-view.component.ts ***!
  \******************************************************/
/*! exports provided: RegionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionViewComponent", function() { return RegionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_world_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-world.service */ "./src/app/http-world.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegionViewComponent = /** @class */ (function () {
    function RegionViewComponent(httpWorldService, _route, _router, location) {
        this.httpWorldService = httpWorldService;
        this._route = _route;
        this._router = _router;
        this.location = location;
        this.p = 1;
        this.filterCountryName = { name: '' };
        this.filterCapitalName = { capital: '' };
        this.currentRegion = [];
    }
    RegionViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Resion-view ngOnInit called");
        var regionName = this._route.snapshot.paramMap.get('regionName');
        console.log(regionName);
        this.httpWorldService.getRegions(regionName).subscribe(function (data) {
            _this.currentRegion = data;
            console.log(_this.currentRegion);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    RegionViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    RegionViewComponent.prototype.ngOnDestroy = function () {
    };
    RegionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-view',
            template: __webpack_require__(/*! ./region-view.component.html */ "./src/app/region-view/region-view.component.html"),
            styles: [__webpack_require__(/*! ./region-view.component.css */ "./src/app/region-view/region-view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]]
        }),
        __metadata("design:paramtypes", [_http_world_service__WEBPACK_IMPORTED_MODULE_1__["HttpWorldService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RegionViewComponent);
    return RegionViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular 4\world-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map