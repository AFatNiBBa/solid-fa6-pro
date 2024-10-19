
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `draw-circle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/draw-circle?s=thin draw-circle}
 * @preview ![draw-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNTAyIDIwOC4yNTJDNDQ4LjE3OCAxMjcuNDY1IDM4NC41MzkgNjMuODIgMzAzLjc0OCA0NS40OTZDMzAyLjQyIDIwLjE3NCAyODEuNjUyIDAgMjU2IDBTMjA5LjU4IDIwLjE3NCAyMDguMjUyIDQ1LjQ5NkMxMjcuNDYxIDYzLjgyIDYzLjgyMiAxMjcuNDY1IDQ1LjQ5OCAyMDguMjUyQzIwLjE3NiAyMDkuNTc4IDAgMjMwLjM0OCAwIDI1NlMyMC4xNzYgMzAyLjQyMiA0NS40OTggMzAzLjc0OEM2My44MjIgMzg0LjUzNSAxMjcuNDYxIDQ0OC4xOCAyMDguMjUyIDQ2Ni41MDRDMjA5LjU4IDQ5MS44MjYgMjMwLjM0OCA1MTIgMjU2IDUxMlMzMDIuNDIgNDkxLjgyNiAzMDMuNzQ4IDQ2Ni41MDRDMzg0LjUzOSA0NDguMTggNDQ4LjE3OCAzODQuNTM1IDQ2Ni41MDIgMzAzLjc0OEM0OTEuODI0IDMwMi40MjIgNTEyIDI4MS42NTIgNTEyIDI1NlM0OTEuODI0IDIwOS41NzggNDY2LjUwMiAyMDguMjUyWk0yNTYgMTZDMjczLjY3NCAxNiAyODggMzAuMzI2IDI4OCA0OEMyODggNjUuNjcyIDI3My42NzQgODAgMjU2IDgwUzIyNCA2NS42NzIgMjI0IDQ4QzIyNCAzMC4zMjYgMjM4LjMyNiAxNiAyNTYgMTZaTTE2IDI1NkMxNiAyMzguMzI2IDMwLjMyNiAyMjQgNDggMjI0UzgwIDIzOC4zMjYgODAgMjU2QzgwIDI3My42NzIgNjUuNjc0IDI4OCA0OCAyODhTMTYgMjczLjY3MiAxNiAyNTZaTTI1NiA0OTZDMjM4LjMyNiA0OTYgMjI0IDQ4MS42NzIgMjI0IDQ2NEMyMjQgNDQ2LjMyNiAyMzguMzI2IDQzMiAyNTYgNDMyUzI4OCA0NDYuMzI2IDI4OCA0NjRDMjg4IDQ4MS42NzIgMjczLjY3NCA0OTYgMjU2IDQ5NlpNMzAxLjgzNiA0NTAuNDkyQzI5NS45NzEgNDMwLjYwNyAyNzcuNzg1IDQxNiAyNTYgNDE2UzIxNi4wMjkgNDMwLjYwNyAyMTAuMTY0IDQ1MC40OTJDMTM2LjY4NCA0MzMuMTY4IDc4LjgzMiAzNzUuMzE2IDYxLjUwOCAzMDEuODM2QzgxLjM5MyAyOTUuOTcxIDk2IDI3Ny43ODUgOTYgMjU2UzgxLjM5MyAyMTYuMDI5IDYxLjUwOCAyMTAuMTY0Qzc4LjgzMiAxMzYuNjg0IDEzNi42ODQgNzguODMyIDIxMC4xNjQgNjEuNTA4QzIxNi4wMjkgODEuMzkzIDIzNC4yMTUgOTYgMjU2IDk2UzI5NS45NzEgODEuMzkzIDMwMS44MzYgNjEuNTA4QzM3NS4zMTYgNzguODMyIDQzMy4xNjggMTM2LjY4NCA0NTAuNDkyIDIxMC4xNjRDNDMwLjYwNyAyMTYuMDI5IDQxNiAyMzQuMjE1IDQxNiAyNTZTNDMwLjYwNyAyOTUuOTcxIDQ1MC40OTIgMzAxLjgzNkM0MzMuMTY4IDM3NS4zMTYgMzc1LjMxNiA0MzMuMTY4IDMwMS44MzYgNDUwLjQ5MlpNNDY0IDI4OEM0NDYuMzI2IDI4OCA0MzIgMjczLjY3MiA0MzIgMjU2QzQzMiAyMzguMzI2IDQ0Ni4zMjYgMjI0IDQ2NCAyMjRTNDk2IDIzOC4zMjYgNDk2IDI1NkM0OTYgMjczLjY3MiA0ODEuNjc0IDI4OCA0NjQgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DrawCircle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.502 208.252C448.178 127.465 384.539 63.82 303.748 45.496C302.42 20.174 281.652 0 256 0S209.58 20.174 208.252 45.496C127.461 63.82 63.822 127.465 45.498 208.252C20.176 209.578 0 230.348 0 256S20.176 302.422 45.498 303.748C63.822 384.535 127.461 448.18 208.252 466.504C209.58 491.826 230.348 512 256 512S302.42 491.826 303.748 466.504C384.539 448.18 448.178 384.535 466.502 303.748C491.824 302.422 512 281.652 512 256S491.824 209.578 466.502 208.252ZM256 16C273.674 16 288 30.326 288 48C288 65.672 273.674 80 256 80S224 65.672 224 48C224 30.326 238.326 16 256 16ZM16 256C16 238.326 30.326 224 48 224S80 238.326 80 256C80 273.672 65.674 288 48 288S16 273.672 16 256ZM256 496C238.326 496 224 481.672 224 464C224 446.326 238.326 432 256 432S288 446.326 288 464C288 481.672 273.674 496 256 496ZM301.836 450.492C295.971 430.607 277.785 416 256 416S216.029 430.607 210.164 450.492C136.684 433.168 78.832 375.316 61.508 301.836C81.393 295.971 96 277.785 96 256S81.393 216.029 61.508 210.164C78.832 136.684 136.684 78.832 210.164 61.508C216.029 81.393 234.215 96 256 96S295.971 81.393 301.836 61.508C375.316 78.832 433.168 136.684 450.492 210.164C430.607 216.029 416 234.215 416 256S430.607 295.971 450.492 301.836C433.168 375.316 375.316 433.168 301.836 450.492ZM464 288C446.326 288 432 273.672 432 256C432 238.326 446.326 224 464 224S496 238.326 496 256C496 273.672 481.674 288 464 288Z" />
        </Icon>
    </>
}