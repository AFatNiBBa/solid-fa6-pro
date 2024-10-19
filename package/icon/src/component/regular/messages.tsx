
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `messages` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=regular messages}
 * @preview ![messages](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMjU2VjY0QzQxNiAyOC43NSAzODcuMjUgMCAzNTIgMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYyNTZDMCAyOTEuMjUgMjguNzUgMzIwIDY0IDMyMEg5NlYzNzJDOTYgMzc5LjEyNSAxMDEuNzUgMzg0IDEwOCAzODRDMTEwLjM3NSAzODQgMTEyLjg3NSAzODMuMjUgMTE1LjEyNSAzODEuNjI1TDIyNCAzMjBIMzUyQzM4Ny4yNSAzMjAgNDE2IDI5MS4yNSA0MTYgMjU2Wk0yMTEuMzc1IDI3MkwyMDAuMzc1IDI3OC4yNUwxNDQgMzEwLjEyNVYyNzJINjRDNTUuMjUgMjcyIDQ4IDI2NC43NSA0OCAyNTZWNjRDNDggNTUuMjUgNTUuMjUgNDggNjQgNDhIMzUyQzM2MC43NSA0OCAzNjggNTUuMjUgMzY4IDY0VjI1NkMzNjggMjY0Ljc1IDM2MC43NSAyNzIgMzUyIDI3MkgyMTEuMzc1Wk01NzYgMTI4SDQ0OFYyNTZDNDQ4IDMwOC45MzggNDA0LjkzOCAzNTIgMzUyIDM1MkgyNTZWMzgzLjk2OUMyNTYgNDE5LjIxNSAyODQuNzUgNDQ3Ljk2MyAzMjAgNDQ3Ljk2M0g0NDUuNzVMNTI4LjUgNTEwLjA4MkM1MzQuODc1IDUxNC44MzIgNTQ0IDUxMC4yMDcgNTQ0IDUwMi4yMDlWNDQ3Ljk2M0g1NzZDNjExLjI1IDQ0Ny45NjMgNjQwIDQxOS4yMTUgNjQwIDM4My45NjlWMTkxLjk5NEM2NDAgMTU2Ljc0OCA2MTEuMjUgMTI4IDU3NiAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Messages(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M416 256V64C416 28.75 387.25 0 352 0H64C28.75 0 0 28.75 0 64V256C0 291.25 28.75 320 64 320H96V372C96 379.125 101.75 384 108 384C110.375 384 112.875 383.25 115.125 381.625L224 320H352C387.25 320 416 291.25 416 256ZM211.375 272L200.375 278.25L144 310.125V272H64C55.25 272 48 264.75 48 256V64C48 55.25 55.25 48 64 48H352C360.75 48 368 55.25 368 64V256C368 264.75 360.75 272 352 272H211.375ZM576 128H448V256C448 308.938 404.938 352 352 352H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128Z" />
        </Icon>
    </>
}