
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hands-horns` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-horns?s=solid hands-horns}
 * @preview ![hands-horns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODguMDA4IDMyMEMzMDUuNjk2IDMyMCAzMjAuMDA4IDMwNS42NzIgMzIwLjAwOCAyODhWMjI0QzMyMC4wMDggMjA2LjMyOCAzMDUuNjk2IDE5MiAyODguMDA4IDE5MlMyNTYuMDA4IDIwNi4zMjggMjU2LjAwOCAyMjRWMjg4QzI1Ni4wMDggMzA1LjY3MiAyNzAuMzIxIDMyMCAyODguMDA4IDMyMFpNMjI0LjAwOCAyODcuNTE2VjE5MkMyMjQuMDA4IDE3NC4zMjggMjA5LjY5NiAxNjAgMTkyLjAwOCAxNjBTMTYwLjAwOCAxNzQuMzI4IDE2MC4wMDggMTkyVjI0OC4xNDFDMTg2Ljk5NCAyNDguMTY2IDIxMS43OTUgMjYzLjQ3MSAyMjQuMDA4IDI4Ny41MTZaTTM4NC4wMDggNjRDMzY2LjMyMSA2NCAzNTIuMDA4IDc4LjMyOCAzNTIuMDA4IDk2VjI4OEMzNTIuMDA4IDMyMy4zNDQgMzIzLjM1MiAzNTIgMjg4LjAwOCAzNTJDMjY4Ljc4MyAzNTIgMjUxLjc0IDM0My4zNDYgMjQwLjAwOCAzMjkuOTI2QzIzNi43MTcgMzMzLjY4OSAyMzIuOTI0IDMzNi45NTkgMjI4Ljg2NSAzMzkuODg3QzIyMS44MTUgMzY0LjIwMyAyMDIuNDQ2IDM4NC4xNzQgMTc2LjAwOCAzOTAuMjAzTDExNC44NjcgNDA0LjE1TDk2LjUwOCAzNzUuNTE2TDE2OC45MTQgMzU5QzE4Ny40NTQgMzU0Ljc2MiAyMDAuMDE3IDMzOC4yNzggMjAwLjAxNyAzMjAuMDMzQzIwMC4wMTcgMjk5LjYyIDE4My43NTkgMjgwLjAwMiAxNjAuMDQ4IDI4MC4wMDJDMTU3LjEwMyAyODAuMDAyIDE1NC4xMDYgMjgwLjMyNiAxNTEuMTAyIDI4MUwzMS4xMDIgMzA4LjM3NUMxLjg4NSAzMTUuMDU0IDAgMzQzLjA2OSAwIDM0Ny4zODhDMCAzNTIuOTcgMS4xNjcgMzU4LjU1NCAzLjUwOCAzNjMuNzY2TDI1LjYwMiA0MTIuODc1QzUyLjY2NCA0NzMuMDk0IDExMi43ODkgNTEyIDE3OC44MjEgNTEySDI0MC4wMDhDMzM3LjAzOSA1MTIgNDE2LjAwOCA0MzMuMDQ3IDQxNi4wMDggMzM2Vjk2QzQxNi4wMDggNzguMzI4IDQwMS42OTYgNjQgMzg0LjAwOCA2NFpNMTI4LjAwOCAzMkMxMjguMDA4IDE0LjMyOCAxMTMuNjk2IDAgOTYuMDA4IDBTNjQuMDA4IDE0LjMyOCA2NC4wMDggMzJWMjY4LjA0N0wxMjguMDA4IDI1My40NDdWMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandsHorns(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M288.008 320C305.696 320 320.008 305.672 320.008 288V224C320.008 206.328 305.696 192 288.008 192S256.008 206.328 256.008 224V288C256.008 305.672 270.321 320 288.008 320ZM224.008 287.516V192C224.008 174.328 209.696 160 192.008 160S160.008 174.328 160.008 192V248.141C186.994 248.166 211.795 263.471 224.008 287.516ZM384.008 64C366.321 64 352.008 78.328 352.008 96V288C352.008 323.344 323.352 352 288.008 352C268.783 352 251.74 343.346 240.008 329.926C236.717 333.689 232.924 336.959 228.865 339.887C221.815 364.203 202.446 384.174 176.008 390.203L114.867 404.15L96.508 375.516L168.914 359C187.454 354.762 200.017 338.278 200.017 320.033C200.017 299.62 183.759 280.002 160.048 280.002C157.103 280.002 154.106 280.326 151.102 281L31.102 308.375C1.885 315.054 0 343.069 0 347.388C0 352.97 1.167 358.554 3.508 363.766L25.602 412.875C52.664 473.094 112.789 512 178.821 512H240.008C337.039 512 416.008 433.047 416.008 336V96C416.008 78.328 401.696 64 384.008 64ZM128.008 32C128.008 14.328 113.696 0 96.008 0S64.008 14.328 64.008 32V268.047L128.008 253.447V32Z" />
        </Icon>
    </>
}