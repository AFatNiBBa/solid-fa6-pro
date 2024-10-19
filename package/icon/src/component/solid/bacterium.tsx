
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bacterium` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bacterium?s=solid bacterium}
 * @preview ![bacterium](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDMuMDA4IDEwMi45MjhDNTM5LjI5NyA5MC40MTQgNTI2LjA5MiA4My4zMTggNTEzLjQ3NSA4Ny4wMTJMNDk4LjM1NCA5MS40OTJDNDg3LjMwNyA3MC44NDIgNDcwLjM3MyA1NC4zNDggNDQ5Ljg1NCA0NC4wNjZMNDUzLjYzNyAyOS42MDJDNDU2Ljk0NSAxNi45NjUgNDQ5LjMzOCA0LjA1MyA0MzYuNjQ1IDAuNzczQzQyMy44ODkgLTIuNTM1IDQxMC45NzcgNS4wNjggNDA3LjY4NCAxNy42ODlMNDAzLjkyNCAzMi4wNjJDMzkzLjk3NyAzMS43MjMgMzc3LjY5OSAzMi4xNjQgMzM3LjI1NiA0My45NDNMMzMyLjk1NSAzMS45MUMzMjguNTQ5IDE5LjYxMyAzMTQuOTU5IDEzLjEwNCAzMDIuNjE5IDE3LjU2NkMyOTAuMjY2IDIxLjkzNyAyODMuODE4IDM1LjQ1MSAyODguMjA5IDQ3Ljc2NEwyOTIuNTEyIDU5LjgwOUMyNzEuOTA4IDY4LjY5NyAyNTIuMzU2IDc5LjQ1MyAyMzMuODIyIDkxLjYzOUwyMjUuODUyIDgxLjAxQzIxNy45OTYgNzAuNTU5IDIwMy4xMjEgNjguNDIgMTkyLjYwOCA3Ni4yMDdDMTgyLjA5NCA4NC4wMjUgMTc5Ljk0MyA5OC44MzIgMTg3Ljc4MyAxMDkuMjk5TDE5NS43NTggMTE5LjkzMkMxNzguODI2IDEzNC4zMzYgMTYzLjI2OCAxNTAuMjYgMTQ5LjA2NSAxNjcuMzY3TDEzOC4wMjcgMTU5LjMzNkMxMjcuNDUxIDE1MS42MDkgMTEyLjU5MiAxNTMuOTAyIDEwNC44NDYgMTY0LjQ3N0M5Ny4wOTggMTc1LjAyIDk5LjQxOCAxODkuODExIDExMC4wMSAxOTcuNTA4TDEyMS4xMDIgMjA1LjU3NEMxMDkuMjA5IDIyNC4xMzkgOTguNzkzIDI0My43MzYgOTAuMTc2IDI2NC4zMkw3Ny4yNDYgMjU5Ljg4OUM2NC43OTkgMjU1LjY0MSA1MS4zMyAyNjIuMTgyIDQ3LjA2NSAyNzQuNTQxQzQyLjc4MSAyODYuODg1IDQ5LjM4MyAzMDAuMzM4IDYxLjc4MyAzMDQuNTg0TDc0LjgzNCAzMDkuMDU5QzYyLjk3NSAzNTEuMzg5IDYzLjgxMSAzNjQuODE2IDY0LjQ0MiAzNzQuOTlMNDguOTk2IDM3OS41NTdDMzYuNDEgMzgzLjI2NiAyOS4yNTIgMzk2LjQyNiAzMi45OTIgNDA4LjkzOUMzNy4wNDUgNDIyLjU0NyA1MS4wOTIgNDI4LjI5NyA2Mi41MSA0MjQuODY5TDc3LjUyOSA0MjAuNDI4Qzg4LjMwOSA0NDAuNjM1IDEwNS4xMDIgNDU3LjE2MiAxMjYuMDYxIDQ2Ny42NjhMMTIyLjIwOSA0ODIuNDE4QzExOS43MjMgNDkxLjk1OSAxMjQuNzUgNTEyIDE0NS4yMTcgNTEyQzE1NS43NzcgNTEyIDE2NS40MSA1MDQuOTUxIDE2OC4xOTMgNDk0LjI5OUwxNzIuMDEgNDc5LjY3MkMxODIuMjA3IDQ4MC4wNDkgMjA3Ljg2MyA0ODAuNTQ1IDIzNy4wMiA0NjEuNUwyNDguNDcxIDQ3My4yNDRDMjUzLjUwOCA0NzguNDA4IDI2OS4wNTcgNDg2LjI4MyAyODIuMDU1IDQ3My43MzZDMjkxLjQ3MSA0NjQuNjQxIDI5MS42ODggNDQ5LjY4IDI4Mi41NDkgNDQwLjMwN0wyNzAuMzYxIDQyNy44MDlDMjc4LjE2NiA0MTUuNTE0IDI4My45MjYgNDAxLjY3NiAyODYuNDY5IDM4Ni40MDZDMjg3LjY1NCAzNzkuMjk5IDI4OS41NTEgMzcyLjQ1NyAyOTEuNjI3IDM2NS43MDNDMzAyLjI5MSAzNzAuNjkxIDMwNi43ODkgMzczLjU4NCAzMTMuNzUyIDM3My41ODRDMzIyLjY3NCAzNzMuNTg0IDMzMS4yMDkgMzY4LjU2NiAzMzUuMjYgMzU5Ljk5NEMzNDAuODQyIDM0OC4xODkgMzM1LjczOCAzMzQuMTA1IDMyMy44NjMgMzI4LjU0OUwzMTIuMTM3IDMyMy4wNjNDMzMyLjIzMSAyOTMuNDQ3IDM1OC4wMjYgMjc4LjMwNyAzNTguNTcyIDI3Ny45NTVMMzYzLjgwMyAyODkuNzY0QzM2OS4wNzYgMzAxLjYyMyAzODIuOTk0IDMwNy4xMTkgMzk1LjEyOSAzMDEuODYxQzQwNy4xMjcgMjk2LjU4MiA0MTIuNTcgMjgyLjYzNyA0MDcuMjgxIDI3MC42NzhMNDAxLjkyNCAyNTguNTc0QzQwNy4zNjEgMjU3LjA2MyA0MTIuNzQ4IDI1NS40MTIgNDE4LjQwNiAyNTQuNDY5QzQzNS4yMDcgMjUxLjY3MiA0NTAuMjg1IDI0NS4wMSA0NjMuNDI0IDIzNS45MjhMNDc2Ljc1MiAyNDcuOTQ1QzQ4Ni4wNDEgMjU2LjM0IDUwMS4xMjUgMjU2LjM4NSA1MTAuMjg5IDI0Ni4yOTdDNTE5LjEwNCAyMzYuNjE3IDUxOC4zNjEgMjIxLjY3MiA1MDguNjM1IDIxMi45MTRMNDk1LjY4NiAyMDEuMjM4QzUwNy4wMDQgMTgyLjMzNiA1MTIuNjc4IDE2MC4yMTcgNTExLjIwOSAxMzcuMDA2TDUyNy4wMiAxMzIuMzI0QzUzOS41OSAxMjguNiA1NDYuNzQ4IDExNS40MzkgNTQzLjAwOCAxMDIuOTI4Wk0xOTIgMzY4QzE2NS40OSAzNjggMTQ0IDM0Ni41MSAxNDQgMzIwUzE2NS40OSAyNzIgMTkyIDI3MlMyNDAgMjkzLjQ5IDI0MCAzMjBTMjE4LjUxIDM2OCAxOTIgMzY4Wk0yNzIgMjMyQzI1OC43NDYgMjMyIDI0OCAyMjEuMjU0IDI0OCAyMDhDMjQ4IDE5NC43NDQgMjU4Ljc0NiAxODQgMjcyIDE4NEMyODUuMjU2IDE4NCAyOTYgMTk0Ljc0NCAyOTYgMjA4QzI5NiAyMjEuMjU0IDI4NS4yNTYgMjMyIDI3MiAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bacterium(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M543.008 102.928C539.297 90.414 526.092 83.318 513.475 87.012L498.354 91.492C487.307 70.842 470.373 54.348 449.854 44.066L453.637 29.602C456.945 16.965 449.338 4.053 436.645 0.773C423.889 -2.535 410.977 5.068 407.684 17.689L403.924 32.062C393.977 31.723 377.699 32.164 337.256 43.943L332.955 31.91C328.549 19.613 314.959 13.104 302.619 17.566C290.266 21.937 283.818 35.451 288.209 47.764L292.512 59.809C271.908 68.697 252.356 79.453 233.822 91.639L225.852 81.01C217.996 70.559 203.121 68.42 192.608 76.207C182.094 84.025 179.943 98.832 187.783 109.299L195.758 119.932C178.826 134.336 163.268 150.26 149.065 167.367L138.027 159.336C127.451 151.609 112.592 153.902 104.846 164.477C97.098 175.02 99.418 189.811 110.01 197.508L121.102 205.574C109.209 224.139 98.793 243.736 90.176 264.32L77.246 259.889C64.799 255.641 51.33 262.182 47.065 274.541C42.781 286.885 49.383 300.338 61.783 304.584L74.834 309.059C62.975 351.389 63.811 364.816 64.442 374.99L48.996 379.557C36.41 383.266 29.252 396.426 32.992 408.939C37.045 422.547 51.092 428.297 62.51 424.869L77.529 420.428C88.309 440.635 105.102 457.162 126.061 467.668L122.209 482.418C119.723 491.959 124.75 512 145.217 512C155.777 512 165.41 504.951 168.193 494.299L172.01 479.672C182.207 480.049 207.863 480.545 237.02 461.5L248.471 473.244C253.508 478.408 269.057 486.283 282.055 473.736C291.471 464.641 291.688 449.68 282.549 440.307L270.361 427.809C278.166 415.514 283.926 401.676 286.469 386.406C287.654 379.299 289.551 372.457 291.627 365.703C302.291 370.691 306.789 373.584 313.752 373.584C322.674 373.584 331.209 368.566 335.26 359.994C340.842 348.189 335.738 334.105 323.863 328.549L312.137 323.063C332.231 293.447 358.026 278.307 358.572 277.955L363.803 289.764C369.076 301.623 382.994 307.119 395.129 301.861C407.127 296.582 412.57 282.637 407.281 270.678L401.924 258.574C407.361 257.063 412.748 255.412 418.406 254.469C435.207 251.672 450.285 245.01 463.424 235.928L476.752 247.945C486.041 256.34 501.125 256.385 510.289 246.297C519.104 236.617 518.361 221.672 508.635 212.914L495.686 201.238C507.004 182.336 512.678 160.217 511.209 137.006L527.02 132.324C539.59 128.6 546.748 115.439 543.008 102.928ZM192 368C165.49 368 144 346.51 144 320S165.49 272 192 272S240 293.49 240 320S218.51 368 192 368ZM272 232C258.746 232 248 221.254 248 208C248 194.744 258.746 184 272 184C285.256 184 296 194.744 296 208C296 221.254 285.256 232 272 232Z" />
        </Icon>
    </>
}