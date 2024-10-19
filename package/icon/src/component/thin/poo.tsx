
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `poo` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/poo?s=thin poo}
 * @preview ![poo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjEuMzc1IDM2MS41NjJDNDczLjk4NCAzNDcuNDY5IDQ4MSAzMjkuNDIyIDQ4MSAzMTAuMjVDNDgxIDI2OC42ODggNDQ4LjIwMyAyMzQuNjI1IDQwNy4xNDEgMjMyLjU5NEM0MTQuNzk3IDIyMS4yMTkgNDE5IDIwNy44MTIgNDE5IDE5NC4wMDFDNDE5IDE1Ny4xMDkgMzkwLjMxMiAxMjYuNzgxIDM1NC4wNjIgMTI0LjE4OEMzNTYuMDE2IDExNi40MDYgMzU3IDEwOC42NDEgMzU3IDEwMUMzNTcgNDUuMzEyIDMxMS42ODggMCAyNTYgMEMyNTAuNjI1IDAgMjQ1LjM5MSAwLjc1IDI0MC4xNDEgMS41NDdDMjM3LjM5MSAxLjk1MyAyMzUuMDYyIDMuNzgxIDIzMy45NjkgNi4zNDRDMjMyLjg5MSA4Ljg5MSAyMzMuMjE5IDExLjg0NCAyMzQuODI4IDE0LjA5NEMyNDMuNDUzIDI2LjE3MiAyNDggNDAuMTQxIDI0OCA1NC41QzI0OCA5Mi44MjggMjE2LjgyOCAxMjQgMTc4LjUgMTI0SDE2M0MxMjQuNDA2IDEyNCA5MyAxNTUuNDA2IDkzIDE5NC4wMDFDOTMgMjA3LjgxMiA5Ny4yMDMgMjIxLjIxOSAxMDQuODU5IDIzMi41OTRDNjMuNzk3IDIzNC42MjUgMzEgMjY4LjY4OCAzMSAzMTAuMjVDMzEgMzI5LjQyMiAzOC4wMTYgMzQ3LjQ2OSA1MC42MjUgMzYxLjU2MkMyMC41NjIgMzcyLjYyNSAwIDQwMS4xNTYgMCA0MzQuMjVDMCA0NzcuMTI1IDM0Ljg3NSA1MTIgNzcuNzUgNTEySDQzNC4yNUM0NzcuMTI1IDUxMiA1MTIgNDc3LjEyNSA1MTIgNDM0LjI1QzUxMiA0MDEuMTU2IDQ5MS40MzggMzcyLjYyNSA0NjEuMzc1IDM2MS41NjJaTTQzNC4yNSA0OTZINzcuNzVDNDMuNzAzIDQ5NiAxNiA0NjguMjk3IDE2IDQzNC4yNUMxNiA0MDMuODU5IDM3Ljg3NSAzNzguMzEyIDY4IDM3My41QzcxLjE1NiAzNzIuOTg0IDczLjcxOSAzNzAuNjQxIDc0LjUgMzY3LjU0N0M3NS4yNjYgMzY0LjQzNyA3NC4xMjUgMzYxLjE3MiA3MS41NzggMzU5LjIzNEM1NS45NTMgMzQ3LjM0NCA0NyAzMjkuNSA0NyAzMTAuMjVDNDcgMjc2LjIwMyA3NC43MDMgMjQ4LjUgMTA4Ljc1IDI0OC41SDEyMi40MzhDMTI1Ljc4MSAyNDguNSAxMjguNzY2IDI0Ni40MzggMTI5LjkyMiAyNDMuMzEyQzEzMS4wOTQgMjQwLjE4OCAxMzAuMjAzIDIzNi42NTYgMTI3LjY4OCAyMzQuNDY5QzExNS42NDEgMjIzLjk2OSAxMDkgMjA5LjU5NCAxMDkgMTk0LjAwMUMxMDkgMTY0LjIxOSAxMzMuMjE5IDE0MCAxNjMgMTQwSDE3OC41QzIyNS42NDEgMTQwIDI2NCAxMDEuNjQxIDI2NCA1NC41QzI2NCA0MS4xMDkgMjYwLjgxMiAyOCAyNTQuNjcyIDE2LjAxNkMyNTUuMTI1IDE2IDI1NS41NjIgMTYgMjU2IDE2QzMwMi44NzUgMTYgMzQxIDU0LjEyNSAzNDEgMTAxQzM0MSAxMTAuMjM0IDMzOS4yNSAxMTkuNzUgMzM1Ljc5NyAxMjkuMjY2QzMzNC45MDYgMTMxLjcxOSAzMzUuMjY2IDEzNC40NTMgMzM2Ljc2NiAxMzYuNTk0UzM0MC43MDMgMTQwIDM0My4zMTIgMTQwSDM0OUMzNzguNzgxIDE0MCA0MDMgMTY0LjIxOSA0MDMgMTk0LjAwMUM0MDMgMjA5LjU5NCAzOTYuMzU5IDIyMy45NjkgMzg0LjMxMiAyMzQuNDY5QzM4MS43OTcgMjM2LjY1NiAzODAuOTA2IDI0MC4xODcgMzgyLjA3OCAyNDMuMzEyQzM4My4yMzQgMjQ2LjQzNyAzODYuMjE5IDI0OC41IDM4OS41NjIgMjQ4LjVINDAzLjI1QzQzNy4yOTcgMjQ4LjUgNDY1IDI3Ni4yMDMgNDY1IDMxMC4yNUM0NjUgMzI5LjUgNDU2LjA0NyAzNDcuMzQ0IDQ0MC40MjIgMzU5LjIzNEM0MzcuODc1IDM2MS4xNzIgNDM2LjczNCAzNjQuNDM4IDQzNy41IDM2Ny41NDdDNDM4LjI4MSAzNzAuNjQxIDQ0MC44NDQgMzcyLjk4NCA0NDQgMzczLjVDNDc0LjEyNSAzNzguMzEyIDQ5NiA0MDMuODU5IDQ5NiA0MzQuMjVDNDk2IDQ2OC4yOTcgNDY4LjI5NyA0OTYgNDM0LjI1IDQ5NlpNMzUyIDM3NkgxNjBDMTU1LjU3OCAzNzYgMTUyIDM3OS41NzggMTUyIDM4NEMxNTIgNDIyLjQ2OSAyMTQuNTk0IDQ0OCAyNTYgNDQ4UzM2MCA0MjIuNDY5IDM2MCAzODRDMzYwIDM3OS41NzggMzU2LjQyMiAzNzYgMzUyIDM3NlpNMjU2IDQzMkMyMjIuNTQ3IDQzMiAxNzguOTg0IDQxMy4yMzQgMTY5Ljc2NiAzOTJIMzQyLjIzNEMzMzMuMDE2IDQxMy4yMzQgMjg5LjQ1MyA0MzIgMjU2IDQzMlpNMTkyIDMwNEMyMDAuODM4IDMwNCAyMDggMjk2LjgzNiAyMDggMjg4UzIwMC44MzggMjcyIDE5MiAyNzJDMTgzLjE2NCAyNzIgMTc2IDI3OS4xNjQgMTc2IDI4OFMxODMuMTY0IDMwNCAxOTIgMzA0Wk0zMjAgMzA0QzMyOC44MzggMzA0IDMzNiAyOTYuODM2IDMzNiAyODhTMzI4LjgzOCAyNzIgMzIwIDI3MkMzMTEuMTY0IDI3MiAzMDQgMjc5LjE2NCAzMDQgMjg4UzMxMS4xNjQgMzA0IDMyMCAzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Poo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M461.375 361.562C473.984 347.469 481 329.422 481 310.25C481 268.688 448.203 234.625 407.141 232.594C414.797 221.219 419 207.812 419 194.001C419 157.109 390.312 126.781 354.062 124.188C356.016 116.406 357 108.641 357 101C357 45.312 311.688 0 256 0C250.625 0 245.391 0.75 240.141 1.547C237.391 1.953 235.062 3.781 233.969 6.344C232.891 8.891 233.219 11.844 234.828 14.094C243.453 26.172 248 40.141 248 54.5C248 92.828 216.828 124 178.5 124H163C124.406 124 93 155.406 93 194.001C93 207.812 97.203 221.219 104.859 232.594C63.797 234.625 31 268.688 31 310.25C31 329.422 38.016 347.469 50.625 361.562C20.562 372.625 0 401.156 0 434.25C0 477.125 34.875 512 77.75 512H434.25C477.125 512 512 477.125 512 434.25C512 401.156 491.438 372.625 461.375 361.562ZM434.25 496H77.75C43.703 496 16 468.297 16 434.25C16 403.859 37.875 378.312 68 373.5C71.156 372.984 73.719 370.641 74.5 367.547C75.266 364.437 74.125 361.172 71.578 359.234C55.953 347.344 47 329.5 47 310.25C47 276.203 74.703 248.5 108.75 248.5H122.438C125.781 248.5 128.766 246.438 129.922 243.312C131.094 240.188 130.203 236.656 127.688 234.469C115.641 223.969 109 209.594 109 194.001C109 164.219 133.219 140 163 140H178.5C225.641 140 264 101.641 264 54.5C264 41.109 260.812 28 254.672 16.016C255.125 16 255.562 16 256 16C302.875 16 341 54.125 341 101C341 110.234 339.25 119.75 335.797 129.266C334.906 131.719 335.266 134.453 336.766 136.594S340.703 140 343.312 140H349C378.781 140 403 164.219 403 194.001C403 209.594 396.359 223.969 384.312 234.469C381.797 236.656 380.906 240.187 382.078 243.312C383.234 246.437 386.219 248.5 389.562 248.5H403.25C437.297 248.5 465 276.203 465 310.25C465 329.5 456.047 347.344 440.422 359.234C437.875 361.172 436.734 364.438 437.5 367.547C438.281 370.641 440.844 372.984 444 373.5C474.125 378.312 496 403.859 496 434.25C496 468.297 468.297 496 434.25 496ZM352 376H160C155.578 376 152 379.578 152 384C152 422.469 214.594 448 256 448S360 422.469 360 384C360 379.578 356.422 376 352 376ZM256 432C222.547 432 178.984 413.234 169.766 392H342.234C333.016 413.234 289.453 432 256 432ZM192 304C200.838 304 208 296.836 208 288S200.838 272 192 272C183.164 272 176 279.164 176 288S183.164 304 192 304ZM320 304C328.838 304 336 296.836 336 288S328.838 272 320 272C311.164 272 304 279.164 304 288S311.164 304 320 304Z" />
        </Icon>
    </>
}