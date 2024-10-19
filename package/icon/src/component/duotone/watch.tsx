
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch?s=duotone watch}
 * @preview ![watch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA2NEM4NS45NjEgNjQgMCAxNDkuOTYxIDAgMjU2Uzg1Ljk2MSA0NDggMTkyIDQ0OFMzODQgMzYyLjAzOSAzODQgMjU2UzI5OC4wMzkgNjQgMTkyIDY0Wk0xOTIgNDAwQzExMi41OTggNDAwIDQ4IDMzNS40MDIgNDggMjU2UzExMi41OTggMTEyIDE5MiAxMTJTMzM2IDE3Ni41OTggMzM2IDI1NlMyNzEuNDAyIDQwMCAxOTIgNDAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02NCAzOTguODJWNDY0QzY0IDQ5MC4zOTggODUuNiA1MTIgMTEyIDUxMkgyNzJDMjk4LjQgNTEyIDMyMCA0OTAuMzk4IDMyMCA0NjRWMzk4LjgyQzI4Ni4wMTQgNDI5LjMwMSAyNDEuMjQ0IDQ0OCAxOTIgNDQ4QzE0Mi43NTQgNDQ4IDk3Ljk4NCA0MjkuMzAxIDY0IDM5OC44MlpNMjcyIDBIMTEyQzg1LjYgMCA2NCAyMS42MDIgNjQgNDhWMTEzLjE4Qzk3Ljk4NCA4Mi42OTUgMTQyLjc1NCA2NCAxOTIgNjRDMjQxLjI0NCA2NCAyODYuMDE0IDgyLjY5OSAzMjAgMTEzLjE4VjQ4QzMyMCAyMS42MDIgMjk4LjQgMCAyNzIgMFpNMTkyIDE1MkMxNzguNzUgMTUyIDE2OCAxNjIuNzUgMTY4IDE3NlYyNDhDMTY4IDI1NS4xMjUgMTcxLjE1NiAyNjEuODc1IDE3Ni42MjUgMjY2LjQzOEwyMjQuNjI1IDMwNi40MzhDMjI5LjEyNSAzMTAuMTg4IDIzNC41NjIgMzEyIDI0MCAzMTJDMjQ2Ljg3NSAzMTIgMjUzLjY4OCAzMDkuMDYyIDI1OC40MzggMzAzLjM3NUMyNjYuOTM4IDI5My4xODggMjY1LjU2MiAyNzguMDYzIDI1NS4zNzUgMjY5LjU2M0wyMTYgMjM2Ljc1VjE3NkMyMTYgMTYyLjc1IDIwNS4yNSAxNTIgMTkyIDE1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Watch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 64C85.961 64 0 149.961 0 256S85.961 448 192 448S384 362.039 384 256S298.039 64 192 64ZM192 400C112.598 400 48 335.402 48 256S112.598 112 192 112S336 176.598 336 256S271.402 400 192 400Z" />
            <path d="M64 398.82V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V398.82C286.014 429.301 241.244 448 192 448C142.754 448 97.984 429.301 64 398.82ZM272 0H112C85.6 0 64 21.602 64 48V113.18C97.984 82.695 142.754 64 192 64C241.244 64 286.014 82.699 320 113.18V48C320 21.602 298.4 0 272 0ZM192 152C178.75 152 168 162.75 168 176V248C168 255.125 171.156 261.875 176.625 266.438L224.625 306.438C229.125 310.188 234.562 312 240 312C246.875 312 253.688 309.062 258.438 303.375C266.938 293.188 265.562 278.063 255.375 269.563L216 236.75V176C216 162.75 205.25 152 192 152Z" />
        </Icon>
    </>
}