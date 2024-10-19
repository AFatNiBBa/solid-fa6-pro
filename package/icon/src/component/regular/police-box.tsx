
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `police-box` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=regular police-box}
 * @preview ![police-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYgMjAwVjE4MEgxODBWMjE2SDIwMEMyMDguOCAyMTYgMjE2IDIwOC44IDIxNiAyMDBaTTE3MiAxMzZIMTUyQzE0My4yIDEzNiAxMzYgMTQzLjIgMTM2IDE1MlYxNzJIMTcyVjEzNlpNMTUyIDIxNkgxNzJWMTgwSDEzNlYyMDBDMTM2IDIwOC44IDE0My4yIDIxNiAxNTIgMjE2Wk0yMTYgMTUyQzIxNiAxNDMuMiAyMDguOCAxMzYgMjAwIDEzNkgxODBWMTcySDIxNlYxNTJaTTE1MiAzMjBIMjAwQzIwOC44IDMyMCAyMTYgMzEyLjggMjE2IDMwNFYyNTZDMjE2IDI0Ny4yIDIwOC44IDI0MCAyMDAgMjQwSDE1MkMxNDMuMiAyNDAgMTM2IDI0Ny4yIDEzNiAyNTZWMzA0QzEzNiAzMTIuOCAxNDMuMiAzMjAgMTUyIDMyMFpNMzEyIDIwMFYxODBIMjc2VjIxNkgyOTZDMzA0LjggMjE2IDMxMiAyMDguOCAzMTIgMjAwWk0zMTIgMTUyQzMxMiAxNDMuMiAzMDQuOCAxMzYgMjk2IDEzNkgyNzZWMTcySDMxMlYxNTJaTTI0OCAyMTZIMjY4VjE4MEgyMzJWMjAwQzIzMiAyMDguOCAyMzkuMiAyMTYgMjQ4IDIxNlpNMjY4IDEzNkgyNDhDMjM5LjIgMTM2IDIzMiAxNDMuMiAyMzIgMTUyVjE3MkgyNjhWMTM2Wk0zOTIgNDY0SDM4NFY4OEMzODQgNzQuNzQ1IDM3My4yNTUgNjQgMzYwIDY0SDM1MlY0OEMzNTIgMzkuMTYzIDM0NC44MzcgMzIgMzM2IDMySDI0OFYyNEMyNDggMTAuNzQ1IDIzNy4yNTUgMCAyMjQgMEgyMjRDMjEwLjc0NSAwIDIwMCAxMC43NDUgMjAwIDI0VjMySDExMkMxMDMuMTYzIDMyIDk2IDM5LjE2MyA5NiA0OFY2NEg4OEM3NC43NDUgNjQgNjQgNzQuNzQ1IDY0IDg4VjQ2NEg1NkM0Mi43NDUgNDY0IDMyIDQ3NC43NDUgMzIgNDg4VjQ4OEMzMiA1MDEuMjU1IDQyLjc0NSA1MTIgNTYgNTEySDM5MkM0MDUuMjU1IDUxMiA0MTYgNTAxLjI1NSA0MTYgNDg4VjQ4OEM0MTYgNDc0Ljc0NSA0MDUuMjU1IDQ2NCAzOTIgNDY0Wk0zMzYgNDY0SDExMlYxMTJIMzM2VjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PoliceBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M216 200V180H180V216H200C208.8 216 216 208.8 216 200ZM172 136H152C143.2 136 136 143.2 136 152V172H172V136ZM152 216H172V180H136V200C136 208.8 143.2 216 152 216ZM216 152C216 143.2 208.8 136 200 136H180V172H216V152ZM152 320H200C208.8 320 216 312.8 216 304V256C216 247.2 208.8 240 200 240H152C143.2 240 136 247.2 136 256V304C136 312.8 143.2 320 152 320ZM312 200V180H276V216H296C304.8 216 312 208.8 312 200ZM312 152C312 143.2 304.8 136 296 136H276V172H312V152ZM248 216H268V180H232V200C232 208.8 239.2 216 248 216ZM268 136H248C239.2 136 232 143.2 232 152V172H268V136ZM392 464H384V88C384 74.745 373.255 64 360 64H352V48C352 39.163 344.837 32 336 32H248V24C248 10.745 237.255 0 224 0H224C210.745 0 200 10.745 200 24V32H112C103.163 32 96 39.163 96 48V64H88C74.745 64 64 74.745 64 88V464H56C42.745 464 32 474.745 32 488V488C32 501.255 42.745 512 56 512H392C405.255 512 416 501.255 416 488V488C416 474.745 405.255 464 392 464ZM336 464H112V112H336V464Z" />
        </Icon>
    </>
}