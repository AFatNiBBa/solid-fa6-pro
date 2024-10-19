
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-user` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=thin file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMTYwIDM1MkMxMTUuODIgMzUyIDgwIDM4Ny44MTYgODAgNDMyQzgwIDQ0MC44MzYgODcuMTY0IDQ0OCA5NiA0NDhIMjg4QzI5Ni44MzYgNDQ4IDMwNCA0NDAuODM2IDMwNCA0MzJDMzA0IDM4Ny44MTYgMjY4LjE4NCAzNTIgMjI0IDM1MkgxNjBaTTI4OCA0MzJIOTZDOTYgMzk2LjcxMSAxMjQuNzExIDM2OCAxNjAgMzY4SDIyNEMyNTkuMjg5IDM2OCAyODggMzk2LjcxMSAyODggNDMyWk0xOTIgMTkyQzE1Ni42NTYgMTkyIDEyOCAyMjAuNjU2IDEyOCAyNTZTMTU2LjY1NiAzMjAgMTkyIDMyMEMyMjcuMzQ4IDMyMCAyNTYgMjkxLjM0NCAyNTYgMjU2UzIyNy4zNDggMTkyIDE5MiAxOTJaTTE5MiAzMDRDMTY1LjUzMSAzMDQgMTQ0IDI4Mi40NjkgMTQ0IDI1NlMxNjUuNTMxIDIwOCAxOTIgMjA4UzI0MCAyMjkuNTMxIDI0MCAyNTZTMjE4LjQ2OSAzMDQgMTkyIDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM160 352C115.82 352 80 387.816 80 432C80 440.836 87.164 448 96 448H288C296.836 448 304 440.836 304 432C304 387.816 268.184 352 224 352H160ZM288 432H96C96 396.711 124.711 368 160 368H224C259.289 368 288 396.711 288 432ZM192 192C156.656 192 128 220.656 128 256S156.656 320 192 320C227.348 320 256 291.344 256 256S227.348 192 192 192ZM192 304C165.531 304 144 282.469 144 256S165.531 208 192 208S240 229.531 240 256S218.469 304 192 304Z" />
        </Icon>
    </>
}