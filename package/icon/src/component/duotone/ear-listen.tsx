
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ear-listen` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear-listen?s=duotone ear-listen}
 * @preview ![ear-listen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MC4xNjIgMzIwLjAwMkMxNDIuNTIgMzIwLjAwMiAxMjguMTMxIDMzNC4zNzUgMTI4LjEzMSAzNTJTMTQyLjUyIDM4NCAxNjAuMTYyIDM4NFMxOTIuMTk1IDM2OS42MjUgMTkyLjE5NSAzNTJTMTc3LjgwNSAzMjAuMDAyIDE2MC4xNjIgMzIwLjAwMlpNODYuNjU2IDM2MS4zNjlDNzQuMTUgMzQ4Ljg3NyA1My44ODkgMzQ4Ljg3NyA0MS4zODMgMzYxLjM2OUMyOC44NzMgMzczLjg2NyAyOC44NzMgMzk0LjE0NSA0MS4zODMgNDA2LjY0M0wxMDUuMzQ0IDQ3MC42MjlDMTE3Ljg1IDQ4My4xMjMgMTM4LjExMSA0ODMuMTIzIDE1MC42MTcgNDcwLjYzMVY0NzAuNjI5QzE2My4xMjcgNDU4LjEzMSAxNjMuMTI3IDQzNy44NTUgMTUwLjYxNyA0MjUuMzU3TDg2LjY1NiAzNjEuMzY5Wk0zMi4wMzMgNDQ4QzE0LjM4OSA0NDggMCA0NjIuMzc1IDAgNDgwUzE0LjM4OSA1MTIgMzIuMDMzIDUxMkM0OS42NzYgNTEyIDY0LjA2NCA0OTcuNjI1IDY0LjA2NCA0ODBTNDkuNjc2IDQ0OCAzMi4wMzMgNDQ4Wk0zOTcuNzY2IDMuMTI1QzM4MS44NTkgLTQuNDY5IDM2Mi43MTkgMi4yODEgMzU1LjEwOSAxOC4yMTlDMzQ3LjUxNiAzNC4xODcgMzU0LjI4MSA1My4yODEgMzcwLjIzNCA2MC44NzVDNDE3LjQ2OSA4My40MDYgNDQ4IDEzNC44NzUgNDQ4IDE5MkM0NDggMjA5LjY4OCA0NjIuMzI4IDIyNCA0ODAgMjI0UzUxMiAyMDkuNjg4IDUxMiAxOTJDNTEyIDExMC4zNDQgNDY3LjE1NiAzNi4xODggMzk3Ljc2NiAzLjEyNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjg3LjkyNCA3MC4zMTRDMTc3LjA1NCA0MC45MzggNzYuMTkxIDExNy44NDQgNjUuMTcyIDIyMS4yMDNDNjMuMTc0IDIzOS45NDMgNzguOTAyIDI1NS45OTYgOTcuNzQ4IDI1NS45OTZDMTE0LjM1MyAyNTUuOTk2IDEyNi45OTQgMjQyLjkzIDEyOC45OTIgMjI2LjQ0M0MxMzUuOTI2IDE2OS4yMTkgMTg2LjE5OSAxMjUuMTQ4IDI0NS45MDQgMTI4LjEzOUMzMTcuNjExIDEzMS43MzIgMzYzLjg1NSAyMDQuOTYxIDM0OC4zNzEgMjc1LjA2OEMzNDEuODIgMzA0LjcxOSAzMjYuOTY4IDMzMS45NDEgMzA0Ljk4OCAzNTMuOTM0TDI4OC4xNzYgMzcwLjc0NlYzODMuOTk2QzI4OC4xNzYgNDE1LjM5NiAyNjUuNDYxIDQ0MS41NzggMjM1LjU5MyA0NDYuOTc1QzIyMC42MTkgNDQ5LjY4MiAyMDguMTc2IDQ2My4zNDggMjA4LjE3NiA0NzguNTY2QzIwOC4xNzYgNDk4LjM0OCAyMjYuMDUyIDUxMy41MDIgMjQ1LjU1NiA1MTAuMjA5QzMwMS40NzIgNTAwLjc2NiAzNDUuMTgzIDQ1NC45MyAzNTEuNDEgMzk3Ljk5NkMzOTEuNTE1IDM1Ny4zMiA0MTQuMzAyIDMwNC4wNDcgNDE2LjA2NCAyNDcuMTQ1QzQxOC41NjYgMTY2LjQxNiAzNjUuOTk4IDkxLjAwNCAyODcuOTI0IDcwLjMxNFpNMjQwLjE3NiAyMDBDMjYyLjIzOCAyMDAgMjgwLjE3NiAyMTcuOTM4IDI4MC4xNzYgMjQwQzI4MC4xNzYgMjUzLjI1IDI5MC45MjYgMjY0IDMwNC4xNzYgMjY0UzMyOC4xNzYgMjUzLjI1IDMyOC4xNzYgMjQwQzMyOC4xNzYgMTkxLjQ2OSAyODguNzA3IDE1MiAyNDAuMTc2IDE1MlMxNTIuMTc2IDE5MS40NjkgMTUyLjE3NiAyNDBDMTUyLjE3NiAyNTMuMjUgMTYyLjkyNiAyNjQgMTc2LjE3NiAyNjRTMjAwLjE3NiAyNTMuMjUgMjAwLjE3NiAyNDBDMjAwLjE3NiAyMTcuOTM4IDIxOC4xMTMgMjAwIDI0MC4xNzYgMjAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EarListen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M160.162 320.002C142.52 320.002 128.131 334.375 128.131 352S142.52 384 160.162 384S192.195 369.625 192.195 352S177.805 320.002 160.162 320.002ZM86.656 361.369C74.15 348.877 53.889 348.877 41.383 361.369C28.873 373.867 28.873 394.145 41.383 406.643L105.344 470.629C117.85 483.123 138.111 483.123 150.617 470.631V470.629C163.127 458.131 163.127 437.855 150.617 425.357L86.656 361.369ZM32.033 448C14.389 448 0 462.375 0 480S14.389 512 32.033 512C49.676 512 64.064 497.625 64.064 480S49.676 448 32.033 448ZM397.766 3.125C381.859 -4.469 362.719 2.281 355.109 18.219C347.516 34.187 354.281 53.281 370.234 60.875C417.469 83.406 448 134.875 448 192C448 209.688 462.328 224 480 224S512 209.688 512 192C512 110.344 467.156 36.188 397.766 3.125Z" />
            <path d="M287.924 70.314C177.054 40.938 76.191 117.844 65.172 221.203C63.174 239.943 78.902 255.996 97.748 255.996C114.353 255.996 126.994 242.93 128.992 226.443C135.926 169.219 186.199 125.148 245.904 128.139C317.611 131.732 363.855 204.961 348.371 275.068C341.82 304.719 326.968 331.941 304.988 353.934L288.176 370.746V383.996C288.176 415.396 265.461 441.578 235.593 446.975C220.619 449.682 208.176 463.348 208.176 478.566C208.176 498.348 226.052 513.502 245.556 510.209C301.472 500.766 345.183 454.93 351.41 397.996C391.515 357.32 414.302 304.047 416.064 247.145C418.566 166.416 365.998 91.004 287.924 70.314ZM240.176 200C262.238 200 280.176 217.938 280.176 240C280.176 253.25 290.926 264 304.176 264S328.176 253.25 328.176 240C328.176 191.469 288.707 152 240.176 152S152.176 191.469 152.176 240C152.176 253.25 162.926 264 176.176 264S200.176 253.25 200.176 240C200.176 217.938 218.113 200 240.176 200Z" />
        </Icon>
    </>
}