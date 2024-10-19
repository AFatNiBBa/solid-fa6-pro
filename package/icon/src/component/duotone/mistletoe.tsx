
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mistletoe` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=duotone mistletoe}
 * @preview ![mistletoe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU1NC4wOTcgMzk0LjIxOUM1MjAuNzE5IDQyNy40NzcgNDYxLjM0IDQyMi4xMDIgNDIxLjMzNiAzODIuMDk0QzM5NS4zMzQgMzU2LjA4NiAzODIuNzA3IDI5Mi40NDUgMzc3LjIwNyAyNTEuMTg4TDMxMS45NTEgMTg1LjkyMlYyODIuMzJDMzQwLjMyOCAzMTQuOTUzIDM4My45NTcgMzcxLjQ2NSAzODMuOTU3IDQwOS42MDJDMzgzLjk1NyA0NjYuMjM4IDM0MC45NTMgNTEyIDI4Ny45NDkgNTEyQzIzNC45NDMgNTEyIDE5MS45MzkgNDY2LjIzOCAxOTEuOTM5IDQwOS42MDJDMTkxLjkzOSA0MDAuOTczIDE5NC40MzkgMzkxLjM0NCAxOTguMTg5IDM4MS40NjlDMjEyLjM2NyAzODUuMjQ4IDIyOC4xMiAzODUuODUzIDI0Ny40NzkgMzc1LjI4NkMyNjkuOTQ0IDM2My4wMjIgMjg2LjY1NiAzNDAuOTE5IDI4Ny44NjggMzE1LjM1M0MyODguOTM1IDI5Mi44NjUgMjc5LjM1MiAyNzIuNTE3IDI2My45NDUgMjU4LjY4N1YxODUuNzk3TDE5OC42ODkgMjUxLjA2MkMxOTcuNjg5IDI1OS42ODcgMTk2LjA2NCAyNjkuMzE2IDE5NC4xODkgMjc5LjMyQzE5NC4yNDggMjc5LjI4MSAxOTQuMzE4IDI3OS4yNTggMTk0LjM3OSAyNzkuMjE5QzE4My41NjQgMjg2LjM4MyAxNzYgMjk4LjA1OSAxNzYgMzEyQzE3NiAzMTkuNjA5IDE3OC42OTMgMzI2LjMyIDE4Mi4zODEgMzMyLjM3NUMxODIuMTAzIDMzMS45MTQgMTgxLjY5OSAzMzEuNTQ3IDE4MS40MzkgMzMxLjA3OEMxNzQuNjg3IDM1MS44MzYgMTY1LjkzNyAzNzAuNzE1IDE1NC41NiAzODIuMDk0QzExNC42ODMgNDIyLjEwMiA1NS4xNzggNDI3LjQ3NyAyMS43OTkgMzk0LjIxOUMtMTEuNDUzIDM2MC44MzYgLTYuMDc4IDMwMS40NDkgMzMuOTI2IDI2MS40MzhDNTkuOTI4IDIzNS40MyAxMjMuNTU4IDIyMi44MDUgMTY0LjgxMiAyMTcuMzA1TDI2My45NDUgMTE4LjE1NlYyNC4wMDRDMjYzLjk0NSAxMC44MDIgMjc0Ljc0NyAwIDI4Ny45NDkgMEgyODcuOTQ5QzMwMS4xNSAwIDMxMS45NTEgMTAuODAxIDMxMS45NTEgMjQuMDAyVjMyLjI1OEMzMDMuNjk5IDQ0LjM4NyAyOTguNjk5IDU4Ljg5MSAyOTguNjk5IDc0Ljc2NkMyOTguNjk5IDkwLjUyMyAzMDMuNTc0IDEwNS4wMjMgMzExLjk1MSAxMTcuMTU2TDQxMS4yMDkgMjE3LjMwNUM0NTIuNDYzIDIyMi44MDUgNTE2LjA5NCAyMzUuNDMgNTQyLjA5NiAyNjEuNDM4QzU4Mi4wOTkgMzAxLjQ0OSA1ODcuNDc0IDM2MC44MzYgNTU0LjA5NyAzOTQuMjE5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNzIgMzJDMzQ3LjY5OSAzMiAzMjggNTEuNjk5IDMyOCA3NlMzNDcuNjk5IDEyMCAzNzIgMTIwUzQxNiAxMDAuMzAxIDQxNiA3NlMzOTYuMzAxIDMyIDM3MiAzMlpNMjE2IDI3MkMxOTMuOTA4IDI3MiAxNzYgMjg5LjkwNiAxNzYgMzEyUzE5My45MDggMzUyIDIxNiAzNTJTMjU2IDMzNC4wOTQgMjU2IDMxMlMyMzguMDkyIDI3MiAyMTYgMjcyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mistletoe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M554.097 394.219C520.719 427.477 461.34 422.102 421.336 382.094C395.334 356.086 382.707 292.445 377.207 251.188L311.951 185.922V282.32C340.328 314.953 383.957 371.465 383.957 409.602C383.957 466.238 340.953 512 287.949 512C234.943 512 191.939 466.238 191.939 409.602C191.939 400.973 194.439 391.344 198.189 381.469C212.367 385.248 228.12 385.853 247.479 375.286C269.944 363.022 286.656 340.919 287.868 315.353C288.935 292.865 279.352 272.517 263.945 258.687V185.797L198.689 251.062C197.689 259.687 196.064 269.316 194.189 279.32C194.248 279.281 194.318 279.258 194.379 279.219C183.564 286.383 176 298.059 176 312C176 319.609 178.693 326.32 182.381 332.375C182.103 331.914 181.699 331.547 181.439 331.078C174.687 351.836 165.937 370.715 154.56 382.094C114.683 422.102 55.178 427.477 21.799 394.219C-11.453 360.836 -6.078 301.449 33.926 261.438C59.928 235.43 123.558 222.805 164.812 217.305L263.945 118.156V24.004C263.945 10.802 274.747 0 287.949 0H287.949C301.15 0 311.951 10.801 311.951 24.002V32.258C303.699 44.387 298.699 58.891 298.699 74.766C298.699 90.523 303.574 105.023 311.951 117.156L411.209 217.305C452.463 222.805 516.094 235.43 542.096 261.438C582.099 301.449 587.474 360.836 554.097 394.219Z" />
            <path d="M372 32C347.699 32 328 51.699 328 76S347.699 120 372 120S416 100.301 416 76S396.301 32 372 32ZM216 272C193.908 272 176 289.906 176 312S193.908 352 216 352S256 334.094 256 312S238.092 272 216 272Z" />
        </Icon>
    </>
}