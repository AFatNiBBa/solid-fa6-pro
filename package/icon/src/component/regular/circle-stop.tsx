
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-stop` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=regular circle-stop}
 * @preview ![circle-stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41OCAxMjMuNDIgNDk2IDI1NiA0OTZTNDk2IDM4OC41OCA0OTYgMjU2QzQ5NiAxMjMuNDE4IDM4OC41OCAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0zMjggMTYwSDE4NEMxNzAuODAxIDE2MCAxNjAgMTcwLjc5OSAxNjAgMTg0VjMyOEMxNjAgMzQxLjE5OSAxNzAuODAxIDM1MiAxODQgMzUySDMyOEMzNDEuMTk5IDM1MiAzNTIgMzQxLjE5OSAzNTIgMzI4VjE4NEMzNTIgMTcwLjc5OSAzNDEuMTk5IDE2MCAzMjggMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleStop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.58 123.42 496 256 496S496 388.58 496 256C496 123.418 388.58 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM328 160H184C170.801 160 160 170.799 160 184V328C160 341.199 170.801 352 184 352H328C341.199 352 352 341.199 352 328V184C352 170.799 341.199 160 328 160Z" />
        </Icon>
    </>
}