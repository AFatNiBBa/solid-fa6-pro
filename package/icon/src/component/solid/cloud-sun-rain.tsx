
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-sun-rain` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sun-rain?s=solid cloud-sun-rain}
 * @preview ![cloud-sun-rain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuNzM1IDEzOS45OTFDMjQ0Ljc4MSAxMjUuNTAxIDIyNy41NzMgMTE1Ljk5NyAyMDguMDEgMTE1Ljk5N0MxNzQuODcxIDExNS45OTcgMTQ4LjAwNiAxNDIuODYxIDE0OC4wMDYgMTc1Ljk5OUMxNDguMDA2IDIwMS41NjIgMTY0LjA2NiAyMjMuMjQgMTg2LjU4NyAyMzEuODgyQzE5Ny4yMjYgMjE5LjI5IDIxMC41MzMgMjA4Ljk0MSAyMjUuODY4IDIwMS45ODJDMjI5Ljk1OCAxNzguNDU2IDI0MC42NDYgMTU3LjI1OSAyNTUuNzM1IDEzOS45OTFaTTEyMC4wMDUgMTc1Ljk5OUMxMjAuMDA1IDEyNy4zOTYgMTU5LjQwNSA4Ny45OTcgMjA4LjAxIDg3Ljk5N0MyMzUuODEgODcuOTk3IDI2MC4yOTggMTAxLjE0MiAyNzYuNDI1IDEyMS4yNjlDMjk3LjY2NSAxMDUuNTk5IDMyMy42MjUgOTUuOTY4IDM1MS45ODYgOTUuOTY4QzM1MS45OTYgOTUuOTY4IDM1Mi4wMDggOTUuOTcgMzUyLjAxNyA5NS45N0wzMDAuNDM1IDgzLjU3OUwyODYuODg5IDguNjM4QzI4NS45MzUgMy4zNDYgMjgxLjM1MyAwLjAwMSAyNzYuNTM0IDAuMDAxQzI3NC41MDcgMC4wMDEgMjcyLjQzOCAwLjU5MyAyNzAuNTc5IDEuODgyTDIwOC4wMSA0NS4zTDE0NS40MzggMS44ODJDMTQzLjU4IDAuNTkyIDE0MS41MTEgMCAxMzkuNDg0IDBDMTM0LjY2NiAwIDEzMC4wODQgMy4zNDYgMTI5LjEyOCA4LjYzNkwxMTUuNTg1IDgzLjU3OUw0MC42MzcgOTcuMTIyQzM1LjM0OCA5OC4wNzggMzIgMTAyLjY2IDMyIDEwNy40NzhDMzIgMTA5LjUwNCAzMi41OTIgMTExLjU3MiAzMy44ODEgMTEzLjQyOUw3Ny4zMDEgMTc2LjAwMUwzMy44ODMgMjM4LjU3QzMyLjU5NCAyNDAuNDI3IDMyLjAwMiAyNDIuNDk2IDMyLjAwMiAyNDQuNTIyQzMyLjAwMiAyNDkuMzM5IDM1LjM0OCAyNTMuOTE5IDQwLjYzNyAyNTQuODc0TDExNS41ODUgMjY4LjQxN0wxMjkuMTI4IDM0My4zNjNDMTMwLjA4NCAzNDguNjUyIDEzNC42NjYgMzUxLjk5OCAxMzkuNDg0IDM1MS45OThDMTQxLjUxMSAzNTEuOTk4IDE0My41OCAzNTEuNDA2IDE0NS40MzggMzUwLjExN0wxNjQuOTEgMzM2LjYwN0MxNjEuNzQ5IDMyNi4yNjcgMTU5Ljk3NiAzMTUuMzMgMTU5Ljk3NiAzMDMuOTY4QzE1OS45NzYgMjg2Ljc5OCAxNjQuMDA3IDI3MC4zOTggMTcxLjEyMSAyNTUuNjUyQzE0MS4wMDggMjQxLjY3NyAxMjAuMDA1IDIxMS4zOCAxMjAuMDA1IDE3NS45OTlaTTU0Mi40OTYgMjI1LjQ2OEM1MzUuNjIxIDE4OC4yMTggNTAzLjI0NCAxNTkuOTY4IDQ2My45OTIgMTU5Ljk2OEM0NTEuNzQyIDE1OS45NjggNDQwLjExNiAxNjIuOTY4IDQyOS43NCAxNjcuOTY4QzQxMi4yMzkgMTQzLjg0MyAzODQuMTEzIDEyNy45NjggMzUxLjk4NiAxMjcuOTY4QzI5OC45ODMgMTI3Ljk2OCAyNTUuOTgxIDE3MC45NjggMjU1Ljk4MSAyMjMuOTY4QzI1NS45ODEgMjI0LjQ2OCAyNTYuMjMxIDIyNS4wOTMgMjU2LjIzMSAyMjUuNTkzQzIxOS42MDQgMjMyLjk2OCAxOTEuOTc4IDI2NS4yMTggMTkxLjk3OCAzMDMuOTY4QzE5MS45NzggMzQ4LjIxOCAyMjcuNzI5IDM4My45NjkgMjcxLjk4MiAzODMuOTY5SDUyNy45OTZDNTcyLjI0OCAzODMuOTY5IDYwOCAzNDguMjE4IDYwOCAzMDMuOTY4QzYwOCAyNjQuNzE4IDU3OS43NDggMjMyLjIxOCA1NDIuNDk2IDIyNS40NjhaTTU1Mi4wNDggNDE2LjAwMUM1NDQuMjk1IDQxNi4wMDEgNTM2LjY4NyA0MTkuNzUgNTMyLjA1OCA0MjYuNjg3TDUwMC4wNTcgNDc0LjY4N0M0OTcuMzI2IDQ3OC43OCA0OTYuMDE5IDQ4My40MDcgNDk2LjAxOSA0ODcuOTgyQzQ5Ni4wMTkgNTAxLjQzNCA1MDYuOTUzIDUxMiA1MjAuMDExIDUxMkM1MjcuNzYxIDUxMiA1MzUuMzcxIDUwOC4yNSA1MzkuOTk2IDUwMS4zMTJMNTcxLjk5OCA0NTMuMzEyQzU3NC43MjkgNDQ5LjIyIDU3Ni4wMzUgNDQ0LjU5MyA1NzYuMDM1IDQ0MC4wMThDNTc2LjAzNSA0MjYuNjI4IDU2NS4xNTggNDE2LjAwMSA1NTIuMDQ4IDQxNi4wMDFaTTQ1Ni4wNTQgNDE2LjAwMUM0NDguMzAzIDQxNi4wMDEgNDQwLjY5MiA0MTkuNzUgNDM2LjA1MyA0MjYuNjg3TDQwNC4wNTEgNDc0LjY4N0M0MDEuMzIxIDQ3OC43OCA0MDAuMDE0IDQ4My40MDcgNDAwLjAxNCA0ODcuOTgyQzQwMC4wMTQgNTAxLjQzNCA0MTAuOTQ4IDUxMiA0MjQuMDA2IDUxMkM0MzEuNzU2IDUxMiA0MzkuMzY2IDUwOC4yNSA0NDMuOTkxIDUwMS4zMTJMNDc1Ljk5MyA0NTMuMzEyQzQ3OC43MjQgNDQ5LjIyIDQ4MC4wMyA0NDQuNTkzIDQ4MC4wMyA0NDAuMDE4QzQ4MC4wMyA0MjYuNTg3IDQ2OS4xMTEgNDE2LjAwMSA0NTYuMDU0IDQxNi4wMDFaTTM2MC4wMzggNDE2LjAwMUMzNTIuMjg0IDQxNi4wMDEgMzQ0LjY3NyA0MTkuNzUgMzQwLjA0OCA0MjYuNjg3TDMwOC4wNDYgNDc0LjY4N0MzMDUuMzE2IDQ3OC43OCAzMDQuMDA5IDQ4My40MDcgMzA0LjAwOSA0ODcuOTgyQzMwNC4wMDkgNTAxLjQzNCAzMTQuOTQyIDUxMiAzMjguMDAxIDUxMkMzMzUuNzUxIDUxMiAzNDMuMzYxIDUwOC4yNSAzNDcuOTg2IDUwMS4zMTJMMzc5Ljk4OCA0NTMuMzEyQzM4Mi43MTggNDQ5LjIyIDM4NC4wMjUgNDQ0LjU5MyAzODQuMDI1IDQ0MC4wMThDMzg0LjAyNSA0MjYuNjI4IDM3My4xNDggNDE2LjAwMSAzNjAuMDM4IDQxNi4wMDFaTTI2NC4wMjEgNDE2LjAwMUMyNTYuMjY2IDQxNi4wMDEgMjQ4LjY2MiA0MTkuNzUgMjQ0LjA0MyA0MjYuNjg3TDIxMi4wNDEgNDc0LjY4N0MyMDkuMzEgNDc4Ljc4IDIwOC4wMDQgNDgzLjQwNyAyMDguMDA0IDQ4Ny45ODJDMjA4LjAwNCA1MDEuNDM0IDIxOC45MzcgNTEyIDIzMS45OTUgNTEyQzIzOS43NDYgNTEyIDI0Ny4zNTYgNTA4LjI1IDI1MS45ODEgNTAxLjMxMkwyODMuOTgzIDQ1My4zMTJDMjg2LjcxMyA0NDkuMjIgMjg4LjAyIDQ0NC41OTMgMjg4LjAyIDQ0MC4wMThDMjg4LjAyIDQyNi42MSAyNzcuMTMyIDQxNi4wMDEgMjY0LjAyMSA0MTYuMDAxWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function CloudSunRain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M255.735 139.991C244.781 125.501 227.573 115.997 208.01 115.997C174.871 115.997 148.006 142.861 148.006 175.999C148.006 201.562 164.066 223.24 186.587 231.882C197.226 219.29 210.533 208.941 225.868 201.982C229.958 178.456 240.646 157.259 255.735 139.991ZM120.005 175.999C120.005 127.396 159.405 87.997 208.01 87.997C235.81 87.997 260.298 101.142 276.425 121.269C297.665 105.599 323.625 95.968 351.986 95.968C351.996 95.968 352.008 95.97 352.017 95.97L300.435 83.579L286.889 8.638C285.935 3.346 281.353 0.001 276.534 0.001C274.507 0.001 272.438 0.593 270.579 1.882L208.01 45.3L145.438 1.882C143.58 0.592 141.511 0 139.484 0C134.666 0 130.084 3.346 129.128 8.636L115.585 83.579L40.637 97.122C35.348 98.078 32 102.66 32 107.478C32 109.504 32.592 111.572 33.881 113.429L77.301 176.001L33.883 238.57C32.594 240.427 32.002 242.496 32.002 244.522C32.002 249.339 35.348 253.919 40.637 254.874L115.585 268.417L129.128 343.363C130.084 348.652 134.666 351.998 139.484 351.998C141.511 351.998 143.58 351.406 145.438 350.117L164.91 336.607C161.749 326.267 159.976 315.33 159.976 303.968C159.976 286.798 164.007 270.398 171.121 255.652C141.008 241.677 120.005 211.38 120.005 175.999ZM542.496 225.468C535.621 188.218 503.244 159.968 463.992 159.968C451.742 159.968 440.116 162.968 429.74 167.968C412.239 143.843 384.113 127.968 351.986 127.968C298.983 127.968 255.981 170.968 255.981 223.968C255.981 224.468 256.231 225.093 256.231 225.593C219.604 232.968 191.978 265.218 191.978 303.968C191.978 348.218 227.729 383.969 271.982 383.969H527.996C572.248 383.969 608 348.218 608 303.968C608 264.718 579.748 232.218 542.496 225.468ZM552.048 416.001C544.295 416.001 536.687 419.75 532.058 426.687L500.057 474.687C497.326 478.78 496.019 483.407 496.019 487.982C496.019 501.434 506.953 512 520.011 512C527.761 512 535.371 508.25 539.996 501.312L571.998 453.312C574.729 449.22 576.035 444.593 576.035 440.018C576.035 426.628 565.158 416.001 552.048 416.001ZM456.054 416.001C448.303 416.001 440.692 419.75 436.053 426.687L404.051 474.687C401.321 478.78 400.014 483.407 400.014 487.982C400.014 501.434 410.948 512 424.006 512C431.756 512 439.366 508.25 443.991 501.312L475.993 453.312C478.724 449.22 480.03 444.593 480.03 440.018C480.03 426.587 469.111 416.001 456.054 416.001ZM360.038 416.001C352.284 416.001 344.677 419.75 340.048 426.687L308.046 474.687C305.316 478.78 304.009 483.407 304.009 487.982C304.009 501.434 314.942 512 328.001 512C335.751 512 343.361 508.25 347.986 501.312L379.988 453.312C382.718 449.22 384.025 444.593 384.025 440.018C384.025 426.628 373.148 416.001 360.038 416.001ZM264.021 416.001C256.266 416.001 248.662 419.75 244.043 426.687L212.041 474.687C209.31 478.78 208.004 483.407 208.004 487.982C208.004 501.434 218.937 512 231.995 512C239.746 512 247.356 508.25 251.981 501.312L283.983 453.312C286.713 449.22 288.02 444.593 288.02 440.018C288.02 426.61 277.132 416.001 264.021 416.001Z " />
        </Icon>
    </>
}