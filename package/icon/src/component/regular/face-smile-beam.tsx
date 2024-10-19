
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-smile-beam` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=regular face-smile-beam}
 * @preview ![face-smile-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQuNDczIDIxMUMxNTIuMjIzIDE5Ny4yNSAxNjMuNzI3IDE4OS4zNzUgMTc1Ljk1NyAxODkuMzc1QzE4OC4zMDkgMTg5LjM3NSAxOTkuODEyIDE5Ny4yNSAyMDcuNDQxIDIxMUwyMTcuMDA4IDIyOEMyMTkuMDY2IDIzMS43NSAyMjMuMTg0IDIzMi43NSAyMjYuMzMyIDIzMS43NUMyMjkuODQ0IDIzMC42MjUgMjMyLjI2NiAyMjcuMjUgMjMyLjAyMyAyMjMuMzc1QzIyOC43NTQgMTgxLjI1IDE5OS44MTIgMTUyIDE3NS45NTcgMTUyQzE1Mi4yMjMgMTUyIDEyMy4yODEgMTgxLjI1IDEyMC4wMTIgMjIzLjM3NUMxMTkuNjQ4IDIyNy4xMjUgMTIyLjA3IDIzMC42MjUgMTI1LjcwMyAyMzEuNzVDMTI5LjA5NCAyMzIuNzUgMTMzLjA5IDIzMS4yNSAxMzUuMDI3IDIyOEwxNDQuNDczIDIxMVpNMzQwLjAzOSAzMTIuNjI1QzMxOS4yMTEgMzM3LjYyNSAyODguNDUzIDM1MiAyNTYgMzUyUzE5Mi43ODkgMzM3Ljc1IDE3MS45NjEgMzEyLjYyNUMxNjMuNDg0IDMwMi4zNzUgMTQ4LjM0OCAzMDEuMTI1IDEzOC4xNzYgMzA5LjVDMTI4LjAwNCAzMTggMTI2LjY3MiAzMzMuMTI1IDEzNS4xNDggMzQzLjI1QzE2NS4wNTkgMzc5LjI1IDIwOS4yNTggMzk5Ljg3NSAyNTYgMzk5Ljg3NVMzNDYuOTQxIDM3OS4yNSAzNzYuODUyIDM0My4yNUMzODUuNDQ5IDMzMy4xMjUgMzgzLjk5NiAzMTggMzczLjgyNCAzMDkuNUMzNjMuNjUyIDMwMS4xMjUgMzQ4LjUxNiAzMDIuMzc1IDM0MC4wMzkgMzEyLjYyNVpNMzM2LjA0MyAxNTJDMzEyLjE4OCAxNTIgMjgzLjI0NiAxODEuMjUgMjc5Ljk3NyAyMjMuMzc1QzI3OS43MzQgMjI3LjEyNSAyODIuMTU2IDIzMC42MjUgMjg1LjY2OCAyMzEuNzVDMjg5LjE4IDIzMi43NSAyOTMuMDU1IDIzMS4yNSAyOTQuOTkyIDIyOEwzMDQuNTU5IDIxMUMzMTIuMTg3IDE5Ny4yNSAzMjMuNjkxIDE4OS4zNzUgMzM2LjA0MyAxODkuMzc1QzM0OC4yNzMgMTg5LjM3NSAzNTkuNzc3IDE5Ny4yNSAzNjcuNTI3IDIxMUwzNzYuOTczIDIyOEMzNzkuMTUyIDIzMS43NSAzODMuMTQ4IDIzMi43NSAzODYuMjk3IDIzMS43NUMzODkuOTMgMjMwLjYyNSAzOTIuMzUyIDIyNy4yNSAzOTEuOTg4IDIyMy4zNzVDMzg4LjcxOSAxODEuMjUgMzU5Ljc3NyAxNTIgMzM2LjA0MyAxNTJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ0OEMxNTAuMTMxIDQ0OCA2NCAzNjEuODY5IDY0IDI1NlMxNTAuMTMxIDY0IDI1NiA2NFM0NDggMTUwLjEzMSA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceSmileBeam(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144.473 211C152.223 197.25 163.727 189.375 175.957 189.375C188.309 189.375 199.812 197.25 207.441 211L217.008 228C219.066 231.75 223.184 232.75 226.332 231.75C229.844 230.625 232.266 227.25 232.023 223.375C228.754 181.25 199.812 152 175.957 152C152.223 152 123.281 181.25 120.012 223.375C119.648 227.125 122.07 230.625 125.703 231.75C129.094 232.75 133.09 231.25 135.027 228L144.473 211ZM340.039 312.625C319.211 337.625 288.453 352 256 352S192.789 337.75 171.961 312.625C163.484 302.375 148.348 301.125 138.176 309.5C128.004 318 126.672 333.125 135.148 343.25C165.059 379.25 209.258 399.875 256 399.875S346.941 379.25 376.852 343.25C385.449 333.125 383.996 318 373.824 309.5C363.652 301.125 348.516 302.375 340.039 312.625ZM336.043 152C312.188 152 283.246 181.25 279.977 223.375C279.734 227.125 282.156 230.625 285.668 231.75C289.18 232.75 293.055 231.25 294.992 228L304.559 211C312.187 197.25 323.691 189.375 336.043 189.375C348.273 189.375 359.777 197.25 367.527 211L376.973 228C379.152 231.75 383.148 232.75 386.297 231.75C389.93 230.625 392.352 227.25 391.988 223.375C388.719 181.25 359.777 152 336.043 152ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}