
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=thin person-sign}
 * @preview ![person-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDEuNDg5IDY2LjYzMUw0MTQuMjQ1IDM0Ljg4OUM0MTQuMjQ3IDM0Ljg4NSA0MTQuMjQ5IDM0Ljg4NSA0MTQuMjUxIDM0Ljg4MUw0MjMuNDY5IDEwLjg4MUM0MjUuMDYzIDYuNzU2IDQyMy4wMDEgMi4xMTUgNDE4Ljg3NiAwLjUzN1M0MTAuMDk0IDAuOTc1IDQwOC41MzIgNS4xMzFMMzk5LjMxMyAyOS4xMzFDMzk5LjI3IDI5LjI0MiAzOTkuMzU4IDI5LjM0OCAzOTkuMzIxIDI5LjQ1OUwzMjEuMTE4IDEuMDA2QzMxOS4zMDIgMC4zNTUgMzE3LjQ0OCAwLjA0NSAzMTUuNjMgMC4wNDVDMzA5LjA3MSAwLjA0NSAzMDIuOTY4IDQuMDc0IDMwMC42MTggMTAuNjMxTDI1Ni43NDMgMTMwLjg4MUMyNTMuNzQzIDEzOS4yNTYgMjU4LjExOCAxNDguMzgxIDI2Ni4zNjggMTUxLjM4MUwzNDguNzYyIDE4MS4zMzhMMjk2LjUzMiAzMTcuMTMxQzI5NC45MzggMzIxLjI1NiAyOTcuMDAxIDMyNS44ODEgMzAxLjEyNiAzMjcuNDc1QzMwMi4wNjMgMzI3LjgzNCAzMDMuMDMyIDMyOC4wMDYgMzA0LjAwMSAzMjguMDA2QzMwNy4yMTkgMzI4LjAwNiAzMTAuMjUxIDMyNi4wNTMgMzExLjQ2OSAzMjIuODgxTDM2My44MDcgMTg2LjgwOUw0NDYuODY0IDIxNy4wMDZDNDQ4LjY4MiAyMTcuNjU2IDQ1MC41MzYgMjE3Ljk2NyA0NTIuMzU0IDIxNy45NjdDNDU4LjkxMyAyMTcuOTY3IDQ2NS4wMTYgMjEzLjkzOCA0NjcuMzY0IDIwNy4zODFMNTEwLjk4OSA4Ny4xMzFDNTE0LjExNCA3OC43NTYgNTA5LjczOSA2OS43NTYgNTAxLjQ4OSA2Ni42MzFaTTQ1Mi4zMzMgMjAxLjk2OUwyNzEuNzc0IDEzNi4zNjVMMzE1LjY3NSAxNi4wNTFMNDk1Ljk0OCA4MS42NzRMNDUyLjMzMyAyMDEuOTY5Wk0xNDMuOTk1IDEwNEMxNzIuNzAyIDEwNCAxOTUuOTk1IDgwLjcwOSAxOTUuOTk1IDUyUzE3Mi41NjcgMCAxNDMuOTk1IDBDMTE1LjQyMSAwIDkxLjk5NyAyMy4yOTEgOTEuOTk3IDUyUzExNS4yODYgMTA0IDE0My45OTUgMTA0Wk0xNDMuOTk1IDE2QzE2My44NDQgMTYgMTc5Ljk5NSAzMi4xNSAxNzkuOTk1IDUyUzE2My44NDQgODggMTQzLjk5NSA4OFMxMDcuOTk3IDcxLjg1IDEwNy45OTcgNTJTMTI0LjE0NSAxNiAxNDMuOTk1IDE2Wk0yODYuOTYyIDI1MS42MDdDMjY1LjA1NyAyNDUuMDEgMjU1LjQ1NCAyNDQuMTc0IDIzOS40MzIgMjI5LjkzOEwyMDUuNzc2IDE5Ni4yNzdDMjAwLjczNyAxOTEuMjM4IDE5Mi4xMiAxOTQuODA3IDE5Mi4xMiAyMDEuOTM0VjMxNi4xNDNMMjM0Ljk3MSA0MDIuMTExQzIzOC4yNTcgNDA4LjU4OCAyMzkuOTkzIDQxNS45ODQgMjM5Ljk5MyA0MjMuNVY0NzguOTQ1QzIzOS45OTMgNTAxLjM1NCAyMDcuOTk1IDUwMS4yNTQgMjA3Ljk5NSA0ODBWNDE5LjcyM0wxNjguMzQ2IDM0MC40MjRDMTY2Ljk5MSAzMzcuNzEzIDE2NC4yMTkgMzM2IDE2MS4xODggMzM2SDEzMy42M0MxMjkuNTIgMzM2IDEyNi4wNzkgMzM5LjExNSAxMjUuNjY5IDM0My4yMDVMMTExLjgzNSA0ODEuNTYyQzEwOS41MzYgNTAzLjIyOSA3Ny45ODkgNDk5LjAwOCA4MC4wNDIgNDc4LjM0Nkw5NS45OTcgMzE4LjM3NVYyMjkuODM0Qzk1Ljk5NyAyMjEuMzk2IDg0LjYyOCAyMTguNzA1IDgwLjg0NCAyMjYuMjQ2TDQ2LjMxMSAyOTUuMDk0QzM2Ljc2MiAzMTQuMTg5IDguMjk4IDI5OS42NzQgMTcuNjgyIDI4MC45MDZMNzIuOTM0IDE3MC40MDJDODEuMDYzIDE1NC4xNDUgOTcuNjggMTQzLjg3NSAxMTUuODU2IDE0My44NzVIMTc4Ljc0NUMxOTEuMzk3IDE0My44NzUgMjAzLjQwMyAxNDguOTE0IDIxMi41NjkgMTU4LjA3OEMyNjguODM5IDIxNC4yMDcgMjYwLjk5OSAyMDYuMzg3IDI2NC42IDIwOS45NzlDMjY1LjY0NSAyMTAuMzI4IDI3OC42NTMgMjE1LjQwNCAyOTguMDc3IDIyMy4wMDJDMzAyLjYxIDIyNC43NzUgMzA3Ljc2OCAyMjIuNTc2IDMwOS41NzcgMjE4LjA1N0MzMTEuNDY4IDIxMy4zMjYgMzA4Ljk5MyAyMDcuOTc5IDMwNC4xNjMgMjA2LjM1OUwyNzMuMjQzIDE5NkwyMjMuODY4IDE0Ni43NUMyMTEuNzQzIDEzNC42MjUgMTk1Ljc0NSAxMjcuODc1IDE3OC43NDUgMTI3Ljg3NUgxMTUuODZDOTEuNjIyIDEyNy44NzUgNjkuNDYyIDE0MS41NyA1OC42MjIgMTYzLjI1TDMuMzcyIDI3My43NUMtNC41MDMgMjg5LjUgMS44NzIgMzA4Ljc1IDE3Ljc0NyAzMTYuNjI1QzIyLjI0NyAzMTguODc1IDI3LjI0NyAzMjAgMzEuOTk3IDMyMEM0My43NDcgMzIwIDU0Ljk5NyAzMTMuNSA2MC42MjIgMzAyLjI1TDc5Ljk5NyAyNjMuNjI1VjMxOC4zNzVMNjQuMTIyIDQ3Ni43NUM2Mi4zNzIgNDk0LjM3NSA3NS4yNDcgNTEwLjEyNSA5Mi43NDcgNTExLjc1QzkzLjc0NyA1MTEuODc1IDk0Ljg3MiA1MTIgOTUuODcyIDUxMkMxMTIuMTIgNTEyIDEyNS45OTUgNDk5Ljc1IDEyNy43NDUgNDgzLjI1TDE0MC44NyAzNTJIMTU2LjI0NUwxOTEuOTk1IDQyMy41VjQ3OC4zMTJDMTkxLjk5NSA0OTUuNjY2IDIwNS4wNzMgNTExLjEzNyAyMjIuNDA3IDUxMS45NjNDMjQwLjg4NSA1MTIuODQyIDI1NS45OTMgNDk4LjI3NSAyNTUuOTkzIDQ4MFY0MjMuNUMyNTUuOTkzIDQxMy42MjUgMjUzLjc0MyA0MDMuNzUgMjQ5LjI0MyAzOTQuODc1TDIwOC4xMiAzMTIuMzc1VjIyMS4yNUwyMjguMTE4IDI0MS4yNUMyMzUuMTE4IDI0OC4yNSAyNDMuNzQzIDI1My41IDI1My4xMTggMjU2Ljc1TDI4Mi4zMTMgMjY2LjQ4QzI4Ni4yMjUgMjY3Ljc4NSAyOTAuNDc1IDI2NS44MTIgMjkyLjAwNyAyNjEuOTg0QzI5My43MDQgMjU3Ljc0IDI5MS4zMzkgMjUyLjkyOCAyODYuOTYyIDI1MS42MDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PersonSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M501.489 66.631L414.245 34.889C414.247 34.885 414.249 34.885 414.251 34.881L423.469 10.881C425.063 6.756 423.001 2.115 418.876 0.537S410.094 0.975 408.532 5.131L399.313 29.131C399.27 29.242 399.358 29.348 399.321 29.459L321.118 1.006C319.302 0.355 317.448 0.045 315.63 0.045C309.071 0.045 302.968 4.074 300.618 10.631L256.743 130.881C253.743 139.256 258.118 148.381 266.368 151.381L348.762 181.338L296.532 317.131C294.938 321.256 297.001 325.881 301.126 327.475C302.063 327.834 303.032 328.006 304.001 328.006C307.219 328.006 310.251 326.053 311.469 322.881L363.807 186.809L446.864 217.006C448.682 217.656 450.536 217.967 452.354 217.967C458.913 217.967 465.016 213.938 467.364 207.381L510.989 87.131C514.114 78.756 509.739 69.756 501.489 66.631ZM452.333 201.969L271.774 136.365L315.675 16.051L495.948 81.674L452.333 201.969ZM143.995 104C172.702 104 195.995 80.709 195.995 52S172.567 0 143.995 0C115.421 0 91.997 23.291 91.997 52S115.286 104 143.995 104ZM143.995 16C163.844 16 179.995 32.15 179.995 52S163.844 88 143.995 88S107.997 71.85 107.997 52S124.145 16 143.995 16ZM286.962 251.607C265.057 245.01 255.454 244.174 239.432 229.938L205.776 196.277C200.737 191.238 192.12 194.807 192.12 201.934V316.143L234.971 402.111C238.257 408.588 239.993 415.984 239.993 423.5V478.945C239.993 501.354 207.995 501.254 207.995 480V419.723L168.346 340.424C166.991 337.713 164.219 336 161.188 336H133.63C129.52 336 126.079 339.115 125.669 343.205L111.835 481.562C109.536 503.229 77.989 499.008 80.042 478.346L95.997 318.375V229.834C95.997 221.396 84.628 218.705 80.844 226.246L46.311 295.094C36.762 314.189 8.298 299.674 17.682 280.906L72.934 170.402C81.063 154.145 97.68 143.875 115.856 143.875H178.745C191.397 143.875 203.403 148.914 212.569 158.078C268.839 214.207 260.999 206.387 264.6 209.979C265.645 210.328 278.653 215.404 298.077 223.002C302.61 224.775 307.768 222.576 309.577 218.057C311.468 213.326 308.993 207.979 304.163 206.359L273.243 196L223.868 146.75C211.743 134.625 195.745 127.875 178.745 127.875H115.86C91.622 127.875 69.462 141.57 58.622 163.25L3.372 273.75C-4.503 289.5 1.872 308.75 17.747 316.625C22.247 318.875 27.247 320 31.997 320C43.747 320 54.997 313.5 60.622 302.25L79.997 263.625V318.375L64.122 476.75C62.372 494.375 75.247 510.125 92.747 511.75C93.747 511.875 94.872 512 95.872 512C112.12 512 125.995 499.75 127.745 483.25L140.87 352H156.245L191.995 423.5V478.312C191.995 495.666 205.073 511.137 222.407 511.963C240.885 512.842 255.993 498.275 255.993 480V423.5C255.993 413.625 253.743 403.75 249.243 394.875L208.12 312.375V221.25L228.118 241.25C235.118 248.25 243.743 253.5 253.118 256.75L282.313 266.48C286.225 267.785 290.475 265.812 292.007 261.984C293.704 257.74 291.339 252.928 286.962 251.607Z" />
        </Icon>
    </>
}