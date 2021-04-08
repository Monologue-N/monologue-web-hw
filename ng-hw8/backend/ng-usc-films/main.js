(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/cancanhua_cs571/ng-hw8/ng-usc-films/src/main.ts */"zUnb");


/***/ }),

/***/ "29r4":
/*!***************************************************************!*\
  !*** ./src/app/components/type-ahead/type-ahead.component.ts ***!
  \***************************************************************/
/*! exports provided: TypeAheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAheadComponent", function() { return TypeAheadComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "l3hs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function TypeAheadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngb-highlight", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", r_r2.media_type, "/", r_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
class TypeAheadComponent {
    constructor(searchService, route, router) {
        this.searchService = searchService;
        this.route = route;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), 
            // switchMap allows returning an observable rather than maps array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((term) => this.searchService.search(term)));
        };
        this.formatter = (result) => result.toUpperCase();
    }
    ngOnInit() {
    }
    onSelect(selected) {
        // @ts-ignore
        // document.getElementById('typeahead-http').setAttribute('ng-reflect-model', '');
        this.selectedOne = selected.item;
        console.log(this.selectedOne);
        console.log(this.selectedOne.id);
        console.log(this.selectedOne.media_type);
        // @ts-ignore
        // this.router.navigateByUrl(`/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`);
        window.location.href = `/watch/${this.selectedOne.media_type}/${this.selectedOne.id}`;
    }
}
TypeAheadComponent.ɵfac = function TypeAheadComponent_Factory(t) { return new (t || TypeAheadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TypeAheadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypeAheadComponent, selectors: [["app-type-ahead"]], decls: 6, vars: 5, consts: [[1, "form-inline", "form-container"], [1, "form-group"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", "mx-sm-3", 3, "ngModel", "ngbTypeahead", "resultTemplate", "selectItem", "ngModelChange"], [3, "routerLink"], [1, "mr-1", 2, "width", "60px", 3, "src"], [1, "highlight-item", 3, "result", "term"]], template: function TypeAheadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TypeAheadComponent_ng_template_2_Template, 3, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectItem", function TypeAheadComponent_Template_input_selectItem_4_listener($event) { return ctx.onSelect($event); })("ngModelChange", function TypeAheadComponent_Template_input_ngModelChange_4_listener($event) { return ctx.model = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultTemplate", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: [".form-control[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: transparent;\n  border-color: transparent;\n  border-bottom-color: white;\n  border-radius: 0;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  right: 5%;\n  position: absolute;\n}\n\n  .dropdown-menu{\n  background-color: #050a30;\n  color: white;\n  border-color: white;\n  border-width: 1px;\n  border-radius: 5px;\n}\n\n.highlight-item[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUtYWhlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0eXBlLWFoZWFkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHJpZ2h0OiA1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG46Om5nLWRlZXAgLmRyb3Bkb3duLW1lbnV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTBhMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmhpZ2hsaWdodC1pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ "3eqm":
/*!*************************************************************************!*\
  !*** ./src/app/components/tv-show-details/tv-show-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: TvShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShowDetailsComponent", function() { return TvShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video/video.component */ "G4NA");
/* harmony import */ var _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tv-carousel/tv-carousel.component */ "u3ne");







function TvShowDetailsComponent_div_0_div_5_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.releaseYear, "\u00A0\u00A0|");
} }
function TvShowDetailsComponent_div_0_div_5_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r14.hours, "hrs\u00A0 ");
} }
function TvShowDetailsComponent_div_0_div_5_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.minutes, "mins ");
} }
function TvShowDetailsComponent_div_0_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvShowDetailsComponent_div_0_div_5_div_10_div_2_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TvShowDetailsComponent_div_0_div_5_div_10_div_3_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.minutes);
} }
function TvShowDetailsComponent_div_0_div_5_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r11.genres, "");
} }
function TvShowDetailsComponent_div_0_div_5_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r12.spokenLanguages, "");
} }
function TvShowDetailsComponent_div_0_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_5_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_5_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_0_div_5_div_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.btnContent, " ");
} }
function TvShowDetailsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TvShowDetailsComponent_div_0_div_5_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvShowDetailsComponent_div_0_div_5_div_10_Template, 4, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Genres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TvShowDetailsComponent_div_0_div_5_div_14_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Spoken Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TvShowDetailsComponent_div_0_div_5_p_18_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TvShowDetailsComponent_div_0_div_5_div_19_Template, 13, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.tvShowDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.tvShowDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u2605 \u00A0", ctx_r7.voteAverage, "\u00A0\u00A0|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.hours || ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.btnContent);
} }
function TvShowDetailsComponent_div_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.overview);
} }
function TvShowDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TvShowDetailsComponent_div_0_div_5_Template, 20, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TvShowDetailsComponent_div_0_p_9_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tvShowDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx_r0.tvShowDetails.title, "%0Dhttps://www.youtube.com/watch?v=", ctx_r0.key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx_r0.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvShowDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cast-details", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx_r1.castDetails)("external", ctx_r1.external);
} }
function TvShowDetailsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvShowDetailsComponent_div_6_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const person_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.getCastDetails(person_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r20.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r20.character);
} }
function TvShowDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_6_div_1_Template, 11, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r20.profile_path);
} }
function TvShowDetailsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.reviews.length);
} }
function TvShowDetailsComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r27.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r27.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605\u00A0", review_r27.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r27.author, " on ", review_r27.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r27.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r27.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TvShowDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_11_div_1_Template, 14, 7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.reviews);
} }
function TvShowDetailsComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tv-carousel", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r28.recommendedTvShows);
} }
function TvShowDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_15_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.recommendedTvShows.results.length !== 0);
} }
function TvShowDetailsComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tv-carousel", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r29.similarTvShows);
} }
function TvShowDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_19_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.similarTvShows.results.length !== 0);
} }
class TvShowDetailsComponent {
    constructor(route, postsService, elementRef) {
        this.route = route;
        this.postsService = postsService;
        this.elementRef = elementRef;
        this.btnContent = '';
        this.id = '';
        this.title = '';
        this.mediaType = '';
        // tslint:disable-next-line:variable-name
        this.poster_path = '';
        this.key = '';
        this.genres = [];
        this.spokenLanguages = [];
        this.watchlistFlag = 'false';
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
        this.routeSub = this.route.params.subscribe(params => {
            // console.log(params);
            console.log(params.id);
            this.id = params.id;
            this.checkWatchList();
        });
        this.fetchData();
        if (document.getElementById('typeahead-http')) {
            // @ts-ignore
            document.getElementById('typeahead-http').innerHTML = '';
        }
    }
    checkWatchList() {
        // check if it is in watchlist
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                // tslint:disable-next-line:prefer-for-of
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        this.watchlistFlag = 'true';
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
            }
        }
        console.log('watchlistFlag is ' + this.watchlistFlag);
        if (this.watchlistFlag === 'true') {
            this.btnContent = 'Remove from watchlist';
        }
        else {
            this.btnContent = 'Add to watchlist';
        }
        console.log(this.btnContent);
    }
    fetchData() {
        this.postsService.getTvShowDetails(this.id).subscribe(res => {
            this.tvShowDetails = res;
            this.mediaType = 'tv';
            this.title = this.tvShowDetails.name;
            this.poster_path = this.tvShowDetails.poster_path;
            // tslint:disable-next-line:radix
            this.releaseYear = parseInt(this.tvShowDetails.first_air_date);
            this.voteAverage = parseFloat(this.tvShowDetails.vote_average).toFixed(1);
            // tslint:disable-next-line:radix
            if (this.tvShowDetails.episode_run_time) {
                this.hours = Math.floor(this.tvShowDetails.episode_run_time[0] / 60);
                this.minutes = this.tvShowDetails.episode_run_time[0] - this.hours * 60;
                console.log('[episode_run_time] ' + this.tvShowDetails.episode_run_time[0]);
            }
            for (const genre of this.tvShowDetails.genres) {
                this.genres.push(genre.name);
            }
            this.genres = this.genres.join(', ');
            for (const language of this.tvShowDetails.spoken_languages) {
                this.spokenLanguages.push(language.english_name);
            }
            this.spokenLanguages.join(', ');
            this.overview = this.tvShowDetails.overview;
            this.tweet = 'Watch%20' + this.tvShowDetails.toString() + 'https://www.youtube.com/watch?v=' + this.key.toString() + '#USC%20#CSCI571%20#FightOn';
            // add to continue watching
            // @ts-ignore
            this.addToContinueWatching();
        });
        this.postsService.getTvShowVideos(this.id).subscribe(res => {
            this.tvShowVideos = res;
            if (this.tvShowVideos.results.length === 0 || !this.tvShowVideos.results.length) {
                this.key = 'tzkWB85ULJY';
            }
            else {
                this.key = this.tvShowVideos.results[0].key;
                if (!this.key) {
                    this.key = 'tzkWB85ULJY';
                }
            }
        });
        this.postsService.getTvShowCast(this.id).subscribe(res => {
            this.cast = res;
            this.cast = this.cast.cast;
        });
        this.postsService.getTvShowReviews(this.id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            const tmpReviews = [];
            for (let i = 0; i < 10; i++) {
                tmpReviews.push(this.reviews[i]);
            }
            // deal with reviews data
            for (const review of this.reviews) {
                // format avatar path
                if (!review.author_details.avatar_path) {
                    review.avatar_path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
                }
                else {
                    if (review.author_details.avatar_path.substring(0, 6) === '/https') {
                        review.avatar_path = review.author_details.avatar_path.substring(1);
                    }
                    else {
                        review.avatar_path = 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path;
                    }
                }
                // format date created
                const date = review.created_at;
                // console.log(date);
                // tslint:disable-next-line:radix
                const newDate = new Date(date);
                // console.log(newDate);
                const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
                let min = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);
                let sec = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(newDate);
                if (min.length < 2) {
                    min = '0' + min;
                }
                if (sec.length < 2) {
                    sec = '0' + sec;
                }
                if (newDate.getHours() === 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} PM`;
                }
                else if (newDate.getHours() < 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} AM`;
                }
                else {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours() - 12}:${min}:${sec} PM`;
                }
                console.log(review.rating);
                if (!review.author_details.rating) {
                    review.rating = 0;
                }
                else {
                    review.rating = review.author_details.rating;
                }
                console.log(review.rating);
            }
        });
        // fetch recommended movies data
        this.postsService.getRecommendedTvShows(this.id).subscribe(res => {
            this.recommendedTvShows = res;
        });
        // fetch similar movies data
        this.postsService.getSimilarTvShows(this.id).subscribe(res => {
            this.similarTvShows = res;
        });
    }
    // tslint:disable-next-line:variable-name
    addToContinueWatching() {
        let continueWatching = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('continue_watching')) {
                // check if this id exists
                continueWatching = JSON.parse(this.myStorage.getItem('continue_watching'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of continueWatching) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                continueWatching = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        continueWatching.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": "tv"}`);
        this.myStorage.setItem('continue_watching', JSON.stringify(continueWatching));
        // console.log(this.myStorage);
    }
    getCastDetails(person) {
        // @ts-ignore
        // document.getElementById('layout').style.overflow =  'hidden';
        // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
        // @ts-ignore
        document.getElementById('mask').style.display = 'block';
        // @ts-ignore
        document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
        // this.elementRef.nativeElement.ownerDocument.body.style.position = 'fixed';
        this.postsService.getCastDetails(person).subscribe(res => {
            this.castDetails = res;
        });
        this.postsService.getCastExternal(person).subscribe(res => {
            this.external = res;
        });
        if (document.getElementById('card')) {
            // @ts-ignore
            document.getElementById('card').style.display = 'block';
        }
    }
    ngOnDestroy() {
        // @ts-ignore
        this.routeSub.unsubscribe();
    }
    toggle() {
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        // @ts-ignore
        console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
        console.log('another: ' + 'Add to watchlist');
        // @ts-ignore
        console.log(typeof (addToWatchListBtn.innerHTML));
        console.log(typeof ('Add to watchlist'));
        // @ts-ignore
        console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
        // @ts-ignore
        // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
        if (this.btnContent === 'Add to watchlist') {
            console.log('I am here');
            // @ts-ignore
            this.addToWatchList();
            console.log(' this.addToWatchList();');
        }
        else {
            // @ts-ignore
            this.removeFromWatchList();
            console.log(' this.removeFromWatchList();\n');
        }
    }
    addToWatchList() {
        this.myStorage.setItem(this.tvShowDetails.id, this.tvShowDetails.id);
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        const addedAlert = document.getElementById('add-alert');
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        this.btnContent = 'Remove from watchlist';
        // add to local storage
        let watchlist = [];
        // let flag = 'false';
        // if there is already some in watchlist
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // extract current watchlist
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // // tslint:disable-next-line:prefer-for-of
                // for (let idx = 0; idx < array.length; idx++) {
                //   // tslint:disable-next-line:radix
                //   if (parseInt(array[idx].id) === parseInt(this.id)) {
                //     flag = 'true';
                //   }
                // }
                watchlist = array;
            }
        }
        // if (flag === 'false') {
        watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": "tv"}`);
        // }
        this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
        console.log(window.localStorage);
        // @ts-ignore
        removeAlert.style.display = 'none';
        // @ts-ignore
        addedAlert.style.display = 'block';
        setTimeout(() => {
            // @ts-ignore
            addedAlert.style.display = 'none';
        }, 5000);
    }
    removeFromWatchList() {
        this.myStorage.removeItem(this.tvShowDetails.id);
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        const addedAlert = document.getElementById('add-alert');
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        this.btnContent = 'Add to watchlist';
        // remove from local storage
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                watchlist = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
        console.log(window.localStorage);
        // @ts-ignore
        addedAlert.style.display = 'none';
        // @ts-ignore
        removeAlert.style.display = 'block';
        setTimeout(() => {
            // @ts-ignore
            removeAlert.style.display = 'none';
        }, 5000);
    }
    hideAddedAlert() {
        const addedAlert = document.getElementById('add-alert');
        // @ts-ignore
        addedAlert.style.display = 'none';
    }
    hideRemovedAlert() {
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        removeAlert.style.display = 'none';
    }
}
TvShowDetailsComponent.ɵfac = function TvShowDetailsComponent_Factory(t) { return new (t || TvShowDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TvShowDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvShowDetailsComponent, selectors: [["app-tv-show-details"]], decls: 20, vars: 7, consts: [["class", "container-fluid box", 4, "ngIf"], ["id", "cast-details", 4, "ngIf"], [2, "color", "white", "font-size", "36px", "margin-left", "11%", "margin-bottom", "10px"], [1, "outer-container", "container-fluid"], [1, "cast-crew-container"], ["style", "margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "width", "100%", "margin-left", "11%", "margin-top", "100px"], [2, "color", "white", "font-size", "36px"], ["style", "color: darkgray; font-size: 36px; display: inline; font-weight: bolder; margin-left: 10px;", 4, "ngIf"], ["style", "margin-left: 11%; margin-right: 11%;  margin-top:20px;", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "box"], [1, "first-row-container"], [2, "width", "750px"], [1, "video", 3, "key"], ["class", "card", "style", "background-color: transparent;\n  color: white; width: 340px", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px"], ["class", "grey-text", 4, "ngIf"], [2, "display", "block", "margin-bottom", "40px"], ["data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href"], [1, "fab", "fa-twitter"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [1, "card", 2, "background-color", "transparent", "color", "white", "width", "340px"], [1, "card-body"], [1, "card-title", "row", 2, "font-size", "46px", "font-weight", "normal"], [1, "card-text", "row"], [1, "row"], ["class", "card-text", 4, "ngIf"], [1, "card-text"], [1, "subtitle"], ["class", "card-text grey-text", "style", "display: inline", 4, "ngIf"], ["class", "card-text grey-text", 4, "ngIf"], ["id", "watchlist-container", 4, "ngIf"], ["style", "display: inline;", 4, "ngIf"], [2, "display", "inline"], [1, "card-text", "grey-text", 2, "display", "inline"], [1, "card-text", "grey-text"], ["id", "watchlist-container"], ["id", "watchlist-btn", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "remove-alert", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "grey-text"], ["id", "cast-details"], [3, "details", "external"], [2, "margin-bottom", "15px"], [1, "card", "cast-member", 2, "width", "175px", "height", "380px", "align-items", "center", "margin-right", "10px", "border-radius", "20px", "overflow", "hidden", "border", "none", 3, "click"], [1, ""], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px", "font-weight", "bold", "width", "170px"], [1, "card-text", 2, "font-weight", "bolder", "margin-top", "-7px"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px"], [2, "color", "darkgray", "font-size", "36px", "display", "inline", "font-weight", "bolder", "margin-left", "10px"], [2, "margin-left", "11%", "margin-right", "11%", "margin-top", "20px"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "100%", "height", "min-content", "border-radius", "10px", "margin-bottom", "20px"], ["alt", "", 1, "card-img-overlay", 2, "width", "130px", "height", "130px", "border-radius", "50%", "margin-left", "10px", 3, "src"], [1, "card-body", 2, "margin-left", "200px"], [1, "card-text", 2, "font-size", "22px", "font-weight", "bold"], [2, "display", "inline", "color", "white", "background", "black", "padding-left", "10px", "padding-right", "10px", "border-radius", "20px", "font-weight", "normal", "font-size", "20px"], [1, "card-text", 2, "color", "gray"], [1, "card-text", "review-content"], [2, "margin-bottom", "-10px", "text-decoration", "underline", 3, "href"], [3, "data"]], template: function TvShowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvShowDetailsComponent_div_0_Template, 17, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvShowDetailsComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TvShowDetailsComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TvShowDetailsComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TvShowDetailsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recommended TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TvShowDetailsComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Similar TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TvShowDetailsComponent_div_19_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tvShowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castDetails && ctx.external);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recommendedTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similarTvShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"], _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_5__["CastDetailsComponent"], _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__["TvCarouselComponent"]], styles: [".test[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5%;\n}\n\n.grey-text[_ngcontent-%COMP%] {\n  color: darkgrey;\n}\n\n.box[_ngcontent-%COMP%] {\n  color: white;\n  width: 80%;\n  margin-top: 50px;\n}\n\n.cast-crew-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  width: 1100px;\n  align-content: center;\n  margin-left: 11%;\n}\n\n.first-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 20px;\n}\n\n.review-content[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  overflow: hidden;\n  height: 52px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n.init[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cast-member[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.cast-member[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.6em;\n}\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n  background-color: rgba(255,255,255,0.1);\n}\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n  background-color: darkgrey;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LXNob3ctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGdDQUFnQztBQUNsQyIsImZpbGUiOiJ0di1zaG93LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuLmJveCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmNhc3QtY3Jldy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExJTtcbn1cblxuLmZpcnN0LXJvdy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucmV2aWV3LWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNTJweDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbml0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhc3QtbWVtYmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FzdC1tZW1iZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogMC42ZW07XG59XG5cbi5jYXN0LWNyZXctY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcbiAgLypvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyovXG59XG4iXX0= */"] });


/***/ }),

/***/ "4cG8":
/*!*********************************************************************!*\
  !*** ./src/app/components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video/video.component */ "G4NA");
/* harmony import */ var _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");







function MovieDetailsComponent_div_0_div_5_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.releaseYear, "\u00A0\u00A0|");
} }
function MovieDetailsComponent_div_0_div_5_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A0\u00A0", ctx_r10.hours, "hrs\u00A0", ctx_r10.minutes, "mins \u00A0");
} }
function MovieDetailsComponent_div_0_div_5_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r11.genres, "");
} }
function MovieDetailsComponent_div_0_div_5_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r12.spokenLanguages, "");
} }
function MovieDetailsComponent_div_0_div_5_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_5_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_5_div_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.hideAddedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Removed to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_0_div_5_div_19_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.hideRemovedAlert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.btnContent, " ");
} }
function MovieDetailsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieDetailsComponent_div_0_div_5_p_7_Template, 2, 1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovieDetailsComponent_div_0_div_5_p_10_Template, 2, 2, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Genres:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MovieDetailsComponent_div_0_div_5_div_14_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Spoken Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MovieDetailsComponent_div_0_div_5_p_18_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieDetailsComponent_div_0_div_5_div_19_Template, 13, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.movieDetails.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.movieDetails.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u2605 \u00A0", ctx_r7.voteAverage, "\u00A0\u00A0|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.hours && ctx_r7.minutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.genres);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.spokenLanguages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.btnContent);
} }
function MovieDetailsComponent_div_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.overview);
} }
function MovieDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-video", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovieDetailsComponent_div_0_div_5_Template, 20, 8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovieDetailsComponent_div_0_p_9_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.movieDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.overview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/intent/tweet?text=Watch%20", ctx_r0.movieDetails.title, "%0Dhttps://www.youtube.com/watch?v=", ctx_r0.key, "%0D%0A%23USC%20%23CSCI571%20%23FightOn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx_r0.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cast-details", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("details", ctx_r1.castDetails)("external", ctx_r1.external);
} }
function MovieDetailsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovieDetailsComponent_div_6_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const person_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.getCastDetails(person_r18.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + person_r18.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r18.character);
} }
function MovieDetailsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_6_div_1_Template, 11, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", person_r18.profile_path);
} }
function MovieDetailsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.reviews.length);
} }
function MovieDetailsComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r25.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r25.author, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605\u00A0", review_r25.rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r25.author, " on ", review_r25.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r25.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", review_r25.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_11_div_1_Template, 14, 7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.reviews);
} }
function MovieDetailsComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-carousel", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r26.recommendedMovies);
} }
function MovieDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_15_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.recommendedMovies.results.length !== 0);
} }
function MovieDetailsComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-multi-carousel", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r27.similarMovies);
} }
function MovieDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_19_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.similarMovies.results.length !== 0);
} }
class MovieDetailsComponent {
    constructor(route, postsService, elementRef) {
        this.route = route;
        this.postsService = postsService;
        this.elementRef = elementRef;
        this.btnContent = '';
        this.id = '';
        this.title = '';
        // tslint:disable-next-line:variable-name
        this.poster_path = '';
        this.mediaType = '';
        this.key = '';
        this.genres = [];
        this.spokenLanguages = [];
        this.watchlistFlag = 'false';
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
        this.routeSub = this.route.params.subscribe(params => {
            // console.log(params);
            console.log(params.id);
            this.id = params.id;
            this.checkWatchList();
        });
        this.fetchData();
        if (document.getElementById('typeahead-http')) {
            // @ts-ignore
            document.getElementById('typeahead-http').innerHTML = '';
        }
    }
    checkWatchList() {
        // check if it is in watchlist
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                // tslint:disable-next-line:prefer-for-of
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        this.watchlistFlag = 'true';
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
            }
        }
        console.log('watchlistFlag is ' + this.watchlistFlag);
        if (this.watchlistFlag === 'true') {
            this.btnContent = 'Remove from watchlist';
        }
        else {
            this.btnContent = 'Add to watchlist';
        }
        console.log(this.btnContent);
    }
    fetchData() {
        this.postsService.getMovieDetails(this.id).subscribe(res => {
            this.movieDetails = res;
            this.mediaType = 'movie';
            this.title = this.movieDetails.title;
            this.poster_path = this.movieDetails.poster_path;
            // tslint:disable-next-line:radix
            this.releaseYear = parseInt(this.movieDetails.release_date);
            this.voteAverage = parseFloat(this.movieDetails.vote_average).toFixed(1);
            // tslint:disable-next-line:radix
            this.hours = Math.floor(this.movieDetails.runtime / 60);
            this.minutes = this.movieDetails.runtime - this.hours * 60;
            for (const genre of this.movieDetails.genres) {
                this.genres.push(genre.name);
            }
            this.genres = this.genres.join(', ');
            for (const language of this.movieDetails.spoken_languages) {
                this.spokenLanguages.push(language.english_name);
            }
            this.spokenLanguages.join(', ');
            this.overview = this.movieDetails.overview;
            this.tweet = 'Watch%20' + this.movieDetails.toString() + 'https://www.youtube.com/watch?v=' + this.key.toString() + '#USC%20#CSCI571%20#FightOn';
            // add to continue watching
            // @ts-ignore
            this.addToContinueWatching();
        });
        this.postsService.getMovieVideos(this.id).subscribe(res => {
            this.movieVideos = res;
            if (this.movieVideos.results.length === 0 || !this.movieVideos.results.length) {
                this.key = 'tzkWB85ULJY';
            }
            else {
                this.key = this.movieVideos.results[0].key;
                if (!this.key) {
                    this.key = 'tzkWB85ULJY';
                }
            }
        });
        this.postsService.getMovieCast(this.id).subscribe(res => {
            this.cast = res;
            this.cast = this.cast.cast;
        });
        this.postsService.getMovieReviews(this.id).subscribe(res => {
            this.reviews = res;
            this.reviews = this.reviews.results;
            const tmpReviews = [];
            for (let i = 0; i < 10; i++) {
                tmpReviews.push(this.reviews[i]);
            }
            // deal with reviews data
            for (const review of this.reviews) {
                // format avatar path
                if (!review.author_details.avatar_path) {
                    review.avatar_path = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnPmUvFLjjmoYWAbLTEmLLIRCPpV_OgxCVA&usqp=CAU';
                }
                else {
                    if (review.author_details.avatar_path.substring(0, 6) === '/https') {
                        review.avatar_path = review.author_details.avatar_path.substring(1);
                    }
                    else {
                        review.avatar_path = 'https://image.tmdb.org/t/p/original' + review.author_details.avatar_path;
                    }
                }
                // format date created
                const date = review.created_at;
                // console.log(date);
                // tslint:disable-next-line:radix
                const newDate = new Date(date);
                // console.log(newDate);
                const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(newDate);
                const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
                // const ho = new Intl.DateTimeFormat('en', { hour: 'numeric' }).format(newDate);
                let min = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(newDate);
                let sec = new Intl.DateTimeFormat('en', { second: 'numeric' }).format(newDate);
                if (min.length < 2) {
                    min = '0' + min;
                }
                if (sec.length < 2) {
                    sec = '0' + sec;
                }
                if (newDate.getHours() === 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} PM`;
                }
                else if (newDate.getHours() < 12) {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours()}:${min}:${sec} AM`;
                }
                else {
                    review.created_at = `${mo} ${da}, ${newDate.getFullYear()}, ${newDate.getHours() - 12}:${min}:${sec} PM`;
                }
                console.log(review.rating);
                if (!review.author_details.rating) {
                    review.rating = 0;
                }
                else {
                    review.rating = review.author_details.rating;
                }
                console.log(review.rating);
            }
        });
        // fetch recommended movies data
        this.postsService.getRecommendedMovies(this.id).subscribe(res => {
            this.recommendedMovies = res;
        });
        // fetch similar movies data
        this.postsService.getSimilarMovies(this.id).subscribe(res => {
            this.similarMovies = res;
        });
    }
    // tslint:disable-next-line:variable-name
    addToContinueWatching() {
        let continueWatching = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('continue_watching')) {
                // check if this id exists
                continueWatching = JSON.parse(this.myStorage.getItem('continue_watching'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of continueWatching) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                continueWatching = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        continueWatching.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\" }`);
        this.myStorage.setItem('continue_watching', JSON.stringify(continueWatching));
        // console.log(this.myStorage);
    }
    getCastDetails(person) {
        // @ts-ignore
        // document.getElementById('layout').style.overflow =  'hidden';
        // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: hidden; }';
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
        // @ts-ignore
        document.getElementById('mask').style.display = 'block';
        // @ts-ignore
        document.getElementById('mask').style.background = 'rgba(0,0,0,0.6)';
        this.postsService.getCastDetails(person).subscribe(res => {
            this.castDetails = res;
        });
        this.postsService.getCastExternal(person).subscribe(res => {
            this.external = res;
        });
        if (document.getElementById('card')) {
            // @ts-ignore
            document.getElementById('card').style.display = 'block';
        }
    }
    ngOnDestroy() {
        // @ts-ignore
        this.routeSub.unsubscribe();
    }
    toggle() {
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        // @ts-ignore
        console.log('innerHTML: ' + addToWatchListBtn.innerHTML);
        console.log('another: ' + 'Add to watchlist');
        // @ts-ignore
        console.log(typeof (addToWatchListBtn.innerHTML));
        console.log(typeof ('Add to watchlist'));
        // @ts-ignore
        console.log(JSON.stringify(addToWatchListBtn.innerHTML) === JSON.stringify('Add to watchlist'));
        // @ts-ignore
        // if (addToWatchListBtn.innerHTML === 'Add to watchlist') {
        if (this.btnContent === 'Add to watchlist') {
            console.log('I am here');
            // @ts-ignore
            this.addToWatchList();
            console.log(' this.addToWatchList();');
        }
        else {
            // @ts-ignore
            this.removeFromWatchList();
            console.log(' this.removeFromWatchList();\n');
        }
    }
    addToWatchList() {
        this.myStorage.setItem(this.movieDetails.id, this.movieDetails.id);
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        const addedAlert = document.getElementById('add-alert');
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        this.btnContent = 'Remove from watchlist';
        // add to local storage
        let watchlist = [];
        // let flag = 'false';
        // if there is already some in watchlist
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // extract current watchlist
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // // tslint:disable-next-line:prefer-for-of
                // for (let idx = 0; idx < array.length; idx++) {
                //   // tslint:disable-next-line:radix
                //   if (parseInt(array[idx].id) === parseInt(this.id)) {
                //     flag = 'true';
                //   }
                // }
                watchlist = array;
            }
        }
        // if (flag === 'false') {
        watchlist.unshift(`{"id": ${this.id}, "title": \"${this.title}\", "poster_path": \"${this.poster_path}\", "type": \"${this.mediaType}\"}`);
        // }
        this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
        console.log(window.localStorage);
        // @ts-ignore
        removeAlert.style.display = 'none';
        // @ts-ignore
        addedAlert.style.display = 'block';
        setTimeout(() => {
            // @ts-ignore
            addedAlert.style.display = 'none';
        }, 5000);
    }
    removeFromWatchList() {
        this.myStorage.removeItem(this.movieDetails.id);
        const addToWatchListBtn = document.getElementById('watchlist-btn');
        const addedAlert = document.getElementById('add-alert');
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        this.btnContent = 'Add to watchlist';
        // remove from local storage
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                // console.log('[you have] ' + continueWatching);
                const array = [];
                for (const one of watchlist) {
                    array.push(one);
                    // console.log(array);
                }
                // traverse continue watching list
                for (let idx = 0; idx < array.length; idx++) {
                    // console.log('[each one] ' + JSON.parse(array[idx]).title);
                    // console.log(parseInt(JSON.parse(array[idx]).id) === parseInt(this.id));
                    // console.log('json id ' + JSON.parse(array[idx]).id + 'type' + typeof(JSON.parse(array[idx]).id));
                    // console.log('type of ' + typeof(this.id));
                    // tslint:disable-next-line:radix
                    // @ts-ignore
                    // tslint:disable-next-line:radix
                    if (parseInt(JSON.parse(array[idx]).id) === parseInt(this.id)) {
                        // console.log('[before]' + array);
                        array.splice(idx, 1);
                        // console.log('[addToContinueWatching]' + array);
                    }
                }
                watchlist = array;
            }
        }
        // console.log('[addToContinueWatching] ' + this.title);
        this.myStorage.setItem('watchlist', JSON.stringify(watchlist));
        console.log(window.localStorage);
        // @ts-ignore
        addedAlert.style.display = 'none';
        // @ts-ignore
        removeAlert.style.display = 'block';
        setTimeout(() => {
            // @ts-ignore
            removeAlert.style.display = 'none';
        }, 5000);
    }
    hideAddedAlert() {
        const addedAlert = document.getElementById('add-alert');
        // @ts-ignore
        addedAlert.style.display = 'none';
    }
    hideRemovedAlert() {
        const removeAlert = document.getElementById('remove-alert');
        // @ts-ignore
        removeAlert.style.display = 'none';
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 20, vars: 7, consts: [["class", "container-fluid box", 4, "ngIf"], ["id", "cast-details", 4, "ngIf"], [2, "color", "white", "font-size", "36px", "margin-left", "10%", "margin-bottom", "10px"], [1, "outer-container", "container-fluid", 2, "margin-left", "-2%"], [1, "cast-crew-container"], ["style", "margin-bottom: 15px;", 4, "ngFor", "ngForOf"], [1, "row", 2, "width", "100%", "margin-left", "11%", "margin-top", "100px"], [2, "color", "white", "font-size", "36px"], ["style", "color: darkgray; font-size: 36px; display: inline; font-weight: bolder; margin-left: 10px;", 4, "ngIf"], ["style", "margin-left: 11%; margin-right: 11%;  margin-top:20px;", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "box"], [1, "first-row-container"], [2, "width", "750px"], [1, "video", 3, "key"], ["class", "card", "style", "background-color: transparent;\n  color: white; width: 340px", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px"], ["class", "grey-text", 4, "ngIf"], [2, "display", "block", "margin-bottom", "40px"], ["data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href"], [1, "fab", "fa-twitter"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [1, "card", 2, "background-color", "transparent", "color", "white", "width", "340px"], [1, "card-body"], [1, "card-title", "row", 2, "font-size", "46px", "font-weight", "normal"], [1, "card-text", "row"], [1, "row"], ["class", "card-text", 4, "ngIf"], [1, "card-text"], [1, "subtitle"], ["class", "card-text grey-text", "style", "display: inline", 4, "ngIf"], ["class", "card-text grey-text", 4, "ngIf"], ["id", "watchlist-container", 4, "ngIf"], [1, "card-text", "grey-text", 2, "display", "inline"], [1, "card-text", "grey-text"], ["id", "watchlist-container"], ["id", "watchlist-btn", 1, "btn", "btn-primary", "row", 2, "font-size", "18px", 3, "click"], ["id", "add-alert", "role", "alert", 1, "init", "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "remove-alert", "role", "alert", 1, "init", "alert", "alert-danger", "alert-dismissible", "fade", "show", 2, "margin-left", "-14px", "margin-top", "10px"], [1, "grey-text"], ["id", "cast-details"], [3, "details", "external"], [2, "margin-bottom", "15px"], [1, "card", "cast-member", 2, "width", "175px", "height", "380px", "align-items", "center", "margin-right", "10px", "border-radius", "20px", "overflow", "hidden", "border", "none", 3, "click"], [1, ""], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "100%", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px", "font-weight", "bold", "width", "170px"], [1, "card-text", 2, "font-weight", "bolder", "margin-top", "-7px"], [1, "card-text", 2, "margin-top", "-7px", "font-size", "14px"], [2, "color", "darkgray", "font-size", "36px", "display", "inline", "font-weight", "bolder", "margin-left", "10px"], [2, "margin-left", "11%", "margin-right", "11%", "margin-top", "20px"], [4, "ngFor", "ngForOf"], [1, "card", 2, "width", "100%", "height", "min-content", "border-radius", "10px", "margin-bottom", "20px"], ["alt", "", 1, "card-img-overlay", 2, "width", "130px", "height", "130px", "border-radius", "50%", "margin-left", "10px", 3, "src"], [1, "card-body", 2, "margin-left", "200px"], [1, "card-text", 2, "font-size", "22px", "font-weight", "bold"], [2, "display", "inline", "color", "white", "background", "black", "padding-left", "10px", "padding-right", "10px", "border-radius", "20px", "font-weight", "normal", "font-size", "20px"], [1, "card-text", 2, "color", "gray"], [1, "card-text", "review-content"], [2, "margin-bottom", "-10px", "text-decoration", "underline", 3, "href"], [3, "data"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailsComponent_div_0_Template, 17, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailsComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieDetailsComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovieDetailsComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieDetailsComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recommended Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MovieDetailsComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Similar Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieDetailsComponent_div_19_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.castDetails && ctx.external);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recommendedMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.similarMovies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"], _cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_5__["CastDetailsComponent"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_6__["MultiCarouselComponent"]], styles: [".test[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 5%;\n}\n\n\n.grey-text[_ngcontent-%COMP%] {\n  color: darkgrey;\n}\n\n\n.box[_ngcontent-%COMP%] {\n  color: white;\n  width: 80%;\n  margin-top: 50px;\n}\n\n\n.cast-crew-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  width: 1100px;\n  align-content: center;\n  margin-left: 11%;\n}\n\n\n.first-row-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 20px;\n}\n\n\n.review-content[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  overflow: hidden;\n  height: 52px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  margin-bottom: 5px;\n  font-size: 12px;\n}\n\n\n.init[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n.cast-member[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.6em;\n}\n\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(255,255,255,0.3);\n  background-color: rgba(255,255,255,0.1);\n}\n\n\n.cast-crew-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 6px;\n  background-color: darkgrey;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibW92aWUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3Qge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5cbi5ncmV5LXRleHQge1xuICBjb2xvcjogZGFya2dyZXk7XG59XG5cbi5ib3gge1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5jYXN0LWNyZXctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWR0aDogMTEwMHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMSU7XG59XG5cbi5maXJzdC1yb3ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJldmlldy1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDUycHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW5pdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXN0LW1lbWJlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiAwLjZlbTtcbn1cblxuLmNhc3QtY3Jldy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xufVxuXG4uY2FzdC1jcmV3LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICAvKm91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7Ki9cbn1cblxuIl19 */"] });


/***/ }),

/***/ "6Wl3":
/*!***********************************************************************!*\
  !*** ./src/app/components/mixed-carousel/mixed-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: MixedCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedCarouselComponent", function() { return MixedCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MixedCarouselComponent_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MixedCarouselComponent_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const one_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r6.reloadPage(one_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r5.title);
} }
function MixedCarouselComponent_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r2);
} }
function MixedCarouselComponent_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MixedCarouselComponent_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 4);
} }
function MixedCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MixedCarouselComponent_div_1_2_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataArray);
} }
class MixedCarouselComponent {
    constructor() {
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        if (window.screen.width === 360) { // 768px portrait
            this.mobile = true;
        }
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        this.transformData();
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id) {
        window.location.href = `/watch/movie/${id}`;
    }
}
MixedCarouselComponent.ɵfac = function MixedCarouselComponent_Factory(t) { return new (t || MixedCarouselComponent)(); };
MixedCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixedCarouselComponent, selectors: [["app-mixed-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 1, consts: [[1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function MixedCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MixedCarouselComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["ngb-carousel[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] {\n\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .slide {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n  left: -10%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n  right: -10%;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: auto;\n  right: auto;\n  text-align: center;\n}\n\n.six-wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  \n  display: flex;\n  text-align: center;\n  \n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  width: 14.7%;\n  margin-right: 2%;\n  margin-bottom: 2%;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n  transform: scale(1.08);\n}\n\n.wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  \n  left: -5%;\n  right: 0;\n  height: 75%;\n  width: 110%;\n  opacity: 0;\n  transition: .5s ease;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n  align-items: center;\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGVkLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztBQUVBOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtFQUErRTtFQUMvRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFHVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im1peGVkLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lciB7XG5cbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICBwYWRkaW5nOiAyJTtcbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAtMTAlO1xufVxuXG4ubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAtMTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpeC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgLyp3aWR0aDogODAlOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyptYXJnaW4tbGVmdDogMTIlOyovXG59XG5cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB3aWR0aDogMTQuNyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1pbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG4ud3JhcHBlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICAvKmJvdHRvbTogMDsqL1xuICBsZWZ0OiAtNSU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDExMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDElO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CrP6":
/*!***********************************************************************!*\
  !*** ./src/app/components/multi-carousel/multi-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: MultiCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiCarouselComponent", function() { return MultiCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function MultiCarouselComponent_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiCarouselComponent_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const one_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r6.reloadPage(one_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r5.title);
} }
function MultiCarouselComponent_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r2);
} }
function MultiCarouselComponent_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 4);
} }
function MultiCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiCarouselComponent_div_1_2_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataArray);
} }
class MultiCarouselComponent {
    constructor() {
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        if (window.screen.width === 360) { // 768px portrait
            this.mobile = true;
        }
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        this.transformData();
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id) {
        window.location.href = `/watch/movie/${id}`;
    }
}
MultiCarouselComponent.ɵfac = function MultiCarouselComponent_Factory(t) { return new (t || MultiCarouselComponent)(); };
MultiCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiCarouselComponent, selectors: [["app-multi-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 1, consts: [[1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function MultiCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiCarouselComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["ngb-carousel[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] {\n\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .slide {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n  left: -10%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n  right: -10%;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: auto;\n  right: auto;\n  text-align: center;\n}\n\n.six-wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  \n  display: flex;\n  text-align: center;\n  \n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  width: 14.7%;\n  margin-right: 2%;\n  margin-bottom: 2%;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n  transform: scale(1.08);\n}\n\n.wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  \n  left: -5%;\n  right: 0;\n  height: 75%;\n  width: 110%;\n  opacity: 0;\n  transition: .5s ease;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n  align-items: center;\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztBQUVBOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtFQUErRTtFQUMvRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFHVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im11bHRpLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lciB7XG5cbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICBwYWRkaW5nOiAyJTtcbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAtMTAlO1xufVxuXG4ubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAtMTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpeC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgLyp3aWR0aDogODAlOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyptYXJnaW4tbGVmdDogMTIlOyovXG59XG5cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB3aWR0aDogMTQuNyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1pbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG4ud3JhcHBlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICAvKmJvdHRvbTogMDsqL1xuICBsZWZ0OiAtNSU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDExMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDElO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");



function VideoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r0.key)("width", 720);
} }
class VideoComponent {
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], inputs: { key: "key" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "videoId", "width"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoComponent_div_0_Template, 2, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.key);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"]], encapsulation: 2 });


/***/ }),

/***/ "HcRg":
/*!*******************************************************************!*\
  !*** ./src/app/components/cast-details/cast-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CastDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastDetailsComponent", function() { return CastDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




function CastDetailsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastDetailsComponent_div_0_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.details.name, " ");
} }
function CastDetailsComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth: ", ctx_r2.details.birthday, "");
} }
function CastDetailsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r3.details.place_of_birth, "");
} }
function CastDetailsComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gender: ", ctx_r4.gender, "");
} }
function CastDetailsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Known for: ", ctx_r5.details.known_for_department, "");
} }
function CastDetailsComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Also known as: ", ctx_r6.details.also_known_as, "");
} }
function CastDetailsComponent_div_0_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ctx_r10.external.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.instagram.com/", ctx_r11.external.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/", ctx_r12.external.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.twitter.com/", ctx_r13.external.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastDetailsComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CastDetailsComponent_div_0_div_11_div_1_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_0_div_11_div_2_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CastDetailsComponent_div_0_div_11_div_3_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CastDetailsComponent_div_0_div_11_div_4_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.external.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.external.instagram_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.external.facebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.external.twitter_id);
} }
function CastDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastDetailsComponent_div_0_div_2_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CastDetailsComponent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CastDetailsComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CastDetailsComponent_div_0_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CastDetailsComponent_div_0_div_9_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CastDetailsComponent_div_0_div_10_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CastDetailsComponent_div_0_div_11_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500/" + ctx_r0.details.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.place_of_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.known_for_department);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.details.also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.details.biography);
} }
class CastDetailsComponent {
    constructor(elementRef, postsService) {
        this.elementRef = elementRef;
        this.postsService = postsService;
    }
    ngOnInit() {
        if (this.details.gender === 1) {
            this.gender = 'Female';
        }
        else if (this.details.gender === 2) {
            this.gender = 'Male';
        }
        // window.onload = () => {
        //   console.log(document.getElementById('card-details-container'));
        //   if (document.getElementById('card-details-container')) {
        //     // @ts-ignore
        //     document.getElementById('card-details-container').style.background = 'rgba(0,0,0,0.5)';
        //   }
        // };
    }
    closeDetails() {
        // @ts-ignore
        // document.getElementById('card-details-container').style.background = 'transparent';
        document.getElementById('mask').style.display = 'none';
        // @ts-ignore
        document.getElementById('mask').style.background = 'transparent';
        // @ts-ignore
        document.getElementById('card').style.display = 'none';
        // @ts-ignore
        // document.getElementById('layout').style.overflow = 'scroll';
        this.elementRef.nativeElement.ownerDocument.body.style.overflow = 'scroll';
        // this.elementRef.nativeElement.ownerDocument.body.style = 'body::-webkit-scrollbar: { overflow: scroll; }';
        // document.getElementById('card-mask').style.
    }
}
CastDetailsComponent.ɵfac = function CastDetailsComponent_Factory(t) { return new (t || CastDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
CastDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastDetailsComponent, selectors: [["app-cast-details"]], inputs: { details: "details", external: "external" }, decls: 1, vars: 1, consts: [["id", "card-details-container", "style", "", 4, "ngIf"], ["id", "card-details-container"], ["id", "card", 1, "card", 2, "width", "60%", "height", "70%", "z-index", "22", "position", "fixed", "align-content", "center", "left", "20%", "top", "10%"], ["class", "card-header", "style", "font-size: 24px;", 4, "ngIf"], [1, "container-fluid", 2, "height", "min-content", "display", "flex", "flex-direction", "row"], ["alt", "", 2, "margin-top", "2%", "width", "20%", "margin-left", "2%", "margin-right", "2%", 3, "src"], [1, "row", "container-fluid", 2, "display", "block", "width", "70%", "margin-left", "2%", "margin-top", "2%"], ["class", "", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "width", "90%", "height", "40%", "margin-top", "2%", "margin-left", "2%", "margin-right", "2%", "padding-bottom", "2%", "display", "block"], [2, "font-size", "28px"], [2, "overflow", "scroll", "height", "70%"], [1, "card-header", 2, "font-size", "24px"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, ""], ["style", "display: inline; margin-right: 10px;", 4, "ngIf"], ["style", "display: inline;margin-right: 10px;", 4, "ngIf"], ["style", "display: inline;", 4, "ngIf"], [2, "display", "inline", "margin-right", "10px"], ["target", "_blank", "ngbPopover", "Visit IMDB", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "darkgoldenrod", 3, "href"], [1, "fab", "fa-imdb"], ["target", "_blank", "ngbPopover", "Visit Instagram", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "purple", 3, "href"], [1, "fab", "fa-instagram"], ["target", "_blank", "ngbPopover", "Visit Facebook", "triggers", "mouseenter:mouseleave", "target", "_blank", 2, "font-size", "30px", "color", "#0926cd", 3, "href"], [1, "fab", "fa-facebook-square"], [2, "display", "inline"], ["ngbPopover", "Visit Twitter", "triggers", "mouseenter:mouseleave", "target", "_blank", "data-size", "large", 1, "twitter-share-button", 2, "font-size", "30px", "color", "#1ea2f1", "margin-right", "10px", 3, "href"], [1, "fab", "fa-twitter"]], template: function CastDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CastDetailsComponent_div_0_Template, 17, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPopover"]], styles: [".card-details-container[_ngcontent-%COMP%] {\n  background: rgba(0,0,0,0.5);\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoiY2FzdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Powered by TMDB. Developed by Cancan Hua.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n  margin-top: 100px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'ng-usc-films';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "layout", 1, "layout"], ["id", "mask", 2, "z-index", "21"], [2, "margin-top", "130px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#mask[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200vh;\n  position: absolute;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hc2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-scrollbar */ "G1Gu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tv-show-details/tv-show-details.component */ "3eqm");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/trending-carousel/trending-carousel.component */ "ktzS");
/* harmony import */ var _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _components_type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/type-ahead/type-ahead.component */ "29r4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/video/video.component */ "G4NA");
/* harmony import */ var _components_tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/tv-carousel/tv-carousel.component */ "u3ne");
/* harmony import */ var _components_cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cast-details/cast-details.component */ "HcRg");
/* harmony import */ var _components_mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mixed-carousel/mixed-carousel.component */ "6Wl3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';





















// @ts-ignore
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
            ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__["NgScrollbarModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
        _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_12__["WatchlistComponent"],
        _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_13__["MovieDetailsComponent"],
        _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_14__["TvShowDetailsComponent"],
        _components_trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_16__["TrendingCarouselComponent"],
        _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_17__["MultiCarouselComponent"],
        _components_type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_18__["TypeAheadComponent"],
        _components_video_video_component__WEBPACK_IMPORTED_MODULE_20__["VideoComponent"],
        _components_tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_21__["TvCarouselComponent"],
        _components_cast_details_cast_details_component__WEBPACK_IMPORTED_MODULE_22__["CastDetailsComponent"],
        _components_mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_23__["MixedCarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
        ngx_scrollbar__WEBPACK_IMPORTED_MODULE_5__["NgScrollbarModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/posts.service */ "jwUf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trending-carousel/trending-carousel.component */ "ktzS");
/* harmony import */ var _mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixed-carousel/mixed-carousel.component */ "6Wl3");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tv-carousel/tv-carousel.component */ "u3ne");







function HomePageComponent_app_trending_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-trending-carousel", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx_r0.posts);
} }
function HomePageComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-mixed-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r8.array)("continue", "true");
} }
function HomePageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_div_2_div_1_Template, 4, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.array.length > 0);
} }
function HomePageComponent_app_multi_carousel_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r2.popularMovies);
} }
function HomePageComponent_app_multi_carousel_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.topRatedMovies);
} }
function HomePageComponent_app_multi_carousel_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-multi-carousel", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r4.trendingMovies);
} }
function HomePageComponent_app_tv_carousel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.popularTvShows);
} }
function HomePageComponent_app_tv_carousel_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r6.topRatedTvShows);
} }
function HomePageComponent_app_tv_carousel_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tv-carousel", 7);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r7.trendingTvShows);
} }
class HomePageComponent {
    constructor(postsService) {
        this.postsService = postsService;
        this.items = Array.from({ length: 1000 }, (v, k) => k + 1);
        this.message = 'Passing the data!';
        this.storage = window.localStorage;
        this.array = [];
    }
    ngOnInit() {
        this.parseContinueWatching();
        this.fetchData();
    }
    fetchData() {
        this.postsService.getAllPosts().subscribe(res => {
            this.posts = res;
        });
        this.postsService.getPopularMovies().subscribe(res => {
            this.popularMovies = res;
        });
        this.postsService.getTopRatedMovies().subscribe(res => {
            this.topRatedMovies = res;
        });
        this.postsService.getTrendingMovies().subscribe(res => {
            this.trendingMovies = res;
        });
        this.postsService.getPopularTvShows().subscribe(res => {
            this.popularTvShows = res;
        });
        this.postsService.getTopRatedTvShows().subscribe(res => {
            this.topRatedTvShows = res;
        });
        this.postsService.getTrendingTvShows().subscribe(res => {
            this.trendingTvShows = res;
        });
    }
    parseContinueWatching() {
        if (this.storage) {
            if (this.storage.continue_watching) {
                this.json = JSON.parse(this.storage.continue_watching);
                for (const one of this.json) {
                    this.array.push(JSON.parse(one));
                }
                console.log('[parseContinueWatching] ' + this.array[0].title);
                console.log('[parseContinueWatching] ' + this.array[0].poster_path);
                console.log(this.array);
            }
        }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], outputs: { posts: "posts" }, decls: 21, vars: 8, consts: [[1, "container-fluid"], [3, "posts", 4, "ngIf"], [4, "ngIf"], [1, "subtitle"], [3, "data", 4, "ngIf"], [3, "posts"], [3, "data", "continue"], [3, "data"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_app_trending_carousel_1_Template, 1, 1, "app-trending-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomePageComponent_app_multi_carousel_5_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomePageComponent_app_multi_carousel_8_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomePageComponent_app_multi_carousel_11_Template, 1, 1, "app-multi-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_app_tv_carousel_14_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomePageComponent_app_tv_carousel_17_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomePageComponent_app_tv_carousel_20_Template, 1, 1, "app-tv-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popularMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topRatedMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendingMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popularTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topRatedTvShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trendingTvShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _trending_carousel_trending_carousel_component__WEBPACK_IMPORTED_MODULE_3__["TrendingCarouselComponent"], _mixed_carousel_mixed_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MixedCarouselComponent"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_5__["MultiCarouselComponent"], _tv_carousel_tv_carousel_component__WEBPACK_IMPORTED_MODULE_6__["TvCarouselComponent"]], styles: [".subtitle[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 36px;\n    margin-top: 10vh;\n    text-align: left;\n    margin-left: 10%;\n}\n\n.home-layout[_ngcontent-%COMP%]{\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    display: flex;\n    flex-direction: column;\n}\n\napp-trending-carousel[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUF1QjtJQUF2Qiw0QkFBdUI7SUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5ob21lLWxheW91dHtcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmFwcC10cmVuZGluZy1jYXJvdXNlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type-ahead/type-ahead.component */ "29r4");




class NavBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        // console.log(window.location.pathname);
        // @ts-ignore
        if (window.location.pathname === '/mylist') {
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('home').className = 'nav-link';
        }
        else {
            // @ts-ignore
            document.getElementById('home').className = 'nav-link active';
            // @ts-ignore
            document.getElementById('my-list').className = 'nav-link';
        }
    }
    toggleToHome() {
        // @ts-ignore
        document.getElementById('home').className = 'nav-link active';
        // @ts-ignore
        document.getElementById('my-list').className = 'nav-link';
    }
    toggleToMyList() {
        // @ts-ignore
        document.getElementById('my-list').className = 'nav-link active';
        // @ts-ignore
        document.getElementById('home').className = 'nav-link';
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "mb-3", "navbar-dark", "bg-dark", 2, "position", "fixed", "top", "0", "background", "black", "height", "70px", "width", "100%", "z-index", "20"], [1, "container-fluid", 2, "position", "fixed", "top", "0", "background", "black", "height", "70px", "width", "95%", "z-index", "20"], ["href", "#", "routerLink", "/", 1, "navbar-brand", "mr-3"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", 1, "navbar-toggler"], [1, "navbar-toggler-icon", 2, "color", "darkgrey"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", 2, "background", "black", "width", "100%"], ["href", "#", "id", "home", "routerLink", "/", 1, "nav-item", "nav-link", "active", 3, "click"], ["href", "#", "id", "my-list", "routerLink", "/mylist", 1, "nav-item", "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto", 2, "background", "black", "padding-bottom", "10px", "width", "100%"], [1, "nav-item", "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_8_listener() { return ctx.toggleToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_a_click_10_listener() { return ctx.toggleToMyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-type-ahead", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _type_ahead_type_ahead_component__WEBPACK_IMPORTED_MODULE_3__["TypeAheadComponent"]], styles: [".nav-bar[_ngcontent-%COMP%] {\n    display: flex;\n    padding-top: 20px;\n    height: 70px;\n    background-color: black;\n    color: white;\n}\n\n.navbar-dark[_ngcontent-%COMP%] {\n  background-color: black !important;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.usc-film-title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 24px;\n    font-family: Arial;\n    \n    \n    \n    margin-left: 20px;\n    background-color: transparent;\n    border: transparent;\n  }\n\n.home-title[_ngcontent-%COMP%], .my-list-title[_ngcontent-%COMP%] {\n    color: grey;\n    font-size: 24px;\n    font-family: Arial;\n    background-color: transparent;\n    border: transparent;\n    margin-left: 20px;\n    outline: 0;\n  }\n\n.ml-auto[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  width: 100%;\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0FBR0Y7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7O0FBRUY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNjLWZpbG0tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIC8qbWFyZ2luLXRvcDogMjBweDsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IDEwMHB4OyovXG4gICAgLypwb3NpdGlvbjogZml4ZWQ7Ki9cbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICB9XG5cblxuLmhvbWUtdGl0bGUsIC5teS1saXN0LXRpdGxlIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4ubWwtYXV0byB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuIl19 */"] });


/***/ }),

/***/ "jwUf":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PostsService {
    // const deployLink = "";
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllPosts() {
        const url = '/apis/posts';
        return this.httpClient.get(url);
    }
    getPopularMovies() {
        const url = '/apis/posts/popularMovies';
        return this.httpClient.get(url);
    }
    getTopRatedMovies() {
        const url = '/apis/posts/topRatedMovies';
        return this.httpClient.get(url);
    }
    getTrendingMovies() {
        const url = '/apis/posts/trendingMovies';
        return this.httpClient.get(url);
    }
    getPopularTvShows() {
        const url = '/apis/posts/popularTvShows';
        return this.httpClient.get(url);
    }
    getTopRatedTvShows() {
        const url = '/apis/posts/topRatedTvShows';
        return this.httpClient.get(url);
    }
    getTrendingTvShows() {
        const url = '/apis/posts/trendingTvShows';
        return this.httpClient.get(url);
    }
    getMovieDetails(id) {
        const url = '/apis/posts/movieDetails/' + id;
        return this.httpClient.get(url);
    }
    getMovieVideos(id) {
        const url = '/apis/posts/movieVideos/' + id;
        return this.httpClient.get(url);
    }
    getMovieCast(id) {
        const url = '/apis/posts/movieCast/' + id;
        return this.httpClient.get(url);
    }
    getMovieReviews(id) {
        const url = '/apis/posts/movieReviews/' + id;
        return this.httpClient.get(url);
    }
    getRecommendedMovies(id) {
        const url = '/apis/posts/recommendedMovies/' + id;
        return this.httpClient.get(url);
    }
    getSimilarMovies(id) {
        const url = '/apis/posts/similarMovies/' + id;
        return this.httpClient.get(url);
    }
    getTvShowDetails(id) {
        const url = '/apis/posts/tvshowDetails/' + id;
        return this.httpClient.get(url);
    }
    getTvShowVideos(id) {
        const url = '/apis/posts/tvshowVideos/' + id;
        return this.httpClient.get(url);
    }
    getTvShowCast(id) {
        const url = '/apis/posts/tvshowCast/' + id;
        return this.httpClient.get(url);
    }
    getTvShowReviews(id) {
        const url = '/apis/posts/tvshowReviews/' + id;
        return this.httpClient.get(url);
    }
    getRecommendedTvShows(id) {
        const url = '/apis/posts/recommendedTvShows/' + id;
        return this.httpClient.get(url);
    }
    getSimilarTvShows(id) {
        const url = '/apis/posts/similarTvShows/' + id;
        return this.httpClient.get(url);
    }
    getCastDetails(person) {
        const url = '/apis/posts/castDetails/' + person;
        return this.httpClient.get(url);
    }
    getCastExternal(person) {
        const url = '/apis/posts/castExternal/' + person;
        return this.httpClient.get(url);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ktzS":
/*!*****************************************************************************!*\
  !*** ./src/app/components/trending-carousel/trending-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrendingCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingCarouselComponent", function() { return TrendingCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function TrendingCarouselComponent_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", ctx_r3.posts[i_r2].id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w780/" + ctx_r3.posts[i_r2].backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.posts[i_r2].title);
} }
function TrendingCarouselComponent_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrendingCarouselComponent_div_1_2_ng_template_0_Template, 7, 3, "ng-template", 3);
} }
const _c0 = function () { return [0, 1, 2, 3, 4]; };
function TrendingCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrendingCarouselComponent_div_1_2_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
// providers: [NgbCarouselConfig]
class TrendingCarouselComponent {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.dataReceived = 'DefaultValue!';
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.posts = this.posts.results;
        // console.log('images is ' + typeof(this.images));
        // console.log('images[0] is ' + typeof(this.images[0]));
    }
}
TrendingCarouselComponent.ɵfac = function TrendingCarouselComponent_Factory(t) { return new (t || TrendingCarouselComponent)(); };
TrendingCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendingCarouselComponent, selectors: [["app-trending-carousel"]], inputs: { dataReceived: "dataReceived", posts: "posts" }, decls: 2, vars: 1, consts: [[1, "container-fluid"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "hover-overlay", "ripple"], [1, "wrapper"], ["href", "", 3, "routerLink"], ["className", "img-fluid", "alt", "", 2, "align-content", "center", "text-align", "center", 3, "src"], [1, "overlay"], [1, "text"]], template: function TrendingCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendingCarouselComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".carousel[_ngcontent-%COMP%] {\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n  align-content: center;\n  margin-top: 5%;\n  margin-left: 9%;\n  left:auto;\n  right: auto;\n  outline: none;\n  height: 50%;\n  overflow: hidden;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 7%;\n  text-align: left;\n  margin-left: 8%;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .mask[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.mask[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-top: -38%;\n  position: absolute;\n  padding-bottom: 10%;\n  \n  width: 100%;\n  height: 50%;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n}\n\n.wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  \n  text-align: center;\n  width: 100%;\n}\n\nngb-carousel[_ngcontent-%COMP%]:hover   .wrapper[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n  transform: scale(1.05);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 350px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  \n  left: 0;\n  right: 0;\n  height: 50%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  bottom: 10%;\n  left: 15%;\n  transform: translate(-50%, -50%);\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kaW5nLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsK0VBQStFO0FBQ2pGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtFQUErRTtBQUNqRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBR1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ0cmVuZGluZy1jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsIHtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogOSU7XG4gIGxlZnQ6YXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2hpdGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlcjpob3ZlciAubWFzayB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tYXNrIHtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luLXRvcDogLTM4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAvKmJvdHRvbTogNTAlOyovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLndyYXBwZXIgPiBhID4gaW1nIHtcbiAgLyp3aWR0aDogMTAwMHB4OyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm5nYi1jYXJvdXNlbDpob3ZlciAud3JhcHBlciA+IGEgPiBpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLypib3R0b206IDUwJTsqL1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLndyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiAxNSU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"] });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// const SEARCH_URL = 'https://api.themoviedb.org/3/search/multi?api_key=5cb255aabd11100bc162d4bd13d7359c&language=en-US&query=';
const SEARCH_URL = '/apis/posts/search/';
// const PARAMS = new HttpParams({
//   fromObject: {
//     action: 'opensearch',
//     format: 'json',
//     origin: '*'
//   }
// });
class SearchService {
    constructor(http) {
        this.http = http;
    }
    search(term) {
        if (term === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])([]);
        }
        // this.data = this.http.get<MultiSearchData[]>(SEARCH_URL + term).pipe(
        //   map(res => res as MultiSearchData[] || [])
        // );
        this.data = this.http.get(SEARCH_URL + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => res));
        // @ts-ignore
        return this.data;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "u3ne":
/*!*****************************************************************!*\
  !*** ./src/app/components/tv-carousel/tv-carousel.component.ts ***!
  \*****************************************************************/
/*! exports provided: TvCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvCarouselComponent", function() { return TvCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function TvCarouselComponent_div_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TvCarouselComponent_div_1_2_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const one_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r6.reloadPage(one_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/watch/movie/", one_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r5.name);
} }
function TvCarouselComponent_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_1_2_ng_template_0_div_1_Template, 5, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r2);
} }
function TvCarouselComponent_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TvCarouselComponent_div_1_2_ng_template_0_Template, 3, 1, "ng-template", 4);
} }
function TvCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TvCarouselComponent_div_1_2_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataArray);
} }
class TvCarouselComponent {
    constructor() {
        this.dataArray = [];
        this.myStorage = window.localStorage;
    }
    ngOnInit() {
        if (window.screen.width === 360) { // 768px portrait
            this.mobile = true;
        }
        // console.log('continue is ' + this.continue);
        // console.log('array is  ' + this.data);
        if (this.continue !== 'true') {
            this.data = this.data.results;
            // console.log('check if continue');
        }
        this.transformData();
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.data) {
            for (let i = 0; i < this.data.length && i < 24; i++) {
                // console.log(this.data[i].poster_path);
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.data[i]);
                }
                else {
                    this.dataArray[j].push(this.data[i]);
                }
            }
        }
        // console.log(this.dataArray);
    }
    reloadPage(id) {
        window.location.href = `/watch/tv/${id}`;
    }
}
TvCarouselComponent.ɵfac = function TvCarouselComponent_Factory(t) { return new (t || TvCarouselComponent)(); };
TvCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TvCarouselComponent, selectors: [["app-tv-carousel"]], inputs: { data: "data", continue: "continue" }, decls: 2, vars: 1, consts: [[1, "container"], [4, "ngIf"], [1, "my-carousel_container", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "six-wrapper"], ["class", "wrapper", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink", "click"], ["alt", "Random first slide", 1, "carousel-img", 3, "src"], [1, "overlay"], [1, "text"]], template: function TvCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TvCarouselComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["ngb-carousel[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  align-items: center;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] {\n\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-inner {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .slide {\n  padding: 2%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-prev {\n  left: -10%;\n}\n\n.my-carousel_container[_ngcontent-%COMP%] .carousel-control-next {\n  right: -10%;\n}\n\n.container[_ngcontent-%COMP%] {\n  left: auto;\n  right: auto;\n  text-align: center;\n}\n\n.six-wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  \n  display: flex;\n  text-align: center;\n  \n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  width: 14.7%;\n  margin-right: 2%;\n  margin-bottom: 2%;\n  position: relative;\n}\n\n.wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .carousel-img[_ngcontent-%COMP%]{\n  transform: scale(1.08);\n}\n\n.wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  \n  left: -5%;\n  right: 0;\n  height: 75%;\n  width: 110%;\n  opacity: 0;\n  transition: .5s ease;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0));\n  align-items: center;\n  text-align: center;\n}\n\n.wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  bottom: 1%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztBQUVBOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFHQTtFQUNFLDJCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtFQUErRTtFQUMvRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFHVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InR2LWNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lciB7XG5cbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuY2Fyb3VzZWwtaW5uZXIge1xuICBwYWRkaW5nOiAyJTtcbn1cbi5teS1jYXJvdXNlbF9jb250YWluZXI6Om5nLWRlZXAuc2xpZGUge1xuICBwYWRkaW5nOiAyJTtcbn1cblxuLm15LWNhcm91c2VsX2NvbnRhaW5lcjo6bmctZGVlcC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAtMTAlO1xufVxuXG4ubXktY2Fyb3VzZWxfY29udGFpbmVyOjpuZy1kZWVwLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHJpZ2h0OiAtMTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpeC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgLyp3aWR0aDogODAlOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyptYXJnaW4tbGVmdDogMTIlOyovXG59XG5cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB3aWR0aDogMTQuNyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5jYXJvdXNlbC1pbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG59XG4ud3JhcHBlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICAvKmJvdHRvbTogMDsqL1xuICBsZWZ0OiAtNSU7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDc1JTtcbiAgd2lkdGg6IDExMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDElO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-details/movie-details.component */ "4cG8");
/* harmony import */ var _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tv-show-details/tv-show-details.component */ "3eqm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
    {
        path: 'watch',
        children: [
            { path: 'movie',
                children: [
                    { path: ':id', component: _components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsComponent"] }
                ] },
            { path: 'tv',
                children: [
                    { path: ':id', component: _components_tv_show_details_tv_show_details_component__WEBPACK_IMPORTED_MODULE_4__["TvShowDetailsComponent"] }
                ] }
        ]
    },
    { path: 'mylist', component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_2__["WatchlistComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zcMl":
/*!*************************************************************!*\
  !*** ./src/app/components/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function WatchlistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No items found in Watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const one_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", one_r5.type, "/", one_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + one_r5.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](one_r5.title);
} }
function WatchlistComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_1_div_4_div_2_Template, 5, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const six_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", six_r3);
} }
function WatchlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My WatchList ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WatchlistComponent_div_1_div_4_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dataArray);
} }
class WatchlistComponent {
    constructor() {
        this.myStorage = window.localStorage;
        this.array = [];
        this.dataArray = [];
    }
    ngOnInit() {
        // if (this.myStorage) {
        //     if (this.myStorage.getItem('watchlist')) {
        //       for (let i = 0; i < this.myStorage.length; i++) {
        //         // const key = this.myStorage.key(i);
        //         // if (key !== null) {
        //         //   const value = this.myStorage.getItem(key);
        //         //   // @ts-ignore
        //         //   this.json = JSON.parse(value);
        //         //   if (this.json.watchlist === 'true') {
        //         //     // @ts-ignore
        //         //     this.array.push(this.json);
        //         //   }
        //         // }
        //       }
        //     }
        // }
        let watchlist = [];
        // if there is already some continue watching
        if (this.myStorage) {
            if (this.myStorage.getItem('watchlist')) {
                // check if this id exists
                watchlist = JSON.parse(this.myStorage.getItem('watchlist'));
                const arr = [];
                for (const one of watchlist) {
                    arr.push(JSON.parse(one));
                    // console.log(array);
                }
                this.array = arr;
            }
        }
        this.transformData();
    }
    transformData() {
        // console.log(this.data);
        let j = -1;
        if (this.array) {
            // console.log('[transfromData] ' + this.data[0].poster_path);
            for (let i = 0; i < this.array.length; i++) {
                if (i % 6 === 0) {
                    j++;
                    this.dataArray[j] = [];
                    this.dataArray[j].push(this.array[i]);
                }
                else {
                    this.dataArray[j].push(this.array[i]);
                }
            }
        }
        console.log(this.dataArray);
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "", 4, "ngIf"], [2, "color", "white", "font-size", "36px", "text-align", "center", "height", "60vh"], [1, ""], [2, "color", "white", "font-size", "36px", "margin-left", "10%", "margin-bottom", "2%"], [1, "my-list-container"], [4, "ngFor", "ngForOf"], [1, "watchlist-six-wrapper"], ["class", "watchlist-wrapper", 4, "ngFor", "ngForOf"], [1, "watchlist-wrapper"], ["alt", "", 1, "watchlist-img", 3, "routerLink", "src"], [1, "overlay"], [1, "text"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchlistComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_1_Template, 5, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.array.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".my-list-container[_ngcontent-%COMP%] {\n  margin-left: 9%;\n  width: 80%;\n  min-height: 50vh;\n}\n\n.watchlist-six-wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  width: 100%;\n  display: flex;\n  text-align: left;\n}\n\n.watchlist-wrapper[_ngcontent-%COMP%] {\n  height: -webkit-min-content;\n  height: min-content;\n  width: 14.7%;\n  margin-right: 2%;\n  margin-bottom: 2%;\n  position: relative;\n}\n\n.watchlist-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.watchlist-wrapper[_ngcontent-%COMP%]:hover   .watchlist-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.watchlist-wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  \n  left: 0;\n  right: 0;\n  height: 50%;\n  width: 100%;\n  opacity: 0;\n  transition: .5s ease;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0));\n  align-items: center;\n}\n\n.watchlist-wrapper[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  bottom: 2%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNobGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsMkJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsK0VBQStFO0VBQy9FLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBR1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ3YXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1saXN0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA5JTtcbiAgd2lkdGg6IDgwJTtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cblxuLndhdGNobGlzdC1zaXgtd3JhcHBlciB7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi53YXRjaGxpc3Qtd3JhcHBlciB7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIHdpZHRoOiAxNC43JTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndhdGNobGlzdC13cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53YXRjaGxpc3Qtd3JhcHBlcjpob3ZlciAud2F0Y2hsaXN0LXdyYXBwZXIgPiBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLndhdGNobGlzdC13cmFwcGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIC8qYm90dG9tOiAwOyovXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAxKSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2F0Y2hsaXN0LXdyYXBwZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMiU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map