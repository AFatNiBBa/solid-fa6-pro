
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bowling-ball` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball?s=light bowling-ball}
 * @preview ![bowling-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0xNDQgMTUyQzEzMC43NDYgMTUyIDEyMCAxNjIuNzQ0IDEyMCAxNzZDMTIwIDE4OS4yNTQgMTMwLjc0NiAyMDAgMTQ0IDIwMEMxNTcuMjU2IDIwMCAxNjggMTg5LjI1NCAxNjggMTc2QzE2OCAxNjIuNzQ0IDE1Ny4yNTYgMTUyIDE0NCAxNTJaTTI0MCAxODRDMjI2Ljc0NiAxODQgMjE2IDE5NC43NDQgMjE2IDIwOEMyMTYgMjIxLjI1NCAyMjYuNzQ2IDIzMiAyNDAgMjMyQzI1My4yNTYgMjMyIDI2NCAyMjEuMjU0IDI2NCAyMDhDMjY0IDE5NC43NDQgMjUzLjI1NiAxODQgMjQwIDE4NFpNMjQwIDg4QzIyNi43NDYgODggMjE2IDk4Ljc0NCAyMTYgMTEyQzIxNiAxMjUuMjU0IDIyNi43NDYgMTM2IDI0MCAxMzZDMjUzLjI1NiAxMzYgMjY0IDEyNS4yNTQgMjY0IDExMkMyNjQgOTguNzQ0IDI1My4yNTYgODggMjQwIDg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BowlingBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM144 152C130.746 152 120 162.744 120 176C120 189.254 130.746 200 144 200C157.256 200 168 189.254 168 176C168 162.744 157.256 152 144 152ZM240 184C226.746 184 216 194.744 216 208C216 221.254 226.746 232 240 232C253.256 232 264 221.254 264 208C264 194.744 253.256 184 240 184ZM240 88C226.746 88 216 98.744 216 112C216 125.254 226.746 136 240 136C253.256 136 264 125.254 264 112C264 98.744 253.256 88 240 88Z" />
        </Icon>
    </>
}