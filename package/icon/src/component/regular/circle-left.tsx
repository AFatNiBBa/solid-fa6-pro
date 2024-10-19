
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=regular circle-left}
 * @preview ![circle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgMjI0TDI3MiAyMjQuMDA0VjE2OC4wMDRDMjcyIDE1OC40NzMgMjY2LjM0NCAxNDkuODQ4IDI1Ny42MjUgMTQ2LjAwNEMyNDguODc1IDE0Mi4xOTEgMjM4LjcxOSAxNDMuOTEgMjMxLjcxOSAxNTAuMzc5TDEzNS43MTkgMjM5LjEzM0MxMzAuNzgxIDI0My42NjQgMTI4IDI1MC4wNyAxMjggMjU2Ljc1OEMxMjguMzEyIDI2NC41MzkgMTMwLjg3NSAyNzAuMDA4IDEzNS44NDQgMjc0LjUwOEwyMzEuODQ2IDM2MS43NTRDMjM4Ljg3NyAzNjguMTYgMjQ5LjAzMyAzNjkuNzg1IDI1Ny43MjEgMzY1Ljk0MVMyNzIuMDAyIDM1My41MDQgMjcyLjAwMiAzNDQuMDA0TDI3MiAyODguMDA0TDM2MCAyODhDMzczLjI1IDI4OCAzODQgMjc3LjI1IDM4NCAyNjRWMjQ4QzM4NCAyMzQuNzUgMzczLjI1IDIyNCAzNjAgMjI0Wk0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMyA0NDggNjQgMzYxLjg2NyA2NCAyNTZTMTUwLjEzMyA2NCAyNTYgNjRTNDQ4IDE1MC4xMzMgNDQ4IDI1NlMzNjEuODY3IDQ0OCAyNTYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M360 224L272 224.004V168.004C272 158.473 266.344 149.848 257.625 146.004C248.875 142.191 238.719 143.91 231.719 150.379L135.719 239.133C130.781 243.664 128 250.07 128 256.758C128.312 264.539 130.875 270.008 135.844 274.508L231.846 361.754C238.877 368.16 249.033 369.785 257.721 365.941S272.002 353.504 272.002 344.004L272 288.004L360 288C373.25 288 384 277.25 384 264V248C384 234.75 373.25 224 360 224ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 448C150.133 448 64 361.867 64 256S150.133 64 256 64S448 150.133 448 256S361.867 448 256 448Z" />
        </Icon>
    </>
}