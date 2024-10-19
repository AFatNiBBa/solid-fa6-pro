
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-a` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=light circle-a}
 * @preview ![circle-a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzAuMzEyIDEyMC44NDRDMjY0Ljg3NSAxMTAgMjQ3LjEyNSAxMTAgMjQxLjY4OCAxMjAuODQ0TDEyOS42ODggMzQ0Ljg0NEMxMjUuNzM0IDM1Mi43NSAxMjguOTM4IDM2Mi4zNTkgMTM2Ljg0NCAzNjYuMzEyQzE0NC43NSAzNzAuMjM0IDE1NC4zNTkgMzY3LjA2MiAxNTguMzEyIDM1OS4xNTZMMTc4LjIwNSAzMTkuMzcxQzE3OS4yNSAzMTkuNTg2IDE4MC4yMjEgMzIwIDE4MS4zMjggMzIwSDMzMC42NzJDMzMxLjc3OSAzMjAgMzMyLjc1IDMxOS41ODYgMzMzLjc5NSAzMTkuMzcxTDM1My42ODggMzU5LjE1NkMzNTYuNSAzNjQuNzY2IDM2Mi4xNDEgMzY4IDM2OC4wMTYgMzY4QzM3MC40MjIgMzY4IDM3Mi44NTkgMzY3LjQ1MyAzNzUuMTU2IDM2Ni4zMTJDMzgzLjA2MiAzNjIuMzU5IDM4Ni4yNjYgMzUyLjc1IDM4Mi4zMTIgMzQ0Ljg0NEwyNzAuMzEyIDEyMC44NDRaTTE5My44OTEgMjg4TDI1NiAxNjMuNzgxTDMxOC4xMDkgMjg4SDE5My44OTFaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleA(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M270.312 120.844C264.875 110 247.125 110 241.688 120.844L129.688 344.844C125.734 352.75 128.938 362.359 136.844 366.312C144.75 370.234 154.359 367.062 158.312 359.156L178.205 319.371C179.25 319.586 180.221 320 181.328 320H330.672C331.779 320 332.75 319.586 333.795 319.371L353.688 359.156C356.5 364.766 362.141 368 368.016 368C370.422 368 372.859 367.453 375.156 366.312C383.062 362.359 386.266 352.75 382.312 344.844L270.312 120.844ZM193.891 288L256 163.781L318.109 288H193.891ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}