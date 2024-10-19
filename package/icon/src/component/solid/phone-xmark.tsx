
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-xmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=solid phone-xmark}
 * @preview ![phone-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMDk0IDM1MS4yNDhMMzg0LjYwOSAzMDQuNzQ4QzM3MS44MjggMjk5LjIxNyAzNTYuODEzIDMwMi45MzYgMzQ4LjEyNSAzMTMuNzE3TDMwNC4wNzggMzY3LjUyOUMyMzQuODI4IDMzMy41MjkgMTc4LjUzMSAyNzcuMjQ4IDE0NC41NDcgMjA4LjAyOUwxOTguMzc1IDE2My45MzRDMjA5LjEyNSAxNTUuMTUyIDIxMi43OTcgMTQwLjI3NyAyMDcuMzU5IDEyNy40OTZMMTYwLjgyOCAxOC45MzRDMTU0LjczNCA1LjAyNyAxMzkuNjU2IC0yLjU5OCAxMjQuOTY5IDAuODA5TDI0LjIxOSAyNC4wNTlDOS45NjkgMjcuMzA5IDAgMzkuODQgMCA1NC40OTZDMCAzMDYuNzc5IDIwNS4yMzQgNTEyIDQ1Ny40ODQgNTEyQzQ3Mi4xNTYgNTEyIDQ4NC42ODggNTAyLjAzMSA0ODcuOTUzIDQ4Ny43ODFMNTExLjIwMyAzODYuOTk4QzUxNC41NzggMzcyLjQwNCA1MDcgMzU3LjI0OCA0OTMuMDk0IDM1MS4yNDhaTTM0OC4xMTkgNjIuMDU3TDM4Mi4wNiA5NS45OTlMMzQ4LjExNiAxMjkuOTQzQzMzOC43NDMgMTM5LjMxNiAzMzguNzM4IDE1NC41MDIgMzQ4LjExOCAxNjMuODgyQzM1Ny40OTIgMTczLjI1NyAzNzIuNjgxIDE3My4yNiAzODIuMDU3IDE2My44ODRMNDE2LjAwMSAxMjkuOTRMNDQ5Ljk0MyAxNjMuODgxQzQ1OS4zMiAxNzMuMjU4IDQ3NC41MDggMTczLjI1NyA0ODMuODgyIDE2My44ODJDNDkzLjI1NyAxNTQuNTA4IDQ5My4yNTggMTM5LjMyIDQ4My44ODEgMTI5Ljk0M0w0NDkuOTQgOTYuMDAxTDQ4My44ODQgNjIuMDU3QzQ5My4yNiA1Mi42ODEgNDkzLjI1NyAzNy40OTIgNDgzLjg4MiAyOC4xMThTNDU5LjMxOSAxOC43NCA0NDkuOTQyIDI4LjExNkw0MTUuOTk5IDYyLjA2TDM4Mi4wNTcgMjguMTE5QzM3Mi42OCAxOC43NDIgMzU3LjQ5MiAxOC43NDMgMzQ4LjExOCAyOC4xMThDMzM4Ljc0NCAzNy40OTEgMzM4LjczNiA1Mi42NzUgMzQ4LjExOSA2Mi4wNTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PhoneXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.094 351.248L384.609 304.748C371.828 299.217 356.813 302.936 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.029L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.496L160.828 18.934C154.734 5.027 139.656 -2.598 124.969 0.809L24.219 24.059C9.969 27.309 0 39.84 0 54.496C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 386.998C514.578 372.404 507 357.248 493.094 351.248ZM348.119 62.057L382.06 95.999L348.116 129.943C338.743 139.316 338.738 154.502 348.118 163.882C357.492 173.257 372.681 173.26 382.057 163.884L416.001 129.94L449.943 163.881C459.32 173.258 474.508 173.257 483.882 163.882C493.257 154.508 493.258 139.32 483.881 129.943L449.94 96.001L483.884 62.057C493.26 52.681 493.257 37.492 483.882 28.118S459.319 18.74 449.942 28.116L415.999 62.06L382.057 28.119C372.68 18.742 357.492 18.743 348.118 28.118C338.744 37.491 338.736 52.675 348.119 62.057Z" />
        </Icon>
    </>
}