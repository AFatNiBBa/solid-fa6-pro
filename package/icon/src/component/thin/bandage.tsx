
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bandage` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bandage?s=thin bandage}
 * @preview ![bandage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgMzIwQzI4MC44NzUgMzIwIDI4OCAzMTIuODYzIDI4OCAzMDRDMjg4IDI5NS4xMzUgMjgwLjg3NSAyODggMjcyIDI4OFMyNTYgMjk1LjEzNSAyNTYgMzA0QzI1NiAzMTIuODYzIDI2My4xMjUgMzIwIDI3MiAzMjBaTTI3MiAyMjRDMjgwLjg3NSAyMjQgMjg4IDIxNi44NjMgMjg4IDIwOEMyODggMTk5LjEzNSAyODAuODc1IDE5MiAyNzIgMTkyUzI1NiAxOTkuMTM1IDI1NiAyMDhDMjU2IDIxNi44NjMgMjYzLjEyNSAyMjQgMjcyIDIyNFpNMzY4IDMyMEMzNzYuODc1IDMyMCAzODQgMzEyLjg2MyAzODQgMzA0QzM4NCAyOTUuMTM1IDM3Ni44NzUgMjg4IDM2OCAyODhTMzUyIDI5NS4xMzUgMzUyIDMwNEMzNTIgMzEyLjg2MyAzNTkuMTI1IDMyMCAzNjggMzIwWk0zNjggMjI0QzM3Ni44NzUgMjI0IDM4NCAyMTYuODYzIDM4NCAyMDhDMzg0IDE5OS4xMzUgMzc2Ljg3NSAxOTIgMzY4IDE5MlMzNTIgMTk5LjEzNSAzNTIgMjA4QzM1MiAyMTYuODYzIDM1OS4xMjUgMjI0IDM2OCAyMjRaTTU3NiA5Nkg2NEMyOC42ODggOTYgMCAxMjQuNzAzIDAgMTYwVjM1MkMwIDM4Ny4yOTcgMjguNjg4IDQxNiA2NCA0MTZINTc2QzYxMS4zMTIgNDE2IDY0MCAzODcuMjk3IDY0MCAzNTJWMTYwQzY0MCAxMjQuNzAzIDYxMS4zMTIgOTYgNTc2IDk2Wk0xNjggNDAwSDY0QzM3LjUzMyA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMzIDExMiA2NCAxMTJIMTY4VjQwMFpNNDU2IDQwMEgxODRWMTEySDQ1NlY0MDBaTTYyNCAzNTJDNjI0IDM3OC40NjcgNjAyLjQ2NyA0MDAgNTc2IDQwMEg0NzJWMTEySDU3NkM2MDIuNDY3IDExMiA2MjQgMTMzLjUzMyA2MjQgMTYwVjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bandage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M272 320C280.875 320 288 312.863 288 304C288 295.135 280.875 288 272 288S256 295.135 256 304C256 312.863 263.125 320 272 320ZM272 224C280.875 224 288 216.863 288 208C288 199.135 280.875 192 272 192S256 199.135 256 208C256 216.863 263.125 224 272 224ZM368 320C376.875 320 384 312.863 384 304C384 295.135 376.875 288 368 288S352 295.135 352 304C352 312.863 359.125 320 368 320ZM368 224C376.875 224 384 216.863 384 208C384 199.135 376.875 192 368 192S352 199.135 352 208C352 216.863 359.125 224 368 224ZM576 96H64C28.688 96 0 124.703 0 160V352C0 387.297 28.688 416 64 416H576C611.312 416 640 387.297 640 352V160C640 124.703 611.312 96 576 96ZM168 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H168V400ZM456 400H184V112H456V400ZM624 352C624 378.467 602.467 400 576 400H472V112H576C602.467 112 624 133.533 624 160V352Z" />
        </Icon>
    </>
}