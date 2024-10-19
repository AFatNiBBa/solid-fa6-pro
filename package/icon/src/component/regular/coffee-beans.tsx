
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coffee-beans` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-beans?s=regular coffee-beans}
 * @preview ![coffee-beans](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzAuMjAxIDE5Ni40NDZDMTYyLjAyNSAxOTMuMzMxIDE0NC4zNzkgMTkyLjAwMSAxMjcuMzM2IDE5Mi4wMDFDMTEwLjUxIDE5Mi4wMDEgOTQuMjc0IDE5My4yOTggODguMzIyIDE5NS40NUMyOS40MDIgMjE2Ljc4MiAtMC4wNDcgMjgzLjc4OCAwIDM1MS42MzhDMC4wNDUgNDE4LjQwNCAyOC42OTkgNDg1Ljc4OSA4NS43OTkgNTA3LjU1M0M5My45NzUgNTEwLjY3IDExMS42MjMgNTEyIDEyOC42NjQgNTEyQzE0NS40OSA1MTIgMTYxLjcyNSA1MTAuNzAzIDE2Ny42NzYgNTA4LjU0OUMyMjYuNiA0ODcuMjIxIDI1Ni4wNDcgNDIwLjIxMyAyNTYgMzUyLjM2M0MyNTUuOTU1IDI4NS41OTcgMjI3LjMwMSAyMTguMjEyIDE3MC4yMDEgMTk2LjQ0NlpNMTExLjE4OCA0NjMuMzgzQzEwNi40MzIgNDYzLjAxMyAxMDMuMjYyIDQ2Mi41NjggMTAxLjgyNiA0NjIuMjgxQzY0LjY5NyA0NDcuMjg1IDQ4LjAyOSAzOTYuMDc2IDQ4IDM1MS42MDVDNDcuOTcxIDMxMS4wMzggNjIuMzg3IDI2NS4zMjEgOTMuODQgMjQ2LjIxMkM3Ny43MDcgMjkwLjA4NSA4Mi4wMjUgMzMzLjMyNCAxMDcuNTYzIDM3MC42NThDMTI4LjA0MSA0MDAuNjkzIDEyOS4xNDUgNDMxLjg4MSAxMTEuMTg4IDQ2My4zODNaTTE2Ni42NjggNDU1LjIyOEMxNzcuNzA5IDQxNy40NTEgMTcxLjI0MiAzNzguODQxIDE0Ny4xODggMzQzLjU2NEMxMjYuNDM2IDMxMy4yMzkgMTI3LjE2NCAyNzguNzI0IDE0OC45ODQgMjQxLjAxN0MxNTEuMzM0IDI0MS4yNzQgMTUzLjI0IDI0MS41MzIgMTU0LjE3NiAyNDEuNzJDMTkxLjMwNSAyNTYuNzE4IDIwNy45NzEgMzA3LjkyNSAyMDggMzUyLjM5NkMyMDguMDI3IDM5MS4wNTggMTk1LjEwOCA0MzQuNjcyIDE2Ni42NjggNDU1LjIyOFpNNDU1LjU1MSA1Ni45M0M0MjEuODA5IDIzLjIzMyAzNzcuMTI5IDAgMzM0LjM3MyAwQzMxOS4zODkgMCAzMDQuNjQ3IDIuODUyIDI5MC42ODYgOS4xMDZDMjc1LjM3OSAxNS45NjUgMjM5LjM3MSA1My4xNDcgMjM0LjE2IDY0LjI3NEMyMDguNTIyIDExOS4wMSAyMzQuMTM5IDE4NC44IDI4MC40NDcgMjMxLjA0NkMzMTQuMTkyIDI2NC43NDMgMzU4Ljg3MSAyODcuOTc2IDQwMS42MjUgMjg3Ljk3NkM0MTYuNjEgMjg3Ljk3NiA0MzEuMzU0IDI4NS4xMjQgNDQ1LjMxMyAyNzguODdDNDYwLjYyMSAyNzIuMDExIDQ5Ni42MjcgMjM0LjgyOSA1MDEuODM4IDIyMy43MDJDNTI3LjQ4MSAxNjguOTY1IDUwMS44NjIgMTAzLjE3NiA0NTUuNTUxIDU2LjkzWk00MjQuNjA0IDIzNS41MzZDNDE3LjYxMyAyMzguNDgzIDQwOS44OTEgMjM5Ljk3NiA0MDEuNjI1IDIzOS45NzZDMzc0LjI5NSAyMzkuOTc2IDM0MC44NiAyMjMuNTQgMzE0LjM2NSAxOTcuMDgxQzI4OS43MTcgMTcyLjQ2NyAyNzAuMTg4IDEzNy4xODQgMjcyLjU4IDEwNS42NjZDMjk0LjAyOSAxNDEuMDAyIDMyNi4yMDUgMTY0LjEyNiAzNjcuMDk0IDE3MS44MTNDNDAwLjY5NyAxNzguMTQxIDQyMy4yOTcgMTk2Ljg0MyA0MzUuNzc4IDIyNi4xNTdDNDMxLjQwMyAyMzAuMTk2IDQyNy4yOTUgMjMzLjc4NiA0MjQuNjA0IDIzNS41MzZaTTM3NS45NjkgMTI0LjYyNUMzNDEuMDQ3IDExOC4wNTUgMzE2LjU4MiA5Ni4wMzkgMzAyLjkyNiA1OS4yNzJDMzA2LjI1NCA1Ni4zMDUgMzA5LjI1NCA1My44MzIgMzExLjM5NyA1Mi40NEMzMTguMzg3IDQ5LjQ5MiAzMjYuMTEgNDggMzM0LjM3MyA0OEMzNjEuNzAzIDQ4IDM5NS4xMzkgNjQuNDM2IDQyMS42MzMgOTAuODk1QzQ0NC45OTYgMTE0LjIyNSA0NjMuNzg1IDE0Ny4xNDMgNDYzLjY3NiAxNzcuMzU4QzQ0My4yMTEgMTQ5Ljk0NCA0MTMuNDA0IDEzMS42ODYgMzc1Ljk2OSAxMjQuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CoffeeBeans(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M170.201 196.446C162.025 193.331 144.379 192.001 127.336 192.001C110.51 192.001 94.274 193.298 88.322 195.45C29.402 216.782 -0.047 283.788 0 351.638C0.045 418.404 28.699 485.789 85.799 507.553C93.975 510.67 111.623 512 128.664 512C145.49 512 161.725 510.703 167.676 508.549C226.6 487.221 256.047 420.213 256 352.363C255.955 285.597 227.301 218.212 170.201 196.446ZM111.188 463.383C106.432 463.013 103.262 462.568 101.826 462.281C64.697 447.285 48.029 396.076 48 351.605C47.971 311.038 62.387 265.321 93.84 246.212C77.707 290.085 82.025 333.324 107.563 370.658C128.041 400.693 129.145 431.881 111.188 463.383ZM166.668 455.228C177.709 417.451 171.242 378.841 147.188 343.564C126.436 313.239 127.164 278.724 148.984 241.017C151.334 241.274 153.24 241.532 154.176 241.72C191.305 256.718 207.971 307.925 208 352.396C208.027 391.058 195.108 434.672 166.668 455.228ZM455.551 56.93C421.809 23.233 377.129 0 334.373 0C319.389 0 304.647 2.852 290.686 9.106C275.379 15.965 239.371 53.147 234.16 64.274C208.522 119.01 234.139 184.8 280.447 231.046C314.192 264.743 358.871 287.976 401.625 287.976C416.61 287.976 431.354 285.124 445.313 278.87C460.621 272.011 496.627 234.829 501.838 223.702C527.481 168.965 501.862 103.176 455.551 56.93ZM424.604 235.536C417.613 238.483 409.891 239.976 401.625 239.976C374.295 239.976 340.86 223.54 314.365 197.081C289.717 172.467 270.188 137.184 272.58 105.666C294.029 141.002 326.205 164.126 367.094 171.813C400.697 178.141 423.297 196.843 435.778 226.157C431.403 230.196 427.295 233.786 424.604 235.536ZM375.969 124.625C341.047 118.055 316.582 96.039 302.926 59.272C306.254 56.305 309.254 53.832 311.397 52.44C318.387 49.492 326.11 48 334.373 48C361.703 48 395.139 64.436 421.633 90.895C444.996 114.225 463.785 147.143 463.676 177.358C443.211 149.944 413.404 131.686 375.969 124.625Z" />
        </Icon>
    </>
}