
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `loveseat` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/loveseat?s=thin loveseat}
 * @preview ![loveseat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03MiAxOTJDNzYuNDE4IDE5MiA4MCAxODguNDE4IDgwIDE4NFYxNjBDODAgOTguMTQ1IDEzMC4xNDUgNDggMTkyIDQ4SDMyMEMzODEuODU1IDQ4IDQzMiA5OC4xNDUgNDMyIDE2MFYxODRDNDMyIDE4OC40MTggNDM1LjU4MiAxOTIgNDQwIDE5MlM0NDggMTg4LjQxOCA0NDggMTg0VjE2MEM0NDggODkuMzA1IDM5MC42OTUgMzIgMzIwIDMySDE5MkMxMjEuMzA1IDMyIDY0IDg5LjMwNSA2NCAxNjBWMTg0QzY0IDE4OC40MTggNjcuNTgyIDE5MiA3MiAxOTJaTTQ0OCAyMjRDNDEyLjY1MiAyMjQgMzg0IDI1Mi42NTIgMzg0IDI4OEgxMjhDMTI4IDI1Mi42NTIgOTkuMzQ4IDIyNCA2NCAyMjRTMCAyNTIuNjUyIDAgMjg4VjQ0OEMwIDQ2NS42NzIgMTQuMzI4IDQ4MCAzMiA0ODBIOTZDMTEzLjY3MiA0ODAgMTI4IDQ2NS42NzIgMTI4IDQ0OFY0MzJIMzg0VjQ0OEMzODQgNDY1LjY3MiAzOTguMzI4IDQ4MCA0MTYgNDgwSDQ4MEM0OTcuNjcyIDQ4MCA1MTIgNDY1LjY3MiA1MTIgNDQ4VjI4OEM1MTIgMjUyLjY1MiA0ODMuMzQ4IDIyNCA0NDggMjI0Wk0xMTIgNDQ4QzExMiA0NTYuODI0IDEwNC44MjQgNDY0IDk2IDQ2NEgzMkMyMy4xNzYgNDY0IDE2IDQ1Ni44MjQgMTYgNDQ4VjI4OEMxNiAyNjEuNTMxIDM3LjUzMSAyNDAgNjQgMjQwUzExMiAyNjEuNTMxIDExMiAyODhWNDQ4Wk0zODQgNDE2SDEyOFYzMDRIMzg0VjQxNlpNNDk2IDQ0OEM0OTYgNDU2LjgyNCA0ODguODI0IDQ2NCA0ODAgNDY0SDQxNkM0MDcuMTc2IDQ2NCA0MDAgNDU2LjgyNCA0MDAgNDQ4VjI4OEM0MDAgMjYxLjUzMSA0MjEuNTMxIDI0MCA0NDggMjQwUzQ5NiAyNjEuNTMxIDQ5NiAyODhWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Loveseat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M72 192C76.418 192 80 188.418 80 184V160C80 98.145 130.145 48 192 48H320C381.855 48 432 98.145 432 160V184C432 188.418 435.582 192 440 192S448 188.418 448 184V160C448 89.305 390.695 32 320 32H192C121.305 32 64 89.305 64 160V184C64 188.418 67.582 192 72 192ZM448 224C412.652 224 384 252.652 384 288H128C128 252.652 99.348 224 64 224S0 252.652 0 288V448C0 465.672 14.328 480 32 480H96C113.672 480 128 465.672 128 448V432H384V448C384 465.672 398.328 480 416 480H480C497.672 480 512 465.672 512 448V288C512 252.652 483.348 224 448 224ZM112 448C112 456.824 104.824 464 96 464H32C23.176 464 16 456.824 16 448V288C16 261.531 37.531 240 64 240S112 261.531 112 288V448ZM384 416H128V304H384V416ZM496 448C496 456.824 488.824 464 480 464H416C407.176 464 400 456.824 400 448V288C400 261.531 421.531 240 448 240S496 261.531 496 288V448Z" />
        </Icon>
    </>
}