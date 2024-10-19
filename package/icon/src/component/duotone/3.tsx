
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `3` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/3?s=duotone 3}
 * @preview ![3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCAzMzZDMzIwIDQxNS40MDYgMjU1LjQwOSA0ODAgMTc2LjAwNSA0ODBIMTE0LjYwMkM2My42NjYgNDgwIDE4LjYwNiA0NDcuNTMxIDIuNDgxIDM5OS4xODhDLTUuOTA5IDM3NC4wNjMgNy42NjggMzQ2Ljg3NSAzMi44MjQgMzM4LjQ2OUM1Ny45OTUgMzMwLjA5NCA4NS4xNSAzNDMuNjU2IDkzLjU0IDM2OC44MTNDOTYuNTcxIDM3Ny45MDYgMTA1LjA0IDM4NCAxMTQuNjAyIDM4NEgxNzYuMDA1QzIwMi40NzMgMzg0IDIyNC4wMDQgMzYyLjQ2OSAyMjQuMDA0IDMzNlMyMDIuNDczIDI4OCAxNzYuMDA1IDI4OEg5Ni4wMDlDNzYuNTg4IDI4OCA1OS4wODggMjc2LjMxMiA1MS42NjcgMjU4LjM3NUM0NC4yMyAyNDAuNDM4IDQ4LjMzOSAyMTkuNzgxIDYyLjA3MyAyMDYuMDYyTDE0MC4xMzIgMTI4SDQ4LjAxMUMyMS40OTYgMTI4IDAuMDEzIDEwNi41IDAuMDEzIDgwUzIxLjQ5NiAzMiA0OC4wMTEgMzJIMjU2LjAwMkMyNzUuNDIzIDMyIDI5Mi45MjMgNDMuNjg4IDMwMC4zNDQgNjEuNjI1QzMwNy43ODEgNzkuNTYyIDMwMy42NzIgMTAwLjIxOSAyODkuOTM4IDExMy45MzdMMjA4LjI1NCAxOTUuNjI1QzI3Mi4xNzQgMjEwLjMxMiAzMjAgMjY3LjY4OCAzMjAgMzM2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function $3(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M320 336C320 415.406 255.409 480 176.005 480H114.602C63.666 480 18.606 447.531 2.481 399.188C-5.909 374.063 7.668 346.875 32.824 338.469C57.995 330.094 85.15 343.656 93.54 368.813C96.571 377.906 105.04 384 114.602 384H176.005C202.473 384 224.004 362.469 224.004 336S202.473 288 176.005 288H96.009C76.588 288 59.088 276.312 51.667 258.375C44.23 240.438 48.339 219.781 62.073 206.062L140.132 128H48.011C21.496 128 0.013 106.5 0.013 80S21.496 32 48.011 32H256.002C275.423 32 292.923 43.688 300.344 61.625C307.781 79.562 303.672 100.219 289.938 113.937L208.254 195.625C272.174 210.312 320 267.688 320 336Z" />
        </Icon>
    </>
}