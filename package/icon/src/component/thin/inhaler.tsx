
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `inhaler` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=thin inhaler}
 * @preview ![inhaler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzEuNjgzIDExNS45OTFDMzY4LjQ3MiAxMTIuNzgxIDM2NC40MzEgMTExLjI5NiAzNjAuNDQ3IDExMS4yOTZDMzUzLjUyNyAxMTEuMjk2IDM0Ni43ODEgMTE1Ljc2OSAzNDQuODY4IDEyMy40MjVMMzE5Ljc0MiAyMjQuMDA4SDIzOS44MDZDMjEzLjMxOCAyMjQuMDA4IDE5MS44NDUgMjQ1LjQ5OSAxOTEuODQ1IDI3Mi4wMDZWNDMyLjAwMUMxOTEuODQ1IDQ1OC41MDggMjEzLjMxOCA0ODAgMjM5LjgwNiA0ODBINDM4LjEyOUM0NjUuNjU2IDQ4MCA0OTAuMDkzIDQ2Mi4zNzIgNDk4Ljc5NyA0MzYuMjRMNTQxLjkyIDMwNi43NjdDNTQ1Ljc0OSAyOTUuMjY3IDU0Mi43NTkgMjgyLjU5MiA1MzQuMTk2IDI3NC4wMjJMMzcxLjY4MyAxMTUuOTkxWk01MjYuNzU1IDMwMS43MDhMNDgzLjYyOSA0MzEuMTgxQzQ3Ny4wOTIgNDUwLjgwOSA0NTguODA2IDQ2NCA0MzguMTI5IDQ2NEgyMzkuODA2QzIyMi4xNzYgNDY0IDIwNy44MzIgNDQ5LjY0NSAyMDcuODMyIDQzMi4wMDFWMjcyLjAwNkMyMDcuODMyIDI1NC4zNjIgMjIyLjE3NiAyNDAuMDA3IDIzOS44MDYgMjQwLjAwN0gzMzIuMjI0TDMzNS4yNTMgMjI3Ljg4NkwzNjAuMzE1IDEyNy4zMzFDMzYwLjM0IDEyNy4zMTUgMzYwLjQwNSAxMjcuMjk2IDM2MC40NDcgMTI3LjI5NkwzNjAuNTQxIDEyNy40NjhMNTIyLjg5MSAyODUuMzM0QzUyNy4yMDIgMjg5LjY0NiA1MjguNjgxIDI5NS45MiA1MjYuNzU1IDMwMS43MDhaTTU3Mi4yMjYgNjYuNDVDNTY4Ljc5MSA2MS4yMzEgNTYzLjUzIDU3LjczMSA1NTcuNDEgNTYuNTc1TDQzMC43NjIgMzIuMzg4QzQxOC40NzUgMzAuMTA3IDQwNi42NDEgMzguMTA3IDQwNC4xMjcgNTAuMjMyTDM5NC43MTMgOTUuNDE4QzM5My44MDcgOTkuNzMgMzk2LjU4NiAxMDMuOTggNDAwLjg5NSAxMDQuODg2QzQwNS4yOTggMTA1LjYzNiA0MDkuNDUxIDEwMy4wMTEgNDEwLjM1NiA5OC42NjhMNDE5Ljc3MSA1My40ODJDNDIwLjUzNiA0OS44NTcgNDI0LjA0OCA0Ny41NDQgNDI3Ljc4IDQ4LjEwN0w1NTQuNDI4IDcyLjI5NEM1NTYuMjU0IDcyLjYzNyA1NTcuODMxIDczLjY2OCA1NTguODYyIDc1LjI2MkM1NTkuODkyIDc2LjgyNSA1NjAuMjM1IDc4LjcgNTU5LjgzIDgwLjUxMkw1MzAuMTM1IDIxNC4yNThDNTI5LjE4MiAyMTguNTcgNTMxLjg5OSAyMjIuODUxIDUzNi4yMDggMjIzLjgyQzUzNi43ODYgMjIzLjk0NSA1MzcuMzc5IDIyNC4wMDggNTM3Ljk0MSAyMjQuMDA4QzU0MS42MSAyMjQuMDA4IDU0NC45MiAyMjEuNDc3IDU0NS43NDcgMjE3Ljc1OEw1NzUuNDQyIDg0LjAxMkM1NzYuOCA3Ny45MTggNTc1LjY2MSA3MS42NjkgNTcyLjIyNiA2Ni40NVpNMzEuOTc0IDIyNC4wMDhDMTQuMzE3IDIyNC4wMDggMCAyMzguMzM1IDAgMjU2LjAwN1MxNC4zMTcgMjg4LjAwNiAzMS45NzQgMjg4LjAwNkM0OS42MzQgMjg4LjAwNiA2My45NDggMjczLjY3OCA2My45NDggMjU2LjAwN1M0OS42MzQgMjI0LjAwOCAzMS45NzQgMjI0LjAwOFpNMzEuOTc0IDI3Mi4wMDZDMjMuMTU5IDI3Mi4wMDYgMTUuOTg3IDI2NC44MzEgMTUuOTg3IDI1Ni4wMDdDMTUuOTg3IDI0Ny4xODMgMjMuMTU5IDI0MC4wMDcgMzEuOTc0IDI0MC4wMDdTNDcuOTYxIDI0Ny4xODMgNDcuOTYxIDI1Ni4wMDdDNDcuOTYxIDI2NC44MzEgNDAuNzg5IDI3Mi4wMDYgMzEuOTc0IDI3Mi4wMDZaTTEyNy44OTcgMjcyLjAwNkMxMTAuMjM5IDI3Mi4wMDYgOTUuOTIzIDI4Ni4zMzQgOTUuOTIzIDMwNC4wMDVDOTUuOTIzIDMyMS42NzcgMTEwLjIzOSAzMzYuMDA0IDEyNy44OTcgMzM2LjAwNEMxNDUuNTU2IDMzNi4wMDQgMTU5Ljg3MSAzMjEuNjc3IDE1OS44NzEgMzA0LjAwNUMxNTkuODcxIDI4Ni4zMzQgMTQ1LjU1NiAyNzIuMDA2IDEyNy44OTcgMjcyLjAwNlpNMTI3Ljg5NyAzMjAuMDA1QzExOS4wODIgMzIwLjAwNSAxMTEuOTEgMzEyLjgyOSAxMTEuOTEgMzA0LjAwNUMxMTEuOTEgMjk1LjE4MSAxMTkuMDgyIDI4OC4wMDYgMTI3Ljg5NyAyODguMDA2UzE0My44ODQgMjk1LjE4MSAxNDMuODg0IDMwNC4wMDVDMTQzLjg4NCAzMTIuODI5IDEzNi43MTIgMzIwLjAwNSAxMjcuODk3IDMyMC4wMDVaTTMxLjk3NCAzMjAuMDA1QzE0LjMxNyAzMjAuMDA1IDAgMzM0LjMzMyAwIDM1Mi4wMDRDMCAzNjkuNjc1IDE0LjMxNyAzODQuMDAzIDMxLjk3NCAzODQuMDAzQzQ5LjYzNCAzODQuMDAzIDYzLjk0OCAzNjkuNjc1IDYzLjk0OCAzNTIuMDA0QzYzLjk0OCAzMzQuMzMzIDQ5LjYzNCAzMjAuMDA1IDMxLjk3NCAzMjAuMDA1Wk0zMS45NzQgMzY4LjAwM0MyMy4xNTkgMzY4LjAwMyAxNS45ODcgMzYwLjgyOCAxNS45ODcgMzUyLjAwNEMxNS45ODcgMzQzLjE4IDIzLjE1OSAzMzYuMDA0IDMxLjk3NCAzMzYuMDA0UzQ3Ljk2MSAzNDMuMTggNDcuOTYxIDM1Mi4wMDRDNDcuOTYxIDM2MC44MjggNDAuNzg5IDM2OC4wMDMgMzEuOTc0IDM2OC4wMDNaTTMxLjk3NCA0MTYuMDAyQzE0LjMxNyA0MTYuMDAyIDAgNDMwLjMzIDAgNDQ4LjAwMUMwIDQ2NS42NzIgMTQuMzE3IDQ4MCAzMS45NzQgNDgwQzQ5LjYzNCA0ODAgNjMuOTQ4IDQ2NS42NzIgNjMuOTQ4IDQ0OC4wMDFDNjMuOTQ4IDQzMC4zMyA0OS42MzQgNDE2LjAwMiAzMS45NzQgNDE2LjAwMlpNMzEuOTc0IDQ2NEMyMy4xNTkgNDY0IDE1Ljk4NyA0NTYuODI1IDE1Ljk4NyA0NDguMDAxQzE1Ljk4NyA0MzkuMTc3IDIzLjE1OSA0MzIuMDAxIDMxLjk3NCA0MzIuMDAxUzQ3Ljk2MSA0MzkuMTc3IDQ3Ljk2MSA0NDguMDAxQzQ3Ljk2MSA0NTYuODI1IDQwLjc4OSA0NjQgMzEuOTc0IDQ2NFpNMTI3Ljg5NyAzNjguMDAzQzExMC4yMzkgMzY4LjAwMyA5NS45MjMgMzgyLjMzMSA5NS45MjMgNDAwLjAwMkM5NS45MjMgNDE3LjY3NCAxMTAuMjM5IDQzMi4wMDEgMTI3Ljg5NyA0MzIuMDAxQzE0NS41NTYgNDMyLjAwMSAxNTkuODcxIDQxNy42NzQgMTU5Ljg3MSA0MDAuMDAyQzE1OS44NzEgMzgyLjMzMSAxNDUuNTU2IDM2OC4wMDMgMTI3Ljg5NyAzNjguMDAzWk0xMjcuODk3IDQxNi4wMDJDMTE5LjA4MiA0MTYuMDAyIDExMS45MSA0MDguODI2IDExMS45MSA0MDAuMDAyUzExOS4wODIgMzg0LjAwMyAxMjcuODk3IDM4NC4wMDNTMTQzLjg4NCAzOTEuMTc4IDE0My44ODQgNDAwLjAwMlMxMzYuNzEyIDQxNi4wMDIgMTI3Ljg5NyA0MTYuMDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Inhaler(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M371.683 115.991C368.472 112.781 364.431 111.296 360.447 111.296C353.527 111.296 346.781 115.769 344.868 123.425L319.742 224.008H239.806C213.318 224.008 191.845 245.499 191.845 272.006V432.001C191.845 458.508 213.318 480 239.806 480H438.129C465.656 480 490.093 462.372 498.797 436.24L541.92 306.767C545.749 295.267 542.759 282.592 534.196 274.022L371.683 115.991ZM526.755 301.708L483.629 431.181C477.092 450.809 458.806 464 438.129 464H239.806C222.176 464 207.832 449.645 207.832 432.001V272.006C207.832 254.362 222.176 240.007 239.806 240.007H332.224L335.253 227.886L360.315 127.331C360.34 127.315 360.405 127.296 360.447 127.296L360.541 127.468L522.891 285.334C527.202 289.646 528.681 295.92 526.755 301.708ZM572.226 66.45C568.791 61.231 563.53 57.731 557.41 56.575L430.762 32.388C418.475 30.107 406.641 38.107 404.127 50.232L394.713 95.418C393.807 99.73 396.586 103.98 400.895 104.886C405.298 105.636 409.451 103.011 410.356 98.668L419.771 53.482C420.536 49.857 424.048 47.544 427.78 48.107L554.428 72.294C556.254 72.637 557.831 73.668 558.862 75.262C559.892 76.825 560.235 78.7 559.83 80.512L530.135 214.258C529.182 218.57 531.899 222.851 536.208 223.82C536.786 223.945 537.379 224.008 537.941 224.008C541.61 224.008 544.92 221.477 545.747 217.758L575.442 84.012C576.8 77.918 575.661 71.669 572.226 66.45ZM31.974 224.008C14.317 224.008 0 238.335 0 256.007S14.317 288.006 31.974 288.006C49.634 288.006 63.948 273.678 63.948 256.007S49.634 224.008 31.974 224.008ZM31.974 272.006C23.159 272.006 15.987 264.831 15.987 256.007C15.987 247.183 23.159 240.007 31.974 240.007S47.961 247.183 47.961 256.007C47.961 264.831 40.789 272.006 31.974 272.006ZM127.897 272.006C110.239 272.006 95.923 286.334 95.923 304.005C95.923 321.677 110.239 336.004 127.897 336.004C145.556 336.004 159.871 321.677 159.871 304.005C159.871 286.334 145.556 272.006 127.897 272.006ZM127.897 320.005C119.082 320.005 111.91 312.829 111.91 304.005C111.91 295.181 119.082 288.006 127.897 288.006S143.884 295.181 143.884 304.005C143.884 312.829 136.712 320.005 127.897 320.005ZM31.974 320.005C14.317 320.005 0 334.333 0 352.004C0 369.675 14.317 384.003 31.974 384.003C49.634 384.003 63.948 369.675 63.948 352.004C63.948 334.333 49.634 320.005 31.974 320.005ZM31.974 368.003C23.159 368.003 15.987 360.828 15.987 352.004C15.987 343.18 23.159 336.004 31.974 336.004S47.961 343.18 47.961 352.004C47.961 360.828 40.789 368.003 31.974 368.003ZM31.974 416.002C14.317 416.002 0 430.33 0 448.001C0 465.672 14.317 480 31.974 480C49.634 480 63.948 465.672 63.948 448.001C63.948 430.33 49.634 416.002 31.974 416.002ZM31.974 464C23.159 464 15.987 456.825 15.987 448.001C15.987 439.177 23.159 432.001 31.974 432.001S47.961 439.177 47.961 448.001C47.961 456.825 40.789 464 31.974 464ZM127.897 368.003C110.239 368.003 95.923 382.331 95.923 400.002C95.923 417.674 110.239 432.001 127.897 432.001C145.556 432.001 159.871 417.674 159.871 400.002C159.871 382.331 145.556 368.003 127.897 368.003ZM127.897 416.002C119.082 416.002 111.91 408.826 111.91 400.002S119.082 384.003 127.897 384.003S143.884 391.178 143.884 400.002S136.712 416.002 127.897 416.002Z" />
        </Icon>
    </>
}