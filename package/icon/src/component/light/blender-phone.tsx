
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blender-phone` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blender-phone?s=light blender-phone}
 * @preview ![blender-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzQuNTY5IDBIMjI2Ljg4OEMyMDguMTIyIDAgMTkzLjM4NCAxNi4wNzQgMTk1LjAwOSAzNC43N0wyMjEuNzM5IDM0Mi41QzE4NS43MzkgMzU2LjM3NSAxNTkuOTg5IDM5MS4xMjUgMTU5Ljk4OSA0MzJWNDgwQzE1OS45ODkgNDk3LjYgMTc0LjM4OCA1MTIgMTkxLjk4OSA1MTJINTExLjk4OUM1MjkuNTg5IDUxMiA1NDMuOTg5IDQ5Ny42IDU0My45ODkgNDgwVjQzMkM1NDMuOTg5IDM5Mi42MjUgNTIwLjIzOSAzNTguODc1IDQ4Ni4yMzkgMzQ0TDU2NS41MzIgNDAuMDc4QzU3MC44MjEgMTkuODAzIDU1NS41MjMgMCA1MzQuNTY5IDBaTTUxMS45ODkgNDMyVjQ4MEgxOTEuOTg5VjQzMkMxOTEuOTg5IDM5Ni43NSAyMjAuNzM5IDM2OCAyNTUuOTg5IDM2OEg0NDcuOTg5QzQ4My4yMzkgMzY4IDUxMS45ODkgMzk2Ljc1IDUxMS45ODkgNDMyWk01MTcuODY0IDk2SDM2Ny45ODlDMzU5LjE4OSA5NiAzNTEuOTg5IDEwMy4xOTkgMzUxLjk4OSAxMTJTMzU5LjE4OSAxMjggMzY3Ljk4OSAxMjhINTA5LjQ4OUw0OTIuODY0IDE5MkgzNjcuOTg5QzM1OS4xODkgMTkyIDM1MS45ODkgMTk5LjE5OSAzNTEuOTg5IDIwOFMzNTkuMTg5IDIyNCAzNjcuOTg5IDIyNEg0ODQuNDg5TDQ1NS4yMzkgMzM2SDI1My4zNjRMMjI2Ljg2NCAzMkg1MzQuNjE0TDUxNy44NjQgOTZaTTE3Ni4zNjQgMzE3LjEyNUwxNTIuNzM5IDI1OS4xMjVDMTQ3LjYxNCAyNDYuMzc1IDEzNC43MzkgMjM4LjI1IDEyMC42MTQgMjM5Ljc1TDkyLjExNCAyNDIuNjI1QzgyLjM2NCAyMDkuNjI1IDgyLjM2NCAxNzQuNSA5MS45ODkgMTQxLjVMMTIwLjYxNCAxNDQuMzc1QzEzNC4zNjQgMTQ1Ljc1IDE0Ny42MTQgMTM3Ljc1IDE1Mi43MzkgMTI1TDE3Ni40ODkgNjdDMTgyLjExNCA1Mi44NzUgMTc2Ljg2NCAzNi44NzUgMTYzLjg2NCAyOUwxMjcuODY0IDYuODc1QzEwOC4zNjQgLTUgODIuODY0IC0xLjEyNSA2Ny4yMzkgMTYuMzc1Qy0yMy4yNjEgMTE3LjYyNSAtMjIuMjYxIDI2OS43NSA2OS4zNjQgMzcwQzc3LjYxNCAzNzkuMTI1IDkwLjM2NCAzODQgMTAzLjExNCAzODRDMTExLjczOSAzODQgMTIwLjM2NCAzODEuNzUgMTI3LjczOSAzNzcuMjVMMTYzLjg2NCAzNTUuMTI1QzE3Ni44NjQgMzQ3LjEyNSAxODIuMTE0IDMzMS4xMjUgMTc2LjM2NCAzMTcuMTI1Wk0xMTAuOTg5IDM1MEMxMDUuNzM5IDM1My4yNSA5Ni42MTQgMzUyLjUgOTIuOTg5IDM0OC41QzEyLjM2NCAyNjAuMjUgMTEuNjE0IDEyNi42MjUgOTEuMTE0IDM3LjYyNUM5NC40ODkgMzQgOTguOTg5IDMyIDEwMy4zNjQgMzJDMTA2LjExNCAzMiAxMDguNzM5IDMyLjc1IDExMS4xMTQgMzQuMTI1TDE0Ni43MzkgNTVMMTIzLjczOSAxMTIuNUw3MC4xMTQgMTA3LjI1TDY1Ljg2NCAxMTguODc1QzQ4LjQ4OSAxNjYgNDguNDg5IDIxOCA2NS44NjQgMjY1LjI1TDcwLjExNCAyNzYuODc1TDEyMy4xMTQgMjcxLjEyNUwxNDYuNDg5IDMyOC4yNUwxMTAuOTg5IDM1MFpNMzUxLjk4OSA0MDBDMzM4LjczOSA0MDAgMzI3Ljk4OSA0MTAuNzUgMzI3Ljk4OSA0MjRTMzM4LjczOSA0NDggMzUxLjk4OSA0NDhTMzc1Ljk4OSA0MzcuMjUgMzc1Ljk4OSA0MjRTMzY1LjIzOSA0MDAgMzUxLjk4OSA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BlenderPhone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M534.569 0H226.888C208.122 0 193.384 16.074 195.009 34.77L221.739 342.5C185.739 356.375 159.989 391.125 159.989 432V480C159.989 497.6 174.388 512 191.989 512H511.989C529.589 512 543.989 497.6 543.989 480V432C543.989 392.625 520.239 358.875 486.239 344L565.532 40.078C570.821 19.803 555.523 0 534.569 0ZM511.989 432V480H191.989V432C191.989 396.75 220.739 368 255.989 368H447.989C483.239 368 511.989 396.75 511.989 432ZM517.864 96H367.989C359.189 96 351.989 103.199 351.989 112S359.189 128 367.989 128H509.489L492.864 192H367.989C359.189 192 351.989 199.199 351.989 208S359.189 224 367.989 224H484.489L455.239 336H253.364L226.864 32H534.614L517.864 96ZM176.364 317.125L152.739 259.125C147.614 246.375 134.739 238.25 120.614 239.75L92.114 242.625C82.364 209.625 82.364 174.5 91.989 141.5L120.614 144.375C134.364 145.75 147.614 137.75 152.739 125L176.489 67C182.114 52.875 176.864 36.875 163.864 29L127.864 6.875C108.364 -5 82.864 -1.125 67.239 16.375C-23.261 117.625 -22.261 269.75 69.364 370C77.614 379.125 90.364 384 103.114 384C111.739 384 120.364 381.75 127.739 377.25L163.864 355.125C176.864 347.125 182.114 331.125 176.364 317.125ZM110.989 350C105.739 353.25 96.614 352.5 92.989 348.5C12.364 260.25 11.614 126.625 91.114 37.625C94.489 34 98.989 32 103.364 32C106.114 32 108.739 32.75 111.114 34.125L146.739 55L123.739 112.5L70.114 107.25L65.864 118.875C48.489 166 48.489 218 65.864 265.25L70.114 276.875L123.114 271.125L146.489 328.25L110.989 350ZM351.989 400C338.739 400 327.989 410.75 327.989 424S338.739 448 351.989 448S375.989 437.25 375.989 424S365.239 400 351.989 400Z" />
        </Icon>
    </>
}