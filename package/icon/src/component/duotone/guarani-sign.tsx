
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `guarani-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=duotone guarani-sign}
 * @preview ![guarani-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA0NDEuOTI2VjQ4MEMxNjAgNDk3LjY4OCAxNzQuMzEyIDUxMiAxOTEuOTk4IDUxMlMyMjMuOTk2IDQ5Ny42ODggMjIzLjk5NiA0ODBWNDQ2LjczMkMyMTguNDMgNDQ3LjIyMyAyMTIuODc1IDQ0OC4xNTYgMjA3LjMwOSA0NDguMTU2QzE5MS4zMjYgNDQ4LjE1NiAxNzUuNDczIDQ0NS45MDIgMTYwIDQ0MS45MjZaTTE2MCAxNTQuODU3VjM1Ny4xMzlDMTgwLjA1MyAzNjYuNjkzIDIwMi4yNyAzNjkuODc5IDIyMy45OTYgMzY2LjcwMVYxNDUuMzA1QzIwMi4yNzUgMTQyLjEyNyAxODAuMDU3IDE0NS4zMDMgMTYwIDE1NC44NTdaTTE5MS45OTggMEMxNzQuMzEzIDAgMTYwIDE0LjMyOCAxNjAgMzJWNzAuMDhDMTgwLjg5NiA2NC42NiAyMDIuNDk4IDYyLjcxNyAyMjMuOTk2IDY0LjU0N1YzMkMyMjMuOTk2IDE0LjMyOCAyMDkuNjg0IDAgMTkxLjk5OCAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNjggMjY0VjMxOS41MzFDMzY4IDM1MS40MjIgMzU0LjQ3IDM4MiAzMzAuODc3IDQwMy40NjlDMjk0LjA2NyA0MzMuNSAyNTAuNDQ1IDQ0OC4xNTYgMjA3LjMyMyA0NDguMTU2QzE1My4zODkgNDQ4LjE1NiAxMDAuMjY4IDQyNS4yODEgNjIuMTQ1IDM4MS4xMjVDMC42MTggMzA5Ljc4MSAwLjYxOCAyMDIuMjE5IDYyLjE0NSAxMzAuODkxQzEzMC43MzUgNTEuMjk3IDI0OC4xMDIgNDAuOTA2IDMyOS4yNTMgMTA3LjE1NkMzNDYuMzc2IDEyMS4xMDkgMzQ4LjkzOSAxNDYuMzEzIDMzNC45NzEgMTYzLjQyMkMzMjEuMDAzIDE4MC41NDcgMjk1Ljc1NSAxODMuMDk0IDI3OC42OTMgMTY5LjEyNUMyMzEuMzg0IDEzMC41MzEgMTYyLjg1NyAxMzYuNjI1IDEyMi43MDQgMTgzLjE0MUM4Ni44NjIgMjI0LjY3MiA4Ni44NjIgMjg3LjMyOCAxMjIuNzA0IDMyOC44NTlDMTYyLjgyNiAzNzUuMzI4IDIzMS4zNTMgMzgxLjUzMSAyNzguNjkzIDM0Mi44NTlDMjg0LjAwNiAzMzcuOTM4IDI4OC4wMDUgMzI4LjkyMiAyODguMDA1IDMxOS41MzFWMzA0SDIyMy45ODZWMjI0SDMyOC4wMDNDMzUwLjA5NSAyMjQgMzY4IDI0MS45MDYgMzY4IDI2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GuaraniSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M160 441.926V480C160 497.688 174.312 512 191.998 512S223.996 497.688 223.996 480V446.732C218.43 447.223 212.875 448.156 207.309 448.156C191.326 448.156 175.473 445.902 160 441.926ZM160 154.857V357.139C180.053 366.693 202.27 369.879 223.996 366.701V145.305C202.275 142.127 180.057 145.303 160 154.857ZM191.998 0C174.313 0 160 14.328 160 32V70.08C180.896 64.66 202.498 62.717 223.996 64.547V32C223.996 14.328 209.684 0 191.998 0Z" />
            <path d="M368 264V319.531C368 351.422 354.47 382 330.877 403.469C294.067 433.5 250.445 448.156 207.323 448.156C153.389 448.156 100.268 425.281 62.145 381.125C0.618 309.781 0.618 202.219 62.145 130.891C130.735 51.297 248.102 40.906 329.253 107.156C346.376 121.109 348.939 146.313 334.971 163.422C321.003 180.547 295.755 183.094 278.693 169.125C231.384 130.531 162.857 136.625 122.704 183.141C86.862 224.672 86.862 287.328 122.704 328.859C162.826 375.328 231.353 381.531 278.693 342.859C284.006 337.938 288.005 328.922 288.005 319.531V304H223.986V224H328.003C350.095 224 368 241.906 368 264Z" />
        </Icon>
    </>
}