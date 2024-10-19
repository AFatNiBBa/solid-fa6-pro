
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-bump` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-bump?s=light car-bump}
 * @preview ![car-bump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05Ni42NTMgMjk3Ljk2NUM4NC41NzcgMzAzLjQzIDc5LjIxNyAzMTcuNjUyIDg0LjY4MiAzMjkuNzI5QzkwLjE0OSAzNDEuODA1IDEwNC4zNzIgMzQ3LjE2NiAxMTYuNDQ4IDM0MS42OTlDMTI4LjUyMiAzMzYuMjM0IDEzMy44ODMgMzIyLjAxMiAxMjguNDE2IDMwOS45MzZDMTIyLjk1MiAyOTcuODU5IDEwOC43MjkgMjkyLjUgOTYuNjUzIDI5Ny45NjVaTTM3My42NDcgMTcyLjYwOUMzNjEuNTcxIDE3OC4wNzQgMzU2LjIxMSAxOTIuMjk3IDM2MS42NzYgMjA0LjM3MUMzNjcuMTM5IDIxNi40NDkgMzgxLjM2NCAyMjEuODA5IDM5My40NCAyMTYuMzQ0UzQxMC44NzUgMTk2LjY1NiA0MDUuNDExIDE4NC41NzhDMzk5Ljk0NCAxNzIuNTA0IDM4NS43MjMgMTY3LjE0NSAzNzMuNjQ3IDE3Mi42MDlaTTU3NS42MzkgNDkyLjc0OEM1NjUuMDEyIDQ0MC44NjcgNTE4LjEzMSA0MDMuMjM4IDQ2NC4zNzUgNDAzLjIzOEM0MTAuNDkzIDQwMy4yMzggMzYzLjczNyA0NDAuODY3IDM1Mi45ODUgNDkyLjc0OEMzNTEuMjM1IDUwMS4zNzMgMzU2LjczNyA1MDkuODc1IDM2NS4zNjIgNTExLjYyNUMzNzMuODY0IDUxMy4zNzUgMzgyLjQ4OSA1MDcuODc1IDM4NC4zNjQgNDk5LjI0OEMzOTEuOTkxIDQ2Mi4yNDQgNDI1LjYyIDQzNS4yNDIgNDY0LjM3NSA0MzUuMjQyQzUwMy4wMDQgNDM1LjI0MiA1MzYuNjM1IDQ2Mi4yNDQgNTQ0LjM4NSA0OTkuMjQ4QzU0NS44ODUgNTA2Ljc0OCA1NTIuNjM3IDUxMiA1NjAuMDEyIDUxMkM1NjEuMTM3IDUxMiA1NjIuMTM3IDUxMS44NzUgNTYzLjI2MiA1MTEuNjI1QzU3MS44ODkgNTA5Ljg3NSA1NzcuNTE0IDUwMS4zNzMgNTc1LjYzOSA0OTIuNzQ4Wk0xMTkuNTg4IDQ0NS42Nkw0NjkuNDczIDI4Ny4zMThMNDg5LjI2NiAzMzEuMDUzQzQ5MS45NDQgMzM2Ljk2MyA0OTcuNzYyIDM0MC40NTkgNTAzLjg1NCAzNDAuNDU5QzUwNi4wNjEgMzQwLjQ1OSA1MDguMzAzIDM0MCA1MTAuNDQ0IDMzOS4wMzFDNTE4LjQ5NSAzMzUuMzg5IDUyMi4wNjkgMzI1LjkwNiA1MTguNDI0IDMxNy44NTVMNDk0Ljk2OSAyNjYuMDMzQzUwNy43NTIgMjQ4LjA3OCA1MTEuMTM5IDIyNC4xNDMgNTAxLjM5NSAyMDIuNjEzTDQ3NS4wMDQgMTQ0LjMwMUM0NTguOTU0IDEwOC44MzggNDI0LjAyOCA4Ny44NTUgMzg3LjQ3NyA4Ny44NTVDMzgzLjk2OSA4Ny44NTUgMzgwLjQ1IDg4LjU3OCAzNzYuOTMgODguOTY5TDMyNS40MzggMjguMjM0QzMwMi40MzQgMS4xMDUgMjYzLjgwMyAtNy42MTMgMjMxLjM5MyA3LjA3Nkw1Ni45NjUgODYuMDJDMjQuNjE2IDEwMC42NDYgNS42MTQgMTM1LjQzMiAxMC44MDMgMTcwLjU5MkwyMy4wOTYgMjUzLjc0NEMtMC4yMjYgMjgxLjE2NCAtNy4zMzcgMzIwLjQ1NyA4LjQ5MSAzNTUuNDI4TDM0Ljg4MSA0MTMuNzRDNDQuNTkyIDQzNS4xOTUgNjQuNzcyIDQ0OC4xMTEgODYuNjE2IDQ1MC40MjZMMTEwLjIyMyA1MDIuNTlDMTEyLjg5OSA1MDguNTA0IDExOC43MjEgNTEyIDEyNC44MTMgNTEyQzEyNy4wMTggNTEyIDEyOS4yNiA1MTEuNTQxIDEzMS40MDEgNTEwLjU3MkMxMzkuNDUyIDUwNi45MjggMTQzLjAyNCA0OTcuNDQ3IDEzOS4zODEgNDg5LjM5NkwxMTkuNTg4IDQ0NS42NlpNNzAuMTU1IDExNS4xNDhMMjQ0LjU4MiAzNi4yMDNDMjY0LjAyMiAyNy40MjIgMjg3LjI0NSAzMi42MDkgMzAxLjAyOCA0OC45MjRMMzQzLjE1OSA5OC41ODZMNTYuMzc1IDIyOC4zNzNDNTQuODIxIDIyOS4wNzYgNTMuNTQzIDIzMC4xMDkgNTIuMDQ1IDIzMC44ODNMNDIuNDYzIDE2NS45MDJDMzkuMzM2IDE0NC44MDcgNTAuNzQ1IDEyMy45NjEgNzAuMTU1IDExNS4xNDhaTTEwNi4zOTMgNDE2LjUwNkMxMDIuMTk2IDQxOC40MDQgOTcuNzY4IDQxOS4zNjcgOTMuMjM1IDQxOS4zNjdDODAuNjc0IDQxOS4zNjcgNjkuMjEzIDQxMS45OCA2NC4wNCA0MDAuNTQ1TDM3LjY0NyAzNDIuMjNDMzAuNTk4IDMyNi42NTYgMzAuMDM4IDMwOS4yNjggMzYuMDY1IDI5My4yN0M0Mi4wOTYgMjc3LjI3MSA1My45OTMgMjY0LjU3OCA2OS41NjkgMjU3LjUyOUwzNjEuMTQzIDEyNS41NzRDMzY5LjUyNCAxMjEuNzgxIDM3OC4zODUgMTE5Ljg1NyAzODcuNDc3IDExOS44NTdDNDEyLjU4NiAxMTkuODU3IDQzNS41IDEzNC42MzMgNDQ1Ljg0OCAxNTcuNDk2TDQ3Mi4yMzkgMjE1LjgxMUM0NzUuNzY0IDIyMy41OTggNDc2LjA0NSAyMzIuMjkzIDQ3My4wMjggMjQwLjI5MUM0NzAuMDE0IDI0OC4yOTEgNDY0LjA2NSAyNTQuNjM3IDQ1Ni4yNzggMjU4LjE2MkwxMDYuMzkzIDQxNi41MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CarBump(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96.653 297.965C84.577 303.43 79.217 317.652 84.682 329.729C90.149 341.805 104.372 347.166 116.448 341.699C128.522 336.234 133.883 322.012 128.416 309.936C122.952 297.859 108.729 292.5 96.653 297.965ZM373.647 172.609C361.571 178.074 356.211 192.297 361.676 204.371C367.139 216.449 381.364 221.809 393.44 216.344S410.875 196.656 405.411 184.578C399.944 172.504 385.723 167.145 373.647 172.609ZM575.639 492.748C565.012 440.867 518.131 403.238 464.375 403.238C410.493 403.238 363.737 440.867 352.985 492.748C351.235 501.373 356.737 509.875 365.362 511.625C373.864 513.375 382.489 507.875 384.364 499.248C391.991 462.244 425.62 435.242 464.375 435.242C503.004 435.242 536.635 462.244 544.385 499.248C545.885 506.748 552.637 512 560.012 512C561.137 512 562.137 511.875 563.262 511.625C571.889 509.875 577.514 501.373 575.639 492.748ZM119.588 445.66L469.473 287.318L489.266 331.053C491.944 336.963 497.762 340.459 503.854 340.459C506.061 340.459 508.303 340 510.444 339.031C518.495 335.389 522.069 325.906 518.424 317.855L494.969 266.033C507.752 248.078 511.139 224.143 501.395 202.613L475.004 144.301C458.954 108.838 424.028 87.855 387.477 87.855C383.969 87.855 380.45 88.578 376.93 88.969L325.438 28.234C302.434 1.105 263.803 -7.613 231.393 7.076L56.965 86.02C24.616 100.646 5.614 135.432 10.803 170.592L23.096 253.744C-0.226 281.164 -7.337 320.457 8.491 355.428L34.881 413.74C44.592 435.195 64.772 448.111 86.616 450.426L110.223 502.59C112.899 508.504 118.721 512 124.813 512C127.018 512 129.26 511.541 131.401 510.572C139.452 506.928 143.024 497.447 139.381 489.396L119.588 445.66ZM70.155 115.148L244.582 36.203C264.022 27.422 287.245 32.609 301.028 48.924L343.159 98.586L56.375 228.373C54.821 229.076 53.543 230.109 52.045 230.883L42.463 165.902C39.336 144.807 50.745 123.961 70.155 115.148ZM106.393 416.506C102.196 418.404 97.768 419.367 93.235 419.367C80.674 419.367 69.213 411.98 64.04 400.545L37.647 342.23C30.598 326.656 30.038 309.268 36.065 293.27C42.096 277.271 53.993 264.578 69.569 257.529L361.143 125.574C369.524 121.781 378.385 119.857 387.477 119.857C412.586 119.857 435.5 134.633 445.848 157.496L472.239 215.811C475.764 223.598 476.045 232.293 473.028 240.291C470.014 248.291 464.065 254.637 456.278 258.162L106.393 416.506Z" />
        </Icon>
    </>
}