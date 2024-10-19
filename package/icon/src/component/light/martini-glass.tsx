
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `martini-glass` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=light martini-glass}
 * @preview ![martini-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuMDM3IDU3LjYyNUM1MjMuMjkgMzYuMzc1IDUwOC4yODkgMCA0NzguMjgzIDBIMzMuNzE2QzMuNzEyIDAgLTExLjI5IDM2LjM3NSA5Ljk2MiA1Ny42MjVMMjM5Ljk5OCAyODcuNjI1VjQ4MEgxNDMuOTk5QzEzNS4xNjQgNDgwIDEyNy45OTkgNDg3LjE2NCAxMjcuOTk5IDQ5NlMxMzUuMTY0IDUxMiAxNDMuOTk5IDUxMkgzNjcuOTk5QzM3Ni44MzcgNTEyIDM4My45OTkgNTA0LjgzNiAzODMuOTk5IDQ5NlMzNzYuODM3IDQ4MCAzNjcuOTk5IDQ4MEgyNzIuMDAxVjI4Ny42MjVMNTAyLjAzNyA1Ny42MjVaTTQ3OS45OTkgMzJMMzg1LjAwNyAxMjhIMTI2Ljk5MkwzMS45OTkgMzJINDc5Ljk5OVpNMjU1Ljk5OSAyNTguMzc1TDE1OC42NTYgMTYwSDM1My4zNDNMMjU1Ljk5OSAyNTguMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MartiniGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.037 57.625C523.29 36.375 508.289 0 478.283 0H33.716C3.712 0 -11.29 36.375 9.962 57.625L239.998 287.625V480H143.999C135.164 480 127.999 487.164 127.999 496S135.164 512 143.999 512H367.999C376.837 512 383.999 504.836 383.999 496S376.837 480 367.999 480H272.001V287.625L502.037 57.625ZM479.999 32L385.007 128H126.992L31.999 32H479.999ZM255.999 258.375L158.656 160H353.343L255.999 258.375Z" />
        </Icon>
    </>
}