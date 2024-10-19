
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `store-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/store-slash?s=regular store-slash}
 * @preview ![store-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEyIDQ2OS4xMDlMNTQzLjk0MSA0MDEuMDIxVjI3NS45NTFDNTM1LjE2OSAyNzkuMjk5IDUyNS45OTIgMjgxLjc3OSA1MTYuNDM3IDI4My4wNDlDNTEwLjI2MSAyODMuODQ2IDUwNC4yODMgMjg0LjIzNCA0OTguMTU4IDI4NC4yMzRDNDk3LjQxIDI4NC4yMzQgNDk2LjcwMSAyODMuOTk0IDQ5NS45NTQgMjgzLjk4Mkw0OTUuOTkgMzYzLjQzOEwzNDYuOTYyIDI0Ni42MzNDMzc3LjQ1MSAyNTYuMTcyIDQxMi40MjEgMjUxLjg1NSA0MzguNzY1IDIzMy41NjJDNDU2LjEwNSAyNDUuNTk0IDQ3Ni44MzMgMjUyLjIzNCA0OTguMTU4IDI1Mi4yMzRDNTAyLjk5OSAyNTIuMjM0IDUwNy42MjIgMjUxLjkyMiA1MTIuMzQxIDI1MS4zMTJDNTQzLjA1MiAyNDcuMjM0IDU2OS4zNTcgMjI3LjcxOSA1ODIuNzEyIDE5OS4xNDFDNTk2Ljg4IDE2OC44MTIgNTk0LjcyNiAxMzMuOTM3IDU3Ni45NDkgMTA1LjgxMkw1MjQuNzQ0IDIzLjIxOUM1MTUuNzYxIDguODkxIDQ5OS42MjQgMCA0ODIuNjE1IDBIMTU3LjM1M0MxNDAuMzQzIDAgMTI0LjIwNiA4Ljg5MSAxMTUuMjcxIDIzLjE0MUw5Ny41NjIgNTEuMTU4TDM4LjgxMiA1LjEwOUMyOC4zNTkgLTMuMDYyIDEzLjI5NiAtMS4yMzQgNS4xMDkgOS4xODhDLTMuMDYzIDE5LjYyNSAtMS4yMzUgMzQuNzE5IDkuMTg3IDQyLjg5MUw2MDEuMTg3IDUwNi44OTFDNjA1LjU5MyA1MTAuMzI4IDYxMC43OTYgNTEyIDYxNS45ODQgNTEyQzYyMy4xMDkgNTEyIDYzMC4xNTYgNTA4Ljg0NCA2MzQuODkgNTAyLjgxMkM2NDMuMDYyIDQ5Mi4zNzUgNjQxLjIzNCA0NzcuMjgxIDYzMC44MTIgNDY5LjEwOVpNMTU3LjM1MyA0OEw0ODQuMTQ0IDQ4Ljc5N0w1MzYuMzk2IDEzMS40NjlDNTQ1LjM5NCAxNDUuNjg3IDU0Ni40NTYgMTYzLjM5MSA1MzkuMjQgMTc4LjgxMkM1MzIuNzU3IDE5Mi43MDMgNTIwLjYzNiAyMDEuNzgxIDUwNi4xMDcgMjAzLjcxOUM0ODguMzQ3IDIwNiA0NjkuMDU0IDE5OS41IDQ1Ni40OCAxODUuNjg4TDQzOC42ODcgMTY2LjEwOUw0MjAuOTQzIDE4NS43MzRDMzk5LjUyNyAyMDkuMzkxIDM1OS4xNDYgMjA5LjQyMiAzMzcuNjk5IDE4NS43MzRMMzE5Ljg5IDE2Ni4wNDdMMzAyLjA5NyAxODUuNzM0QzI5Ny4yNTkgMTkxLjEwMiAyOTEuMzI2IDE5NS4wODQgMjg0LjkxNSAxOThMMTM1LjkzOSA4MS4yMzRMMTU3LjM1MyA0OFpNNDY5LjIyMiA0NjRMNTE4LjY1IDUwMi43NEM1MDkuODI0IDUwOC41NTkgNDk5LjI5NCA1MTIgNDg3Ljk1NiA1MTJIMTUyLjA0MkMxMjEuMTc1IDUxMiA5Ni4wNTggNDg2Ljg3NSA5Ni4wNTggNDU2VjI3NS45NjFDMTA0Ljc1NyAyNzkuMjgxIDExMy44NDcgMjgxLjc1OCAxMjMuMzA4IDI4My4wMjdDMTI5LjIxOCAyODMuODAxIDEzNS4xNSAyODQuMTg4IDE0MS4wNDggMjg0LjE4OEMxNDIuMDU2IDI4NC4xODggMTQzLjAzNSAyODMuODY3IDE0NC4wNDQgMjgzLjg0NlYzMzZIMzA1LjkxM0wzNjcuMTU0IDM4NEgxNDQuMDQ0VjQ1NkMxNDQuMDQ0IDQ2MC40MDYgMTQ3LjYzOCA0NjQgMTUyLjA0MiA0NjRINDY5LjIyMlpNMTI3LjU2NCAyNTEuMzEyQzk2LjgzNyAyNDcuMTg4IDcwLjYxMSAyMjcuNjcyIDU3LjI3MSAxOTkuMTI1QzQ3Ljg5NiAxNzkuMDM1IDQ2LjM0NyAxNTcuMDU3IDUxLjA3NiAxMzYuMjY0TDk5LjE5MyAxNzMuOTc3Qzk5Ljc1MyAxNzUuNTg0IDEwMC4wMjkgMTc3LjI0NiAxMDAuNzU5IDE3OC44MTJDMTA3LjI0MiAxOTIuNjg3IDExOS4zIDIwMS43ODEgMTMzLjg0NSAyMDMuNzM0QzEzNC45MjcgMjAzLjg2OSAxMzYuMDcgMjAzLjY3NCAxMzcuMTY5IDIwMy43NDJMMTg2LjAyNSAyNDIuMDMzQzE3Mi45MTkgMjQ4LjA5NCAxNTguNTY2IDI1MS41MDQgMTQ0LjA0NCAyNTEuOTE4VjI1MS45NTlDMTQzLjA0IDI1MS45ODggMTQyLjA1IDI1Mi4xODYgMTQxLjA0OCAyNTIuMTg2QzEzNi41NDQgMjUyLjE4NiAxMzIuMDM4IDI1MS44OTggMTI3LjU2NCAyNTEuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StoreSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.812 469.109L543.941 401.021V275.951C535.169 279.299 525.992 281.779 516.437 283.049C510.261 283.846 504.283 284.234 498.158 284.234C497.41 284.234 496.701 283.994 495.954 283.982L495.99 363.438L346.962 246.633C377.451 256.172 412.421 251.855 438.765 233.562C456.105 245.594 476.833 252.234 498.158 252.234C502.999 252.234 507.622 251.922 512.341 251.312C543.052 247.234 569.357 227.719 582.712 199.141C596.88 168.812 594.726 133.937 576.949 105.812L524.744 23.219C515.761 8.891 499.624 0 482.615 0H157.353C140.343 0 124.206 8.891 115.271 23.141L97.562 51.158L38.812 5.109C28.359 -3.062 13.296 -1.234 5.109 9.188C-3.063 19.625 -1.235 34.719 9.187 42.891L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM157.353 48L484.144 48.797L536.396 131.469C545.394 145.687 546.456 163.391 539.24 178.812C532.757 192.703 520.636 201.781 506.107 203.719C488.347 206 469.054 199.5 456.48 185.688L438.687 166.109L420.943 185.734C399.527 209.391 359.146 209.422 337.699 185.734L319.89 166.047L302.097 185.734C297.259 191.102 291.326 195.084 284.915 198L135.939 81.234L157.353 48ZM469.222 464L518.65 502.74C509.824 508.559 499.294 512 487.956 512H152.042C121.175 512 96.058 486.875 96.058 456V275.961C104.757 279.281 113.847 281.758 123.308 283.027C129.218 283.801 135.15 284.188 141.048 284.188C142.056 284.188 143.035 283.867 144.044 283.846V336H305.913L367.154 384H144.044V456C144.044 460.406 147.638 464 152.042 464H469.222ZM127.564 251.312C96.837 247.188 70.611 227.672 57.271 199.125C47.896 179.035 46.347 157.057 51.076 136.264L99.193 173.977C99.753 175.584 100.029 177.246 100.759 178.812C107.242 192.687 119.3 201.781 133.845 203.734C134.927 203.869 136.07 203.674 137.169 203.742L186.025 242.033C172.919 248.094 158.566 251.504 144.044 251.918V251.959C143.04 251.988 142.05 252.186 141.048 252.186C136.544 252.186 132.038 251.898 127.564 251.312Z" />
        </Icon>
    </>
}