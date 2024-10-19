
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `baseball-ball` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-ball?s=solid baseball-ball}
 * @preview ![baseball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTIuNDgyIDI5Ny4yNDNDNDg1LjQyMyAyOTYuMzc1IDQ3OC40ODYgMjk1LjA4NCA0NzEuMTk5IDI5NS4wOEM0NjUuMDgxIDI5NS4wNzcgNDU5LjA1MiAyOTUuNDQ1IDQ1My4xMDggMjk2LjEwN0M0NDQuNTU1IDI5Ny4wNiA0MzYuNzA1IDI5MS4zNyA0MzUuMjg3IDI4Mi44ODFDNDMzLjc4MyAyNzMuODgxIDQ0MC4wNjcgMjY1LjMwNSA0NDkuMTM3IDI2NC4zQzQ1Ni4zNzggMjYzLjQ5OCA0NjMuNzI4IDI2My4wNjUgNDcxLjE4NCAyNjMuMDY4QzQ3OS41MjYgMjYzLjA3MiA0ODcuNzEyIDI2My43MDkgNDk1LjgwMyAyNjQuNjczQzQ5NS45MDIgMjYxLjgwOSA0OTYuMjM0IDI1OS4wMDYgNDk2LjIzMSAyNTYuMTE2QzQ5Ni4xNjggMTIzLjUwNCAzODguNjExIDE1Ljk0NyAyNTUuOTk5IDE1Ljg4NEMyNTMuMTEgMTUuODgyIDI1MC4zMDcgMTYuMjEzIDI0Ny40NDIgMTYuMzEzQzI0OC40MDYgMjQuNDAzIDI0OS4wNDMgMzIuNTg5IDI0OS4wNDcgNDAuOTMyQzI0OS4wNTEgNDguMzg3IDI0OC42MTcgNTUuNzM3IDI0Ny44MTUgNjIuOTc4QzI0Ni44MSA3Mi4wNDggMjM4LjIzNSA3OC4zMzMgMjI5LjIzNCA3Ni44MjlDMjIwLjc0NSA3NS40MTEgMjE1LjA1NiA2Ny41NjEgMjE2LjAwOSA1OS4wMDdDMjE2LjY3MSA1My4wNjQgMjE3LjAzOCA0Ny4wMzUgMjE3LjAzNiA0MC45MTdDMjE3LjAzMiAzMy42MjkgMjE1Ljc0MSAyNi42OTIgMjE0Ljg3MiAxOS42MzRDMTE1LjI5MyAzNi44MSAzNi45MjYgMTE1LjE3OCAxOS43NSAyMTQuNzU3QzI2LjgwOCAyMTUuNjI1IDMzLjc0NSAyMTYuOTE2IDQxLjAzMiAyMTYuOTJDNDcuMTUgMjE2LjkyMyA1My4xNzkgMjE2LjU1NSA1OS4xMjMgMjE1Ljg5M0M2Ny42NzYgMjE0Ljk0MSA3NS41MjYgMjIwLjYzIDc2Ljk0NCAyMjkuMTE5Qzc4LjQ0OCAyMzguMTE5IDcyLjE2NCAyNDYuNjk1IDYzLjA5NCAyNDcuN0M1NS44NTMgMjQ4LjUwMiA0OC41MDMgMjQ4LjkzNSA0MS4wNDcgMjQ4LjkzMkMzMi43MDUgMjQ4LjkyOCAyNC41MTcgMjQ4LjI5IDE2LjQyOCAyNDcuMzI3QzE2LjMyOSAyNTAuMTkxIDE1Ljk5OSAyNTIuOTk2IDE2IDI1NS44ODRDMTYuMDYzIDM4OC40OTYgMTIzLjYyIDQ5Ni4wNTMgMjU2LjIzMiA0OTYuMTE2QzI1OS4xMiA0OTYuMTE3IDI2MS45MjQgNDk1Ljc4NyAyNjQuNzg5IDQ5NS42ODdDMjYzLjgyNiA0ODcuNTk4IDI2My4xODggNDc5LjQxMSAyNjMuMTg0IDQ3MS4wNjhDMjYzLjE4IDQ2My42MTMgMjYzLjYxNCA0NTYuMjYzIDI2NC40MTYgNDQ5LjAyMkMyNjUuNDIxIDQzOS45NTIgMjczLjk5NyA0MzMuNjY3IDI4Mi45OTcgNDM1LjE3MUMyOTEuNDg2IDQzNi41ODkgMjk3LjE3NSA0NDQuNDM5IDI5Ni4yMjIgNDUyLjk5M0MyOTUuNTYgNDU4LjkzNiAyOTUuMTkzIDQ2NC45NjUgMjk1LjE5NiA0NzEuMDgzQzI5NS4xOTkgNDc4LjM3MSAyOTYuNDkgNDg1LjMwOCAyOTcuMzU5IDQ5Mi4zNjZDMzk2LjkzOCA0NzUuMTkgNDc1LjMwNSAzOTYuODIyIDQ5Mi40ODIgMjk3LjI0M1pNMTI5LjYzNSAyMjguODg4QzEyMC4xNzQgMjMzLjM2IDEwOS4wNjggMjI3LjIwNSAxMDcuMzQzIDIxNi44ODNMMTA3LjMxNiAyMTYuNzE3QzEwNi4xNTYgMjA5Ljc4MSAxMDkuNjA0IDIwMi43ODYgMTE1Ljk2MSAxOTkuNzhDMTUyLjc3NiAxODIuMzc1IDE4Mi40OTIgMTUyLjY2IDE5OS44OTYgMTE1Ljg0NUMyMDIuOTAyIDEwOS40ODggMjA5Ljg5NiAxMDYuMDQxIDIxNi44MzIgMTA3LjJMMjE2Ljk5OSAxMDcuMjI4QzIyNy4zMiAxMDguOTUzIDIzMy40NzYgMTIwLjA1OCAyMjkuMDA0IDEyOS41MkMyMDguNDIgMTczLjA3MSAxNzMuMTg3IDIwOC4zMDQgMTI5LjYzNSAyMjguODg4Wk0yOTUuMzk5IDQwNC44TDI5NS4yMzMgNDA0Ljc3MkMyODQuOTExIDQwMy4wNDcgMjc4Ljc1NSAzOTEuOTQyIDI4My4yMjcgMzgyLjQ4QzMwMy44MTEgMzM4LjkyOSAzMzkuMDQ0IDMwMy42OTYgMzgyLjU5NiAyODMuMTEyQzM5Mi4wNTggMjc4LjY0IDQwMy4xNjMgMjg0Ljc5NSA0MDQuODg4IDI5NS4xMTdMNDA0LjkxNiAyOTUuMjgzQzQwNi4wNzUgMzAyLjIxOSA0MDIuNjI4IDMwOS4yMTQgMzk2LjI3IDMxMi4yMTlDMzU5LjQ1NiAzMjkuNjI0IDMyOS43NDEgMzU5LjMzOSAzMTIuMzM1IDM5Ni4xNTVDMzA5LjMzIDQwMi41MTIgMzAyLjMzNSA0MDUuOTU5IDI5NS4zOTkgNDA0LjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BaseballBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M492.482 297.243C485.423 296.375 478.486 295.084 471.199 295.08C465.081 295.077 459.052 295.445 453.108 296.107C444.555 297.06 436.705 291.37 435.287 282.881C433.783 273.881 440.067 265.305 449.137 264.3C456.378 263.498 463.728 263.065 471.184 263.068C479.526 263.072 487.712 263.709 495.803 264.673C495.902 261.809 496.234 259.006 496.231 256.116C496.168 123.504 388.611 15.947 255.999 15.884C253.11 15.882 250.307 16.213 247.442 16.313C248.406 24.403 249.043 32.589 249.047 40.932C249.051 48.387 248.617 55.737 247.815 62.978C246.81 72.048 238.235 78.333 229.234 76.829C220.745 75.411 215.056 67.561 216.009 59.007C216.671 53.064 217.038 47.035 217.036 40.917C217.032 33.629 215.741 26.692 214.872 19.634C115.293 36.81 36.926 115.178 19.75 214.757C26.808 215.625 33.745 216.916 41.032 216.92C47.15 216.923 53.179 216.555 59.123 215.893C67.676 214.941 75.526 220.63 76.944 229.119C78.448 238.119 72.164 246.695 63.094 247.7C55.853 248.502 48.503 248.935 41.047 248.932C32.705 248.928 24.517 248.29 16.428 247.327C16.329 250.191 15.999 252.996 16 255.884C16.063 388.496 123.62 496.053 256.232 496.116C259.12 496.117 261.924 495.787 264.789 495.687C263.826 487.598 263.188 479.411 263.184 471.068C263.18 463.613 263.614 456.263 264.416 449.022C265.421 439.952 273.997 433.667 282.997 435.171C291.486 436.589 297.175 444.439 296.222 452.993C295.56 458.936 295.193 464.965 295.196 471.083C295.199 478.371 296.49 485.308 297.359 492.366C396.938 475.19 475.305 396.822 492.482 297.243ZM129.635 228.888C120.174 233.36 109.068 227.205 107.343 216.883L107.316 216.717C106.156 209.781 109.604 202.786 115.961 199.78C152.776 182.375 182.492 152.66 199.896 115.845C202.902 109.488 209.896 106.041 216.832 107.2L216.999 107.228C227.32 108.953 233.476 120.058 229.004 129.52C208.42 173.071 173.187 208.304 129.635 228.888ZM295.399 404.8L295.233 404.772C284.911 403.047 278.755 391.942 283.227 382.48C303.811 338.929 339.044 303.696 382.596 283.112C392.058 278.64 403.163 284.795 404.888 295.117L404.916 295.283C406.075 302.219 402.628 309.214 396.27 312.219C359.456 329.624 329.741 359.339 312.335 396.155C309.33 402.512 302.335 405.959 295.399 404.8Z" />
        </Icon>
    </>
}