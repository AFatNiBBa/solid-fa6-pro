
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `unlock-keyhole` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=light unlock-keyhole}
 * @preview ![unlock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMzM2VjQwMEMyNDAgNDA4Ljg0NCAyMzIuODQ0IDQxNiAyMjQgNDE2UzIwOCA0MDguODQ0IDIwOCA0MDBWMzM2QzIwOCAzMjcuMTU2IDIxNS4xNTYgMzIwIDIyNCAzMjBTMjQwIDMyNy4xNTYgMjQwIDMzNlpNNDQ4IDI4OFY0NDhDNDQ4IDQ4My4zNDYgNDE5LjM0NiA1MTIgMzg0IDUxMkg2NEMyOC42NTQgNTEyIDAgNDgzLjM0NiAwIDQ0OFYyODhDMCAyNTIuNjU0IDI4LjY1NCAyMjQgNjQgMjI0SDk2VjEyOEM5NiA1MS4yMDcgMTYzLjkzMiAtOS45ODEgMjQyLjg3MyAxLjM1OEMzMDYuNTI3IDEwLjUwMiAzNTIgNjguMTk1IDM1MiAxMzIuNTAyVjE0NEMzNTIgMTUyLjgzNyAzNDQuODM3IDE2MCAzMzYgMTYwSDMzNkMzMjcuMTYzIDE2MCAzMjAgMTUyLjgzNyAzMjAgMTQ0VjEyOEMzMjAgNzAuOTA4IDI2OS45MTMgMjUuMzAyIDIxMS4zNyAzMi44MTJDMTYyLjk4IDM5LjAyIDEyOCA4Mi41NTMgMTI4IDEzMS4zMzlMMTI4IDIyNEgzODRDNDE5LjM0NiAyMjQgNDQ4IDI1Mi42NTQgNDQ4IDI4OFpNNDE2IDI4OEM0MTYgMjcwLjM1NiA0MDEuNjQ1IDI1NiAzODQgMjU2SDY0QzQ2LjM1NSAyNTYgMzIgMjcwLjM1NiAzMiAyODhWNDQ4QzMyIDQ2NS42NDUgNDYuMzU1IDQ4MCA2NCA0ODBIMzg0QzQwMS42NDUgNDgwIDQxNiA0NjUuNjQ1IDQxNiA0NDhWMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UnlockKeyhole(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M240 336V400C240 408.844 232.844 416 224 416S208 408.844 208 400V336C208 327.156 215.156 320 224 320S240 327.156 240 336ZM448 288V448C448 483.346 419.346 512 384 512H64C28.654 512 0 483.346 0 448V288C0 252.654 28.654 224 64 224H96V128C96 51.207 163.932 -9.981 242.873 1.358C306.527 10.502 352 68.195 352 132.502V144C352 152.837 344.837 160 336 160H336C327.163 160 320 152.837 320 144V128C320 70.908 269.913 25.302 211.37 32.812C162.98 39.02 128 82.553 128 131.339L128 224H384C419.346 224 448 252.654 448 288ZM416 288C416 270.356 401.645 256 384 256H64C46.355 256 32 270.356 32 288V448C32 465.645 46.355 480 64 480H384C401.645 480 416 465.645 416 448V288Z" />
        </Icon>
    </>
}