
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-fancy` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=regular pen-fancy}
 * @preview ![pen-fancy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQuODQ1IDBDNDAxLjM0NSAwIDM3Ny45NyA5LjYyNSAzNjEuMDk1IDI4Ljc1TDE2OS44NDUgMjQwTDg0LjA4MiAyNjguNjI5QzczLjkzNyAyNzIuMDE2IDY1Ljk3OCAyNzkuOTc5IDYyLjU5NSAyOTAuMTI1TDEuOTk4IDQ2MC44MDNDLTIuNjYyIDQ3NC43NzkgMC45NzYgNDkwLjE4OSAxMS4zOTQgNTAwLjYwN0MxOC44MDYgNTA4LjAyIDI4Ljc0OCA1MTIgMzguOTAyIDUxMkM0My4wMTkgNTEyIDQ3LjE3MSA1MTEuMzQ2IDUxLjIwMyA1MTBMMjIxLjcyNiA0NDkuMzczQzIzMS44NzUgNDQ1Ljk4OCAyMzkuODM4IDQzOC4wMjMgMjQzLjIyIDQyNy44NzVMMjcxLjg0NSAzNDJMNDgzLjA5NSAxNTAuNzVDNTQ0LjQ3IDk2LjM3NSA1MDAuMDk1IDAgNDI0Ljg0NSAwWk0xOTkuODQ1IDQwNi4yMDlMODguOTk4IDQ0NS42MjdMMTM0Ljg1NSAzOTkuNzdDMTM1LjI1NSAzOTkuNzg5IDEzNS41OTMgNDAwIDEzNiA0MDBDMTQ5LjI1NSA0MDAgMTYwIDM4OS4yNTQgMTYwIDM3NkMxNjAgMzYyLjc0NCAxNDkuMjU1IDM1MiAxMzYgMzUyQzEyMi43NDYgMzUyIDExMiAzNjIuNzQ0IDExMiAzNzZDMTEyIDM3Ni40MDYgMTEyLjIxMSAzNzYuNzQ0IDExMi4yMyAzNzcuMTQ1TDY2LjMzOSA0MjMuMDM1TDEwNS43NTUgMzExLjk5OEwxODUuMDQ1IDI4NS41MjlMMTg2Ljk1NSAyODQuODkzTDIyNi45NTMgMzI0Ljg5MUwyMjYuMzA4IDMyNi44MkwxOTkuODQ1IDQwNi4yMDlaTTQ1MC44OCAxMTUuMTY2TDI1OC45MDQgMjg4Ljk2N0wyMjIuODc5IDI1Mi45NDFMMzk3LjA4OCA2MC41MDhDNDA0LjIwNSA1Mi40NDEgNDE0LjA2MiA0OCA0MjQuODQ1IDQ4QzQ0NC4zNDcgNDggNDU2LjcxMSA2Mi4zNSA0NjEuMzcxIDc0LjYzOUM0NjQuNjgxIDgzLjM2OSA0NjcuNzcxIDEwMC4xOTkgNDUwLjg4IDExNS4xNjZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PenFancy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M424.845 0C401.345 0 377.97 9.625 361.095 28.75L169.845 240L84.082 268.629C73.937 272.016 65.978 279.979 62.595 290.125L1.998 460.803C-2.662 474.779 0.976 490.189 11.394 500.607C18.806 508.02 28.748 512 38.902 512C43.019 512 47.171 511.346 51.203 510L221.726 449.373C231.875 445.988 239.838 438.023 243.22 427.875L271.845 342L483.095 150.75C544.47 96.375 500.095 0 424.845 0ZM199.845 406.209L88.998 445.627L134.855 399.77C135.255 399.789 135.593 400 136 400C149.255 400 160 389.254 160 376C160 362.744 149.255 352 136 352C122.746 352 112 362.744 112 376C112 376.406 112.211 376.744 112.23 377.145L66.339 423.035L105.755 311.998L185.045 285.529L186.955 284.893L226.953 324.891L226.308 326.82L199.845 406.209ZM450.88 115.166L258.904 288.967L222.879 252.941L397.088 60.508C404.205 52.441 414.062 48 424.845 48C444.347 48 456.711 62.35 461.371 74.639C464.681 83.369 467.771 100.199 450.88 115.166Z" />
        </Icon>
    </>
}