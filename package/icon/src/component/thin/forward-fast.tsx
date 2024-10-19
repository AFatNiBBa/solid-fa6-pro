
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `forward-fast` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=thin forward-fast}
 * @preview ![forward-fast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgNjQuMDA4QzQ5OS41NzggNjQuMDA4IDQ5NiA2Ny42MDIgNDk2IDcyLjAwOFY0NDBDNDk2IDQ0NC40MDYgNDk5LjU3OCA0NDggNTA0IDQ0OFM1MTIgNDQ0LjQwNiA1MTIgNDQwVjcyLjAwOEM1MTIgNjcuNjAyIDUwOC40MjIgNjQuMDA4IDUwNCA2NC4wMDhaTTI3MC4zOTEgNzMuMDA4QzI1OS4wNzggNjMuNDE0IDI0My43MDMgNjEuMjg5IDIzMC4yMDMgNjcuNTdDMjE2LjUgNzMuOTE0IDIwNy45ODQgODcuMzUxIDIwNy45ODQgMTAyLjY5NVY0MDkuMzEzQzIwNy45ODQgNDI0LjY1NyAyMTYuNSA0MzguMDk0IDIzMC4yMDMgNDQ0LjQzOEMyMzUuMzQ0IDQ0Ni44NDQgMjQwLjc2NiA0NDggMjQ2LjE0MSA0NDhDMjU0Ljg0NCA0NDggMjYzLjM5MSA0NDQuOTM4IDI3MC4zOTEgNDM5TDQ1MC41IDI4NS42NkM0NTkuMDYyIDI3OC4yNTQgNDYzLjk4NCAyNjcuNDQxIDQ2My45ODQgMjU2LjAwNFM0NTkuMDYyIDIzMy43NTQgNDUwLjQ1MyAyMjYuMzE3TDI3MC4zOTEgNzMuMDA4Wk00NDAuMDc4IDI3My41MDRMMjYwLjAzMSA0MjYuODEzQzI1My40MzggNDMyLjQwNyAyNDQuODI4IDQzMy42MjUgMjM2LjkyMiA0MjkuOTM4QzIyOC44MTIgNDI2LjE4OCAyMjMuOTg0IDQxOC40NjkgMjIzLjk4NCA0MDkuMzEzVjEwMi42OTVDMjIzLjk4NCA5My41MzkgMjI4LjgxMiA4NS44MiAyMzYuOTIyIDgyLjA3QzIzOS45NTMgODAuNjY0IDI0My4wOTQgNzkuOTc2IDI0Ni4xODggNzkuOTc2QzI1MS4xNDEgNzkuOTc2IDI1NS45NjkgODEuNzU4IDI2MC4wMzEgODUuMTk1TDQ0MC4wMzEgMjM4LjQ3M0M0NDUuMDk0IDI0Mi44MTcgNDQ3Ljk4NCAyNDkuMjIzIDQ0Ny45ODQgMjU2LjAwNEM0NDcuOTg0IDI2Mi43ODUgNDQ1LjA5NCAyNjkuMTkxIDQ0MC4wNzggMjczLjUwNFpNMjguOTM4IDgyLjA3QzM2Ljc5NyA3OC40MTQgNDUuNDIyIDc5LjYwMSA1Mi4wNDcgODUuMTk1TDE3MC44MTMgMTg2LjMxOEMxNzQuMTU2IDE4OS4xNjIgMTc5LjIzNCAxODguNzU1IDE4Mi4wOTQgMTg1LjQxMkMxODQuOTUzIDE4Mi4wMzcgMTg0LjU0NyAxNzcuMDA2IDE4MS4xODggMTc0LjEzMUw2Mi40MDYgNzMuMDA4QzUxLjA5NCA2My40MTQgMzUuNjg4IDYxLjI4OSAyMi4yMTkgNjcuNTdDOC41MTYgNzMuOTE0IDAgODcuMzUxIDAgMTAyLjY5NVY0MDkuMzEzQzAgNDI0LjY1NyA4LjUxNiA0MzguMDk0IDIyLjIxOSA0NDQuNDM4QzI3LjM1OSA0NDYuODQ0IDMyLjc4MSA0NDggMzguMTU2IDQ0OEM0Ni44NTkgNDQ4IDU1LjQyMiA0NDQuOTM4IDYyLjQyMiA0MzlMMTgxLjE4OCAzMzcuODc3QzE4NC41NDcgMzM1LjAwMiAxODQuOTUzIDMyOS45NzEgMTgyLjA5NCAzMjYuNTk2QzE3OS4yMzQgMzIzLjI1MyAxNzQuMTU2IDMyMi44NDYgMTcwLjgxMiAzMjUuNjlMNTIuMDYyIDQyNi44MTNDNDUuNDY5IDQzMi40MDcgMzYuODI4IDQzMy42MjUgMjguOTM4IDQyOS45MzhDMjAuODI4IDQyNi4xODggMTYgNDE4LjQ2OSAxNiA0MDkuMzEzVjEwMi42OTVDMTYgOTMuNTM5IDIwLjgyOCA4NS44MiAyOC45MzggODIuMDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ForwardFast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 64.008C499.578 64.008 496 67.602 496 72.008V440C496 444.406 499.578 448 504 448S512 444.406 512 440V72.008C512 67.602 508.422 64.008 504 64.008ZM270.391 73.008C259.078 63.414 243.703 61.289 230.203 67.57C216.5 73.914 207.984 87.351 207.984 102.695V409.313C207.984 424.657 216.5 438.094 230.203 444.438C235.344 446.844 240.766 448 246.141 448C254.844 448 263.391 444.938 270.391 439L450.5 285.66C459.062 278.254 463.984 267.441 463.984 256.004S459.062 233.754 450.453 226.317L270.391 73.008ZM440.078 273.504L260.031 426.813C253.438 432.407 244.828 433.625 236.922 429.938C228.812 426.188 223.984 418.469 223.984 409.313V102.695C223.984 93.539 228.812 85.82 236.922 82.07C239.953 80.664 243.094 79.976 246.188 79.976C251.141 79.976 255.969 81.758 260.031 85.195L440.031 238.473C445.094 242.817 447.984 249.223 447.984 256.004C447.984 262.785 445.094 269.191 440.078 273.504ZM28.938 82.07C36.797 78.414 45.422 79.601 52.047 85.195L170.813 186.318C174.156 189.162 179.234 188.755 182.094 185.412C184.953 182.037 184.547 177.006 181.188 174.131L62.406 73.008C51.094 63.414 35.688 61.289 22.219 67.57C8.516 73.914 0 87.351 0 102.695V409.313C0 424.657 8.516 438.094 22.219 444.438C27.359 446.844 32.781 448 38.156 448C46.859 448 55.422 444.938 62.422 439L181.188 337.877C184.547 335.002 184.953 329.971 182.094 326.596C179.234 323.253 174.156 322.846 170.812 325.69L52.062 426.813C45.469 432.407 36.828 433.625 28.938 429.938C20.828 426.188 16 418.469 16 409.313V102.695C16 93.539 20.828 85.82 28.938 82.07Z" />
        </Icon>
    </>
}