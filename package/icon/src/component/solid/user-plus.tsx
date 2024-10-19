
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-plus?s=solid user-plus}
 * @preview ![user-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTI3NC42NjQgMzA0SDE3My4zMzZDNzcuNjA5IDMwNCAwIDM4MS42MDIgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MzIuNDc3IDUxMiA0NDggNDk2LjQ3NyA0NDggNDc3LjMzMkM0NDggMzgxLjYwMiAzNzAuMzk4IDMwNCAyNzQuNjY0IDMwNFpNNjE2IDIwMEg1NjhWMTUyQzU2OCAxMzguNzUgNTU3LjI1IDEyOCA1NDQgMTI4UzUyMCAxMzguNzUgNTIwIDE1MlYyMDBINDcyQzQ1OC43NSAyMDAgNDQ4IDIxMC43NSA0NDggMjI0UzQ1OC43NSAyNDggNDcyIDI0OEg1MjBWMjk2QzUyMCAzMDkuMjUgNTMwLjc1IDMyMCA1NDQgMzIwUzU2OCAzMDkuMjUgNTY4IDI5NlYyNDhINjE2QzYyOS4yNSAyNDggNjQwIDIzNy4yNSA2NDAgMjI0UzYyOS4yNSAyMDAgNjE2IDIwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM616 200H568V152C568 138.75 557.25 128 544 128S520 138.75 520 152V200H472C458.75 200 448 210.75 448 224S458.75 248 472 248H520V296C520 309.25 530.75 320 544 320S568 309.25 568 296V248H616C629.25 248 640 237.25 640 224S629.25 200 616 200Z" />
        </Icon>
    </>
}