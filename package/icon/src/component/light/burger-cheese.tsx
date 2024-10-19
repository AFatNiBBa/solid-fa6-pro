
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `burger-cheese` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=light burger-cheese}
 * @preview ![burger-cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTQ0QzI2NC44NzUgMTQ0IDI3MiAxMzYuODc1IDI3MiAxMjhTMjY0Ljg3NSAxMTIgMjU2IDExMlMyNDAgMTE5LjEyNSAyNDAgMTI4UzI0Ny4xMjUgMTQ0IDI1NiAxNDRaTTM1MiAxNzZDMzYwLjg3NSAxNzYgMzY4IDE2OC44NzUgMzY4IDE2MFMzNjAuODc1IDE0NCAzNTIgMTQ0UzMzNiAxNTEuMTI1IDMzNiAxNjBTMzQzLjEyNSAxNzYgMzUyIDE3NlpNNTEyIDMwNEM1MTIgMjgxLjE3MiA0OTkuOTAyIDI2MS4yNDYgNDgxLjg3MSAyNDkuOTE2QzQ4My40NDEgMjQ3LjgzNCA0ODUuMTg4IDI0NS45OSA0ODYuNTQ3IDI0My42NDFDNDk5LjA5NCAyMjEuOTM3IDQ5OS4xMDkgMTkzLjg3NSA0ODYuNTc4IDE3Mi4xMjVDNDQzLjA5NCA5Ni44NDQgMzUyLjU5NCA0OC4xMjUgMjU1Ljk4NCA0OEMxNTkuNDUzIDQ4LjEyNSA2OC45MDYgOTYuODQ0IDI1LjI5NyAxNzIuMTQxQzEyLjc4MSAxOTMuODQ0IDEyLjgxMiAyMjEuODkxIDI1LjM1OSAyNDMuNjA5QzI2LjczIDI0NS45ODIgMjguNDkgMjQ3Ljg0NiAzMC4wNzYgMjQ5Ljk0NUMxMi4wNzQgMjYxLjI4MSAwIDI4MS4xOTMgMCAzMDRDMCAzMjIuODUyIDguMzQyIDMzOS42NDggMjEuMzQ4IDM1MS4zNjlDMTguMjU4IDM1Ni4yOTEgMTYgMzYxLjc3MyAxNiAzNjhWMzg0QzE2IDQyOC4xMDkgNTEuODkxIDQ2NCA5NiA0NjRINDE2QzQ2MC4xMDkgNDY0IDQ5NiA0MjguMTA5IDQ5NiAzODRWMzY4QzQ5NiAzNjEuNzczIDQ5My43NDIgMzU2LjI5MSA0OTAuNjUyIDM1MS4zNjlDNTAzLjY1OCAzMzkuNjQ4IDUxMiAzMjIuODUyIDUxMiAzMDRaTTUzIDE4OC4xNDFDOTAuNDA2IDEyMy41NjIgMTcyIDgwLjEwOSAyNTUuOTg0IDgwQzM0MC4wNDcgODAuMTA5IDQyMS41NzggMTIzLjU2MiA0NTguODU5IDE4OC4xMDlDNDY2LjcxOSAyMDEuNzY2IDQ2NC41MTYgMjE3Ljc5NyA0NTguODQ0IDIyNy42MjVDNDU2LjE3MiAyMzIuMjUgNDUwLjE4OCAyNDAgNDQwLjE1NiAyNDBINzEuNzE5QzYxLjczNCAyNDAgNTUuNzUgMjMyLjIzNCA1My4wNzggMjI3LjU5NEM0Ny4zOTEgMjE3Ljc2NiA0NS4xNzIgMjAxLjczNCA1MyAxODguMTQxWk0zNzcuMzc1IDI3MkwzMjAgMzI5LjM3NUwyNjIuNjI1IDI3MkgzNzcuMzc1Wk0zMiAzMDRDMzIgMjg2LjM1OSA0Ni4zNTkgMjcyIDY0IDI3MkgyMTcuMzc1TDI4MS4zNzUgMzM2SDY0QzQ2LjM1OSAzMzYgMzIgMzIxLjY0MSAzMiAzMDRaTTQ2NCAzODRDNDY0IDQxMC40NjkgNDQyLjQ2OSA0MzIgNDE2IDQzMkg5NkM2OS41MzEgNDMyIDQ4IDQxMC40NjkgNDggMzg0VjM2OEg0NjRWMzg0Wk00NDggMzM2SDM1OC42MjVMNDIyLjYyNSAyNzJINDQ4QzQ2NS42NDEgMjcyIDQ4MCAyODYuMzU5IDQ4MCAzMDRTNDY1LjY0MSAzMzYgNDQ4IDMzNlpNMTYwIDE3NkMxNjguODc1IDE3NiAxNzYgMTY4Ljg3NSAxNzYgMTYwUzE2OC44NzUgMTQ0IDE2MCAxNDRTMTQ0IDE1MS4xMjUgMTQ0IDE2MFMxNTEuMTI1IDE3NiAxNjAgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BurgerCheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 144C264.875 144 272 136.875 272 128S264.875 112 256 112S240 119.125 240 128S247.125 144 256 144ZM352 176C360.875 176 368 168.875 368 160S360.875 144 352 144S336 151.125 336 160S343.125 176 352 176ZM512 304C512 281.172 499.902 261.246 481.871 249.916C483.441 247.834 485.188 245.99 486.547 243.641C499.094 221.937 499.109 193.875 486.578 172.125C443.094 96.844 352.594 48.125 255.984 48C159.453 48.125 68.906 96.844 25.297 172.141C12.781 193.844 12.812 221.891 25.359 243.609C26.73 245.982 28.49 247.846 30.076 249.945C12.074 261.281 0 281.193 0 304C0 322.852 8.342 339.648 21.348 351.369C18.258 356.291 16 361.773 16 368V384C16 428.109 51.891 464 96 464H416C460.109 464 496 428.109 496 384V368C496 361.773 493.742 356.291 490.652 351.369C503.658 339.648 512 322.852 512 304ZM53 188.141C90.406 123.562 172 80.109 255.984 80C340.047 80.109 421.578 123.562 458.859 188.109C466.719 201.766 464.516 217.797 458.844 227.625C456.172 232.25 450.188 240 440.156 240H71.719C61.734 240 55.75 232.234 53.078 227.594C47.391 217.766 45.172 201.734 53 188.141ZM377.375 272L320 329.375L262.625 272H377.375ZM32 304C32 286.359 46.359 272 64 272H217.375L281.375 336H64C46.359 336 32 321.641 32 304ZM464 384C464 410.469 442.469 432 416 432H96C69.531 432 48 410.469 48 384V368H464V384ZM448 336H358.625L422.625 272H448C465.641 272 480 286.359 480 304S465.641 336 448 336ZM160 176C168.875 176 176 168.875 176 160S168.875 144 160 144S144 151.125 144 160S151.125 176 160 176Z" />
        </Icon>
    </>
}