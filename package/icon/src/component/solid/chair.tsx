
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chair` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=solid chair}
 * @preview ![chair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDUuMDY1IDMzOC41OTRMNDMwLjI5OSAzMDYuNTk0QzQyNS4wNjUgMjk1LjI1IDQxMy43MjEgMjg4IDQwMS4yMzYgMjg4SDQ2Ljc2NEMzNC4yNzkgMjg4IDIyLjkzNSAyOTUuMjUgMTcuNzAxIDMwNi41OTRMMi45MzUgMzM4LjU5NEMtMS42MjcgMzQ4LjUgLTAuODMgMzYwLjA2MiA1LjA0NSAzNjkuMjVTMjEuMDkyIDM4NCAzMS45OTggMzg0VjQ5NkMzMS45OTggNTA0LjgzNiAzOS4xNjIgNTEyIDQ3Ljk5OCA1MTJINzkuOTk4Qzg4LjgzNiA1MTIgOTUuOTk5IDUwNC44MzYgOTUuOTk5IDQ5NlYzODRIMzUyLjAwMVY0OTZDMzUyLjAwMSA1MDQuODM2IDM1OS4xNjUgNTEyIDM2OC4wMDIgNTEySDQwMC4wMDJDNDA4Ljg0IDUxMiA0MTYuMDAyIDUwNC44MzYgNDE2LjAwMiA0OTZWMzg0QzQyNi45MDggMzg0IDQzNy4wOCAzNzguNDM4IDQ0Mi45NTUgMzY5LjI1UzQ0OS42MjcgMzQ4LjUgNDQ1LjA2NSAzMzguNTk0Wk0xMTEuOTk5IDEyOEMxMTEuOTk5IDk4LjUyMyAxMjguMjAyIDczLjAwNiAxNTEuOTk5IDU5LjEyOVYyNTZIMjAwVjQ4SDI0OFYyNTZIMjk2LjAwMVY1OS4xMjlDMzE5Ljc5OCA3My4wMDYgMzM2LjAwMSA5OC41MjMgMzM2LjAwMSAxMjhWMjU2SDM4NC4wMDJWMTI4QzM4NC4wMDIgNTcuMzA3IDMyNi42OTQgMCAyNTYgMEgxOTJDMTIxLjMwNiAwIDYzLjk5OCA1Ny4zMDcgNjMuOTk4IDEyOFYyNTZIMTExLjk5OVYxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Chair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M445.065 338.594L430.299 306.594C425.065 295.25 413.721 288 401.236 288H46.764C34.279 288 22.935 295.25 17.701 306.594L2.935 338.594C-1.627 348.5 -0.83 360.062 5.045 369.25S21.092 384 31.998 384V496C31.998 504.836 39.162 512 47.998 512H79.998C88.836 512 95.999 504.836 95.999 496V384H352.001V496C352.001 504.836 359.165 512 368.002 512H400.002C408.84 512 416.002 504.836 416.002 496V384C426.908 384 437.08 378.438 442.955 369.25S449.627 348.5 445.065 338.594ZM111.999 128C111.999 98.523 128.202 73.006 151.999 59.129V256H200V48H248V256H296.001V59.129C319.798 73.006 336.001 98.523 336.001 128V256H384.002V128C384.002 57.307 326.694 0 256 0H192C121.306 0 63.998 57.307 63.998 128V256H111.999V128Z" />
        </Icon>
    </>
}