
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sack` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=thin sack}
 * @preview ![sack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzIuMTUgMTIwSDM1Mi4wMDFDMzU2LjQyMyAxMjAgMzYwLjAwMSAxMTYuNDA2IDM2MC4wMDEgMTEyUzM1Ni40MjMgMTA0IDM1Mi4wMDEgMTA0SDE1OS45OTVDMTU1LjU3NCAxMDQgMTUxLjk5NSAxMDcuNTk0IDE1MS45OTUgMTEyUzE1NS41NzQgMTIwIDE1OS45OTUgMTIwSDE3OS43NDJDLTkuMzUgMjM5LjE5NSAwLjA3OCAzOTIuMjI3IDAuMDc4IDQxMkMwLjA3OCA0NjcuMjUgNDkuMjAzIDUxMiAxMDkuNzAxIDUxMkg0MDIuMTk5QzQ2Mi44MjIgNTEyIDUxMS45NDcgNDY3LjI1IDUxMS45NDcgNDEyQzUxMS45NDcgMzkyLjU5OCA1MjAuMTU2IDIzOC42MTEgMzMyLjE1IDEyMFpNNDk1Ljk0NyA0MTJDNDk1Ljk0NyA0NTguMzE2IDQ1My44OSA0OTYgNDAyLjE5OSA0OTZIMTA5LjcwMUM1OC4wNzggNDk2IDE2LjA3OCA0NTguMzE2IDE2LjA3OCA0MTJDMTUuMjg3IDMzNS4wMDEgMjguMDQ3IDI0My43NTMgMjA4LjE2IDEyMEgzMDMuNzU5QzQ4My4xOCAyNDMuNDU4IDQ5Ni42NTcgMzMxLjk5MSA0OTUuOTQ3IDQxMlpNMTgxLjUxNSA4NC42ODhDMTg0LjEwOSA4OC4yNSAxODkuMDc4IDg5IDE5Mi42ODcgODYuNUMxOTYuMjY1IDgzLjkwNiAxOTcuMDc4IDc4LjkwNiAxOTQuNDg0IDc1LjMxMkwxNjAuODEyIDI4LjY4OEMxNTkuMDE1IDI2LjE4OCAxNTguNzY1IDIzLjA5NCAxNjAuMTcxIDIwLjM0NEMxNjEuNTYyIDE3LjYyNSAxNjQuMjE4IDE2IDE2Ny4yOTYgMTZIMzQ0LjcwM0MzNDcuNzgxIDE2IDM1MC40MzcgMTcuNjI1IDM1MS44MjggMjAuMzQ0QzM1My4yMzQgMjMuMDk0IDM1Mi45ODQgMjYuMTg4IDM1MS4xODcgMjguNjg4TDMxNy41MTUgNzUuMzEyQzMxNC45MjEgNzguOTA2IDMxNS43MzQgODMuOTA2IDMxOS4zMTIgODYuNUMzMjIuOTc5IDg5LjA3OSAzMjcuOTEzIDg4LjIzNCAzMzAuNDg0IDg0LjY4OEwzNjQuMTU2IDM4LjA2M0MzNjkuNDY4IDMwLjcxOSAzNzAuMjAzIDIxLjEyNSAzNjYuMDc4IDEzLjA2M1MzNTMuNzY1IDAgMzQ0LjcwMyAwSDE2Ny4yOTZDMTU4LjIzNCAwIDE1MC4wNDYgNSAxNDUuOTIxIDEzLjA2MlMxNDIuNTMxIDMwLjcxOSAxNDcuODQzIDM4LjA2MkwxODEuNTE1IDg0LjY4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M332.15 120H352.001C356.423 120 360.001 116.406 360.001 112S356.423 104 352.001 104H159.995C155.574 104 151.995 107.594 151.995 112S155.574 120 159.995 120H179.742C-9.35 239.195 0.078 392.227 0.078 412C0.078 467.25 49.203 512 109.701 512H402.199C462.822 512 511.947 467.25 511.947 412C511.947 392.598 520.156 238.611 332.15 120ZM495.947 412C495.947 458.316 453.89 496 402.199 496H109.701C58.078 496 16.078 458.316 16.078 412C15.287 335.001 28.047 243.753 208.16 120H303.759C483.18 243.458 496.657 331.991 495.947 412ZM181.515 84.688C184.109 88.25 189.078 89 192.687 86.5C196.265 83.906 197.078 78.906 194.484 75.312L160.812 28.688C159.015 26.188 158.765 23.094 160.171 20.344C161.562 17.625 164.218 16 167.296 16H344.703C347.781 16 350.437 17.625 351.828 20.344C353.234 23.094 352.984 26.188 351.187 28.688L317.515 75.312C314.921 78.906 315.734 83.906 319.312 86.5C322.979 89.079 327.913 88.234 330.484 84.688L364.156 38.063C369.468 30.719 370.203 21.125 366.078 13.063S353.765 0 344.703 0H167.296C158.234 0 150.046 5 145.921 13.062S142.531 30.719 147.843 38.062L181.515 84.688Z" />
        </Icon>
    </>
}