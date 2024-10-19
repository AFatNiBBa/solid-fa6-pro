
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-exclamation` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-exclamation?s=duotone comment-exclamation}
 * @preview ![comment-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNTk0IDMyIDAgMTI1LjA5NCAwIDI0MEMwIDI4OS41OTQgMjEuNDA2IDMzNSA1NyAzNzAuNzAzQzQ0LjUgNDIxLjA5NCAyLjY4OCA0NjYgMi4xODggNDY2LjVDMCA0NjguNzk3IC0wLjU5NCA0NzIuMjAzIDAuNjg4IDQ3NS4yMDNDMiA0NzguMjAzIDQuODEyIDQ4MCA4IDQ4MEM3NC4zMTIgNDgwIDEyNCA0NDguMjAzIDE0OC41OTQgNDI4LjU5NEMxODEuMzEyIDQ0MC45MDYgMjE3LjU5NCA0NDggMjU2IDQ0OEMzOTcuNDA2IDQ0OCA1MTIgMzU0LjkwNiA1MTIgMjQwUzM5Ny40MDYgMzIgMjU2IDMyWk0yMzIgMTM2QzIzMiAxMjIuNzUgMjQyLjc1IDExMiAyNTYgMTEyUzI4MCAxMjIuNzUgMjgwIDEzNlYyNDhDMjgwIDI2MS4yNSAyNjkuMjUgMjcyIDI1NiAyNzJTMjMyIDI2MS4yNSAyMzIgMjQ4VjEzNlpNMjU2IDM2OEMyMzguMzI4IDM2OCAyMjQgMzUzLjY3MiAyMjQgMzM2QzIyNCAzMTguMzI2IDIzOC4zMjggMzA0IDI1NiAzMDRTMjg4IDMxOC4zMjYgMjg4IDMzNkMyODggMzUzLjY3MiAyNzMuNjcyIDM2OCAyNTYgMzY4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMjcyQzI2OS4yNSAyNzIgMjgwIDI2MS4yNSAyODAgMjQ4VjEzNkMyODAgMTIyLjc1IDI2OS4yNSAxMTIgMjU2IDExMlMyMzIgMTIyLjc1IDIzMiAxMzZWMjQ4QzIzMiAyNjEuMjUgMjQyLjc1IDI3MiAyNTYgMjcyWk0yNTYgMzA0QzIzOC4zMjggMzA0IDIyNCAzMTguMzI2IDIyNCAzMzZDMjI0IDM1My42NzIgMjM4LjMyOCAzNjggMjU2IDM2OFMyODggMzUzLjY3MiAyODggMzM2QzI4OCAzMTguMzI2IDI3My42NzIgMzA0IDI1NiAzMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.594 32 0 125.094 0 240C0 289.594 21.406 335 57 370.703C44.5 421.094 2.688 466 2.188 466.5C0 468.797 -0.594 472.203 0.688 475.203C2 478.203 4.812 480 8 480C74.312 480 124 448.203 148.594 428.594C181.312 440.906 217.594 448 256 448C397.406 448 512 354.906 512 240S397.406 32 256 32ZM232 136C232 122.75 242.75 112 256 112S280 122.75 280 136V248C280 261.25 269.25 272 256 272S232 261.25 232 248V136ZM256 368C238.328 368 224 353.672 224 336C224 318.326 238.328 304 256 304S288 318.326 288 336C288 353.672 273.672 368 256 368Z" />
            <path d="M256 272C269.25 272 280 261.25 280 248V136C280 122.75 269.25 112 256 112S232 122.75 232 136V248C232 261.25 242.75 272 256 272ZM256 304C238.328 304 224 318.326 224 336C224 353.672 238.328 368 256 368S288 353.672 288 336C288 318.326 273.672 304 256 304Z" />
        </Icon>
    </>
}