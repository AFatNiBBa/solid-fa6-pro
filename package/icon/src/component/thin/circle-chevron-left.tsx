
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=thin circle-chevron-left}
 * @preview ![circle-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAyNTZDMTYgMzg4LjU0NyAxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZTMTYgMTIzLjQ1MyAxNiAyNTZaTTQ4MCAyNTZDNDgwIDM3OS41MTQgMzc5LjUxNCA0ODAgMjU2IDQ4MFMzMiAzNzkuNTE0IDMyIDI1NlMxMzIuNDg2IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NiA0ODAgMjU2Wk0xNzAuNTQ3IDI1MC4xNDNDMTY3LjI5NyAyNTMuMTQzIDE2Ny4yOTcgMjU4LjgzIDE3MC41NDcgMjYxLjgzTDI5MC41NDcgMzczLjgzQzI5My43NjYgMzc2Ljg2MSAyOTguODI4IDM3Ni42NzQgMzAxLjg0NCAzNzMuNDU1QzMwNC44NDQgMzcwLjIwNSAzMDQuNzAzIDM2NS4xNzQgMzAxLjQ1MyAzNjIuMTQzTDE4Ny43MTkgMjU1Ljk4NkwzMDEuNDUzIDE0OS44M0MzMDMuMTQxIDE0OC4yNjggMzA0IDE0Ni4xMTEgMzA0IDE0My45ODZDMzA0IDE0Mi4wMTggMzAzLjI4MSAxNDAuMDggMzAxLjg0NCAxMzguNTE4QzI5OC44MjggMTM1LjI5OSAyOTMuNzY2IDEzNS4xMTEgMjkwLjU0NyAxMzguMTQzTDE3MC41NDcgMjUwLjE0M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M16 256C16 388.547 123.451 496 256 496S496 388.547 496 256S388.549 16 256 16S16 123.453 16 256ZM480 256C480 379.514 379.514 480 256 480S32 379.514 32 256S132.486 32 256 32S480 132.486 480 256ZM170.547 250.143C167.297 253.143 167.297 258.83 170.547 261.83L290.547 373.83C293.766 376.861 298.828 376.674 301.844 373.455C304.844 370.205 304.703 365.174 301.453 362.143L187.719 255.986L301.453 149.83C303.141 148.268 304 146.111 304 143.986C304 142.018 303.281 140.08 301.844 138.518C298.828 135.299 293.766 135.111 290.547 138.143L170.547 250.143Z" />
        </Icon>
    </>
}