
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snowflakes` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowflakes?s=duotone snowflakes}
 * @preview ![snowflakes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY4LjEyNyA0MDEuMjgxQzY0LjczNSA0MTQuMDk0IDcyLjM4MyA0MjcuMjUgODUuMjA4IDQzMC42MjVDODcuMjcyIDQzMS4xODggODkuMzM2IDQzMS40MzggOTEuMzcyIDQzMS40MzhDMTAyLjAwNiA0MzEuNDM4IDExMS43MzUgNDI0LjM0NCAxMTQuNTgzIDQxMy41OTRMMTMyLjMyNSAzNDYuNjcyTDczLjUwNiAzODAuOTg4TDY4LjEyNyA0MDEuMjgxWk04NS4yMDggODEuMzc1QzcyLjM4MyA4NC43NSA2NC43MzUgOTcuOTA2IDY4LjEyNyAxMTAuNzE5TDczLjUwNiAxMzEuMDEyTDEzMi4zMjUgMTY1LjMyOEwxMTQuNTgzIDk4LjQwNkMxMTEuMjA0IDg1LjYyNSA5OC4xMTIgNzcuOTA2IDg1LjIwOCA4MS4zNzVaTTE0NC4wMDIgNDY1LjA2MkMxNTMuNDUgNDc0LjM3NSAxNjguNjUzIDQ3NC4zMTIgMTc3Ljk3NSA0NjQuODc1TDE5Mi4xOTIgNDUwLjUwNFYzODIuMjQyTDE0My44MTUgNDMxLjEyNUMxMzQuNDc3IDQ0MC41NjIgMTM0LjU3MSA0NTUuNzUgMTQ0LjAwMiA0NjUuMDYyWk0xNDQuMDAyIDQ2LjkzOEMxMzQuNTcxIDU2LjI1IDEzNC40NzcgNzEuNDM4IDE0My44MTUgODAuODc1TDE5Mi4xOTIgMTI5Ljc1OFY2MS40OTZMMTc3Ljk3NSA0Ny4xMjVDMTY4LjY1MyAzNy43MTkgMTUzLjQ1IDM3LjU5NCAxNDQuMDAyIDQ2LjkzOFpNMzgwLjMyMyAxMTAuNzE5QzM4My43MTUgOTcuOTA2IDM3Ni4wNjcgODQuNzUgMzYzLjI0MyA4MS4zNzVDMzUwLjQzMiA3Ny45MDYgMzM3LjI2MiA4NS42MjUgMzMzLjg2OCA5OC40MDZMMzE2LjEyNSAxNjUuMzI4TDM3NC45NDQgMTMxLjAxMkwzODAuMzIzIDExMC43MTlaTTI4LjAwOCAyMzkuNDM4QzMwLjA4OCAyMzkuNDM4IDMyLjIwMiAyMzkuMTU2IDM0LjMxMyAyMzguNTk0TDEwMC4yNiAyMjAuNzI1TDQyLjA3MSAxODYuNzczTDIxLjczNyAxOTIuMjgxQzguOTI2IDE5NS43NSAxLjM3MiAyMDguOTM4IDQuODQ0IDIyMS43MTlDNy43MzkgMjMyLjQwNiAxNy40MzYgMjM5LjQzOCAyOC4wMDggMjM5LjQzOFpNMzQuMzEzIDI3My40MDZDMjEuNDU2IDI3MCA4LjMxNyAyNzcuNSA0Ljg0NCAyOTAuMjgxUzguOTI2IDMxNi4yNSAyMS43MzcgMzE5LjcxOUw0Mi4wNzEgMzI1LjIyN0wxMDAuMjYgMjkxLjI3NUwzNC4zMTMgMjczLjQwNlpNMjcwLjQ3NSA0Ny4xMjVMMjU2LjI1OCA2MS40OTZWMTI5Ljc1OEwzMDQuNjM1IDgwLjg3NUMzMTMuOTczIDcxLjQzOCAzMTMuODc5IDU2LjI1IDMwNC40NDggNDYuOTM4QzI5NC45ODUgMzcuNTk0IDI3OS43ODIgMzcuNzE5IDI3MC40NzUgNDcuMTI1Wk00MTQuMTM3IDI3My40MDZMMzQ4LjE5IDI5MS4yNzVMNDA2LjM3OSAzMjUuMjI3TDQyNi43MTMgMzE5LjcxOUM0MzkuNTI0IDMxNi4yNSA0NDcuMDc5IDMwMy4wNjMgNDQzLjYwNiAyOTAuMjgxQzQ0MC4xNDkgMjc3LjUgNDI3LjA0MiAyNzAgNDE0LjEzNyAyNzMuNDA2Wk00MjYuNzEzIDE5Mi4yODFMNDA2LjM3OSAxODYuNzczTDM0OC4xOSAyMjAuNzI1TDQxNC4xMzcgMjM4LjU5NEM0MTYuMjQ5IDIzOS4xNTYgNDE4LjM2MiAyMzkuNDM3IDQyMC40NDIgMjM5LjQzN0M0MzEuMDE0IDIzOS40MzcgNDQwLjcxMSAyMzIuNDA2IDQ0My42MDYgMjIxLjcxOUM0NDcuMDc5IDIwOC45MzggNDM5LjUyNCAxOTUuNzUgNDI2LjcxMyAxOTIuMjgxWk0yNTYuMjU4IDM4Mi4yNDJWNDUwLjUwNEwyNzAuNDc1IDQ2NC44NzVDMjc1LjE2OCA0NjkuNjI1IDI4MS4zNjIgNDcyIDI4Ny41NTUgNDcyQzI5My42NTUgNDcyIDI5OS43NTYgNDY5LjY4OCAzMDQuNDQ4IDQ2NS4wNjJDMzEzLjg3OSA0NTUuNzUgMzEzLjk3MyA0NDAuNTYyIDMwNC42MzUgNDMxLjEyNUwyNTYuMjU4IDM4Mi4yNDJaTTM3NC45NDQgMzgwLjk4OEwzMTYuMTI1IDM0Ni42NzJMMzMzLjg2OCA0MTMuNTk0QzMzNi43MTUgNDI0LjM0NCAzNDYuNDQ0IDQzMS40MzggMzU3LjA3OSA0MzEuNDM4QzM1OS4xMTQgNDMxLjQzOCAzNjEuMTc4IDQzMS4xODggMzYzLjI0MyA0MzAuNjI1QzM3Ni4wNjcgNDI3LjI1IDM4My43MTUgNDE0LjA5NCAzODAuMzIzIDQwMS4yODFMMzc0Ljk0NCAzODAuOTg4Wk02MTAuMTYzIDI1Nkw2MzMuMTk0IDIzMi45NjlDNjQyLjU2OSAyMjMuNTk0IDY0Mi41NjkgMjA4LjQwNiA2MzMuMTk0IDE5OS4wMzFTNjA4LjYzMSAxODkuNjU2IDU5OS4yNTYgMTk5LjAzMUw1NzYuMjI1IDIyMi4wNjJMNTUzLjE5NCAxOTkuMDMxQzU0My44MTkgMTg5LjY1NiA1MjguNjMxIDE4OS42NTYgNTE5LjI1NiAxOTkuMDMxUzUwOS44ODEgMjIzLjU5NCA1MTkuMjU2IDIzMi45NjlMNTQyLjI4OCAyNTZMNTE5LjI1NiAyNzkuMDMxQzUwOS44ODEgMjg4LjQwNiA1MDkuODgxIDMwMy41OTQgNTE5LjI1NiAzMTIuOTY5QzUyMy45NDQgMzE3LjY1NiA1MzAuMDg0IDMyMCA1MzYuMjI1IDMyMFM1NDguNTA2IDMxNy42NTYgNTUzLjE5NCAzMTIuOTY5TDU3Ni4yMjUgMjg5LjkzOEw1OTkuMjU2IDMxMi45NjlDNjAzLjk0NCAzMTcuNjU2IDYxMC4wODQgMzIwIDYxNi4yMjUgMzIwUzYyOC41MDYgMzE3LjY1NiA2MzMuMTk0IDMxMi45NjlDNjQyLjU2OSAzMDMuNTk0IDY0Mi41NjkgMjg4LjQwNiA2MzMuMTk0IDI3OS4wMzFMNjEwLjE2MyAyNTZaTTU0NC4yMjUgOTcuOTM4TDU2Ny4yNTYgMTIwLjk2OUM1NzEuOTQ0IDEyNS42NTYgNTc4LjA4NCAxMjggNTg0LjIyNSAxMjhTNTk2LjUwNiAxMjUuNjU2IDYwMS4xOTQgMTIwLjk2OUM2MTAuNTY5IDExMS41OTQgNjEwLjU2OSA5Ni40MDYgNjAxLjE5NCA4Ny4wMzFMNTc4LjE2MyA2NEw2MDEuMTk0IDQwLjk2OUM2MTAuNTY5IDMxLjU5NCA2MTAuNTY5IDE2LjQwNiA2MDEuMTk0IDcuMDMxUzU3Ni42MzEgLTIuMzQ0IDU2Ny4yNTYgNy4wMzFMNTQ0LjIyNSAzMC4wNjJMNTIxLjE5NCA3LjAzMUM1MTEuODE5IC0yLjM0NCA0OTYuNjMxIC0yLjM0NCA0ODcuMjU2IDcuMDMxUzQ3Ny44ODEgMzEuNTk0IDQ4Ny4yNTYgNDAuOTY5TDUxMC4yODggNjRMNDg3LjI1NiA4Ny4wMzFDNDc3Ljg4MSA5Ni40MDYgNDc3Ljg4MSAxMTEuNTk0IDQ4Ny4yNTYgMTIwLjk2OUM0OTEuOTQ0IDEyNS42NTYgNDk4LjA4NCAxMjggNTA0LjIyNSAxMjhTNTE2LjUwNiAxMjUuNjU2IDUyMS4xOTQgMTIwLjk2OUw1NDQuMjI1IDk3LjkzOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQzLjYxNSAzODQuMTI1QzQzNy42NzEgMzk0LjMxMiA0MjYuOTQxIDQwMCA0MTUuOTMgNDAwQzQxMC40NCA0MDAgNDA0Ljg4OCAzOTguNTk0IDM5OS44MDQgMzk1LjYyNUwyNTYuMDMyIDMxMS43NDJWNDgwQzI1Ni4wMzIgNDk3LjY4OCAyNDEuNjkgNTEyIDIyNCA1MTJTMTkxLjk2NyA0OTcuNjg4IDE5MS45NjcgNDgwVjMxMS43NDJMNDguMTk1IDM5NS42MjVDNDMuMTEyIDM5OC41OTQgMzcuNTU5IDQwMCAzMi4wNjkgNDAwQzIxLjA1OCA0MDAgMTAuMzI4IDM5NC4zMTIgNC4zODUgMzg0LjEyNUMtNC41NDYgMzY4Ljg3NSAwLjYgMzQ5LjI4MSAxNS44ODEgMzQwLjM3NUwxNjAuNDk1IDI1NkwxNS44ODEgMTcxLjYyNUMwLjYgMTYyLjcxOSAtNC41NDYgMTQzLjEyNSA0LjM4NSAxMjcuODc1QzEzLjI2OSAxMTIuNTk0IDMyLjg4MyAxMDcuNDM4IDQ4LjE5NSAxMTYuMzc1TDE5MS45NjcgMjAwLjI1OFYzMkMxOTEuOTY3IDE0LjMxMiAyMDYuMzEgMCAyMjQgMFMyNTYuMDMyIDE0LjMxMiAyNTYuMDMyIDMyVjIwMC4yNThMMzk5LjgwNCAxMTYuMzc1QzQxNS4wODUgMTA3LjQ2OSA0MzQuNzE1IDExMi42MjUgNDQzLjYxNSAxMjcuODc1QzQ1Mi41NDYgMTQzLjEyNSA0NDcuNCAxNjIuNzE5IDQzMi4xMTggMTcxLjYyNUwyODcuNTA0IDI1Nkw0MzIuMTE4IDM0MC4zNzVDNDQ3LjQgMzQ5LjI4MSA0NTIuNTQ2IDM2OC44NzUgNDQzLjYxNSAzODQuMTI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Snowflakes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M68.127 401.281C64.735 414.094 72.383 427.25 85.208 430.625C87.272 431.188 89.336 431.438 91.372 431.438C102.006 431.438 111.735 424.344 114.583 413.594L132.325 346.672L73.506 380.988L68.127 401.281ZM85.208 81.375C72.383 84.75 64.735 97.906 68.127 110.719L73.506 131.012L132.325 165.328L114.583 98.406C111.204 85.625 98.112 77.906 85.208 81.375ZM144.002 465.062C153.45 474.375 168.653 474.312 177.975 464.875L192.192 450.504V382.242L143.815 431.125C134.477 440.562 134.571 455.75 144.002 465.062ZM144.002 46.938C134.571 56.25 134.477 71.438 143.815 80.875L192.192 129.758V61.496L177.975 47.125C168.653 37.719 153.45 37.594 144.002 46.938ZM380.323 110.719C383.715 97.906 376.067 84.75 363.243 81.375C350.432 77.906 337.262 85.625 333.868 98.406L316.125 165.328L374.944 131.012L380.323 110.719ZM28.008 239.438C30.088 239.438 32.202 239.156 34.313 238.594L100.26 220.725L42.071 186.773L21.737 192.281C8.926 195.75 1.372 208.938 4.844 221.719C7.739 232.406 17.436 239.438 28.008 239.438ZM34.313 273.406C21.456 270 8.317 277.5 4.844 290.281S8.926 316.25 21.737 319.719L42.071 325.227L100.26 291.275L34.313 273.406ZM270.475 47.125L256.258 61.496V129.758L304.635 80.875C313.973 71.438 313.879 56.25 304.448 46.938C294.985 37.594 279.782 37.719 270.475 47.125ZM414.137 273.406L348.19 291.275L406.379 325.227L426.713 319.719C439.524 316.25 447.079 303.063 443.606 290.281C440.149 277.5 427.042 270 414.137 273.406ZM426.713 192.281L406.379 186.773L348.19 220.725L414.137 238.594C416.249 239.156 418.362 239.437 420.442 239.437C431.014 239.437 440.711 232.406 443.606 221.719C447.079 208.938 439.524 195.75 426.713 192.281ZM256.258 382.242V450.504L270.475 464.875C275.168 469.625 281.362 472 287.555 472C293.655 472 299.756 469.688 304.448 465.062C313.879 455.75 313.973 440.562 304.635 431.125L256.258 382.242ZM374.944 380.988L316.125 346.672L333.868 413.594C336.715 424.344 346.444 431.438 357.079 431.438C359.114 431.438 361.178 431.188 363.243 430.625C376.067 427.25 383.715 414.094 380.323 401.281L374.944 380.988ZM610.163 256L633.194 232.969C642.569 223.594 642.569 208.406 633.194 199.031S608.631 189.656 599.256 199.031L576.225 222.062L553.194 199.031C543.819 189.656 528.631 189.656 519.256 199.031S509.881 223.594 519.256 232.969L542.288 256L519.256 279.031C509.881 288.406 509.881 303.594 519.256 312.969C523.944 317.656 530.084 320 536.225 320S548.506 317.656 553.194 312.969L576.225 289.938L599.256 312.969C603.944 317.656 610.084 320 616.225 320S628.506 317.656 633.194 312.969C642.569 303.594 642.569 288.406 633.194 279.031L610.163 256ZM544.225 97.938L567.256 120.969C571.944 125.656 578.084 128 584.225 128S596.506 125.656 601.194 120.969C610.569 111.594 610.569 96.406 601.194 87.031L578.163 64L601.194 40.969C610.569 31.594 610.569 16.406 601.194 7.031S576.631 -2.344 567.256 7.031L544.225 30.062L521.194 7.031C511.819 -2.344 496.631 -2.344 487.256 7.031S477.881 31.594 487.256 40.969L510.288 64L487.256 87.031C477.881 96.406 477.881 111.594 487.256 120.969C491.944 125.656 498.084 128 504.225 128S516.506 125.656 521.194 120.969L544.225 97.938Z" />
            <path d="M443.615 384.125C437.671 394.312 426.941 400 415.93 400C410.44 400 404.888 398.594 399.804 395.625L256.032 311.742V480C256.032 497.688 241.69 512 224 512S191.967 497.688 191.967 480V311.742L48.195 395.625C43.112 398.594 37.559 400 32.069 400C21.058 400 10.328 394.312 4.385 384.125C-4.546 368.875 0.6 349.281 15.881 340.375L160.495 256L15.881 171.625C0.6 162.719 -4.546 143.125 4.385 127.875C13.269 112.594 32.883 107.438 48.195 116.375L191.967 200.258V32C191.967 14.312 206.31 0 224 0S256.032 14.312 256.032 32V200.258L399.804 116.375C415.085 107.469 434.715 112.625 443.615 127.875C452.546 143.125 447.4 162.719 432.118 171.625L287.504 256L432.118 340.375C447.4 349.281 452.546 368.875 443.615 384.125Z" />
        </Icon>
    </>
}