
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paw-claws` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paw-claws?s=regular paw-claws}
 * @preview ![paw-claws](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjU2QzE3NS4yNjUgMjU2IDY0LjAzNiAzNjQuMjUgNjQuMDM2IDQ0Mi43NUM2NC4wMzYgNDg0Ljc1IDk4LjAyOSA1MTIgMTUwLjc3IDUxMkMxOTcuNTExIDUxMiAyMjcuMTMgNDkxLjYyNSAyNTYgNDkxLjYyNUMyODQuOTk1IDQ5MS42MjUgMzE0Ljk4OSA1MTIgMzYxLjIzIDUxMkM0MTMuOTcgNTEyIDQ0Ny45NjQgNDg0Ljc1IDQ0Ny45NjQgNDQyLjc1QzQ0Ny45NjQgMzY0LjI1IDMzNi43MzUgMjU2IDI1NiAyNTZaTTM2MS4yMyA0NjRDMzIzLjQ4NyA0NjQgMjk1LjQ5MyA0NDMuNjI1IDI1NiA0NDMuNjI1QzIxNi43NTcgNDQzLjYyNSAxODkuMDEzIDQ2NCAxNTAuNzcgNDY0QzEzNi4yNzIgNDY0IDExMi4wMjcgNDYxLjI1IDExMi4wMjcgNDQyLjc1QzExMi4wMjcgMzk0Ljg3NSAxOTguMTM2IDMwNCAyNTYgMzA0UzM5OS45NzMgMzk1IDM5OS45NzMgNDQyLjc1QzM5OS45NzMgNDYxLjI1IDM3NS43MjggNDY0IDM2MS4yMyA0NjRaTTQ5My40NTYgMTkwLjM3NUw0NDcuOTY0IDEyOFYxOTVDNDI4LjA5MyAyMDEuNSA0MTAuNDcxIDIxOS4zNzUgNDAzLjIyMiAyNDMuMzc1QzM5Mi44NDkgMjc4LjAwMSA0MDcuOTcyIDMxMS43NSA0MzcuMDkxIDMxOC43NUM0NjcuMzM2IDMyNi4wMDEgNDk4LjcwNSAzMDEuODc1IDUwOC43MDMgMjY4LjYyNUM1MTcuNTc2IDIzOS4xMjUgNTA3LjIwMyAyMDkuMTI1IDQ5My40NTYgMTkwLjM3NVpNMzE4LjQ4OCAyMjIuNjI1QzM1OC44NTYgMjMzLjI1IDM4OC4zNSAxODYuNzUgMzk1Ljk3NCAxNTguNzVDNDA0LjQ3MiAxMjcuNzUgMzk4Ljk3MyA5Ny43NSAzODMuOTc2IDgwTDMxOS45ODggMFY3NUMzMDMuOTkxIDg2LjI1IDI5MC40OTQgMTA1LjM3NSAyODMuOTk1IDEyOS4yNUMyNzIuMTIyIDE3Mi42MjUgMjg3LjYxOSAyMTQuNSAzMTguNDg4IDIyMi42MjVaTTEwOC43NzggMjQzLjM3NUMxMDEuNTI5IDIxOS4zNzUgODMuOTA3IDIwMS41IDY0LjAzNiAxOTQuODc1VjEyOEwxOC41NDQgMTkwLjM3NUM0Ljc5NyAyMDkuMTI1IC01LjU3NiAyMzkuMTI1IDMuMjk3IDI2OC42MjVDMTMuMjk1IDMwMS44NzUgNDQuNjY0IDMyNi4wMDEgNzQuOTA5IDMxOC43NUMxMDQuMDI4IDMxMS43NSAxMTkuMTUxIDI3OC4wMDEgMTA4Ljc3OCAyNDMuMzc1Wk0xOTMuNTEyIDIyMi42MjVDMjI0LjM4MSAyMTQuNSAyMzkuODc4IDE3Mi42MjUgMjI4LjAwNSAxMjkuMjVDMjIxLjUwNiAxMDUuMzc1IDIwOC4wMDkgODYuMjUgMTkyLjAxMiA3NVYwTDEyOC4wMjQgODBDMTEzLjAyNyA5Ny43NSAxMDcuNTI4IDEyNy43NSAxMTYuMDI2IDE1OC43NUMxMjMuNjUgMTg2Ljc1IDE1My4xNDQgMjMzLjI1IDE5My41MTIgMjIyLjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PawClaws(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 256C175.265 256 64.036 364.25 64.036 442.75C64.036 484.75 98.029 512 150.77 512C197.511 512 227.13 491.625 256 491.625C284.995 491.625 314.989 512 361.23 512C413.97 512 447.964 484.75 447.964 442.75C447.964 364.25 336.735 256 256 256ZM361.23 464C323.487 464 295.493 443.625 256 443.625C216.757 443.625 189.013 464 150.77 464C136.272 464 112.027 461.25 112.027 442.75C112.027 394.875 198.136 304 256 304S399.973 395 399.973 442.75C399.973 461.25 375.728 464 361.23 464ZM493.456 190.375L447.964 128V195C428.093 201.5 410.471 219.375 403.222 243.375C392.849 278.001 407.972 311.75 437.091 318.75C467.336 326.001 498.705 301.875 508.703 268.625C517.576 239.125 507.203 209.125 493.456 190.375ZM318.488 222.625C358.856 233.25 388.35 186.75 395.974 158.75C404.472 127.75 398.973 97.75 383.976 80L319.988 0V75C303.991 86.25 290.494 105.375 283.995 129.25C272.122 172.625 287.619 214.5 318.488 222.625ZM108.778 243.375C101.529 219.375 83.907 201.5 64.036 194.875V128L18.544 190.375C4.797 209.125 -5.576 239.125 3.297 268.625C13.295 301.875 44.664 326.001 74.909 318.75C104.028 311.75 119.151 278.001 108.778 243.375ZM193.512 222.625C224.381 214.5 239.878 172.625 228.005 129.25C221.506 105.375 208.009 86.25 192.012 75V0L128.024 80C113.027 97.75 107.528 127.75 116.026 158.75C123.65 186.75 153.144 233.25 193.512 222.625Z" />
        </Icon>
    </>
}