
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch-apple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-apple?s=duotone watch-apple}
 * @preview ![watch-apple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA4MC4wMDFINjRDMjguNjI1IDgwLjAwMSAwIDEwOC42MjYgMCAxNDQuMDAxVjM2OC4wMDFDMCA0MDMuMzc2IDI4LjYyNSA0MzIuMDAxIDY0IDQzMi4wMDFIMzIwQzM1NS4zNzUgNDMyLjAwMSAzODQgNDAzLjM3NiAzODQgMzY4LjAwMVYxNDQuMDAxQzM4NCAxMDguNjI2IDM1NS4zNzUgODAuMDAxIDMyMCA4MC4wMDFaTTIzMiAxNjAuMDAxQzI0NS4yNTQgMTYwLjAwMSAyNTYgMTcwLjc0MyAyNTYgMTg0LjAwMUMyNTYgMTk3LjI1NCAyNDUuMjU0IDIwOC4wMDEgMjMyIDIwOC4wMDFTMjA4IDE5Ny4yNTQgMjA4IDE4NC4wMDFDMjA4IDE3MC43NDMgMjE4Ljc0NiAxNjAuMDAxIDIzMiAxNjAuMDAxWk0xNTIgMTYwLjAwMUMxNjUuMjU0IDE2MC4wMDEgMTc2IDE3MC43NDMgMTc2IDE4NC4wMDFDMTc2IDE5Ny4yNTQgMTY1LjI1NCAyMDguMDAxIDE1MiAyMDguMDAxUzEyOCAxOTcuMjU0IDEyOCAxODQuMDAxQzEyOCAxNzAuNzQzIDEzOC43NDYgMTYwLjAwMSAxNTIgMTYwLjAwMVpNOTYgMjU2LjAwMUM5NiAyNDIuNzQzIDEwNi43NDYgMjMyLjAwMSAxMjAgMjMyLjAwMVMxNDQgMjQyLjc0MyAxNDQgMjU2LjAwMUMxNDQgMjY5LjI1NCAxMzMuMjU0IDI4MC4wMDEgMTIwIDI4MC4wMDFTOTYgMjY5LjI1NCA5NiAyNTYuMDAxWk0xNTIgMzUyLjAwMUMxMzguNzQ2IDM1Mi4wMDEgMTI4IDM0MS4yNTQgMTI4IDMyOC4wMDFDMTI4IDMxNC43NDMgMTM4Ljc0NiAzMDQuMDAxIDE1MiAzMDQuMDAxUzE3NiAzMTQuNzQzIDE3NiAzMjguMDAxQzE3NiAzNDEuMjU0IDE2NS4yNTQgMzUyLjAwMSAxNTIgMzUyLjAwMVpNMTYwIDI1Ni4wMDFDMTYwIDIzOC4zMjkgMTc0LjMyNiAyMjQuMDAxIDE5MiAyMjQuMDAxUzIyNCAyMzguMzI5IDIyNCAyNTYuMDAxUzIwOS42NzQgMjg4LjAwMSAxOTIgMjg4LjAwMVMxNjAgMjczLjY3MiAxNjAgMjU2LjAwMVpNMjMyIDM1Mi4wMDFDMjE4Ljc0NiAzNTIuMDAxIDIwOCAzNDEuMjU0IDIwOCAzMjguMDAxQzIwOCAzMTQuNzQzIDIxOC43NDYgMzA0LjAwMSAyMzIgMzA0LjAwMVMyNTYgMzE0Ljc0MyAyNTYgMzI4LjAwMUMyNTYgMzQxLjI1NCAyNDUuMjU0IDM1Mi4wMDEgMjMyIDM1Mi4wMDFaTTI2NCAyODAuMDAxQzI1MC43NDYgMjgwLjAwMSAyNDAgMjY5LjI1NCAyNDAgMjU2LjAwMUMyNDAgMjQyLjc0MyAyNTAuNzQ2IDIzMi4wMDEgMjY0IDIzMi4wMDFTMjg4IDI0Mi43NDMgMjg4IDI1Ni4wMDFDMjg4IDI2OS4yNTQgMjc3LjI1NCAyODAuMDAxIDI2NCAyODAuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNTIgMTYwLjAwMUMxNjUuMjU0IDE2MC4wMDEgMTc2IDE3MC43NDMgMTc2IDE4NC4wMDFDMTc2IDE5Ny4yNTQgMTY1LjI1NCAyMDguMDAxIDE1MiAyMDguMDAxUzEyOCAxOTcuMjU0IDEyOCAxODQuMDAxQzEyOCAxNzAuNzQzIDEzOC43NDYgMTYwLjAwMSAxNTIgMTYwLjAwMVpNMTUyIDM1Mi4wMDFDMTM4Ljc0NiAzNTIuMDAxIDEyOCAzNDEuMjU0IDEyOCAzMjguMDAxQzEyOCAzMTQuNzQzIDEzOC43NDYgMzA0LjAwMSAxNTIgMzA0LjAwMVMxNzYgMzE0Ljc0MyAxNzYgMzI4LjAwMUMxNzYgMzQxLjI1NCAxNjUuMjU0IDM1Mi4wMDEgMTUyIDM1Mi4wMDFaTTI2NCAyODAuMDAxQzI1MC43NDYgMjgwLjAwMSAyNDAgMjY5LjI1NCAyNDAgMjU2LjAwMUMyNDAgMjQyLjc0MyAyNTAuNzQ2IDIzMi4wMDEgMjY0IDIzMi4wMDFTMjg4IDI0Mi43NDMgMjg4IDI1Ni4wMDFDMjg4IDI2OS4yNTQgMjc3LjI1NCAyODAuMDAxIDI2NCAyODAuMDAxWk0yODggMEg5NkM3OC4zNzUgMCA2NCAxNC4zNzUgNjQgMzJWODBIMzIwVjMyQzMyMCAxNC4zNzUgMzA1LjYyNSAwIDI4OCAwWk02NCA0ODBDNjQgNDk3LjYyNSA3OC4zNzUgNTEyIDk2IDUxMkgyODhDMzA1LjYyNSA1MTIgMzIwIDQ5Ny42MjUgMzIwIDQ4MFY0MzJINjRWNDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WatchApple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M320 80.001H64C28.625 80.001 0 108.626 0 144.001V368.001C0 403.376 28.625 432.001 64 432.001H320C355.375 432.001 384 403.376 384 368.001V144.001C384 108.626 355.375 80.001 320 80.001ZM232 160.001C245.254 160.001 256 170.743 256 184.001C256 197.254 245.254 208.001 232 208.001S208 197.254 208 184.001C208 170.743 218.746 160.001 232 160.001ZM152 160.001C165.254 160.001 176 170.743 176 184.001C176 197.254 165.254 208.001 152 208.001S128 197.254 128 184.001C128 170.743 138.746 160.001 152 160.001ZM96 256.001C96 242.743 106.746 232.001 120 232.001S144 242.743 144 256.001C144 269.254 133.254 280.001 120 280.001S96 269.254 96 256.001ZM152 352.001C138.746 352.001 128 341.254 128 328.001C128 314.743 138.746 304.001 152 304.001S176 314.743 176 328.001C176 341.254 165.254 352.001 152 352.001ZM160 256.001C160 238.329 174.326 224.001 192 224.001S224 238.329 224 256.001S209.674 288.001 192 288.001S160 273.672 160 256.001ZM232 352.001C218.746 352.001 208 341.254 208 328.001C208 314.743 218.746 304.001 232 304.001S256 314.743 256 328.001C256 341.254 245.254 352.001 232 352.001ZM264 280.001C250.746 280.001 240 269.254 240 256.001C240 242.743 250.746 232.001 264 232.001S288 242.743 288 256.001C288 269.254 277.254 280.001 264 280.001Z" />
            <path d="M152 160.001C165.254 160.001 176 170.743 176 184.001C176 197.254 165.254 208.001 152 208.001S128 197.254 128 184.001C128 170.743 138.746 160.001 152 160.001ZM152 352.001C138.746 352.001 128 341.254 128 328.001C128 314.743 138.746 304.001 152 304.001S176 314.743 176 328.001C176 341.254 165.254 352.001 152 352.001ZM264 280.001C250.746 280.001 240 269.254 240 256.001C240 242.743 250.746 232.001 264 232.001S288 242.743 288 256.001C288 269.254 277.254 280.001 264 280.001ZM288 0H96C78.375 0 64 14.375 64 32V80H320V32C320 14.375 305.625 0 288 0ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V432H64V480Z" />
        </Icon>
    </>
}