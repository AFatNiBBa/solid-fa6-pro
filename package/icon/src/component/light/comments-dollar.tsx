
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comments-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comments-dollar?s=light comments-dollar}
 * @preview ![comments-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTIuMzk3IDE2MC41OTRMMjA2LjgxOSAxNTlDMTc5LjY5NCAxNTEuMDMxIDE4MC41MDYgMTQ2LjM0NCAxODEuNjMxIDEzOS44MTJDMTgzLjUyMiAxMjguOTA2IDIwMC44NSAxMjYuNDA2IDIxNi40NDQgMTI4LjkwNkMyMjIuMjU2IDEyOS44MTIgMjI4LjY2MyAxMzEuODEyIDIzNC43NDEgMTMzLjkzOEMyNDMuMTE2IDEzNi44MTMgMjUyLjIwOSAxMzIuNDA2IDI1NS4xIDEyNC4wNjJDMjU4LjAwNiAxMTUuNzE5IDI1My41ODQgMTA2LjU5NCAyNDUuMjQxIDEwMy42ODdDMjM2Ljc3IDEwMC43NTQgMjMwLjA0IDk4Ljk3OSAyMjMuOTkxIDk3Ljg1NVY4OEMyMjMuOTkxIDc5LjE2MiAyMTYuODI5IDcyIDIwNy45OTEgNzJDMTk5LjE1NSA3MiAxOTEuOTkxIDc5LjE2MiAxOTEuOTkxIDg4Vjk3LjI3NUMxNjkuNDQ0IDEwMS4wMzUgMTUzLjU4OCAxMTQuMTk1IDE1MC4xMDIgMTM0LjM3NUMxNDMuMzA1IDE3My43MTkgMTgxLjUwNiAxODQuOTA2IDE5Ny44MDMgMTg5LjY4OEwyMDMuNTg0IDE5MS4zNzVDMjMyLjI1NiAxOTkuNTYzIDIzNS45MTMgMjAzLjE4OCAyMzQuMzUgMjEyLjE4OEMyMzIuNDYgMjIzLjEyNSAyMTUuMDM4IDIyNS41MzEgMTk5LjUwNiAyMjMuMDk0QzE5Mi4xNzggMjIxLjk2OSAxODMuMSAyMTguNzE5IDE3NS4xIDIxNS44NDRMMTcwLjY0NyAyMTQuMjVDMTYyLjMxOSAyMTEuMjgxIDE1My4xNjUgMjE1LjY4OCAxNTAuMjI3IDIyNC4wMzFDMTQ3LjI5IDIzMi4zNDQgMTUxLjY2NSAyNDEuNSAxNTkuOTkzIDI0NC40MzhMMTY0LjI3MiAyNDUuOTY5QzE3Mi44NiAyNDkuMDU1IDE4Mi40OTUgMjUyLjMyNCAxOTEuOTkxIDI1NC4wODhWMjY0QzE5MS45OTEgMjcyLjgzNiAxOTkuMTU1IDI4MCAyMDcuOTkxIDI4MEMyMTYuODI5IDI4MCAyMjMuOTkxIDI3Mi44MzYgMjIzLjk5MSAyNjRWMjU0LjI4NUMyNDYuMzkxIDI1MC40NjEgMjYyLjQwNSAyMzcuNzAxIDI2NS44ODEgMjE3LjYyNUMyNzIuNzQxIDE3Ny44NzUgMjM0Ljk3NSAxNjcuMDYyIDIxMi4zOTcgMTYwLjU5NFpNNjA2LjM2NCA0MzUuNDM5QzYyNy41NTEgNDA3LjE0MSA2NDAuMDAxIDM3Mi45MTYgNjQwLjAwMSAzMzZDNjQwLjAwMSAyMzguNzk3IDU1NC4wNCAxNjAgNDQ4LjAwMSAxNjBDNDQ3LjY4NiAxNjAgNDQ3LjM4MSAxNjAuMDQxIDQ0Ny4wNjcgMTYwLjA0M0M0NDcuNTM0IDE2NS4zMjggNDQ4LjAwMSAxNzAuNjEzIDQ0OC4wMDEgMTc2QzQ0OC4wMDEgMTgxLjQzIDQ0Ny41MzQgMTg2Ljc2IDQ0Ny4wNTkgMTkyLjA4NkM0NDcuMzgxIDE5Mi4wODQgNDQ3LjY3OCAxOTIgNDQ4LjAwMSAxOTJDNTM2LjIyNSAxOTIgNjA4LjAwMSAyNTYuNTk4IDYwOC4wMDEgMzM2QzYwOC4wMDEgMzY0LjY5MyA1OTguNTc3IDM5Mi40NDcgNTgwLjc0OSA0MTYuMjZMNTY3LjY2OCA0MzMuNzNMNTc5LjE1NyA0NTIuMjg1QzU4NS43MjUgNDYyLjg5MyA1OTIuMzM2IDQ3Mi4wMjcgNTk3Ljc3IDQ3OS4wMjlDNTc5LjUxNCA0NzcuMTE5IDU2MS4zMTcgNDcyLjQwNCA1NDMuNDY3IDQ2NC45NDFMNTMwLjc3OCA0NTkuNjM3TDUxOC4xOTYgNDY1LjE5M0M0OTUuOTUgNDc1LjAxOCA0NzIuMzMzIDQ4MCA0NDguMDAxIDQ4MEMzNzIuOTU0IDQ4MCAzMTAuMjY2IDQzMy4wODYgMjkzLjA3NyAzNzAuMjUyQzI4Mi45NzMgMzczLjU4OCAyNzIuNTgxIDM3Ni4zODMgMjYxLjg3OSAzNzguNTIxQzI4Mi42NTkgNDU1LjE0MSAzNTcuOTg3IDUxMiA0NDguMDAxIDUxMkM0NzcuODIzIDUxMiA1MDUuOTQ0IDUwNS41ODYgNTMxLjEyNCA0OTQuNDY1QzU1NS4wMjggNTA0LjQ1OSA1ODMuNzQ5IDUxMiA2MTYuMzQgNTEyQzYyNS43MzkgNTEyIDYzNC4yNDcgNTA2LjQzIDYzOC4wNzMgNDk3LjY4QzY0MS44MTMgNDg4LjkyMiA2NDAuMDE4IDQ3OC44NDQgNjMzLjUwNCA0NzIuMDA4QzYzMy4yNzggNDcxLjc2OCA2MTkuNTg2IDQ1Ni43OTUgNjA2LjM2NCA0MzUuNDM5Wk00MTYuMDAxIDE3NkM0MTYuMDAxIDc4Ljc5NyAzMjIuODc2IDAgMjA4LjAwMSAwUzAuMDAxIDc4Ljc5NyAwLjAwMSAxNzZDMC4wMDEgMjE3LjQ4MiAxNy4wNjkgMjU1LjU0MSA0NS40NDQgMjg1LjYyNUMzMC4yNzggMzE3Ljk2MSA2Ljc5MyAzNDMuNjkxIDYuNDk3IDM0NC4wMDhDLTAuMDE3IDM1MC44NDQgLTEuODEyIDM2MC45MjIgMS45MjggMzY5LjY4QzUuNzU0IDM3OC40MyAxNC4yNjIgMzg0IDIzLjY2MSAzODRDNzcuODUgMzg0IDEyMS40MiAzNjMuMjY2IDE0OS41NjEgMzQ0LjgzQzE2OC4xMTYgMzQ5LjQyMiAxODcuNjkyIDM1MiAyMDguMDAxIDM1MkMzMjIuODc2IDM1MiA0MTYuMDAxIDI3My4yMDEgNDE2LjAwMSAxNzZaTTIwOC4wMDEgMzIwQzE5MS4wMzYgMzIwIDE3My45NjEgMzE3LjkwMiAxNTcuMjQ5IDMxMy43NjhMMTQzLjcgMzEwLjQxNEwxMzIuMDI2IDMxOC4wNjJDMTExLjU5NiAzMzEuNDQ1IDgwLjQ0NiAzNDcuMDUxIDQyLjE3NiAzNTEuMDM1QzUxLjU1MyAzMzguOTIyIDY0LjQ3OSAzMjAuNCA3NC40MTcgMjk5LjIxM0w4My42NTkgMjc5LjUwNEw2OC43MjMgMjYzLjY2OEM0NC43IDIzOC4xOTcgMzIuMDAxIDIwNy44ODMgMzIuMDAxIDE3NkMzMi4wMDEgOTYuNTk4IDExMC45NTQgMzIgMjA4LjAwMSAzMlMzODQuMDAxIDk2LjU5OCAzODQuMDAxIDE3NlMzMDUuMDQ3IDMyMCAyMDguMDAxIDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentsDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M212.397 160.594L206.819 159C179.694 151.031 180.506 146.344 181.631 139.812C183.522 128.906 200.85 126.406 216.444 128.906C222.256 129.812 228.663 131.812 234.741 133.938C243.116 136.813 252.209 132.406 255.1 124.062C258.006 115.719 253.584 106.594 245.241 103.687C236.77 100.754 230.04 98.979 223.991 97.855V88C223.991 79.162 216.829 72 207.991 72C199.155 72 191.991 79.162 191.991 88V97.275C169.444 101.035 153.588 114.195 150.102 134.375C143.305 173.719 181.506 184.906 197.803 189.688L203.584 191.375C232.256 199.563 235.913 203.188 234.35 212.188C232.46 223.125 215.038 225.531 199.506 223.094C192.178 221.969 183.1 218.719 175.1 215.844L170.647 214.25C162.319 211.281 153.165 215.688 150.227 224.031C147.29 232.344 151.665 241.5 159.993 244.438L164.272 245.969C172.86 249.055 182.495 252.324 191.991 254.088V264C191.991 272.836 199.155 280 207.991 280C216.829 280 223.991 272.836 223.991 264V254.285C246.391 250.461 262.405 237.701 265.881 217.625C272.741 177.875 234.975 167.062 212.397 160.594ZM606.364 435.439C627.551 407.141 640.001 372.916 640.001 336C640.001 238.797 554.04 160 448.001 160C447.686 160 447.381 160.041 447.067 160.043C447.534 165.328 448.001 170.613 448.001 176C448.001 181.43 447.534 186.76 447.059 192.086C447.381 192.084 447.678 192 448.001 192C536.225 192 608.001 256.598 608.001 336C608.001 364.693 598.577 392.447 580.749 416.26L567.668 433.73L579.157 452.285C585.725 462.893 592.336 472.027 597.77 479.029C579.514 477.119 561.317 472.404 543.467 464.941L530.778 459.637L518.196 465.193C495.95 475.018 472.333 480 448.001 480C372.954 480 310.266 433.086 293.077 370.252C282.973 373.588 272.581 376.383 261.879 378.521C282.659 455.141 357.987 512 448.001 512C477.823 512 505.944 505.586 531.124 494.465C555.028 504.459 583.749 512 616.34 512C625.739 512 634.247 506.43 638.073 497.68C641.813 488.922 640.018 478.844 633.504 472.008C633.278 471.768 619.586 456.795 606.364 435.439ZM416.001 176C416.001 78.797 322.876 0 208.001 0S0.001 78.797 0.001 176C0.001 217.482 17.069 255.541 45.444 285.625C30.278 317.961 6.793 343.691 6.497 344.008C-0.017 350.844 -1.812 360.922 1.928 369.68C5.754 378.43 14.262 384 23.661 384C77.85 384 121.42 363.266 149.561 344.83C168.116 349.422 187.692 352 208.001 352C322.876 352 416.001 273.201 416.001 176ZM208.001 320C191.036 320 173.961 317.902 157.249 313.768L143.7 310.414L132.026 318.062C111.596 331.445 80.446 347.051 42.176 351.035C51.553 338.922 64.479 320.4 74.417 299.213L83.659 279.504L68.723 263.668C44.7 238.197 32.001 207.883 32.001 176C32.001 96.598 110.954 32 208.001 32S384.001 96.598 384.001 176S305.047 320 208.001 320Z" />
        </Icon>
    </>
}