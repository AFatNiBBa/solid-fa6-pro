
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=duotone user-plus}
 * @preview ![user-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAyNTZDMjk0LjY5NSAyNTYgMzUyIDE5OC42OTEgMzUyIDEyOFMyOTQuNjk1IDAgMjI0IDBDMTUzLjMxMiAwIDk2IDU3LjMwOSA5NiAxMjhTMTUzLjMxMiAyNTYgMjI0IDI1NlpNMjc0LjY2NCAzMDRIMTczLjMzNkM3Ny42MDkgMzA0IDAgMzgxLjYwMiAwIDQ3Ny4zMzJDMCA0OTYuNDc3IDE1LjUyMyA1MTIgMzQuNjY0IDUxMkg0MTMuMzM2QzQzMi40NzcgNTEyIDQ0OCA0OTYuNDc3IDQ0OCA0NzcuMzMyQzQ0OCAzODEuNjAyIDM3MC4zOTggMzA0IDI3NC42NjQgMzA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MTYgMjAwSDU2OFYxNTJDNTY4IDEzOC43NSA1NTcuMjUgMTI4IDU0NCAxMjhTNTIwIDEzOC43NSA1MjAgMTUyVjIwMEg0NzJDNDU4Ljc1IDIwMCA0NDggMjEwLjc1IDQ0OCAyMjRTNDU4Ljc1IDI0OCA0NzIgMjQ4SDUyMFYyOTZDNTIwIDMwOS4yNSA1MzAuNzUgMzIwIDU0NCAzMjBTNTY4IDMwOS4yNSA1NjggMjk2VjI0OEg2MTZDNjI5LjI1IDI0OCA2NDAgMjM3LjI1IDY0MCAyMjRTNjI5LjI1IDIwMCA2MTYgMjAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304Z" />
            <path d="M616 200H568V152C568 138.75 557.25 128 544 128S520 138.75 520 152V200H472C458.75 200 448 210.75 448 224S458.75 248 472 248H520V296C520 309.25 530.75 320 544 320S568 309.25 568 296V248H616C629.25 248 640 237.25 640 224S629.25 200 616 200Z" />
        </Icon>
    </>
}