
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-excel` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-excel?s=thin file-excel}
 * @preview ![file-excel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMTM0LjY1NiAyNDMuNTYyQzEzMi4xODggMjM5Ljg0NCAxMjcuMjE5IDIzOC44NzUgMTIzLjU2MiAyNDEuMzQ0QzExOS44NzUgMjQzLjc4MSAxMTguOTA2IDI0OC43NSAxMjEuMzQ0IDI1Mi40MzhMMTgyLjM4NSAzNDRMMTIxLjM0NCA0MzUuNTYyQzExOC45MDYgNDM5LjI1IDExOS44NzUgNDQ0LjIxOSAxMjMuNTYyIDQ0Ni42NTZDMTI0LjkzOCA0NDcuNTYyIDEyNi40NjkgNDQ4IDEyOCA0NDhDMTMwLjU2MiA0NDggMTMzLjEyNSA0NDYuNzUgMTM0LjY1NiA0NDQuNDM4TDE5MiAzNTguNDIyTDI0OS4zNDQgNDQ0LjQzOEMyNTAuODc1IDQ0Ni43NSAyNTMuNDM4IDQ0OCAyNTYgNDQ4QzI1Ny41MzEgNDQ4IDI1OS4wNjIgNDQ3LjU2MiAyNjAuNDM4IDQ0Ni42NTZDMjY0LjEyNSA0NDQuMjE5IDI2NS4wOTQgNDM5LjI1IDI2Mi42NTYgNDM1LjU2MkwyMDEuNjE1IDM0NEwyNjIuNjU2IDI1Mi40MzhDMjY1LjA5NCAyNDguNzUgMjY0LjEyNSAyNDMuNzgxIDI2MC40MzggMjQxLjM0NEMyNTYuNzgxIDIzOC45MDYgMjUxLjc4MSAyMzkuODQ0IDI0OS4zNDQgMjQzLjU2MkwxOTIgMzI5LjU3OEwxMzQuNjU2IDI0My41NjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileExcel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM134.656 243.562C132.188 239.844 127.219 238.875 123.562 241.344C119.875 243.781 118.906 248.75 121.344 252.438L182.385 344L121.344 435.562C118.906 439.25 119.875 444.219 123.562 446.656C124.938 447.562 126.469 448 128 448C130.562 448 133.125 446.75 134.656 444.438L192 358.422L249.344 444.438C250.875 446.75 253.438 448 256 448C257.531 448 259.062 447.562 260.438 446.656C264.125 444.219 265.094 439.25 262.656 435.562L201.615 344L262.656 252.438C265.094 248.75 264.125 243.781 260.438 241.344C256.781 238.906 251.781 239.844 249.344 243.562L192 329.578L134.656 243.562Z" />
        </Icon>
    </>
}