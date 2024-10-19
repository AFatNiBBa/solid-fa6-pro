
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lamp` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=light lamp}
 * @preview ![lamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDUuNDg0IDIxMS4zNzVMMzY3Ljk4MiAxOS4zNzVDMzYzLjIzMiA3LjYyNSAzNTIuMzU3IDAgMzQwLjM1NSAwSDEyMC41OTdDMTA5LjIyMiAwIDk4LjcyMiA2Ljc1IDkzLjU5NyAxNy43NUwzLjIxOCAyMDkuNzVDLTYuNzgyIDIzMSA3LjcxOCAyNTYgMzAuMjE4IDI1NkgyMDhWMjg4SDE5OC4xMDlDMTcxLjEyNSAyODggMTQ2LjA2MiAzMDEuNSAxMzEuMDMxIDMyNC4xNTZDMTA5LjQyMSAzNTYuNjU2IDk2IDM5NS4xODggOTYgNDI0LjY1NkM5NiA0NTIuMTU2IDEwNy4wNjIgNDc4LjcxOSAxMjcuMTA5IDQ5OS40MDZDMTM0LjgxMiA1MDcuNDA2IDE0Ni4xMjUgNTEyIDE1OC4xNTYgNTEySDI4OS44NDNDMzAxLjkyMSA1MTIgMzEzLjI4MSA1MDcuMzc1IDMyMS4wMTUgNDk5LjMxMkMzNDEgNDc4LjUgMzUyIDQ1MS45NjkgMzUyIDQyNC42NTZDMzUyIDM5NS4xODggMzM4LjYwOSAzNTYuNjg4IDMxNy4wNDYgMzI0LjE4OEMzMDIuMDE1IDMwMS41MzEgMjc2LjkzNyAyODggMjQ5LjkzNyAyODhIMjQwVjI1Nkg0MTcuODU5QzQzOS40ODQgMjU2IDQ1NC4xMTEgMjMyLjUgNDQ1LjQ4NCAyMTEuMzc1Wk0yNDkuOTM3IDMyMEMyNjYuMTcxIDMyMCAyODEuMjk2IDMyOC4xODggMjkwLjM3NSAzNDEuODc1QzMwOC4zNzUgMzY5IDMyMCA0MDEuNSAzMjAgNDI0LjY1NkMzMjAgNDQzLjkzOCAzMTIuMzc1IDQ2Mi4wOTQgMjk3LjkyMSA0NzcuMTU2QzI5Ni4yMDMgNDc4LjkzOCAyOTMuMTg3IDQ4MCAyODkuODQzIDQ4MEgxNTguMTU2QzE1NC44MjggNDgwIDE1MS44MjggNDc4Ljk2OSAxNTAuMTA5IDQ3Ny4xODhDMTM1LjY0IDQ2Mi4yNSAxMjggNDQ0LjA5NCAxMjggNDI0LjY1NkMxMjggNDAxLjUgMTM5LjY1NiAzNjkgMTU3LjY4NyAzNDEuODQ0QzE2Ni43NjUgMzI4LjE1NiAxODEuODc1IDMyMCAxOTguMTA5IDMyMEgyNDkuOTM3Wk0zMS44MTIgMjI0QzMxLjk4MiAyMjMuOSAzMi4xMTEgMjIzLjcxMSAzMi4xNzEgMjIzLjM3OUwxMjIuMjU5IDMySDMzOC41NjhMNDE1LjQ4NiAyMjRIMzEuODEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Lamp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M445.484 211.375L367.982 19.375C363.232 7.625 352.357 0 340.355 0H120.597C109.222 0 98.722 6.75 93.597 17.75L3.218 209.75C-6.782 231 7.718 256 30.218 256H208V288H198.109C171.125 288 146.062 301.5 131.031 324.156C109.421 356.656 96 395.188 96 424.656C96 452.156 107.062 478.719 127.109 499.406C134.812 507.406 146.125 512 158.156 512H289.843C301.921 512 313.281 507.375 321.015 499.312C341 478.5 352 451.969 352 424.656C352 395.188 338.609 356.688 317.046 324.188C302.015 301.531 276.937 288 249.937 288H240V256H417.859C439.484 256 454.111 232.5 445.484 211.375ZM249.937 320C266.171 320 281.296 328.188 290.375 341.875C308.375 369 320 401.5 320 424.656C320 443.938 312.375 462.094 297.921 477.156C296.203 478.938 293.187 480 289.843 480H158.156C154.828 480 151.828 478.969 150.109 477.188C135.64 462.25 128 444.094 128 424.656C128 401.5 139.656 369 157.687 341.844C166.765 328.156 181.875 320 198.109 320H249.937ZM31.812 224C31.982 223.9 32.111 223.711 32.171 223.379L122.259 32H338.568L415.486 224H31.812Z" />
        </Icon>
    </>
}