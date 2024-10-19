
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book?s=thin book}
 * @preview ![book](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzg0VjMyQzQ0OCAxNC4zMjggNDMzLjY3NCAwIDQxNiAwSDY0QzI4LjY1NCAwIDAgMjguNjUyIDAgNjRWNDU1Ljk4NEMwIDQ4Ni45MSAyNS4wNyA1MTEuOTg0IDU1Ljk5OCA1MTEuOTg0TDQzOS45OTQgNTExLjk5MkM0NDQuNDE2IDUxMS45OTYgNDQ4IDUwOC40MSA0NDggNTAzLjk5MkM0NDggNDk5LjU3IDQ0NC40MTYgNDk1Ljk4NCA0MzkuOTk0IDQ5NS45ODRINDE2VjQxNkM0MzMuNjc0IDQxNiA0NDggNDAxLjY3MiA0NDggMzg0Wk0xNiA2NEMxNiAzNy41MzEgMzcuNTMzIDE2IDY0IDE2SDExMlYzOTkuOTg0TDU2IDM5OS45ODhDNDAuMzI0IDM5OS45ODggMjYuMTc2IDQwNi41MDQgMTYgNDE2LjkyMlY2NFpNNDAwIDQ5NS45ODRINTZDMzIuNjIzIDQ5NS45ODQgMTMuODc3IDQ3NS44NDQgMTYuMTkzIDQ1MkMxOC4yMTMgNDMxLjIxOSAzNi44ODkgNDE1Ljk4NCA1Ny43NyA0MTUuOTg0TDQwMCA0MTZWNDk1Ljk4NFpNMTI4IDM5OS45ODRWMTZINDE2QzQyNC44MzYgMTYgNDMyIDIzLjE2NCA0MzIgMzJWMzg0QzQzMiAzOTIuODI0IDQyNC44MjIgNDAwIDQxNiA0MDBMMTI4IDM5OS45ODRaTTM3NiAxMjcuOTk2SDE4NEMxNzkuNTk0IDEyNy45OTYgMTc2IDEzMS41NzQgMTc2IDEzNS45OTZTMTc5LjU5NCAxNDMuOTk2IDE4NCAxNDMuOTk2SDM3NkMzODAuNDA2IDE0My45OTYgMzg0IDE0MC40MTggMzg0IDEzNS45OTZTMzgwLjQwNiAxMjcuOTk2IDM3NiAxMjcuOTk2Wk0zNzYgMjA3Ljk5MkgxODRDMTc5LjU5NCAyMDcuOTkyIDE3NiAyMTEuNTcgMTc2IDIxNS45OTJTMTc5LjU5NCAyMjMuOTkyIDE4NCAyMjMuOTkySDM3NkMzODAuNDA2IDIyMy45OTIgMzg0IDIyMC40MTQgMzg0IDIxNS45OTJTMzgwLjQwNiAyMDcuOTkyIDM3NiAyMDcuOTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Book(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM16 64C16 37.531 37.533 16 64 16H112V399.984L56 399.988C40.324 399.988 26.176 406.504 16 416.922V64ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM128 399.984V16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L128 399.984ZM376 127.996H184C179.594 127.996 176 131.574 176 135.996S179.594 143.996 184 143.996H376C380.406 143.996 384 140.418 384 135.996S380.406 127.996 376 127.996ZM376 207.992H184C179.594 207.992 176 211.57 176 215.992S179.594 223.992 184 223.992H376C380.406 223.992 384 220.414 384 215.992S380.406 207.992 376 207.992Z" />
        </Icon>
    </>
}