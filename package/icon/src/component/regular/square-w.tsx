
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-w` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=regular square-w}
 * @preview ![square-w](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMzUxLjA2MiAxMjkuMDYyQzMzOC40MDYgMTI1LjIzNCAzMjQuOTUzIDEzMi4yNjYgMzIxLjA2MiAxNDQuOTM4TDI4MS41MzEgMjczLjM5MUwyNDcuMTcyIDE0NS43NjZDMjQ0LjM1OSAxMzUuMjgxIDIzNC44NTkgMTI4IDIyNCAxMjhTMjAzLjY0MSAxMzUuMjgxIDIwMC44MjggMTQ1Ljc2NkwxNjYuNDY5IDI3My4zOTFMMTI2LjkzOCAxNDQuOTM4QzEyMy4wMzEgMTMyLjI2NiAxMDkuNTk0IDEyNS4yMDMgOTYuOTM4IDEyOS4wNjJDODQuMjY2IDEzMi45NTMgNzcuMTU2IDE0Ni4zOTEgODEuMDYyIDE1OS4wNjJMMTQ1LjA2MiAzNjcuMDYyQzE0OC4yMDMgMzc3LjI2NiAxNTcuNjg4IDM4My45ODQgMTY4LjQyMiAzODRDMTc5LjEyNSAzODMuODEyIDE4OC4zOTEgMzc2LjU2MiAxOTEuMTcyIDM2Ni4yMzRMMjI0IDI0NC4zMTJMMjU2LjgyOCAzNjYuMjM0QzI1OS42MDkgMzc2LjU2MiAyNjguODc1IDM4My44MTIgMjc5LjU3OCAzODRIMjgwQzI5MC41MTYgMzg0IDI5OS44NDQgMzc3LjE0MSAzMDIuOTM4IDM2Ny4wNjJMMzY2LjkzOCAxNTkuMDYyQzM3MC44NDQgMTQ2LjM5MSAzNjMuNzM0IDEzMi45NTMgMzUxLjA2MiAxMjkuMDYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareW(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM351.062 129.062C338.406 125.234 324.953 132.266 321.062 144.938L281.531 273.391L247.172 145.766C244.359 135.281 234.859 128 224 128S203.641 135.281 200.828 145.766L166.469 273.391L126.938 144.938C123.031 132.266 109.594 125.203 96.938 129.062C84.266 132.953 77.156 146.391 81.062 159.062L145.062 367.062C148.203 377.266 157.688 383.984 168.422 384C179.125 383.812 188.391 376.562 191.172 366.234L224 244.312L256.828 366.234C259.609 376.562 268.875 383.812 279.578 384H280C290.516 384 299.844 377.141 302.938 367.062L366.938 159.062C370.844 146.391 363.734 132.953 351.062 129.062Z" />
        </Icon>
    </>
}