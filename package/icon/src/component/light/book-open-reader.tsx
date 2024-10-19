
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-open-reader` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=light book-open-reader}
 * @preview ![book-open-reader](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTkuODc1IDE5MkM0NTkuMjUgMTkyIDQ1OC41IDE5MiA0NTcuODc1IDE5Mi4xMjVDNDA4IDE5NC44NzUgMzE3LjM3NSAyMDUuMTI1IDI1NiAyMzkuNjI1QzE5NC42MjUgMjA1LjEyNSAxMDQgMTk0Ljg3NSA1NC4xMjUgMTkyLjEyNUM1My41IDE5MiA1Mi43NSAxOTIgNTIuMTI1IDE5MkMzMS43NSAxOTIgMCAyMDYuMzc1IDAgMjQyLjI1VjQyMC4yNUMwIDQ0NyAyMS4yNSA0NjkgNDguMzc1IDQ3MC4zNzVDODIuNzUgNDcyLjI1IDE2OC44NzUgNDc5LjUgMjI1LjM3NSA1MDcuODc1QzIzMCA1MTAuMjUgMjM1IDUxMS4zNzUgMjQwIDUxMS43NVY1MTJIMjQyLjI1QzI0Mi4zNzUgNTEyIDI0Mi41IDUxMiAyNDIuNSA1MTJIMjY5LjVDMjY5LjUgNTEyIDI2OS42MjUgNTEyIDI2OS43NSA1MTJIMjcyVjUxMS43NUMyNzcgNTExLjM3NSAyODIgNTEwLjI1IDI4Ni42MjUgNTA3Ljg3NUMzNDMuMTI1IDQ3OS41IDQyOS4yNSA0NzIuMjUgNDYzLjYyNSA0NzAuMzc1QzQ5MC43NSA0NjkgNTEyIDQ0NyA1MTIgNDIwLjI1VjI0Mi4yNUM1MTIgMjA2LjM3NSA0ODAuMjUgMTkyIDQ1OS44NzUgMTkyWk0yNDAgNDc5LjM3NUMyMzkuODc1IDQ3OS4yNSAyMzkuODc1IDQ3OS4zNzUgMjM5Ljc1IDQ3OS4yNUMxODAuMTI1IDQ0OS4yNSA5NS4yNSA0NDAuODc1IDUwIDQzOC41QzM5Ljg3NSA0MzcuODc1IDMyIDQyOS44NzUgMzIgNDIwLjI1VjI0Mi4yNUMzMiAyMzYuMTI1IDMzLjc1IDIzMi4yNSAzNy44NzUgMjI5QzQyLjM3NSAyMjUuNjI1IDQ4LjM3NSAyMjQgNTIuMzc1IDIyNEM4OS4zNzUgMjI2LjEyNSAxODEuNjI1IDIzNC42MjUgMjQwIDI2Ny4zNzVWNDc5LjM3NVpNNDgwIDQyMC4yNUM0ODAgNDI5Ljg3NSA0NzIuMTI1IDQzNy44NzUgNDYyIDQzOC41QzQxNi43NSA0NDAuODc1IDMzMS44NzUgNDQ5LjI1IDI3Mi4yNSA0NzkuMjVDMjcyLjEyNSA0NzkuMzc1IDI3Mi4xMjUgNDc5LjM3NSAyNzIgNDc5LjM3NVYyNjcuMzc1QzMzMC4zNzUgMjM0LjYyNSA0MjIuNjI1IDIyNi4xMjUgNDU5LjUgMjI0SDQ1OS44NzVDNDYwLjEyNSAyMjQgNDgwIDIyNC41IDQ4MCAyNDIuMjVWNDIwLjI1Wk0yNTYgMTkyQzMwOSAxOTIgMzUyIDE0OSAzNTIgOTZTMzA5IDAgMjU2IDBTMTYwIDQzIDE2MCA5NlMyMDMgMTkyIDI1NiAxOTJaTTI1NiAzMkMyOTEuMjUgMzIgMzIwIDYwLjc1IDMyMCA5NlMyOTEuMjUgMTYwIDI1NiAxNjBTMTkyIDEzMS4yNSAxOTIgOTZTMjIwLjc1IDMyIDI1NiAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookOpenReader(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M459.875 192C459.25 192 458.5 192 457.875 192.125C408 194.875 317.375 205.125 256 239.625C194.625 205.125 104 194.875 54.125 192.125C53.5 192 52.75 192 52.125 192C31.75 192 0 206.375 0 242.25V420.25C0 447 21.25 469 48.375 470.375C82.75 472.25 168.875 479.5 225.375 507.875C230 510.25 235 511.375 240 511.75V512H242.25C242.375 512 242.5 512 242.5 512H269.5C269.5 512 269.625 512 269.75 512H272V511.75C277 511.375 282 510.25 286.625 507.875C343.125 479.5 429.25 472.25 463.625 470.375C490.75 469 512 447 512 420.25V242.25C512 206.375 480.25 192 459.875 192ZM240 479.375C239.875 479.25 239.875 479.375 239.75 479.25C180.125 449.25 95.25 440.875 50 438.5C39.875 437.875 32 429.875 32 420.25V242.25C32 236.125 33.75 232.25 37.875 229C42.375 225.625 48.375 224 52.375 224C89.375 226.125 181.625 234.625 240 267.375V479.375ZM480 420.25C480 429.875 472.125 437.875 462 438.5C416.75 440.875 331.875 449.25 272.25 479.25C272.125 479.375 272.125 479.375 272 479.375V267.375C330.375 234.625 422.625 226.125 459.5 224H459.875C460.125 224 480 224.5 480 242.25V420.25ZM256 192C309 192 352 149 352 96S309 0 256 0S160 43 160 96S203 192 256 192ZM256 32C291.25 32 320 60.75 320 96S291.25 160 256 160S192 131.25 192 96S220.75 32 256 32Z" />
        </Icon>
    </>
}