
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hands-asl-interpreting` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-asl-interpreting?s=thin hands-asl-interpreting}
 * @preview ![hands-asl-interpreting](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDEuMjAzIDI0MC40MzRDMjkyLjY0MSAyMTYuMjc4IDI3Ni4wOTQgMTk2LjQxOCAyNTQuNDM4IDE4My43MTVMMzA5Ljk2OSAxNjcuODRDMzMwLjQ1MyAxNjEuOTgxIDM0Mi4zNTkgMTQwLjU0MyAzMzYuNSAxMjAuMDQzQzMzMy42NzIgMTEwLjA5IDMyNy4xMjUgMTAxLjg1NiAzMTguMDc4IDk2Ljg0QzMwOS4wNjIgOTEuODI1IDI5OC42MDkgOTAuNjUzIDI4OC43MDMgOTMuNDk2TDIyOC44NDQgMTEwLjU5TDI3OC41IDY4LjAyOEMyOTQuNjg4IDU0LjE1MyAyOTYuNTc4IDI5LjcgMjgyLjY4OCAxMy40OTZDMjc1Ljk1MyA1LjY2OCAyNjYuNTc4IDAuOTAzIDI1Ni4yODEgMC4xMjFDMjQ1LjkyMiAtMC42NzUgMjM1Ljk4NCAyLjU5IDIyOC4xNzIgOS4zMDlMMTU5LjczNCA2Ny45NjVMMTY1Ljc4MSA1NC44NTZDMTc0LjcwMyAzNS40OTYgMTY2LjIwMyAxMi40ODEgMTQ2Ljg1OSAzLjU1OUMxMjcuNTMxIC01LjM2MyAxMDQuNDY5IDMuMTM3IDk1LjUxNiAyMi41NTlMMTUgMjAyLjc0NkM1LjA0NyAyMjUuMDI4IDAgMjQ4LjY2OCAwIDI3My4wNDNDMCAzMzQuMjE1IDQ5Ljc4MSAzODMuOTk2IDExMC45NjkgMzgzLjk5NkwyMDcuMjk3IDM4My45ODFDMjQwLjEwOSAzODEuNjIxIDI3MC43MTkgMzYzLjc2MiAyODkuMTg3IDMzNi4xODRDMjk5LjcxOSAzMjAuNDM0IDI5Ny4xMjUgMjk5LjY1MyAyODMuOTY5IDI4Ni44ODdDMjk5Ljg1OSAyNzcuNzkzIDMwNy41MTYgMjU4LjMyNSAzMDEuMjAzIDI0MC40MzRaTTE5OS42NzIgMjI5Ljk5N0MxNzQuMTI1IDIyOS45OTcgMTUzLjMyOCAyNTAuNzc4IDE1My4zMjggMjc2LjMyNVMxNzQuMTI1IDMyMi42NjggMTk5LjY3MiAzMjIuNjY4QzIxNS4xNzIgMzIyLjY2OCAyMjkuNTc4IDMxNC45NSAyMzguMjAzIDMwMi4wNDNDMjQ1LjE4OCAyOTEuNjM3IDI1OS4zMjggMjg4LjkwMyAyNjkuNjcyIDI5NS44MjVDMjgwLjA0NyAzMDIuNzkzIDI4Mi44MjggMzE2LjkwMyAyNzUuODkxIDMyNy4yNzhDMjYwLjE0MSAzNTAuNzkzIDIzNC4wNzggMzY2LjAxMiAyMDYuNzE5IDM2Ny45OTZIMTEwLjk2OUM1OC42MDkgMzY3Ljk5NiAxNiAzMjUuNDAzIDE2IDI3My4wNDNDMTYgMjUwLjkzNCAyMC41NzggMjI5LjQ4MSAyOS41OTQgMjA5LjI3OEwxMTAuMDc4IDI5LjE4NEMxMTMuODkxIDIwLjkwMyAxMjIuMTI1IDE2LjAxMiAxMzAuNzAzIDE2LjAxMkMxMzMuODc1IDE2LjAxMiAxMzcuMDk0IDE2LjY4NCAxNDAuMTcyIDE4LjA5QzE1MS41IDIzLjMyNSAxNTYuNDY5IDM2LjgwOSAxNTEuMjUgNDguMTUzTDExNC40ODQgMTI3LjgwOUwyMzguNTk0IDIxLjQ1QzI0My4xNTYgMTcuNTI4IDI0OC44OTEgMTUuNTc1IDI1NS4wNDcgMTYuMDc1QzI2MS4wOTQgMTYuNTI4IDI2Ni42MDkgMTkuMzI1IDI3MC41NDcgMjMuOTE4UzI3Ni40MDYgMzQuMzcxIDI3NS45MzcgNDAuNDE4QzI3NS40NjkgNDYuNDUgMjcyLjY4OCA1MS45MzQgMjY4LjA5NCA1NS44NzFMMTYyLjg0NCAxNDYuMDlMMjkzLjEyNSAxMDguODcxQzI5OC44OTEgMTA3LjE2OCAzMDUgMTA3LjkxOCAzMTAuMzEyIDExMC44MjVDMzE1LjYyNSAxMTMuNzc4IDMxOS40NTMgMTE4LjYwNiAzMjEuMTI1IDEyNC40MzRDMzI0LjU2MiAxMzYuNDUgMzE3LjU3OCAxNDkuMDI4IDMwNS41NjIgMTUyLjQ2NUwyMDQuNSAxODEuMzI1TDIyOC44NDQgMTg5LjU0M0MyNTUuODEyIDE5OC42MzcgMjc2LjY4OCAyMTkuMTM3IDI4Ni4xMDkgMjQ1Ljc3OEMyOTAuMjgxIDI1Ny41NTkgMjg0LjA3OCAyNzAuNTQzIDI3Mi4yOTcgMjc0LjdDMjYwLjUzMSAyNzguOTM0IDI0Ny41NDcgMjcyLjY4NCAyNDMuMzc1IDI2MC44ODdDMjM2LjgyOCAyNDIuNDE4IDIxOS4yNjYgMjI5Ljk5NyAxOTkuNjcyIDIyOS45OTdaTTIzNy44NDQgMjgxLjEwNkMyMzIuODEyIDI4My45ODEgMjI4LjM1OSAyODguMDEyIDIyNC45MDYgMjkzLjEzN0MyMTkuMjUgMzAxLjYwNiAyMDkuODEyIDMwNi42NjggMTk5LjY3MiAzMDYuNjY4QzE4Mi45MzggMzA2LjY2OCAxNjkuMzI4IDI5My4wNTkgMTY5LjMyOCAyNzYuMzI1QzE2OS4zMjggMjU5LjYwNiAxODIuOTM4IDI0NS45OTcgMTk5LjY3MiAyNDUuOTk3QzIxMi41IDI0NS45OTcgMjI0IDI1NC4xMjEgMjI4LjI4MSAyNjYuMjMxQzIzMC4zNDQgMjcyLjA1OSAyMzMuNjcyIDI3Ny4wOSAyMzcuODQ0IDI4MS4xMDZaTTUyOS4wMzEgMTI3Ljk5Nkw0MzIuNzAzIDEyOC4wMTJDMzk5Ljg5MSAxMzAuMzcxIDM2OS4yODEgMTQ4LjIzMSAzNTAuODEzIDE3NS44MDlDMzQwLjI4MSAxOTEuNTU5IDM0Mi44NzUgMjEyLjM0IDM1Ni4wMzEgMjI1LjEwNkMzNDAuMTQxIDIzNC4yIDMzMi40ODQgMjUzLjY2OCAzMzguNzk3IDI3MS41NTlDMzQ3LjM0NCAyOTUuNzE1IDM2My45MDYgMzE1LjU3NSAzODUuNTYzIDMyOC4yNzhMMzMwLjAzMSAzNDQuMTUzQzMwOS41NDcgMzUwLjAxMiAyOTcuNjQxIDM3MS40NSAzMDMuNSAzOTEuOTVDMzA2LjMyOCA0MDEuOTAzIDMxMi44NzUgNDEwLjEzNyAzMjEuOTIyIDQxNS4xNTNDMzMwLjk4NCA0MjAuMTg0IDM0MS40MDYgNDIxLjM3MSAzNTEuMjk3IDQxOC40OTZMNDExLjE1NiA0MDEuNDAzTDM2MS41IDQ0My45NjVDMzQ1LjMxMyA0NTcuODQgMzQzLjQyMiA0ODIuMjkzIDM1Ny4zMTMgNDk4LjQ5NkMzNjQuMDQ3IDUwNi4zMjUgMzczLjQyMiA1MTEuMDkgMzgzLjcxOSA1MTEuODcxQzM4NC43MzQgNTExLjk1IDM4NS43NSA1MTEuOTk2IDM4Ni43NSA1MTEuOTk2QzM5NS45NjkgNTExLjk5NiA0MDQuNzgxIDUwOC43NDYgNDExLjgyOCA1MDIuNjg0TDQ4MC4yNjYgNDQ0LjAyOEw0NzQuMjE5IDQ1Ny4xMzdDNDY1LjI5NyA0NzYuNDk2IDQ3My43OTcgNDk5LjUxMiA0OTMuMTQxIDUwOC40MzRDNTEyLjQ2OSA1MTcuMzU2IDUzNS41MzEgNTA4Ljg1NiA1NDQuNDg0IDQ4OS40MzRMNjI1IDMwOS4yNDZDNjM0Ljk1MyAyODYuOTY1IDY0MCAyNjMuMzI1IDY0MCAyMzguOTVDNjQwIDE3Ny43NzggNTkwLjIxOSAxMjcuOTk2IDUyOS4wMzEgMTI3Ljk5NlpNNjEwLjQwNiAzMDIuNzE1TDUyOS45MjIgNDgyLjgwOUM1MjQuNzAzIDQ5NC4xNTMgNTExLjIxOSA0OTkuMDkgNDk5LjgyOCA0OTMuOTAzQzQ4OC41IDQ4OC42NjggNDgzLjUzMSA0NzUuMTg0IDQ4OC43NSA0NjMuODRMNTI1LjUxNiAzODQuMTg0TDQwMS40MDYgNDkwLjU0M0MzOTYuODI4IDQ5NC40NSAzOTEuMDYyIDQ5Ni4yNjIgMzg0Ljk1MyA0OTUuOTE4QzM3OC45MDYgNDk1LjQ2NSAzNzMuMzkxIDQ5Mi42NjggMzY5LjQ1MyA0ODguMDc1UzM2My41OTQgNDc3LjYyMSAzNjQuMDYyIDQ3MS41NzVDMzY0LjUzMSA0NjUuNTQzIDM2Ny4zMTIgNDYwLjA1OSAzNzEuOTA2IDQ1Ni4xMjFMNDc3LjE1NiAzNjUuOTAzTDM0Ni44NzUgNDAzLjEyMUMzNDEuMDc4IDQwNC43NzggMzM0Ljk1MyA0MDQuMDkgMzI5LjY4NyA0MDEuMTY4QzMyNC4zNzUgMzk4LjIxNSAzMjAuNTQ3IDM5My4zODcgMzE4Ljg3NSAzODcuNTU5QzMxNS40MzcgMzc1LjU0MyAzMjIuNDIyIDM2Mi45NjUgMzM0LjQzNyAzNTkuNTI4TDQzNS41IDMzMC42NjhMNDExLjE1NiAzMjIuNDVDMzg0LjE3MiAzMTMuMzU2IDM2My4zMTIgMjkyLjg1NiAzNTMuODkxIDI2Ni4yMTVDMzQ5LjcxOSAyNTQuNDM0IDM1NS45MjIgMjQxLjQ1IDM2Ny43MDMgMjM3LjI5M0MzNzkuNDg0IDIzMy4xMjEgMzkyLjQ2OSAyMzkuMzI1IDM5Ni42MjUgMjUxLjEwNkM0MDMuMTcyIDI2OS41NzUgNDIwLjczNCAyODEuOTk3IDQ0MC4zMjggMjgxLjk5N0M0NjUuODc1IDI4MS45OTcgNDg2LjY3MiAyNjEuMjE1IDQ4Ni42NzIgMjM1LjY2OFM0NjUuODc1IDE4OS4zMjUgNDQwLjMyOCAxODkuMzI1QzQyNC44MjggMTg5LjMyNSA0MTAuNDIyIDE5Ny4wNDMgNDAxLjc5NyAyMDkuOTVDMzk0LjgyOCAyMjAuMzI1IDM4MC42NzIgMjIzLjA3NSAzNzAuMzI4IDIxNi4xNjhDMzU5Ljk1MyAyMDkuMiAzNTcuMTcyIDE5NS4wOSAzNjQuMTA5IDE4NC43MTVDMzc5Ljg1OSAxNjEuMiA0MDUuOTIyIDE0NS45ODEgNDMzLjI4MSAxNDMuOTk2SDUyOS4wMzFDNTgxLjM5MSAxNDMuOTk2IDYyNCAxODYuNTkgNjI0IDIzOC45NUM2MjQgMjYxLjA1OSA2MTkuNDIyIDI4Mi41MTIgNjEwLjQwNiAzMDIuNzE1Wk00MDIuMTU2IDIzMC44ODdDNDA3LjE4OCAyMjguMDEyIDQxMS42NDEgMjIzLjk4MSA0MTUuMDk0IDIxOC44NTZDNDIwLjc1IDIxMC4zODcgNDMwLjE4OCAyMDUuMzI1IDQ0MC4zMjggMjA1LjMyNUM0NTcuMDYyIDIwNS4zMjUgNDcwLjY3MiAyMTguOTM0IDQ3MC42NzIgMjM1LjY2OEM0NzAuNjcyIDI1Mi4zODcgNDU3LjA2MiAyNjUuOTk3IDQ0MC4zMjggMjY1Ljk5N0M0MjcuNSAyNjUuOTk3IDQxNiAyNTcuODcxIDQxMS43MTkgMjQ1Ljc2MkM0MDkuNjU2IDIzOS45MzQgNDA2LjMyOCAyMzQuOTAzIDQwMi4xNTYgMjMwLjg4N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandsAslInterpreting(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M301.203 240.434C292.641 216.278 276.094 196.418 254.438 183.715L309.969 167.84C330.453 161.981 342.359 140.543 336.5 120.043C333.672 110.09 327.125 101.856 318.078 96.84C309.062 91.825 298.609 90.653 288.703 93.496L228.844 110.59L278.5 68.028C294.688 54.153 296.578 29.7 282.688 13.496C275.953 5.668 266.578 0.903 256.281 0.121C245.922 -0.675 235.984 2.59 228.172 9.309L159.734 67.965L165.781 54.856C174.703 35.496 166.203 12.481 146.859 3.559C127.531 -5.363 104.469 3.137 95.516 22.559L15 202.746C5.047 225.028 0 248.668 0 273.043C0 334.215 49.781 383.996 110.969 383.996L207.297 383.981C240.109 381.621 270.719 363.762 289.187 336.184C299.719 320.434 297.125 299.653 283.969 286.887C299.859 277.793 307.516 258.325 301.203 240.434ZM199.672 229.997C174.125 229.997 153.328 250.778 153.328 276.325S174.125 322.668 199.672 322.668C215.172 322.668 229.578 314.95 238.203 302.043C245.188 291.637 259.328 288.903 269.672 295.825C280.047 302.793 282.828 316.903 275.891 327.278C260.141 350.793 234.078 366.012 206.719 367.996H110.969C58.609 367.996 16 325.403 16 273.043C16 250.934 20.578 229.481 29.594 209.278L110.078 29.184C113.891 20.903 122.125 16.012 130.703 16.012C133.875 16.012 137.094 16.684 140.172 18.09C151.5 23.325 156.469 36.809 151.25 48.153L114.484 127.809L238.594 21.45C243.156 17.528 248.891 15.575 255.047 16.075C261.094 16.528 266.609 19.325 270.547 23.918S276.406 34.371 275.937 40.418C275.469 46.45 272.688 51.934 268.094 55.871L162.844 146.09L293.125 108.871C298.891 107.168 305 107.918 310.312 110.825C315.625 113.778 319.453 118.606 321.125 124.434C324.562 136.45 317.578 149.028 305.562 152.465L204.5 181.325L228.844 189.543C255.812 198.637 276.688 219.137 286.109 245.778C290.281 257.559 284.078 270.543 272.297 274.7C260.531 278.934 247.547 272.684 243.375 260.887C236.828 242.418 219.266 229.997 199.672 229.997ZM237.844 281.106C232.812 283.981 228.359 288.012 224.906 293.137C219.25 301.606 209.812 306.668 199.672 306.668C182.938 306.668 169.328 293.059 169.328 276.325C169.328 259.606 182.938 245.997 199.672 245.997C212.5 245.997 224 254.121 228.281 266.231C230.344 272.059 233.672 277.09 237.844 281.106ZM529.031 127.996L432.703 128.012C399.891 130.371 369.281 148.231 350.813 175.809C340.281 191.559 342.875 212.34 356.031 225.106C340.141 234.2 332.484 253.668 338.797 271.559C347.344 295.715 363.906 315.575 385.563 328.278L330.031 344.153C309.547 350.012 297.641 371.45 303.5 391.95C306.328 401.903 312.875 410.137 321.922 415.153C330.984 420.184 341.406 421.371 351.297 418.496L411.156 401.403L361.5 443.965C345.313 457.84 343.422 482.293 357.313 498.496C364.047 506.325 373.422 511.09 383.719 511.871C384.734 511.95 385.75 511.996 386.75 511.996C395.969 511.996 404.781 508.746 411.828 502.684L480.266 444.028L474.219 457.137C465.297 476.496 473.797 499.512 493.141 508.434C512.469 517.356 535.531 508.856 544.484 489.434L625 309.246C634.953 286.965 640 263.325 640 238.95C640 177.778 590.219 127.996 529.031 127.996ZM610.406 302.715L529.922 482.809C524.703 494.153 511.219 499.09 499.828 493.903C488.5 488.668 483.531 475.184 488.75 463.84L525.516 384.184L401.406 490.543C396.828 494.45 391.062 496.262 384.953 495.918C378.906 495.465 373.391 492.668 369.453 488.075S363.594 477.621 364.062 471.575C364.531 465.543 367.312 460.059 371.906 456.121L477.156 365.903L346.875 403.121C341.078 404.778 334.953 404.09 329.687 401.168C324.375 398.215 320.547 393.387 318.875 387.559C315.437 375.543 322.422 362.965 334.437 359.528L435.5 330.668L411.156 322.45C384.172 313.356 363.312 292.856 353.891 266.215C349.719 254.434 355.922 241.45 367.703 237.293C379.484 233.121 392.469 239.325 396.625 251.106C403.172 269.575 420.734 281.997 440.328 281.997C465.875 281.997 486.672 261.215 486.672 235.668S465.875 189.325 440.328 189.325C424.828 189.325 410.422 197.043 401.797 209.95C394.828 220.325 380.672 223.075 370.328 216.168C359.953 209.2 357.172 195.09 364.109 184.715C379.859 161.2 405.922 145.981 433.281 143.996H529.031C581.391 143.996 624 186.59 624 238.95C624 261.059 619.422 282.512 610.406 302.715ZM402.156 230.887C407.188 228.012 411.641 223.981 415.094 218.856C420.75 210.387 430.188 205.325 440.328 205.325C457.062 205.325 470.672 218.934 470.672 235.668C470.672 252.387 457.062 265.997 440.328 265.997C427.5 265.997 416 257.871 411.719 245.762C409.656 239.934 406.328 234.903 402.156 230.887Z" />
        </Icon>
    </>
}