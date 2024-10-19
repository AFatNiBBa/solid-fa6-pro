
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stairs` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=duotone stairs}
 * @preview ![stairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiA2NEM1NzYgODEuNjcyIDU2MS42ODggOTYgNTQ0IDk2SDQ0OFYxOTJDNDQ4IDIwOS42NzIgNDMzLjY4OCAyMjQgNDE2IDIyNEgzMjBWMzIwQzMyMCAzMzcuNjcyIDMwNS42ODggMzUyIDI4OCAzNTJIMTkyVjQ0OEMxOTIgNDY1LjY3MiAxNzcuNjg4IDQ4MCAxNjAgNDgwSDMyQzE0LjMxMiA0ODAgMCA0NjUuNjcyIDAgNDQ4UzE0LjMxMiA0MTYgMzIgNDE2SDEyOFYzMjBDMTI4IDMwMi4zMjggMTQyLjMxMiAyODggMTYwIDI4OEgyNTZWMTkyQzI1NiAxNzQuMzI4IDI3MC4zMTIgMTYwIDI4OCAxNjBIMzg0VjY0QzM4NCA0Ni4zMjggMzk4LjMxMiAzMiA0MTYgMzJINTQ0QzU2MS42ODggMzIgNTc2IDQ2LjMyOCA1NzYgNjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Stairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M576 64C576 81.672 561.688 96 544 96H448V192C448 209.672 433.688 224 416 224H320V320C320 337.672 305.688 352 288 352H192V448C192 465.672 177.688 480 160 480H32C14.312 480 0 465.672 0 448S14.312 416 32 416H128V320C128 302.328 142.312 288 160 288H256V192C256 174.328 270.312 160 288 160H384V64C384 46.328 398.312 32 416 32H544C561.688 32 576 46.328 576 64Z" />
        </Icon>
    </>
}