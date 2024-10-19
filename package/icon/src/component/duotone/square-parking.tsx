
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-parking` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=duotone square-parking}
 * @preview ![square-parking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTI0MCAzMjBIMTkyVjM1MkMxOTIgMzY5LjY4OCAxNzcuNjg4IDM4NCAxNjAgMzg0UzEyOCAzNjkuNjg4IDEyOCAzNTJWMTYwQzEyOCAxNDIuMzEyIDE0Mi4zMTIgMTI4IDE2MCAxMjhIMjQwQzI5Mi45MzggMTI4IDMzNiAxNzEuMDYyIDMzNiAyMjRTMjkyLjkzOCAzMjAgMjQwIDMyMFpNMjQwIDE5MkgxOTJWMjU2SDI0MEMyNTcuNjU2IDI1NiAyNzIgMjQxLjY1NiAyNzIgMjI0UzI1Ny42NTYgMTkyIDI0MCAxOTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0MCAxMjhIMTYwQzE0Mi4zMTIgMTI4IDEyOCAxNDIuMzEyIDEyOCAxNjBWMzUyQzEyOCAzNjkuNjg4IDE0Mi4zMTIgMzg0IDE2MCAzODRTMTkyIDM2OS42ODggMTkyIDM1MlYzMjBIMjQwQzI5Mi45MzggMzIwIDMzNiAyNzYuOTM4IDMzNiAyMjRTMjkyLjkzOCAxMjggMjQwIDEyOFpNMjQwIDI1NkgxOTJWMTkySDI0MEMyNTcuNjU2IDE5MiAyNzIgMjA2LjM0NCAyNzIgMjI0UzI1Ny42NTYgMjU2IDI0MCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareParking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM240 320H192V352C192 369.688 177.688 384 160 384S128 369.688 128 352V160C128 142.312 142.312 128 160 128H240C292.938 128 336 171.062 336 224S292.938 320 240 320ZM240 192H192V256H240C257.656 256 272 241.656 272 224S257.656 192 240 192Z" />
            <path d="M240 128H160C142.312 128 128 142.312 128 160V352C128 369.688 142.312 384 160 384S192 369.688 192 352V320H240C292.938 320 336 276.938 336 224S292.938 128 240 128ZM240 256H192V192H240C257.656 192 272 206.344 272 224S257.656 256 240 256Z" />
        </Icon>
    </>
}