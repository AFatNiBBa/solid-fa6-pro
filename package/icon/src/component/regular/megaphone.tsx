
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `megaphone` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=regular megaphone}
 * @preview ![megaphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTIgMzJDNTM4Ljc0NCAzMiA1MjggNDIuNzQ0IDUyOCA1NlY1OS41NjJMNDYuOTYxIDE5NC44NTVDNDQuNTQzIDE4NC4xNTggMzUuNDMgMTc2IDI0IDE3NkMxMC43NDYgMTc2IDAgMTg2Ljc0NCAwIDIwMFYzMTJDMCAzMjUuMjU0IDEwLjc0NiAzMzYgMjQgMzM2QzM1LjQzIDMzNiA0NC41NDMgMzI3Ljg0NCA0Ni45NjEgMzE3LjE0NUwxNjcuODkxIDM1MS4xNTZDMTYyLjg1NCAzNjIuNjU0IDE2MCAzNzUuMTI1IDE2MCAzODhDMTYwIDQzOC43MzQgMjAxLjI2NiA0ODAgMjUyIDQ4MEMyOTguNTEgNDgwIDMzNi42NTQgNDQ1LjE5OSAzNDIuNzUyIDQwMC4zMzZMNTI4IDQ1Mi40MzhWNDU2QzUyOCA0NjkuMjU0IDUzOC43NDQgNDgwIDU1MiA0ODBDNTY1LjI1NCA0ODAgNTc2IDQ2OS4yNTQgNTc2IDQ1NlY1NkM1NzYgNDIuNzQ0IDU2NS4yNTQgMzIgNTUyIDMyWk0yOTYgMzg4QzI5NiA0MTIuMjY2IDI3Ni4yNjYgNDMyIDI1MiA0MzJTMjA4IDQxMi4yNjYgMjA4IDM4OEMyMDggMzc5LjUxNCAyMTAuNjQ4IDM3MS40NDEgMjE1LjExOSAzNjQuNDM5TDI5NS44NzMgMzg3LjE1MkMyOTUuODc5IDM4Ny40NDEgMjk2IDM4Ny43MTEgMjk2IDM4OFpNNDggMjY3LjU2MlYyNDQuNDM4TDUyOCAxMDkuNDM4VjQwMi41NjJMNDggMjY3LjU2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Megaphone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M552 32C538.744 32 528 42.744 528 56V59.562L46.961 194.855C44.543 184.158 35.43 176 24 176C10.746 176 0 186.744 0 200V312C0 325.254 10.746 336 24 336C35.43 336 44.543 327.844 46.961 317.145L167.891 351.156C162.854 362.654 160 375.125 160 388C160 438.734 201.266 480 252 480C298.51 480 336.654 445.199 342.752 400.336L528 452.438V456C528 469.254 538.744 480 552 480C565.254 480 576 469.254 576 456V56C576 42.744 565.254 32 552 32ZM296 388C296 412.266 276.266 432 252 432S208 412.266 208 388C208 379.514 210.648 371.441 215.119 364.439L295.873 387.152C295.879 387.441 296 387.711 296 388ZM48 267.562V244.438L528 109.438V402.562L48 267.562Z" />
        </Icon>
    </>
}