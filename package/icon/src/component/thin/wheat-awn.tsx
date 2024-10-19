
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wheat-awn` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheat-awn?s=thin wheat-awn}
 * @preview ![wheat-awn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03Mi4yOTcgMzk1LjIwOUM3Ny4yNzMgMzk1LjIwOSA4MC4zMDEgMzkxLjAxOCA4MC4zMDEgMzg3LjE4OEM4MC4zMDEgMzc4IDQ0LjUyMiAzNTQuMjIxIDQzLjA5NCAzMTIuNDJDNDMuODU5IDI4OC40MTggNTcuNzk3IDI2Mi4xOTcgODIuNTE2IDIzOC4wMDhDOTQuMjUgMjQ4Ljg4MyAxMjEuOTA2IDI3OC4xMzcgMTIxLjk4NCAzMTIuMTM5QzEyMS42NDEgMzIxLjg3MSAxMTkuMjYzIDMyNy4yMDkgMTE5LjI2MyAzMjkuODU3QzExOS4yNjMgMzMzLjcwNiAxMjIuMjY4IDMzNy44MTkgMTI3LjEzNyAzMzcuODE5QzEzMC43NTUgMzM3LjgxOSAxMzQuMDgyIDMzNS40ODkgMTM1LjAxNiAzMzEuODU5QzEzNi44MTIgMzI0Ljg1OSAxMzcuNzY2IDMxOC43OTUgMTM3Ljk4NCAzMTIuMzg5QzEzNy44NTYgMjYwLjEzNCA4Ny4zNjUgMjE5LjE5NyA4Mi4zMSAyMTkuMTk3QzczLjIyMSAyMTkuMTk3IDI4LjU1OSAyNjYuMjgyIDI3LjA5NCAzMTIuNDUxQzI4LjQwNiAzNTEuNDA5IDYzLjY3IDM5NS4yMDkgNzIuMjk3IDM5NS4yMDlaTTIwMC4xNDEgMzc0LjIzOEMxOTMuOTA2IDM3NC4yMzggMTg3LjUgMzc1LjExMyAxNzkuOTg0IDM3Ni45ODhDMTc2LjM0OSAzNzcuODkgMTczLjkxOSAzODEuMTU4IDE3My45MTkgMzg0Ljc0NUMxNzMuOTE5IDM4OC42NyAxNzcuMDE1IDM5Mi43NDcgMTgxLjgzNCAzOTIuNzQ3QzE4NC41ODQgMzkyLjc0NyAxOTAuNjM3IDM5MC4yMzggMTk5Ljg3NSAzOTAuMjM4QzIzMC44MTIgMzkxLjI3MSAyNTcuOTM3IDQxMy4zMzQgMjczLjc5NyA0MjkuNTg2QzI0OS44NTkgNDUzLjk2MyAyMjMuMTQxIDQ2OC4zMDkgMjAwLjE1NiA0NjkuMTUyQzE1Ny4yMTIgNDY3LjczNyAxMzMuNDM1IDQzMS43MzMgMTI0Ljc4OCA0MzEuNzMzQzEyMS44NjUgNDMxLjczMyAxMTYuNzk1IDQzMy45MzkgMTE2Ljc5NSA0MzkuN0MxMTYuNzk1IDQ0OS4xNzMgMTYwLjY4OSA0ODMuODUgMjAwLjE4NyA0ODUuMTU0QzI1Mi40NDQgNDgzLjIxMSAyOTIuNzk3IDQzMy41IDI5Mi43OTcgNDI5LjU4MUMyOTIuNzk3IDQyNy42NjEgMjkyLjEwNSA0MjUuNzM4IDI5MC43MTkgNDI0LjIxMUMyNzQuMzQ0IDQwNi4xNDYgMjQwLjg0NCAzNzUuNjEzIDIwMC4xNDEgMzc0LjIzOFpNMjczLjE1NiAxOTQuMzE2QzI3OC4wOTUgMTk0LjMxNiAyODEuMTUyIDE5MC4xNzMgMjgxLjE1MiAxODYuMzEzQzI4MS4xNTIgMTc3LjA2IDI0NS4zOCAxNTMuMzggMjQzLjk1MyAxMTEuNTU5QzI0NC43MzQgODcuNTI1IDI1OC42NzIgNjEuMzA1IDI4My4zNTkgMzcuMTE1QzI5NS4xMDkgNDguMDg2IDMyMi43NjYgNzcuNDMyIDMyMi44NTkgMTExLjIxNUMzMjIuNDgzIDEyMS4wNzUgMzIwLjEyNCAxMjYuMzAzIDMyMC4xMjQgMTI4Ljk4OEMzMjAuMTI0IDEzMi45NDQgMzIzLjI3NyAxMzYuOTgyIDMyOC4wNTYgMTM2Ljk4MkMzMzEuNjEzIDEzNi45ODIgMzM0Ljk0NyAxMzQuNjMgMzM1Ljg3NSAxMzAuOTk4QzMzNy42NzIgMTIzLjk5OCAzMzguNjI1IDExNy45MDQgMzM4Ljg1OSAxMTEuNDk2QzMzOC43MTUgNTkuNDkxIDI4OC4xNTEgMTguMjYxIDI4My4xNjggMTguMjYxQzI3NC4xMDYgMTguMjYxIDIyOS40NDIgNjUuMzY4IDIyNy45NTMgMTExLjU5QzIyOS4yNyAxNTAuNzM2IDI2NC41OTEgMTk0LjMxNiAyNzMuMTU2IDE5NC4zMTZaTTE3Ny4xNTYgMjkwLjMyNEMxODIuMDkzIDI5MC4zMjQgMTg1LjE1MiAyODYuMTgxIDE4NS4xNTIgMjgyLjMyMUMxODUuMTUyIDI3My4wNjggMTQ5LjM4IDI0OS4zODggMTQ3Ljk1MyAyMDcuNTY4QzE0OC43MzQgMTgzLjUzNSAxNjIuNjcyIDE1Ny4zMTIgMTg3LjM1OSAxMzMuMTIzQzE5OS4xMDkgMTQ0LjA5NCAyMjYuNzY2IDE3My40MzkgMjI2Ljg1OSAyMDcuMjI1QzIyNi40ODMgMjE3LjA4MSAyMjQuMTI0IDIyMi4zMTMgMjI0LjEyNCAyMjQuOTk2QzIyNC4xMjQgMjI4LjkwOSAyMjcuMjM1IDIzMi45OTggMjMyLjA2MSAyMzIuOTk4QzIzNS42MDMgMjMyLjk5OCAyMzguOTYyIDIzMC42MDggMjM5Ljg3NSAyMjcuMDA2QzI0MS42NzIgMjIwLjAwNiAyNDIuNjI1IDIxMy45MTIgMjQyLjg1OSAyMDcuNTA2QzI0Mi43MTQgMTU1LjM3MiAxOTIuMTEgMTE0LjI3MSAxODcuMTM2IDExNC4yNzFDMTc4LjA1NCAxMTQuMjcxIDEzMy40MzkgMTYxLjQ2NiAxMzEuOTUzIDIwNy42QzEzMy4yNyAyNDYuNzQ0IDE2OC41OTEgMjkwLjMyNCAxNzcuMTU2IDI5MC4zMjRaTTMwNSAyNjkuMzg1QzI5OC43MDMgMjY5LjM4NSAyOTIuMTA5IDI3MC4yOTEgMjg0LjgxMiAyNzIuMTM1QzI4MS4xOTQgMjczLjA1OSAyNzguNzgxIDI3Ni4zMDcgMjc4Ljc4MSAyNzkuODc1QzI3OC43ODEgMjgzLjgxNyAyODEuODcxIDI4Ny45MTYgMjg2LjY3MyAyODcuOTE2QzI4OS41MTkgMjg3LjkxNiAyOTUuMDgxIDI4NS4zODcgMzA0LjczNCAyODUuMzg3QzMzNS42NzIgMjg2LjQxOCAzNjIuODEzIDMwOC40ODIgMzc4LjY3MiAzMjQuNzAzQzM1NC43MzQgMzQ5LjExMSAzMjguMDMxIDM2My40MjQgMzA1LjAzMSAzNjQuMjY4QzI2Mi4wNzQgMzYyLjg1MiAyMzguMjcxIDMyNi44MzkgMjI5LjY3OCAzMjYuODM5QzIyNi43NTQgMzI2LjgzOSAyMjEuNjcgMzI5LjA1NiAyMjEuNjcgMzM0LjgxNUMyMjEuNjcgMzQ0LjI3IDI2NS40NyAzNzguOTYzIDMwNS4wNDcgMzgwLjI3QzM0NS4zOTEgMzc4LjgzMiAzNzkuMDk0IDM0OC4yMDUgMzk1LjU5NCAzMzAuMDc4QzM5Ni45NzkgMzI4LjU2IDM5Ny42NzQgMzI2LjYzNSAzOTcuNjc0IDMyNC43MDZDMzk3LjY3NCAzMjAuMjc2IDM1Ni4yNiAyNzEuMTE2IDMwNSAyNjkuMzg1Wk00MDEgMTczLjM3N0MzOTQuNzAzIDE3My4zNzcgMzg4LjEwOSAxNzQuMjgzIDM4MC44MTIgMTc2LjEyN0MzNzcuMTk0IDE3Ny4wNTEgMzc0Ljc4MSAxODAuMjk3IDM3NC43ODEgMTgzLjg2NkMzNzQuNzgxIDE4Ny44ODMgMzc3LjkzMyAxOTEuOSAzODIuNjkgMTkxLjlDMzg1LjUyMSAxOTEuOSAzOTEuMTIyIDE4OS4zNzkgNDAwLjczNCAxODkuMzc5QzQzMS42NzIgMTkwLjQxIDQ1OC44MTIgMjEyLjQ3NSA0NzQuNjcyIDIyOC42OTVDNDUwLjczNCAyNTMuMTA0IDQyNC4wMzEgMjY3LjQxNiA0MDEuMDMxIDI2OC4yNkMzNTguMDc3IDI2Ni44NDQgMzM0LjI2NyAyMzAuODQzIDMyNS42NzUgMjMwLjg0M0MzMjIuNzU3IDIzMC44NDMgMzE3LjY3IDIzMy4wMzYgMzE3LjY3IDIzOC44MDdDMzE3LjY3IDI0OC4yNjIgMzYxLjQ3IDI4Mi45NTUgNDAxLjA0NyAyODQuMjYyQzQ0MS4zOTEgMjgyLjgyNCA0NzUuMDk0IDI1Mi4xOTcgNDkxLjU5NCAyMzQuMDdDNDkyLjk3OSAyMzIuNTUzIDQ5My42NzQgMjMwLjYyNyA0OTMuNjc0IDIyOC42OThDNDkzLjY3NCAyMjQuMjY3IDQ1Mi4yNiAxNzUuMTA5IDQwMSAxNzMuMzc3Wk01MTIgOEM1MTIgMy40MyA1MDguMjYzIDAgNTA0IDBDNTAxLjk1MyAwIDQ5OS45MDYgMC43ODEgNDk4LjM0NCAyLjM0NEwyLjM0NCA0OTguMzQ0QzAuNzgxIDQ5OS45MDYgMCA1MDEuOTUzIDAgNTA0QzAgNTA2LjkwNiAyLjI4MSA1MTIgOCA1MTJDMTAuMDYyIDUxMiAxMi4wOTQgNTExLjIxOSAxMy42NTYgNTA5LjY1Nkw1MDkuNjU2IDEzLjY1NkM1MTEuMjE5IDEyLjA5NCA1MTIgMTAuMDQ3IDUxMiA4Wk0zNjAgNjRDMzYyLjA2MiA2NCAzNjQuMDk0IDYzLjIxOSAzNjUuNjU2IDYxLjY1Nkw0MDUuNjU2IDIxLjY1NkM0MDcuMjE5IDIwLjA5NCA0MDggMTguMDQ3IDQwOCAxNkM0MDggMTEuNDMgNDA0LjI2MyA4IDQwMCA4QzM5Ny45NTMgOCAzOTUuOTA2IDguNzgxIDM5NC4zNDQgMTAuMzQ0TDM1NC4zNDQgNTAuMzQ0QzM1Mi43ODEgNTEuOTA2IDM1MiA1My45NTMgMzUyIDU2QzM1MiA1OC45MDYgMzU0LjI4MSA2NCAzNjAgNjRaTTQ5NiAxMDRDNDkzLjk1MyAxMDQgNDkxLjkwNiAxMDQuNzgxIDQ5MC4zNDQgMTA2LjM0NEw0NTAuMzQ0IDE0Ni4zNDRDNDQ4Ljc4MSAxNDcuOTA2IDQ0OCAxNDkuOTUzIDQ0OCAxNTJDNDQ4IDE1NC45MDYgNDUwLjI4MSAxNjAgNDU2IDE2MEM0NTguMDYyIDE2MCA0NjAuMDk0IDE1OS4yMTkgNDYxLjY1NiAxNTcuNjU2TDUwMS42NTYgMTE3LjY1NkM1MDMuMjE5IDExNi4wOTQgNTA0IDExNC4wNDcgNTA0IDExMkM1MDQgMTA3LjQzIDUwMC4yNjMgMTA0IDQ5NiAxMDRaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function WheatAwn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M72.297 395.209C77.273 395.209 80.301 391.018 80.301 387.188C80.301 378 44.522 354.221 43.094 312.42C43.859 288.418 57.797 262.197 82.516 238.008C94.25 248.883 121.906 278.137 121.984 312.139C121.641 321.871 119.263 327.209 119.263 329.857C119.263 333.706 122.268 337.819 127.137 337.819C130.755 337.819 134.082 335.489 135.016 331.859C136.812 324.859 137.766 318.795 137.984 312.389C137.856 260.134 87.365 219.197 82.31 219.197C73.221 219.197 28.559 266.282 27.094 312.451C28.406 351.409 63.67 395.209 72.297 395.209ZM200.141 374.238C193.906 374.238 187.5 375.113 179.984 376.988C176.349 377.89 173.919 381.158 173.919 384.745C173.919 388.67 177.015 392.747 181.834 392.747C184.584 392.747 190.637 390.238 199.875 390.238C230.812 391.271 257.937 413.334 273.797 429.586C249.859 453.963 223.141 468.309 200.156 469.152C157.212 467.737 133.435 431.733 124.788 431.733C121.865 431.733 116.795 433.939 116.795 439.7C116.795 449.173 160.689 483.85 200.187 485.154C252.444 483.211 292.797 433.5 292.797 429.581C292.797 427.661 292.105 425.738 290.719 424.211C274.344 406.146 240.844 375.613 200.141 374.238ZM273.156 194.316C278.095 194.316 281.152 190.173 281.152 186.313C281.152 177.06 245.38 153.38 243.953 111.559C244.734 87.525 258.672 61.305 283.359 37.115C295.109 48.086 322.766 77.432 322.859 111.215C322.483 121.075 320.124 126.303 320.124 128.988C320.124 132.944 323.277 136.982 328.056 136.982C331.613 136.982 334.947 134.63 335.875 130.998C337.672 123.998 338.625 117.904 338.859 111.496C338.715 59.491 288.151 18.261 283.168 18.261C274.106 18.261 229.442 65.368 227.953 111.59C229.27 150.736 264.591 194.316 273.156 194.316ZM177.156 290.324C182.093 290.324 185.152 286.181 185.152 282.321C185.152 273.068 149.38 249.388 147.953 207.568C148.734 183.535 162.672 157.312 187.359 133.123C199.109 144.094 226.766 173.439 226.859 207.225C226.483 217.081 224.124 222.313 224.124 224.996C224.124 228.909 227.235 232.998 232.061 232.998C235.603 232.998 238.962 230.608 239.875 227.006C241.672 220.006 242.625 213.912 242.859 207.506C242.714 155.372 192.11 114.271 187.136 114.271C178.054 114.271 133.439 161.466 131.953 207.6C133.27 246.744 168.591 290.324 177.156 290.324ZM305 269.385C298.703 269.385 292.109 270.291 284.812 272.135C281.194 273.059 278.781 276.307 278.781 279.875C278.781 283.817 281.871 287.916 286.673 287.916C289.519 287.916 295.081 285.387 304.734 285.387C335.672 286.418 362.813 308.482 378.672 324.703C354.734 349.111 328.031 363.424 305.031 364.268C262.074 362.852 238.271 326.839 229.678 326.839C226.754 326.839 221.67 329.056 221.67 334.815C221.67 344.27 265.47 378.963 305.047 380.27C345.391 378.832 379.094 348.205 395.594 330.078C396.979 328.56 397.674 326.635 397.674 324.706C397.674 320.276 356.26 271.116 305 269.385ZM401 173.377C394.703 173.377 388.109 174.283 380.812 176.127C377.194 177.051 374.781 180.297 374.781 183.866C374.781 187.883 377.933 191.9 382.69 191.9C385.521 191.9 391.122 189.379 400.734 189.379C431.672 190.41 458.812 212.475 474.672 228.695C450.734 253.104 424.031 267.416 401.031 268.26C358.077 266.844 334.267 230.843 325.675 230.843C322.757 230.843 317.67 233.036 317.67 238.807C317.67 248.262 361.47 282.955 401.047 284.262C441.391 282.824 475.094 252.197 491.594 234.07C492.979 232.553 493.674 230.627 493.674 228.698C493.674 224.267 452.26 175.109 401 173.377ZM512 8C512 3.43 508.263 0 504 0C501.953 0 499.906 0.781 498.344 2.344L2.344 498.344C0.781 499.906 0 501.953 0 504C0 506.906 2.281 512 8 512C10.062 512 12.094 511.219 13.656 509.656L509.656 13.656C511.219 12.094 512 10.047 512 8ZM360 64C362.062 64 364.094 63.219 365.656 61.656L405.656 21.656C407.219 20.094 408 18.047 408 16C408 11.43 404.263 8 400 8C397.953 8 395.906 8.781 394.344 10.344L354.344 50.344C352.781 51.906 352 53.953 352 56C352 58.906 354.281 64 360 64ZM496 104C493.953 104 491.906 104.781 490.344 106.344L450.344 146.344C448.781 147.906 448 149.953 448 152C448 154.906 450.281 160 456 160C458.062 160 460.094 159.219 461.656 157.656L501.656 117.656C503.219 116.094 504 114.047 504 112C504 107.43 500.263 104 496 104Z " />
        </Icon>
    </>
}