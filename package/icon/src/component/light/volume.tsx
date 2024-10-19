
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume?s=light volume}
 * @preview ![volume](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzMuMTA5IDM0LjgxNkMzMjguOTA4IDMyLjkyMiAzMjQuNDQ1IDMyIDMyMC4wMTQgMzJDMzEyLjMxNiAzMiAzMDQuNzE1IDM0Ljc4MyAyOTguNzM0IDQwLjFMMTYzLjg0IDE2MC4wMDRIODBDNTMuNDkgMTYwLjAwNCAzMiAxODEuNDk2IDMyIDIwOC4wMDJWMzA0LjAwMkMzMiAzMzAuNTEgNTMuNDkgMzUyIDgwIDM1MkgxNjMuODRMMjk4LjczNCA0NzEuOTA2QzMwNC43MTkgNDc3LjIxOSAzMTIuMzEyIDQ4MCAzMjAgNDgwQzMyNC40MzggNDgwIDMyOC45MDYgNDc5LjA5NCAzMzMuMTA5IDQ3Ny4xODhDMzQ0LjYwOSA0NzIuMDMxIDM1MiA0NjAuNTk0IDM1MiA0NDhWNjQuMDA2QzM1MiA1MS40MSAzNDQuNjA5IDM5Ljk3MyAzMzMuMTA5IDM0LjgxNlpNMzE5Ljk4IDQ0Ny45NTFMMTg1LjA4NiAzMjguMDQzTDE3NS45OTYgMzE5Ljk2M0g4MEM3MS4xNzggMzE5Ljk2MyA2NCAzMTIuODAzIDY0IDMwNC4wMDJWMjA4LjAwMkM2NCAxOTkuMjAxIDcxLjE3OCAxOTIuMDQxIDgwIDE5Mi4wNDFIMTc1Ljk5NkwxODUuMDg2IDE4My45NjFMMzE5Ljk4IDY0LjA1N0MzMTkuOTg4IDY0LjA0OSAzMTkuOTk2IDY0LjA0NSAzMjAgNjQuMDQxTDMxOS45OCA0NDcuOTUxWk00OTEuMzc1IDk4LjcwM0M0ODQuMDMxIDkzLjc4MSA0NzQuMDk0IDk1Ljc1IDQ2OS4xNzIgMTAzLjA5NFM0NjYuMjE5IDEyMC4zNzUgNDczLjU2MiAxMjUuMjk3QzUxNy42NzIgMTU0LjgyOCA1NDQgMjAzLjcwMyA1NDQgMjU2UzUxNy42NzIgMzU3LjE3MiA0NzMuNTYyIDM4Ni43MDNDNDY2LjIxOSAzOTEuNjI1IDQ2NC4yNSA0MDEuNTYzIDQ2OS4xNzIgNDA4LjkwNkM0NzIuMjY2IDQxMy41MTYgNDc3LjMyOCA0MTYgNDgyLjQ4NCA0MTZDNDg1LjU0NyA0MTYgNDg4LjY0MSA0MTUuMTI1IDQ5MS4zNzUgNDEzLjI5N0M1NDQuMzU5IDM3Ny43OTcgNTc2IDMxOSA1NzYgMjU2UzU0NC4zNTkgMTM0LjIwMyA0OTEuMzc1IDk4LjcwM1pNNDM4LjQzOCAxNzguNzAzQzQzMS4xMDkgMTczLjc4MSA0MjEuMTU2IDE3NS43NSA0MTYuMjM0IDE4My4wOTRTNDEzLjI4MSAyMDAuMzc1IDQyMC42MjUgMjA1LjI5N0M0MzcuNzY2IDIxNi43NjYgNDQ4IDIzNS43MzQgNDQ4IDI1NlM0MzcuNzY2IDI5NS4yMzQgNDIwLjYyNSAzMDYuNzAzQzQxMy4yODEgMzExLjYyNSA0MTEuMzEyIDMyMS41NjMgNDE2LjIzNCAzMjguOTA2QzQxOS4zMjggMzMzLjUxNiA0MjQuMzkxIDMzNiA0MjkuNTQ3IDMzNkM0MzIuNjA5IDMzNiA0MzUuNzAzIDMzNS4xMjUgNDM4LjQzNyAzMzMuMjk3QzQ2NC40NjkgMzE1Ljg1OSA0ODAgMjg2Ljk2OSA0ODAgMjU2UzQ2NC40NjkgMTk2LjE0MSA0MzguNDM4IDE3OC43MDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Volume(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M333.109 34.816C328.908 32.922 324.445 32 320.014 32C312.316 32 304.715 34.783 298.734 40.1L163.84 160.004H80C53.49 160.004 32 181.496 32 208.002V304.002C32 330.51 53.49 352 80 352H163.84L298.734 471.906C304.719 477.219 312.312 480 320 480C324.438 480 328.906 479.094 333.109 477.188C344.609 472.031 352 460.594 352 448V64.006C352 51.41 344.609 39.973 333.109 34.816ZM319.98 447.951L185.086 328.043L175.996 319.963H80C71.178 319.963 64 312.803 64 304.002V208.002C64 199.201 71.178 192.041 80 192.041H175.996L185.086 183.961L319.98 64.057C319.988 64.049 319.996 64.045 320 64.041L319.98 447.951ZM491.375 98.703C484.031 93.781 474.094 95.75 469.172 103.094S466.219 120.375 473.562 125.297C517.672 154.828 544 203.703 544 256S517.672 357.172 473.562 386.703C466.219 391.625 464.25 401.563 469.172 408.906C472.266 413.516 477.328 416 482.484 416C485.547 416 488.641 415.125 491.375 413.297C544.359 377.797 576 319 576 256S544.359 134.203 491.375 98.703ZM438.438 178.703C431.109 173.781 421.156 175.75 416.234 183.094S413.281 200.375 420.625 205.297C437.766 216.766 448 235.734 448 256S437.766 295.234 420.625 306.703C413.281 311.625 411.312 321.563 416.234 328.906C419.328 333.516 424.391 336 429.547 336C432.609 336 435.703 335.125 438.437 333.297C464.469 315.859 480 286.969 480 256S464.469 196.141 438.438 178.703Z" />
        </Icon>
    </>
}