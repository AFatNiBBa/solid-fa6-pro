
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-curly` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=regular bracket-curly}
 * @preview ![bracket-curly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDAgMzJIMTIwQzg5LjA3MiAzMiA2NCA1Ny4wNzIgNjQgODhWMTY1LjVDNjQgMTc2LjA2NSA1OS44MDMgMTg2LjE5NyA1Mi4zMzMgMTkzLjY2N0w3IDIzOUMyLjUgMjQzLjUgMCAyNDkuNjI1IDAgMjU2QzAgMjYyLjM3NSAyLjUgMjY4LjUgNyAyNzNMNTIuMzMzIDMxOC4zMzNDNTkuODAzIDMyNS44MDMgNjQgMzM1LjkzNSA2NCAzNDYuNVY0MjRDNjQgNDU0LjkyOCA4OS4wNzIgNDgwIDEyMCA0ODBIMjAwQzIxMy4yNTUgNDgwIDIyNCA0NjkuMjU1IDIyNCA0NTZWNDU2QzIyNCA0NDIuNzQ1IDIxMy4yNTUgNDMyIDIwMCA0MzJIMTIwQzExNS42IDQzMiAxMTIgNDI4LjQgMTEyIDQyNFYzNDYuNUMxMTIgMzIzLjA2MiAxMDIuNjYzIDMwMC41OSA4Ni4wNTMgMjg0LjA1NEw1Ny44NzUgMjU2TDg2LjA1MyAyMjcuOTQ2QzEwMi42NjMgMjExLjQxIDExMiAxODguOTM4IDExMiAxNjUuNVY4OEMxMTIgODMuNiAxMTUuNiA4MCAxMjAgODBIMjAwQzIxMy4yNTUgODAgMjI0IDY5LjI1NSAyMjQgNTZWNTZDMjI0IDQyLjc0NSAyMTMuMjU1IDMyIDIwMCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketCurly(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M200 32H120C89.072 32 64 57.072 64 88V165.5C64 176.065 59.803 186.197 52.333 193.667L7 239C2.5 243.5 0 249.625 0 256C0 262.375 2.5 268.5 7 273L52.333 318.333C59.803 325.803 64 335.935 64 346.5V424C64 454.928 89.072 480 120 480H200C213.255 480 224 469.255 224 456V456C224 442.745 213.255 432 200 432H120C115.6 432 112 428.4 112 424V346.5C112 323.062 102.663 300.59 86.053 284.054L57.875 256L86.053 227.946C102.663 211.41 112 188.938 112 165.5V88C112 83.6 115.6 80 120 80H200C213.255 80 224 69.255 224 56V56C224 42.745 213.255 32 200 32Z" />
        </Icon>
    </>
}