
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ticket-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=duotone ticket-simple}
 * @preview ![ticket-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiAyMDhWMTEyQzU3NiA4NS41IDU1NC41IDY0IDUyOCA2NEg0OEMyMS41IDY0IDAgODUuNSAwIDExMlYyMDhDMjYuNSAyMDggNDggMjI5LjUgNDggMjU2UzI2LjUgMzA0IDAgMzA0VjQwMEMwIDQyNi41IDIxLjUgNDQ4IDQ4IDQ0OEg1MjhDNTU0LjUgNDQ4IDU3NiA0MjYuNSA1NzYgNDAwVjMwNEM1NDkuNSAzMDQgNTI4IDI4Mi41IDUyOCAyNTZTNTQ5LjUgMjA4IDU3NiAyMDhaTTQ0OCAzMjBDNDQ4IDMzNy42NzIgNDMzLjY3NCAzNTIgNDE2IDM1MkgxNjBDMTQyLjMyNiAzNTIgMTI4IDMzNy42NzIgMTI4IDMyMFYxOTJDMTI4IDE3NC4zMjYgMTQyLjMyNiAxNjAgMTYwIDE2MEg0MTZDNDMzLjY3NCAxNjAgNDQ4IDE3NC4zMjYgNDQ4IDE5MlYzMjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiAzNTJIMTYwQzE0Mi4zMjcgMzUyIDEyOCAzMzcuNjczIDEyOCAzMjBWMTkyQzEyOCAxNzQuMzI3IDE0Mi4zMjcgMTYwIDE2MCAxNjBINDE2QzQzMy42NzMgMTYwIDQ0OCAxNzQuMzI3IDQ0OCAxOTJWMzIwQzQ0OCAzMzcuNjczIDQzMy42NzMgMzUyIDQxNiAzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TicketSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M576 208V112C576 85.5 554.5 64 528 64H48C21.5 64 0 85.5 0 112V208C26.5 208 48 229.5 48 256S26.5 304 0 304V400C0 426.5 21.5 448 48 448H528C554.5 448 576 426.5 576 400V304C549.5 304 528 282.5 528 256S549.5 208 576 208ZM448 320C448 337.672 433.674 352 416 352H160C142.326 352 128 337.672 128 320V192C128 174.326 142.326 160 160 160H416C433.674 160 448 174.326 448 192V320Z" />
            <path d="M416 352H160C142.327 352 128 337.673 128 320V192C128 174.327 142.327 160 160 160H416C433.673 160 448 174.327 448 192V320C448 337.673 433.673 352 416 352Z" />
        </Icon>
    </>
}