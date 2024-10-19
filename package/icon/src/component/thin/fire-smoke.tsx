
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-smoke` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=thin fire-smoke}
 * @preview ![fire-smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjYuNTMxIDI1NS43NzNDMTYyLjE1NiAyNDEuMTE3IDE1OS45MzggMjI2LjE3OSAxNTkuOTM4IDIxMS4zNjZDMTU5LjkzOCAxNjIuODAyIDIxMC4zMjggODAuOTU2IDI3Ny45ODQgMTguNzY2QzMwMy4zOTEgNDEuOTg2IDMyNi43ODEgNjcuNTQ5IDM0NS45NTMgOTMuMDE4QzM0OC4zNjkgOTYuMjA2IDM1NC4yOTMgOTguMzA4IDM1OC40NTMgOTMuMzYyQzM2OS41MzEgODAuMjY4IDM4MS42NTYgNjcuNjQzIDM5NC41NjIgNTUuNzA1QzQ0My43ODEgMTAyLjIzNyA0NzkuOTM4IDE3NC44NjUgNDc5LjkzOCAyMTEuMTQ3QzQ3OS45MzggMjI1Ljg5OCA0NzcuNzUgMjQwLjg2NyA0NzMuNDUzIDI1NS43MTFDNDcwLjUgMjY1LjgwNSA0ODUuODYxIDI3MC4zNjggNDg4LjgyOCAyNjAuMTQ5QzQ5My41NDcgMjQzLjg5OCA0OTUuOTM4IDIyNy4zOTggNDk1LjkzOCAyMTEuMTQ3QzQ5NS45MzggMTcwLjExNSA0NTYuNSA4OS4yNjggMzk5LjkwNiAzOC44OTJDMzk2Ljg3NSAzNi4yMDQgMzkyLjI5NyAzNi4yMDQgMzg5LjI2NiAzOC44OTJDMzc2LjI5NyA1MC40ODYgMzY0LjAzMSA2Mi43OTkgMzUyLjcxOSA3NS41NDlDMzMyLjczNCA1MC4xMTEgMzA4LjkwNiAyNC44MjkgMjgzLjMxMyAyLjAxNkMyODAuMjgxIC0wLjY3MiAyNzUuNjg4IC0wLjY3MiAyNzIuNjU2IDIuMDE2QzE5OC4wNzggNjguNTE4IDE0My45MzggMTU2LjU4MyAxNDMuOTM4IDIxMS4zNjZDMTQzLjkzOCAyMjcuNzQxIDE0Ni4zNzUgMjQ0LjIxMSAxNTEuMTg4IDI2MC4zMzZDMTU0LjI1NiAyNzAuNSAxNjkuNTUxIDI2NS45NjkgMTY2LjUzMSAyNTUuNzczWk00MTcuODc1IDI0MS4wODVDNDI3LjczNCAyMTUuODAzIDQyNS42ODggMTg3LjQ1OSA0MTIuMjE5IDE2My4yNzFDNDA5LjY1NiAxNTguNzA4IDQwNi42ODggMTUzLjgzMyA0MDMuNjA5IDE0OC45MjZDNDAxLjAwMiAxNDQuODE3IDM5NC44MzYgMTQzLjYxOCAzOTEgMTQ3LjczOUwzNTMuMTA5IDE4OC4yNzFDMzM2LjI4MSAxNjguMTE1IDI4OC45MzggMTExLjQyNSAyODQuNTYzIDEwNi42MTNDMjgxLjQzMiAxMDMuMTkxIDI3NS45NDEgMTAzLjAxOSAyNzIuNjU2IDEwNi42NzVDMjM4LjQzOCAxNDUuMjA4IDIxNiAxNzIuODAyIDIxNiAyMDQuMTE2QzIxNiAyMTguMTQ3IDIxOC43MzQgMjMxLjMwNCAyMjQuMTA5IDI0My4yNzNDMjI4LjM4NSAyNTIuODI4IDI0My4wOTYgMjQ2LjQ4NCAyMzguNzAzIDIzNi43MUMyMzQuMjUgMjI2LjgzNSAyMzIgMjE1Ljg2NiAyMzIgMjA0LjExNkMyMzIgMTgxLjg2NSAyNDYuNDIyIDE2MC44MzMgMjc4LjU0NyAxMjQuMTc2QzI5Mi41MTYgMTQwLjY3NiAzMjcuMDc4IDE4Mi4wNTIgMzQ2LjYyNSAyMDUuNDkxQzM1MS4wNjQgMjEwLjc4IDM1Ny41NTUgMjA2Ljk0IDM1OC42MDkgMjA1LjgzNEwzOTUuNTE2IDE2Ni4zMzNDNDEwLjAxNCAxOTAuNjU0IDQxMS4xOTcgMjE0LjE2MyA0MDIuOTY5IDIzNS4yNzNDMzk5LjA3NiAyNDUuMjUgNDE0LjA3OCAyNTAuNzQyIDQxNy44NzUgMjQxLjA4NVpNNTIyLjc5NyAyODUuOTk0QzQ4OS41NzggMjg1Ljk5NCA0NTguODEyIDI5OS4yNzUgNDM2LjY0MSAzMjIuODM4QzQxMy41MTYgMjgxLjg2OCAzNjkuMDE2IDI1NS45OTIgMzIwIDI1NS45OTJTMjI2LjQ4NCAyODEuODY4IDIwMy4zNTkgMzIyLjgzOEMxODEuMTg4IDI5OS4yNzUgMTUwLjQyMiAyODUuOTk0IDExNy4yMDMgMjg1Ljk5NEM1Mi41NzggMjg1Ljk5NCAwIDMzNi42ODIgMCAzOTguOTk3UzUyLjU3OCA1MTIgMTE3LjIwMyA1MTJINTIyLjc5N0M1ODcuNDIyIDUxMiA2NDAgNDYxLjMxMSA2NDAgMzk4Ljk5N1M1ODcuNDIyIDI4NS45OTQgNTIyLjc5NyAyODUuOTk0Wk01MjIuNzk3IDQ5NkgxMTcuMjAzQzYxLjQwNiA0OTYgMTYgNDUyLjQ5OCAxNiAzOTguOTk3UzYxLjQwNiAzMDEuOTk0IDExNy4yMDMgMzAxLjk5NEMxNDkuNjQxIDMwMS45OTQgMTc5LjM0NCAzMTYuNjE5IDE5OC43MDMgMzQyLjA4OUMyMDEuOTk4IDM0Ni40NCAyMDkuNzMyIDM0Ni41MTEgMjEyLjM5MSAzNDAuNDYzQzIzMC43NjYgMjk4Ljg2OCAyNzMgMjcxLjk5MyAzMjAgMjcxLjk5M1M0MDkuMjM0IDI5OC44NjggNDI3LjYwOSAzNDAuNDY0QzQzMC4zMzggMzQ2LjY2NyA0MzguMSAzNDYuMjcyIDQ0MS4yOTcgMzQyLjA4OUM0NjAuNjU2IDMxNi42MTkgNDkwLjM1OSAzMDEuOTk0IDUyMi43OTcgMzAxLjk5NEM1NzguNTk0IDMwMS45OTQgNjI0IDM0NS40OTUgNjI0IDM5OC45OTdTNTc4LjU5NCA0OTYgNTIyLjc5NyA0OTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FireSmoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M166.531 255.773C162.156 241.117 159.938 226.179 159.938 211.366C159.938 162.802 210.328 80.956 277.984 18.766C303.391 41.986 326.781 67.549 345.953 93.018C348.369 96.206 354.293 98.308 358.453 93.362C369.531 80.268 381.656 67.643 394.562 55.705C443.781 102.237 479.938 174.865 479.938 211.147C479.938 225.898 477.75 240.867 473.453 255.711C470.5 265.805 485.861 270.368 488.828 260.149C493.547 243.898 495.938 227.398 495.938 211.147C495.938 170.115 456.5 89.268 399.906 38.892C396.875 36.204 392.297 36.204 389.266 38.892C376.297 50.486 364.031 62.799 352.719 75.549C332.734 50.111 308.906 24.829 283.313 2.016C280.281 -0.672 275.688 -0.672 272.656 2.016C198.078 68.518 143.938 156.583 143.938 211.366C143.938 227.741 146.375 244.211 151.188 260.336C154.256 270.5 169.551 265.969 166.531 255.773ZM417.875 241.085C427.734 215.803 425.688 187.459 412.219 163.271C409.656 158.708 406.688 153.833 403.609 148.926C401.002 144.817 394.836 143.618 391 147.739L353.109 188.271C336.281 168.115 288.938 111.425 284.563 106.613C281.432 103.191 275.941 103.019 272.656 106.675C238.438 145.208 216 172.802 216 204.116C216 218.147 218.734 231.304 224.109 243.273C228.385 252.828 243.096 246.484 238.703 236.71C234.25 226.835 232 215.866 232 204.116C232 181.865 246.422 160.833 278.547 124.176C292.516 140.676 327.078 182.052 346.625 205.491C351.064 210.78 357.555 206.94 358.609 205.834L395.516 166.333C410.014 190.654 411.197 214.163 402.969 235.273C399.076 245.25 414.078 250.742 417.875 241.085ZM522.797 285.994C489.578 285.994 458.812 299.275 436.641 322.838C413.516 281.868 369.016 255.992 320 255.992S226.484 281.868 203.359 322.838C181.188 299.275 150.422 285.994 117.203 285.994C52.578 285.994 0 336.682 0 398.997S52.578 512 117.203 512H522.797C587.422 512 640 461.311 640 398.997S587.422 285.994 522.797 285.994ZM522.797 496H117.203C61.406 496 16 452.498 16 398.997S61.406 301.994 117.203 301.994C149.641 301.994 179.344 316.619 198.703 342.089C201.998 346.44 209.732 346.511 212.391 340.463C230.766 298.868 273 271.993 320 271.993S409.234 298.868 427.609 340.464C430.338 346.667 438.1 346.272 441.297 342.089C460.656 316.619 490.359 301.994 522.797 301.994C578.594 301.994 624 345.495 624 398.997S578.594 496 522.797 496Z" />
        </Icon>
    </>
}