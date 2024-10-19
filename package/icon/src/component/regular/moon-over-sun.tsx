
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `moon-over-sun` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=regular moon-over-sun}
 * @preview ![moon-over-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTQuMTI5IDIyMS44OTNMNDM0LjI3IDE4MS4zOTVMNDQ4LjAxNiAxMTAuMzk4QzQ1MC42NDEgOTcuMjc1IDQ0Ni4zOTEgODMuNjUgNDM2Ljg5MyA3NC4wMjVDNDI3LjI3MSA2NC41MjcgNDEzLjY0OCA2MC4yNzcgNDAwLjY1MiA2Mi45MDJMMzI5Ljc5NSA3Ni42NUwyODkuNDMgMTYuNzc5QzI3NC4zMDkgLTUuNTk0IDIzNy41NjYgLTUuNTk0IDIyMi40NDUgMTYuNzc5TDE4Mi4wOCA3Ni42NUwxMTEuMjIzIDYyLjkwMkM5Ny45NzcgNjAuNDAyIDg0LjQ3OSA2NC41MjcgNzQuOTgyIDc0LjE1QzY1LjQ4NCA4My43NzUgNjEuMjM0IDk3LjI3NSA2My44NTkgMTEwLjM5OEw3Ny42MDUgMTgxLjM5NUwxNy43NDYgMjIxLjg5M0M2LjYyMyAyMjkuNTE4IDAgMjQyLjAxNiAwIDI1NS41MTZDMCAyNjkuMDE0IDYuNzQ4IDI4MS41MTQgMTcuNzQ2IDI4OS4wMTRMNzcuNjA1IDMyOS41MUw2My44NTkgNDAwLjUwNkM2MS4yMzQgNDEzLjc1NiA2NS40ODQgNDI3LjI1NCA3NC45ODIgNDM2Ljc1NEM4NC40NzkgNDQ2LjI1NCA5Ny44NTIgNDUwLjUwNCAxMTEuMjIzIDQ0Ny44NzlMMTgyLjA4IDQzNC4yNTRMMjIyLjQ0NSA0OTQuMTI1QzIyOS45NDMgNTA1LjI1IDI0Mi41NjYgNTEyIDI1NS45MzggNTEyUzI4MS45MzIgNTA1LjI1IDI4OS40MyA0OTQuMjVMMzI5Ljc5NSA0MzQuMjU0TDQwMC42NTIgNDQ4LjAwNEM0MTQuMTQ4IDQ1MC43NTQgNDI3LjUyMSA0NDYuMzc5IDQzNy4wMTggNDM2Ljg3OUM0NDYuNTE2IDQyNy4zNzkgNDUwLjY0MSA0MTMuNzU2IDQ0OC4xNDEgNDAwLjYzMUw0MzQuMzk1IDMyOS42MzVMNDk0LjEyOSAyODkuMTM5QzUwNS4yNTIgMjgxLjYzOSA1MTIgMjY5LjAxNCA1MTIgMjU1LjY0MUM1MTEuODc1IDI0Mi4wMTYgNTA1LjI1MiAyMjkuNTE4IDQ5NC4xMjkgMjIxLjg5M1pNMzgxLjE1NiAzMDcuNTEyTDM5OC43NzcgMzk4Ljc1NkwzMDcuNzk5IDM4MS4xMzNMMjU1LjkzOCA0NTguMDAyTDIwNC4wNzQgMzgxLjAwOEwxMTMuMjIzIDM5OC42MzFMMTMwLjcxOSAzMDcuMzg3TDUzLjk4NiAyNTUuMzkxTDEzMC43MTkgMjAzLjM5M0wxMTMuMjIzIDExMi4yNzNMMjA0LjE5OSAxMjkuNzczTDI1NS45MzggNTMuMDI3TDMwNy43OTkgMTI5Ljg5OEwzOTguNzc3IDExMi4yNzNMMzgxLjE1NiAyMDMuMzkzTDQ1OC4wMTQgMjU1LjM5MUwzODEuMTU2IDMwNy41MTJaTTMyNi4wNDUgMzA5LjI2MkMyNzkuNTU3IDMxOC4xMzcgMjM2LjY5MSAyODIuMzg5IDIzNi42OTEgMjM1LjI2NkMyMzYuNjkxIDIwOC4yNjggMjUxLjE4OSAxODMuMjcgMjc0LjY4NCAxNjkuODk1QzI3OC4zMDcgMTY3Ljc3MSAyNzcuNDMyIDE2Mi4yNzEgMjczLjMwOSAxNjEuNjQ2QzI2Ny41NjEgMTYwLjUyMSAyNjEuNjg2IDE2MC4wMjEgMjU1LjgxMiAxNjAuMDIxQzIwMi45NTEgMTYwLjAyMSAxNTkuOTYxIDIwMi44OTMgMTU5Ljk2MSAyNTYuMDE2QzE1OS45NjEgMzA5LjAxMiAyMDIuODI2IDM1Mi4wMSAyNTUuODEyIDM1Mi4wMUMyODUuNDMgMzUyLjAxIDMxMi40MjQgMzM4LjUxIDMzMC4yOTUgMzE2LjUxMkMzMzMuMDQzIDMxMy4yNjIgMzMwLjE3IDMwOC4zODcgMzI2LjA0NSAzMDkuMjYyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoonOverSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M494.129 221.893L434.27 181.395L448.016 110.398C450.641 97.275 446.391 83.65 436.893 74.025C427.271 64.527 413.648 60.277 400.652 62.902L329.795 76.65L289.43 16.779C274.309 -5.594 237.566 -5.594 222.445 16.779L182.08 76.65L111.223 62.902C97.977 60.402 84.479 64.527 74.982 74.15C65.484 83.775 61.234 97.275 63.859 110.398L77.605 181.395L17.746 221.893C6.623 229.518 0 242.016 0 255.516C0 269.014 6.748 281.514 17.746 289.014L77.605 329.51L63.859 400.506C61.234 413.756 65.484 427.254 74.982 436.754C84.479 446.254 97.852 450.504 111.223 447.879L182.08 434.254L222.445 494.125C229.943 505.25 242.566 512 255.938 512S281.932 505.25 289.43 494.25L329.795 434.254L400.652 448.004C414.148 450.754 427.521 446.379 437.018 436.879C446.516 427.379 450.641 413.756 448.141 400.631L434.395 329.635L494.129 289.139C505.252 281.639 512 269.014 512 255.641C511.875 242.016 505.252 229.518 494.129 221.893ZM381.156 307.512L398.777 398.756L307.799 381.133L255.938 458.002L204.074 381.008L113.223 398.631L130.719 307.387L53.986 255.391L130.719 203.393L113.223 112.273L204.199 129.773L255.938 53.027L307.799 129.898L398.777 112.273L381.156 203.393L458.014 255.391L381.156 307.512ZM326.045 309.262C279.557 318.137 236.691 282.389 236.691 235.266C236.691 208.268 251.189 183.27 274.684 169.895C278.307 167.771 277.432 162.271 273.309 161.646C267.561 160.521 261.686 160.021 255.812 160.021C202.951 160.021 159.961 202.893 159.961 256.016C159.961 309.012 202.826 352.01 255.812 352.01C285.43 352.01 312.424 338.51 330.295 316.512C333.043 313.262 330.17 308.387 326.045 309.262Z" />
        </Icon>
    </>
}