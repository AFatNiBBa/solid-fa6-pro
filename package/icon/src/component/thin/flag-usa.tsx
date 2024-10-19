
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag-usa` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-usa?s=thin flag-usa}
 * @preview ![flag-usa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTguNTI5IDYuMjNDNDkxLjcxNyAyLjA5OCA0ODQuMjU4IDAgNDc2LjM2NyAwQzQ2OS43MyAwIDQ2My4wMDggMS40NjUgNDU2LjkyOCA0LjIzOEM0MTUuMTY0IDIzLjMwMSAzODAuODk4IDMyLjE4IDM0OS4wOTIgMzIuMThDMzIwLjEzMSAzMi4xOCAyOTcuMzMyIDI0Ljg0OCAyNzMuMTk1IDE3LjA4NkMyNDcuNSA4LjgzNiAyMjAuOTU3IDAuMzE2IDE4NS4yMTEgMC4zMTJDMTU3LjA4NCAwLjMxMiAxMTkuNzMyIDMuMjg5IDMyIDM4LjgzNkwxNiA0NS4zMlY4QzE2IDMuNTgyIDEyLjQxOCAwIDggMFMwIDMuNTgyIDAgOFY1MDRDMCA1MDguNDA2IDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDA2IDE2IDUwNFYzOTguMjE5TDIyLjUwOCAzOTUuMzJMMzIuMDAyIDM5MS4wOTRMMzYuNjgyIDM4OC45NDFDNTYuMzA1IDM3OS44MiAxMTUuODEyIDM1Mi4xNjQgMTgwLjg0NCAzNTIuMTY0QzIxNy42ODcgMzUyLjE2NCAyNDguMDAyIDM1OS44NzkgMjgwLjA5NiAzNjguMDQ3QzMxMC44MiAzNzUuODYzIDM0Mi41ODYgMzgzLjk0NSAzNzkuNCAzODMuOTQ1QzQxNC44NjEgMzgzLjk0NSA0NTEuNDg2IDM3Ni4zOTEgNDkxLjM2NSAzNjAuODQ4QzUwMy43MzIgMzU2LjA0MyA1MTEuNzM4IDM0NC4zNTIgNTExLjc1IDMzMS4wN0w1MTIgMzIuMzUyQzUxMi4wMDggMjEuMjgxIDUwNi44NDYgMTEuMjczIDQ5OC41MjkgNi4yM1pNMTYgNjIuNTgyTDM4LjAwOCA1My42NjRDMTIzLjA3MiAxOS4xOTkgMTU4LjU5NCAxNi4zMTMgMTg1LjIwOSAxNi4zMTNDMTkzLjMwMyAxNi4zMTMgMjAwLjgyNiAxNi44MDUgMjA4IDE3LjYyNVYxNjkuMzM2QzE5OS4wMTYgMTY4LjQ5MiAxODkuNzM2IDE2OCAxODAgMTY4QzExMC40OSAxNjggNDcuMzI4IDE5NS43OTcgMTYgMjA5Ljc5N1Y2Mi41ODJaTTQ5NS43NSAzMzEuMDU1QzQ5NS43NDQgMzM3LjY5MSA0OTEuNzQ2IDM0My41MzUgNDg1LjU1NyAzNDUuOTQxQzQ0Ny41NTcgMzYwLjc1IDQxMi44MzIgMzY3Ljk0NSAzNzkuNCAzNjcuOTQ1QzM0NC41ODggMzY3Ljk0NSAzMTMuODA5IDM2MC4xMTMgMjg0LjA0MSAzNTIuNTM5QzI1MC45NDUgMzQ0LjExNyAyMTkuNjg0IDMzNi4xNjQgMTgwLjg0NCAzMzYuMTY0QzExMi4yNjQgMzM2LjE2NCA1MC4zNDIgMzY0Ljk0OSAyOS45OTQgMzc0LjQwNkwyNS40OTQgMzc2LjQ3N0wxNiAzODAuNzAzVjMxMS4yN0wyMS4wMTYgMzA5LjA2M0M1MC44MjggMjk1Ljc1IDExMi44OTEgMjY4IDE4MCAyNjhDMjE3LjQzOCAyNjggMjQ4LjU3OCAyNzUuNTk0IDI4MS44NTkgMjgzLjY4OEMzMTQuMzEzIDI5MS41OTQgMzQ3Ljg3NSAyOTkuNzgxIDM4Ny4xNzIgMjk5Ljc4MUM0MjEuNzg5IDI5OS43ODEgNDU3LjUxOCAyOTMuMDE2IDQ5NS43OTMgMjc5LjgzNkw0OTUuNzUgMzMxLjA1NVpNNDk1LjgwNyAyNjIuOTg0QzQ1Ny4yMTUgMjc2Ljg0NCA0MjEuNTY0IDI4My43ODEgMzg3LjE3MiAyODMuNzgxQzM0OS43OTcgMjgzLjc4MSAzMTcuMTg4IDI3NS44NDQgMjg1LjMyOCAyNjguMDYyQzI1MS40MDYgMjU5LjgxMiAyMTkuMzQ0IDI1MiAxODAgMjUyQzExMC40OSAyNTIgNDcuMzI4IDI3OS43OTcgMTYgMjkzLjc5N1YyMjcuMjdMMjEuMDE2IDIyNS4wNjNDNTAuODI4IDIxMS43NSAxMTIuODkxIDE4NCAxODAgMTg0QzIxNy40MzggMTg0IDI0OC41NzggMTkxLjU5NCAyODEuODU5IDE5OS42ODhDMzE0LjMxMyAyMDcuNTk0IDM0Ny44NzUgMjE1Ljc4MSAzODcuMTcyIDIxNS43ODFDNDIxLjgxMSAyMTUuNzgxIDQ1Ny41NjEgMjA5LjAwOCA0OTUuODYzIDE5NS44MTNMNDk1LjgwNyAyNjIuOTg0Wk00OTUuODc3IDE3OC45NjFDNDU3LjI1OCAxOTIuODMyIDQyMS41ODYgMTk5Ljc4MSAzODcuMTcyIDE5OS43ODFDMzQ5Ljc5NyAxOTkuNzgxIDMxNy4xODggMTkxLjg0NCAyODUuMzI4IDE4NC4wNjNDMjY0LjkzMiAxNzkuMTAyIDI0NS4wMzcgMTc0LjUyMyAyMjQgMTcxLjQ4NFYxMDMuOTA2QzI0My42MTEgMTA2LjgzNiAyNjIuNDg4IDExMC45NzcgMjgxLjg1OSAxMTUuNjg4QzMxNC4zMTMgMTIzLjU5NCAzNDcuODc1IDEzMS43ODEgMzg3LjE3MiAxMzEuNzgxQzQyMS44MzIgMTMxLjc4MSA0NTcuNjA1IDEyNSA0OTUuOTM0IDExMS43ODlMNDk1Ljg3NyAxNzguOTYxWk00OTUuOTQ3IDk0LjkzOEM0NTcuMjk5IDEwOC44MjggNDIxLjYwNyAxMTUuNzgxIDM4Ny4xNzIgMTE1Ljc4MUMzNDkuNzk3IDExNS43ODEgMzE3LjE4OCAxMDcuODQ0IDI4NS4zMjggMTAwLjA2M0MyNjQuOTggOTUuMTEzIDI0NS4wMSA5MC43MzQgMjI0IDg3LjcyN1YyMC4yNzNDMjM5LjUxNiAyMy4zMTIgMjUzLjc2NCAyNy42NTIgMjY4LjI5NyAzMi4zMTZDMjkyLjU1MyA0MC4xMTcgMzE3LjYzNSA0OC4xOCAzNDkuMDkyIDQ4LjE4QzM4My4yNzUgNDguMTggNDE5LjY0NiAzOC44NDQgNDYzLjU2NiAxOC43OTdDNDY3LjUyMyAxNi45OTIgNDcyLjA3IDE2IDQ3Ni4zNjcgMTZDNDgxLjM2MSAxNiA0ODUuODk2IDE3LjI4MSA0OTAuMjM2IDE5LjkxNEM0OTMuNzQyIDIyLjAzOSA0OTYuMDA0IDI2LjkxOCA0OTYgMzIuMzRMNDk1Ljk0NyA5NC45MzhaTTc2IDcyQzY5LjM3MyA3MiA2NCA3Ny4zNzUgNjQgODRTNjkuMzczIDk2IDc2IDk2Uzg4IDkwLjYyNSA4OCA4NFM4Mi42MjcgNzIgNzYgNzJaTTc2IDEyOEM2OS4zNzMgMTI4IDY0IDEzMy4zNzUgNjQgMTQwUzY5LjM3MyAxNTIgNzYgMTUyUzg4IDE0Ni42MjUgODggMTQwUzgyLjYyNyAxMjggNzYgMTI4Wk0xNDggNTZDMTQxLjM3MyA1NiAxMzYgNjEuMzc1IDEzNiA2OFMxNDEuMzczIDgwIDE0OCA4MFMxNjAgNzQuNjI1IDE2MCA2OFMxNTQuNjI3IDU2IDE0OCA1NlpNMTQ4IDExMkMxNDEuMzczIDExMiAxMzYgMTE3LjM3NSAxMzYgMTI0UzE0MS4zNzMgMTM2IDE0OCAxMzZTMTYwIDEzMC42MjUgMTYwIDEyNFMxNTQuNjI3IDExMiAxNDggMTEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FlagUsa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M498.529 6.23C491.717 2.098 484.258 0 476.367 0C469.73 0 463.008 1.465 456.928 4.238C415.164 23.301 380.898 32.18 349.092 32.18C320.131 32.18 297.332 24.848 273.195 17.086C247.5 8.836 220.957 0.316 185.211 0.312C157.084 0.312 119.732 3.289 32 38.836L16 45.32V8C16 3.582 12.418 0 8 0S0 3.582 0 8V504C0 508.406 3.594 512 8 512S16 508.406 16 504V398.219L22.508 395.32L32.002 391.094L36.682 388.941C56.305 379.82 115.812 352.164 180.844 352.164C217.687 352.164 248.002 359.879 280.096 368.047C310.82 375.863 342.586 383.945 379.4 383.945C414.861 383.945 451.486 376.391 491.365 360.848C503.732 356.043 511.738 344.352 511.75 331.07L512 32.352C512.008 21.281 506.846 11.273 498.529 6.23ZM16 62.582L38.008 53.664C123.072 19.199 158.594 16.313 185.209 16.313C193.303 16.313 200.826 16.805 208 17.625V169.336C199.016 168.492 189.736 168 180 168C110.49 168 47.328 195.797 16 209.797V62.582ZM495.75 331.055C495.744 337.691 491.746 343.535 485.557 345.941C447.557 360.75 412.832 367.945 379.4 367.945C344.588 367.945 313.809 360.113 284.041 352.539C250.945 344.117 219.684 336.164 180.844 336.164C112.264 336.164 50.342 364.949 29.994 374.406L25.494 376.477L16 380.703V311.27L21.016 309.063C50.828 295.75 112.891 268 180 268C217.438 268 248.578 275.594 281.859 283.688C314.313 291.594 347.875 299.781 387.172 299.781C421.789 299.781 457.518 293.016 495.793 279.836L495.75 331.055ZM495.807 262.984C457.215 276.844 421.564 283.781 387.172 283.781C349.797 283.781 317.188 275.844 285.328 268.062C251.406 259.812 219.344 252 180 252C110.49 252 47.328 279.797 16 293.797V227.27L21.016 225.063C50.828 211.75 112.891 184 180 184C217.438 184 248.578 191.594 281.859 199.688C314.313 207.594 347.875 215.781 387.172 215.781C421.811 215.781 457.561 209.008 495.863 195.813L495.807 262.984ZM495.877 178.961C457.258 192.832 421.586 199.781 387.172 199.781C349.797 199.781 317.188 191.844 285.328 184.063C264.932 179.102 245.037 174.523 224 171.484V103.906C243.611 106.836 262.488 110.977 281.859 115.688C314.313 123.594 347.875 131.781 387.172 131.781C421.832 131.781 457.605 125 495.934 111.789L495.877 178.961ZM495.947 94.938C457.299 108.828 421.607 115.781 387.172 115.781C349.797 115.781 317.188 107.844 285.328 100.063C264.98 95.113 245.01 90.734 224 87.727V20.273C239.516 23.312 253.764 27.652 268.297 32.316C292.553 40.117 317.635 48.18 349.092 48.18C383.275 48.18 419.646 38.844 463.566 18.797C467.523 16.992 472.07 16 476.367 16C481.361 16 485.896 17.281 490.236 19.914C493.742 22.039 496.004 26.918 496 32.34L495.947 94.938ZM76 72C69.373 72 64 77.375 64 84S69.373 96 76 96S88 90.625 88 84S82.627 72 76 72ZM76 128C69.373 128 64 133.375 64 140S69.373 152 76 152S88 146.625 88 140S82.627 128 76 128ZM148 56C141.373 56 136 61.375 136 68S141.373 80 148 80S160 74.625 160 68S154.627 56 148 56ZM148 112C141.373 112 136 117.375 136 124S141.373 136 148 136S160 130.625 160 124S154.627 112 148 112Z" />
        </Icon>
    </>
}