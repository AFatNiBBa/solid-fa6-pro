
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `beer-mug` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug?s=regular beer-mug}
 * @preview ![beer-mug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjMuOTkxIDE1Ni42OTNIMzgzLjk4N1YxNDQuMDlDMzk3LjU5OSAxMjUuMjczIDQwMi45OTggMTAxLjY0MSAzOTguMjM4IDc4LjE5M0MzOTIuMDk3IDQ3LjkzNCAzNjkuMjQ5IDIzLjU5IDM0MC4wNTYgMTYuMTVDMzE4Ljc4NyAxMC43MDMgMjk2Ljk1NCAxNC4wMzEgMjc4LjY1NCAyNS41MDRDMjc0LjkxOSAyNy44NzUgMjczLjAxMiAyNi4wMzcgMjcyLjI5NCAyNS4zNDhDMjM3LjM0OCAtOC40NjEgMTc4LjU1NyAtOC40MyAxNDMuNjc1IDI1LjMxNkMxNDIuOTU2IDI2LjAyMSAxNDEuMDY1IDI3Ljg0NCAxMzcuMjY4IDI1LjQ4OEMxMTguOTM2IDE0LjAzMSA5Ny4xNSAxMC43MDMgNzUuODk2IDE2LjE1QzQ2LjY4OCAyMy41OSAyMy44NCA0Ny45MzQgMTcuNjk5IDc4LjE5M0MxMi45MzkgMTAxLjY0MSAxOC4zMzggMTI1LjI3MyAzMS45NSAxNDQuMDlWNDMyQzMxLjk1IDQ3Ni4xODIgNjcuNzcgNTEyIDExMS45NTkgNTEySDMwMy45NzhDMzQzLjQxOCA1MTIgMzc2LjAwMyA0ODMuNDA2IDM4Mi41OSA0NDUuODU5TDQ1OS4yNTQgNDExLjQ2N0M0OTEuMjk3IDM5Ny40NTMgNTEyIDM2NS44MDMgNTEyIDMzMC44MzRWMjQ0LjY5M0M1MTIgMTk2LjA5MiA0NzIuNTk3IDE1Ni42OTMgNDIzLjk5MSAxNTYuNjkzWk0zMzUuOTgyIDQzMkMzMzUuOTgyIDQ0OS42NzIgMzIxLjY1NCA0NjQgMzAzLjk3OCA0NjRIMTExLjk1OUM5NC4yODMgNDY0IDc5Ljk1NSA0NDkuNjcyIDc5Ljk1NSA0MzJWMTc0Ljk2MUMxMDAuNDQ0IDE3OS4yMTkgMTIyLjM5MSAxNzUuOTY1IDE0MC4xMTIgMTYzLjc3OUMxNDAuNzY4IDE2My44NTcgMTQyLjIwNiAxNjQuMzkxIDE0My42MjggMTY1Ljc3M0MxNjEuMSAxODIuNjkxIDE4My45NDggMTkyIDIwNy45NjggMTkyUzI1NC44MzcgMTgyLjY5MSAyNzIuMjk0IDE2NS43NzNDMjczLjkzNCAxNjQuMjAzIDI3NS41NDQgMTYzLjczMiAyNzUuNTQ0IDE2My41OTJDMjkzLjMyMSAxNzUuOTIyIDMxNS4zOSAxNzkuMjM2IDMzNS45ODIgMTc0Ljk2M1Y0MzJaTTM0NC4zMDcgMTE3LjUxQzMzNC4xNzkgMTI5Ljk3MyAzMTUuNzA4IDEzMi44NDQgMzAyLjgzIDEyMy45MTRDMjgzLjQ2NyAxMTAuNDQ3IDI1Ny4yMjggMTEzLjM5OCAyMzguOTg5IDEzMS4wNTVDMjIyLjAxOSAxNDcuNDczIDE5My45MzQgMTQ3LjQ3MyAxNzYuOTMyIDEzMS4wNTVDMTY2LjM1MSAxMjAuODA3IDE1My4wNjggMTE1LjUzMyAxMzkuOTg3IDExNS41MzNDMTMwLjU0OCAxMTUuNTMzIDEyMS4yMTcgMTE4LjI5NSAxMTMuMTA3IDEyMy45MTRDMTAwLjI0NCAxMzIuODI4IDgxLjc3NCAxMjkuOTQxIDcxLjYzIDExNy41MUM2NC45NzMgMTA5LjMwMSA2Mi41MiA5OC43NyA2NC43MzkgODcuODNDNjcuMTQ1IDc1Ljk2NSA3Ni41ODQgNjUuNzE1IDg3LjY5NiA2Mi44OTFDOTguNTg4IDYwLjE2IDEwNi44NzIgNjMuMjk5IDExMS44NzMgNjYuNDIyQzEzMy4xNTggNzkuNjk5IDE1OS4zMDMgNzcuMTc0IDE3Ni45NjMgNjAuMDY0QzE5My45MDMgNDMuNjggMjIyLjAwMyA0My42NDggMjM5LjAwNSA2MC4wOTZDMjU2LjcxMiA3Ny4xODkgMjgyLjg0MSA3OS42NTIgMzA0LjA0OSA2Ni40MjJDMzA5LjA5NiA2My4yOTkgMzE3LjM5NiA2MC4xNDUgMzI4LjI1NiA2Mi44OTFDMzM5LjM1MyA2NS43MTUgMzQ4Ljc5MiA3NS45NjUgMzUxLjE5OCA4Ny44M0MzNTMuNDE3IDk4Ljc3IDM1MC45NjQgMTA5LjMwMSAzNDQuMzA3IDExNy41MVpNNDYzLjk5NSAzMzAuODM0QzQ2My45OTUgMzQ2LjcyNSA0NTQuNTg4IDM2MS4xMTUgNDQwLjAyNCAzNjcuNDlMMzgzLjk4NyAzOTJWMjA0LjY5M0g0MjMuOTkxQzQ0Ni4wNTYgMjA0LjY5MyA0NjMuOTk1IDIyMi42MzEgNDYzLjk5NSAyNDQuNjkzVjMzMC44MzRaTTE1OS45NjQgMjQwVjQwOEMxNTkuOTY0IDQxNi44NDQgMTUyLjgwNyA0MjQgMTQzLjk2MiA0MjRTMTI3Ljk2IDQxNi44NDQgMTI3Ljk2IDQwOFYyNDBDMTI3Ljk2IDIzMS4xNTYgMTM1LjExNyAyMjQgMTQzLjk2MiAyMjRTMTU5Ljk2NCAyMzEuMTU2IDE1OS45NjQgMjQwWk0yMjMuOTcgMjQwVjQwOEMyMjMuOTcgNDE2Ljg0NCAyMTYuODEzIDQyNCAyMDcuOTY4IDQyNFMxOTEuOTY3IDQxNi44NDQgMTkxLjk2NyA0MDhWMjQwQzE5MS45NjcgMjMxLjE1NiAxOTkuMTI0IDIyNCAyMDcuOTY4IDIyNFMyMjMuOTcgMjMxLjE1NiAyMjMuOTcgMjQwWk0yODcuOTc3IDI0MFY0MDhDMjg3Ljk3NyA0MTYuODQ0IDI4MC44MiA0MjQgMjcxLjk3NSA0MjRTMjU1Ljk3MyA0MTYuODQ0IDI1NS45NzMgNDA4VjI0MEMyNTUuOTczIDIzMS4xNTYgMjYzLjEzIDIyNCAyNzEuOTc1IDIyNFMyODcuOTc3IDIzMS4xNTYgMjg3Ljk3NyAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BeerMug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M423.991 156.693H383.987V144.09C397.599 125.273 402.998 101.641 398.238 78.193C392.097 47.934 369.249 23.59 340.056 16.15C318.787 10.703 296.954 14.031 278.654 25.504C274.919 27.875 273.012 26.037 272.294 25.348C237.348 -8.461 178.557 -8.43 143.675 25.316C142.956 26.021 141.065 27.844 137.268 25.488C118.936 14.031 97.15 10.703 75.896 16.15C46.688 23.59 23.84 47.934 17.699 78.193C12.939 101.641 18.338 125.273 31.95 144.09V432C31.95 476.182 67.77 512 111.959 512H303.978C343.418 512 376.003 483.406 382.59 445.859L459.254 411.467C491.297 397.453 512 365.803 512 330.834V244.693C512 196.092 472.597 156.693 423.991 156.693ZM335.982 432C335.982 449.672 321.654 464 303.978 464H111.959C94.283 464 79.955 449.672 79.955 432V174.961C100.444 179.219 122.391 175.965 140.112 163.779C140.768 163.857 142.206 164.391 143.628 165.773C161.1 182.691 183.948 192 207.968 192S254.837 182.691 272.294 165.773C273.934 164.203 275.544 163.732 275.544 163.592C293.321 175.922 315.39 179.236 335.982 174.963V432ZM344.307 117.51C334.179 129.973 315.708 132.844 302.83 123.914C283.467 110.447 257.228 113.398 238.989 131.055C222.019 147.473 193.934 147.473 176.932 131.055C166.351 120.807 153.068 115.533 139.987 115.533C130.548 115.533 121.217 118.295 113.107 123.914C100.244 132.828 81.774 129.941 71.63 117.51C64.973 109.301 62.52 98.77 64.739 87.83C67.145 75.965 76.584 65.715 87.696 62.891C98.588 60.16 106.872 63.299 111.873 66.422C133.158 79.699 159.303 77.174 176.963 60.064C193.903 43.68 222.003 43.648 239.005 60.096C256.712 77.189 282.841 79.652 304.049 66.422C309.096 63.299 317.396 60.145 328.256 62.891C339.353 65.715 348.792 75.965 351.198 87.83C353.417 98.77 350.964 109.301 344.307 117.51ZM463.995 330.834C463.995 346.725 454.588 361.115 440.024 367.49L383.987 392V204.693H423.991C446.056 204.693 463.995 222.631 463.995 244.693V330.834ZM159.964 240V408C159.964 416.844 152.807 424 143.962 424S127.96 416.844 127.96 408V240C127.96 231.156 135.117 224 143.962 224S159.964 231.156 159.964 240ZM223.97 240V408C223.97 416.844 216.813 424 207.968 424S191.967 416.844 191.967 408V240C191.967 231.156 199.124 224 207.968 224S223.97 231.156 223.97 240ZM287.977 240V408C287.977 416.844 280.82 424 271.975 424S255.973 416.844 255.973 408V240C255.973 231.156 263.13 224 271.975 224S287.977 231.156 287.977 240Z" />
        </Icon>
    </>
}