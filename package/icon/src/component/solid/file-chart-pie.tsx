
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-chart-pie` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-chart-pie?s=solid file-chart-pie}
 * @preview ![file-chart-pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMTM2LjUgNDM4LjVDMTA3Ljc1IDQyNy4zNzUgODQuNjI1IDQwNC4yNSA3My41IDM3NS41QzQzLjM3NSAyOTguMTI1IDkwLjg3NSAyMjQuNzUgMTYwIDIxMC42MjVWMzUySDMwMS4zNzVDMjg3LjI1IDQyMS4xMjUgMjEzLjg3NSA0NjguNjI1IDEzNi41IDQzOC41Wk0zMTIuMTI1IDMyMEgxOTJWMTk5Ljg3NUMyNTguMzc1IDE5OS44NzUgMzEyLjEyNSAyNTMuNjI1IDMxMi4xMjUgMzIwWk0yNTYgMFYxMjhIMzg0TDI1NiAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileChartPie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM136.5 438.5C107.75 427.375 84.625 404.25 73.5 375.5C43.375 298.125 90.875 224.75 160 210.625V352H301.375C287.25 421.125 213.875 468.625 136.5 438.5ZM312.125 320H192V199.875C258.375 199.875 312.125 253.625 312.125 320ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}