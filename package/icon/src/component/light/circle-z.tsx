
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-z` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=light circle-z}
 * @preview ![circle-z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMzUySDE5NC43ODFMMzY0LjE1NiAxNTQuNDA2QzM2OC4yMTkgMTQ5LjY1NiAzNjkuMTU2IDE0MyAzNjYuNTMxIDEzNy4zMTJDMzYzLjkzOCAxMzEuNjI1IDM1OC4yNSAxMjggMzUyIDEyOEgxNjBDMTUxLjE1NiAxMjggMTQ0IDEzNS4xNTYgMTQ0IDE0NFMxNTEuMTU2IDE2MCAxNjAgMTYwSDMxNy4yMTlMMTQ3Ljg0NCAzNTcuNTk0QzE0My43ODEgMzYyLjM0NCAxNDIuODQ0IDM2OSAxNDUuNDY5IDM3NC42ODhDMTQ4LjA2MiAzODAuMzc1IDE1My43NSAzODQgMTYwIDM4NEgzNTJDMzYwLjg0NCAzODQgMzY4IDM3Ni44NDQgMzY4IDM2OFMzNjAuODQ0IDM1MiAzNTIgMzUyWk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleZ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 352H194.781L364.156 154.406C368.219 149.656 369.156 143 366.531 137.312C363.938 131.625 358.25 128 352 128H160C151.156 128 144 135.156 144 144S151.156 160 160 160H317.219L147.844 357.594C143.781 362.344 142.844 369 145.469 374.688C148.062 380.375 153.75 384 160 384H352C360.844 384 368 376.844 368 368S360.844 352 352 352ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}