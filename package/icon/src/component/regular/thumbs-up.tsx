
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `thumbs-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=regular thumbs-up}
 * @preview ![thumbs-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAxOTEuOTVIMzJDMTQuMzI2IDE5MS45NSAwIDIwNi4yNzQgMCAyMjMuOTRWNDQ3Ljg2OUMwIDQ2NS41MzggMTQuMzI2IDQ3OS44NTkgMzIgNDc5Ljg1OUg5NkMxMTMuNjc0IDQ3OS44NTkgMTI4IDQ2NS41MzggMTI4IDQ0Ny44NjlWMjIzLjk0QzEyOCAyMDYuMjc0IDExMy42NzQgMTkxLjk1IDk2IDE5MS45NVpNNTEyIDIyNy4wMTdDNTEyIDE5MC4xMjIgNDgxLjk1MyAxNjAuMTAxIDQ0NS4wMzEgMTYwLjEwMUgzNDUuMTcyQzM1NC42NzIgMTM1Ljk4MyAzNjAgMTEzLjQ3NSAzNjAgMTAwLjc3NUMzNjAgNjYuOTc0IDMzMy43OTcgMzIgMjg5LjkzOCAzMkMyNDMuMzI4IDMyIDIzMC41NzggNjQuNDQzIDIyMC4zMjggOTAuNDk3QzE4OC42NjUgMTcwLjk5MyAxNjAgMTU2Ljg4MyAxNjAgMTgzLjk2OUMxNjAgMTk2LjgxMSAxNzAuMzYyIDIwNy45NTYgMTg0LjAxNyAyMDcuOTU2QzE4OS4yNzMgMjA3Ljk1NiAxOTQuNTYzIDIwNi4yMzYgMTk4Ljk4NCAyMDIuNjk3QzI3NS43NCAxNDEuMzIzIDI1Ni45NTMgNzkuOTg1IDI4OS45MzggNzkuOTg1QzMwNi4wMTYgNzkuOTg1IDMxMiA5Mi43MzEgMzEyIDEwMC43NzVDMzEyIDEwOC4xNzkgMzA0LjQwNiAxNDAuMzI2IDI4Ni40NTMgMTcyLjM2MkMyODQuNDA4IDE3Ni4wMDggMjgzLjM4NyAxODAuMDQ4IDI4My4zODcgMTg0LjA4NkMyODMuMzg3IDE5OC4wMTEgMjk0LjgyIDIwOC4wODUgMzA3LjM5MSAyMDguMDg1SDQ0NS4wMzFDNDU1LjQ4NCAyMDguMDg1IDQ2NCAyMTYuNTgzIDQ2NCAyMjcuMDE3QzQ2NCAyMzYuODI2IDQ1Ni4yMzQgMjQ1LjA0MyA0NDYuMzI4IDI0NS43M0M0MzMuNjcyIDI0Ni41ODkgNDIzLjk3MSAyNTcuMTI5IDQyMy45NzEgMjY5LjY2NkM0MjMuOTcxIDI4NS4xMzggNDM1LjM1OSAyODUuNjE0IDQzNS4zNTkgMjk4LjU3M0M0MzUuMzU5IDMyMy45NDcgNDAwLjMyNyAzMTAuOTA5IDQwMC4zMjcgMzQwLjcyQzQwMC4zMjcgMzUxLjk0MyA0MDYuNzE5IDM1My43NDggNDA2LjcxOSAzNjIuOTc0QzQwNi43MTkgMzg1LjYzNiAzNzYuOTUzIDM3Ni43MzYgMzc2Ljk1MyA0MDMuNjEyQzM3Ni45NTMgNDA4LjEyNyAzNzguMDYzIDQwOS41NzMgMzc4LjA2MyA0MTMuMDY4QzM3OC4wNjMgNDIzLjUxOCAzNjkuNTQ3IDQzMi4wMTUgMzU5LjA5NCA0MzIuMDE1SDMwNi41NjNDMjgwLjkzOCA0MzIuMDE1IDI1NS41NDcgNDIzLjU0OSAyMzUuMDYzIDQwOC4yMUwxOTguNDA2IDM4MC43MDNDMTk0LjA5MSAzNzcuNDU4IDE4OS4wMzcgMzc1Ljg5MyAxODQuMDI0IDM3NS44OTNDMTcwLjE3OSAzNzUuODkzIDE1OS45OTYgMzg3LjIxMSAxNTkuOTk2IDM5OS44N0MxNTkuOTk2IDQwNy4xNTggMTYzLjMwOSA0MTQuMzU2IDE2OS41OTQgNDE5LjA2NkwyMDYuMjY2IDQ0Ni41ODlDMjM1LjAxNiA0NjguMTI5IDI3MC42MjUgNDgwIDMwNi41NjIgNDgwSDM1OS4wOTRDMzk0LjQyMiA0ODAgNDIzLjQ1MyA0NTIuNTA5IDQyNS44OTEgNDE3LjgwMUM0NDMuNjU2IDQwNS41NyA0NTQuNzE5IDM4NS4yOTUgNDU0LjcxOSAzNjIuOTc0QzQ1NC43MTkgMzU5LjkyOCA0NTQuNSAzNTYuODY3IDQ1NC4wNzggMzUzLjg1MkM0NzEuOTIyIDM0MS43IDQ4My4zNTkgMzIxLjI2OSA0ODMuMzU5IDI5OC41NzNDNDgzLjM1OSAyOTMuMjYyIDQ4Mi43MTkgMjg4LjAyOSA0ODEuNDg0IDI4Mi45MzdDNDk5Ljg5MSAyNzAuOTU2IDUxMiAyNTAuMjQ0IDUxMiAyMjcuMDE3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ThumbsUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 191.95H32C14.326 191.95 0 206.274 0 223.94V447.869C0 465.538 14.326 479.859 32 479.859H96C113.674 479.859 128 465.538 128 447.869V223.94C128 206.274 113.674 191.95 96 191.95ZM512 227.017C512 190.122 481.953 160.101 445.031 160.101H345.172C354.672 135.983 360 113.475 360 100.775C360 66.974 333.797 32 289.938 32C243.328 32 230.578 64.443 220.328 90.497C188.665 170.993 160 156.883 160 183.969C160 196.811 170.362 207.956 184.017 207.956C189.273 207.956 194.563 206.236 198.984 202.697C275.74 141.323 256.953 79.985 289.938 79.985C306.016 79.985 312 92.731 312 100.775C312 108.179 304.406 140.326 286.453 172.362C284.408 176.008 283.387 180.048 283.387 184.086C283.387 198.011 294.82 208.085 307.391 208.085H445.031C455.484 208.085 464 216.583 464 227.017C464 236.826 456.234 245.043 446.328 245.73C433.672 246.589 423.971 257.129 423.971 269.666C423.971 285.138 435.359 285.614 435.359 298.573C435.359 323.947 400.327 310.909 400.327 340.72C400.327 351.943 406.719 353.748 406.719 362.974C406.719 385.636 376.953 376.736 376.953 403.612C376.953 408.127 378.063 409.573 378.063 413.068C378.063 423.518 369.547 432.015 359.094 432.015H306.563C280.938 432.015 255.547 423.549 235.063 408.21L198.406 380.703C194.091 377.458 189.037 375.893 184.024 375.893C170.179 375.893 159.996 387.211 159.996 399.87C159.996 407.158 163.309 414.356 169.594 419.066L206.266 446.589C235.016 468.129 270.625 480 306.562 480H359.094C394.422 480 423.453 452.509 425.891 417.801C443.656 405.57 454.719 385.295 454.719 362.974C454.719 359.928 454.5 356.867 454.078 353.852C471.922 341.7 483.359 321.269 483.359 298.573C483.359 293.262 482.719 288.029 481.484 282.937C499.891 270.956 512 250.244 512 227.017Z" />
        </Icon>
    </>
}