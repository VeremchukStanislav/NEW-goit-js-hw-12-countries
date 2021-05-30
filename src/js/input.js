import { info, success, error } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


export function warningMessage() {
    const infoError = error({
        text: "Too many matches found. Please enter more unique symbols",
        delay: 1000,
    });
};

export function errorMessage() {
    const infoError = error({
        text: "Wrong country name",
        delay: 1000,
    });
};

export function moreSymbolsMessage() {
    const infoMoreSymbols = info({
        text: "Please enter more unique symbols",
        delay: 1000,
    });
};

export function yeahMessage() {
    const infoYeah = success({
        text: "YEAH, success request",
        delay: 1000,
    });
};

export default { warningMessage, errorMessage, moreSymbolsMessage, yeahMessage };