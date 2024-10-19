
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vial` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=duotone vial}
 * @preview ![vial](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi42MjUgMTY5LjM3NUwzNDIuNjI1IDkuMzc1QzMzNi4zNzUgMy4xMjUgMzI4LjE4OCAwIDMyMCAwUzMwMy42MjUgMy4xMjUgMjk3LjM3NSA5LjM3NUMyODQuODc1IDIxLjg3NSAyODQuODc1IDQyLjEyNSAyOTcuMzc1IDU0LjYyNUwzMDQuMzUgNjEuNjAyTDMyLjkzNiAzMzIuNjI1Qy01LjgxNCAzNzEuMzc1IC0xMi4xODkgNDM0LjYyNSAyMy41NjEgNDc2LjEyNUM0NC4wNzggNTAwIDcyLjc2NCA1MTIgMTAxLjQ4OCA1MTJIMTAxLjkzNkMxMjguMzExIDUxMiAxNTQuNjg2IDUwMiAxNzQuODExIDQ4MS44NzVMNDUwLjAxIDIwNy4yNThMNDU3LjM3NSAyMTQuNjI1QzQ2My42MjUgMjIwLjg3NSA0NzEuODEzIDIyNCA0ODAgMjI0UzQ5Ni4zNzUgMjIwLjg3NSA1MDIuNjI1IDIxNC42MjVDNTE1LjEyNSAyMDIuMTI1IDUxNS4xMjUgMTgxLjg3NSA1MDIuNjI1IDE2OS4zNzVaTTEyOS41NTcgNDM2LjYyMUMxMjIuMjE3IDQ0My45NTkgMTEyLjQwOCA0NDggMTAxLjQ4OCA0NDhDOTQuODczIDQ0OCA4Mi4yNiA0NDYuMjM0IDcyLjA1MSA0MzQuMzU0QzU5LjIwNSA0MTkuNDQ1IDYxLjk2MSAzOTQuMTA5IDc4LjE1OCAzNzcuOTEyTDM0OS41NzIgMTA2Ljg4OUwzNDkuNiAxMDYuODU5TDQwNC43NSAxNjIuMDFMMTI5LjU1NyA0MzYuNjIxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTAuNiAyNTZMMTI5LjU5NiA0MzYuNjIxQzEyMi4yNTYgNDQzLjk1OSAxMTIuNDQ3IDQ0OCAxMDEuNTI4IDQ0OEM5NC45MTIgNDQ4IDgyLjI5OSA0NDYuMjM0IDcyLjA5IDQzNC4zNTRDNTkuMjQ0IDQxOS40NDUgNjIgMzk0LjEwOSA3OC4xOTcgMzc3LjkxMkwyMDAuMjg1IDI1NkgzMTAuNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Vial(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M502.625 169.375L342.625 9.375C336.375 3.125 328.188 0 320 0S303.625 3.125 297.375 9.375C284.875 21.875 284.875 42.125 297.375 54.625L304.35 61.602L32.936 332.625C-5.814 371.375 -12.189 434.625 23.561 476.125C44.078 500 72.764 512 101.488 512H101.936C128.311 512 154.686 502 174.811 481.875L450.01 207.258L457.375 214.625C463.625 220.875 471.813 224 480 224S496.375 220.875 502.625 214.625C515.125 202.125 515.125 181.875 502.625 169.375ZM129.557 436.621C122.217 443.959 112.408 448 101.488 448C94.873 448 82.26 446.234 72.051 434.354C59.205 419.445 61.961 394.109 78.158 377.912L349.572 106.889L349.6 106.859L404.75 162.01L129.557 436.621Z" />
            <path d="M310.6 256L129.596 436.621C122.256 443.959 112.447 448 101.528 448C94.912 448 82.299 446.234 72.09 434.354C59.244 419.445 62 394.109 78.197 377.912L200.285 256H310.6Z" />
        </Icon>
    </>
}