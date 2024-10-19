
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `smoke` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/smoke?s=solid smoke}
 * @preview ![smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMTkyQzE1My44NzUgMTkyIDE2My41IDE5Mi44NzUgMTczLjEyNSAxOTQuNUMxOTcuMjUgMTM2Ljc1IDI1My43NSA5NiAzMjAgOTZDMzQ2LjI1IDk2IDM3MiAxMDIuNzUgMzk1LjEyNSAxMTUuMjVDNDA0LjM3NSAxMDUgNDE1LjI1IDk2Ljc1IDQyNi43NSA4OS4zNzVDNDAzLjc1IDU0Ljg3NSAzNjQuNjI1IDMyIDMyMCAzMkMyODguMzc1IDMyIDI1OS44NzUgNDMuODc1IDIzNy42MjUgNjIuNzVDMjE1LjI1IDI1LjI1IDE3NC43NSAwIDEyOCAwQzU3LjI1IDAgMCA1Ny4yNSAwIDEyOEMwIDE2Ni4yNSAxNy4xMjUgMjAwLjEyNSA0My43NSAyMjMuNjI1QzcyLjI1IDIwMy43NSAxMDYuNzUgMTkyIDE0NCAxOTJaTTQwMi4zNzUgMTU4Ljc1QzM4MC4xMjUgMTM5Ljg3NSAzNTEuNjI1IDEyOCAzMjAgMTI4QzI2OC4yNSAxMjggMjI0LjEyNSAxNTguNzUgMjAzLjg3NSAyMDIuNzVDMjE5LjUgMjA4LjUgMjM0LjUgMjE2LjI1IDI0OCAyMjYuMjVDMjc4IDIwNCAzMTQgMTkyIDM1MiAxOTJDNDA2Ljg3NSAxOTIgNDU4IDIxNy44NzUgNDkxIDI2MS4xMjVDNTAzLjEyNSAyNTcuNzUgNTE1LjUgMjU2IDUyOCAyNTZDNTYzLjUgMjU2IDU5NS42MjUgMjY5LjM3NSA2MjAuNzUgMjkwLjc1QzYzMi43NSAyNzEuMjUgNjQwIDI0OC42MjUgNjQwIDIyNEM2NDAgMTUzLjI1IDU4Mi43NSA5NiA1MTIgOTZDNDY1LjI1IDk2IDQyNC43NSAxMjEuMjUgNDAyLjM3NSAxNTguNzVaTTUyOCAyODhDNTEwIDI4OCA0OTMuMjUgMjkyLjYyNSA0NzguMjUgMzAwLjEyNUM0NTQgMjU1IDQwNi43NSAyMjQgMzUyIDIyNEMzMTEgMjI0IDI3NC4yNSAyNDEuMjUgMjQ4IDI2OC43NUMyMjEuNzUgMjQxLjI1IDE4NSAyMjQgMTQ0IDIyNEM2NC41IDIyNCAwIDI4OC41IDAgMzY4UzY0LjUgNTEyIDE0NCA1MTJINTI4QzU4OS44NzUgNTEyIDY0MCA0NjEuODc1IDY0MCA0MDBTNTg5Ljg3NSAyODggNTI4IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Smoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M144 192C153.875 192 163.5 192.875 173.125 194.5C197.25 136.75 253.75 96 320 96C346.25 96 372 102.75 395.125 115.25C404.375 105 415.25 96.75 426.75 89.375C403.75 54.875 364.625 32 320 32C288.375 32 259.875 43.875 237.625 62.75C215.25 25.25 174.75 0 128 0C57.25 0 0 57.25 0 128C0 166.25 17.125 200.125 43.75 223.625C72.25 203.75 106.75 192 144 192ZM402.375 158.75C380.125 139.875 351.625 128 320 128C268.25 128 224.125 158.75 203.875 202.75C219.5 208.5 234.5 216.25 248 226.25C278 204 314 192 352 192C406.875 192 458 217.875 491 261.125C503.125 257.75 515.5 256 528 256C563.5 256 595.625 269.375 620.75 290.75C632.75 271.25 640 248.625 640 224C640 153.25 582.75 96 512 96C465.25 96 424.75 121.25 402.375 158.75ZM528 288C510 288 493.25 292.625 478.25 300.125C454 255 406.75 224 352 224C311 224 274.25 241.25 248 268.75C221.75 241.25 185 224 144 224C64.5 224 0 288.5 0 368S64.5 512 144 512H528C589.875 512 640 461.875 640 400S589.875 288 528 288Z" />
        </Icon>
    </>
}