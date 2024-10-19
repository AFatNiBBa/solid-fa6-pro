
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fingerprint` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fingerprint?s=duotone fingerprint}
 * @preview ![fingerprint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1Ni40OTkgMjQ2LjAxMUMyNDMuMjUgMjQ2LjAxMSAyMzIuNTAxIDI1Ni43NjEgMjMyLjUwMSAyNzAuMDFDMjMzLjYyNiAzNDIuMjU3IDIyNC4zNzcgNDExLjg3OSAyMDQuNzU0IDQ4MS41MDFDMjAyLjEyOSA0OTEuMjUxIDIwNy4wMDQgNTEyIDIyNy44NzcgNTEyQzIzOC4zNzUgNTEyIDI0Ny45OTkgNTA1LjEyNSAyNTAuOTk5IDQ5NC41MDFDMjY0LjQ5OCA0NDYuNjI4IDI4MS45OTYgMzY5LjEzMSAyODAuNDk2IDI3MC4wMUMyODAuNDk2IDI1Ni43NjEgMjY5Ljc0NyAyNDYuMDExIDI1Ni40OTkgMjQ2LjAxMVpNMTQ1LjAxIDE0NC41MTVDMTM0LjYzNiAxMzYuMTQxIDExOS42MzggMTM3LjY0MSAxMTEuMTM4IDE0Ny44OUM4NS42NDEgMTc5LjM4OSA3MS43NjcgMjE5LjI2MiA3Mi4zOTIgMjU5Ljg4NkM3My4wMTcgMjk3LjUwOSA3MC4wMTggMzM1LjI1NyA2My4zOTMgMzcyLjAwNkM2MS4wMTkgMzg1LjAwNSA2OS42NDMgMzk3LjUwNSA4Mi42NDEgMzk5Ljg4QzEwMi43NjQgNDAzLjM4IDEwOS43NjQgMzg1LjAwNSAxMTAuNjM4IDM4MC41MDZDMTE3Ljc2MyAzNDAuNjMyIDEyMS4xMzcgMjk5Ljg4NCAxMjAuMzg3IDI1OS4xMzZDMTIwLjAxMyAyMjkuMjYyIDEyOS42MzcgMjAxLjI2MyAxNDguMzg1IDE3OC4yNjRDMTU2Ljc1OSAxNjcuODkgMTU1LjI1OSAxNTIuODkgMTQ1LjAxIDE0NC41MTVaTTI1NC4zNzQgODIuMTQzQzIzOSA4MS43NjggMjIzLjUwMiA4My41MTggMjA4LjYyOCA4Ny4xNDNDMTk1Ljc1NSA5MC4xNDMgMTg3Ljc1NiAxMDMuMTQyIDE5MC43NTUgMTE2LjAxN0MxOTMuODggMTI4Ljg5MSAyMDYuNzU0IDEzNi43NjYgMjE5Ljc1MiAxMzMuNzY2QzIzMC43NTEgMTMxLjI2NiAyNDIuMTI1IDEzMC4wMTYgMjUzLjc0OSAxMzAuMTQxQzMyOS4xMTYgMTMxLjI2NiAzOTEuMzYgMTkxLjYzOCAzOTIuNjEgMjY0Ljc2QzM5My4xMSAzMDIuNjM0IDM5MS4yMzUgMzQwLjc1NyAzODYuOTg1IDM3OC4zODFDMzg1LjQ4NSAzOTEuNTA1IDM5NC45ODQgNDAzLjM4IDQwOC4xMDggNDA0Ljg4QzQyNC44NTYgNDA2Ljg3OSA0MzMuNjA1IDM5My4wMDUgNDM0LjYwNSAzODMuNzU1QzQzOS4yMyAzNDQuMDA3IDQ0MS4yMyAzMDQuMDA5IDQ0MC42MDUgMjY0LjAxQzQzOC45OCAxNjUuMjY1IDM1NS40ODggODMuNjQzIDI1NC4zNzQgODIuMTQzWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTUuMjM0IDE2NC4yNjVDMTkzLjk5IDE2NC4xNCAxNTEuMjQ0IDIxMS4yNjMgMTUyLjExOSAyNjUuMzg1QzE1Mi44NjkgMzEzLjI1OCAxNDguMzcgMzYxLjI1NiAxMzguNzQ2IDQwNy44NzlDMTM1Ljk5NiA0MjAuODc5IDE0NC4zNyA0MzMuNTAzIDE1Ny4zNjkgNDM2LjI1M0MxNzAuMzY3IDQzOC44NzggMTgyLjk5MSA0MzAuNjI4IDE4NS43NDEgNDE3LjYyOUMxOTYuMTE1IDM2Ny41MDYgMjAwLjg2NCAzMTYuMDA4IDIwMC4xMTQgMjY0LjYzNUMxOTkuNzM5IDIzOC42MzcgMjE5Ljk4NyAyMTIuMTM4IDI1NC40ODQgMjEyLjI2M0MyODUuODU2IDIxMi43NjMgMzExLjcyOCAyMzcuNjM3IDMxMi4xMDMgMjY3Ljc2QzMxMi45NzggMzE1Ljc1OCAzMDkuMzUzIDM2NC4wMDYgMzAxLjQ3OSA0MTEuMjU0QzI5OS4zNTQgNDI0LjI1NCAzMDguMjI4IDQzNi42MjggMzIxLjM1MiA0MzguODc4QzM0MS4yMjUgNDQyLjEyOCAzNDguMDk5IDQyMy43NTQgMzQ4Ljg0OSA0MTkuMDA0QzM1Ny4wOTggMzY5LjAwNiAzNjAuOTczIDMxNy44ODMgMzYwLjA5OCAyNjcuMDFDMzU5LjIyMyAyMTEuMTM4IDMxMi4yMjggMTY1LjE0IDI1NS4yMzQgMTY0LjI2NVpNNTA2LjA4MyAyMDMuNjM4QzUwMy4yMDggMTkwLjYzOSA0OTAuNTg1IDE4Mi4zODkgNDc3LjQ2MSAxODUuMjY0QzQ2NC40NjIgMTg4LjEzOSA0NTYuMzM4IDIwMS4wMTMgNDU5LjIxMyAyMTMuODg4QzQ2My45NjIgMjM1LjM4NyA0NjQuMDg3IDI1MS4zODYgNDYzLjk2MiAyNzUuNTFDNDYzLjgzNyAyODguNzU5IDQ3NC40NjEgMjk5LjYzNCA0ODcuNzEgMjk5Ljc1OUg0ODcuOTZDNTAxLjA4NCAyOTkuNzU5IDUxMS44MzMgMjg5LjEzNCA1MTEuOTU4IDI3NS44ODVDNTEyLjA4MyAyNTMuNzYxIDUxMi4zMzIgMjMxLjc2MiA1MDYuMDgzIDIwMy42MzhaTTQ2NS45NjIgMTEyLjg5MkM0MTcuMjE3IDQzLjUyIDMzNy42IDEuMjcyIDI1Mi43MzQgMC4wMjJDMTgyLjk5MSAtMC44NTMgMTE4LjQ5OCAyNC44OTYgNzAuNTAzIDczLjAxOUMyNC4xMzIgMTE5LjM5MiAtMC44NjUgMTgxLjAxNCAwLjEzNSAyNDYuNjM2TDAuMDEgMjY4LjEzNUMtMC4zNjUgMjgxLjM4NSAxMC4wMDkgMjkyLjM4NCAyMy4yNTcgMjkyLjc1OUMyMy41MDcgMjkyLjg4NCAyMy43NTcgMjkyLjg4NCAyNC4wMDcgMjkyLjg4NEMzNy4wMDYgMjkyLjg4NCA0Ny42MyAyODIuNTEgNDguMDA1IDI2OS41MUw0OC4xMyAyNDUuODg2QzQ3LjM4IDE5My4zODggNjcuMjUzIDE0NC4wMTYgMTA0LjM3NCAxMDYuODkyQzE0My4yNDUgNjguMTQ0IDE5NS43NCA0Ny4yNyAyNTIuMTA5IDQ4LjAyQzMyMS40NzcgNDkuMDIgMzg2Ljg0NSA4My42NDMgNDI2LjcxNiAxNDAuMzkxQzQzNC4zNCAxNTEuMjY1IDQ0OS4yMTQgMTUzLjg5IDQ2MC4wODggMTQ2LjI2NUM0NzAuOTYyIDEzOC42NDEgNDczLjU4NiAxMjMuNzY2IDQ2NS45NjIgMTEyLjg5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Fingerprint(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256.499 246.011C243.25 246.011 232.501 256.761 232.501 270.01C233.626 342.257 224.377 411.879 204.754 481.501C202.129 491.251 207.004 512 227.877 512C238.375 512 247.999 505.125 250.999 494.501C264.498 446.628 281.996 369.131 280.496 270.01C280.496 256.761 269.747 246.011 256.499 246.011ZM145.01 144.515C134.636 136.141 119.638 137.641 111.138 147.89C85.641 179.389 71.767 219.262 72.392 259.886C73.017 297.509 70.018 335.257 63.393 372.006C61.019 385.005 69.643 397.505 82.641 399.88C102.764 403.38 109.764 385.005 110.638 380.506C117.763 340.632 121.137 299.884 120.387 259.136C120.013 229.262 129.637 201.263 148.385 178.264C156.759 167.89 155.259 152.89 145.01 144.515ZM254.374 82.143C239 81.768 223.502 83.518 208.628 87.143C195.755 90.143 187.756 103.142 190.755 116.017C193.88 128.891 206.754 136.766 219.752 133.766C230.751 131.266 242.125 130.016 253.749 130.141C329.116 131.266 391.36 191.638 392.61 264.76C393.11 302.634 391.235 340.757 386.985 378.381C385.485 391.505 394.984 403.38 408.108 404.88C424.856 406.879 433.605 393.005 434.605 383.755C439.23 344.007 441.23 304.009 440.605 264.01C438.98 165.265 355.488 83.643 254.374 82.143Z" />
            <path d="M255.234 164.265C193.99 164.14 151.244 211.263 152.119 265.385C152.869 313.258 148.37 361.256 138.746 407.879C135.996 420.879 144.37 433.503 157.369 436.253C170.367 438.878 182.991 430.628 185.741 417.629C196.115 367.506 200.864 316.008 200.114 264.635C199.739 238.637 219.987 212.138 254.484 212.263C285.856 212.763 311.728 237.637 312.103 267.76C312.978 315.758 309.353 364.006 301.479 411.254C299.354 424.254 308.228 436.628 321.352 438.878C341.225 442.128 348.099 423.754 348.849 419.004C357.098 369.006 360.973 317.883 360.098 267.01C359.223 211.138 312.228 165.14 255.234 164.265ZM506.083 203.638C503.208 190.639 490.585 182.389 477.461 185.264C464.462 188.139 456.338 201.013 459.213 213.888C463.962 235.387 464.087 251.386 463.962 275.51C463.837 288.759 474.461 299.634 487.71 299.759H487.96C501.084 299.759 511.833 289.134 511.958 275.885C512.083 253.761 512.332 231.762 506.083 203.638ZM465.962 112.892C417.217 43.52 337.6 1.272 252.734 0.022C182.991 -0.853 118.498 24.896 70.503 73.019C24.132 119.392 -0.865 181.014 0.135 246.636L0.01 268.135C-0.365 281.385 10.009 292.384 23.257 292.759C23.507 292.884 23.757 292.884 24.007 292.884C37.006 292.884 47.63 282.51 48.005 269.51L48.13 245.886C47.38 193.388 67.253 144.016 104.374 106.892C143.245 68.144 195.74 47.27 252.109 48.02C321.477 49.02 386.845 83.643 426.716 140.391C434.34 151.265 449.214 153.89 460.088 146.265C470.962 138.641 473.586 123.766 465.962 112.892Z" />
        </Icon>
    </>
}