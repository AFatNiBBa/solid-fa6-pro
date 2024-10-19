
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hexagon-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=duotone hexagon-xmark}
 * @preview ![hexagon-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNS44MjQgMjMzLjM2NUw0MDAuNDM3IDU0LjE2NkMzOTIuMzIyIDQwLjUxNiAzNzcuNTAyIDMyIDM2MS4zODcgMzJIMTUwLjYxM0MxMzQuNDk4IDMyIDExOS42NzggNDAuNTE2IDExMS41NjMgNTQuMTY2TDYuMTc2IDIzMy4zNjVDLTIuMDU5IDI0Ny4zNjUgLTIuMDU5IDI2NC42MzMgNi4xNzYgMjc4LjYzM0wxMTEuNTYzIDQ1Ny44MzJDMTE5LjY3OCA0NzEuNDgyIDEzNC40OTggNDgwIDE1MC42MTMgNDgwSDM2MS4zODdDMzc3LjUwMiA0ODAgMzkyLjMyMiA0NzEuNDgyIDQwMC40MzcgNDU3LjgzMkw1MDUuODI0IDI3OC42MzNDNTE0LjA1OSAyNjQuNjMzIDUxNC4wNTkgMjQ3LjM2NSA1MDUuODI0IDIzMy4zNjVaTTMzNi45NjkgMzAzLjAyOUMzNDYuMzQ0IDMxMi40MDQgMzQ2LjM0NCAzMjcuNTkyIDMzNi45NjkgMzM2Ljk2N0MzMjcuNTg4IDM0Ni4zNDggMzEyLjQwNCAzNDYuMzQgMzAzLjAzMSAzMzYuOTY3TDI1NiAyODkuOTM2TDIwOC45NjkgMzM2Ljk2N0MxOTkuNTg4IDM0Ni4zNDggMTg0LjQwNCAzNDYuMzQgMTc1LjAzMSAzMzYuOTY3QzE2NS42NTYgMzI3LjU5MiAxNjUuNjU2IDMxMi40MDQgMTc1LjAzMSAzMDMuMDI5TDIyMi4wNjMgMjU1Ljk5OEwxNzUuMDMxIDIwOC45NjlDMTY1LjY1NiAxOTkuNTk0IDE2NS42NTYgMTg0LjQwNiAxNzUuMDMxIDE3NS4wMzFTMTk5LjU5NCAxNjUuNjU2IDIwOC45NjkgMTc1LjAzMUwyNTYgMjIyLjA2MkwzMDMuMDMxIDE3NS4wMzFDMzEyLjQwNiAxNjUuNjU2IDMyNy41OTQgMTY1LjY1NiAzMzYuOTY5IDE3NS4wMzFTMzQ2LjM0NCAxOTkuNTk0IDMzNi45NjkgMjA4Ljk2OUwyODkuOTM4IDI1NS45OThMMzM2Ljk2OSAzMDMuMDI5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODkuOTM4IDI1NS45OTlMMzM2Ljk2OSAyMDguOTY4QzM0Ni4zNDQgMTk5LjU5MyAzNDYuMzQ0IDE4NC40MDYgMzM2Ljk2OSAxNzUuMDMxUzMxMi40MDYgMTY1LjY1NiAzMDMuMDMxIDE3NS4wMzFMMjU2IDIyMi4wNjJMMjA4Ljk2OSAxNzUuMDMxQzE5OS41OTQgMTY1LjY1NiAxODQuNDA2IDE2NS42NTYgMTc1LjAzMSAxNzUuMDMxUzE2NS42NTYgMTk5LjU5MyAxNzUuMDMxIDIwOC45NjhMMjIyLjA2MiAyNTUuOTk5TDE3NS4wMzEgMzAzLjAzQzE2NS42NTYgMzEyLjQwNSAxNjUuNjU2IDMyNy41OTIgMTc1LjAzMSAzMzYuOTY3QzE4NC40MDQgMzQ2LjM0IDE5OS41ODggMzQ2LjM0OCAyMDguOTY5IDMzNi45NjdMMjU2IDI4OS45MzZMMzAzLjAzMSAzMzYuOTY3QzMxMi40MDQgMzQ2LjM0IDMyNy41ODggMzQ2LjM0OCAzMzYuOTY5IDMzNi45NjdDMzQ2LjM0NCAzMjcuNTkyIDM0Ni4zNDQgMzEyLjQwNSAzMzYuOTY5IDMwMy4wM0wyODkuOTM4IDI1NS45OTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HexagonXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M505.824 233.365L400.437 54.166C392.322 40.516 377.502 32 361.387 32H150.613C134.498 32 119.678 40.516 111.563 54.166L6.176 233.365C-2.059 247.365 -2.059 264.633 6.176 278.633L111.563 457.832C119.678 471.482 134.498 480 150.613 480H361.387C377.502 480 392.322 471.482 400.437 457.832L505.824 278.633C514.059 264.633 514.059 247.365 505.824 233.365ZM336.969 303.029C346.344 312.404 346.344 327.592 336.969 336.967C327.588 346.348 312.404 346.34 303.031 336.967L256 289.936L208.969 336.967C199.588 346.348 184.404 346.34 175.031 336.967C165.656 327.592 165.656 312.404 175.031 303.029L222.063 255.998L175.031 208.969C165.656 199.594 165.656 184.406 175.031 175.031S199.594 165.656 208.969 175.031L256 222.062L303.031 175.031C312.406 165.656 327.594 165.656 336.969 175.031S346.344 199.594 336.969 208.969L289.938 255.998L336.969 303.029Z" />
            <path d="M289.938 255.999L336.969 208.968C346.344 199.593 346.344 184.406 336.969 175.031S312.406 165.656 303.031 175.031L256 222.062L208.969 175.031C199.594 165.656 184.406 165.656 175.031 175.031S165.656 199.593 175.031 208.968L222.062 255.999L175.031 303.03C165.656 312.405 165.656 327.592 175.031 336.967C184.404 346.34 199.588 346.348 208.969 336.967L256 289.936L303.031 336.967C312.404 346.34 327.588 346.348 336.969 336.967C346.344 327.592 346.344 312.405 336.969 303.03L289.938 255.999Z" />
        </Icon>
    </>
}