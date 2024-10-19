
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-a-z` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-a-z?s=thin arrow-up-a-z}
 * @preview ![arrow-up-a-z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NS45MDIgMTQxLjMyNEwxMjAgNjAuNDcxVjQ3MS45OThDMTIwIDQ3Ni40MDYgMTIzLjU5NCA0ODAgMTI4IDQ4MFMxMzYgNDc2LjQwNiAxMzYgNDcxLjk5OFY2MC40NzFMMjEwLjA5OCAxNDEuMzI0QzIxMS42OTEgMTQzLjA0MyAyMTMuODQ4IDE0My45MTggMjE2LjAwNCAxNDMuOTE4QzIxNy45NDEgMTQzLjkxOCAyMTkuODc5IDE0My4yMyAyMjEuNDEgMTQxLjgyNEMyMjQuNjYgMTM4LjgyMiAyMjQuODc5IDEzMy43NiAyMjEuOTEgMTMwLjUwOEwxMzMuOTA2IDM0LjQ4NEMxMzAuODQ0IDMxLjE3MiAxMjUuMTU2IDMxLjE3MiAxMjIuMDk0IDM0LjQ4NEwzNC4wOSAxMzAuNTA4QzMxLjEyMSAxMzMuNzYgMzEuMzQgMTM4LjgyMiAzNC41OSAxNDEuODI0QzM3Ljg0IDE0NC44MjQgNDIuOTAyIDE0NC42MDUgNDUuOTAyIDE0MS4zMjRaTTQ1NiA0NjRIMzI4Ljg3NUw0NjIuMTg3IDMwMS4wNjJDNDY0LjE1NiAyOTguNjg3IDQ2NC41NjIgMjk1LjM3NSA0NjMuMjE5IDI5Mi41NjJDNDYxLjkwNiAyODkuNzgxIDQ1OS4wOTQgMjg4IDQ1NiAyODhIMzEyQzMwNy41OTQgMjg4IDMwNCAyOTEuNTk0IDMwNCAyOTZTMzA3LjU5NCAzMDQgMzEyIDMwNEg0MzkuMTI1TDMwNS44MTIgNDY2LjkzOEMzMDMuODQ0IDQ2OS4zMTMgMzAzLjQzNyA0NzIuNjI1IDMwNC43ODEgNDc1LjQzOEMzMDYuMDk0IDQ3OC4yMTkgMzA4LjkwNiA0ODAgMzEyIDQ4MEg0NTZDNDYwLjQwNiA0ODAgNDY0IDQ3Ni40MDYgNDY0IDQ3MlM0NjAuNDA2IDQ2NCA0NTYgNDY0Wk00NzkuMTU2IDIxMi40MzhMMzkxLjE1NiAzNi40MzhDMzg4LjQ2OSAzMSAzNzkuNTMxIDMxIDM3Ni44NDQgMzYuNDM4TDI4OC44NDQgMjEyLjQzOEMyODYuODc1IDIxNi4zNzUgMjg4LjQ2OSAyMjEuMTg4IDI5Mi40MzcgMjIzLjE1NkMyOTYuMjUgMjI1LjA2MiAzMDEuMTg3IDIyMy41NjIgMzAzLjE1NiAyMTkuNTYyTDMyOC45MzcgMTY4SDQzOS4wNjJMNDY0Ljg0NCAyMTkuNTYyQzQ2Ni4yNSAyMjIuMzc1IDQ2OS4wNjIgMjI0IDQ3MiAyMjRDNDczLjIxOSAyMjQgNDc0LjQzNyAyMjMuNzE5IDQ3NS41NjIgMjIzLjE1NkM0NzkuNTMxIDIyMS4xODggNDgxLjEyNSAyMTYuMzc1IDQ3OS4xNTYgMjEyLjQzOFpNMzM2LjkzNyAxNTJMMzg0IDU3Ljg3NUw0MzEuMDYyIDE1MkgzMzYuOTM3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpAZ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M45.902 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.098 141.324C211.691 143.043 213.848 143.918 216.004 143.918C217.941 143.918 219.879 143.23 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824C37.84 144.824 42.902 144.605 45.902 141.324ZM456 464H328.875L462.187 301.062C464.156 298.687 464.562 295.375 463.219 292.562C461.906 289.781 459.094 288 456 288H312C307.594 288 304 291.594 304 296S307.594 304 312 304H439.125L305.812 466.938C303.844 469.313 303.437 472.625 304.781 475.438C306.094 478.219 308.906 480 312 480H456C460.406 480 464 476.406 464 472S460.406 464 456 464ZM479.156 212.438L391.156 36.438C388.469 31 379.531 31 376.844 36.438L288.844 212.438C286.875 216.375 288.469 221.188 292.437 223.156C296.25 225.062 301.187 223.562 303.156 219.562L328.937 168H439.062L464.844 219.562C466.25 222.375 469.062 224 472 224C473.219 224 474.437 223.719 475.562 223.156C479.531 221.188 481.125 216.375 479.156 212.438ZM336.937 152L384 57.875L431.062 152H336.937Z" />
        </Icon>
    </>
}