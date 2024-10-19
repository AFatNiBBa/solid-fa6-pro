
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `drumstick-bite` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick-bite?s=regular drumstick-bite}
 * @preview ![drumstick-bite](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzEuMTE3IDU3LjU3OEM0MjIuODE0IDIuNjk1IDM2MS4wNjcgLTAuMDAxIDM0Mi43NzEgLTAuMDAxQzI5Ny41ODggLTAuMDAxIDI1NC4xNyAxNy44NjQgMjIxLjk2MSA0OS43MDVDMTk1LjQzMiA3Ni4xMDIgMTYwLjI2MiAxMTkuMTYgMTYwIDE4OC45MzZWMjc3LjkyOEwxMTkuNDYzIDMxOC4zMjhDMTEzLjM1OSAzMjQuNDMxIDEwNS40OTEgMzI3LjI1MyA5Ny4zMzIgMzI3LjI1M0M4My41ODcgMzI3LjI1MyA3OS4xNDQgMzIwLjAzMiA2MC4zOTcgMzIwLjAzMkMyNy4xMDYgMzIwLjAzMiAwIDM0Ny4wMTQgMCAzODAuMzg3QzAgNDAyLjcwMSAxNi43MzkgNDM5Ljg3NyA1OS4xMjIgNDM5Ljg3N0M2NC4wNDcgNDM5Ljg3NyA2OC45ODggNDM5LjMwNyA3My44MyA0MzguMTk3QzcyLjcxIDQ0My4wNDggNzIuMTMyIDQ0OC4wMDcgNzIuMTMyIDQ1Mi45NTVDNzIuMTMyIDQ2Ny44OTggNzcuNDA1IDQ4Mi43NCA4OC45NTcgNDk0LjE5NUMxMDAuNTY1IDUwNS45NDUgMTE2LjA0IDUxMiAxMzEuNjY2IDUxMkMxNjQuNjE2IDUxMiAxOTIuMDQ2IDQ4NS4zOTMgMTkyLjA0NiA0NTEuNjY4QzE5Mi4wNDYgNDMyLjM0NyAxODQuODAyIDQyOC43NDIgMTg0LjgwMiA0MTQuNjNDMTg0LjgwMiA0MDYuNDY3IDE4Ny42MjUgMzk4LjU1MyAxOTMuNzI4IDM5Mi40NTFMMjM0LjMxMiAzNTJIMjYxLjc1MkwyNjEuODQgMzUxLjkxMkgzMjIuOTczQzM0MC4xIDM1MS45MTIgMzU3LjIyNiAzNDkuNTM3IDM3My43MyAzNDQuOTEyQzM4MS42MzcgMzQyLjgzMiAzOTEuNDU0IDMzNC45OTIgMzkxLjQ1NCAzMjEuODcxQzM5MS40NTQgMzA3LjgxOCAzNzYuNDIxIDI5OS4xMjQgMzc2LjQyMSAyNjUuODJDMzc2LjQyMSAyMzQuNzAyIDM5OS4wNTcgMTg0LjIyNCA0NTcuNDYzIDE4NC4yMjRDNDc0LjgzOSAxODQuMjI0IDQ4MC41OTIgMTg4LjQyNiA0ODguMDAyIDE4OC40MjZDNTA1LjU1NCAxODguNDI2IDUxMS45OTkgMTcyLjY5OCA1MTEuOTk5IDE2NC41NzZDNTExLjk5OSAxMTcuNDA5IDQ5Mi4wMTQgODEuMDQ2IDQ3MS4xMTcgNTcuNTc4Wk00NTcuMDE0IDEzNi4yNzZDNDIyLjkxOCAxMzYuMjc2IDM5MC4yMTkgMTQ5LjY5OSAzNjUuOTc4IDE3My44MTNDMzQxLjI4OSAxOTguNDk2IDMyOC40ODMgMjMxLjc0NCAzMjguNDgzIDI2NS43MTdDMzI4LjQ4MyAyNzUuNDMgMzI5LjUzIDI4NS4yMDIgMzMxLjY0NCAyOTQuODVDMzI4LjcyMyAyOTguNjI3IDMyNy41NTEgMzAwLjE0MSAzMjQuNjI3IDMwMy45MThIMjQ2Ljk4NkMyMjIuMzMgMzAzLjkxOCAyMDcuOTU5IDI4OS41MTggMjA3Ljk1OSAyNzEuOTE4VjE4OS42ODRDMjA3Ljk1OSAxNDguNjg5IDIyMi4yMTEgMTE3LjA3IDI1NS43MTUgODMuNjk5QzI4MS4yMzUgNTguMzUyIDMxMS41MzggNDcuODQgMzQwLjgyMyA0Ny44NEMzNzcuODE4IDQ3Ljg0IDQxMy4xODcgNjQuNjE1IDQzNS4yMzYgODkuNDQ5QzQ0Ny4yMzggMTAyLjgyMiA0NTUuNzQgMTE4Ljk0NSA0NjAuMjQgMTM2LjMxNkM0NTkuMTY0IDEzNi4yOSA0NTguMDg4IDEzNi4yNzYgNDU3LjAxNCAxMzYuMjc2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function DrumstickBite(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M471.117 57.578C422.814 2.695 361.067 -0.001 342.771 -0.001C297.588 -0.001 254.17 17.864 221.961 49.705C195.432 76.102 160.262 119.16 160 188.936V277.928L119.463 318.328C113.359 324.431 105.491 327.253 97.332 327.253C83.587 327.253 79.144 320.032 60.397 320.032C27.106 320.032 0 347.014 0 380.387C0 402.701 16.739 439.877 59.122 439.877C64.047 439.877 68.988 439.307 73.83 438.197C72.71 443.048 72.132 448.007 72.132 452.955C72.132 467.898 77.405 482.74 88.957 494.195C100.565 505.945 116.04 512 131.666 512C164.616 512 192.046 485.393 192.046 451.668C192.046 432.347 184.802 428.742 184.802 414.63C184.802 406.467 187.625 398.553 193.728 392.451L234.312 352H261.752L261.84 351.912H322.973C340.1 351.912 357.226 349.537 373.73 344.912C381.637 342.832 391.454 334.992 391.454 321.871C391.454 307.818 376.421 299.124 376.421 265.82C376.421 234.702 399.057 184.224 457.463 184.224C474.839 184.224 480.592 188.426 488.002 188.426C505.554 188.426 511.999 172.698 511.999 164.576C511.999 117.409 492.014 81.046 471.117 57.578ZM457.014 136.276C422.918 136.276 390.219 149.699 365.978 173.813C341.289 198.496 328.483 231.744 328.483 265.717C328.483 275.43 329.53 285.202 331.644 294.85C328.723 298.627 327.551 300.141 324.627 303.918H246.986C222.33 303.918 207.959 289.518 207.959 271.918V189.684C207.959 148.689 222.211 117.07 255.715 83.699C281.235 58.352 311.538 47.84 340.823 47.84C377.818 47.84 413.187 64.615 435.236 89.449C447.238 102.822 455.74 118.945 460.24 136.316C459.164 136.29 458.088 136.276 457.014 136.276Z " />
        </Icon>
    </>
}