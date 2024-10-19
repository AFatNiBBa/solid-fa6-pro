
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-low` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-low?s=solid volume-low}
 * @preview ![volume-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTIuNTYyIDE4MS45NDJDNDAyLjI4MSAxNzMuNTk4IDM4Ny4xNTYgMTc1LjA2NyAzNzguODEyIDE4NS4zNDhDMzcwLjQwNiAxOTUuNTk4IDM3MS45MDYgMjEwLjcyMyAzODIuMTg4IDIxOS4xMjlDMzkzLjUgMjI4LjM3OSA0MDAgMjQxLjgxNiA0MDAgMjU2LjAwM0M0MDAgMjcwLjE5IDM5My41IDI4My42MjggMzgyLjE4OCAyOTIuODc4QzM3MS45MDYgMzAxLjI4NCAzNzAuNDA2IDMxNi40MDkgMzc4LjgxMiAzMjYuNjU4QzM4My41MzEgMzMyLjQ3MSAzOTAuNDM3IDMzNS40NzEgMzk3LjM3NSAzMzUuNDcxQzQwMi43MTkgMzM1LjQ3MSA0MDguMTI1IDMzMy42OSA0MTIuNTYyIDMzMC4wNjVDNDM1LjA5NCAzMTEuNjI3IDQ0OCAyODQuNjU5IDQ0OCAyNTYuMDAzUzQzNS4wOTQgMjAwLjM3OSA0MTIuNTYyIDE4MS45NDJaTTMwMS4xMDkgMzQuODE5QzI4OS42MDkgMjkuNjMxIDI3Ni4xNTYgMzEuNzI1IDI2Ni43MzQgNDAuMUwxMzEuODQgMTYwLjAwNUg0OEMyMS40OSAxNjAuMDA1IDAgMTgxLjQ5NiAwIDIwOC4wMDRWMzA0LjAwMkMwIDMzMC41MSAyMS40OSAzNTIuMDAyIDQ4IDM1Mi4wMDJIMTMxLjg0TDI2Ni43MzQgNDcxLjkwNkMyNzIuNzE5IDQ3Ny4yMTkgMjgwLjMxMiA0ODAgMjg4IDQ4MEMyOTIuNDM4IDQ4MCAyOTYuOTA2IDQ3OS4wOTQgMzAxLjEwOSA0NzcuMTg4QzMxMi42MDkgNDcyLjAzMSAzMjAgNDYwLjU5NCAzMjAgNDQ4VjY0LjAwNkMzMjAgNTEuNDEyIDMxMi42MDkgMzkuOTc1IDMwMS4xMDkgMzQuODE5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VolumeLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M412.562 181.942C402.281 173.598 387.156 175.067 378.812 185.348C370.406 195.598 371.906 210.723 382.188 219.129C393.5 228.379 400 241.816 400 256.003C400 270.19 393.5 283.628 382.188 292.878C371.906 301.284 370.406 316.409 378.812 326.658C383.531 332.471 390.437 335.471 397.375 335.471C402.719 335.471 408.125 333.69 412.562 330.065C435.094 311.627 448 284.659 448 256.003S435.094 200.379 412.562 181.942ZM301.109 34.819C289.609 29.631 276.156 31.725 266.734 40.1L131.84 160.005H48C21.49 160.005 0 181.496 0 208.004V304.002C0 330.51 21.49 352.002 48 352.002H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.412 312.609 39.975 301.109 34.819Z" />
        </Icon>
    </>
}