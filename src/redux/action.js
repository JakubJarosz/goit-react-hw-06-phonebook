import { createAction } from "@reduxjs/toolkit";

const SAVE = "items/save";
const DELETE = "items/delete";
const REFRESH = 'filter/refresh';

const saveAction = createAction(SAVE);
const deleteAction = createAction(DELETE);
const refreshAction = createAction(REFRESH);

export {SAVE, DELETE, REFRESH, saveAction, deleteAction, refreshAction}