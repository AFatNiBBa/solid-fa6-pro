
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-tanakh` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-tanakh?s=light book-tanakh}
 * @preview ![book-tanakh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWMzY4QzAgMzg4LjgzMiAxMy40MTYgNDA2LjQyNiAzMiA0MTMuMDU1VjQ4MEgxNkM3LjE1NiA0ODAgMCA0ODcuMTU2IDAgNDk2UzcuMTU2IDUxMiAxNiA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ0IDQ0OCA0NDhWODBDNDQ4IDM1LjgxNiA0MTIuMTg0IDAgMzY4IDBaTTM4NCA0ODBINjRWNDE2SDM4NEM0MDEuNjQxIDQxNiA0MTYgNDMwLjM1OSA0MTYgNDQ4UzQwMS42NDEgNDgwIDM4NCA0ODBaTTQxNiAzOTIuODk4QzQwNi41NDkgMzg3LjM5MSAzOTUuNzA5IDM4NCAzODQgMzg0SDQ4QzM5LjE2NCAzODQgMzIgMzc2LjgzNiAzMiAzNjhWNDhDMzIgMzkuMTY0IDM5LjE2NCAzMiA0OCAzMkgzNjhDMzk0LjUxIDMyIDQxNiA1My40OTIgNDE2IDgwVjM5Mi44OThaTTMxNC42MjUgMjA4TDM0Mi4yNSAxNjEuNjI1QzM0NS45OTkgMTU1LjUgMzQ1Ljk5OSAxNDcuNzUgMzQyLjUgMTQxLjVDMzM5IDEzNS4yNSAzMzIuMjUgMTMxLjM3NSAzMjUuMTI1IDEzMS4zNzVIMjY4Ljc1TDI0MSA4NS4xMjVDMjM3LjM3NSA3OS4xMjUgMjMxLjEyNSA3NC43NSAyMjQgNzUuNUMyMTYuODc1IDc1LjUgMjEwLjM3NSA3OS4yNSAyMDYuNzUgODUuMjVMMTc5LjEyNSAxMzEuNUgxMjIuODc1QzExNS42MjUgMTMxLjM3NSAxMDkgMTM1LjI1IDEwNS4zNzUgMTQxLjYyNUMxMDEuNzUgMTQ3Ljc1IDEwMS44NzUgMTU1LjUgMTA1LjYyNSAxNjEuNjI1TDEzMy4zNzUgMjA4TDEwNS43NSAyNTQuMzc1QzEwMS45OTkgMjYwLjUgMTAxLjk5OSAyNjguMjUgMTA1LjUgMjc0LjVDMTA5IDI4MC43NSAxMTUuNzUgMjg0LjYyNSAxMjIuODc1IDI4NC42MjVIMTc5LjI1TDIwNyAzMzAuODc1QzIxMC41IDMzNi44NzUgMjE3IDM0MC41IDIyNCAzNDAuNUMyMzEuMTI1IDM0MC41IDIzNy42MjUgMzM2Ljc1IDI0MS4yNSAzMzAuNzVMMjY4Ljg3NSAyODQuNUgzMjUuMTI1QzMzMi4zNzUgMjg0LjYyNSAzMzkgMjgwLjc1IDM0Mi42MjUgMjc0LjM3NUMzNDYuMjUgMjY4LjI1IDM0Ni4xMjUgMjYwLjUgMzQyLjM3NSAyNTQuMzc1TDMxNC42MjUgMjA4Wk0zMTcuOTk5IDE1NS4zNzVMMzAwLjYyNSAxODQuNjI1TDI4My4xMjUgMTU1LjVMMzE3Ljk5OSAxNTUuMzc1Wk0yMjQgMTAzLjM3NUwyNDAuNzUgMTMxLjVIMjA3LjEyNUwyMjQgMTAzLjM3NVpNMTI5Ljk5OSAxNTUuNUgxNjQuODc1TDE0Ny4zNzUgMTg0LjYyNUwxMjkuOTk5IDE1NS41Wk0xMjkuOTk5IDI2MC41TDE0Ny41IDIzMS4zNzVMMTY1IDI2MC41SDEyOS45OTlaTTIyNCAzMTIuNjI1TDIwNy4yNSAyODQuNUgyNDAuNzVMMjI0IDMxMi42MjVaTTI1NS4xMjUgMjYwLjVIMTkyLjg3NUwxNjEuMzc1IDIwOEwxOTIuODc1IDE1NS41SDI1NS4xMjVMMjg2LjYyNSAyMDhMMjU1LjEyNSAyNjAuNVpNMjgzLjEyNSAyNjAuNUwzMDAuNjI1IDIzMS4zNzVMMzE3Ljk5OSAyNjAuNUgyODMuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookTanakh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 0H48C21.49 0 0 21.492 0 48V368C0 388.832 13.416 406.426 32 413.055V480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H384C419.346 512 448 483.344 448 448V80C448 35.816 412.184 0 368 0ZM384 480H64V416H384C401.641 416 416 430.359 416 448S401.641 480 384 480ZM416 392.898C406.549 387.391 395.709 384 384 384H48C39.164 384 32 376.836 32 368V48C32 39.164 39.164 32 48 32H368C394.51 32 416 53.492 416 80V392.898ZM314.625 208L342.25 161.625C345.999 155.5 345.999 147.75 342.5 141.5C339 135.25 332.25 131.375 325.125 131.375H268.75L241 85.125C237.375 79.125 231.125 74.75 224 75.5C216.875 75.5 210.375 79.25 206.75 85.25L179.125 131.5H122.875C115.625 131.375 109 135.25 105.375 141.625C101.75 147.75 101.875 155.5 105.625 161.625L133.375 208L105.75 254.375C101.999 260.5 101.999 268.25 105.5 274.5C109 280.75 115.75 284.625 122.875 284.625H179.25L207 330.875C210.5 336.875 217 340.5 224 340.5C231.125 340.5 237.625 336.75 241.25 330.75L268.875 284.5H325.125C332.375 284.625 339 280.75 342.625 274.375C346.25 268.25 346.125 260.5 342.375 254.375L314.625 208ZM317.999 155.375L300.625 184.625L283.125 155.5L317.999 155.375ZM224 103.375L240.75 131.5H207.125L224 103.375ZM129.999 155.5H164.875L147.375 184.625L129.999 155.5ZM129.999 260.5L147.5 231.375L165 260.5H129.999ZM224 312.625L207.25 284.5H240.75L224 312.625ZM255.125 260.5H192.875L161.375 208L192.875 155.5H255.125L286.625 208L255.125 260.5ZM283.125 260.5L300.625 231.375L317.999 260.5H283.125Z" />
        </Icon>
    </>
}