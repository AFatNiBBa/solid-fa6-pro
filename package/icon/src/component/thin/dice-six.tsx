
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-six` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-six?s=thin dice-six}
 * @preview ![dice-six](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjkgNDY0IDM4NCA0NjRINjRDMzcuNTMxIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMxIDQ4IDY0IDQ4SDM4NEM0MTAuNDY5IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMTI4IDMyMEMxMTAuMzc1IDMyMCA5NiAzMzQuMzc1IDk2IDM1MlMxMTAuMzc1IDM4NCAxMjggMzg0UzE2MCAzNjkuNjI1IDE2MCAzNTJTMTQ1LjYyNSAzMjAgMTI4IDMyMFpNMTI4IDM2OEMxMTkuMTc2IDM2OCAxMTIgMzYwLjgyMiAxMTIgMzUyUzExOS4xNzYgMzM2IDEyOCAzMzZTMTQ0IDM0My4xNzggMTQ0IDM1MlMxMzYuODI0IDM2OCAxMjggMzY4Wk0xMjggMjI0QzExMC4zNzUgMjI0IDk2IDIzOC4zNzUgOTYgMjU2UzExMC4zNzUgMjg4IDEyOCAyODhTMTYwIDI3My42MjUgMTYwIDI1NlMxNDUuNjI1IDIyNCAxMjggMjI0Wk0xMjggMjcyQzExOS4xNzYgMjcyIDExMiAyNjQuODIyIDExMiAyNTZTMTE5LjE3NiAyNDAgMTI4IDI0MFMxNDQgMjQ3LjE3OCAxNDQgMjU2UzEzNi44MjQgMjcyIDEyOCAyNzJaTTEyOCAxMjhDMTEwLjM3NSAxMjggOTYgMTQyLjM3NSA5NiAxNjBTMTEwLjM3NSAxOTIgMTI4IDE5MlMxNjAgMTc3LjYyNSAxNjAgMTYwUzE0NS42MjUgMTI4IDEyOCAxMjhaTTEyOCAxNzZDMTE5LjE3NiAxNzYgMTEyIDE2OC44MjIgMTEyIDE2MFMxMTkuMTc2IDE0NCAxMjggMTQ0UzE0NCAxNTEuMTc4IDE0NCAxNjBTMTM2LjgyNCAxNzYgMTI4IDE3NlpNMzIwIDMyMEMzMDIuMzc1IDMyMCAyODggMzM0LjM3NSAyODggMzUyUzMwMi4zNzUgMzg0IDMyMCAzODRTMzUyIDM2OS42MjUgMzUyIDM1MlMzMzcuNjI1IDMyMCAzMjAgMzIwWk0zMjAgMzY4QzMxMS4xNzYgMzY4IDMwNCAzNjAuODIyIDMwNCAzNTJTMzExLjE3NiAzMzYgMzIwIDMzNlMzMzYgMzQzLjE3OCAzMzYgMzUyUzMyOC44MjQgMzY4IDMyMCAzNjhaTTMyMCAyMjRDMzAyLjM3NSAyMjQgMjg4IDIzOC4zNzUgMjg4IDI1NlMzMDIuMzc1IDI4OCAzMjAgMjg4UzM1MiAyNzMuNjI1IDM1MiAyNTZTMzM3LjYyNSAyMjQgMzIwIDIyNFpNMzIwIDI3MkMzMTEuMTc2IDI3MiAzMDQgMjY0LjgyMiAzMDQgMjU2UzMxMS4xNzYgMjQwIDMyMCAyNDBTMzM2IDI0Ny4xNzggMzM2IDI1NlMzMjguODI0IDI3MiAzMjAgMjcyWk0zMjAgMTI4QzMwMi4zNzUgMTI4IDI4OCAxNDIuMzc1IDI4OCAxNjBTMzAyLjM3NSAxOTIgMzIwIDE5MlMzNTIgMTc3LjYyNSAzNTIgMTYwUzMzNy42MjUgMTI4IDMyMCAxMjhaTTMyMCAxNzZDMzExLjE3NiAxNzYgMzA0IDE2OC44MjIgMzA0IDE2MFMzMTEuMTc2IDE0NCAzMjAgMTQ0UzMzNiAxNTEuMTc4IDMzNiAxNjBTMzI4LjgyNCAxNzYgMzIwIDE3NlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceSix(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM128 320C110.375 320 96 334.375 96 352S110.375 384 128 384S160 369.625 160 352S145.625 320 128 320ZM128 368C119.176 368 112 360.822 112 352S119.176 336 128 336S144 343.178 144 352S136.824 368 128 368ZM128 224C110.375 224 96 238.375 96 256S110.375 288 128 288S160 273.625 160 256S145.625 224 128 224ZM128 272C119.176 272 112 264.822 112 256S119.176 240 128 240S144 247.178 144 256S136.824 272 128 272ZM128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM128 176C119.176 176 112 168.822 112 160S119.176 144 128 144S144 151.178 144 160S136.824 176 128 176ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320ZM320 368C311.176 368 304 360.822 304 352S311.176 336 320 336S336 343.178 336 352S328.824 368 320 368ZM320 224C302.375 224 288 238.375 288 256S302.375 288 320 288S352 273.625 352 256S337.625 224 320 224ZM320 272C311.176 272 304 264.822 304 256S311.176 240 320 240S336 247.178 336 256S328.824 272 320 272ZM320 128C302.375 128 288 142.375 288 160S302.375 192 320 192S352 177.625 352 160S337.625 128 320 128ZM320 176C311.176 176 304 168.822 304 160S311.176 144 320 144S336 151.178 336 160S328.824 176 320 176Z " />
        </Icon>
    </>
}