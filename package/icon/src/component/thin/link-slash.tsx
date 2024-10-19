
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `link-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=thin link-slash}
 * @preview ![link-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTcuNjYzIDEyMy45MjVMNDMyLjgyIDQ4Ljc1MUM0NzYuNTE3IDUuMDg1IDU0Ny41OTMgNS4wODUgNTkxLjI1OSA0OC43NTFDNjM0LjkyMyA5Mi40MzUgNjM0LjkyMyAxNjMuNTEzIDU5MS4yNTkgMjA3LjE5NEw0OTUuMTg3IDMwMy4yNjlMNTA3Ljc5NCAzMTMuMjlMNjAyLjU3NCAyMTguNTA5QzY1Mi40NzQgMTY4LjU5MyA2NTIuNDc0IDg3LjM1NCA2MDIuNTc0IDM3LjQzN0M1NTIuNjU4IC0xMi40ODEgNDcxLjQyMSAtMTIuNDgxIDQyMS41MDUgMzcuNDM3TDM0Ni4zNDkgMTEyLjYxQzM0My4yMjIgMTE1LjczNSAzNDMuMjIyIDEyMC44IDM0Ni4zNDkgMTIzLjkyNUMzNDkuNDc0IDEyNy4wNTIgMzU0LjUzOCAxMjcuMDUyIDM1Ny42NjMgMTIzLjkyNVpNMjgyLjMzNSAzODguMDc5TDIwNy4xNzkgNDYzLjI1M0MxNjMuNDgyIDUwNi45MTkgOTIuNDA2IDUwNi45MTkgNDguNzQgNDYzLjI1M0M1LjA3NSA0MTkuNTcxIDUuMDc1IDM0OC40OTMgNDguNzQgMzA0LjgxTDE0NC44MTggMjA4LjcyOUwxMzIuMjEgMTk4LjcwOEwzNy40MjUgMjkzLjQ5NUMtMTIuNDc1IDM0My40MTMgLTEyLjQ3NSA0MjQuNjUxIDM3LjQyNSA0NzQuNTY3QzYyLjM4NCA0OTkuNTI2IDk1LjE3MSA1MTEuOTk5IDEyNy45NiA1MTEuOTk5QzE2MC43NDcgNTExLjk5OSAxOTMuNTM2IDQ5OS41MjYgMjE4LjQ5MyA0NzQuNTY3TDI5My42NSAzOTkuMzk2QzI5Ni43NzcgMzk2LjI2OSAyOTYuNzc3IDM5MS4yMDYgMjkzLjY1IDM4OC4wNzlDMjkwLjUyNSAzODQuOTU0IDI4NS40NiAzODQuOTU0IDI4Mi4zMzUgMzg4LjA3OVpNMTIuOTg4IDEuNzI5QzExLjUyNSAwLjU2NSA5Ljc3MSAtMC4wMDEgOC4wMjUgLTAuMDAxQzUuNjczIC0wLjAwMSAzLjMzNSAxLjAyOCAxLjczOCAzLjAxMUMtMS4wMTIgNi40NzkgLTAuNDM0IDExLjUxMSAzLjAxOSAxNC4yNjFMNjI3LjAxMyA1MTAuMjY1QzYyOC40OTcgNTExLjQzNyA2MzAuMjQ3IDUxMS45OTkgNjMxLjk5NyA1MTEuOTk5QzYzNC4zNDEgNTExLjk5OSA2MzYuNjg1IDUxMC45NjggNjM4LjI2MyA1MDguOTgzQzY0MS4wMTMgNTA1LjUxNSA2NDAuNDM1IDUwMC40ODMgNjM2Ljk4MiA0OTcuNzMzTDEyLjk4OCAxLjcyOVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LinkSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M357.663 123.925L432.82 48.751C476.517 5.085 547.593 5.085 591.259 48.751C634.923 92.435 634.923 163.513 591.259 207.194L495.187 303.269L507.794 313.29L602.574 218.509C652.474 168.593 652.474 87.354 602.574 37.437C552.658 -12.481 471.421 -12.481 421.505 37.437L346.349 112.61C343.222 115.735 343.222 120.8 346.349 123.925C349.474 127.052 354.538 127.052 357.663 123.925ZM282.335 388.079L207.179 463.253C163.482 506.919 92.406 506.919 48.74 463.253C5.075 419.571 5.075 348.493 48.74 304.81L144.818 208.729L132.21 198.708L37.425 293.495C-12.475 343.413 -12.475 424.651 37.425 474.567C62.384 499.526 95.171 511.999 127.96 511.999C160.747 511.999 193.536 499.526 218.493 474.567L293.65 399.396C296.777 396.269 296.777 391.206 293.65 388.079C290.525 384.954 285.46 384.954 282.335 388.079ZM12.988 1.729C11.525 0.565 9.771 -0.001 8.025 -0.001C5.673 -0.001 3.335 1.028 1.738 3.011C-1.012 6.479 -0.434 11.511 3.019 14.261L627.013 510.265C628.497 511.437 630.247 511.999 631.997 511.999C634.341 511.999 636.685 510.968 638.263 508.983C641.013 505.515 640.435 500.483 636.982 497.733L12.988 1.729Z" />
        </Icon>
    </>
}