
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `less-than-equal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=light less-than-equal}
 * @preview ![less-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MS45MzggMjA2LjgzNEwzOTMuOTM4IDM1MC44MjJDMzk1LjkyMiAzNTEuNjM1IDM5Ny45NjkgMzUyLjAxIDQwMCAzNTIuMDFDNDA2LjI5NyAzNTIuMDEgNDEyLjI4MSAzNDguMjYgNDE0LjgxMiAzNDIuMDcyQzQxOC4xNTYgMzMzLjg4NyA0MTQuMjM0IDMyNC41NDMgNDA2LjA2MiAzMjEuMTk5TDkwLjI1IDE5Mi4wMjFMNDA2LjA2MiA2Mi44NDRDNDE0LjIzNCA1OS41MDIgNDE4LjE1NiA1MC4xNTggNDE0LjgxMiA0MS45NzFDNDExLjQ1MyAzMy43ODUgNDAyLjA3OCAyOS44MTYgMzkzLjkzNyAzMy4yMjNMNDEuOTM3IDE3Ny4yMTFDMzUuOTIyIDE3OS42OCAzMiAxODUuNTIzIDMyIDE5Mi4wMjFDMzIgMTk4LjUyMSAzNS45MjIgMjA0LjM2NSA0MS45MzggMjA2LjgzNFpNNDMyIDQ0OC4wMDJIMTZDNy4xNTYgNDQ4LjAwMiAwIDQ1NS4xNTggMCA0NjQuMDAyQzAgNDcyLjg0NCA3LjE1NiA0ODAgMTYgNDgwSDQzMkM0NDAuODQ0IDQ4MCA0NDggNDcyLjg0NCA0NDggNDY0LjAwMkM0NDggNDU1LjE1OCA0NDAuODQ0IDQ0OC4wMDIgNDMyIDQ0OC4wMDJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LessThanEqual(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M41.938 206.834L393.938 350.822C395.922 351.635 397.969 352.01 400 352.01C406.297 352.01 412.281 348.26 414.812 342.072C418.156 333.887 414.234 324.543 406.062 321.199L90.25 192.021L406.062 62.844C414.234 59.502 418.156 50.158 414.812 41.971C411.453 33.785 402.078 29.816 393.937 33.223L41.937 177.211C35.922 179.68 32 185.523 32 192.021C32 198.521 35.922 204.365 41.938 206.834ZM432 448.002H16C7.156 448.002 0 455.158 0 464.002C0 472.844 7.156 480 16 480H432C440.844 480 448 472.844 448 464.002C448 455.158 440.844 448.002 432 448.002Z" />
        </Icon>
    </>
}