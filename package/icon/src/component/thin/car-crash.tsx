
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-crash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-crash?s=thin car-crash}
 * @preview ![car-crash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzIuMDcgODMuNTIxTDE1OC4xOTggMTcuNDA2TDE4NC4zMjcgODMuNTM3QzE4Ny4xMzggOTAuNjQzIDE5NS4xNzEgOTQuMzg5IDIwMi4zOSA5Mi4xODJMMjcwLjQ5OSA3MS4zMzRMMjU4LjM2OCA5Mi40M0MyNTYuMTcxIDk2LjIzOCAyNTcuNTIxIDEwMS4xMDQgMjYxLjM4IDEwMy4yNzlDMjY1LjIxIDEwNS40MjYgMjcwLjEyMiAxMDQuMTM1IDI3Mi4zMzUgMTAwLjI5NUwyODYuMDM0IDc2LjQ5NkMyODkuMDY0IDcxLjIwOSAyODguNTYyIDY0Ljc0MiAyODQuNzMyIDYwLjAwMkMyODAuOTE5IDU1LjI5MSAyNzQuNzA0IDUzLjM5NSAyNjguODk4IDU1LjE2NkwxOTkuMjg0IDc3LjcwN0wxNzEuOTMxIDguNDg0QzE2Ny40NzQgLTIuODM0IDE0OC45MjUgLTIuODE4IDE0NC40NjggOC40NjlMMTE4Ljc0NyA3Ni45NzdMNDcuNDg0IDU1LjE2NkM0MS42OTUgNTMuMzE2IDM1LjQ4IDU1LjI5MSAzMS42NjUgNjAuMDAyQzI3LjgzNyA2NC43NDIgMjcuMzM1IDcxLjIwOSAzMC4zNjMgNzYuNDhMNjcuODcgMTM5LjQyNEw2LjQgMTgxLjQ3NUMxLjM2MyAxODQuOTEgLTAuOTkxIDE5MC45NTcgMC4zOSAxOTYuODgxQzEuNzU1IDIwMi43NzEgNi41MDkgMjA3LjE1NiAxMi41MjEgMjA4LjA3Mkw4NS4wNTQgMjE3Ljk5TDc5LjY0IDI5Mi4yMzZDNzkuMiAyOTguMzE0IDgyLjQ5NSAzMDMuOTI2IDg4LjAxOSAzMDYuNTU1QzkwLjA2IDMwNy41MTggOTIuMjI2IDMwOCA5NC4zNzYgMzA4Qzk4LjAxNyAzMDggMTAxLjU5NSAzMDYuNjQ2IDEwNC40MDQgMzA0LjA2NkwxNTUuMzU5IDI1Ni45OTRDMTU4LjYwNyAyNTQuMDEgMTU4Ljc4IDI0OC45NzMgMTU1Ljc2NyAyNDUuNzU2QzE1Mi43MzggMjQyLjUzNyAxNDcuNjU0IDI0Mi4zNjcgMTQ0LjQwNSAyNDUuMzY3TDk1LjkxMyAyOTAuMTM3TDEwMS4wOTMgMjE5LjE3MkMxMDEuNjczIDIxMS41ODYgOTYuMTk3IDIwNC43MyA4OC42MTYgMjAzLjU4TDE4LjA5MSAxOTIuODIyTDc3LjAwMyAxNTIuNTE0QzgzLjM1OSAxNDguMTc2IDg1LjI3MyAxMzkuODQ0IDgxLjQ0NSAxMzMuMTQzTDQ1LjkgNzEuMzM0TDExMy45OTEgOTIuMTgyQzEyMS4zNjggOTQuNDA0IDEyOS4yNzcgOTAuNjI3IDEzMi4wNyA4My41MjFaTTYxMy41NzIgMjc4LjUxNEw2MjAuNzY1IDE3Ny40NjlDNjIyLjY4NyAxNTAuNDUzIDYwNy4xNTUgMTI1LjMyOCA1ODIuMTI0IDExNC45NjlMNDMyLjAxNSA1Mi43ODFDNDA3LjAxNSA0Mi40MzcgMzc4LjIzNCA0OS4xODcgMzYwLjQ5OSA2OS42NzJMMjk0LjEzNiAxNDYuMThDMjg5Ljg0OSAxNDUuMTM1IDI4NS41MzggMTQ0LjQzOCAyODEuMjUxIDE0NC40MzlDMjU5LjczOCAxNDQuNDM5IDIzOS4zMjIgMTU3LjE4NiAyMzAuNTc1IDE3OC4yOTlMMTk5LjEwMyAyNTQuMjgxQzE5Mi40MjcgMjcwLjM5NiAxOTYuOTA5IDI4OC4xNyAyMDguNzg0IDI5OS41NTdMMTg0LjAzIDM1OS4zMTNDMTgyLjM0MyAzNjMuMzkxIDE4NC4yOCAzNjguMDc4IDE4OC4zNTkgMzY5Ljc2NkMxODkuMzU5IDM3MC4xODggMTkwLjQwNSAzNzAuMzc1IDE5MS40MjEgMzcwLjM3NUMxOTQuNTYyIDM3MC4zNzUgMTk3LjUzIDM2OC41MTYgMTk4LjgxMiAzNjUuNDM4TDIyMi40MTkgMzA4LjQ0OUw1NDkuNTUyIDQ0My45NTFMNTI1Ljk1MiA1MDAuOTM4QzUyNC4yNjUgNTA1LjAxNiA1MjYuMjAyIDUwOS43MDMgNTMwLjI4IDUxMS4zOTFDNTMxLjI4IDUxMS44MTIgNTMyLjMyNyA1MTIgNTMzLjM0MyA1MTJDNTM2LjQ4NCA1MTIgNTM5LjQ1MiA1MTAuMTQxIDU0MC43MzQgNTA3LjA2Mkw1NjUuNDU4IDQ0Ny4zNTdDNTY1Ljc0OSA0NDcuMzYzIDU2Ni4wNCA0NDcuNTMxIDU2Ni4zMzEgNDQ3LjUzMUM1ODIuNDY2IDQ0Ny41MzEgNTk3Ljc4IDQzNy45NzEgNjA0LjMzOSA0MjIuMTM3TDYzNS44MTIgMzQ2LjE1NEM2NDYuMjk4IDMyMC44MzYgNjM2LjI4IDI5Mi4zMjIgNjEzLjU3MiAyNzguNTE0Wk0zNzIuNTkzIDgwLjE0MUMzODUuODEyIDY0LjkzNyA0MDcuMjE4IDU5Ljg0NCA0MjUuODkgNjcuNTYyTDU3NS45OTkgMTI5Ljc1QzU5NC42NTUgMTM3LjQ2OSA2MDYuMjM0IDE1Ni4yMDMgNjA0Ljc5NiAxNzYuMzQ0TDU5OC4wNDYgMjcxLjE2NkwzMTAuMjg4IDE1MS45NzNMMzcyLjU5MyA4MC4xNDFaTTYyMS4wMjkgMzQwLjAzMUw1ODkuNTU2IDQxNi4wMTRDNTg1LjY1MiA0MjUuNDM5IDU3Ni41MzQgNDMxLjUzMSA1NjYuMzMxIDQzMS41MzFDNTYzLjA0NCA0MzEuNTMxIDU1OS44MTYgNDMwLjg4NSA1NTYuNzM2IDQyOS42MDlMMjI3LjQ4IDI5My4yMjdDMjE0LjY4MyAyODcuOTI2IDIwOC41ODUgMjczLjIwMSAyMTMuODg2IDI2MC40MDRMMjQ1LjM1OSAxODQuNDIyQzI1MS4zOTIgMTY5Ljg1NCAyNjUuNDg0IDE2MC40MzkgMjgxLjI1NyAxNjAuNDM5QzI4Ni4zNDEgMTYwLjQzOSAyOTEuMzMxIDE2MS40MzggMjk2LjA4OSAxNjMuNDA4TDYwMC4wMTcgMjg5LjI5OUM2MDkuNTk3IDI5My4yNyA2MTcuMDYgMzAwLjczIDYyMS4wMjkgMzEwLjMxMkM2MjQuOTk5IDMxOS44OTUgNjI0Ljk5OSAzMzAuNDQ5IDYyMS4wMjkgMzQwLjAzMVpNNTUzLjQ5NyAzMTIuMDU5QzU0OS4yMSAzMTAuMjgzIDU0NC43NjcgMzA5LjQ0MSA1NDAuMzk4IDMwOS40NDFDNTI2Ljk1IDMwOS40NDEgNTE0LjE5MyAzMTcuNDA2IDUwOC43MjYgMzMwLjYwNEM1MDEuNDg0IDM0OC4wODggNTA5Ljc4NiAzNjguMTM1IDUyNy4yNzEgMzc1LjM3N0M1MzEuNTU4IDM3Ny4xNTIgNTM2LjAwMSAzNzcuOTk0IDU0MC4zNyAzNzcuOTk0QzU1My44MTggMzc3Ljk5NCA1NjYuNTc3IDM3MC4wMjkgNTcyLjA0MiAzNTYuODMyQzU3OS4yODYgMzM5LjM0NiA1NzAuOTgyIDMxOS4zMDEgNTUzLjQ5NyAzMTIuMDU5Wk01NTcuMjYxIDM1MC43MDlDNTU0LjQyMSAzNTcuNTY0IDU0Ny43OSAzNjEuOTk0IDU0MC4zNyAzNjEuOTk0QzUzNy45ODIgMzYxLjk5NCA1MzUuNjM0IDM2MS41MjMgNTMzLjM5NCAzNjAuNTk0QzUyNC4wODcgMzU2Ljc0IDUxOS42NTIgMzQ2LjAzMyA1MjMuNTA3IDMzNi43MjdDNTI2LjM0NyAzMjkuODcxIDUzMi45NzggMzI1LjQ0MSA1NDAuMzk4IDMyNS40NDFDNTQyLjc4NiAzMjUuNDQxIDU0NS4xMzQgMzI1LjkxMiA1NDcuMzc0IDMyNi44NEM1NTYuNjgxIDMzMC42OTUgNTYxLjExNiAzNDEuNDAyIDU1Ny4yNjEgMzUwLjcwOVpNMzEyLjg5IDIxMi4zOTVDMzA4LjYwMSAyMTAuNjE5IDMwNC4xNTkgMjA5Ljc3NyAyOTkuNzkgMjA5Ljc3N0MyODYuMzQzIDIwOS43NzcgMjczLjU4MyAyMTcuNzQ0IDI2OC4xMTYgMjMwLjkzOUMyNjAuODc0IDI0OC40MjQgMjY5LjE3OSAyNjguNDcxIDI4Ni42NjEgMjc1LjcxM0MyOTAuOTQ4IDI3Ny40ODggMjk1LjM5MiAyNzguMzMgMjk5Ljc2MSAyNzguMzNDMzEzLjIwOCAyNzguMzMgMzI1Ljk2OCAyNzAuMzY1IDMzMS40MzUgMjU3LjE2OEMzMzguNjc3IDIzOS42ODIgMzMwLjM3MiAyMTkuNjM3IDMxMi44OSAyMTIuMzk1Wk0zMTYuNjUyIDI1MS4wNDVDMzEzLjgxNCAyNTcuOSAzMDcuMTgzIDI2Mi4zMyAyOTkuNzYxIDI2Mi4zM0MyOTcuMzcyIDI2Mi4zMyAyOTUuMDI3IDI2MS44NTkgMjkyLjc4NCAyNjAuOTMyQzI4My40OCAyNTcuMDc2IDI3OS4wNDQgMjQ2LjM2OSAyODIuODk4IDIzNy4wNjRDMjg1LjczOCAyMzAuMjA3IDI5Mi4zNjggMjI1Ljc3NyAyOTkuNzkgMjI1Ljc3N0MzMDIuMTc3IDIyNS43NzcgMzA0LjUyNSAyMjYuMjQ4IDMwNi43NjcgMjI3LjE3OEMzMTEuMjc1IDIyOS4wNDUgMzE0Ljc4NCAyMzIuNTU1IDMxNi42NTIgMjM3LjA2MkMzMTguNTE5IDI0MS41NzIgMzE4LjUyMSAyNDYuNTM3IDMxNi42NTIgMjUxLjA0NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CarCrash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M132.07 83.521L158.198 17.406L184.327 83.537C187.138 90.643 195.171 94.389 202.39 92.182L270.499 71.334L258.368 92.43C256.171 96.238 257.521 101.104 261.38 103.279C265.21 105.426 270.122 104.135 272.335 100.295L286.034 76.496C289.064 71.209 288.562 64.742 284.732 60.002C280.919 55.291 274.704 53.395 268.898 55.166L199.284 77.707L171.931 8.484C167.474 -2.834 148.925 -2.818 144.468 8.469L118.747 76.977L47.484 55.166C41.695 53.316 35.48 55.291 31.665 60.002C27.837 64.742 27.335 71.209 30.363 76.48L67.87 139.424L6.4 181.475C1.363 184.91 -0.991 190.957 0.39 196.881C1.755 202.771 6.509 207.156 12.521 208.072L85.054 217.99L79.64 292.236C79.2 298.314 82.495 303.926 88.019 306.555C90.06 307.518 92.226 308 94.376 308C98.017 308 101.595 306.646 104.404 304.066L155.359 256.994C158.607 254.01 158.78 248.973 155.767 245.756C152.738 242.537 147.654 242.367 144.405 245.367L95.913 290.137L101.093 219.172C101.673 211.586 96.197 204.73 88.616 203.58L18.091 192.822L77.003 152.514C83.359 148.176 85.273 139.844 81.445 133.143L45.9 71.334L113.991 92.182C121.368 94.404 129.277 90.627 132.07 83.521ZM613.572 278.514L620.765 177.469C622.687 150.453 607.155 125.328 582.124 114.969L432.015 52.781C407.015 42.437 378.234 49.187 360.499 69.672L294.136 146.18C289.849 145.135 285.538 144.438 281.251 144.439C259.738 144.439 239.322 157.186 230.575 178.299L199.103 254.281C192.427 270.396 196.909 288.17 208.784 299.557L184.03 359.313C182.343 363.391 184.28 368.078 188.359 369.766C189.359 370.188 190.405 370.375 191.421 370.375C194.562 370.375 197.53 368.516 198.812 365.438L222.419 308.449L549.552 443.951L525.952 500.938C524.265 505.016 526.202 509.703 530.28 511.391C531.28 511.812 532.327 512 533.343 512C536.484 512 539.452 510.141 540.734 507.062L565.458 447.357C565.749 447.363 566.04 447.531 566.331 447.531C582.466 447.531 597.78 437.971 604.339 422.137L635.812 346.154C646.298 320.836 636.28 292.322 613.572 278.514ZM372.593 80.141C385.812 64.937 407.218 59.844 425.89 67.562L575.999 129.75C594.655 137.469 606.234 156.203 604.796 176.344L598.046 271.166L310.288 151.973L372.593 80.141ZM621.029 340.031L589.556 416.014C585.652 425.439 576.534 431.531 566.331 431.531C563.044 431.531 559.816 430.885 556.736 429.609L227.48 293.227C214.683 287.926 208.585 273.201 213.886 260.404L245.359 184.422C251.392 169.854 265.484 160.439 281.257 160.439C286.341 160.439 291.331 161.438 296.089 163.408L600.017 289.299C609.597 293.27 617.06 300.73 621.029 310.312C624.999 319.895 624.999 330.449 621.029 340.031ZM553.497 312.059C549.21 310.283 544.767 309.441 540.398 309.441C526.95 309.441 514.193 317.406 508.726 330.604C501.484 348.088 509.786 368.135 527.271 375.377C531.558 377.152 536.001 377.994 540.37 377.994C553.818 377.994 566.577 370.029 572.042 356.832C579.286 339.346 570.982 319.301 553.497 312.059ZM557.261 350.709C554.421 357.564 547.79 361.994 540.37 361.994C537.982 361.994 535.634 361.523 533.394 360.594C524.087 356.74 519.652 346.033 523.507 336.727C526.347 329.871 532.978 325.441 540.398 325.441C542.786 325.441 545.134 325.912 547.374 326.84C556.681 330.695 561.116 341.402 557.261 350.709ZM312.89 212.395C308.601 210.619 304.159 209.777 299.79 209.777C286.343 209.777 273.583 217.744 268.116 230.939C260.874 248.424 269.179 268.471 286.661 275.713C290.948 277.488 295.392 278.33 299.761 278.33C313.208 278.33 325.968 270.365 331.435 257.168C338.677 239.682 330.372 219.637 312.89 212.395ZM316.652 251.045C313.814 257.9 307.183 262.33 299.761 262.33C297.372 262.33 295.027 261.859 292.784 260.932C283.48 257.076 279.044 246.369 282.898 237.064C285.738 230.207 292.368 225.777 299.79 225.777C302.177 225.777 304.525 226.248 306.767 227.178C311.275 229.045 314.784 232.555 316.652 237.062C318.519 241.572 318.521 246.537 316.652 251.045Z" />
        </Icon>
    </>
}