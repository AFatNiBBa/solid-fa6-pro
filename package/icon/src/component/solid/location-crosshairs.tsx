
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-crosshairs` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=solid location-crosshairs}
 * @preview ![location-crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjI0SDQ0NS4xMjVDNDMxLjYyNSAxNDMuNjI1IDM2OC4zNzUgODAuMzc1IDI4OCA2Ni44NzVWMzJDMjg4IDE0LjMyNyAyNzMuNjczIDAgMjU2IDBIMjU2QzIzOC4zMjcgMCAyMjQgMTQuMzI3IDIyNCAzMlY2Ni44NzVDMTQzLjYyNSA4MC4zNzUgODAuMzc1IDE0My42MjUgNjYuODc1IDIyNEgzMkMxNC4zMjcgMjI0IDAgMjM4LjMyNyAwIDI1NlYyNTZDMCAyNzMuNjczIDE0LjMyNyAyODggMzIgMjg4SDY2Ljg3NUM4MC4zNzUgMzY4LjM3NSAxNDMuNjI1IDQzMS42MjUgMjI0IDQ0NS4xMjVWNDgwQzIyNCA0OTcuNjczIDIzOC4zMjcgNTEyIDI1NiA1MTJIMjU2QzI3My42NzMgNTEyIDI4OCA0OTcuNjczIDI4OCA0ODBWNDQ1LjEyNUMzNjguMzc1IDQzMS42MjUgNDMxLjYyNSAzNjguMzc1IDQ0NS4xMjUgMjg4SDQ4MEM0OTcuNjczIDI4OCA1MTIgMjczLjY3MyA1MTIgMjU2VjI1NkM1MTIgMjM4LjMyNyA0OTcuNjczIDIyNCA0ODAgMjI0Wk0yNTYgMzg0QzE4NS4yNSAzODQgMTI4IDMyNi43NSAxMjggMjU2UzE4NS4yNSAxMjggMjU2IDEyOFMzODQgMTg1LjI1IDM4NCAyNTZTMzI2Ljc1IDM4NCAyNTYgMzg0Wk0yNTYgMTY4QzIwNy4zNzUgMTY4IDE2OCAyMDcuMzc1IDE2OCAyNTZTMjA3LjM3NSAzNDQgMjU2IDM0NFMzNDQgMzA0LjYyNSAzNDQgMjU2UzMwNC42MjUgMTY4IDI1NiAxNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationCrosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 224H445.125C431.625 143.625 368.375 80.375 288 66.875V32C288 14.327 273.673 0 256 0H256C238.327 0 224 14.327 224 32V66.875C143.625 80.375 80.375 143.625 66.875 224H32C14.327 224 0 238.327 0 256V256C0 273.673 14.327 288 32 288H66.875C80.375 368.375 143.625 431.625 224 445.125V480C224 497.673 238.327 512 256 512H256C273.673 512 288 497.673 288 480V445.125C368.375 431.625 431.625 368.375 445.125 288H480C497.673 288 512 273.673 512 256V256C512 238.327 497.673 224 480 224ZM256 384C185.25 384 128 326.75 128 256S185.25 128 256 128S384 185.25 384 256S326.75 384 256 384ZM256 168C207.375 168 168 207.375 168 256S207.375 344 256 344S344 304.625 344 256S304.625 168 256 168Z" />
        </Icon>
    </>
}