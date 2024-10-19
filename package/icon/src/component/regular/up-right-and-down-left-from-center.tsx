
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-right-and-down-left-from-center` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-and-down-left-from-center?s=regular up-right-and-down-left-from-center}
 * @preview ![up-right-and-down-left-from-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODMuMDI3IDI5NS4wMzFMMTAxLjY1MiAzNzYuNDA2TDU0LjYyMyAzMjkuMzc5QzQ4LjQ5NiAzMjMuMjYyIDQwLjMyNiAzMjAuMDI3IDMxLjk5NCAzMjAuMDI3QzI3Ljg3NyAzMjAuMDI3IDIzLjcxOSAzMjAuODIgMTkuNzUgMzIyLjQ0MUM3Ljc4MSAzMjcuMzk1IDAgMzM5LjA2NiAwIDM1MlY0ODhDMCA1MDEuMjU0IDEwLjc0NCA1MTIgMjQgNTEySDE1OS45OThDMTcyLjkzNiA1MTIgMTg0LjYyMyA1MDQuMjAzIDE4OS41NjEgNDkyLjI1QzE5NC41MjkgNDgwLjI4MSAxOTEuNzc5IDQ2Ni41MzEgMTgyLjYyMyA0NTcuMzc1TDEzNS41OSA0MTAuMzQ0TDIxNi45NjUgMzI4Ljk2OUMyMjYuMzQgMzE5LjU5NCAyMjYuMzQgMzA0LjQwNiAyMTYuOTY1IDI5NS4wMzFTMTkyLjQwMiAyODUuNjU2IDE4My4wMjcgMjk1LjAzMVpNNDg3Ljk5NiAwSDM1MS45OThDMzM5LjA2MSAwIDMyNy4zNzMgNy43OTcgMzIyLjQzNiAxOS43NUMzMTcuNDY3IDMxLjcxOSAzMjAuMjE3IDQ1LjQ2OSAzMjkuMzczIDU0LjYyNUwzNzYuNDA2IDEwMS42NTZMMjk1LjAzMSAxODMuMDMxQzI4NS42NTYgMTkyLjQwNiAyODUuNjU2IDIwNy41OTQgMjk1LjAzMSAyMTYuOTY5UzMxOS41OTQgMjI2LjM0NCAzMjguOTY5IDIxNi45NjlMNDEwLjM0NCAxMzUuNTk0TDQ1Ny4zNzMgMTgyLjYyMUM0NjMuNSAxODguNzM4IDQ3MS42NyAxOTEuOTczIDQ4MC4wMDIgMTkxLjk3M0M0ODQuMTE5IDE5MS45NzMgNDg4LjI3NyAxOTEuMTggNDkyLjI0NiAxODkuNTU5QzUwNC4yMTUgMTg0LjYwNSA1MTEuOTk2IDE3Mi45MzQgNTExLjk5NiAxNjBWMjRDNTExLjk5NiAxMC43NDYgNTAxLjI1MiAwIDQ4Ny45OTYgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UpRightAndDownLeftFromCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M183.027 295.031L101.652 376.406L54.623 329.379C48.496 323.262 40.326 320.027 31.994 320.027C27.877 320.027 23.719 320.82 19.75 322.441C7.781 327.395 0 339.066 0 352V488C0 501.254 10.744 512 24 512H159.998C172.936 512 184.623 504.203 189.561 492.25C194.529 480.281 191.779 466.531 182.623 457.375L135.59 410.344L216.965 328.969C226.34 319.594 226.34 304.406 216.965 295.031S192.402 285.656 183.027 295.031ZM487.996 0H351.998C339.061 0 327.373 7.797 322.436 19.75C317.467 31.719 320.217 45.469 329.373 54.625L376.406 101.656L295.031 183.031C285.656 192.406 285.656 207.594 295.031 216.969S319.594 226.344 328.969 216.969L410.344 135.594L457.373 182.621C463.5 188.738 471.67 191.973 480.002 191.973C484.119 191.973 488.277 191.18 492.246 189.559C504.215 184.605 511.996 172.934 511.996 160V24C511.996 10.746 501.252 0 487.996 0Z" />
        </Icon>
    </>
}