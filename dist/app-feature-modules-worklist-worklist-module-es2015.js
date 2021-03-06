(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feature-modules-worklist-worklist-module"],{

/***/ "./src/app/feature/modules/worklist/components/tasks-table/tasks-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/feature/modules/worklist/components/tasks-table/tasks-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TasksTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksTableComponent", function() { return TasksTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/throttle-click.directive */ "./src/app/shared/directives/throttle-click.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function TasksTableComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TasksTableComponent_ng_template_2_Template_input_input_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.filterGlobal($event.target.value, "contains"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("throttleClick", function TasksTableComponent_ng_template_2_Template_button_throttleClick_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "WORKLIST.TABLE_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "WORKLIST.SEARCH_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "WORKLIST.REFRESH_BUTTON"));
} }
function TasksTableComponent_ng_template_3_th_3_p_sortIcon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-sortIcon", 16);
} if (rf & 2) {
    const col_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", col_r9.field);
} }
function TasksTableComponent_ng_template_3_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksTableComponent_ng_template_3_th_3_p_sortIcon_2_Template, 1, 1, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", col_r9.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pSortableColumn", col_r9.isSortable ? col_r9.field : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r9.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r9.isSortable);
} }
function TasksTableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksTableComponent_ng_template_3_th_3_Template, 3, 5, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cols);
} }
function TasksTableComponent_ng_template_4_td_3_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TasksTableComponent_ng_template_4_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksTableComponent_ng_template_4_td_3_span_1_span_1_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r12[col_r18.field]);
} }
function TasksTableComponent_ng_template_4_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, task_r12[col_r18.field], "dd.MM.yyyy HH:mm:ss"), " ");
} }
function TasksTableComponent_ng_template_4_td_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r12[col_r18.field], " ");
} }
function TasksTableComponent_ng_template_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksTableComponent_ng_template_4_td_3_span_1_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksTableComponent_ng_template_4_td_3_span_2_Template, 3, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksTableComponent_ng_template_4_td_3_span_3_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", col_r18.width)("text-align", col_r18.align);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tagged-cell", col_r18.field === "isNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", col_r18.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "isNew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "timeCreated");
} }
function TasksTableComponent_ng_template_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksTableComponent_ng_template_4_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.onAccept(task_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "WORKLIST.ACCEPT_BUTTON"));
} }
function TasksTableComponent_ng_template_4_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksTableComponent_ng_template_4_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onDetails(task_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "WORKLIST.DETAILS_BUTTON"));
} }
function TasksTableComponent_ng_template_4_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksTableComponent_ng_template_4_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const task_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onRelinquish(task_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "WORKLIST.RELINQUISH_BUTTON"));
} }
function TasksTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksTableComponent_ng_template_4_td_3_Template, 4, 9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TasksTableComponent_ng_template_4_button_5_Template, 2, 3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TasksTableComponent_ng_template_4_button_6_Template, 2, 3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TasksTableComponent_ng_template_4_button_7_Template, 3, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r12 = ctx.$implicit;
    const i_r13 = ctx.rowIndex;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r12.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r12.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r12.isNew);
} }
function TasksTableComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "WORKLIST.TOTAL"), ": ", _r0.totalRecords, "");
} }
const _c0 = function () { return [10, 25, 50, 100]; };
const _c1 = function () { return { minWidth: "1024px" }; };
class TasksTableComponent {
    /** @ignore */
    constructor(_i18n) {
        this._i18n = _i18n;
        this.items = [];
        this.loading = false;
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.details = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.relinquish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cols = [
            { field: 'isNew', header: '', width: '60px', align: 'center', isSortable: true },
            // tslint:disable-next-line:max-line-length
            { field: 'priority', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.PRIORITY'), width: '130px', align: 'right', isSortable: true },
            { field: 'subject', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.SUBJECT'), isSortable: true },
            { field: 'message', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.MESSAGE'), isSortable: true },
            { field: 'role', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.ROLE'), isSortable: true },
            // tslint:disable-next-line:max-line-length
            { field: 'timeCreated', header: this._i18n.instant('WORKLIST.TABLE_HEADERS.TIME_CREATED'), width: '160px', align: 'center', isSortable: true }
        ];
        this.filterCols = ['priority', 'subject', 'message', 'role', 'timeCreated'];
    }
    onAccept(task) {
        this.accept.emit(task);
    }
    onRelinquish(task) {
        this.relinquish.emit(task);
    }
    onDetails(task) {
        this.details.emit(task);
    }
    onRefresh() {
        this.refresh.emit();
    }
}
TasksTableComponent.ɵfac = function TasksTableComponent_Factory(t) { return new (t || TasksTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TasksTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksTableComponent, selectors: [["app-tasks-table"]], inputs: { items: "items", loading: "loading" }, outputs: { accept: "accept", details: "details", refresh: "refresh", relinquish: "relinquish" }, decls: 6, vars: 11, consts: [["dataKey", "id", "sortField", "timeCreated", "styleClass", "p-datatable-sm p-datatable-gridlines", 3, "loading", "globalFilterFields", "paginator", "rows", "rowsPerPageOptions", "value", "scrollable", "tableStyle", "sortOrder"], ["table", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "paginatorleft"], [1, "table-header"], [1, "p-input-icon-left", 2, "margin-left", "16px", "width", "40%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", 2, "width", "100%", 3, "placeholder", "input"], ["pButton", "", "pRipple", "", "icon", "pi pi-refresh", 1, "is-pulled-right", "no-label-mobile", 3, "label", "throttleClick"], [2, "width", "60px"], [3, "width", "pSortableColumn", 4, "ngFor", "ngForOf"], [2, "width", "85px"], [3, "pSortableColumn"], [3, "field", 4, "ngIf"], [3, "field"], [2, "width", "60px", "text-align", "right"], [3, "width", "text-align", "tagged-cell", "ngSwitch", 4, "ngFor", "ngForOf"], [1, "button-cell", 2, "width", "85px", "vertical-align", "middle"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-check", "iconPos", "left", "class", "button is-success", 3, "title", "click", 4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-search", "iconPos", "left", "style", "margin-right: 8px", 3, "title", "click", 4, "ngIf"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-minus-circle", "iconPos", "left", "class", "p-button-danger", 3, "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "tag is-info is-light", 4, "ngIf"], [1, "tag", "is-info", "is-light"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-check", "iconPos", "left", 1, "button", "is-success", 3, "title", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-search", "iconPos", "left", 2, "margin-right", "8px", 3, "title", "click"], ["type", "button", "pButton", "", "pRipple", "", "icon", "pi pi-minus-circle", "iconPos", "left", 1, "p-button-danger", 3, "title", "click"], [1, "fa", "fa-copy"], [1, "total"]], template: function TasksTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksTableComponent_ng_template_2_Template, 9, 9, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksTableComponent_ng_template_3_Template, 5, 1, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TasksTableComponent_ng_template_4_Template, 8, 5, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TasksTableComponent_ng_template_5_Template, 3, 4, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("globalFilterFields", ctx.filterCols)("paginator", true)("rows", 25)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("value", ctx.items)("scrollable", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("sortOrder", 0 - 1);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_5__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_6__["Ripple"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_7__["ThrottleClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["SortableColumn"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["SortIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbW9kdWxlcy93b3JrbGlzdC9jb21wb25lbnRzL3Rhc2tzLXRhYmxlL3Rhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks-table',
                templateUrl: './tasks-table.component.html',
                styleUrls: ['./tasks-table.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], details: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], relinquish: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/feature/modules/worklist/containers/task-modal/task-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/feature/modules/worklist/containers/task-modal/task-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TaskModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModalComponent", function() { return TaskModalComponent; });
/* harmony import */ var lodash_es_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/modal-base/modal-base.component */ "./src/app/shared/components/modal-base/modal-base.component.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _worklist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../worklist.service */ "./src/app/feature/modules/worklist/worklist.service.ts");
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/blockui */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-blockui.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
/* harmony import */ var _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/directives/throttle-click.directive */ "./src/app/shared/directives/throttle-click.directive.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/directives/handle-link.directive */ "./src/app/shared/directives/handle-link.directive.ts");
/* harmony import */ var _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/pipes/get.pipe */ "./src/app/shared/pipes/get.pipe.ts");

















function TaskModalComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "TASK_MODAL.TIME_CREATED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 4, ctx_r0.task == null ? null : ctx_r0.task.timeCreated, "dd.MM.yyyy HH:mm:ss"), " ");
} }
function TaskModalComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "TASK_MODAL.ROLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.task == null ? null : ctx_r1.task.role, " ");
} }
function TaskModalComponent_div_6_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
} }
function TaskModalComponent_div_6_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 23);
} }
function TaskModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TaskModalComponent_div_6_i_6_Template, 1, 0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TaskModalComponent_div_6_i_7_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 15, "TASK_MODAL.PRIORITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, "TASK_MODAL.PRIORITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-danger", ctx_r2.task && ctx_r2.task.priority === 1)("is-warning", ctx_r2.task && ctx_r2.task.priority === 2)("is-success", ctx_r2.task && ctx_r2.task.priority === 3)("is-primary", ctx_r2.task && ctx_r2.task.priority === 4)("is-info", ctx_r2.task && ctx_r2.task.priority < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.priority) <= 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.priority) > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.task == null ? null : ctx_r2.task.priority, " ");
} }
function TaskModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "markdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r3.task == null ? null : ctx_r3.task.subject);
} }
function TaskModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Request Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "markdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r4.task == null ? null : ctx_r4.task.message);
} }
function TaskModalComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TaskModalComponent_div_9_div_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ((ctx_r13.task == null ? null : ctx_r13.task.formFields)[field_r9.key] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", field_r9.key)("ngModel", ctx_r10.task == null ? null : ctx_r10.task.formFields[field_r9.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", field_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r9.key);
} }
function TaskModalComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", field_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", field_r9.key, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", field_r9.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](field_r9.value);
} }
function TaskModalComponent_div_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", field_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", field_r9.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", field_r9.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", field_r9.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return ["link", "img"]; };
const _c1 = function () { return ["link"]; };
const _c2 = function () { return ["img"]; };
function TaskModalComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskModalComponent_div_9_div_1_Template, 4, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TaskModalComponent_div_9_div_3_Template, 5, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TaskModalComponent_div_9_div_5_Template, 6, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "get");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", field_r9.key === "$$$Handler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0).includes(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, ctx_r5.formFields == null ? null : ctx_r5.formFields.$$$Handler, field_r9.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1).includes(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 7, ctx_r5.formFields == null ? null : ctx_r5.formFields.$$$Handler, field_r9.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2).includes(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 10, ctx_r5.formFields == null ? null : ctx_r5.formFields.$$$Handler, field_r9.key)));
} }
function TaskModalComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("throttleClick", function TaskModalComponent_button_12_Template_button_throttleClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const action_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.performAction(action_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r19 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.loading)("label", action_r19);
} }
class TaskModalComponent extends _shared_components_modal_base_modal_base_component__WEBPACK_IMPORTED_MODULE_2__["ModalBaseComponent"] {
    /** @ignore */
    constructor(_config, _el, _i18n, _messageService, _ref, _worklistService) {
        super(_config, _ref);
        this._config = _config;
        this._el = _el;
        this._i18n = _i18n;
        this._messageService = _messageService;
        this._ref = _ref;
        this._worklistService = _worklistService;
        this.formFields = null;
        this.loading = true;
        this.placeholder = 'assets/images/placeholder.jpg';
        this.task = null;
    }
    ngOnInit() {
        this.loading = true;
        const id = this._config.data.id;
        this._worklistService.getTask(id)
            .subscribe(task => {
            this.task = task;
            this.formFields = Object.assign({}, task.formFields);
            this.loading = false;
        }, (err) => {
            const detail = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_0__["default"])(err, 'error.summary', '');
            this._messageService.add({ severity: 'error', summary: this._i18n.instant('TASK_MODAL.LOADING_ERROR'), detail });
            console.error(err);
            this.closeModal();
            this.loading = false;
        });
    }
    getBlockableElement() {
        return this._el.nativeElement.parentElement.parentElement;
    }
    performAction(action) {
        this.loading = true;
        const task = Object.assign({}, this.task);
        task.action = action;
        if (task.formFields && task.formFields.$$$Handler) {
            task.formFields.$$$Handler = JSON.stringify(task.formFields.$$$Handler);
        }
        this._worklistService.saveTask(task)
            .subscribe(() => {
            setTimeout(() => {
                if (action !== '$Save') {
                    this._messageService.add({
                        severity: 'success',
                        summary: this._i18n.instant('TASK_MODAL.SUCCESS_MESSAGE'),
                        detail: this._i18n.instant('TASK_MODAL.ACTION_COMPLETE', { action })
                    });
                }
                else {
                    this._messageService.add({ severity: 'success', summary: this._i18n.instant('TASK_MODAL.SAVING_COMPLETE') });
                }
                this.closeModal(action);
                this.loading = false;
            }, 300);
        }, (err) => {
            const detail = Object(lodash_es_get__WEBPACK_IMPORTED_MODULE_0__["default"])(err, 'error.summary', '');
            this._messageService.add({ severity: 'error', summary: this._i18n.instant('TASK_MODAL.SAVING_ERROR'), detail });
            console.error(err);
            this.loading = false;
        });
    }
    closeModal(action = '') {
        this._ref.close(action);
    }
}
TaskModalComponent.ɵfac = function TaskModalComponent_Factory(t) { return new (t || TaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_worklist_service__WEBPACK_IMPORTED_MODULE_6__["WorklistService"])); };
TaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskModalComponent, selectors: [["app-task-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 19, consts: [[3, "target", "blocked"], [1, "pi", "pi-spin", "pi-spinner", 2, "font-size", "2rem"], [1, "columns", "is-multiline", "p-dialog-content", 2, "max-height", "80vh", "overflow", "auto", "padding", "0"], [1, "column", "is-full"], ["class", "details-header", "style", "display: inline-block; margin-right: 32px", 3, "title", 4, "ngIf"], ["style", "display: inline-flex;", "class", "details-header tags has-addons", 3, "title", 4, "ngIf"], ["class", "column is-full", 4, "ngIf"], ["class", "column is-full", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "p-dialog-footer", 2, "padding", "0", "text-align", "right"], ["pButton", "", "pRipple", "", "style", "margin-right: 8px", "class", "is-fullwidth-mobile", 3, "disabled", "label", "throttleClick", 4, "ngFor", "ngForOf"], ["pButton", "", "pRipple", "", "icon", "pi pi-save", 1, "button", "is-success", "is-fullwidth-mobile", 2, "margin-right", "8px", 3, "disabled", "label", "throttleClick"], ["pButton", "", "pRipple", "", "icon", "pi pi-times", 1, "p-button-secondary", "is-fullwidth-mobile", 3, "disabled", "label", "click"], [1, "details-header", 2, "display", "inline-block", "margin-right", "32px", 3, "title"], [1, "pi", "pi-clock", 2, "font-weight", "bold", "vertical-align", "middle", "margin-right", "4px"], [2, "font-size", "13px", "font-weight", "600"], [1, "pi", "pi-user", 2, "font-weight", "bold", "vertical-align", "middle", "margin-right", "4px"], [2, "font-size", "12px", "font-weight", "600"], [1, "details-header", "tags", "has-addons", 2, "display", "inline-flex", 3, "title"], [1, "tag", "is-light", 2, "margin-bottom", "0", "font-size", "12px"], [1, "tag", 2, "margin-bottom", "0", "font-size", "12px"], ["class", "pi pi-arrow-up", "style", "font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px", 4, "ngIf"], ["class", "pi pi-arrow-down", "style", "font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px", 4, "ngIf"], [1, "pi", "pi-arrow-up", 2, "font-size", "9px", "font-weight", "bold", "vertical-align", "middle", "margin-right", "4px"], [1, "pi", "pi-arrow-down", 2, "font-size", "9px", "font-weight", "bold", "vertical-align", "middle", "margin-right", "4px"], [1, "label"], [1, "markdown-body", 3, "data"], [1, "column", "is-full", 3, "hidden"], ["class", "field", 4, "ngIf"], [4, "ngIf"], [1, "field"], ["type", "checkbox", 3, "id", "ngModel", "ngModelChange"], [1, "label", 2, "display", "inline", "margin-left", "8px", 3, "for"], [1, "label", 2, "display", "inline", 3, "for"], ["handleLink", "", 3, "href"], [1, "label", 3, "for"], [1, "img-placeholder"], [2, "height", "100px", 3, "src"], ["pButton", "", "pRipple", "", 1, "is-fullwidth-mobile", 2, "margin-right", "8px", 3, "disabled", "label", "throttleClick"]], template: function TaskModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-blockUI", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TaskModalComponent_span_4_Template, 6, 7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TaskModalComponent_span_5_Template, 5, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TaskModalComponent_div_6_Template, 9, 19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TaskModalComponent_div_7_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskModalComponent_div_8_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskModalComponent_div_9_Template, 7, 16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskModalComponent_button_12_Template, 1, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("throttleClick", function TaskModalComponent_Template_button_throttleClick_13_listener() { return ctx.performAction("$Save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskModalComponent_Template_button_click_15_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("target", ctx)("blocked", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.timeCreated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task == null ? null : ctx.task.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.formFields));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.task == null ? null : ctx.task.actions == null ? null : ctx.task.actions.split(","));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 15, "TASK_MODAL.SAVE_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading)("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 17, "TASK_MODAL.CLOSE_BUTTON"));
    } }, directives: [primeng_blockui__WEBPACK_IMPORTED_MODULE_7__["BlockUI"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], primeng_ripple__WEBPACK_IMPORTED_MODULE_10__["Ripple"], _shared_directives_throttle_click_directive__WEBPACK_IMPORTED_MODULE_11__["ThrottleClickDirective"], ngx_markdown__WEBPACK_IMPORTED_MODULE_12__["MarkdownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _shared_directives_handle_link_directive__WEBPACK_IMPORTED_MODULE_14__["HandleLinkDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _shared_pipes_get_pipe__WEBPACK_IMPORTED_MODULE_15__["GetPipe"]], styles: [".priority-top[_ngcontent-%COMP%] {\n  color: #e54343;\n}\n\n.priority-2nd[_ngcontent-%COMP%] {\n  color: #e8912f;\n}\n\n.priority-3rd[_ngcontent-%COMP%] {\n  color: #f5da2c;\n}\n\n.priority-4th[_ngcontent-%COMP%] {\n  color: #268226;\n}\n\n.priority-low[_ngcontent-%COMP%] {\n  color: #2088cd;\n}\n\n.img-placeholder[_ngcontent-%COMP%] {\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url('placeholder.gif');\n}\n\n.details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n@media screen and (min-width: 769px) {\n  .details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9tb2R1bGVzL3dvcmtsaXN0L2NvbnRhaW5lcnMvdGFzay1tb2RhbC90YXNrLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL21vZHVsZXMvd29ya2xpc3QvY29udGFpbmVycy90YXNrLW1vZGFsL3Rhc2stbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpb3JpdHktdG9wIHtcbiAgY29sb3I6ICNlNTQzNDM7XG59XG5cbi5wcmlvcml0eS0ybmQge1xuICBjb2xvcjogI2U4OTEyZjtcbn1cblxuLnByaW9yaXR5LTNyZCB7XG4gIGNvbG9yOiAjZjVkYTJjO1xufVxuXG4ucHJpb3JpdHktNHRoIHtcbiAgY29sb3I6ICMyNjgyMjY7XG59XG5cbi5wcmlvcml0eS1sb3cge1xuICBjb2xvcjogIzIwODhjZDtcbn1cblxuLmltZy1wbGFjZWhvbGRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+YXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5naWYnKTtcbn1cblxuLmRldGFpbHMtaGVhZGVyLFxuLnAtZGlhbG9nLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5kZXRhaWxzLWhlYWRlcixcbiAgLnAtZGlhbG9nLWZvb3RlciBidXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-task-modal',
                templateUrl: './task-modal.component.html',
                styleUrls: ['./task-modal.component.scss']
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogConfig"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }, { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"] }, { type: _worklist_service__WEBPACK_IMPORTED_MODULE_6__["WorklistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/modules/worklist/containers/worklist-container/worklist-container.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/feature/modules/worklist/containers/worklist-container/worklist-container.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WorklistContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklistContainerComponent", function() { return WorklistContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-modal/task-modal.component */ "./src/app/feature/modules/worklist/containers/task-modal/task-modal.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _worklist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../worklist.service */ "./src/app/feature/modules/worklist/worklist.service.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tasks-table/tasks-table.component */ "./src/app/feature/modules/worklist/components/tasks-table/tasks-table.component.ts");









class WorklistContainerComponent {
    constructor(_dialogService, _i18n, _worklistService) {
        this._dialogService = _dialogService;
        this._i18n = _i18n;
        this._worklistService = _worklistService;
        this.loading = true;
        this.tasks = [];
    }
    ngOnInit() {
        this.loadTasks();
    }
    loadTasks() {
        this.loading = true;
        this._worklistService.getTasks()
            .subscribe((tasks) => {
            this.tasks = tasks;
            this.loading = false;
        }, () => {
            this.tasks = [];
            this.loading = false;
        });
    }
    acceptTask(task) {
        task = Object.assign(Object.assign({}, task), { action: '$Accept', formFields: {} });
        this._worklistService.saveTask(task).subscribe(() => this.loadTasks());
    }
    relinquishTask(task) {
        task = Object.assign(Object.assign({}, task), { action: '$Relinquish', formFields: {} });
        this._worklistService.saveTask(task).subscribe(() => this.loadTasks());
    }
    showTaskDetails(task) {
        const ref = this._dialogService.open(_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_2__["TaskModalComponent"], {
            contentStyle: { overflow: 'hidden' },
            data: { id: task.id },
            header: task.subject || this._i18n.instant('TASK_MODAL.TITLE'),
            dismissableMask: false,
            transitionOptions: '350ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            modal: true,
            style: { 'max-width': '1200px' },
            styleClass: 'details-modal'
        });
        ref.onClose.subscribe(action => action ? this.loadTasks() : null);
    }
}
WorklistContainerComponent.ɵfac = function WorklistContainerComponent_Factory(t) { return new (t || WorklistContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_worklist_service__WEBPACK_IMPORTED_MODULE_4__["WorklistService"])); };
WorklistContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorklistContainerComponent, selectors: [["app-worklist-container"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])], decls: 5, vars: 2, consts: [[1, "hero", "fullheight-with-navbar", "main-bg"], ["position", "top-right"], [1, "container", "is-fluid", 2, "padding-top", "32px", "padding-bottom", "32px"], [1, "card", "border-rounded", 2, "padding", "16px", "overflow", "auto"], [3, "loading", "items", "refresh", "accept", "relinquish", "details"]], template: function WorklistContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-tasks-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function WorklistContainerComponent_Template_app_tasks_table_refresh_4_listener() { return ctx.loadTasks(); })("accept", function WorklistContainerComponent_Template_app_tasks_table_accept_4_listener($event) { return ctx.acceptTask($event); })("relinquish", function WorklistContainerComponent_Template_app_tasks_table_relinquish_4_listener($event) { return ctx.relinquishTask($event); })("details", function WorklistContainerComponent_Template_app_tasks_table_details_4_listener($event) { return ctx.showTaskDetails($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("items", ctx.tasks);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"], _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_6__["TasksTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvbW9kdWxlcy93b3JrbGlzdC9jb250YWluZXJzL3dvcmtsaXN0LWNvbnRhaW5lci93b3JrbGlzdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorklistContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-worklist-container',
                templateUrl: './worklist-container.component.html',
                styleUrls: ['./worklist-container.component.scss'],
                providers: [primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]]
            }]
    }], function () { return [{ type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _worklist_service__WEBPACK_IMPORTED_MODULE_4__["WorklistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feature/modules/worklist/worklist.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/feature/modules/worklist/worklist.module.ts ***!
  \*************************************************************/
/*! exports provided: WorklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklistModule", function() { return WorklistModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _containers_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/task-modal/task-modal.component */ "./src/app/feature/modules/worklist/containers/task-modal/task-modal.component.ts");
/* harmony import */ var _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tasks-table/tasks-table.component */ "./src/app/feature/modules/worklist/components/tasks-table/tasks-table.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/modules/vendor.module */ "./src/app/shared/modules/vendor.module.ts");
/* harmony import */ var _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/worklist-container/worklist-container.component */ "./src/app/feature/modules/worklist/containers/worklist-container/worklist-container.component.ts");
/* harmony import */ var _worklist_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./worklist.routing */ "./src/app/feature/modules/worklist/worklist.routing.ts");











class WorklistModule {
}
WorklistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WorklistModule });
WorklistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WorklistModule_Factory(t) { return new (t || WorklistModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_7__["VendorModule"],
            _worklist_routing__WEBPACK_IMPORTED_MODULE_9__["WorklistRouting"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorklistModule, { declarations: [_containers_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_4__["TaskModalComponent"],
        _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__["TasksTableComponent"],
        _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_8__["WorklistContainerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_7__["VendorModule"],
        _worklist_routing__WEBPACK_IMPORTED_MODULE_9__["WorklistRouting"]], exports: [_containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_8__["WorklistContainerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorklistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _shared_modules_vendor_module__WEBPACK_IMPORTED_MODULE_7__["VendorModule"],
                    _worklist_routing__WEBPACK_IMPORTED_MODULE_9__["WorklistRouting"]
                ],
                declarations: [
                    _containers_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_4__["TaskModalComponent"],
                    _components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_5__["TasksTableComponent"],
                    _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_8__["WorklistContainerComponent"]
                ],
                exports: [
                    _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_8__["WorklistContainerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/modules/worklist/worklist.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature/modules/worklist/worklist.routing.ts ***!
  \**************************************************************/
/*! exports provided: WorklistRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklistRouting", function() { return WorklistRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/worklist-container/worklist-container.component */ "./src/app/feature/modules/worklist/containers/worklist-container/worklist-container.component.ts");





const routes = [{
        path: '',
        pathMatch: 'full',
        component: _containers_worklist_container_worklist_container_component__WEBPACK_IMPORTED_MODULE_2__["WorklistContainerComponent"]
    }];
class WorklistRouting {
}
WorklistRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorklistRouting });
WorklistRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorklistRouting_Factory(t) { return new (t || WorklistRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorklistRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorklistRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/modules/worklist/worklist.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/feature/modules/worklist/worklist.service.ts ***!
  \**************************************************************/
/*! exports provided: WorklistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorklistService", function() { return WorklistService; });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class WorklistService {
    /**
     * @ignore
     */
    constructor(_http) {
        this._http = _http;
    }
    getTasks() {
        return this._http.get(`${_app_service__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].REST_API_URL}/tasks/${_app_service__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].TASKS_LIMIT}`);
    }
    getTask(id) {
        return this._http.get(`${_app_service__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].REST_API_URL}/task/${id}`);
    }
    saveTask(task) {
        return this._http.post(`${_app_service__WEBPACK_IMPORTED_MODULE_0__["AppConfig"].REST_API_URL}/task/${task.id}`, task);
    }
}
WorklistService.ɵfac = function WorklistService_Factory(t) { return new (t || WorklistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WorklistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WorklistService, factory: WorklistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WorklistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-feature-modules-worklist-worklist-module-es2015.js.map