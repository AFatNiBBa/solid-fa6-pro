
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `globe-snow` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/globe-snow?s=solid globe-snow}
 * @preview ![globe-snow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDE2SDY0TDE2LjYyNSA0ODcuMTI1QzkuNSA0OTcuNzUgMTcuMTI1IDUxMiAyOS44NzUgNTEySDQxOC4xMjVDNDMwLjg3NSA1MTIgNDM4LjUgNDk3Ljc1IDQzMS4zNzUgNDg3LjEyNUwzODQgNDE2Wk0xOTIgMzg0VjM1MkgxMzQuMTI1QzExOS44NzUgMzUyIDExMi4xMjUgMzM3IDEyMS4yNSAzMjcuMTI1TDE4Ni43NSAyNTZIMTU2LjYyNUMxNDUuODc1IDI1NiAxNDAuMTI1IDI0NC43NSAxNDYuODc1IDIzNy4yNUwyMTQuMjUgMTY0LjEyNUMyMTkuMjUgMTU4LjYyNSAyMjguNjI1IDE1OC42MjUgMjMzLjYyNSAxNjQuMTI1TDMwMSAyMzcuMjVDMzA3Ljc1IDI0NC43NSAzMDIgMjU2IDI5MS4yNSAyNTZIMjYxLjI1TDMyNi43NSAzMjcuMTI1QzMzNS43NSAzMzcgMzI4IDM1MiAzMTMuNzUgMzUySDI1NlYzODRIMzgwLjEyNUM0MjEuNzUgMzQzLjM3NSA0NDggMjg2Ljg3NSA0NDggMjI0QzQ0OCAxMDAuMjUgMzQ3Ljc1IDAgMjI0IDBTMCAxMDAuMjUgMCAyMjRDMCAyODYuODc1IDI2LjEyNSAzNDMuMzc1IDY3Ljg3NSAzODRIMTkyWk0zMzYgMTYwQzM0NC43NSAxNjAgMzUyIDE2Ny4yNSAzNTIgMTc2UzM0NC43NSAxOTIgMzM2IDE5MlMzMjAgMTg0Ljc1IDMyMCAxNzZTMzI3LjI1IDE2MCAzMzYgMTYwWk0yNDAgNjRDMjQ4Ljc1IDY0IDI1NiA3MS4yNSAyNTYgODBTMjQ4Ljc1IDk2IDI0MCA5NlMyMjQgODguNzUgMjI0IDgwUzIzMS4yNSA2NCAyNDAgNjRaTTgwIDIyNEM4OC43NSAyMjQgOTYgMjMxLjI1IDk2IDI0MFM4OC43NSAyNTYgODAgMjU2UzY0IDI0OC43NSA2NCAyNDBTNzEuMjUgMjI0IDgwIDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GlobeSnow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 416H64L16.625 487.125C9.5 497.75 17.125 512 29.875 512H418.125C430.875 512 438.5 497.75 431.375 487.125L384 416ZM192 384V352H134.125C119.875 352 112.125 337 121.25 327.125L186.75 256H156.625C145.875 256 140.125 244.75 146.875 237.25L214.25 164.125C219.25 158.625 228.625 158.625 233.625 164.125L301 237.25C307.75 244.75 302 256 291.25 256H261.25L326.75 327.125C335.75 337 328 352 313.75 352H256V384H380.125C421.75 343.375 448 286.875 448 224C448 100.25 347.75 0 224 0S0 100.25 0 224C0 286.875 26.125 343.375 67.875 384H192ZM336 160C344.75 160 352 167.25 352 176S344.75 192 336 192S320 184.75 320 176S327.25 160 336 160ZM240 64C248.75 64 256 71.25 256 80S248.75 96 240 96S224 88.75 224 80S231.25 64 240 64ZM80 224C88.75 224 96 231.25 96 240S88.75 256 80 256S64 248.75 64 240S71.25 224 80 224Z" />
        </Icon>
    </>
}