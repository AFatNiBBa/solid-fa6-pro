
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grin-tongue` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue?s=light face-grin-tongue}
 * @preview ![face-grin-tongue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgMjA4QzM2MCAxOTQuNjg4IDM0OS4yOTMgMTg0IDMzNS45NTUgMTg0QzMyMi43MDcgMTg0IDMxMiAxOTQuNjg4IDMxMiAyMDhTMzIyLjcwNyAyMzIgMzM1Ljk1NSAyMzJDMzQ5LjI5MyAyMzIgMzYwIDIyMS4zMTIgMzYwIDIwOFpNMjAwIDIwOEMyMDAgMTk0LjY4OCAxODkuMjkzIDE4NCAxNzUuOTU1IDE4NEMxNjIuNzA3IDE4NCAxNTIgMTk0LjY4OCAxNTIgMjA4UzE2Mi43MDcgMjMyIDE3NS45NTUgMjMyQzE4OS4yOTMgMjMyIDIwMCAyMjEuMzEyIDIwMCAyMDhaTTI1NiAxNkMxMjMuNjU2IDE2IDE2IDEyMy42NTYgMTYgMjU2QzE2IDMzNC40MDYgNTQuNDM4IDQwOC4wNDcgMTE4Ljg0NCA0NTIuOTY5QzEyNi4wMzEgNDU3Ljk2OSAxMzYgNDU2LjI4MSAxNDEuMTI1IDQ0OUMxNDYuMTg3IDQ0MS43NSAxNDQuNDA2IDQzMS43ODEgMTM3LjE1NiA0MjYuNzE5QzgxLjM0NCAzODcuNzgxIDQ4IDMyMy45NTMgNDggMjU2QzQ4IDE0MS4zMTIgMTQxLjMxMiA0OCAyNTYgNDhTNDY0IDE0MS4zMTIgNDY0IDI1NkM0NjQgMzIzLjk1MyA0MzAuNjU2IDM4Ny43ODEgMzc0Ljg0NCA0MjYuNzE5QzM2Ny41OTQgNDMxLjc4MSAzNjUuODEyIDQ0MS43NSAzNzAuODc1IDQ0OUMzNzMuOTk5IDQ1My40NTMgMzc4Ljk2OSA0NTUuODQ0IDM4NCA0NTUuODQ0QzM4Ny4xODggNDU1Ljg0NCAzOTAuMzc1IDQ1NC45MDYgMzkzLjE1NiA0NTIuOTY5QzQ1Ny41NjIgNDA4LjA0NyA0OTYgMzM0LjQwNiA0OTYgMjU2QzQ5NiAxMjMuNjU2IDM4OC4zNDQgMTYgMjU2IDE2Wk0zMDYuMTcyIDM2OS45MjRDMzAzLjc1NCAzNjkuOTI0IDMwMS4yODkgMzcwLjIxNyAyOTguODExIDM3MC44MzRMMjU1Ljk0NyAzODEuNTE2TDIxMy42NSAzNzAuOTA2QzIxMS4xNiAzNzAuMjgxIDIwOC42NzYgMzY5Ljk4NCAyMDYuMjQ0IDM2OS45ODRDMTkwLjEyNSAzNjkuOTgyIDE3Ni4yMDkgMzgzLjAyMyAxNzYuMjA5IDQwMFY0MzIuMjZDMTc2LjIwOSA0NzYuMjk5IDIxMi4wMjUgNTEyIDI1Ni4yMDkgNTEyQzMwMC4zOTEgNTEyIDMzNi4yMDcgNDc2LjI5OSAzMzYuMjA3IDQzMi4yNlYzOTkuOTM5QzMzNi4yMDcgMzgyLjk2NyAzMjIuMjkzIDM2OS45MjQgMzA2LjE3MiAzNjkuOTI0Wk0zMDQuMjA3IDQzMi4yNkMzMDQuMjA3IDQ1OC41ODQgMjgyLjY3NiA0ODAgMjU2LjIwOSA0ODBTMjA4LjIwOSA0NTguNTg0IDIwOC4yMDkgNDMyLjI2VjQwMi41MzNMMjQwIDQxMC41MDhWNDI0QzI0MCA0MzIuODQ0IDI0Ny4xNTYgNDQwIDI1NiA0NDBTMjcyIDQzMi44NDQgMjcyIDQyNFY0MTAuNDk0TDMwNC4yMDcgNDAyLjQ2OVY0MzIuMjZaTTM4My4xODggMzczLjA2MkwzOTkuMTg4IDMyNS4wNjJDNDAxLjAzMSAzMTkuNTE2IDM5OS43MTkgMzEzLjQwNiAzOTUuNzUgMzA5LjEyNUMzOTEuODEyIDMwNC44NTkgMzg1Ljg0NCAzMDMuMDMxIDM4MC4xMjUgMzA0LjQ4NEMyOTguOTM4IDMyNC43NjYgMjEzLjA2MyAzMjQuNzY2IDEzMS44NzUgMzA0LjQ4NEMxMjYuMTg4IDMwMy4wMTYgMTIwLjIxOSAzMDQuODU5IDExNi4yNSAzMDkuMTI1QzExMi4yODEgMzEzLjQwNiAxMTAuOTY5IDMxOS41MTYgMTEyLjgxMiAzMjUuMDYyTDEyOC44MTIgMzczLjA2MkMxMzEuNjU2IDM4MS40NjkgMTQwLjcxOSAzODUuOTY5IDE0OS4wNjIgMzgzLjE3MkMxNTcuNDM4IDM4MC4zOTEgMTYxLjk2OSAzNzEuMzI4IDE1OS4xODcgMzYyLjkzOEwxNTIuMTI1IDM0MS43MzRDMjIwLjU2MiAzNTUuMDE2IDI5MS40MzcgMzU1LjAxNiAzNTkuODc1IDM0MS43MzRMMzUyLjgxMiAzNjIuOTM4QzM1MC4wMzEgMzcxLjMyOCAzNTQuNTYyIDM4MC4zOTEgMzYyLjkzNyAzODMuMTcyQzM2NC42MjUgMzgzLjczNCAzNjYuMzEyIDM4NCAzNjggMzg0QzM3NC42ODggMzg0IDM4MC45MzggMzc5Ljc2NiAzODMuMTg4IDM3My4wNjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinTongue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M360 208C360 194.688 349.293 184 335.955 184C322.707 184 312 194.688 312 208S322.707 232 335.955 232C349.293 232 360 221.312 360 208ZM200 208C200 194.688 189.293 184 175.955 184C162.707 184 152 194.688 152 208S162.707 232 175.955 232C189.293 232 200 221.312 200 208ZM256 16C123.656 16 16 123.656 16 256C16 334.406 54.438 408.047 118.844 452.969C126.031 457.969 136 456.281 141.125 449C146.187 441.75 144.406 431.781 137.156 426.719C81.344 387.781 48 323.953 48 256C48 141.312 141.312 48 256 48S464 141.312 464 256C464 323.953 430.656 387.781 374.844 426.719C367.594 431.781 365.812 441.75 370.875 449C373.999 453.453 378.969 455.844 384 455.844C387.188 455.844 390.375 454.906 393.156 452.969C457.562 408.047 496 334.406 496 256C496 123.656 388.344 16 256 16ZM306.172 369.924C303.754 369.924 301.289 370.217 298.811 370.834L255.947 381.516L213.65 370.906C211.16 370.281 208.676 369.984 206.244 369.984C190.125 369.982 176.209 383.023 176.209 400V432.26C176.209 476.299 212.025 512 256.209 512C300.391 512 336.207 476.299 336.207 432.26V399.939C336.207 382.967 322.293 369.924 306.172 369.924ZM304.207 432.26C304.207 458.584 282.676 480 256.209 480S208.209 458.584 208.209 432.26V402.533L240 410.508V424C240 432.844 247.156 440 256 440S272 432.844 272 424V410.494L304.207 402.469V432.26ZM383.188 373.062L399.188 325.062C401.031 319.516 399.719 313.406 395.75 309.125C391.812 304.859 385.844 303.031 380.125 304.484C298.938 324.766 213.063 324.766 131.875 304.484C126.188 303.016 120.219 304.859 116.25 309.125C112.281 313.406 110.969 319.516 112.812 325.062L128.812 373.062C131.656 381.469 140.719 385.969 149.062 383.172C157.438 380.391 161.969 371.328 159.187 362.938L152.125 341.734C220.562 355.016 291.437 355.016 359.875 341.734L352.812 362.938C350.031 371.328 354.562 380.391 362.937 383.172C364.625 383.734 366.312 384 368 384C374.688 384 380.938 379.766 383.188 373.062Z" />
        </Icon>
    </>
}