
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-chart-column` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-column?s=thin file-chart-column}
 * @preview ![file-chart-column](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMTEyIDM1Mkg4MEM3MS4xNjQgMzUyIDY0IDM1OS4xNjQgNjQgMzY4VjQzMkM2NCA0NDAuODM2IDcxLjE2NCA0NDggODAgNDQ4SDExMkMxMjAuODM4IDQ0OCAxMjggNDQwLjgzNiAxMjggNDMyVjM2OEMxMjggMzU5LjE2NCAxMjAuODM4IDM1MiAxMTIgMzUyWk0xMTIgNDMySDgwVjM2OEgxMTJWNDMyWk0yMDggMjI0SDE3NkMxNjcuMTY0IDIyNCAxNjAgMjMxLjE2NCAxNjAgMjQwVjQzMkMxNjAgNDQwLjgzNiAxNjcuMTY0IDQ0OCAxNzYgNDQ4SDIwOEMyMTYuODM4IDQ0OCAyMjQgNDQwLjgzNiAyMjQgNDMyVjI0MEMyMjQgMjMxLjE2NCAyMTYuODM4IDIyNCAyMDggMjI0Wk0yMDggNDMySDE3NlYyNDBIMjA4VjQzMlpNMjcyIDQ0OEgzMDRDMzEyLjgzOCA0NDggMzIwIDQ0MC44MzYgMzIwIDQzMlYzMDRDMzIwIDI5NS4xNjQgMzEyLjgzOCAyODggMzA0IDI4OEgyNzJDMjYzLjE2NCAyODggMjU2IDI5NS4xNjQgMjU2IDMwNFY0MzJDMjU2IDQ0MC44MzYgMjYzLjE2NCA0NDggMjcyIDQ0OFpNMjcyIDMwNEgzMDRWNDMySDI3MlYzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileChartColumn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM112 352H80C71.164 352 64 359.164 64 368V432C64 440.836 71.164 448 80 448H112C120.838 448 128 440.836 128 432V368C128 359.164 120.838 352 112 352ZM112 432H80V368H112V432ZM208 224H176C167.164 224 160 231.164 160 240V432C160 440.836 167.164 448 176 448H208C216.838 448 224 440.836 224 432V240C224 231.164 216.838 224 208 224ZM208 432H176V240H208V432ZM272 448H304C312.838 448 320 440.836 320 432V304C320 295.164 312.838 288 304 288H272C263.164 288 256 295.164 256 304V432C256 440.836 263.164 448 272 448ZM272 304H304V432H272V304Z" />
        </Icon>
    </>
}