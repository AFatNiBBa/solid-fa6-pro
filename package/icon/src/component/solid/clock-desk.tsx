
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-desk` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=solid clock-desk}
 * @preview ![clock-desk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDQ4QzM0Ny43NDIgNDQ4IDQ0OCAzNDcuNzM4IDQ0OCAyMjRDNDQ4IDEwMC4yNTggMzQ3Ljc0MiAwIDIyNCAwQzEwMC4yNiAwIDAgMTAwLjI1OCAwIDIyNEMwIDM0Ny43MzggMTAwLjI2IDQ0OCAyMjQgNDQ4Wk0yMDAuMDE0IDEyMEMyMDAuMDE0IDEwNi43NSAyMTAuNzY0IDk2IDIyNC4wMTQgOTZTMjQ4LjAxNCAxMDYuNzUgMjQ4LjAxNCAxMjBWMjI4TDMwMi40MiAyNjguODEyQzMxMy4wMTQgMjc2Ljc1IDMxNS4xNyAyOTEuNzgxIDMwNy4yMTcgMzAyLjQwNkMzMDIuNDk4IDMwOC42ODggMjk1LjI5NSAzMTIgMjg3Ljk5OCAzMTJDMjgyLjk4MiAzMTIgMjc3LjkzNiAzMTAuNDM4IDI3My42MDcgMzA3LjE4OEwyMDkuNjA3IDI1OS4xODhDMjAzLjU3NiAyNTQuNjU2IDIwMC4wMTQgMjQ3LjU2MiAyMDAuMDE0IDI0MFYxMjBaTTIyNCA0ODBDMTI3LjU1NyA0ODAgNDMuNjQ4IDQyNi42MTcgMCAzNDcuODM2VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkg0MDBDNDI2LjUxIDUxMiA0NDggNDkwLjUwOCA0NDggNDY0VjM0Ny44MzZDNDA0LjM1MiA0MjYuNjE3IDMyMC40NDMgNDgwIDIyNCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ClockDesk(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 448C347.742 448 448 347.738 448 224C448 100.258 347.742 0 224 0C100.26 0 0 100.258 0 224C0 347.738 100.26 448 224 448ZM200.014 120C200.014 106.75 210.764 96 224.014 96S248.014 106.75 248.014 120V228L302.42 268.812C313.014 276.75 315.17 291.781 307.217 302.406C302.498 308.688 295.295 312 287.998 312C282.982 312 277.936 310.438 273.607 307.188L209.607 259.188C203.576 254.656 200.014 247.562 200.014 240V120ZM224 480C127.557 480 43.648 426.617 0 347.836V464C0 490.508 21.49 512 48 512H400C426.51 512 448 490.508 448 464V347.836C404.352 426.617 320.443 480 224 480Z" />
        </Icon>
    </>
}