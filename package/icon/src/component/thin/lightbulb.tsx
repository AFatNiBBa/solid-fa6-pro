
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=thin lightbulb}
 * @preview ![lightbulb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuNzM3IDQxNS45ODVIMTI4LjI2M0MxMTkuNDUgNDE1Ljk4NSAxMTIuMzA5IDQyMy4xNjUgMTEyLjMyMiA0MzIuMDFMMTEyLjM1OSA0NTQuMzI3QzExMi4zNjkgNDYwLjY1MiAxMTQuMjM3IDQ2Ni44MzEgMTE3LjcyOCA0NzIuMDk3TDEzNC43MTQgNDk3LjcyQzEzOS45MjEgNTA1LjU3NCAxNTEuODcyIDUxMiAxNjEuMjcxIDUxMkgyMjIuNzI3QzIzMi4xMjggNTEyIDI0NC4wNzkgNTA1LjU3MiAyNDkuMjg2IDQ5Ny43MTlMMjY2LjMxNyA0NzIuMDMxQzI2OS4yMzUgNDY3LjYyNiAyNzEuNjMzIDQ1OS42OTYgMjcxLjY0MSA0NTQuNDA3TDI3MS42NzggNDMyLjAxQzI3MS42OTEgNDIzLjE2NSAyNjQuNTUgNDE1Ljk4NSAyNTUuNzM3IDQxNS45ODVaTTI1NS43IDQ1NC4zODJDMjU1LjY5NiA0NTYuNTMgMjU0LjIzMyA0NjEuMzc2IDI1My4wNDYgNDYzLjE2N0wyMzYuMDE2IDQ4OC44NTNDMjMzLjc1OCA0OTIuMjU5IDIyNi44MDQgNDk2IDIyMi43MjcgNDk2SDE2MS4yNzFDMTU3LjE5NiA0OTYgMTUwLjI0MiA0OTIuMjYxIDE0Ny45ODQgNDg4Ljg1N0wxMzAuOTk5IDQ2My4yMzJDMTI5LjIzOCA0NjAuNTc3IDEyOC4zMDYgNDU3LjQ4OSAxMjguMyA0NTQuM0wxMjguMjYzIDQzMS45ODVIMjU1LjczN0wyNTUuNyA0NTQuMzgyWk0zMTYuMjU1IDUxLjUzMkMyODMuMDM2IDE4LjI4MiAyMzguOTE5IDAgMTkyLjAzMSAwQzE5MS44NDQgMCAxOTEuNjI2IDAgMTkxLjQ0IDBDOTQuNzA3IDAuMjk3IDE2IDc5LjU0OCAxNiAxNzYuNjU5QzE2IDIxOS40NDEgMzEuNDc0IDI2MC43MjMgNTkuNTg3IDI5Mi44OTVDNzMuMSAzMDguMzQ4IDk4LjEzMSAzNDQuOTkgMTA3LjU5NiAzNzYuOTQzQzEwOC4wOTQgMzgxLjMxOCAxMTIuMDE3IDM4NC40NDMgMTE2LjQzOCAzODMuOTQzQzEyMC43OTcgMzgzLjQyOCAxMjMuOTQxIDM3OS40NTkgMTIzLjQxMiAzNzUuMDY4TDEyMy4wMzggMzcyLjk3NEMxMTIuNjcxIDMzNy45OSA4NS45NTggMjk4LjgwMSA3MS41NDMgMjgyLjMzMkM0Ni4wMTMgMjUzLjA5OCAzMS45NDEgMjE1LjU2NiAzMS45NDEgMTc2LjY1OUMzMS45NDEgODYuODQ1IDEwMi4wMjMgMTYuMjY2IDE5MS41MDIgMTZDMTkxLjY1OCAxNiAxOTEuODQ0IDE2IDE5Mi4wMzEgMTZDMjM0LjY4NSAxNiAyNzQuNzg1IDMyLjYyNSAzMDQuOTg1IDYyLjg2QzMzNS4zNDEgOTMuMjM2IDM1Mi4wNTkgMTMzLjY0MyAzNTIuMDU5IDE3Ni42NTlDMzUyLjA1OSAyMTUuNTY2IDMzNy45ODcgMjUzLjA5OCAzMTIuNDU3IDI4Mi4zMzJDMjk4LjA0MiAyOTguODAxIDI3MS4zMjkgMzM3Ljk5IDI2MC42NSAzNzQuNDlDMjYwLjY1IDM3NC41MjEgMjYwLjU4OCAzNzUuMDUzIDI2MC41ODggMzc1LjA2OEMyNjAuMDU5IDM3OS40NTkgMjYzLjExIDM4My43NCAyNjcuNDY5IDM4NC4yNTZDMjY3LjgxMSAzODQuMjg3IDI2OC4xNTQgMzg0LjMwMyAyNjguNDk2IDM4NC4zMDNDMjcyLjQxOSAzODQuMzAzIDI3NS43NSAzODEuNTg0IDI3Ni4yMTcgMzc3LjUzN0MyODUuODY5IDM0NC45OSAzMTAuOSAzMDguMzQ4IDMyNC40MTMgMjkyLjg5NUMzNTIuNTI2IDI2MC43MjMgMzY4IDIxOS40NDEgMzY4IDE3Ni42NTlDMzY4IDEyOS4zNjEgMzQ5LjYzMSA4NC45MjMgMzE2LjI1NSA1MS41MzJaTTE5OS45NyA3Mi4wMDFDMTk5Ljk3IDY3LjU3OSAxOTYuMzkgNjQuMDAxIDE5MiA2NC4wMDFDMTI2LjA5IDY0LjAwMSA3Mi40NDYgMTE3LjgzIDcyLjQ0NiAxODQuMDAzQzcyLjQ0NiAxODguNDI1IDc2LjAyNiAxOTIuMDAzIDgwLjQxNiAxOTIuMDAzUzg4LjM4NiAxODguNDI1IDg4LjM4NiAxODQuMDAzQzg4LjM4NiAxMjYuNjU4IDEzNC44NjkgODAuMDAxIDE5MiA4MC4wMDFDMTk2LjM5IDgwLjAwMSAxOTkuOTcgNzYuNDIzIDE5OS45NyA3Mi4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Lightbulb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M255.737 415.985H128.263C119.45 415.985 112.309 423.165 112.322 432.01L112.359 454.327C112.369 460.652 114.237 466.831 117.728 472.097L134.714 497.72C139.921 505.574 151.872 512 161.271 512H222.727C232.128 512 244.079 505.572 249.286 497.719L266.317 472.031C269.235 467.626 271.633 459.696 271.641 454.407L271.678 432.01C271.691 423.165 264.55 415.985 255.737 415.985ZM255.7 454.382C255.696 456.53 254.233 461.376 253.046 463.167L236.016 488.853C233.758 492.259 226.804 496 222.727 496H161.271C157.196 496 150.242 492.261 147.984 488.857L130.999 463.232C129.238 460.577 128.306 457.489 128.3 454.3L128.263 431.985H255.737L255.7 454.382ZM316.255 51.532C283.036 18.282 238.919 0 192.031 0C191.844 0 191.626 0 191.44 0C94.707 0.297 16 79.548 16 176.659C16 219.441 31.474 260.723 59.587 292.895C73.1 308.348 98.131 344.99 107.596 376.943C108.094 381.318 112.017 384.443 116.438 383.943C120.797 383.428 123.941 379.459 123.412 375.068L123.038 372.974C112.671 337.99 85.958 298.801 71.543 282.332C46.013 253.098 31.941 215.566 31.941 176.659C31.941 86.845 102.023 16.266 191.502 16C191.658 16 191.844 16 192.031 16C234.685 16 274.785 32.625 304.985 62.86C335.341 93.236 352.059 133.643 352.059 176.659C352.059 215.566 337.987 253.098 312.457 282.332C298.042 298.801 271.329 337.99 260.65 374.49C260.65 374.521 260.588 375.053 260.588 375.068C260.059 379.459 263.11 383.74 267.469 384.256C267.811 384.287 268.154 384.303 268.496 384.303C272.419 384.303 275.75 381.584 276.217 377.537C285.869 344.99 310.9 308.348 324.413 292.895C352.526 260.723 368 219.441 368 176.659C368 129.361 349.631 84.923 316.255 51.532ZM199.97 72.001C199.97 67.579 196.39 64.001 192 64.001C126.09 64.001 72.446 117.83 72.446 184.003C72.446 188.425 76.026 192.003 80.416 192.003S88.386 188.425 88.386 184.003C88.386 126.658 134.869 80.001 192 80.001C196.39 80.001 199.97 76.423 199.97 72.001Z" />
        </Icon>
    </>
}