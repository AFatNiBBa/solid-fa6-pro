
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-five` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-five?s=thin dice-five}
 * @preview ![dice-five](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMTI4IDMyMEMxMTAuMzc1IDMyMCA5NiAzMzQuMzc1IDk2IDM1MlMxMTAuMzc1IDM4NCAxMjggMzg0UzE2MCAzNjkuNjI1IDE2MCAzNTJTMTQ1LjYyNSAzMjAgMTI4IDMyMFpNMTI4IDM2OEMxMTkuMTc4IDM2OCAxMTIgMzYwLjgyMiAxMTIgMzUyUzExOS4xNzggMzM2IDEyOCAzMzZTMTQ0IDM0My4xNzggMTQ0IDM1MlMxMzYuODIyIDM2OCAxMjggMzY4Wk0xMjggMTI4QzExMC4zNzUgMTI4IDk2IDE0Mi4zNzUgOTYgMTYwUzExMC4zNzUgMTkyIDEyOCAxOTJTMTYwIDE3Ny42MjUgMTYwIDE2MFMxNDUuNjI1IDEyOCAxMjggMTI4Wk0xMjggMTc2QzExOS4xNzggMTc2IDExMiAxNjguODIyIDExMiAxNjBTMTE5LjE3OCAxNDQgMTI4IDE0NFMxNDQgMTUxLjE3OCAxNDQgMTYwUzEzNi44MjIgMTc2IDEyOCAxNzZaTTIyNCAyMjRDMjA2LjM3NSAyMjQgMTkyIDIzOC4zNzUgMTkyIDI1NlMyMDYuMzc1IDI4OCAyMjQgMjg4UzI1NiAyNzMuNjI1IDI1NiAyNTZTMjQxLjYyNSAyMjQgMjI0IDIyNFpNMjI0IDI3MkMyMTUuMTc4IDI3MiAyMDggMjY0LjgyMiAyMDggMjU2UzIxNS4xNzggMjQwIDIyNCAyNDBTMjQwIDI0Ny4xNzggMjQwIDI1NlMyMzIuODIyIDI3MiAyMjQgMjcyWk0zMjAgMzIwQzMwMi4zNzUgMzIwIDI4OCAzMzQuMzc1IDI4OCAzNTJTMzAyLjM3NSAzODQgMzIwIDM4NFMzNTIgMzY5LjYyNSAzNTIgMzUyUzMzNy42MjUgMzIwIDMyMCAzMjBaTTMyMCAzNjhDMzExLjE3OCAzNjggMzA0IDM2MC44MjIgMzA0IDM1MlMzMTEuMTc4IDMzNiAzMjAgMzM2UzMzNiAzNDMuMTc4IDMzNiAzNTJTMzI4LjgyMiAzNjggMzIwIDM2OFpNMzIwIDEyOEMzMDIuMzc1IDEyOCAyODggMTQyLjM3NSAyODggMTYwUzMwMi4zNzUgMTkyIDMyMCAxOTJTMzUyIDE3Ny42MjUgMzUyIDE2MFMzMzcuNjI1IDEyOCAzMjAgMTI4Wk0zMjAgMTc2QzMxMS4xNzggMTc2IDMwNCAxNjguODIyIDMwNCAxNjBTMzExLjE3OCAxNDQgMzIwIDE0NFMzMzYgMTUxLjE3OCAzMzYgMTYwUzMyOC44MjIgMTc2IDMyMCAxNzZaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceFive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM128 320C110.375 320 96 334.375 96 352S110.375 384 128 384S160 369.625 160 352S145.625 320 128 320ZM128 368C119.178 368 112 360.822 112 352S119.178 336 128 336S144 343.178 144 352S136.822 368 128 368ZM128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM128 176C119.178 176 112 168.822 112 160S119.178 144 128 144S144 151.178 144 160S136.822 176 128 176ZM224 224C206.375 224 192 238.375 192 256S206.375 288 224 288S256 273.625 256 256S241.625 224 224 224ZM224 272C215.178 272 208 264.822 208 256S215.178 240 224 240S240 247.178 240 256S232.822 272 224 272ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320ZM320 368C311.178 368 304 360.822 304 352S311.178 336 320 336S336 343.178 336 352S328.822 368 320 368ZM320 128C302.375 128 288 142.375 288 160S302.375 192 320 192S352 177.625 352 160S337.625 128 320 128ZM320 176C311.178 176 304 168.822 304 160S311.178 144 320 144S336 151.178 336 160S328.822 176 320 176Z " />
        </Icon>
    </>
}