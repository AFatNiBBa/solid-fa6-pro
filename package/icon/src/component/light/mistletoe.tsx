
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mistletoe` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=light mistletoe}
 * @preview ![mistletoe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDcuOTY1IDI2OC43MTlDNTE4LjYyNSAyMzkuNDE2IDQzMi4wMzcgMjI3LjU1OSA0MDcuMzc3IDIyNC43MjVMMzA3LjMxNiAxMjQuNjg3QzMwNi4zMzggMTIzLjcwOSAzMDUuMTQyIDEyMy4xNiAzMDQuMDA0IDEyMi40ODhWMTZDMzA0LjAwNCA3LjE1NiAyOTYuODQ2IDAgMjg4IDBTMjcxLjk5NiA3LjE1NiAyNzEuOTk2IDE2VjEyMS4zNzVMMTY4LjYyMyAyMjQuNzI1QzE0My45NjMgMjI3LjU1OSA1Ny4zNzUgMjM5LjQxNiAyOC4wMzUgMjY4LjcxOUMtNy40MSAzMDQuMTg3IC05LjUzNSAzNTkuNzgxIDIzLjMxNiAzOTIuNjI1QzM4LjkxMiA0MDguMjE5IDU5LjY2OCA0MTUuOTM3IDgwLjkyMiA0MTUuOTM3QzEwNC40MjggNDE1LjkzNyAxMjguNjIxIDQwNi41MzEgMTQ3LjI1IDM4Ny45MDZDMTUzLjUwMiAzODEuNjU2IDE1My41MDIgMzcxLjUzMSAxNDcuMjUgMzY1LjI4MVMxMzAuODcxIDM1OS4wMzEgMTI0LjYxOSAzNjUuMjgxQzEwMS42NDYgMzg4LjE4OCA2Ni4zNTcgMzkwLjQwNiA0NS45NDUgMzcwQzI1LjU2NiAzNDkuNjI1IDI3LjY5MSAzMTQuMzQ0IDUwLjY2NiAyOTEuMzQ0QzYzLjQ0MyAyNzguNTY4IDEwMC44NDYgMjY4LjQxNiAxMzUuNjkxIDI2Mi4wMzNDMTMwLjg0NyAyNjkuNTI5IDEyNy45NjUgMjc4LjQxMiAxMjcuOTY1IDI4OEMxMjcuOTY1IDMxNC41MSAxNDkuNDU5IDMzNiAxNzUuOTc0IDMzNlMyMjMuOTg2IDMxNC41MSAyMjMuOTg2IDI4OEMyMjMuOTg2IDI2OC4xNjIgMjExLjk0MSAyNTEuMTQ2IDE5NC43NzEgMjQzLjgzMkwyNzEuOTk2IDE2Ni42MjVWMjc0Ljc2OEMyNDQuNjk3IDMwNy44MTEgMTkxLjk3OCAzNzYuNjkxIDE5MS45NzggNDE2QzE5MS45NzggNDY5LjAyIDIzNC45NjkgNTEyIDI4OCA1MTJTMzg0LjAyMSA0NjkuMDIgMzg0LjAyMSA0MTZDMzg0LjAyMSAzNzYuNjkxIDMzMS4zMDMgMzA3LjgxMSAzMDQuMDA0IDI3NC43NjhWMTY2LjYyNUwzODQuNzQ4IDI0Ny4zNTJDMzg3LjU4NCAyNzIuMDA4IDM5OS40MzkgMzU4LjU3NCA0MjguNzUgMzg3LjkwNkM0NDcuMzc5IDQwNi41MzEgNDcxLjU0MSA0MTUuOTM4IDQ5NS4wNzggNDE1LjkzOEM1MTYuMzMyIDQxNS45MzggNTM3LjA4OCA0MDguMjE5IDU1Mi42ODMgMzkyLjYyNUM1ODUuNTM1IDM1OS43ODEgNTgzLjQxIDMwNC4xODggNTQ3Ljk2NSAyNjguNzE5Wk0xNzUuOTc0IDMwNEMxNjcuMTUgMzA0IDE1OS45NzEgMjk2LjgyMiAxNTkuOTcxIDI4OFMxNjcuMTUgMjcyIDE3NS45NzQgMjcyUzE5MS45NzggMjc5LjE3OCAxOTEuOTc4IDI4OFMxODQuNzk5IDMwNCAxNzUuOTc0IDMwNFpNMjg4IDQ4MEMyNTIuNzAzIDQ4MCAyMjMuOTg2IDQ1MS4yODkgMjIzLjk4NiA0MTZDMjIzLjk4NiAzOTUuNjA0IDI1NC4wNjQgMzQ3Ljk2OSAyODggMzA1LjU0N0MzMjEuOTM1IDM0Ny45NjkgMzUyLjAxMyAzOTUuNjA0IDM1Mi4wMTMgNDE2QzM1Mi4wMTMgNDUxLjI4OSAzMjMuMjk3IDQ4MCAyODggNDgwWk01MzAuMDU1IDM3MEM1MDkuNzA1IDM5MC4zNDQgNDc0LjM4NSAzODguMjE5IDQ1MS4zODEgMzY1LjI4MUM0MzYuMDU2IDM0OS45MyA0MjQuMzkgMjk5LjA0OSA0MTguNjI3IDI1OS43ODdDNDE4Ljg0NiAyNTkuNTkgNDE5LjEzMSAyNTkuNTIzIDQxOS4zNDIgMjU5LjMxM1M0MTkuNjE5IDI1OC44MTYgNDE5LjgxNiAyNTguNTk4QzQ1OS4wODggMjY0LjM1OSA1MDkuOTc4IDI3Ni4wMjMgNTI1LjMzNCAyOTEuMzQ0QzU0OC4zMDggMzE0LjM0NCA1NTAuNDMzIDM0OS42MjUgNTMwLjA1NSAzNzBaTTM4Mi42OTEgMTI0QzQwOS4yMDcgMTI0IDQzMC43MDEgMTAyLjUxIDQzMC43MDEgNzZTNDA5LjIwNyAyOCAzODIuNjkxIDI4UzMzNC42OCA0OS40OSAzMzQuNjggNzZTMzU2LjE3NiAxMjQgMzgyLjY5MSAxMjRaTTM4Mi42OTEgNjBDMzkxLjUxNSA2MCAzOTguNjk1IDY3LjE3OCAzOTguNjk1IDc2UzM5MS41MTUgOTIgMzgyLjY5MSA5MlMzNjYuNjg3IDg0LjgyMiAzNjYuNjg3IDc2UzM3My44NjcgNjAgMzgyLjY5MSA2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mistletoe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M547.965 268.719C518.625 239.416 432.037 227.559 407.377 224.725L307.316 124.687C306.338 123.709 305.142 123.16 304.004 122.488V16C304.004 7.156 296.846 0 288 0S271.996 7.156 271.996 16V121.375L168.623 224.725C143.963 227.559 57.375 239.416 28.035 268.719C-7.41 304.187 -9.535 359.781 23.316 392.625C38.912 408.219 59.668 415.937 80.922 415.937C104.428 415.937 128.621 406.531 147.25 387.906C153.502 381.656 153.502 371.531 147.25 365.281S130.871 359.031 124.619 365.281C101.646 388.188 66.357 390.406 45.945 370C25.566 349.625 27.691 314.344 50.666 291.344C63.443 278.568 100.846 268.416 135.691 262.033C130.847 269.529 127.965 278.412 127.965 288C127.965 314.51 149.459 336 175.974 336S223.986 314.51 223.986 288C223.986 268.162 211.941 251.146 194.771 243.832L271.996 166.625V274.768C244.697 307.811 191.978 376.691 191.978 416C191.978 469.02 234.969 512 288 512S384.021 469.02 384.021 416C384.021 376.691 331.303 307.811 304.004 274.768V166.625L384.748 247.352C387.584 272.008 399.439 358.574 428.75 387.906C447.379 406.531 471.541 415.938 495.078 415.938C516.332 415.938 537.088 408.219 552.683 392.625C585.535 359.781 583.41 304.188 547.965 268.719ZM175.974 304C167.15 304 159.971 296.822 159.971 288S167.15 272 175.974 272S191.978 279.178 191.978 288S184.799 304 175.974 304ZM288 480C252.703 480 223.986 451.289 223.986 416C223.986 395.604 254.064 347.969 288 305.547C321.935 347.969 352.013 395.604 352.013 416C352.013 451.289 323.297 480 288 480ZM530.055 370C509.705 390.344 474.385 388.219 451.381 365.281C436.056 349.93 424.39 299.049 418.627 259.787C418.846 259.59 419.131 259.523 419.342 259.313S419.619 258.816 419.816 258.598C459.088 264.359 509.978 276.023 525.334 291.344C548.308 314.344 550.433 349.625 530.055 370ZM382.691 124C409.207 124 430.701 102.51 430.701 76S409.207 28 382.691 28S334.68 49.49 334.68 76S356.176 124 382.691 124ZM382.691 60C391.515 60 398.695 67.178 398.695 76S391.515 92 382.691 92S366.687 84.822 366.687 76S373.867 60 382.691 60Z" />
        </Icon>
    </>
}