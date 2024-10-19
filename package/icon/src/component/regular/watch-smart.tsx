
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch-smart` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=regular watch-smart}
 * @preview ![watch-smart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYgMjQ0Ljc1VjE4NEMyMTYgMTcwLjc1IDIwNS4yNSAxNjAgMTkyIDE2MFMxNjggMTcwLjc1IDE2OCAxODRWMjU2QzE2OCAyNjMuMTI1IDE3MS4xNTYgMjY5Ljg3NSAxNzYuNjI1IDI3NC40MzhMMjI0LjYyNSAzMTQuNDM4QzIyOS4xMjUgMzE4LjE4OCAyMzQuNTYyIDMyMCAyNDAgMzIwQzI0Ni44NzUgMzIwIDI1My42ODggMzE3LjA2MiAyNTguNDM4IDMxMS4zNzVDMjY2LjkzOCAzMDEuMTg4IDI2NS41NjIgMjg2LjA2MyAyNTUuMzc1IDI3Ny41NjNMMjE2IDI0NC43NVpNMzIwIDczLjYxM1Y0OEMzMjAgMjEuNjAyIDI5OC40IDAgMjcyIDBIMTEyQzg1LjYgMCA2NCAyMS42MDIgNjQgNDhWNzMuNjEzQzI3LjQ4NCA4MS4wMjcgMCAxMTMuMjk3IDAgMTUyVjM2MEMwIDM5OC43MDMgMjcuNDg0IDQzMC45NzMgNjQgNDM4LjM4N1Y0NjRDNjQgNDkwLjM5OCA4NS42IDUxMiAxMTIgNTEySDI3MkMyOTguNCA1MTIgMzIwIDQ5MC4zOTggMzIwIDQ2NFY0MzguMzg3QzM1Ni41MTYgNDMwLjk3MyAzODQgMzk4LjcwMyAzODQgMzYwVjE1MkMzODQgMTEzLjI5NyAzNTYuNTE2IDgxLjAyNyAzMjAgNzMuNjEzWk0zMzYgMzYwQzMzNiAzNzcuNjQ1IDMyMS42NDUgMzkyIDMwNCAzOTJIODBDNjIuMzU1IDM5MiA0OCAzNzcuNjQ1IDQ4IDM2MFYxNTJDNDggMTM0LjM1NSA2Mi4zNTUgMTIwIDgwIDEyMEgzMDRDMzIxLjY0NSAxMjAgMzM2IDEzNC4zNTUgMzM2IDE1MlYzNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WatchSmart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M216 244.75V184C216 170.75 205.25 160 192 160S168 170.75 168 184V256C168 263.125 171.156 269.875 176.625 274.438L224.625 314.438C229.125 318.188 234.562 320 240 320C246.875 320 253.688 317.062 258.438 311.375C266.938 301.188 265.562 286.063 255.375 277.563L216 244.75ZM320 73.613V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V73.613C27.484 81.027 0 113.297 0 152V360C0 398.703 27.484 430.973 64 438.387V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V438.387C356.516 430.973 384 398.703 384 360V152C384 113.297 356.516 81.027 320 73.613ZM336 360C336 377.645 321.645 392 304 392H80C62.355 392 48 377.645 48 360V152C48 134.355 62.355 120 80 120H304C321.645 120 336 134.355 336 152V360Z" />
        </Icon>
    </>
}