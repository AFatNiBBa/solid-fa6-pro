
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gingerbread-man` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gingerbread-man?s=thin gingerbread-man}
 * @preview ![gingerbread-man](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTEuOTk1IDc5Ljk4NEMxODMuMjQzIDc5Ljk4NCAxNzUuOTkzIDg3LjIzNCAxNzUuOTkzIDk1Ljk4NFMxODMuMjQzIDExMS45ODQgMTkxLjk5NSAxMTEuOTg0QzIwMC43NDUgMTExLjk4NCAyMDcuOTk1IDEwNC43MzQgMjA3Ljk5NSA5NS45ODRTMjAwLjc0NSA3OS45ODQgMTkxLjk5NSA3OS45ODRaTTIyNC4wMDQgMzM1Ljk5QzIyNC4wMDMgMzM1Ljk5IDIyNC4wMDMgMzM1Ljk5IDIyNC4wMDEgMzM1Ljk5UzIyMy45OTkgMzM1Ljk5IDIyMy45OTcgMzM1Ljk5QzIxNS4yNDcgMzM1Ljk5IDIwNy45OTUgMzQzLjI0IDIwNy45OTUgMzUxLjk5MkMyMDcuOTk1IDM2MC43NDIgMjE1LjI0NyAzNjcuOTkyIDIyMy45OTcgMzY3Ljk5MkMyMjMuOTk5IDM2Ny45OTIgMjIzLjk5OSAzNjcuOTkyIDIyNC4wMDEgMzY3Ljk5MlMyMjQuMDAzIDM2Ny45OTIgMjI0LjAwNCAzNjcuOTkyQzIzMi43NTQgMzY3Ljk5MiAyNDAuMDA2IDM2MC43NDIgMjQwLjAwNiAzNTEuOTkyQzI0MC4wMDYgMzQzLjI0IDIzMi43NTQgMzM1Ljk5IDIyNC4wMDQgMzM1Ljk5Wk0yMjQuMDA0IDI3MS45ODhDMjI0LjAwMyAyNzEuOTg4IDIyNC4wMDMgMjcxLjk4OCAyMjQuMDAxIDI3MS45ODhTMjIzLjk5OSAyNzEuOTg4IDIyMy45OTcgMjcxLjk4OEMyMTUuMjQ3IDI3MS45ODggMjA3Ljk5NSAyNzkuMjQgMjA3Ljk5NSAyODcuOTlTMjE1LjI0NyAzMDMuOTkgMjIzLjk5NyAzMDMuOTlDMjIzLjk5OSAzMDMuOTkgMjIzLjk5OSAzMDMuOTkgMjI0LjAwMSAzMDMuOTlTMjI0LjAwMyAzMDMuOTkgMjI0LjAwNCAzMDMuOTlDMjMyLjc1NCAzMDMuOTkgMjQwLjAwNiAyOTYuNzQgMjQwLjAwNiAyODcuOTlTMjMyLjc1NCAyNzEuOTg4IDIyNC4wMDQgMjcxLjk4OFpNMjI0LjAwNCAyMDcuOTg4QzIyNC4wMDMgMjA3Ljk4OCAyMjQuMDAzIDIwNy45ODggMjI0LjAwMSAyMDcuOTg4UzIyMy45OTkgMjA3Ljk4OCAyMjMuOTk3IDIwNy45ODhDMjE1LjI0NyAyMDcuOTg4IDIwNy45OTUgMjE1LjIzOCAyMDcuOTk1IDIyMy45ODhTMjE1LjI0NyAyMzkuOTg4IDIyMy45OTcgMjM5Ljk4OEMyMjMuOTk5IDIzOS45ODggMjIzLjk5OSAyMzkuOTg4IDIyNC4wMDEgMjM5Ljk4OFMyMjQuMDAzIDIzOS45ODggMjI0LjAwNCAyMzkuOTg4QzIzMi43NTQgMjM5Ljk4OCAyNDAuMDA2IDIzMi43MzggMjQwLjAwNiAyMjMuOTg4UzIzMi43NTQgMjA3Ljk4OCAyMjQuMDA0IDIwNy45ODhaTTQxMy44OTkgMjkwLjIwNUM0MjguMzgzIDI3My4xOCA0MzQuNjE0IDI1MC42MzMgNDMwLjk5MyAyMjguMzQ0QzQyNS4xMTQgMTkyLjIyNSAzOTEuNTIgMTY0Ljk5IDM1Mi44NSAxNjQuOTlIMzExLjk3NUMzMjMuNyAxNDcuNjcgMzMwLjAxMiAxMjcuMjU4IDMzMC4wMTIgMTA1Ljk4NEMzMzAuMDEyIDc3LjY2IDMxOC45NzcgNTEuMDM3IDI5OC45NDIgMzEuMDI1QzI3OC45MzggMTEuMDQxIDI1Mi4zMjcgMC4wMzUgMjI0LjAwMSAwQzE5NS42NzQgMC4wMzUgMTY5LjA2MyAxMS4wNDEgMTQ5LjA1OSAzMS4wMjVDMTI5LjAyNCA1MS4wMzcgMTE3Ljk4OSA3Ny42NiAxMTcuOTg5IDEwNS45ODRDMTE3Ljk4OSAxMjcuMjU4IDEyNC4zMDEgMTQ3LjY3IDEzNi4wMjYgMTY0Ljk5SDk1LjE1MUM1Ni40ODEgMTY0Ljk5IDIyLjg4NyAxOTIuMjI1IDE3LjAwOCAyMjguMzQ0QzEzLjM4NyAyNTAuNjMzIDE5LjYxOCAyNzMuMTggMzQuMTAyIDI5MC4yMDVDNDguNTg1IDMwNy4yMjkgNjkuNjgyIDMxNi45OTQgOTEuOTg3IDMxNi45OTRIMTE2Ljg3OEwxMTYuODM1IDMxNy4wNDVMMTE3LjcwNCAzMTguNzY4TDYzLjIwNiAzODQuMjgxQzQ5LjE4MiA0MDEuMDA0IDQyLjQ3NSA0MjMuMjg3IDQ0Ljg1MiA0NDUuMzY1QzQ3LjA2MyA0NjUuOTA0IDU2Ljg0NCA0ODMuODQyIDcyLjM5MyA0OTUuODc5Qzg1LjIzMyA1MDYuMjExIDEwMS44NjQgNTEyIDExOC45ODcgNTEyQzE0MS42MjkgNTEyIDE2Mi45MzQgNTAyLjA1MSAxNzcuNDQgNDg0LjY5N0wyMTMuMzE3IDQ0MS42NzRDMjE2Ljk0NCA0MzcuMzAzIDIyMS41MzYgNDM2LjYzOSAyMjQuMDAxIDQzNi42MzFDMjI2LjQ2NSA0MzYuNjM5IDIzMS4wNTcgNDM3LjMwMyAyMzQuNjg0IDQ0MS42NzRMMjcwLjU2MSA0ODQuNjk3QzI4NS4wNjcgNTAyLjA1MSAzMDYuMzcyIDUxMiAzMjkuMDE0IDUxMkMzNDYuMTM3IDUxMiAzNjIuNzY4IDUwNi4yMTEgMzc1LjYwOCA0OTUuODc5QzM5MS4xNTcgNDgzLjg0MiA0MDAuOTM4IDQ2NS45MDQgNDAzLjE0OSA0NDUuMzY1QzQwNS41MjYgNDIzLjI4NyAzOTguODE5IDQwMS4wMDQgMzg0Ljc5NSAzODQuMjgxTDMzMC4yOTcgMzE4Ljc2OEwzMzEuMTY3IDMxNy4wNDVMMzMxLjEyNCAzMTYuOTk0SDM1Ni4wMTRDMzc4LjMxOSAzMTYuOTk0IDM5OS40MTcgMzA3LjIyOSA0MTMuODk5IDI5MC4yMDVaTTMxNC4wMSAzMTguMTA0QzMxNC4wMSAzMjIuMDg4IDMxNS40MTcgMzI1Ljk1NSAzMTcuOTk1IDMyOS4wMDJMMzcyLjQ5MyAzOTQuNTEyQzM5NC40MDkgNDIwLjY0NiAzOTIuNzY4IDQ2Mi4zNjUgMzY1LjgxMyA0ODMuMjI1QzM1NS4wMzIgNDkxLjg5NiAzNDEuOTA1IDQ5NiAzMjkuMDE0IDQ5NkMzMTEuOTAxIDQ5NiAyOTQuNzkyIDQ4OC43MzIgMjgyLjgzNyA0NzQuNDM2TDI0Ni45NzUgNDMxLjQyOEMyNDEuMDE2IDQyNC4yNCAyMzIuNTE4IDQyMC42NTQgMjI0LjAwMSA0MjAuNjM1QzIxNS40ODMgNDIwLjY1NCAyMDYuOTg1IDQyNC4yNCAyMDEuMDI2IDQzMS40MjhMMTY1LjE2NSA0NzQuNDM2QzE1My4yMSA0ODguNzMyIDEzNi4xIDQ5NiAxMTguOTg3IDQ5NkMxMDYuMDk2IDQ5NiA5Mi45NjkgNDkxLjg5NiA4Mi4xODggNDgzLjIyNUM1NS4yMzMgNDYyLjM2NSA1My41OTIgNDIwLjY0NiA3NS41MDggMzk0LjUxMkwxMzAuMDA2IDMyOS4wMDJDMTMyLjU4NSAzMjUuOTU1IDEzMy45OTEgMzIyLjA4OCAxMzMuOTkxIDMxOC4xMDRDMTMzLjk5MSAzMDguNzI5IDEyNi4zNzIgMzAwLjk5NCAxMTYuODc4IDMwMC45OTRIOTEuOTg3QzU1LjU0IDMwMC45OTQgMjYuNzEgMjY4LjQxNCAzMi44MDMgMjMwLjkxNEMzNy42MDggMjAxLjM4MyA2NS4yNjYgMTgwLjk5IDk1LjE1MSAxODAuOTlIMTUzLjkxM0MxNjAuNTk0IDE4MC45OSAxNjMuNzU4IDE3My4wMjEgMTU5LjA3MSAxNjguMUMxNDMuNiAxNTIuMDQ1IDEzMy45OTEgMTMwLjEyNyAxMzMuOTkxIDEwNS45ODRDMTMzLjk5MSA1Ni4zMyAxNzQuMiAxNi4wNzQgMjI0LjAwMSAxNkMyNzMuODAxIDE2LjA3NCAzMTQuMDEgNTYuMzMgMzE0LjAxIDEwNS45ODRDMzE0LjAxIDEzMC4xMjcgMzA0LjQwMSAxNTIuMDQ1IDI4OC45MyAxNjguMUMyODQuMjQzIDE3My4wMjEgMjg3LjQwNyAxODAuOTkgMjk0LjA4OCAxODAuOTlIMzUyLjg1QzM4Mi43MzUgMTgwLjk5IDQxMC4zOTMgMjAxLjM4MyA0MTUuMTk4IDIzMC45MTRDNDIxLjI5MiAyNjguNDE0IDM5Mi40NjIgMzAwLjk5NCAzNTYuMDE0IDMwMC45OTRIMzMxLjEyNEMzMjEuNjI5IDMwMC45OTQgMzE0LjAxIDMwOC43MjkgMzE0LjAxIDMxOC4xMDRaTTI1Ni4wMDYgNzkuOTg0QzI0Ny4yNTYgNzkuOTg0IDI0MC4wMDYgODcuMjM0IDI0MC4wMDYgOTUuOTg0UzI0Ny4yNTYgMTExLjk4NCAyNTYuMDA2IDExMS45ODRDMjY0Ljc1OCAxMTEuOTg0IDI3Mi4wMDggMTA0LjczNCAyNzIuMDA4IDk1Ljk4NFMyNjQuNzU4IDc5Ljk4NCAyNTYuMDA2IDc5Ljk4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GingerbreadMan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M191.995 79.984C183.243 79.984 175.993 87.234 175.993 95.984S183.243 111.984 191.995 111.984C200.745 111.984 207.995 104.734 207.995 95.984S200.745 79.984 191.995 79.984ZM224.004 335.99C224.003 335.99 224.003 335.99 224.001 335.99S223.999 335.99 223.997 335.99C215.247 335.99 207.995 343.24 207.995 351.992C207.995 360.742 215.247 367.992 223.997 367.992C223.999 367.992 223.999 367.992 224.001 367.992S224.003 367.992 224.004 367.992C232.754 367.992 240.006 360.742 240.006 351.992C240.006 343.24 232.754 335.99 224.004 335.99ZM224.004 271.988C224.003 271.988 224.003 271.988 224.001 271.988S223.999 271.988 223.997 271.988C215.247 271.988 207.995 279.24 207.995 287.99S215.247 303.99 223.997 303.99C223.999 303.99 223.999 303.99 224.001 303.99S224.003 303.99 224.004 303.99C232.754 303.99 240.006 296.74 240.006 287.99S232.754 271.988 224.004 271.988ZM224.004 207.988C224.003 207.988 224.003 207.988 224.001 207.988S223.999 207.988 223.997 207.988C215.247 207.988 207.995 215.238 207.995 223.988S215.247 239.988 223.997 239.988C223.999 239.988 223.999 239.988 224.001 239.988S224.003 239.988 224.004 239.988C232.754 239.988 240.006 232.738 240.006 223.988S232.754 207.988 224.004 207.988ZM413.899 290.205C428.383 273.18 434.614 250.633 430.993 228.344C425.114 192.225 391.52 164.99 352.85 164.99H311.975C323.7 147.67 330.012 127.258 330.012 105.984C330.012 77.66 318.977 51.037 298.942 31.025C278.938 11.041 252.327 0.035 224.001 0C195.674 0.035 169.063 11.041 149.059 31.025C129.024 51.037 117.989 77.66 117.989 105.984C117.989 127.258 124.301 147.67 136.026 164.99H95.151C56.481 164.99 22.887 192.225 17.008 228.344C13.387 250.633 19.618 273.18 34.102 290.205C48.585 307.229 69.682 316.994 91.987 316.994H116.878L116.835 317.045L117.704 318.768L63.206 384.281C49.182 401.004 42.475 423.287 44.852 445.365C47.063 465.904 56.844 483.842 72.393 495.879C85.233 506.211 101.864 512 118.987 512C141.629 512 162.934 502.051 177.44 484.697L213.317 441.674C216.944 437.303 221.536 436.639 224.001 436.631C226.465 436.639 231.057 437.303 234.684 441.674L270.561 484.697C285.067 502.051 306.372 512 329.014 512C346.137 512 362.768 506.211 375.608 495.879C391.157 483.842 400.938 465.904 403.149 445.365C405.526 423.287 398.819 401.004 384.795 384.281L330.297 318.768L331.167 317.045L331.124 316.994H356.014C378.319 316.994 399.417 307.229 413.899 290.205ZM314.01 318.104C314.01 322.088 315.417 325.955 317.995 329.002L372.493 394.512C394.409 420.646 392.768 462.365 365.813 483.225C355.032 491.896 341.905 496 329.014 496C311.901 496 294.792 488.732 282.837 474.436L246.975 431.428C241.016 424.24 232.518 420.654 224.001 420.635C215.483 420.654 206.985 424.24 201.026 431.428L165.165 474.436C153.21 488.732 136.1 496 118.987 496C106.096 496 92.969 491.896 82.188 483.225C55.233 462.365 53.592 420.646 75.508 394.512L130.006 329.002C132.585 325.955 133.991 322.088 133.991 318.104C133.991 308.729 126.372 300.994 116.878 300.994H91.987C55.54 300.994 26.71 268.414 32.803 230.914C37.608 201.383 65.266 180.99 95.151 180.99H153.913C160.594 180.99 163.758 173.021 159.071 168.1C143.6 152.045 133.991 130.127 133.991 105.984C133.991 56.33 174.2 16.074 224.001 16C273.801 16.074 314.01 56.33 314.01 105.984C314.01 130.127 304.401 152.045 288.93 168.1C284.243 173.021 287.407 180.99 294.088 180.99H352.85C382.735 180.99 410.393 201.383 415.198 230.914C421.292 268.414 392.462 300.994 356.014 300.994H331.124C321.629 300.994 314.01 308.729 314.01 318.104ZM256.006 79.984C247.256 79.984 240.006 87.234 240.006 95.984S247.256 111.984 256.006 111.984C264.758 111.984 272.008 104.734 272.008 95.984S264.758 79.984 256.006 79.984Z" />
        </Icon>
    </>
}