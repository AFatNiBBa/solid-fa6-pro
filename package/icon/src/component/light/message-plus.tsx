
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-plus?s=light message-plus}
 * @preview ![message-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44NCAxNzEuMDIzIDUxNS40NzkgMTc5LjEyNSA1MDkuNjI3TDMwNCA0MTYuMDAySDQ0OEM0ODMuMjUgNDE2LjAwMiA1MTIgMzg3LjI1MiA1MTIgMzUyLjAwMlY2NEM1MTIgMjguNzUgNDgzLjI1IDAgNDQ4IDBaTTQ4MCAzNTIuMDAyQzQ4MCAzNjkuNjAyIDQ2NS42MDIgMzg0LjAwMiA0NDggMzg0LjAwMkgzMDMuOTIyQzI5Ni45OTYgMzg0LjAwMiAyOTAuMjU0IDM4Ni4yNSAyODQuNzExIDM5MC40MDhMMTkyIDQ2MC4wMDJWNDAwLjAwMkMxOTIgMzkxLjE2NCAxODQuODM2IDM4NC4wMDIgMTc2IDM4NC4wMDJINjRDNDYuMzk4IDM4NC4wMDIgMzIgMzY5LjYwMiAzMiAzNTIuMDAyVjY0QzMyIDQ2LjQgNDYuMzk4IDMyIDY0IDMySDQ0OEM0NjUuNjAyIDMyIDQ4MCA0Ni40IDQ4MCA2NFYzNTIuMDAyWk0zMzYgMTkyLjAwMkgyNzJWMTI3Ljk5OEMyNzIgMTE5LjE2IDI2NC44MzYgMTEyIDI1NiAxMTJTMjQwIDExOS4xNiAyNDAgMTI3Ljk5OFYxOTIuMDAySDE3NkMxNjcuMTYgMTkyLjAwMiAxNjAgMTk5LjE2MiAxNjAgMjA4QzE2MCAyMTYuODM0IDE2Ny4xNTYgMjIzLjk5OCAxNzYgMjIzLjk5OEgyNDBWMjg4LjAwMkMyNDAgMjk2LjgzNiAyNDcuMTU2IDMwNCAyNTYgMzA0QzI2NC44MzYgMzA0IDI3MiAyOTYuODQgMjcyIDI4OC4wMDJWMjIzLjk5OEgzMzZDMzQ0Ljg0IDIyMy45OTggMzUyIDIxNi44MzggMzUyIDIwOFMzNDQuODQgMTkyLjAwMiAzMzYgMTkyLjAwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessagePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.602 384.002 448 384.002H303.922C296.996 384.002 290.254 386.25 284.711 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.398 384.002 32 369.602 32 352.002V64C32 46.4 46.398 32 64 32H448C465.602 32 480 46.4 480 64V352.002ZM336 192.002H272V127.998C272 119.16 264.836 112 256 112S240 119.16 240 127.998V192.002H176C167.16 192.002 160 199.162 160 208C160 216.834 167.156 223.998 176 223.998H240V288.002C240 296.836 247.156 304 256 304C264.836 304 272 296.84 272 288.002V223.998H336C344.84 223.998 352 216.838 352 208S344.84 192.002 336 192.002Z" />
        </Icon>
    </>
}