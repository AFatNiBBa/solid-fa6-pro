
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `candy-corn` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=thin candy-corn}
 * @preview ![candy-corn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMEMzMTQuMjQ0IDEuNjI1IDMxNS40OTQgMzkuNDk5IDMyMi4xMTkgNzIuNUMzNTIuNDk2IDIyMy45OTkgNDE2LjEyMyA0MTUuOTk4IDQ3OS44NzUgNDE1Ljk5OEg0ODBDNTQzLjc1MiA0MTUuODczIDYwNy41MDQgMjI0LjEyNCA2MzcuODgxIDcyLjVDNjQ0LjUwNiAzOS40OTkgNjQ1Ljc1NiAxLjYyNSA0ODAgMFpNNDc5Ljg3NSAzOTkuOTk4QzQ1Ni4xNzIgMzk5Ljk5OCA0MjUuNDA3IDM1Mi4xODIgMzk2LjU0MSAyNzcuNTcxQzQ1NC41OCAyNzAuMTMzIDUwNS4zODIgMjcwLjEzMSA1NjMuNDM0IDI3Ny41NjNDNTM0LjUzOSAzNTIuMTM5IDUwMy43MDMgMzk5Ljk1MSA0NzkuODc1IDM5OS45OThaTTU2OS4xOTIgMjYyLjEwM0M1MDcuMjIxIDI1My45NTcgNDUyLjgyNiAyNTMuOTQ1IDM5MC43OTEgMjYyLjExMUMzNzcuNjU1IDIyNi4xOTQgMzY1LjA1NyAxODUuMDIxIDM1My44NTIgMTQwLjM2MkM0NTQuMTMgMTIwLjMwOSA1NDMuNDggMTI3LjgyOSA2MDYuMTU2IDE0MC4zNTZDNTk0Ljk1MSAxODUuMDEzIDU4Mi4zNDYgMjI2LjE4NCA1NjkuMTkyIDI2Mi4xMDNaTTYyMi4xOTMgNjkuMzU2QzYxOC40MTIgODguMjI1IDYxNC4yODEgMTA2LjYxMiA2MDkuOTY5IDEyNC42MzFDNTA3LjMzMiAxMDQuMTY5IDQxNC41MDIgMTExLjc4NCAzNTAuMDQxIDEyNC42MzhDMzQ1LjcyNyAxMDYuNjE4IDM0MS41OTIgODguMjIzIDMzNy44MDcgNjkuMzVDMzM1LjI0NiA1Ni42MDEgMzM0Ljg4MyA0OC45NzQgMzM5Ljk5NCA0Mi42NzFDMzQ5LjQyNiAzMS4wNDQgMzgxLjM3NyAxNi45ODEgNDgwIDE1Ljk5OUM1NzguNjIzIDE2Ljk4MSA2MTAuNTc0IDMxLjA0NCA2MjAuMDA2IDQyLjY3MUM2MjUuMTE3IDQ4Ljk3NCA2MjQuNzU0IDU2LjYwMSA2MjIuMTkzIDY5LjM1NlpNODAuOTY3IDIxMy44NDRDLTMwLjUyMSAzMzIuNTA0IC0zLjA5MyAzNTcuNjI2IDI0LjU2OSAzNzUuNTg3QzE1MS41MjggNDU4LjA3NiAzMjkuNTAyIDU0NC43OTMgMzcyLjgyMyA0OTkuNTg1TDM3Mi45MDkgNDk5LjQ5NUM0MTYuMTM5IDQ1NC4yMDMgMzI0Ljg5MSAyNzcuMzI1IDIzOS4xMjMgMTUxLjY2OEMyMjAuNDY3IDEyNC4zMSAxOTQuNzM3IDk3LjQxNyA4MC45NjcgMjEzLjg0NFpNMzYxLjU5NCA0ODguNTk4QzM0NS40ODcgNTA1LjQwNyAyOTEuMDI2IDQ5NC4zOTEgMjE5LjA1MyA0NjMuNjI3QzI1My4yMjQgNDE3LjQyNSAyODcuNzMzIDM4MS4zNzcgMzMyLjQ0OCAzNDUuMjc0QzM2NS4xNTEgNDE2Ljk3MSAzNzcuNzUyIDQ3MS42NjggMzYxLjU5NCA0ODguNTk4Wk0zMjUuNTEyIDMzMC41NzRDMjc3LjYzMyAzNjguOTY2IDI0MC42NjggNDA3LjU1NyAyMDQuMjk3IDQ1Ny4wOUMxNzAuMTY0IDQ0MS43NDEgMTMyLjcwNyA0MjIuNDAzIDkzLjc1NCAzOTkuNjg0QzEyNy41NTEgMzQ2LjYyNCAxODIuOTc5IDI3OC4xMTIgMjY1LjE5IDIyMC43NkMyODguOTE0IDI1OS4zNzEgMzA5LjI0MyAyOTYuNTgzIDMyNS41MTIgMzMwLjU3NFpNODAuMTMxIDM5MS41OUM2NC41NTUgMzgyLjI3NSA0OC44MzQgMzcyLjU3NSAzMy4wMTYgMzYyLjNDMjIuMzMxIDM1NS4zNiAxNi43MzMgMzUwLjM4MSAxNS43ODIgMzQyLjQzQzE0LjAzIDMyNy43NTggMjUuODc0IDI5NS40NDIgOTIuMTk2IDIyNC44MzNDMTU5Ljg5OSAxNTUuNTY5IDE5MS40NzcgMTQyLjU2NyAyMDYuMDQ1IDE0My44NjRDMjEzLjk0MiAxNDQuNTY3IDIxOS4wNDcgMTUwLjA2MSAyMjYuMjU4IDE2MC42MzRDMjM2LjkzMiAxNzYuMjc1IDI0Ny4wMjggMTkxLjgzIDI1Ni43NDMgMjA3LjI1OEMxNzIuNjQxIDI2NS45OTUgMTE0LjkxMSAzMzcuMDUgODAuMTMxIDM5MS41OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CandyCorn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M480 0C314.244 1.625 315.494 39.499 322.119 72.5C352.496 223.999 416.123 415.998 479.875 415.998H480C543.752 415.873 607.504 224.124 637.881 72.5C644.506 39.499 645.756 1.625 480 0ZM479.875 399.998C456.172 399.998 425.407 352.182 396.541 277.571C454.58 270.133 505.382 270.131 563.434 277.563C534.539 352.139 503.703 399.951 479.875 399.998ZM569.192 262.103C507.221 253.957 452.826 253.945 390.791 262.111C377.655 226.194 365.057 185.021 353.852 140.362C454.13 120.309 543.48 127.829 606.156 140.356C594.951 185.013 582.346 226.184 569.192 262.103ZM622.193 69.356C618.412 88.225 614.281 106.612 609.969 124.631C507.332 104.169 414.502 111.784 350.041 124.638C345.727 106.618 341.592 88.223 337.807 69.35C335.246 56.601 334.883 48.974 339.994 42.671C349.426 31.044 381.377 16.981 480 15.999C578.623 16.981 610.574 31.044 620.006 42.671C625.117 48.974 624.754 56.601 622.193 69.356ZM80.967 213.844C-30.521 332.504 -3.093 357.626 24.569 375.587C151.528 458.076 329.502 544.793 372.823 499.585L372.909 499.495C416.139 454.203 324.891 277.325 239.123 151.668C220.467 124.31 194.737 97.417 80.967 213.844ZM361.594 488.598C345.487 505.407 291.026 494.391 219.053 463.627C253.224 417.425 287.733 381.377 332.448 345.274C365.151 416.971 377.752 471.668 361.594 488.598ZM325.512 330.574C277.633 368.966 240.668 407.557 204.297 457.09C170.164 441.741 132.707 422.403 93.754 399.684C127.551 346.624 182.979 278.112 265.19 220.76C288.914 259.371 309.243 296.583 325.512 330.574ZM80.131 391.59C64.555 382.275 48.834 372.575 33.016 362.3C22.331 355.36 16.733 350.381 15.782 342.43C14.03 327.758 25.874 295.442 92.196 224.833C159.899 155.569 191.477 142.567 206.045 143.864C213.942 144.567 219.047 150.061 226.258 160.634C236.932 176.275 247.028 191.83 256.743 207.258C172.641 265.995 114.911 337.05 80.131 391.59Z" />
        </Icon>
    </>
}