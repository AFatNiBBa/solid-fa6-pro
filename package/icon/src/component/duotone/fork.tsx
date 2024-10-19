
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fork` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=duotone fork}
 * @preview ![fork](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwOS42NDQgMTI0Ljk4MUw0NDguODQzIDIzMi4yNDhDNDI4LjY3MSAyNjMuMzY3IDM5NS45NzkgMjgzLjQ2NCAzNTkuMDY1IDI4Ny4zNzNDMzM3Ljk1NiAyODkuNTk3IDMxNy4zMjEgMjg1Ljc5MyAyOTguNDA1IDI3Ny43MDNMMjM0LjI5NSAyMTMuNTk3QzIyNi4yMDcgMTk0LjY4MiAyMjIuNDA0IDE3NC4wNTEgMjI0LjYyNiAxNTIuOTQ3QzIyOC41MzYgMTE2LjAzMSAyNDguNjMzIDgzLjMzOSAyODAuNjUgNjIuNjY1TDM4Ny4wMjggMi4zNzZDMzk0LjYyOSAtMS45NDQgNDA0LjI4IC0wLjM1MiA0MDkuNTM4IDYuOTgyQzQxNC44NDYgMTMuOTMzIDQxNC4xNyAyMy43MjggNDA3Ljk5NCAyOS45MDNMMjk2LjgxNyAxNDEuMDc2TDMxMC4zNTEgMTU0LjYwOUw0MzQuMDA1IDUzLjQ0OEM0NDAuOTUyIDQ3Ljc1NyA0NTEuMDYzIDQ4LjI2IDQ1Ny40MDggNTQuNjA3UzQ2NC4yNiA3MS4wNjEgNDU4LjU2NiA3OC4wMDhMMzU3LjM5OSAyMDEuNjU2TDM3MC45MzUgMjE1LjE4OUw0ODIuMTE0IDEwNC4wMTdDNDg4LjI5MSA5Ny44NDEgNDk4LjA4NiA5Ny4xNjMgNTA1LjAzNSAxMDIuNDcxQzUxMi4yOTggMTA3LjY1OSA1MTMuOTYyIDExNy4zOCA1MDkuNjQ0IDEyNC45ODFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5OC40MDUgMjc3LjcwM0w4Mi45NzMgNTAzLjc1MUM3OC4wNTkgNTA4LjkwOCA3MS4yNzIgNTExLjkgNjQuMTIyIDUxMS45OThDNTcuMDE4IDUxMi4wOTUgNTAuMTM1IDUwOS4yOTggNDUuMSA1MDQuMjYzTDcuNzM5IDQ2Ni45QzIuNzA0IDQ2MS44NjkgLTAuMDk1IDQ1NC45ODIgMC4wMDIgNDQ3Ljg4QzAuMSA0NDAuNzI4IDMuMDkyIDQzMy45NDMgOC4yNDkgNDI5LjAyOUwyMzQuMjk1IDIxMy41OTdMMjk4LjQwNSAyNzcuNzAzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Fork(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M509.644 124.981L448.843 232.248C428.671 263.367 395.979 283.464 359.065 287.373C337.956 289.597 317.321 285.793 298.405 277.703L234.295 213.597C226.207 194.682 222.404 174.051 224.626 152.947C228.536 116.031 248.633 83.339 280.65 62.665L387.028 2.376C394.629 -1.944 404.28 -0.352 409.538 6.982C414.846 13.933 414.17 23.728 407.994 29.903L296.817 141.076L310.351 154.609L434.005 53.448C440.952 47.757 451.063 48.26 457.408 54.607S464.26 71.061 458.566 78.008L357.399 201.656L370.935 215.189L482.114 104.017C488.291 97.841 498.086 97.163 505.035 102.471C512.298 107.659 513.962 117.38 509.644 124.981Z" />
            <path d="M298.405 277.703L82.973 503.751C78.059 508.908 71.272 511.9 64.122 511.998C57.018 512.095 50.135 509.298 45.1 504.263L7.739 466.9C2.704 461.869 -0.095 454.982 0.002 447.88C0.1 440.728 3.092 433.943 8.249 429.029L234.295 213.597L298.405 277.703Z" />
        </Icon>
    </>
}