
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-arrow-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-arrow-left?s=light arrow-right-arrow-left}
 * @preview ![arrow-right-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxNjBINDU3LjM3NUwzNTYuNjg4IDI2MC42ODhDMzUwLjQzOCAyNjYuOTM4IDM1MC40MzggMjc3LjA2MyAzNTYuNjg4IDI4My4zMTJTMzczLjA2MyAyODkuNTYyIDM3OS4zMTIgMjgzLjMxMkw1MDcuMzEyIDE1NS4zMTJDNTEwLjQzOCAxNTIuMTg4IDUxMiAxNDguMDk0IDUxMiAxNDRTNTEwLjQzOCAxMzUuODEyIDUwNy4zMTIgMTMyLjY4OEwzNzkuMzEyIDQuNjg4QzM3My4wNjIgLTEuNTYyIDM2Mi45MzcgLTEuNTYyIDM1Ni42ODggNC42ODhTMzUwLjQzOCAyMS4wNjMgMzU2LjY4OCAyNy4zMTJMNDU3LjM3NSAxMjhIMTZDNy4xNTYgMTI4IDAgMTM1LjE1NiAwIDE0NFM3LjE1NiAxNjAgMTYgMTYwWk00OTYgMzUySDU0LjYyNUwxNTUuMzEyIDI1MS4zMTJDMTYxLjU2MiAyNDUuMDYyIDE2MS41NjIgMjM0LjkzNyAxNTUuMzEyIDIyOC42ODhTMTM4LjkzNyAyMjIuNDM4IDEzMi42ODggMjI4LjY4OEw0LjY4OCAzNTYuNjg4QzEuNTYyIDM1OS44MTIgMCAzNjMuOTA2IDAgMzY4UzEuNTYyIDM3Ni4xODggNC42ODggMzc5LjMxMkwxMzIuNjg4IDUwNy4zMTJDMTM4LjkzOCA1MTMuNTYyIDE0OS4wNjMgNTEzLjU2MiAxNTUuMzEyIDUwNy4zMTJTMTYxLjU2MiA0OTAuOTM3IDE1NS4zMTIgNDg0LjY4OEw1NC42MjUgMzg0SDQ5NkM1MDQuODQ0IDM4NCA1MTIgMzc2Ljg0NCA1MTIgMzY4UzUwNC44NDQgMzUyIDQ5NiAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowRightArrowLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 160H457.375L356.688 260.688C350.438 266.938 350.438 277.063 356.688 283.312S373.063 289.562 379.312 283.312L507.312 155.312C510.438 152.188 512 148.094 512 144S510.438 135.812 507.312 132.688L379.312 4.688C373.062 -1.562 362.937 -1.562 356.688 4.688S350.438 21.063 356.688 27.312L457.375 128H16C7.156 128 0 135.156 0 144S7.156 160 16 160ZM496 352H54.625L155.312 251.312C161.562 245.062 161.562 234.937 155.312 228.688S138.937 222.438 132.688 228.688L4.688 356.688C1.562 359.812 0 363.906 0 368S1.562 376.188 4.688 379.312L132.688 507.312C138.938 513.562 149.063 513.562 155.312 507.312S161.562 490.937 155.312 484.688L54.625 384H496C504.844 384 512 376.844 512 368S504.844 352 496 352Z" />
        </Icon>
    </>
}