
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `volleyball-ball` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volleyball-ball?s=regular volleyball-ball}
 * @preview ![volleyball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDQ5IDE2IDI1NkMxNiAzODguNTQ3IDEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NkM0OTYgMTIzLjQ0OSAzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDY0QzI1OS45MDIgNjQgMjYzLjcxNSA2NC4zNTUgMjY3LjU1OSA2NC41ODZDMzQ5LjM4NSAxNDAuMjM4IDM1MS4yNDQgMjI2LjUwNCAzNDcuMzc3IDI2My42OTlDMzE2LjA5IDI1OC43NzMgMjkyLjcwMSAyNDguNjI1IDI3OS45ODQgMjQyLjA1OUMyNzguODA3IDIxMC41NDMgMjY4Ljg5NSAxMzYuODc5IDIwOS4yMzggNzBDMjI0LjIzOCA2Ni4yMjMgMjM5Ljg0NiA2NCAyNTYgNjRaTTY0IDI1NkM2NCAxODQuNzA3IDEwMy4xNDMgMTIyLjQ5NiAxNjAuOTg0IDg5LjM3OUMxNzQuNzc3IDEwMi43MTUgMTg2LjI0OCAxMTYuNDczIDE5NS4xNzYgMTMwLjIxNUMxNjAuODczIDE0Ni4wMzUgMTAyLjAyOSAxODQuMDA4IDY0LjE4OSAyNTkuNzNDNjQuMTY2IDI1OC40NzMgNjQgMjU3LjI1OCA2NCAyNTZaTTg0LjUyNyAzNDEuODg3QzEwOS4wNzIgMjMzLjE0MSAxODIuODExIDE4OC4yNjIgMjE2Ljk3OSAxNzMuMDA0QzIyOC4zNTkgMjAyLjU3NCAyMzEuMjY0IDIyNy45MSAyMzEuOTM4IDI0Mi4xOTlDMjA1LjIzIDI1OC45NzMgMTQ2LjQgMzA0LjQxOCAxMTguMzE4IDM4OS41MkMxMDQuNzQ4IDM3NS41MzEgOTMuMzcxIDM1OS40NjkgODQuNTI3IDM0MS44ODdaTTI1NiA0NDhDMjIwLjY5NSA0NDggMTg3LjY5NyA0MzguMjU4IDE1OS4yNDQgNDIxLjU2MkMxNjMuOTEgNDAyLjg5MSAxNzAuMTExIDM4Ni4wMjcgMTc3LjU3MiAzNzEuMzk4QzIwNi4yMDcgMzkxLjcyNyAyNjEuMzg5IDQyMi4xNTIgMzM3Ljc4MSA0MjIuMTUyQzM0Mi44MzIgNDIyLjE1MiAzNDguMzU3IDQyMS4zNTIgMzUzLjU5MiA0MjEuMDUxQzMyNC45NTEgNDM4LjA1NSAyOTEuNjU0IDQ0OCAyNTYgNDQ4Wk00MTYuMjM4IDM2MS41MDhDMzA5Ljc0NCAzOTQuNzg1IDIzMy45NTcgMzUzLjI5NyAyMDMuNjQ1IDMzMS4yODVDMjIzLjU2MSAzMDYuNjQ1IDI0NC4wNTMgMjkxLjQ2NSAyNTYuMDk0IDI4My43MzRDMjc3LjYwMiAyOTUuMTAyIDMyMy4yNTQgMzE0LjY4NCAzODMuNDY5IDMxNC42ODRDNDAxLjI3NyAzMTQuNjg0IDQyMC41MjMgMzEyLjQ0MSA0NDAuNjI1IDMwOC4wOThDNDM1LjIwNSAzMjcuMjc3IDQyNi45NzMgMzQ1LjI2MiA0MTYuMjM4IDM2MS41MDhaTTM5NS4zMzQgMjY2LjIxNUMzOTguNzU2IDIyOC44MiAzOTYuNTEyIDE1OS40OCAzNTAuODk1IDg5LjMwOUM0MDguODAxIDEyMi40MDYgNDQ4IDE4NC42NiA0NDggMjU2QzQ0OCAyNTYuMzI4IDQ0Ny45NTMgMjU2LjY0NSA0NDcuOTUxIDI1Ni45NzNDNDI5LjQ0NSAyNjIuMjgxIDQxMS43NDIgMjY1LjM0OCAzOTUuMzM0IDI2Ni4yMTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function VolleyballBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.449 16 256C16 388.547 123.451 496 256 496S496 388.547 496 256C496 123.449 388.549 16 256 16ZM256 64C259.902 64 263.715 64.355 267.559 64.586C349.385 140.238 351.244 226.504 347.377 263.699C316.09 258.773 292.701 248.625 279.984 242.059C278.807 210.543 268.895 136.879 209.238 70C224.238 66.223 239.846 64 256 64ZM64 256C64 184.707 103.143 122.496 160.984 89.379C174.777 102.715 186.248 116.473 195.176 130.215C160.873 146.035 102.029 184.008 64.189 259.73C64.166 258.473 64 257.258 64 256ZM84.527 341.887C109.072 233.141 182.811 188.262 216.979 173.004C228.359 202.574 231.264 227.91 231.938 242.199C205.23 258.973 146.4 304.418 118.318 389.52C104.748 375.531 93.371 359.469 84.527 341.887ZM256 448C220.695 448 187.697 438.258 159.244 421.562C163.91 402.891 170.111 386.027 177.572 371.398C206.207 391.727 261.389 422.152 337.781 422.152C342.832 422.152 348.357 421.352 353.592 421.051C324.951 438.055 291.654 448 256 448ZM416.238 361.508C309.744 394.785 233.957 353.297 203.645 331.285C223.561 306.645 244.053 291.465 256.094 283.734C277.602 295.102 323.254 314.684 383.469 314.684C401.277 314.684 420.523 312.441 440.625 308.098C435.205 327.277 426.973 345.262 416.238 361.508ZM395.334 266.215C398.756 228.82 396.512 159.48 350.895 89.309C408.801 122.406 448 184.66 448 256C448 256.328 447.953 256.645 447.951 256.973C429.445 262.281 411.742 265.348 395.334 266.215Z" />
        </Icon>
    </>
}