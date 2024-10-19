
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-p` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=duotone square-p}
 * @preview ![square-p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ4IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0OCAzMiAzODQgMzJaTTI0OCAzMDRIMTc2VjM2MEMxNzYgMzczLjI1IDE2NS4yNSAzODQgMTUyIDM4NFMxMjggMzczLjI1IDEyOCAzNjBWMTUyQzEyOCAxMzguNzUgMTM4Ljc1IDEyOCAxNTIgMTI4SDI0OEMyOTYuNTMxIDEyOCAzMzYgMTY3LjQ2OSAzMzYgMjE2UzI5Ni41MzEgMzA0IDI0OCAzMDRaTTI0OCAxNzZIMTc2VjI1NkgyNDhDMjcwLjA2MiAyNTYgMjg4IDIzOC4wNjIgMjg4IDIxNlMyNzAuMDYyIDE3NiAyNDggMTc2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNDggMTI4SDE1MkMxMzguNzUgMTI4IDEyOCAxMzguNzUgMTI4IDE1MlYzNjBDMTI4IDM3My4yNSAxMzguNzUgMzg0IDE1MiAzODRTMTc2IDM3My4yNSAxNzYgMzYwVjMwNEgyNDhDMjk2LjUzMSAzMDQgMzM2IDI2NC41MzEgMzM2IDIxNlMyOTYuNTMxIDEyOCAyNDggMTI4Wk0yNDggMjU2SDE3NlYxNzZIMjQ4QzI3MC4wNjIgMTc2IDI4OCAxOTMuOTM4IDI4OCAyMTZTMjcwLjA2MiAyNTYgMjQ4IDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareP(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM248 304H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H248C296.531 128 336 167.469 336 216S296.531 304 248 304ZM248 176H176V256H248C270.062 256 288 238.062 288 216S270.062 176 248 176Z" />
            <path d="M248 128H152C138.75 128 128 138.75 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V304H248C296.531 304 336 264.531 336 216S296.531 128 248 128ZM248 256H176V176H248C270.062 176 288 193.938 288 216S270.062 256 248 256Z" />
        </Icon>
    </>
}