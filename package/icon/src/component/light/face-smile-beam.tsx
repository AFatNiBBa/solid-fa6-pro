
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-smile-beam` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=light face-smile-beam}
 * @preview ![face-smile-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzUuOTU3IDE4OS4zNzVDMTg4LjMwOSAxODkuMzc1IDE5OS44MTIgMTk3LjI1IDIwNy40NDEgMjExTDIxNy4wMDggMjI4QzIxOS4wNjYgMjMxLjc1IDIyMy4xODQgMjMyLjc1IDIyNi4zMzIgMjMxLjc1QzIyOS44NDQgMjMwLjYyNSAyMzIuMjY2IDIyNy4yNSAyMzIuMDIzIDIyMy4zNzVDMjI4Ljc1NCAxODEuMjUgMTk5LjgxMiAxNTIgMTc1Ljk1NyAxNTJDMTUyLjIyMyAxNTIgMTIzLjI4MSAxODEuMjUgMTIwLjAxMiAyMjMuMzc1QzExOS42NDggMjI3LjEyNSAxMjIuMDcgMjMwLjYyNSAxMjUuNzAzIDIzMS43NUMxMjkuMDk0IDIzMi43NSAxMzMuMDkgMjMxLjI1IDEzNS4wMjcgMjI4TDE0NC40NzMgMjExQzE1Mi4yMjMgMTk3LjI1IDE2My43MjcgMTg5LjM3NSAxNzUuOTU3IDE4OS4zNzVaTTMzNi4wNDMgMTUyQzMxMi4xODcgMTUyIDI4My4yNDYgMTgxLjI1IDI3OS45NzcgMjIzLjM3NUMyNzkuNzM0IDIyNy4xMjUgMjgyLjE1NiAyMzAuNjI1IDI4NS42NjggMjMxLjc1QzI4OS4wNTkgMjMyLjc1IDI5My4wNTUgMjMxLjI1IDI5NC45OTIgMjI4TDMwNC41NTkgMjExQzMxMi4xODcgMTk3LjI1IDMyMy42OTEgMTg5LjM3NSAzMzYuMDQzIDE4OS4zNzVDMzQ4LjI3MyAxODkuMzc1IDM1OS43NzcgMTk3LjI1IDM2Ny41MjcgMjExTDM3Ni45NzMgMjI4QzM3OS4xNTIgMjMxLjc1IDM4My4xNDggMjMyLjc1IDM4Ni4yOTcgMjMxLjc1QzM4OS45MyAyMzAuNjI1IDM5Mi4zNTIgMjI3LjI1IDM5MS45ODggMjIzLjM3NUMzODguNzE5IDE4MS4yNSAzNTkuNzc3IDE1MiAzMzYuMDQzIDE1MlpNMzQ2LjIxNSAzMjUuNzVDMzIzLjgxMiAzNTIuNjI1IDI5MC44NzUgMzY4IDI1NiAzNjhTMTg4LjE4NyAzNTIuNjI1IDE2NS43ODUgMzI1Ljc1QzE2MC4wOTQgMzE5IDE1MC4wNDMgMzE4LjEyNSAxNDMuMjYyIDMyMy43NUMxMzYuNDggMzI5LjUgMTM1LjYzMyAzMzkuNSAxNDEuMzI0IDM0Ni4yNUMxNjkuNjYgMzgwLjM3NSAyMTEuNTU5IDQwMCAyNTYgNDAwUzM0Mi4zNCAzODAuMzc1IDM3MC43OTcgMzQ2LjI1QzM3Ni40ODggMzM5LjM3NSAzNzUuNjQxIDMyOS4yNSAzNjguODU5IDMyMy43NUMzNjEuOTU3IDMxOC4xMjUgMzUxLjkwNiAzMTkgMzQ2LjIxNSAzMjUuNzVaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceSmileBeam(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M175.957 189.375C188.309 189.375 199.812 197.25 207.441 211L217.008 228C219.066 231.75 223.184 232.75 226.332 231.75C229.844 230.625 232.266 227.25 232.023 223.375C228.754 181.25 199.812 152 175.957 152C152.223 152 123.281 181.25 120.012 223.375C119.648 227.125 122.07 230.625 125.703 231.75C129.094 232.75 133.09 231.25 135.027 228L144.473 211C152.223 197.25 163.727 189.375 175.957 189.375ZM336.043 152C312.187 152 283.246 181.25 279.977 223.375C279.734 227.125 282.156 230.625 285.668 231.75C289.059 232.75 293.055 231.25 294.992 228L304.559 211C312.187 197.25 323.691 189.375 336.043 189.375C348.273 189.375 359.777 197.25 367.527 211L376.973 228C379.152 231.75 383.148 232.75 386.297 231.75C389.93 230.625 392.352 227.25 391.988 223.375C388.719 181.25 359.777 152 336.043 152ZM346.215 325.75C323.812 352.625 290.875 368 256 368S188.187 352.625 165.785 325.75C160.094 319 150.043 318.125 143.262 323.75C136.48 329.5 135.633 339.5 141.324 346.25C169.66 380.375 211.559 400 256 400S342.34 380.375 370.797 346.25C376.488 339.375 375.641 329.25 368.859 323.75C361.957 318.125 351.906 319 346.215 325.75ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}