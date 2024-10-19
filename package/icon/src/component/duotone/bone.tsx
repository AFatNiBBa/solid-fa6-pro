
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=duotone bone}
 * @preview ![bone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzNC44NzUgMjY3LjVDNTYwLjEyNSAyODAgNTc2IDMwNS43NSA1NzYgMzM0VjMzOC4zODdDNTc2IDM3My45MzYgNTUyLjUwNiA0MDYuNzQgNTE3Ljc2IDQxNC4yNjJDNDc5LjU3OCA0MjIuNTI1IDQ0Mi44MDMgNDAwLjUzNSA0MzEgMzY1LjEyNUM0MzAuOTY1IDM2NS4wMjEgNDMwLjkzMiAzNjQuOTE4IDQzMC44OTYgMzY0LjgxMkM0MjUuMjczIDM0Ny43MzIgNDA5LjU3MiAzMzYgMzkxLjU5IDMzNkgxODQuNDE0QzE2Ni41MjMgMzM2IDE1MC43ODUgMzQ3LjU2NiAxNDUuMTg4IDM2NC41NTlDMTQ1LjEyNSAzNjQuNzQ4IDE0NS4wNjMgMzY0LjkzNiAxNDUgMzY1LjEyNUMxMzMuMTk3IDQwMC41MzUgOTYuNDIyIDQyMi41MjUgNTguMjQgNDE0LjI2MkMyMy40OTQgNDA2Ljc0IDAgMzczLjkzNiAwIDMzOC4zODdWMzM0QzAgMzA1Ljc1IDE1Ljg3NSAyODAgNDEuMTI1IDI2Ny41QzUwLjUgMjYyLjc1IDUwLjUgMjQ5LjI1IDQxLjEyNSAyNDQuNUMxNS44NzUgMjMyIDAgMjA2LjI1IDAgMTc4VjE3My42MTNDMCAxMzguMDY0IDIzLjQ5NCAxMDUuMjYgNTguMjQgOTcuNzM4Qzk2LjQyMiA4OS40NzUgMTMzLjE5NyAxMTEuNDY1IDE0NSAxNDYuODc1TDE0NS4wOTQgMTQ3LjE2MkMxNTAuNzIzIDE2NC4yNTIgMTY2LjQxNiAxNzYgMTg0LjQxIDE3NkgzOTEuNTg2QzQwOS40NzcgMTc2IDQyNS4yMTMgMTY0LjQzNCA0MzAuODEzIDE0Ny40NDNMNDMxIDE0Ni44NzVDNDQyLjgwMyAxMTEuNDY1IDQ3OS41NzggODkuNDc1IDUxNy43NiA5Ny43MzhDNTUyLjUwNiAxMDUuMjYgNTc2IDEzOC4wNjQgNTc2IDE3My42MTNWMTc4QzU3NiAyMDYuMjUgNTYwLjEyNSAyMzIgNTM0Ljg3NSAyNDQuNUM1MjUuNSAyNDkuMjUgNTI1LjUgMjYyLjc1IDUzNC44NzUgMjY3LjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Bone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M534.875 267.5C560.125 280 576 305.75 576 334V338.387C576 373.936 552.506 406.74 517.76 414.262C479.578 422.525 442.803 400.535 431 365.125C430.965 365.021 430.932 364.918 430.896 364.812C425.273 347.732 409.572 336 391.59 336H184.414C166.523 336 150.785 347.566 145.188 364.559C145.125 364.748 145.063 364.936 145 365.125C133.197 400.535 96.422 422.525 58.24 414.262C23.494 406.74 0 373.936 0 338.387V334C0 305.75 15.875 280 41.125 267.5C50.5 262.75 50.5 249.25 41.125 244.5C15.875 232 0 206.25 0 178V173.613C0 138.064 23.494 105.26 58.24 97.738C96.422 89.475 133.197 111.465 145 146.875L145.094 147.162C150.723 164.252 166.416 176 184.41 176H391.586C409.477 176 425.213 164.434 430.813 147.443L431 146.875C442.803 111.465 479.578 89.475 517.76 97.738C552.506 105.26 576 138.064 576 173.613V178C576 206.25 560.125 232 534.875 244.5C525.5 249.25 525.5 262.75 534.875 267.5Z" />
        </Icon>
    </>
}