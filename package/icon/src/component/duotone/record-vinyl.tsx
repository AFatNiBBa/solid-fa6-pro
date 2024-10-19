
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `record-vinyl` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=duotone record-vinyl}
 * @preview ![record-vinyl](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhDMTg1LjMwNyAxMjggMTI4IDE4NS4zMDcgMTI4IDI1NlMxODUuMzA3IDM4NCAyNTYgMzg0UzM4NCAzMjYuNjkzIDM4NCAyNTZTMzI2LjY5MyAxMjggMjU2IDEyOFpNMjU2IDI4OEMyMzguMzM0IDI4OCAyMjQgMjczLjY2NiAyMjQgMjU2UzIzOC4zMzQgMjI0IDI1NiAyMjRDMjczLjY2OCAyMjQgMjg4IDIzOC4zMzQgMjg4IDI1NlMyNzMuNjY4IDI4OCAyNTYgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MiAxNiAyNTZTMTIzLjQyIDQ5NiAyNTYgNDk2QzM4OC41ODIgNDk2IDQ5NiAzODguNTggNDk2IDI1NlMzODguNTgyIDE2IDI1NiAxNlpNMjU2IDM4NEMxODUuMjUgMzg0IDEyOCAzMjYuNzUgMTI4IDI1NlMxODUuMjUgMTI4IDI1NiAxMjhTMzg0IDE4NS4yNSAzODQgMjU2UzMyNi43NSAzODQgMjU2IDM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function RecordVinyl(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 128C185.307 128 128 185.307 128 256S185.307 384 256 384S384 326.693 384 256S326.693 128 256 128ZM256 288C238.334 288 224 273.666 224 256S238.334 224 256 224C273.668 224 288 238.334 288 256S273.668 288 256 288Z" />
            <path d="M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256S326.75 384 256 384Z" />
        </Icon>
    </>
}