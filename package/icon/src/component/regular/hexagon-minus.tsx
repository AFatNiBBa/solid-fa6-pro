
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon-minus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=regular hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDIzMy4zNjVMNDAwLjQzNyA1NC4xNjZDMzkyLjMyMiA0MC41MTYgMzc3LjUwMiAzMiAzNjEuMzg3IDMySDE1MC42MTNDMTM0LjQ5OCAzMiAxMTkuNjc4IDQwLjUxNiAxMTEuNTYzIDU0LjE2Nkw2LjE3NiAyMzMuMzY1Qy0yLjA1OSAyNDcuMzY1IC0yLjA1OSAyNjQuNjMzIDYuMTc2IDI3OC42MzNMMTExLjU2MyA0NTcuODMyQzExOS42NzggNDcxLjQ4MiAxMzQuNDk4IDQ4MCAxNTAuNjEzIDQ4MEgzNjEuMzg3QzM3Ny41MDIgNDgwIDM5Mi4zMjIgNDcxLjQ4MiA0MDAuNDM3IDQ1Ny44MzJMNTA1LjgyNCAyNzguNjMzQzUxNC4wNTkgMjY0LjYzMyA1MTQuMDU5IDI0Ny4zNjUgNTA1LjgyNCAyMzMuMzY1Wk0zNTkuOTQ1IDQzMkgxNTIuMDU3TDQ4LjU1MSAyNTZMMTUyLjA1NSA4MEgzNTkuOTQ1TDQ2My40NTEgMjU1Ljk5OEwzNTkuOTQ1IDQzMlpNMTYwIDIzMkMxNDYuNzQ2IDIzMiAxMzYgMjQyLjc0NCAxMzYgMjU2QzEzNiAyNjkuMjU0IDE0Ni43NDYgMjgwIDE2MCAyODBIMzUyQzM2NS4yNTQgMjgwIDM3NiAyNjkuMjU0IDM3NiAyNTZDMzc2IDI0Mi43NDQgMzY1LjI1NCAyMzIgMzUyIDIzMkgxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HexagonMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM359.945 432H152.057L48.551 256L152.055 80H359.945L463.451 255.998L359.945 432ZM160 232C146.746 232 136 242.744 136 256C136 269.254 146.746 280 160 280H352C365.254 280 376 269.254 376 256C376 242.744 365.254 232 352 232H160Z" />
        </Icon>
    </>
}