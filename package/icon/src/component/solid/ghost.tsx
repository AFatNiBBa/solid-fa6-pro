
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ghost` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=solid ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODYuMTI1IDAuMDg4QzgxIDMuMjE0IDAgOTQuODU2IDAgMjAwLjAwMlY0NjQuMDUzQzAgNDc4LjMwNiAxNy4yNSA0ODUuNDMyIDI3LjI1IDQ3NS4zMDVMNTIuMjUgNDU2LjgwMkM1OC44NzUgNDUxLjgwMSA2OC4yNSA0NTIuODAxIDczLjc1IDQ1OS4wNTJMMTE2Ljc1IDUwNy4zMTJDMTIzIDUxMy41NjMgMTMzLjEyNSA1MTMuNTYzIDEzOS4zNzUgNTA3LjMxMkwxODAgNDYxLjU1M0MxODYuMzc1IDQ1NC4zMDEgMTk3LjYyNSA0NTQuMzAxIDIwNCA0NjEuNTUzTDI0NC42MjUgNTA3LjMxMkMyNTAuODc1IDUxMy41NjMgMjYxIDUxMy41NjMgMjY3LjI1IDUwNy4zMTJMMzEwLjI1IDQ1OS4wNTJDMzE1Ljc1IDQ1Mi44MDEgMzI1LjEyNSA0NTEuODAxIDMzMS43NSA0NTYuODAyTDM1Ni43NSA0NzUuMzA1QzM2Ni43NSA0ODUuNDMyIDM4NCA0NzguMzA2IDM4NCA0NjQuMDUzVjE5MkMzODQgODMuOTc5IDI5NC44NzUgLTMuMTYzIDE4Ni4xMjUgMC4wODhaTTEyOCAyMjQuMDA3QzExMC4zNzUgMjI0LjAwNyA5NiAyMDkuNjI5IDk2IDE5MlMxMTAuMzc1IDE1OS45OTQgMTI4IDE1OS45OTRTMTYwIDE3NC4zNzIgMTYwIDE5MlMxNDUuNjI1IDIyNC4wMDcgMTI4IDIyNC4wMDdaTTI1NiAyMjQuMDA3QzIzOC4zNzUgMjI0LjAwNyAyMjQgMjA5LjYyOSAyMjQgMTkyUzIzOC4zNzUgMTU5Ljk5NCAyNTYgMTU5Ljk5NEMyNzMuNjI1IDE1OS45OTQgMjg4IDE3NC4zNzIgMjg4IDE5MlMyNzMuNjI1IDIyNC4wMDcgMjU2IDIyNC4wMDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ghost(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M186.125 0.088C81 3.214 0 94.856 0 200.002V464.053C0 478.306 17.25 485.432 27.25 475.305L52.25 456.802C58.875 451.801 68.25 452.801 73.75 459.052L116.75 507.312C123 513.563 133.125 513.563 139.375 507.312L180 461.553C186.375 454.301 197.625 454.301 204 461.553L244.625 507.312C250.875 513.563 261 513.563 267.25 507.312L310.25 459.052C315.75 452.801 325.125 451.801 331.75 456.802L356.75 475.305C366.75 485.432 384 478.306 384 464.053V192C384 83.979 294.875 -3.163 186.125 0.088ZM128 224.007C110.375 224.007 96 209.629 96 192S110.375 159.994 128 159.994S160 174.372 160 192S145.625 224.007 128 224.007ZM256 224.007C238.375 224.007 224 209.629 224 192S238.375 159.994 256 159.994C273.625 159.994 288 174.372 288 192S273.625 224.007 256 224.007Z" />
        </Icon>
    </>
}