
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vacuum` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum?s=solid vacuum}
 * @preview ![vacuum](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDMuMjUgMjU2TDEwMi4xMjUgNDQ4SDQ4QzIxLjUgNDQ4IDAgNDY5LjUgMCA0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJIMTc2QzE4NC44NzUgNTEyIDE5MiA1MDQuODc1IDE5MiA0OTZWNDY0QzE5MiA0NTUuMTI1IDE4NC44NzUgNDQ4IDE3NiA0NDhIMTY3LjYyNUwyMDguNzUgMjU2SDE0My4yNVpNNjQwIDEyOEM2MzkuODc1IDU3LjM3NSA1ODIuNjI1IDAuMTI1IDUxMiAwSDMwMS42MjVDMjQxLjYyNSAwIDE4OSA0Mi41IDE3Ni41IDEwMS4yNUwxNTAuMTI1IDIyNEgyMTUuNjI1TDIzOSAxMTQuNjI1QzI0NS41IDg1LjEyNSAyNzEuNSA2NC4xMjUgMzAxLjYyNSA2NEg1MTJDNTQ0LjYyNSA2NC4xMjUgNTcxLjg3NSA4OC43NSA1NzUuMzc1IDEyMS4yNUM1NzguODc1IDE1My42MjUgNTU3LjM3NSAxODMuNSA1MjUuNSAxOTAuNUM0ODkuMjUgMTUwLjYyNSA0MzcuODc1IDEyOCAzODQgMTI4QzM2Ni4zNzUgMTI4IDM1MiAxNDIuMzc1IDM1MiAxNjBWMzI1LjY5NUMzNDQuMzIgMzI4LjQyNiAzMzYuOTk4IDMzMS45MjIgMzMwLjM1NSAzMzYuNDE0QzMyMC4xNDEgMzQzLjMyIDMxMS4zMiAzNTIuMTQxIDMwNC40MTQgMzYyLjM1NUMyOTQuMDU1IDM3Ny42OCAyODggMzk2LjE0MSAyODggNDE2QzI4OCA0NjguOTQ5IDMzMS4wNTEgNTEyIDM4NCA1MTJINTEyQzU0Ny4zNzUgNTEyIDU3NiA0ODMuMzc1IDU3NiA0NDhWMzIwQzU3NiAyOTQuMzc1IDU3MC44NzUgMjY5IDU2MSAyNDUuMzc1QzYwNy4xMjUgMjI2LjEyNSA2NDAgMTgxLjEyNSA2NDAgMTI4Wk0zODQgNDQ4QzM2Ni4zNTUgNDQ4IDM1MiA0MzMuNjQ1IDM1MiA0MTZTMzY2LjM1NSAzODQgMzg0IDM4NFM0MTYgMzk4LjM1NSA0MTYgNDE2UzQwMS42NDUgNDQ4IDM4NCA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Vacuum(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M143.25 256L102.125 448H48C21.5 448 0 469.5 0 496C0 504.875 7.125 512 16 512H176C184.875 512 192 504.875 192 496V464C192 455.125 184.875 448 176 448H167.625L208.75 256H143.25ZM640 128C639.875 57.375 582.625 0.125 512 0H301.625C241.625 0 189 42.5 176.5 101.25L150.125 224H215.625L239 114.625C245.5 85.125 271.5 64.125 301.625 64H512C544.625 64.125 571.875 88.75 575.375 121.25C578.875 153.625 557.375 183.5 525.5 190.5C489.25 150.625 437.875 128 384 128C366.375 128 352 142.375 352 160V325.695C344.32 328.426 336.998 331.922 330.355 336.414C320.141 343.32 311.32 352.141 304.414 362.355C294.055 377.68 288 396.141 288 416C288 468.949 331.051 512 384 512H512C547.375 512 576 483.375 576 448V320C576 294.375 570.875 269 561 245.375C607.125 226.125 640 181.125 640 128ZM384 448C366.355 448 352 433.645 352 416S366.355 384 384 384S416 398.355 416 416S401.645 448 384 448Z" />
        </Icon>
    </>
}