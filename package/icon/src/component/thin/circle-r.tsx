
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-r` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-r?s=thin circle-r}
 * @preview ![circle-r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMjA4QzM2OCAxNjMuODkxIDMzMi4xMjUgMTI4IDI4OCAxMjhIMTY4QzE2My41OTQgMTI4IDE2MCAxMzEuNTc4IDE2MCAxMzZWMzc2QzE2MCAzODAuNDIyIDE2My41OTQgMzg0IDE2OCAzODRTMTc2IDM4MC40MjIgMTc2IDM3NlYyODhIMjc2LjI0TDM1My44NDQgMzgxLjEyNUMzNTUuNDM4IDM4My4wMTYgMzU3LjcxOSAzODQgMzYwIDM4NEMzNjEuODEyIDM4NCAzNjMuNjI1IDM4My4zOTEgMzY1LjEyNSAzODIuMTQxQzM2OC41MzEgMzc5LjMxMiAzNjguOTY5IDM3NC4yNjYgMzY2LjE1NiAzNzAuODc1TDI5Ni4zODcgMjg3LjE1MkMzMzYuNTI1IDI4Mi44OTUgMzY4IDI0OS4yMzggMzY4IDIwOFpNMjg4IDI3MkgxNzZWMTQ0SDI4OEMzMjMuMjgxIDE0NCAzNTIgMTcyLjcwMyAzNTIgMjA4UzMyMy4yODEgMjcyIDI4OCAyNzJaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ4MEMxMzIuNDg2IDQ4MCAzMiAzNzkuNTE0IDMyIDI1NlMxMzIuNDg2IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NiA0ODAgMjU2UzM3OS41MTQgNDgwIDI1NiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleR(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368 208C368 163.891 332.125 128 288 128H168C163.594 128 160 131.578 160 136V376C160 380.422 163.594 384 168 384S176 380.422 176 376V288H276.24L353.844 381.125C355.438 383.016 357.719 384 360 384C361.812 384 363.625 383.391 365.125 382.141C368.531 379.312 368.969 374.266 366.156 370.875L296.387 287.152C336.525 282.895 368 249.238 368 208ZM288 272H176V144H288C323.281 144 352 172.703 352 208S323.281 272 288 272ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}