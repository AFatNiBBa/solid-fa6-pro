
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hamsa` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=light hamsa}
 * @preview ![hamsa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzI4QzI0Mi43NSAzMjggMjMyIDMzOC43NSAyMzIgMzUyUzI0Mi43NSAzNzYgMjU2IDM3NlMyODAgMzY1LjI1IDI4MCAzNTJTMjY5LjI1IDMyOCAyNTYgMzI4Wk00NTIgMjI0SDQxNlY5NkM0MTYgNjAuNzUgMzg3LjI1IDMyIDM1MiAzMkMzMzguODc1IDMyIDMyNi42MjUgMzYgMzE2LjM3NSA0Mi44NzVDMzA3LjYyNSAxNy44NzUgMjgzLjg3NSAwIDI1NiAwQzIyOC4xMjUgMCAyMDQuMzc1IDE3Ljg3NSAxOTUuNjI1IDQyLjg3NUMxODUuMTI1IDM1Ljc1IDE3Mi42MjUgMzIgMTYwIDMyQzEyNC43NSAzMiA5NiA2MC43NSA5NiA5NlYyMjRINjBDMTkgMjI0IDAgMjYxLjI1IDAgMjg4QzAgMzAzLjEyNSA1IDMxOC4xMjUgMTQuNzUgMzMwTDEwNC42MjUgNDQwLjEyNUMxNDEuODc1IDQ4NS43NSAxOTcuMTI1IDUxMiAyNTYgNTEyUzM3MC4xMjUgNDg1Ljc1IDQwNy4zNzUgNDQwLjEyNUw0OTcuMjUgMzMwLjEyNUM1MDcgMzE4LjEyNSA1MTIgMzAzLjI1IDUxMiAyODhDNTEyIDI2MS4yNSA0OTIuNzUgMjI0IDQ1MiAyMjRaTTQ3Mi4zNzUgMzA5Ljg3NUwzODUgNDE2Ljg3NUMzNjAuMjUgNDQ3LjI1IDMyNi4zNzUgNDY5LjUgMjg4IDQ3Ni44NzVDMjI3LjEyNSA0ODguNjI1IDE2Ny4yNSA0NjYuMjUgMTI5LjM3NSA0MTkuODc1TDM5LjYyNSAzMDkuODc1QzMyIDMwMC41IDMwIDI4NyAzNC4zNzUgMjc1LjI1QzM4Ljc1IDI2My41IDQ4Ljg3NSAyNTYgNjAgMjU2SDEyOEwxMjggOThDMTI4IDgyLjAyMyAxMzguODE3IDY3LjEwOSAxNTQuNTc3IDY0LjQ4N0MxNzQuNTQ1IDYxLjE2NSAxOTIgNzYuNjUgMTkyIDk2VjIwOEMxOTIgMjE2LjggMTk5LjIgMjI0IDIwOCAyMjRIMjA4QzIxNi44IDIyNCAyMjQgMjE2LjggMjI0IDIwOEwyMjQgNjZDMjI0IDUwLjAyMyAyMzQuODE3IDM1LjEwOSAyNTAuNTc3IDMyLjQ4N0MyNzAuNTQ1IDI5LjE2NSAyODggNDQuNjUgMjg4IDY0VjIwOEMyODggMjE2LjggMjk1LjIgMjI0IDMwNCAyMjRIMzA0QzMxMi44IDIyNCAzMjAgMjE2LjggMzIwIDIwOEwzMjAgOThDMzIwIDgyLjAyMyAzMzAuODE3IDY3LjEwOSAzNDYuNTc3IDY0LjQ4N0MzNjYuNTQ1IDYxLjE2NSAzODQgNzYuNjUgMzg0IDk2VjI1Nkg0NTJDNDYzLjEyNSAyNTYgNDczLjI1IDI2My41IDQ3Ny42MjUgMjc1LjI1QzQ4Mi4xMjUgMjg3IDQ4MCAzMDAuNSA0NzIuMzc1IDMwOS44NzVaTTI1NiAyNzJDMjM3LjI1IDI3MiAxOTggMjczLjg3NSAxNDMuODc1IDM0MS44NzVDMTM5LjI1IDM0Ny42MjUgMTM5LjI1IDM1Ni4zNzUgMTQzLjg3NSAzNjIuMTI1QzE5OC4xMjUgNDMwLjI1IDIzNy4yNSA0MzIgMjU2IDQzMlMzMTQgNDMwLjEyNSAzNjguMTI1IDM2Mi4xMjVDMzcyLjc1IDM1Ni4zNzUgMzcyLjc1IDM0Ny42MjUgMzY4LjEyNSAzNDEuODc1QzMxMy44NzUgMjczLjc1IDI3NC43NSAyNzIgMjU2IDI3MlpNMjU2IDQwMEMyMTEuODc1IDQwMCAxNzYgMzUyIDE3NiAzNTJTMjExLjg3NSAzMDQgMjU2IDMwNFMzMzYgMzUyIDMzNiAzNTJTMzAwLjEyNSA0MDAgMjU2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Hamsa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 328C242.75 328 232 338.75 232 352S242.75 376 256 376S280 365.25 280 352S269.25 328 256 328ZM452 224H416V96C416 60.75 387.25 32 352 32C338.875 32 326.625 36 316.375 42.875C307.625 17.875 283.875 0 256 0C228.125 0 204.375 17.875 195.625 42.875C185.125 35.75 172.625 32 160 32C124.75 32 96 60.75 96 96V224H60C19 224 0 261.25 0 288C0 303.125 5 318.125 14.75 330L104.625 440.125C141.875 485.75 197.125 512 256 512S370.125 485.75 407.375 440.125L497.25 330.125C507 318.125 512 303.25 512 288C512 261.25 492.75 224 452 224ZM472.375 309.875L385 416.875C360.25 447.25 326.375 469.5 288 476.875C227.125 488.625 167.25 466.25 129.375 419.875L39.625 309.875C32 300.5 30 287 34.375 275.25C38.75 263.5 48.875 256 60 256H128L128 98C128 82.023 138.817 67.109 154.577 64.487C174.545 61.165 192 76.65 192 96V208C192 216.8 199.2 224 208 224H208C216.8 224 224 216.8 224 208L224 66C224 50.023 234.817 35.109 250.577 32.487C270.545 29.165 288 44.65 288 64V208C288 216.8 295.2 224 304 224H304C312.8 224 320 216.8 320 208L320 98C320 82.023 330.817 67.109 346.577 64.487C366.545 61.165 384 76.65 384 96V256H452C463.125 256 473.25 263.5 477.625 275.25C482.125 287 480 300.5 472.375 309.875ZM256 272C237.25 272 198 273.875 143.875 341.875C139.25 347.625 139.25 356.375 143.875 362.125C198.125 430.25 237.25 432 256 432S314 430.125 368.125 362.125C372.75 356.375 372.75 347.625 368.125 341.875C313.875 273.75 274.75 272 256 272ZM256 400C211.875 400 176 352 176 352S211.875 304 256 304S336 352 336 352S300.125 400 256 400Z" />
        </Icon>
    </>
}