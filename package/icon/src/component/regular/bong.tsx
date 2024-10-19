
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bong` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=regular bong}
 * @preview ![bong](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjcuNjE3IDIxMS43MzNMNDI2LjI2NyAxNzAuMjg1QzQxNi45MTQgMTYwLjkwOSA0MDEuNzI5IDE2MC45IDM5Mi4zNjUgMTcwLjI2NEwzOTIuMjU0IDE3MC4zNzZDMzgyLjg5NyAxNzkuNzMyIDM4Mi44OTcgMTk0LjkwMSAzOTIuMjUzIDIwNC4yNThMMzk1Ljk5OSAyMDguMDA0TDM1Ni42MjUgMjQ3LjM3OUMzNDUuMTI1IDIzNi4wMDQgMzMyLjEyNSAyMjYuMTI5IDMxOCAyMTcuODc5VjQ3Ljc1NEgzMjYuMTIxQzMzOS4yNTQgNDcuNzU0IDM1MCAzNy4wMDkgMzUwIDIzLjg3NVYyMy44NzVDMzUwIDEwLjY4NiAzMzkuMzAxIC0wLjAwMSAzMjYuMTEyIDAuMDEzTDExNy44NTMgMC4yNDZDMTA0LjY3NSAwLjI2IDk0IDEwLjk0NyA5NCAyNC4xMjVWMjQuMTI1Qzk0IDM3LjMxMyAxMDQuNjkxIDQ4LjAwNCAxMTcuODc5IDQ4LjAwNEgxMjZWMjE3Ljg3OUM2OC42MjUgMjUxLjEyOSAzMCAzMTMuMDA0IDMwIDM4NC4wMDRDMzAgNDI3LjA3NCA0NC4yOTUgNDY2Ljg3MiA2OC4zNTIgNDk4Ljg2OEM3My43MzQgNTA2LjAyNiA4NS4yOTUgNTEyLjAwNSA5NC4yNSA1MTIuMDA1SDM0OS42MjVDMzU4LjY0OSA1MTIuMDA1IDM3MC4zMDQgNTA1Ljk4NSAzNzUuNzIzIDQ5OC43NjhDMzk5LjczNSA0NjYuNzkgNDE0IDQyNy4wMjkgNDE0IDM4NC4wMDRDNDE0IDM0Ny44NzkgNDAzLjg3NSAzMTQuMjU0IDM4Ni41IDI4NS4zNzlMNDMwIDI0Mi4wMDVMNDMzLjcxNSAyNDUuNzJDNDQzLjA4NSAyNTUuMDg5IDQ1OC4zNzMgMjU1LjA0NyA0NjcuNjkgMjQ1LjYyNlYyNDUuNjI2QzQ3Ni45ODUgMjM2LjIyOCA0NzYuOTUyIDIyMS4wOSA0NjcuNjE3IDIxMS43MzNaTTE1MCAyNTkuMzc5TDE3NCAyNDUuNTA0VjQ4LjAwNEgyNzBWMjQ1LjUwNEwyOTQgMjU5LjM3OUMzMTguNzUgMjczLjc1NCAzMzggMjk1LjEyOSAzNTAuNSAzMjAuMDA0SDkzLjVDMTA2IDI5NS4xMjkgMTI1LjI1IDI3My43NTQgMTUwIDI1OS4zNzlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M467.617 211.733L426.267 170.285C416.914 160.909 401.729 160.9 392.365 170.264L392.254 170.376C382.897 179.732 382.897 194.901 392.253 204.258L395.999 208.004L356.625 247.379C345.125 236.004 332.125 226.129 318 217.879V47.754H326.121C339.254 47.754 350 37.009 350 23.875V23.875C350 10.686 339.301 -0.001 326.112 0.013L117.853 0.246C104.675 0.26 94 10.947 94 24.125V24.125C94 37.313 104.691 48.004 117.879 48.004H126V217.879C68.625 251.129 30 313.004 30 384.004C30 427.074 44.295 466.872 68.352 498.868C73.734 506.026 85.295 512.005 94.25 512.005H349.625C358.649 512.005 370.304 505.985 375.723 498.768C399.735 466.79 414 427.029 414 384.004C414 347.879 403.875 314.254 386.5 285.379L430 242.005L433.715 245.72C443.085 255.089 458.373 255.047 467.69 245.626V245.626C476.985 236.228 476.952 221.09 467.617 211.733ZM150 259.379L174 245.504V48.004H270V245.504L294 259.379C318.75 273.754 338 295.129 350.5 320.004H93.5C106 295.129 125.25 273.754 150 259.379Z" />
        </Icon>
    </>
}