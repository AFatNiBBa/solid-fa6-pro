
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `messages-question` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/messages-question?s=regular messages-question}
 * @preview ![messages-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjEuNzY2IDc2LjUyM0gxOTEuMDYyQzE2Ni42NzIgNzYuNTIzIDE0Ni44MjggOTYuMzY3IDE0Ni44MjggMTIwLjc1OEMxNDYuODI4IDEyOS42MDIgMTUzLjk4NCAxMzYuNzU4IDE2Mi44MjggMTM2Ljc1OFMxNzguODI4IDEyOS42MDIgMTc4LjgyOCAxMjAuNzU4QzE3OC44MjggMTE0LjAwOCAxODQuMzEyIDEwOC41MjMgMTkxLjA2MiAxMDguNTIzSDIyMS43NjZDMjMwLjI2NiAxMDguNTIzIDIzNy4xNzIgMTE1LjQzIDIzNy4xNzIgMTIzLjkzQzIzNy4xNzIgMTI5LjgwNSAyMzMuOTA2IDEzNS4wODYgMjI4LjY1NiAxMzcuNzExTDIwMC44NDQgMTUxLjYxN0MxOTUuNDIyIDE1NC4zMzYgMTkyIDE1OS44NjcgMTkyIDE2NS45M1YxODAuNTIzQzE5MiAxODkuMzY3IDE5OS4xNTYgMTk2LjUyMyAyMDggMTk2LjUyM1MyMjQgMTg5LjM2NyAyMjQgMTgwLjUyM1YxNzUuODJMMjQyLjk1MyAxNjYuMzM2QzI1OS4xMjUgMTU4LjI3MyAyNjkuMTcyIDE0Mi4wMjMgMjY5LjE3MiAxMjMuOTNDMjY5LjE3MiA5Ny43ODkgMjQ3LjkwNiA3Ni41MjMgMjIxLjc2NiA3Ni41MjNaTTIwOCAyMDguNTIzQzE5Ni45NTUgMjA4LjUyMyAxODggMjE3LjQ3NyAxODggMjI4LjUyM0MxODggMjM5LjU2OCAxOTYuOTU1IDI0OC41MjMgMjA4IDI0OC41MjNTMjI4IDIzOS41NjggMjI4IDIyOC41MjNDMjI4IDIxNy40NzcgMjE5LjA0NSAyMDguNTIzIDIwOCAyMDguNTIzWk00MTYgMjU2VjY0QzQxNiAyOC43NSAzODcuMjUgMCAzNTIgMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYyNTZDMCAyOTEuMjUgMjguNzUgMzIwIDY0IDMyMEg5NlYzNzJDOTYgMzc5LjEyNSAxMDEuNzUgMzg0IDEwOCAzODRDMTEwLjM3NSAzODQgMTEyLjg3NSAzODMuMjUgMTE1LjEyNSAzODEuNjI1TDIyNCAzMjBIMzUyQzM4Ny4yNSAzMjAgNDE2IDI5MS4yNSA0MTYgMjU2Wk0yMTEuMzc1IDI3MkwyMDAuMzc1IDI3OC4yNUwxNDQgMzEwLjEyNVYyNzJINjRDNTUuMjUgMjcyIDQ4IDI2NC43NSA0OCAyNTZWNjRDNDggNTUuMjUgNTUuMjUgNDggNjQgNDhIMzUyQzM2MC43NSA0OCAzNjggNTUuMjUgMzY4IDY0VjI1NkMzNjggMjY0Ljc1IDM2MC43NSAyNzIgMzUyIDI3MkgyMTEuMzc1Wk01NzYgMTI4SDQ0OFYyNTZDNDQ4IDMwOC45MzggNDA0LjkzOCAzNTIgMzUyIDM1MkgyNTZWMzgzLjk2OUMyNTYgNDE5LjIxNSAyODQuNzUgNDQ3Ljk2MyAzMjAgNDQ3Ljk2M0g0NDUuNzVMNTI4LjUgNTEwLjA4MkM1MzQuODc1IDUxNC44MzIgNTQ0IDUxMC4yMDcgNTQ0IDUwMi4yMDlWNDQ3Ljk2M0g1NzZDNjExLjI1IDQ0Ny45NjMgNjQwIDQxOS4yMTUgNjQwIDM4My45NjlWMTkxLjk5NEM2NDAgMTU2Ljc0OCA2MTEuMjUgMTI4IDU3NiAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MessagesQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M221.766 76.523H191.062C166.672 76.523 146.828 96.367 146.828 120.758C146.828 129.602 153.984 136.758 162.828 136.758S178.828 129.602 178.828 120.758C178.828 114.008 184.312 108.523 191.062 108.523H221.766C230.266 108.523 237.172 115.43 237.172 123.93C237.172 129.805 233.906 135.086 228.656 137.711L200.844 151.617C195.422 154.336 192 159.867 192 165.93V180.523C192 189.367 199.156 196.523 208 196.523S224 189.367 224 180.523V175.82L242.953 166.336C259.125 158.273 269.172 142.023 269.172 123.93C269.172 97.789 247.906 76.523 221.766 76.523ZM208 208.523C196.955 208.523 188 217.477 188 228.523C188 239.568 196.955 248.523 208 248.523S228 239.568 228 228.523C228 217.477 219.045 208.523 208 208.523ZM416 256V64C416 28.75 387.25 0 352 0H64C28.75 0 0 28.75 0 64V256C0 291.25 28.75 320 64 320H96V372C96 379.125 101.75 384 108 384C110.375 384 112.875 383.25 115.125 381.625L224 320H352C387.25 320 416 291.25 416 256ZM211.375 272L200.375 278.25L144 310.125V272H64C55.25 272 48 264.75 48 256V64C48 55.25 55.25 48 64 48H352C360.75 48 368 55.25 368 64V256C368 264.75 360.75 272 352 272H211.375ZM576 128H448V256C448 308.938 404.938 352 352 352H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128Z" />
        </Icon>
    </>
}