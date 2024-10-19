
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet-button` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-button?s=thin tablet-button}
 * @preview ![tablet-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWNDY0QzAgNDkwLjUgMjEuNSA1MTIgNDggNTEySDQwMEM0MjYuNSA1MTIgNDQ4IDQ5MC41IDQ0OCA0NjRWNDhDNDQ4IDIxLjUgNDI2LjUgMCA0MDAgMFpNNDMyIDQ2NEM0MzIgNDgxLjY0NSA0MTcuNjQ1IDQ5NiA0MDAgNDk2SDQ4QzMwLjM1NSA0OTYgMTYgNDgxLjY0NSAxNiA0NjRWNDhDMTYgMzAuMzU1IDMwLjM1NSAxNiA0OCAxNkg0MDBDNDE3LjY0NSAxNiA0MzIgMzAuMzU1IDQzMiA0OFY0NjRaTTIyNCA0MDBDMjA2LjMyOCA0MDAgMTkyIDQxNC4zMjggMTkyIDQzMlMyMDYuMzI4IDQ2NCAyMjQgNDY0QzI0MS42NzQgNDY0IDI1NiA0NDkuNjcyIDI1NiA0MzJTMjQxLjY3NCA0MDAgMjI0IDQwMFpNMjI0IDQ0OEMyMTUuMTc4IDQ0OCAyMDggNDQwLjgyNCAyMDggNDMyUzIxNS4xNzggNDE2IDIyNCA0MTZTMjQwIDQyMy4xNzYgMjQwIDQzMlMyMzIuODIyIDQ0OCAyMjQgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TabletButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V48C448 21.5 426.5 0 400 0ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V48C16 30.355 30.355 16 48 16H400C417.645 16 432 30.355 432 48V464ZM224 400C206.328 400 192 414.328 192 432S206.328 464 224 464C241.674 464 256 449.672 256 432S241.674 400 224 400ZM224 448C215.178 448 208 440.824 208 432S215.178 416 224 416S240 423.176 240 432S232.822 448 224 448Z" />
        </Icon>
    </>
}