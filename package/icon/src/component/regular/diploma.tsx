
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diploma` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diploma?s=regular diploma}
 * @preview ![diploma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzkuMjYgMTQ0SDQ3My4xNTZDNDc3LjQ5NCAxMzQuMTkxIDQ4MCAxMjMuMzk4IDQ4MCAxMTJDNDgwIDY4LjE0OCA0NDQuMzI0IDMyIDQwMC40NzMgMzJDMzY3LjY5NSAzMiAzNDUuNTI3IDQ3LjA4NiAzMjAgNzguOTQ5QzI5NC40NzMgNDcuMDg2IDI3Mi4zMDUgMzIgMjM5LjUyOSAzMkMxOTUuNjc2IDMyIDE2MCA2OC4xNDggMTYwIDExMkMxNjAgMTIzLjM5OCAxNjIuNTA2IDEzNC4xOTEgMTY2Ljg0NCAxNDRIOTZDNDIuOTggMTQ0IDAgMTkyLjQ3MyAwIDI3MlM0Mi45OCA0MTYgOTYgNDE2TDI1NiAzODEuNzE1VjQ2My45NzNDMjU2IDQ2Ni45NTMgMjU2Ljk1NSA0NjkuNDkyIDI1OC4yNjYgNDcxLjc3N0MyNTguNjMzIDQ3Mi40MjIgMjU5LjA0NSA0NzIuOTM0IDI1OS40OTIgNDczLjUxMkMyNjAuNzM2IDQ3NS4xMjUgMjYyLjIwMSA0NzYuNDM4IDI2My45MyA0NzcuNDY1QzI2NC40MzggNDc3Ljc2NiAyNjQuODMyIDQ3OC4xNDEgMjY1LjM2NyA0NzguMzg3QzI2Ny40NjkgNDc5LjM1OSAyNjkuNzEzIDQ4MCAyNzIuMDYyIDQ4MEMyNzIuMzAxIDQ4MCAyNzIuNTM5IDQ3OS44OTggMjcyLjc3NyA0NzkuODgzQzI3My4xMjEgNDc5Ljg2NyAyNzMuNDMgNDc5Ljc2NiAyNzMuNzczIDQ3OS43MjdDMjc2LjQ2MSA0NzkuNDMgMjc5LjE1NCA0NzguNjA1IDI4MS42IDQ3Ni43N0wzMjAgNDQ3Ljk3M0wzNTguNCA0NzYuNzdDMzYwLjg0NiA0NzguNjA1IDM2My41MzkgNDc5LjQzIDM2Ni4yMjcgNDc5LjcyN0MzNjYuNTcgNDc5Ljc2NiAzNjYuODc5IDQ3OS44NjcgMzY3LjIyMyA0NzkuODgzQzM2Ny40NjEgNDc5Ljg5OCAzNjcuNjk5IDQ4MCAzNjcuOTM4IDQ4MEMzNzAuMjg3IDQ4MCAzNzIuNTI5IDQ3OS4zNTkgMzc0LjYzMSA0NzguMzg3QzM3NS4xNjggNDc4LjE0MSAzNzUuNTY2IDQ3Ny43NjYgMzc2LjA3NCA0NzcuNDYxQzM3Ny44MDUgNDc2LjQzIDM3OS4yNyA0NzUuMTI1IDM4MC41MTQgNDczLjUwOEMzODAuOTU5IDQ3Mi45MyAzODEuMzY3IDQ3Mi40MjIgMzgxLjczMiA0NzEuNzgxQzM4My4wNDUgNDY5LjQ5MiAzODQgNDY2Ljk1MyAzODQgNDYzLjk3M1YzODIuMDEyTDUzOS4yNiA0MTZDNTk0Ljg5OCA0MTYgNjQwIDM1MS41MjcgNjQwIDI3MkM2NDAgMTkyLjQ2OSA1OTQuODk4IDE0NCA1MzkuMjYgMTQ0Wk00MDAuNDczIDgwLjQ3M0M0MTcuODg3IDgwLjQ3MyA0MzIgOTQuNTg2IDQzMiAxMTJTNDE3Ljg4NyAxNDMuNTI3IDQwMC40NzMgMTQzLjUyN0gzMzIuNjExQzM3My4yMDUgODMuMDcgMzg0Ljc4MSA4MC40NzMgNDAwLjQ3MyA4MC40NzNaTTIzOS41MjkgODAuNDczQzI1NS4yMTkgODAuNDczIDI2Ni43OTcgODMuMDcgMzA3LjM4OSAxNDMuNTI3SDIzOS41MjlDMjIyLjExNSAxNDMuNTI3IDIwOCAxMjkuNDE0IDIwOCAxMTJTMjIyLjExNSA4MC40NzMgMjM5LjUyOSA4MC40NzNaTTI0NS45NDMgMzM0Ljc4MUw5Mi41ODggMzY3LjY0MUM3My4yOTMgMzYzLjY4OCA0OCAzMjcuMjc3IDQ4IDI3MkM0OCAyMjQuODk4IDY3LjczOCAxOTIgOTYgMTkySDI0MC41NTdMMjQwLjM0OCAxOTEuNTI3SDI1NlYzMzIuNjI1TDI0NS45NDMgMzM0Ljc4MVpNNTQzLjA0MSAzNjcuNjkxTDM5NC4yNjQgMzM1LjEyMUwzODQgMzMyLjg3NVYxOTEuNTI3SDM5OS42NTJMMzk5LjQ0MyAxOTJINTM5LjI2QzU3MC44MDUgMTkyIDU5MiAyMjQuMTQ4IDU5MiAyNzJDNTkyIDMyNC4xOCA1NjYuODkxIDM2My44MjggNTQzLjA0MSAzNjcuNjkxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Diploma(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M539.26 144H473.156C477.494 134.191 480 123.398 480 112C480 68.148 444.324 32 400.473 32C367.695 32 345.527 47.086 320 78.949C294.473 47.086 272.305 32 239.529 32C195.676 32 160 68.148 160 112C160 123.398 162.506 134.191 166.844 144H96C42.98 144 0 192.473 0 272S42.98 416 96 416L256 381.715V463.973C256 466.953 256.955 469.492 258.266 471.777C258.633 472.422 259.045 472.934 259.492 473.512C260.736 475.125 262.201 476.438 263.93 477.465C264.438 477.766 264.832 478.141 265.367 478.387C267.469 479.359 269.713 480 272.062 480C272.301 480 272.539 479.898 272.777 479.883C273.121 479.867 273.43 479.766 273.773 479.727C276.461 479.43 279.154 478.605 281.6 476.77L320 447.973L358.4 476.77C360.846 478.605 363.539 479.43 366.227 479.727C366.57 479.766 366.879 479.867 367.223 479.883C367.461 479.898 367.699 480 367.938 480C370.287 480 372.529 479.359 374.631 478.387C375.168 478.141 375.566 477.766 376.074 477.461C377.805 476.43 379.27 475.125 380.514 473.508C380.959 472.93 381.367 472.422 381.732 471.781C383.045 469.492 384 466.953 384 463.973V382.012L539.26 416C594.898 416 640 351.527 640 272C640 192.469 594.898 144 539.26 144ZM400.473 80.473C417.887 80.473 432 94.586 432 112S417.887 143.527 400.473 143.527H332.611C373.205 83.07 384.781 80.473 400.473 80.473ZM239.529 80.473C255.219 80.473 266.797 83.07 307.389 143.527H239.529C222.115 143.527 208 129.414 208 112S222.115 80.473 239.529 80.473ZM245.943 334.781L92.588 367.641C73.293 363.688 48 327.277 48 272C48 224.898 67.738 192 96 192H240.557L240.348 191.527H256V332.625L245.943 334.781ZM543.041 367.691L394.264 335.121L384 332.875V191.527H399.652L399.443 192H539.26C570.805 192 592 224.148 592 272C592 324.18 566.891 363.828 543.041 367.691Z" />
        </Icon>
    </>
}