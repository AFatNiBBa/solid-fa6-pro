
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-code` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=solid file-code}
 * @preview ![file-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTI4VjBINDhDMjEuNDkyIDAgMCAyMS40OTIgMCA0OFY0NjRDMCA0OTAuNTA4IDIxLjQ5MiA1MTIgNDggNTEySDMzNkMzNjIuNTA4IDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyOCAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMTU0LjE0MSAzNTMuODQ0QzE2MS45NTMgMzYxLjY1NiAxNjEuOTUzIDM3NC4zNDQgMTU0LjE0MSAzODIuMTU2QzE1MC4yMzQgMzg2LjA2MiAxNDUuMTI1IDM4OCAxNDAgMzg4UzEyOS43NjYgMzg2LjA2MiAxMjUuODU5IDM4Mi4xNTZMNzcuODU5IDMzNC4xNTZDNzAuMDQ3IDMyNi4zNDQgNzAuMDQ3IDMxMy42NTYgNzcuODU5IDMwNS44NDRMMTI1Ljg1OSAyNTcuODQ0QzEzMy42NzIgMjUwLjAzMSAxNDYuMzI4IDI1MC4wMzEgMTU0LjE0MSAyNTcuODQ0UzE2MS45NTMgMjc4LjM0NCAxNTQuMTQxIDI4Ni4xNTZMMTIwLjI4MSAzMjBMMTU0LjE0MSAzNTMuODQ0Wk0zMDYuMTQxIDMwNS44NDRDMzEzLjk1MyAzMTMuNjU2IDMxMy45NTMgMzI2LjM0NCAzMDYuMTQxIDMzNC4xNTZMMjU4LjE0MSAzODIuMTU2QzI1NC4yMzQgMzg2LjA2MiAyNDkuMTI1IDM4OCAyNDQgMzg4UzIzMy43NjYgMzg2LjA2MiAyMjkuODU5IDM4Mi4xNTZDMjIyLjA0NyAzNzQuMzQ0IDIyMi4wNDcgMzYxLjY1NiAyMjkuODU5IDM1My44NDRMMjYzLjcxOSAzMjBMMjI5Ljg1OSAyODYuMTU2QzIyMi4wNDcgMjc4LjM0NCAyMjIuMDQ3IDI2NS42NTYgMjI5Ljg1OSAyNTcuODQ0UzI1MC4zMjggMjUwLjAzMSAyNTguMTQxIDI1Ny44NDRMMzA2LjE0MSAzMDUuODQ0Wk0yNTYgMFYxMjhIMzg0TDI1NiAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileCode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM154.141 353.844C161.953 361.656 161.953 374.344 154.141 382.156C150.234 386.062 145.125 388 140 388S129.766 386.062 125.859 382.156L77.859 334.156C70.047 326.344 70.047 313.656 77.859 305.844L125.859 257.844C133.672 250.031 146.328 250.031 154.141 257.844S161.953 278.344 154.141 286.156L120.281 320L154.141 353.844ZM306.141 305.844C313.953 313.656 313.953 326.344 306.141 334.156L258.141 382.156C254.234 386.062 249.125 388 244 388S233.766 386.062 229.859 382.156C222.047 374.344 222.047 361.656 229.859 353.844L263.719 320L229.859 286.156C222.047 278.344 222.047 265.656 229.859 257.844S250.328 250.031 258.141 257.844L306.141 305.844ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}