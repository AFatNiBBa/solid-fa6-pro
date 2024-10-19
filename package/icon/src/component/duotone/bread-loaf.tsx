
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bread-loaf` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=duotone bread-loaf}
 * @preview ![bread-loaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAxOTJDNDgwIDEwMy42MjUgMzcyLjUgMzIgMjQwIDMyUzAgMTAzLjYyNSAwIDE5MkMwIDIyNy4zNzUgMzAuODc1IDI1NiA2NCAyNTZWNDQ4QzY0IDQ2NS42MjUgNzguMzc1IDQ4MCA5NiA0ODBIMzg0QzQwMS42MjUgNDgwIDQxNiA0NjUuNjI1IDQxNiA0NDhWMjU2QzQ0OS4xMjUgMjU2IDQ4MCAyMjcuMzc1IDQ4MCAxOTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTY0MCAxOTJDNjQwIDIyNy4zNzUgNjA5LjEyNSAyNTYgNTc2IDI1NlY0NDhDNTc2IDQ2NS42MjUgNTYxLjYyNSA0ODAgNTQ0IDQ4MEgzODRDNDAxLjYyNSA0ODAgNDE2IDQ2NS42MjUgNDE2IDQ0OFYyNTZDNDQ5LjEyNSAyNTYgNDgwIDIyNy4zNzUgNDgwIDE5MkM0ODAgMTAzLjYyNSAzNzIuNSAzMiAyNDAgMzJINDAwQzUzMi41IDMyIDY0MCAxMDMuNjI1IDY0MCAxOTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BreadLoaf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M480 192C480 103.625 372.5 32 240 32S0 103.625 0 192C0 227.375 30.875 256 64 256V448C64 465.625 78.375 480 96 480H384C401.625 480 416 465.625 416 448V256C449.125 256 480 227.375 480 192Z" />
            <path d="M640 192C640 227.375 609.125 256 576 256V448C576 465.625 561.625 480 544 480H384C401.625 480 416 465.625 416 448V256C449.125 256 480 227.375 480 192C480 103.625 372.5 32 240 32H400C532.5 32 640 103.625 640 192Z" />
        </Icon>
    </>
}