
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-snowboarding` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowboarding?s=solid person-snowboarding}
 * @preview ![person-snowboarding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjAuNzAxIDI0OS42MjVDNDY2LjU3OCAyNTMuODc1IDQ3My4yMDMgMjU2IDQ3OS45NTUgMjU2QzQ4OS43MDcgMjU2IDQ5OS4yMDcgMjUxLjYyNSA1MDUuNTgzIDI0My4yNUM1MTYuMjEgMjI5LjEyNSA1MTMuMzMzIDIwOSA0OTkuMjA3IDE5OC4zNzVMMzg3LjY5MSAxMTQuODc1QzM3My45MzkgMTA0LjYyNSAzNTguNjg3IDk2LjUgMzQyLjMxIDkxLjEyNUwyNzguNjc1IDY5Ljg3NUwyNTIuNTQ2IDE3Ljc1QzI0NC42NjkgMiAyMjUuNDE3IC00LjM3NSAyMDkuNjY2IDMuNUMxOTMuNzg3IDExLjM3NSAxODcuNDEyIDMwLjYyNSAxOTUuMjg5IDQ2LjM3NUwyMjQuNDE3IDEwNC41QzIzMC4xNjcgMTE1Ljg3NSAyNDAuMDQ0IDEyNC4zNzUgMjUyLjE3MSAxMjguNUwyNjguNTQ4IDEzNEwyMjcuMjkyIDE1NC42MjVDMjA1LjUzOSAxNjUuNSAxOTEuOTEyIDE4Ny4zNzUgMTkxLjkxMiAyMTEuNzVWMjY0Ljg3NUwxMTcuNzc3IDI4OS42MjVDMTAxLjAyNSAyOTUuMjUgOTIuMDIzIDMxMy4yNSA5Ny42NDggMzMwLjEyNUM5OS4yNzMgMzM1LjI1IDEwMi41MjUgMzM5LjUgMTA2LjI3NSAzNDNMNjcuNjQ0IDMyOC44NzVDNTcuODkyIDMyNS4zNzUgNTAuMTQyIDMxOC4yNSA0NS43NjUgMzA4Ljg3NUM0MC4xNCAyOTYuODc1IDI1Ljg4OCAyOTEuNzUgMTMuODg2IDI5Ny4yNUMxLjg4NCAzMDIuODc1IC0zLjM2NiAzMTcuMjUgMi4yNTkgMzI5LjI1QzEyLjEzNiAzNTAuMjUgMjkuMzg4IDM2Ni4xMjUgNTEuMTQyIDM3NEw0MTYuMDcgNTA2Ljc1QzQyNS42OTcgNTEwLjI1IDQzNS42OTkgNTEyIDQ0NS42OTkgNTEyQzQ1OC4yMDEgNTEyIDQ3MC43MDMgNTA5LjI1IDQ4Mi4yMDUgNTAzLjc1QzQ5NC4yMDcgNDk4LjI1IDQ5OS40NTcgNDgzLjg3NSA0OTMuODMyIDQ3MS44NzVDNDg4LjIwNSA0NTkuODc1IDQ3My45NTMgNDU0Ljc1IDQ2MS45NTMgNDYwLjI1QzQ1Mi43MDEgNDY0Ljc1IDQ0Mi4xOTkgNDY1LjEyNSA0MzIuNDQ3IDQ2MS42MjVMMzQxLjY4NSA0MjguNUMzNTAuMzEgNDI0LjM3NSAzNTcuMTg3IDQxNi43NSAzNTkuNDM3IDQwNi42MjVMMzgxLjMxNCAzMDQuNjI1QzM4NS4xOTEgMjg2LjM3NSAzNzguMTg5IDI2Ny4zNzUgMzYzLjE4NyAyNTYuMjVMMzExLjE3OSAyMTcuMjVMMzc3LjE4OSAxODYuNzVMNDYwLjcwMSAyNDkuNjI1Wk0zMTYuMzA2IDMwMS4yNUwyOTYuNjc3IDM5My4yNUMyOTUuMTc3IDQwMC4zNzUgMjk2LjU1MiA0MDcuMjUgMjk5LjQyNyA0MTMuMjVMMTMwLjAyOSAzNTEuNzVDMTMyLjY1NCAzNTEuNSAxMzUuNDA0IDM1MS4yNSAxMzguMDI5IDM1MC4zNzVMMjIzLjA0MiAzMjJDMjQyLjY2OSAzMTUuNSAyNTUuNzk2IDI5Ny4yNSAyNTUuNzk2IDI3Ni41VjI1NkwzMTYuMzA2IDMwMS4yNVpNNDMxLjk0NyA5NkM0NTguNDUxIDk2IDQ3OS45NTUgNzQuNSA0NzkuOTU1IDQ4UzQ1OC40NTEgMCA0MzEuOTQ3IDBTMzgzLjk0MSAyMS41IDM4My45NDEgNDhTNDA1LjQ0MyA5NiA0MzEuOTQ3IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSnowboarding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M460.701 249.625C466.578 253.875 473.203 256 479.955 256C489.707 256 499.207 251.625 505.583 243.25C516.21 229.125 513.333 209 499.207 198.375L387.691 114.875C373.939 104.625 358.687 96.5 342.31 91.125L278.675 69.875L252.546 17.75C244.669 2 225.417 -4.375 209.666 3.5C193.787 11.375 187.412 30.625 195.289 46.375L224.417 104.5C230.167 115.875 240.044 124.375 252.171 128.5L268.548 134L227.292 154.625C205.539 165.5 191.912 187.375 191.912 211.75V264.875L117.777 289.625C101.025 295.25 92.023 313.25 97.648 330.125C99.273 335.25 102.525 339.5 106.275 343L67.644 328.875C57.892 325.375 50.142 318.25 45.765 308.875C40.14 296.875 25.888 291.75 13.886 297.25C1.884 302.875 -3.366 317.25 2.259 329.25C12.136 350.25 29.388 366.125 51.142 374L416.07 506.75C425.697 510.25 435.699 512 445.699 512C458.201 512 470.703 509.25 482.205 503.75C494.207 498.25 499.457 483.875 493.832 471.875C488.205 459.875 473.953 454.75 461.953 460.25C452.701 464.75 442.199 465.125 432.447 461.625L341.685 428.5C350.31 424.375 357.187 416.75 359.437 406.625L381.314 304.625C385.191 286.375 378.189 267.375 363.187 256.25L311.179 217.25L377.189 186.75L460.701 249.625ZM316.306 301.25L296.677 393.25C295.177 400.375 296.552 407.25 299.427 413.25L130.029 351.75C132.654 351.5 135.404 351.25 138.029 350.375L223.042 322C242.669 315.5 255.796 297.25 255.796 276.5V256L316.306 301.25ZM431.947 96C458.451 96 479.955 74.5 479.955 48S458.451 0 431.947 0S383.941 21.5 383.941 48S405.443 96 431.947 96Z" />
        </Icon>
    </>
}