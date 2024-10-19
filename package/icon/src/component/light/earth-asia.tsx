
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `earth-asia` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/earth-asia?s=light earth-asia}
 * @preview ![earth-asia](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQ4IDI1NkM0OCAxNDEuMzA5IDE0MS4zMDkgNDggMjU2IDQ4QzI3Mi4xODkgNDggMjg3Ljg4MyA1MC4wNDUgMzAzLjAxOCA1My41NjFMMjU4LjY2NCA5MUMyNTEuNTIgOTUuNzUgMjQ3LjQwMiAxMDQgMjQ3Ljg4NyAxMTIuNUMyNDguNDkyIDEyMSAyNTMuNTc4IDEyOC42MjUgMjYxLjIwNyAxMzIuNUwyNzEuOTg0IDEzNy44NzVWMjAyLjEyNUMyNzAuMjg5IDIwMS41IDI2OC40NzMgMjAxLjI1IDI2Ni41MzUgMjAxLjEyNUMyNTkuMzkxIDIwMS4xMjUgMjUyLjEyNSAyMDQuNzUgMjQ4LjI1IDIxMUwyMzAuNTcgMjQwQzIyMi4wOTQgMjQwIDIxMy45OCAyNDMuMzc1IDIwOC4wNDcgMjQ5LjM3NUwyMDIuMzU1IDI1NUMxOTcuNzU0IDI1OS42MjUgMTk1LjMzMiAyNjUuNjI1IDE5NS4zMzIgMjcyUzE5Ny43NTQgMjg0LjUgMjAyLjM1NSAyODlMMjA4LjA0NyAyOTQuNjI1VjMwNEgxODUuODg3TDE2My4yNDIgMjU4Ljc1QzE1OS44NTIgMjUxLjg3NSAxNTMuMzEyIDI0NyAxNDUuNjg0IDI0NS44NzVDMTM4LjI5NyAyNDQuNjI1IDEzMC4zMDUgMjQ3LjEyNSAxMjQuODU1IDI1Mi41TDEwNS4zNTkgMjcySDQ4LjgxMUM0OC40MDQgMjY2LjcwMSA0OCAyNjEuNCA0OCAyNTZaTTQzOS45NDEgMzUyLjgyMkM0MzAuNzgxIDM3MC4xNTQgNDE5LjIyMyAzODUuOTkgNDA1Ljc0NiA0MDBIMzk5LjI1NEMzOTUuMDE2IDQwMCAzOTEuMDIgMzk4LjI1IDM4Ny45OTIgMzk1LjI1TDM3NC45MTQgMzgyLjI1QzM2OC4yNTQgMzc1LjYyNSAzNTguNjg3IDM3MyAzNDkuNDg0IDM3NS4yNUMzMjcuNTY0IDM4MC44MSAzMjcuNjU5IDM4MSAzMjQuNDE4IDM4MUgzMTQuMDA0QzMwOS43NjYgMzgxIDMwNS43NyAzNzkuMzc1IDMwMi43NDIgMzc2LjM3NUwyOTAuODc1IDM2NC41QzI4OS4zMDEgMzYzIDI4OC40NTMgMzYwLjg3NSAyODguNDUzIDM1OC43NVYzNDguNjI1QzI4OC40NTMgMzQ1LjM3NSAyOTAuNTEyIDM0Mi4zNzUgMjkzLjUzOSAzNDEuMTI1TDMzMi44OTUgMzI1LjM3NUMzMzQuODMyIDMyNC42MjUgMzM2Ljc3IDMyMy42MjUgMzM4LjQ2NSAzMjIuMzc1TDM2Mi4xOTkgMzA1LjVDMzYzLjUzMSAzMDQuNSAzNjUuMTA1IDMwNCAzNjYuODAxIDMwNEgzNzguOTFDMzgyLjA1OSAzMDQgMzg1LjA4NiAzMDYgMzg2LjI5NyAzMDlMMzkxLjYyNSAzMjEuNzVDMzkyLjIzIDMyMy4yNSAzOTMuNjg0IDMyNC4yNSAzOTUuMjU4IDMyNC4yNUgzOTkuMTMzQzQwMC45NDkgMzI0LjI1IDQwMi40MDIgMzIzLjEyNSA0MDMuMDA4IDMyMS4zNzVMNDA3LjEyNSAzMDYuODc1QzQwNy42MDkgMzA1LjI1IDQwOS4xODQgMzA0IDQxMSAzMDRINDE3LjA1NUM0MTkuMjM0IDMwNCA0MjEuMDUxIDMwNS43NSA0MjEuMDUxIDMwOFYzMjFDNDIxLjA1MSAzMjMuMTI1IDQyMS44OTggMzI1LjEyNSA0MjMuMzUyIDMyNi42MjVMNDM1LjM0IDMzOC41QzQ0MC4wMDcgMzQzLjMxOCA0MzkuOTQxIDM0OC4zMTcgNDM5Ljk0MSAzNTIuODIyWk00NTMuMDIgMzExVjMwOEM0NTMuMDIgMjg4LjEyNSA0MzYuOTE0IDI3MiA0MTcuMDU1IDI3Mkg0MTFDNDA1LjU1MSAyNzIgNDAwLjIyMyAyNzMuMjUgMzk1LjUgMjc1LjYyNUMzOTAuMjkzIDI3My4yNSAzODQuNjAyIDI3MiAzNzguOTEgMjcySDM2Ni44MDFDMzU4LjQ0NSAyNzIgMzUwLjQ1MyAyNzQuNjI1IDM0My41NTEgMjc5LjM3NUwzMTkuODE2IDI5Ni4zNzVMMjgxLjY3MiAzMTEuNUMyNjYuMjkzIDMxNy42MjUgMjU2LjQ4NCAzMzIuMTI1IDI1Ni40ODQgMzQ4LjYyNVYzNTguNzVDMjU2LjQ4NCAzNjkuNSAyNjAuNjAyIDM3OS41IDI2OC4yMyAzODcuMTI1TDI4MC4wOTggMzk5QzI4OS4xOCA0MDggMzAxLjI4OSA0MTMgMzE0LjAwNCA0MTNIMzI0LjQxOEMzMjguMjkzIDQxMyAzMzIuMjg5IDQxMi42MjUgMzM2LjA0MyA0MTEuNjI1TDM1NC40NDkgNDA3TDM2NS4zNDggNDE4QzM2OC40NzkgNDIxLjE1OCAzNzIuMTA1IDQyMy41OSAzNzUuOTI2IDQyNS42NUMzNDEuOTkyIDQ0OS43MDkgMzAwLjY3IDQ2NCAyNTYgNDY0QzE1Ny44NTIgNDY0IDc1LjU2OCAzOTUuNTg4IDUzLjgxMiAzMDRIMTA1LjM1OUMxMTMuOTU3IDMwNCAxMjEuOTQ5IDMwMC42MjUgMTI4LjAwNCAyOTQuNjI1TDEzOS42MjkgMjgzTDE1Ny4xODggMzE4LjM3NUMxNjIuNzU4IDMyOS4yNSAxNzMuNjU2IDMzNiAxODUuODg3IDMzNkgyMDguMDQ3QzIyNS42MDUgMzM2IDI0MC4wMTYgMzIxLjYyNSAyNDAuMDE2IDMwNFYyOTQuNjI1QzI0MC4wMTYgMjg2LjI1IDIzNi42MjUgMjc4LjEyNSAyMzAuODEyIDI3Mi4xMjVMMjMwLjkzNCAyNzJDMjQyLjA3NCAyNzIgMjUyLjYwOSAyNjYgMjU4LjQyMiAyNTYuNUwyNjkuMTk5IDIzOC4zNzVDMjcyLjM0OCAyMzkuMzc1IDI3NS45OCAyNDAgMjc5Ljk3NyAyNDBDMjkzLjE3NiAyNDAgMzAzLjk1MyAyMjkuMjUgMzAzLjk1MyAyMTZWMTM3Ljg3NUMzMDMuOTUzIDEyNS43NSAyOTcuMjkzIDExNC43NSAyODYuMzk1IDEwOS4yNUwzMzguNzYgNjUuMjc1QzQxMi4zNjcgOTcuMzQyIDQ2NCAxNzAuNzIxIDQ2NCAyNTZDNDY0IDI3Ni4wMTIgNDYxLjAwMiAyOTUuMzA5IDQ1NS43MDMgMzEzLjYzNUw0NTMuMDIgMzExWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EarthAsia(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM48 256C48 141.309 141.309 48 256 48C272.189 48 287.883 50.045 303.018 53.561L258.664 91C251.52 95.75 247.402 104 247.887 112.5C248.492 121 253.578 128.625 261.207 132.5L271.984 137.875V202.125C270.289 201.5 268.473 201.25 266.535 201.125C259.391 201.125 252.125 204.75 248.25 211L230.57 240C222.094 240 213.98 243.375 208.047 249.375L202.355 255C197.754 259.625 195.332 265.625 195.332 272S197.754 284.5 202.355 289L208.047 294.625V304H185.887L163.242 258.75C159.852 251.875 153.312 247 145.684 245.875C138.297 244.625 130.305 247.125 124.855 252.5L105.359 272H48.811C48.404 266.701 48 261.4 48 256ZM439.941 352.822C430.781 370.154 419.223 385.99 405.746 400H399.254C395.016 400 391.02 398.25 387.992 395.25L374.914 382.25C368.254 375.625 358.687 373 349.484 375.25C327.564 380.81 327.659 381 324.418 381H314.004C309.766 381 305.77 379.375 302.742 376.375L290.875 364.5C289.301 363 288.453 360.875 288.453 358.75V348.625C288.453 345.375 290.512 342.375 293.539 341.125L332.895 325.375C334.832 324.625 336.77 323.625 338.465 322.375L362.199 305.5C363.531 304.5 365.105 304 366.801 304H378.91C382.059 304 385.086 306 386.297 309L391.625 321.75C392.23 323.25 393.684 324.25 395.258 324.25H399.133C400.949 324.25 402.402 323.125 403.008 321.375L407.125 306.875C407.609 305.25 409.184 304 411 304H417.055C419.234 304 421.051 305.75 421.051 308V321C421.051 323.125 421.898 325.125 423.352 326.625L435.34 338.5C440.007 343.318 439.941 348.317 439.941 352.822ZM453.02 311V308C453.02 288.125 436.914 272 417.055 272H411C405.551 272 400.223 273.25 395.5 275.625C390.293 273.25 384.602 272 378.91 272H366.801C358.445 272 350.453 274.625 343.551 279.375L319.816 296.375L281.672 311.5C266.293 317.625 256.484 332.125 256.484 348.625V358.75C256.484 369.5 260.602 379.5 268.23 387.125L280.098 399C289.18 408 301.289 413 314.004 413H324.418C328.293 413 332.289 412.625 336.043 411.625L354.449 407L365.348 418C368.479 421.158 372.105 423.59 375.926 425.65C341.992 449.709 300.67 464 256 464C157.852 464 75.568 395.588 53.812 304H105.359C113.957 304 121.949 300.625 128.004 294.625L139.629 283L157.188 318.375C162.758 329.25 173.656 336 185.887 336H208.047C225.605 336 240.016 321.625 240.016 304V294.625C240.016 286.25 236.625 278.125 230.812 272.125L230.934 272C242.074 272 252.609 266 258.422 256.5L269.199 238.375C272.348 239.375 275.98 240 279.977 240C293.176 240 303.953 229.25 303.953 216V137.875C303.953 125.75 297.293 114.75 286.395 109.25L338.76 65.275C412.367 97.342 464 170.721 464 256C464 276.012 461.002 295.309 455.703 313.635L453.02 311Z" />
        </Icon>
    </>
}