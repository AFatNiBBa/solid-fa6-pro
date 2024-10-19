
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-zipper` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=solid file-zipper}
 * @preview ![file-zipper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNOTYgMzJIMTYwVjY0SDk2VjMyWk05NiA5NkgxNjBWMTI4SDk2Vjk2Wk05NiAxNjBIMTYwVjE5Mkg5NlYxNjBaTTEyOC4yNjggNDE2Qzg3LjcwMyA0MTYgNTcuNTEgMzc5LjU0NyA2NS40MzkgMzQwLjU0N0w5NiAyMjRIMTYwTDE5MC45NDMgMzQwLjg1MkMxOTguNzIxIDM3OS42OTkgMTY4LjUyNSA0MTYgMTI4LjI2OCA0MTZaTTE0NCAzMzZIMTEyQzEwMy4xNjQgMzM2IDk2IDM0My4xNjQgOTYgMzUyUzEwMy4xNjQgMzY4IDExMiAzNjhIMTQ0QzE1Mi44MzYgMzY4IDE2MCAzNjAuODM2IDE2MCAzNTJTMTUyLjgzNiAzMzYgMTQ0IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileZipper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 0V128H384L256 0ZM224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM96 32H160V64H96V32ZM96 96H160V128H96V96ZM96 160H160V192H96V160ZM128.268 416C87.703 416 57.51 379.547 65.439 340.547L96 224H160L190.943 340.852C198.721 379.699 168.525 416 128.268 416ZM144 336H112C103.164 336 96 343.164 96 352S103.164 368 112 368H144C152.836 368 160 360.836 160 352S152.836 336 144 336Z" />
        </Icon>
    </>
}