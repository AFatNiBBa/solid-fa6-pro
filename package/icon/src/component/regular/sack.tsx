
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sack` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=regular sack}
 * @preview ![sack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjUuOTQ4IDExNS44NzVMMzgxLjMyMSAzNC43NUMzODUuMDcxIDI3LjI1IDM4NC42OTYgMTguNSAzODAuMzIxIDExLjM3NUMzNzUuOTQ2IDQuMzc1IDM2OC4xOTYgMCAzNTkuOTQ3IDBIMTUxLjk1NUMxNDMuNTggMCAxMzUuOTU1IDQuMjUgMTMxLjU4MSAxMS4zNzVDMTI3LjIwNiAxOC41IDEyNi43MDYgMjcuMjUgMTMwLjQ1NiAzNC43NUwxODUuOTUzIDExNS44NzVDLTkuOTE0IDIzNS42MjUgMC4wODYgMzkyIDAuMDg2IDQxMkMwLjA4NiA0NjcuMjUgNDkuMjA5IDUxMiAxMDkuNzA2IDUxMkg0MDIuMTk1QzQ2Mi44MTcgNTEyIDUxMS45NCA0NjcuMjUgNTExLjk0IDQxMkM1MTEuOTQgMzkyLjM3NSA1MjAuNjkgMjM1IDMyNS45NDggMTE1Ljg3NVpNMzE0LjE5OCA0OEwyNzUuOTUgMTA0SDIzNS45NTFMMTk3LjcwMyA0OEgzMTQuMTk4Wk00NjMuOTQyIDQxMkM0NjMuOTQyIDQ0MC42MjUgNDM2LjE5MyA0NjQgNDAyLjE5NSA0NjRIMTA5LjcwNkM3NS43MDggNDY0IDQ4LjA4NCA0NDAuNjI1IDQ4LjA4NCA0MTJDNDcuMjA5IDMzMSA4MC43MDggMjM2LjUgMjE4Ljk1MiAxNTJIMjkzLjA3NEM0MzAuNTY5IDIzNi4xMjUgNDY0LjU2NyAzMzAuODc1IDQ2My45NDIgNDEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M325.948 115.875L381.321 34.75C385.071 27.25 384.696 18.5 380.321 11.375C375.946 4.375 368.196 0 359.947 0H151.955C143.58 0 135.955 4.25 131.581 11.375C127.206 18.5 126.706 27.25 130.456 34.75L185.953 115.875C-9.914 235.625 0.086 392 0.086 412C0.086 467.25 49.209 512 109.706 512H402.195C462.817 512 511.94 467.25 511.94 412C511.94 392.375 520.69 235 325.948 115.875ZM314.198 48L275.95 104H235.951L197.703 48H314.198ZM463.942 412C463.942 440.625 436.193 464 402.195 464H109.706C75.708 464 48.084 440.625 48.084 412C47.209 331 80.708 236.5 218.952 152H293.074C430.569 236.125 464.567 330.875 463.942 412Z" />
        </Icon>
    </>
}