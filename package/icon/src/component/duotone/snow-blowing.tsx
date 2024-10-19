
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snow-blowing` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snow-blowing?s=duotone snow-blowing}
 * @preview ![snow-blowing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAyNDBINTUyQzYwMC41MzEgMjQwIDY0MCAyMDAuNTMxIDY0MCAxNTJTNjAwLjUzMSA2NCA1NTIgNjRINTQ0QzUyNi4zMjggNjQgNTEyIDc4LjMxMiA1MTIgOTZTNTI2LjMyOCAxMjggNTQ0IDEyOEg1NTJDNTY1LjIzNCAxMjggNTc2IDEzOC43ODEgNTc2IDE1MlM1NjUuMjM0IDE3NiA1NTIgMTc2SDQxNkMzOTguMzI4IDE3NiAzODQgMTkwLjMxMiAzODQgMjA4UzM5OC4zMjggMjQwIDQxNiAyNDBaTTU1MiAyNzJINDE2QzM5OC4zMjggMjcyIDM4NCAyODYuMzEyIDM4NCAzMDRTMzk4LjMyOCAzMzYgNDE2IDMzNkg1NTJDNTY1LjIzNCAzMzYgNTc2IDM0Ni43ODEgNTc2IDM2MFM1NjUuMjM0IDM4NCA1NTIgMzg0SDU0NEM1MjYuMzI4IDM4NCA1MTIgMzk4LjMxMiA1MTIgNDE2UzUyNi4zMjggNDQ4IDU0NCA0NDhINTUyQzYwMC41MzEgNDQ4IDY0MCA0MDguNTMxIDY0MCAzNjBTNjAwLjUzMSAyNzIgNTUyIDI3MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzQzLjUwMiAxNTlDMzM2Ljg5MiAxNDcuNTMxIDMyMi4xNTggMTQzLjU5NCAzMTAuNzIgMTUwLjIxOUwyOTMuNjQ4IDE2MC4wNzZMMjk0LjMzIDE1Ny41MzFDMjk3LjE4OSAxNDYuODQ0IDI5MC44NjEgMTM1Ljg3NSAyODAuMTg5IDEzMy4wMzFDMjY5LjU0OCAxMzAuMTg4IDI1OC41NjQgMTM2LjUgMjU1LjcwNSAxNDcuMTU2TDI0NC42NyAxODguMzU0TDE5OS41MDIgMjE0LjQzMlYxNTYuMjg5TDIyOS42NDIgMTI2LjE1NkMyMzcuNDU1IDExOC4zNDQgMjM3LjQ1NSAxMDUuNjU2IDIyOS42NDIgOTcuODQ0UzIwOS4xNzMgOTAuMDMxIDIwMS4zNjEgOTcuODQ0TDE5OS41MDIgOTkuNzA1Vjg4QzE5OS41MDIgNzQuNzUgMTg4Ljc1MiA2NCAxNzUuNTAyIDY0UzE1MS41MDIgNzQuNzUgMTUxLjUwMiA4OFY5OS43MDVMMTQ5LjY0MiA5Ny44NDRDMTQxLjgzIDkwLjAzMSAxMjkuMTczIDkwLjAzMSAxMjEuMzYxIDk3Ljg0NFMxMTMuNTQ4IDExOC4zNDQgMTIxLjM2MSAxMjYuMTU2TDE1MS41MDIgMTU2LjI4OVYyMTQuNDM2TDEwMS4xNDggMTg1LjM2NUw5MC4xMTEgMTQ0LjE1NkM4Ny4yNTIgMTMzLjQ2OSA3Ni4zMyAxMjcuMTg4IDY1LjYyNyAxMzAuMDMxQzU0Ljk1NSAxMzIuODc1IDQ4LjYyNyAxNDMuODQ0IDUxLjQ4NiAxNTQuNTMxTDUyLjE3MiAxNTcuMDlMNDIuMDAyIDE1MS4yMTlDMzAuNTY0IDE0NC41OTQgMTUuODMgMTQ4LjUzMSA5LjIyIDE2MEMyLjU5NSAxNzEuNDY5IDYuNTE3IDE4Ni4xNTYgMTguMDAyIDE5Mi43ODFMMjguMTc3IDE5OC42NTZMMjUuNjExIDE5OS4zNDRDMTQuOTU1IDIwMi4xODggOC42MjcgMjEzLjE1NiAxMS40ODYgMjIzLjg0NEMxMy44NzcgMjMyLjc4MSAyMS45NTUgMjM4LjY1NiAzMC43ODMgMjM4LjY1NkMzMi41MDIgMjM4LjY1NiAzNC4yNTIgMjM4LjQzOCAzNS45ODYgMjM3Ljk2OUw3Ny4xNCAyMjYuOTI0TDEyNy41MDQgMjU1Ljk5OEw3OC44NzMgMjg0LjA3NkwzNy43MiAyNzMuMDMxQzI3LjE1OCAyNzAuMTU2IDE2LjA4IDI3Ni41IDEzLjIyIDI4Ny4xNTZDMTAuMzYxIDI5Ny44NDQgMTYuNjg5IDMwOC44MTIgMjcuMzQ1IDMxMS42NTZMMjkuOTEyIDMxMi4zNDRMMTkuNzM2IDMxOC4yMTlDOC4yNTIgMzI0Ljg0NCA0LjMzIDMzOS41MzEgMTAuOTU1IDM1MUMxNS4zOTIgMzU4LjY4OCAyMy40NyAzNjMgMzEuNzUyIDM2M0MzNS44MyAzNjMgMzkuOTU1IDM2MS45NjkgNDMuNzM2IDM1OS43ODFMNTMuOTA2IDM1My45MUw1My4yMiAzNTYuNDY5QzUwLjM2MSAzNjcuMTU2IDU2LjY4OSAzNzguMTI1IDY3LjM2MSAzODAuOTY5QzY5LjA5NSAzODEuNDM4IDcwLjgzIDM4MS42NTYgNzIuNTQ4IDM4MS42NTZDODEuMzc3IDM4MS42NTYgODkuNDU1IDM3NS43ODEgOTEuODQ1IDM2Ni44NDRMMTAyLjg4NCAzMjUuNjMzTDE1MS41MDIgMjk3LjU2MlYzNDcuNzExTDEyMS4zNjEgMzc3Ljg0NEMxMTMuNTQ4IDM4NS42NTYgMTEzLjU0OCAzOTguMzQ0IDEyMS4zNjEgNDA2LjE1NlMxNDEuODMgNDEzLjk2OSAxNDkuNjQyIDQwNi4xNTZMMTUxLjUwMiA0MDQuMjk1VjQyNEMxNTEuNTAyIDQzNy4yNSAxNjIuMjUyIDQ0OCAxNzUuNTAyIDQ0OFMxOTkuNTAyIDQzNy4yNSAxOTkuNTAyIDQyNFY0MDQuMjk1TDIwMS4zNjEgNDA2LjE1NkMyMDUuMjY3IDQxMC4wNjIgMjEwLjM3NyA0MTIgMjE1LjUwMiA0MTJTMjI1LjczNiA0MTAuMDYyIDIyOS42NDIgNDA2LjE1NkMyMzcuNDU1IDM5OC4zNDQgMjM3LjQ1NSAzODUuNjU2IDIyOS42NDIgMzc3Ljg0NEwxOTkuNTAyIDM0Ny43MTFWMjk3LjU2NEwyNDIuOTMzIDMyMi42MzlMMjUzLjk3IDM2My44NDRDMjU2LjM2MSAzNzIuNzgxIDI2NC40MzkgMzc4LjY1NiAyNzMuMjY3IDM3OC42NTZDMjc0Ljk4NiAzNzguNjU2IDI3Ni43MiAzNzguNDM4IDI3OC40NTUgMzc3Ljk2OUMyODkuMTI3IDM3NS4xMjUgMjk1LjQ1NSAzNjQuMTU2IDI5Mi41OTUgMzUzLjQ2OUwyOTEuOTEyIDM1MC45MTRMMzA5LjAwMiAzNjAuNzgxQzMxMi43ODMgMzYyLjk2OSAzMTYuOTA4IDM2NCAzMjAuOTg2IDM2NEMzMjkuMjY3IDM2NCAzMzcuMzQ1IDM1OS42ODggMzQxLjc4MyAzNTJDMzQ4LjQwOCAzNDAuNTMxIDM0NC40ODYgMzI1Ljg0NCAzMzMuMDAyIDMxOS4yMTlMMzE1Ljg5OCAzMDkuMzQ2TDMxOC40NyAzMDguNjU2QzMyOS4xMjcgMzA1LjgxMiAzMzUuNDU1IDI5NC44NDQgMzMyLjU5NSAyODQuMTU2QzMyOS43MzYgMjczLjUgMzE4LjgxNCAyNjcuMTU2IDMwOC4wOTUgMjcwLjAzMUwyNjYuOTM1IDI4MS4wNzhMMjIzLjQ5NCAyNTUuOTk4TDI2OC42NjIgMjI5LjkyTDMwOS44MyAyNDAuOTY5QzMxMS41NjQgMjQxLjQzOCAzMTMuMzE0IDI0MS42NTYgMzE1LjAzMyAyNDEuNjU2QzMyMy44NjEgMjQxLjY1NiAzMzEuOTM5IDIzNS43ODEgMzM0LjMzIDIyNi44NDRDMzM3LjE4OSAyMTYuMTU2IDMzMC44NjEgMjA1LjE4OCAzMjAuMjA1IDIwMi4zNDRMMzE3LjYyMyAyMDEuNjUyTDMzNC43MiAxOTEuNzgxQzM0Ni4yMDUgMTg1LjE1NiAzNTAuMTI3IDE3MC40NjkgMzQzLjUwMiAxNTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnowBlowing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M416 240H552C600.531 240 640 200.531 640 152S600.531 64 552 64H544C526.328 64 512 78.312 512 96S526.328 128 544 128H552C565.234 128 576 138.781 576 152S565.234 176 552 176H416C398.328 176 384 190.312 384 208S398.328 240 416 240ZM552 272H416C398.328 272 384 286.312 384 304S398.328 336 416 336H552C565.234 336 576 346.781 576 360S565.234 384 552 384H544C526.328 384 512 398.312 512 416S526.328 448 544 448H552C600.531 448 640 408.531 640 360S600.531 272 552 272Z" />
            <path d="M343.502 159C336.892 147.531 322.158 143.594 310.72 150.219L293.648 160.076L294.33 157.531C297.189 146.844 290.861 135.875 280.189 133.031C269.548 130.188 258.564 136.5 255.705 147.156L244.67 188.354L199.502 214.432V156.289L229.642 126.156C237.455 118.344 237.455 105.656 229.642 97.844S209.173 90.031 201.361 97.844L199.502 99.705V88C199.502 74.75 188.752 64 175.502 64S151.502 74.75 151.502 88V99.705L149.642 97.844C141.83 90.031 129.173 90.031 121.361 97.844S113.548 118.344 121.361 126.156L151.502 156.289V214.436L101.148 185.365L90.111 144.156C87.252 133.469 76.33 127.188 65.627 130.031C54.955 132.875 48.627 143.844 51.486 154.531L52.172 157.09L42.002 151.219C30.564 144.594 15.83 148.531 9.22 160C2.595 171.469 6.517 186.156 18.002 192.781L28.177 198.656L25.611 199.344C14.955 202.188 8.627 213.156 11.486 223.844C13.877 232.781 21.955 238.656 30.783 238.656C32.502 238.656 34.252 238.438 35.986 237.969L77.14 226.924L127.504 255.998L78.873 284.076L37.72 273.031C27.158 270.156 16.08 276.5 13.22 287.156C10.361 297.844 16.689 308.812 27.345 311.656L29.912 312.344L19.736 318.219C8.252 324.844 4.33 339.531 10.955 351C15.392 358.688 23.47 363 31.752 363C35.83 363 39.955 361.969 43.736 359.781L53.906 353.91L53.22 356.469C50.361 367.156 56.689 378.125 67.361 380.969C69.095 381.438 70.83 381.656 72.548 381.656C81.377 381.656 89.455 375.781 91.845 366.844L102.884 325.633L151.502 297.562V347.711L121.361 377.844C113.548 385.656 113.548 398.344 121.361 406.156S141.83 413.969 149.642 406.156L151.502 404.295V424C151.502 437.25 162.252 448 175.502 448S199.502 437.25 199.502 424V404.295L201.361 406.156C205.267 410.062 210.377 412 215.502 412S225.736 410.062 229.642 406.156C237.455 398.344 237.455 385.656 229.642 377.844L199.502 347.711V297.564L242.933 322.639L253.97 363.844C256.361 372.781 264.439 378.656 273.267 378.656C274.986 378.656 276.72 378.438 278.455 377.969C289.127 375.125 295.455 364.156 292.595 353.469L291.912 350.914L309.002 360.781C312.783 362.969 316.908 364 320.986 364C329.267 364 337.345 359.688 341.783 352C348.408 340.531 344.486 325.844 333.002 319.219L315.898 309.346L318.47 308.656C329.127 305.812 335.455 294.844 332.595 284.156C329.736 273.5 318.814 267.156 308.095 270.031L266.935 281.078L223.494 255.998L268.662 229.92L309.83 240.969C311.564 241.438 313.314 241.656 315.033 241.656C323.861 241.656 331.939 235.781 334.33 226.844C337.189 216.156 330.861 205.188 320.205 202.344L317.623 201.652L334.72 191.781C346.205 185.156 350.127 170.469 343.502 159Z" />
        </Icon>
    </>
}