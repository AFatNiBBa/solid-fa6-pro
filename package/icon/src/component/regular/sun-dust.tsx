
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun-dust` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-dust?s=regular sun-dust}
 * @preview ![sun-dust](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuNzUgNjIuOTAyTDMyOS44NzUgNzYuNjVMMjg5LjUgMTYuNzc5QzI3NC4zNzUgLTUuNTk0IDIzNy42MjUgLTUuNTk0IDIyMi41IDE2Ljc3OUwxODIuMTI1IDc2LjY1TDExMS4yNSA2Mi45MDJDOTcuOTk5IDYwLjQwMiA4NC41IDY0LjUyNyA3NSA3NC4xNUM2NS41IDgzLjc3NSA2MS4yNSA5Ny4yNzUgNjMuODc1IDExMC4zOThMNzcuNjI1IDE4MS4zOTVMMTcuNzUgMjIxLjg5M0M2LjYyNSAyMjkuNTE4IDAgMjQyLjAxNiAwIDI1NS41MTZDMCAyNjkuMDE0IDYuNzUgMjgxLjUxNCAxNy43NSAyODkuMDE0TDc3LjYyNSAzMjkuNTFMNjMuODc1IDQwMC41MDZDNjEuMjUgNDEzLjc1NiA2NS41IDQyNy4yNTQgNzUgNDM2Ljc1NEw3NS4xMjUgNDM2Ljg3OUwxMTMuMzc1IDM5OC42MzFMMTEzLjEyNSAzOTguNzU2TDEzMC43NSAzMDcuNTEyTDUzLjg3NSAyNTUuNTE2TDEzMC43NSAyMDMuNTE4TDExMy4xMjUgMTEyLjI3M0wyMDQuMTI1IDEyOS44OThMMjU2IDUzLjAyN0wzMDcuODc1IDEyOS44OThMMzk4Ljg3NSAxMTIuMjczTDM5OC43NSAxMTMuMjczTDQzNy41IDc0LjUyNUM0MzcuMjUgNzQuMjc1IDQzNy4yNSA3NC4xNSA0MzcuMTI1IDc0LjAyNUM0MjcuNSA2NC41MjcgNDEzLjc1IDYwLjQwMiA0MDAuNzUgNjIuOTAyWk0yNTYgMjAwLjAxOEMyNzEuMzc1IDIwMC4wMTggMjg1LjM3NSAyMDYuMjY4IDI5NS42MjUgMjE2LjM5M0wzMjkuNSAxODIuNTJDMzEwLjc1IDE2My43NzEgMjg0Ljc1IDE1Mi4wMjEgMjU2IDE1Mi4wMjFDMTk4Ljc1IDE1Mi4wMjEgMTUyIDE5OC43NyAxNTIgMjU2LjAxNkMxNTIgMjg0Ljc2NCAxNjMuNzUgMzEwLjc2MiAxODIuNSAzMjkuNTFMMjE2LjM3NSAyOTUuNjM5QzIwNi4yNSAyODUuMzg5IDIwMCAyNzEuMzg5IDIwMCAyNTYuMDE2QzIwMCAyMjUuMTQzIDIyNS4xMjUgMjAwLjAxOCAyNTYgMjAwLjAxOFpNMTYwLjAzMSA0NDhDMTQyLjI4MSA0NDggMTI4LjAzMSA0NjIuMjUgMTI4LjAzMSA0ODBTMTQyLjI4MSA1MTIgMTYwLjAzMSA1MTJTMTkyLjAzMSA0OTcuNzUgMTkyLjAzMSA0ODBTMTc3Ljc4MSA0NDggMTYwLjAzMSA0NDhaTTQ4MCAxOTJDNDk3Ljc1IDE5MiA1MTIgMTc3Ljc1IDUxMiAxNjBTNDk3Ljc1IDEyOCA0ODAgMTI4UzQ0OCAxNDIuMjUgNDQ4IDE2MFM0NjIuMjUgMTkyIDQ4MCAxOTJaTTMyMCAyODhDMzAyLjI1IDI4OCAyODggMzAyLjI1IDI4OCAzMjBTMzAyLjI1IDM1MiAzMjAgMzUyUzM1MiAzMzcuNzUgMzUyIDMyMFMzMzcuNzUgMjg4IDMyMCAyODhaTTQwMCAyMDhDMzgyLjI1IDIwOCAzNjggMjIyLjI1IDM2OCAyNDBTMzgyLjI1IDI3MiA0MDAgMjcyUzQzMiAyNTcuNzUgNDMyIDI0MFM0MTcuNzUgMjA4IDQwMCAyMDhaTTI0MCAzNjhDMjIyLjI1IDM2OCAyMDggMzgyLjI1IDIwOCA0MDBTMjIyLjI1IDQzMiAyNDAgNDMyUzI3MiA0MTcuNzUgMjcyIDQwMFMyNTcuNzUgMzY4IDI0MCAzNjhaTTQ4MCA0NDhDNDYyLjI1IDQ0OCA0NDggNDYyLjI1IDQ0OCA0ODBTNDYyLjI1IDUxMiA0ODAgNTEyUzUxMiA0OTcuNzUgNTEyIDQ4MFM0OTcuNzUgNDQ4IDQ4MCA0NDhaTTQwMCAzNjhDMzgyLjI1IDM2OCAzNjggMzgyLjI1IDM2OCA0MDBTMzgyLjI1IDQzMiA0MDAgNDMyUzQzMiA0MTcuNzUgNDMyIDQwMFM0MTcuNzUgMzY4IDQwMCAzNjhaTTMyMCA0NDhDMzAyLjI1IDQ0OCAyODggNDYyLjI1IDI4OCA0ODBTMzAyLjI1IDUxMiAzMjAgNTEyUzM1MiA0OTcuNzUgMzUyIDQ4MFMzMzcuNzUgNDQ4IDMyMCA0NDhaTTQ4MCAyODhDNDYyLjI1IDI4OCA0NDggMzAyLjI1IDQ0OCAzMjBTNDYyLjI1IDM1MiA0ODAgMzUyUzUxMiAzMzcuNzUgNTEyIDMyMFM0OTcuNzUgMjg4IDQ4MCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SunDust(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M400.75 62.902L329.875 76.65L289.5 16.779C274.375 -5.594 237.625 -5.594 222.5 16.779L182.125 76.65L111.25 62.902C97.999 60.402 84.5 64.527 75 74.15C65.5 83.775 61.25 97.275 63.875 110.398L77.625 181.395L17.75 221.893C6.625 229.518 0 242.016 0 255.516C0 269.014 6.75 281.514 17.75 289.014L77.625 329.51L63.875 400.506C61.25 413.756 65.5 427.254 75 436.754L75.125 436.879L113.375 398.631L113.125 398.756L130.75 307.512L53.875 255.516L130.75 203.518L113.125 112.273L204.125 129.898L256 53.027L307.875 129.898L398.875 112.273L398.75 113.273L437.5 74.525C437.25 74.275 437.25 74.15 437.125 74.025C427.5 64.527 413.75 60.402 400.75 62.902ZM256 200.018C271.375 200.018 285.375 206.268 295.625 216.393L329.5 182.52C310.75 163.771 284.75 152.021 256 152.021C198.75 152.021 152 198.77 152 256.016C152 284.764 163.75 310.762 182.5 329.51L216.375 295.639C206.25 285.389 200 271.389 200 256.016C200 225.143 225.125 200.018 256 200.018ZM160.031 448C142.281 448 128.031 462.25 128.031 480S142.281 512 160.031 512S192.031 497.75 192.031 480S177.781 448 160.031 448ZM480 192C497.75 192 512 177.75 512 160S497.75 128 480 128S448 142.25 448 160S462.25 192 480 192ZM320 288C302.25 288 288 302.25 288 320S302.25 352 320 352S352 337.75 352 320S337.75 288 320 288ZM400 208C382.25 208 368 222.25 368 240S382.25 272 400 272S432 257.75 432 240S417.75 208 400 208ZM240 368C222.25 368 208 382.25 208 400S222.25 432 240 432S272 417.75 272 400S257.75 368 240 368ZM480 448C462.25 448 448 462.25 448 480S462.25 512 480 512S512 497.75 512 480S497.75 448 480 448ZM400 368C382.25 368 368 382.25 368 400S382.25 432 400 432S432 417.75 432 400S417.75 368 400 368ZM320 448C302.25 448 288 462.25 288 480S302.25 512 320 512S352 497.75 352 480S337.75 448 320 448ZM480 288C462.25 288 448 302.25 448 320S462.25 352 480 352S512 337.75 512 320S497.75 288 480 288Z" />
        </Icon>
    </>
}