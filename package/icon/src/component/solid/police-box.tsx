
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `police-box` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=solid police-box}
 * @preview ![police-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgNDY0SDM4NFY4OEMzODQgNzQuNzUgMzczLjI1IDY0IDM2MCA2NEgzNTJWNDhDMzUyIDM5LjEyNSAzNDQuODc1IDMyIDMzNiAzMkgyNDBWMTZDMjQwIDcuMTI1IDIzMi44NzUgMCAyMjQgMFMyMDggNy4xMjUgMjA4IDE2VjMySDExMkMxMDMuMTI1IDMyIDk2IDM5LjEyNSA5NiA0OFY2NEg4OEM3NC43NSA2NCA2NCA3NC43NSA2NCA4OFY0NjRINDhDMzkuMTI1IDQ2NCAzMiA0NzEuMTI1IDMyIDQ4MFY0OTZDMzIgNTA0Ljg3NSAzOS4xMjUgNTEyIDQ4IDUxMkg0MDBDNDA4Ljg3NSA1MTIgNDE2IDUwNC44NzUgNDE2IDQ5NlY0ODBDNDE2IDQ3MS4xMjUgNDA4Ljg3NSA0NjQgNDAwIDQ2NFpNMTI4IDEzNkMxMjggMTMxLjYyNSAxMzEuNjI1IDEyOCAxMzYgMTI4SDE2MFYxNjBIMTI4VjEzNlpNMTI4IDE3NkgxNjBWMjA4SDEzNkMxMzEuNjI1IDIwOCAxMjggMjA0LjM3NSAxMjggMjAwVjE3NlpNMjA4IDMxMkMyMDggMzE2LjM3NSAyMDQuMzc1IDMyMCAyMDAgMzIwSDEzNkMxMzEuNjI1IDMyMCAxMjggMzE2LjM3NSAxMjggMzEyVjI0OEMxMjggMjQzLjYyNSAxMzEuNjI1IDI0MCAxMzYgMjQwSDIwMEMyMDQuMzc1IDI0MCAyMDggMjQzLjYyNSAyMDggMjQ4VjMxMlpNMjA4IDIwMEMyMDggMjA0LjM3NSAyMDQuMzc1IDIwOCAyMDAgMjA4SDE3NlYxNzZIMjA4VjIwMFpNMjA4IDE2MEgxNzZWMTI4SDIwMEMyMDQuMzc1IDEyOCAyMDggMTMxLjYyNSAyMDggMTM2VjE2MFpNMjcyIDIwOEgyNDhDMjQzLjYyNSAyMDggMjQwIDIwNC4zNzUgMjQwIDIwMFYxNzZIMjcyVjIwOFpNMjcyIDE2MEgyNDBWMTM2QzI0MCAxMzEuNjI1IDI0My42MjUgMTI4IDI0OCAxMjhIMjcyVjE2MFpNMzIwIDIwMEMzMjAgMjA0LjM3NSAzMTYuMzc1IDIwOCAzMTIgMjA4SDI4OFYxNzZIMzIwVjIwMFpNMzIwIDE2MEgyODhWMTI4SDMxMkMzMTYuMzc1IDEyOCAzMjAgMTMxLjYyNSAzMjAgMTM2VjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PoliceBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 464H384V88C384 74.75 373.25 64 360 64H352V48C352 39.125 344.875 32 336 32H240V16C240 7.125 232.875 0 224 0S208 7.125 208 16V32H112C103.125 32 96 39.125 96 48V64H88C74.75 64 64 74.75 64 88V464H48C39.125 464 32 471.125 32 480V496C32 504.875 39.125 512 48 512H400C408.875 512 416 504.875 416 496V480C416 471.125 408.875 464 400 464ZM128 136C128 131.625 131.625 128 136 128H160V160H128V136ZM128 176H160V208H136C131.625 208 128 204.375 128 200V176ZM208 312C208 316.375 204.375 320 200 320H136C131.625 320 128 316.375 128 312V248C128 243.625 131.625 240 136 240H200C204.375 240 208 243.625 208 248V312ZM208 200C208 204.375 204.375 208 200 208H176V176H208V200ZM208 160H176V128H200C204.375 128 208 131.625 208 136V160ZM272 208H248C243.625 208 240 204.375 240 200V176H272V208ZM272 160H240V136C240 131.625 243.625 128 248 128H272V160ZM320 200C320 204.375 316.375 208 312 208H288V176H320V200ZM320 160H288V128H312C316.375 128 320 131.625 320 136V160Z" />
        </Icon>
    </>
}