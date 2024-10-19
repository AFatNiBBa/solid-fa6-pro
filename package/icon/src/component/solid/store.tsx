
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `store` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/store?s=solid store}
 * @preview ![store](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODMuNDUyIDI1NkM0NzEuMzI1IDI1NiA0NTkuNDAxIDI1NC4wNDcgNDQ4LjAwMSAyNTAuNDk2VjM4NEgxMjcuOTA3VjI1MC40NzlDMTE2LjQ4MyAyNTQuMDM5IDEwNC41MjYgMjU2IDkyLjM1IDI1NkM4Ni45MDEgMjU2IDgxLjQ1MiAyNTUuNjM1IDc1Ljk5NyAyNTQuOTJDNzEuODI1IDI1NC4zNTkgNjguMDE2IDI1Mi43NiA2NC4wMDEgMjUxLjcxOVY0NjRDNjQuMDAxIDQ5MC41MSA4NS40OTEgNTEyIDExMi4wMDEgNTEySDQ2NC4wOTRDNDkwLjYwNCA1MTIgNTEyLjA5NCA0OTAuNTEgNTEyLjA5NCA0NjRWMjUxLjY1NEM1MDcuOTQ4IDI1Mi43MzYgNTA0LjAwNiAyNTQuMzYzIDQ5OS42OSAyNTQuOTM2QzQ5NC4zNTIgMjU1LjYzNSA0ODkuMDEyIDI1NiA0ODMuNDUyIDI1NlpNNTQ3LjY1MSAxMDMuODA3TDQ5MC4zMjUgMTMuMTI5QzQ4NS4yMTkgNC45NzkgNDc2LjExIDAgNDY2LjM5NSAwSDEwOS41NzVDOTkuODU4IDAgOTAuNzUxIDQuOTc5IDg1LjY0NSAxMy4xMjlMMjguMzE3IDEwMy44MDdDLTEuMjcxIDE1MC42MzcgMjQuOTUgMjE1Ljc2NiA4MC4yNjIgMjIzLjIwN0M4NC4yMzcgMjIzLjcyNyA4OC4yOTQgMjI0IDkyLjM1IDIyNEMxMTguNDg5IDIyNCAxNDEuNjQ1IDIxMi42MjEgMTU3LjU0NCAxOTUuMDMxQzE3My40NDIgMjEyLjYyMSAxOTYuNjUzIDIyNCAyMjIuNzEgMjI0QzI0OC44NDYgMjI0IDI3Mi4wMDUgMjEyLjYyMSAyODcuOTAxIDE5NS4wMzFDMzAzLjc5OSAyMTIuNjIxIDMyNy4wMTIgMjI0IDM1My4wNjcgMjI0QzM3OS4yMzMgMjI0IDQwMi4zNjIgMjEyLjYyMSA0MTguMjYgMTk1LjAzMUM0MzQuMjQxIDIxMi42MjEgNDU3LjM5NyAyMjQgNDgzLjQ1MiAyMjRDNDg3LjU5MiAyMjQgNDkxLjU2NyAyMjMuNzI3IDQ5NS41NDIgMjIzLjIwN0M1NTEuMDE4IDIxNS44NDggNTc3LjMyMSAxNTAuNzE5IDU0Ny42NTEgMTAzLjgwN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Store(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M483.452 256C471.325 256 459.401 254.047 448.001 250.496V384H127.907V250.479C116.483 254.039 104.526 256 92.35 256C86.901 256 81.452 255.635 75.997 254.92C71.825 254.359 68.016 252.76 64.001 251.719V464C64.001 490.51 85.491 512 112.001 512H464.094C490.604 512 512.094 490.51 512.094 464V251.654C507.948 252.736 504.006 254.363 499.69 254.936C494.352 255.635 489.012 256 483.452 256ZM547.651 103.807L490.325 13.129C485.219 4.979 476.11 0 466.395 0H109.575C99.858 0 90.751 4.979 85.645 13.129L28.317 103.807C-1.271 150.637 24.95 215.766 80.262 223.207C84.237 223.727 88.294 224 92.35 224C118.489 224 141.645 212.621 157.544 195.031C173.442 212.621 196.653 224 222.71 224C248.846 224 272.005 212.621 287.901 195.031C303.799 212.621 327.012 224 353.067 224C379.233 224 402.362 212.621 418.26 195.031C434.241 212.621 457.397 224 483.452 224C487.592 224 491.567 223.727 495.542 223.207C551.018 215.848 577.321 150.719 547.651 103.807Z" />
        </Icon>
    </>
}