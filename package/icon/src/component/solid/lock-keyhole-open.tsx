
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lock-keyhole-open` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole-open?s=solid lock-keyhole-open}
 * @preview ![lock-keyhole-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDYuMzc3IDAuNzAzQzM2MC41NDEgLTcuNjY0IDI4OCA1OS44NTIgMjg4IDE0NFYyMjRINjRDMjguNjU0IDIyNCAwIDI1Mi42NTIgMCAyODhWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzODRDNDE5LjM0NiA1MTIgNDQ4IDQ4My4zNDQgNDQ4IDQ0OFYyODhDNDQ4IDI1Mi42NTIgNDE5LjM0NiAyMjQgMzg0IDIyNEgzNTJWMTQ0QzM1MiA5Ny4xMTMgMzkyLjUyMyA1OS41MzkgNDQwLjM3MSA2NC40M0M0ODEuOTg4IDY4LjY4IDUxMiAxMDYuODgzIDUxMiAxNDguNzE5VjIwOEM1MTIgMjE2LjgzNiA1MTkuMTY0IDIyNCA1MjggMjI0SDU2MEM1NjguODM2IDIyNCA1NzYgMjE2LjgzNiA1NzYgMjA4VjE1MC40MDZDNTc2IDc1LjI0MiA1MjEuMTg4IDcuOTkyIDQ0Ni4zNzcgMC43MDNaTTI1NiAzODRDMjU2IDQwMS42NzIgMjQxLjY3NCA0MTYgMjI0IDQxNlMxOTIgNDAxLjY3MiAxOTIgMzg0VjM1MkMxOTIgMzM0LjMyOCAyMDYuMzI2IDMyMCAyMjQgMzIwUzI1NiAzMzQuMzI4IDI1NiAzNTJWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LockKeyholeOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M446.377 0.703C360.541 -7.664 288 59.852 288 144V224H64C28.654 224 0 252.652 0 288V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V288C448 252.652 419.346 224 384 224H352V144C352 97.113 392.523 59.539 440.371 64.43C481.988 68.68 512 106.883 512 148.719V208C512 216.836 519.164 224 528 224H560C568.836 224 576 216.836 576 208V150.406C576 75.242 521.188 7.992 446.377 0.703ZM256 384C256 401.672 241.674 416 224 416S192 401.672 192 384V352C192 334.328 206.326 320 224 320S256 334.328 256 352V384Z" />
        </Icon>
    </>
}