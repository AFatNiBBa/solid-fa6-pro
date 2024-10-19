
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volume-xmark` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=regular volume-xmark}
 * @preview ![volume-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDEuMTA5IDM0LjgxOEMyOTYuOTA4IDMyLjkyMiAyOTIuNDQ1IDMxLjk5OCAyODguMDE0IDMxLjk5OEMyODAuMzE2IDMxLjk5OCAyNzIuNzE1IDM0Ljc4MyAyNjYuNzM0IDQwLjFMMTMxLjg0IDE2MC4wMDRINDhDMjEuNDkgMTYwLjAwNCAwIDE4MS40OTYgMCAyMDguMDA0VjMwNC4wMDJDMCAzMzAuNTEgMjEuNDkgMzUyLjAwMiA0OCAzNTIuMDAySDEzMS44NEwyNjYuNzM0IDQ3MS45MDZDMjcyLjcxOSA0NzcuMjE5IDI4MC4zMTIgNDgwIDI4OCA0ODBDMjkyLjQzOCA0ODAgMjk2LjkwNiA0NzkuMDk0IDMwMS4xMDkgNDc3LjE4OEMzMTIuNjA5IDQ3Mi4wMzEgMzIwIDQ2MC41OTQgMzIwIDQ0OFY2NC4wMDZDMzIwIDUxLjQxMiAzMTIuNjA5IDM5Ljk3NSAzMDEuMTA5IDM0LjgxOFpNMjcyIDQxMi4zNjVMMTUwLjA5IDMwNC4wMDJINDhWMjA4LjAwNEgxNTAuMDlMMjcyIDk5LjY0MVY0MTIuMzY1Wk01MTMuOTM4IDI1Nkw1NjAuOTY5IDIwOC45NjlDNTcwLjM0NCAxOTkuNTk0IDU3MC4zNDQgMTg0LjQwNiA1NjAuOTY5IDE3NS4wMzFTNTM2LjQwNiAxNjUuNjU2IDUyNy4wMzEgMTc1LjAzMUw0ODAgMjIyLjA2Mkw0MzIuOTY5IDE3NS4wMzFDNDIzLjU5NCAxNjUuNjU2IDQwOC40MDYgMTY1LjY1NiAzOTkuMDMxIDE3NS4wMzFTMzg5LjY1NiAxOTkuNTk0IDM5OS4wMzEgMjA4Ljk2OUw0NDYuMDYyIDI1NkwzOTkuMDMxIDMwMy4wMzFDMzg5LjY1NiAzMTIuNDA2IDM4OS42NTYgMzI3LjU5NCAzOTkuMDMxIDMzNi45NjlDNDA4LjQwNCAzNDYuMzQyIDQyMy41ODggMzQ2LjM1IDQzMi45NjkgMzM2Ljk2OUw0ODAgMjg5LjkzOEw1MjcuMDMxIDMzNi45NjlDNTM2LjQwNCAzNDYuMzQyIDU1MS41ODggMzQ2LjM1IDU2MC45NjkgMzM2Ljk2OUM1NzAuMzQ0IDMyNy41OTQgNTcwLjM0NCAzMTIuNDA2IDU2MC45NjkgMzAzLjAzMUw1MTMuOTM4IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function VolumeXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M301.109 34.818C296.908 32.922 292.445 31.998 288.014 31.998C280.316 31.998 272.715 34.783 266.734 40.1L131.84 160.004H48C21.49 160.004 0 181.496 0 208.004V304.002C0 330.51 21.49 352.002 48 352.002H131.84L266.734 471.906C272.719 477.219 280.312 480 288 480C292.438 480 296.906 479.094 301.109 477.188C312.609 472.031 320 460.594 320 448V64.006C320 51.412 312.609 39.975 301.109 34.818ZM272 412.365L150.09 304.002H48V208.004H150.09L272 99.641V412.365ZM513.938 256L560.969 208.969C570.344 199.594 570.344 184.406 560.969 175.031S536.406 165.656 527.031 175.031L480 222.062L432.969 175.031C423.594 165.656 408.406 165.656 399.031 175.031S389.656 199.594 399.031 208.969L446.062 256L399.031 303.031C389.656 312.406 389.656 327.594 399.031 336.969C408.404 346.342 423.588 346.35 432.969 336.969L480 289.938L527.031 336.969C536.404 346.342 551.588 346.35 560.969 336.969C570.344 327.594 570.344 312.406 560.969 303.031L513.938 256Z" />
        </Icon>
    </>
}