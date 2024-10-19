
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `reply-all` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=duotone reply-all}
 * @preview ![reply-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTguMzg3IDIyNi4xNThMMTg0LjM4NyAzNzguMTU4QzE5OS43NjIgMzkxLjQ1NSAyMjQuMDc0IDM4MC43MDUgMjI0LjA3NCAzNjAuMDAyVjM0NC4xNjhMNjYuNDA2IDIwOC4wMDJMMjI0LjA3NCA3MS44MzRWNTYuMDE4QzIyNC4wNzQgMzUuMzQ2IDE5OS43OTMgMjQuNTQ5IDE4NC4zODcgMzcuODQ2TDguMzg3IDE4OS44NDZDLTIuNjkzIDE5OS40MTQgLTIuNjkzIDIxNi41OSA4LjM4NyAyMjYuMTU4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMzYuMzA5IDIyNi4xNThMMzEyLjMwOSAzNzguMTU4QzMyNy42ODQgMzkxLjQ1NSAzNTEuOTk2IDM4MC43MDUgMzUxLjk5NiAzNjAuMDAyVjI3NS45NjNDNDYwLjQ5MiAyODguNTM5IDUwMy4wNzYgMzM0Ljc1OCA0NjQuNTk0IDQ1Ny44M0M0NTkuNTYzIDQ3My45MjQgNDc5IDQ4Ni4zOTMgNDkyLjY1NiA0NzYuNDU1QzUzNi40MDYgNDQ0LjY0MyA1NzYgMzgzLjc2OCA1NzYgMzIyLjMzQzU3NiAxOTEuMDE0IDQ4MS4xMzcgMTQ5LjEwMiAzNTEuOTk2IDEzOC44NTdWNTYuMDE4QzM1MS45OTYgMzUuMzQ2IDMyNy43MTUgMjQuNTQ5IDMxMi4zMDkgMzcuODQ2TDEzNi4zMDkgMTg5Ljg0NkMxMjUuMjE1IDE5OS40MDggMTI1LjI0NiAyMTYuNTk2IDEzNi4zMDkgMjI2LjE1OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ReplyAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M8.387 226.158L184.387 378.158C199.762 391.455 224.074 380.705 224.074 360.002V344.168L66.406 208.002L224.074 71.834V56.018C224.074 35.346 199.793 24.549 184.387 37.846L8.387 189.846C-2.693 199.414 -2.693 216.59 8.387 226.158Z" />
            <path d="M136.309 226.158L312.309 378.158C327.684 391.455 351.996 380.705 351.996 360.002V275.963C460.492 288.539 503.076 334.758 464.594 457.83C459.563 473.924 479 486.393 492.656 476.455C536.406 444.643 576 383.768 576 322.33C576 191.014 481.137 149.102 351.996 138.857V56.018C351.996 35.346 327.715 24.549 312.309 37.846L136.309 189.846C125.215 199.408 125.246 216.596 136.309 226.158Z" />
        </Icon>
    </>
}