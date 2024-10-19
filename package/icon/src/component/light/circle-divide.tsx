
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-divide` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=light circle-divide}
 * @preview ![circle-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjQwSDE2MEMxNTEuMTU2IDI0MCAxNDQgMjQ3LjE1NiAxNDQgMjU2UzE1MS4xNTYgMjcyIDE2MCAyNzJIMzUyQzM2MC44NDQgMjcyIDM2OCAyNjQuODQ0IDM2OCAyNTZTMzYwLjg0NCAyNDAgMzUyIDI0MFpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDY0QzE0MS4zMDkgNDY0IDQ4IDM3MC42OTEgNDggMjU2UzE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFpNMjU2IDE4NEMyNjkuMjU0IDE4NCAyODAgMTczLjI1NCAyODAgMTYwQzI4MCAxNDYuNzQ0IDI2OS4yNTQgMTM2IDI1NiAxMzZTMjMyIDE0Ni43NDQgMjMyIDE2MEMyMzIgMTczLjI1NCAyNDIuNzQ2IDE4NCAyNTYgMTg0Wk0yNTYgMzI4QzI0Mi43NDYgMzI4IDIzMiAzMzguNzQ0IDIzMiAzNTJDMjMyIDM2NS4yNTQgMjQyLjc0NiAzNzYgMjU2IDM3NlMyODAgMzY1LjI1NCAyODAgMzUyQzI4MCAzMzguNzQ0IDI2OS4yNTQgMzI4IDI1NiAzMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleDivide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 240H160C151.156 240 144 247.156 144 256S151.156 272 160 272H352C360.844 272 368 264.844 368 256S360.844 240 352 240ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM256 184C269.254 184 280 173.254 280 160C280 146.744 269.254 136 256 136S232 146.744 232 160C232 173.254 242.746 184 256 184ZM256 328C242.746 328 232 338.744 232 352C232 365.254 242.746 376 256 376S280 365.254 280 352C280 338.744 269.254 328 256 328Z" />
        </Icon>
    </>
}