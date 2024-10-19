
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gears` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gears?s=thin gears}
 * @preview ![gears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAuMDAxIDEyOEMxMzMuNTMyIDEyOCAxMTIuMDAxIDE0OS41MzEgMTEyLjAwMSAxNzZTMTMzLjUzMiAyMjQgMTYwLjAwMSAyMjRTMjA4LjAwMSAyMDIuNDY5IDIwOC4wMDEgMTc2UzE4Ni40NyAxMjggMTYwLjAwMSAxMjhaTTE2MC4wMDEgMjA4QzE0Mi4zNDUgMjA4IDEyOC4wMDEgMTkzLjY1NiAxMjguMDAxIDE3NlMxNDIuMzQ1IDE0NCAxNjAuMDAxIDE0NFMxOTIuMDAxIDE1OC4zNDQgMTkyLjAwMSAxNzZTMTc3LjY1NyAyMDggMTYwLjAwMSAyMDhaTTYyOC40MDUgMzE4LjIyMUM2MjYuNjg0IDMxMC4wMDIgNjE5LjIwOCAzMDQuMDMzIDYxMC42NjkgMzA0LjAzM0g1ODMuNzk2QzU3OS4yMjkgMjkyLjYyOSA1NzMuMDk3IDI4Mi4wMDQgNTY1LjQ2NCAyNzIuMzE2TDU3OC45MTUgMjQ5LjFDNTgwLjQ3MiAyNDYuNDc3IDU4MS4yOCAyNDMuMzAzIDU4MS4yOCAyNDAuMDYxQzU4MS4yODIgMjM1LjE0MyA1NzkuNDE5IDIzMC4wNjYgNTc1LjQ3MyAyMjYuNTA2QzU1OC4zOTMgMjExLjQxNCA1MzguNzE4IDIwMC4xMDIgNTE3LjAwNyAxOTIuODgzQzUwOC45NjggMTkwLjIyNyA1MDAuMDIgMTkzLjcyNyA0OTUuNzY0IDIwMS4xMzNMNDgyLjYyNiAyMjMuODgzQzQ2OS4yNDUgMjIxLjg4MSA0NTcuODA0IDIyMS45NzEgNDQ1LjM2OCAyMjMuODgzTDQzMi4yMjkgMjAxLjE2NEM0MjcuOTc1IDE5My43MjcgNDE5LjAyOCAxOTAuMjI3IDQxMC45NTggMTkyLjg4M0MzODkuMjc4IDIwMC4xMDIgMzY5LjYgMjExLjQxNCAzNTIuNDg5IDIyNi41MzdDMzQ5LjY1MyAyMjkuMDggMzQ2LjYzIDIzNC4yMjcgMzQ2LjYzIDI0MC4xN0MzNDYuNjMgMjQzLjAxIDM0Ny4zMTkgMjQ2LjAzMSAzNDkuMDQ4IDI0OS4wMzdMMzYyLjM0MyAyNzIuMDY2QzM1NC42MTYgMjgxLjg0OCAzNDguNDIzIDI5Mi41MzUgMzQzLjgyMyAzMDQuMDMzSDMxNy4yOTZDMzA4Ljc1NSAzMDQuMDMzIDMwMS4zMDkgMzEwLjAwMiAyOTkuNTU3IDMxOC4yNTJDMjk2LjkxMyAzMzAuOTQzIDI5Ni4wMDEgMzQyLjQxNiAyOTYuMDAxIDM1Mi4yOTVDMjk2LjAwMSAzNjcuOTUzIDI5OC4yOSAzNzkuNjA3IDI5OS41ODkgMzg1Ljc3OUMzMDEuMzA5IDM5My45NjcgMzA4Ljc1NSAzOTkuOTM2IDMxNy4yOTYgMzk5LjkzNkgzNDMuODIzQzM0OC40MjMgNDExLjQzNCAzNTQuNjE2IDQyMi4xNTIgMzYyLjM0MyA0MzEuOTM0TDM0OS4wNzkgNDU0LjlDMzQ3LjUyNiA0NTcuNTgyIDM0Ni43MTQgNDYwLjc3MSAzNDYuNzE0IDQ2NC4wMTRDMzQ2LjcxNCA0NjguOTA4IDM0OC41NjcgNDczLjkyMiAzNTIuNTIgNDc3LjQ5NEMzNjkuNiA0OTIuNTg2IDM4OS4yNzggNTAzLjg5OCA0MTAuOTg5IDUxMS4xMTdDNDE5LjAyOCA1MTMuNzczIDQyNy45NzUgNTEwLjI3MyA0MzIuMjI5IDUwMi44MzZMNDQ1LjM2OCA0ODAuMTE5QzQ1Ny43OSA0ODIuMDI3IDQ2OS4yMzEgNDgyLjEyMyA0ODIuNjI2IDQ4MC4xMTlMNDk1Ljc2NCA1MDIuODM2QzUwMC4wMiA1MTAuMjczIDUwOC45NjggNTEzLjc3MyA1MTcuMDM4IDUxMS4xMTdDNTM4LjcxOCA1MDMuODk4IDU1OC4zOTMgNDkyLjU4NiA1NzUuNTA3IDQ3Ny40NjNDNTc5LjA3OSA0NzQuMjI3IDU4MS4yNTkgNDY5LjEzNSA1ODEuMjU5IDQ2My44NzlDNTgxLjI1OSA0NjAuODU1IDU4MC41MzggNDU3Ljc3NyA1NzguOTQ2IDQ1NC45NjNMNTY1LjQ2NCA0MzEuNjg0QzU3My4wOTcgNDIxLjk5NiA1NzkuMjI5IDQxMS4zNzEgNTgzLjc5NiAzOTkuOTM2SDYxMC42NjlDNjE5LjIwOCAzOTkuOTM2IDYyNi42ODQgMzkzLjk2NyA2MjguNDM2IDM4NS43NDhDNjMxLjA4NyAzNzMuMDMxIDYzMi4wMDEgMzYxLjU1MSA2MzIuMDAxIDM1MS42OEM2MzIuMDAxIDMzNi4wMDQgNjI5LjcgMzI0LjM3MyA2MjguNDA1IDMxOC4yMjFaTTYxMC42NjkgMzgzLjkzNkg1NzIuOTU2QzU2My40MDcgNDA3Ljg0OCA1NjIuMTY3IDQxMC4wMTQgNTQ2LjE3NyA0MzAuMzA5TDU2NS4yNTkgNDYzLjg3OUM1NjUuMjU5IDQ3MC4xOTcgNTEzLjA1NCA1MDAuODEyIDUwOS42MTQgNDk0LjgyNkw0OTEuMDI2IDQ2Mi42ODRDNDY0LjE5IDQ2Ni42OTkgNDYyLjQzOCA0NjYuNTU1IDQzNi45OTEgNDYyLjY0NUw0MTguMzQxIDQ5NC44OTNDNDE1LjI1MSA1MDAuMjkzIDM2MS44NzQgNDcwLjkxOCAzNjIuOTM0IDQ2Mi45MDJMMzgxLjYyOCA0MzAuNTMzQzM2NS41NTQgNDEwLjE4OSAzNjQuMjYzIDQwNy45NDcgMzU0LjY1NSAzODMuOTM2SDMxNy4yOTZDMzEwLjQwMyAzODMuOTM2IDMxMC40MyAzMjAuMDMzIDMxNy4yOTYgMzIwLjAzM0gzNTQuNjU1QzM2NC4xNjUgMjk2LjI2NiAzNjUuNDQ4IDI5My45NDUgMzgxLjYyNiAyNzMuNDY3TDM2Mi42MyAyNDAuMTdDMzYyLjYzIDIzMy42MjcgNDE1LjA0OCAyMDMuMzYxIDQxOC4zOCAyMDkuMTc0TDQzNi45OTEgMjQxLjM1OUM0NjIuNDE5IDIzNy40NDkgNDY0LjE0NyAyMzcuMjk3IDQ5MS4wMzIgMjQxLjMxOEw1MDkuNjM4IDIwOS4xMDVDNTEyLjczNyAyMDMuNzAxIDU2Ni4wMjYgMjMzLjAzOSA1NjUuMDcxIDI0MS4wNzhMNTQ2LjE3NyAyNzMuNjg5QzU2Mi4xIDI5My45MDQgNTYzLjM2NiAyOTYuMDU1IDU3Mi45NjggMzIwLjAzM0g2MTAuNjY5QzYxNy41NDYgMzIwLjAzMyA2MTcuNjg2IDM4My45MzYgNjEwLjY2OSAzODMuOTM2Wk0zMTAuODM3IDIwNy41NjRMMjg4LjEyIDE5NC40MjZDMjkwLjAyOCAxODIuMDA0IDI5MC4xMjQgMTcwLjU2MyAyODguMTIgMTU3LjE2OEwzMTAuODM3IDE0NC4wMjlDMzE4LjI3NCAxMzkuNzczIDMyMS43NzQgMTMwLjgyNiAzMTkuMTE4IDEyMi43NTZDMzExLjg5OSAxMDEuMDc2IDMwMC41ODcgODEuNCAyODUuNDY0IDY0LjI4N0MyODIuMjI3IDYwLjcxNSAyNzcuMTM2IDU4LjUzNSAyNzEuODggNTguNTM1QzI2OC44NTYgNTguNTM1IDI2NS43NzggNTkuMjU2IDI2Mi45NjQgNjAuODQ4TDIzOS42ODQgNzQuMzNDMjI5Ljk5NyA2Ni42OTcgMjE5LjM3MiA2MC41NjQgMjA3LjkzNiA1NS45OThWMjkuMTI1QzIwNy45MzYgMjAuNTg2IDIwMS45NjggMTMuMTA5IDE5My43NDkgMTEuMzU3QzE4MS4wMzIgOC43MDcgMTY5LjU1MiA3Ljc5MyAxNTkuNjggNy43OTNDMTQ0LjAwNSA3Ljc5MyAxMzIuMzc0IDEwLjA5NCAxMjYuMjIyIDExLjM4OUMxMTguMDAzIDEzLjEwOSAxMTIuMDM0IDIwLjU4NiAxMTIuMDM0IDI5LjEyNVY1NS45OThDMTAwLjYzIDYwLjU2NCA5MC4wMDUgNjYuNjk3IDgwLjMxNyA3NC4zM0w1Ny4xIDYwLjg3OUM1NC40NzcgNTkuMzIyIDUxLjMwNCA1OC41MTQgNDguMDYxIDU4LjUxNEM0My4xNDMgNTguNTEyIDM4LjA2NyA2MC4zNzUgMzQuNTA3IDY0LjMyQzE5LjQxNSA4MS40IDguMTAyIDEwMS4wNzYgMC44ODQgMTIyLjc4N0MtMS43NzMgMTMwLjgyNiAxLjcyNyAxMzkuNzczIDkuMTM0IDE0NC4wMjlMMzEuODg0IDE1Ny4xNjhDMjkuODgyIDE3MC41NDkgMjkuOTcyIDE4MS45OSAzMS44ODQgMTk0LjQyNkw5LjE2NSAyMDcuNTY0QzEuNzI3IDIxMS44MTggLTEuNzczIDIyMC43NjYgMC44ODQgMjI4LjgzNkM4LjEwMiAyNTAuNTE2IDE5LjQxNSAyNzAuMTkzIDM0LjUzOCAyODcuMzA1QzM3LjA4MSAyOTAuMTQxIDQyLjIyNyAyOTMuMTY0IDQ4LjE3MSAyOTMuMTY0QzUxLjAxMSAyOTMuMTY0IDU0LjAzMiAyOTIuNDc1IDU3LjAzOCAyOTAuNzQ2TDgwLjA2NyAyNzcuNDUxQzg5Ljg0OCAyODUuMTc4IDEwMC41MzYgMjkxLjM3MSAxMTIuMDM0IDI5NS45NzFWMzIyLjQ5OEMxMTIuMDM0IDMzMS4wMzkgMTE4LjAwMyAzMzguNDg0IDEyNi4yNTMgMzQwLjIzNkMxMzguOTQ0IDM0Mi44ODEgMTUwLjQxNyAzNDMuNzkzIDE2MC4yOTYgMzQzLjc5M0MxNzUuOTU0IDM0My43OTMgMTg3LjYwOCAzNDEuNTA0IDE5My43OCAzNDAuMjA1QzIwMS45NjggMzM4LjQ4NCAyMDcuOTM2IDMzMS4wMzkgMjA3LjkzNiAzMjIuNDk4VjI5NS45NzFDMjE5LjQzNCAyOTEuMzcxIDIzMC4xNTMgMjg1LjE3OCAyMzkuOTM0IDI3Ny40NTFMMjYyLjkwMSAyOTAuNzE1QzI2NS41ODMgMjkyLjI2OCAyNjguNzcyIDI5My4wOCAyNzIuMDE0IDI5My4wOEMyNzYuOTA5IDI5My4wOCAyODEuOTIzIDI5MS4yMjcgMjg1LjQ5NSAyODcuMjczQzMwMC41ODcgMjcwLjE5MyAzMTEuODk5IDI1MC41MTYgMzE5LjExOCAyMjguODA1QzMyMS43NzQgMjIwLjc2NiAzMTguMjc0IDIxMS44MTggMzEwLjgzNyAyMDcuNTY0Wk0yNzAuOTAzIDI3Ni44NTlMMjM4LjUzNCAyNTguMTY2QzIxOC4xOSAyNzQuMjQgMjE1Ljk0OCAyNzUuNTMxIDE5MS45MzYgMjg1LjEzOVYzMjIuNDk4QzE5MS45MzYgMzI5LjM5MSAxMjguMDM0IDMyOS4zNjMgMTI4LjAzNCAzMjIuNDk4VjI4NS4xMzlDMTA0LjI2NiAyNzUuNjI5IDEwMS45NDYgMjc0LjM0NiA4MS40NjggMjU4LjE2OEw0OC4xNzEgMjc3LjE2NEM0MS42MjggMjc3LjE2NCAxMS4zNjIgMjI0Ljc0NiAxNy4xNzUgMjIxLjQxNEw0OS4zNiAyMDIuODAzQzQ1LjQ1IDE3Ny4zNzUgNDUuMjk4IDE3NS42NDYgNDkuMzE5IDE0OC43NjJMMTcuMTA2IDEzMC4xNTZDMTEuNzAyIDEyNy4wNTcgNDEuMDQgNzMuNzY4IDQ5LjA3OSA3NC43MjNMODEuNjkgOTMuNjE3QzEwMS45MDUgNzcuNjkzIDEwNC4wNTUgNzYuNDI4IDEyOC4wMzQgNjYuODI2VjI5LjEyNUMxMjguMDM0IDIyLjI0OCAxOTEuOTM2IDIyLjEwNyAxOTEuOTM2IDI5LjEyNVY2Ni44MzhDMjE1Ljg0OCA3Ni4zODcgMjE4LjAxNCA3Ny42MjcgMjM4LjMwOSA5My42MTdMMjcxLjg4IDc0LjUzNUMyNzguMTk4IDc0LjUzNSAzMDguODEzIDEyNi43NCAzMDIuODI3IDEzMC4xOEwyNzAuNjg0IDE0OC43NjhDMjc0LjcgMTc1LjYwNCAyNzQuNTU1IDE3Ny4zNTUgMjcwLjY0NSAyMDIuODAzTDMwMi44OTMgMjIxLjQ1M0MzMDguMjk0IDIyNC41NDMgMjc4LjkxOSAyNzcuOTIgMjcwLjkwMyAyNzYuODU5Wk00NjMuNzk0IDMwNEM0MzcuMzI1IDMwNCA0MTUuNzk0IDMyNS41MzEgNDE1Ljc5NCAzNTJTNDM3LjMyNSA0MDAgNDYzLjc5NCA0MDBTNTExLjc5NCAzNzguNDY5IDUxMS43OTQgMzUyUzQ5MC4yNjMgMzA0IDQ2My43OTQgMzA0Wk00NjMuNzk0IDM4NEM0NDYuMTM4IDM4NCA0MzEuNzk0IDM2OS42NTYgNDMxLjc5NCAzNTJTNDQ2LjEzOCAzMjAgNDYzLjc5NCAzMjBTNDk1Ljc5NCAzMzQuMzQ0IDQ5NS43OTQgMzUyUzQ4MS40NSAzODQgNDYzLjc5NCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M160.001 128C133.532 128 112.001 149.531 112.001 176S133.532 224 160.001 224S208.001 202.469 208.001 176S186.47 128 160.001 128ZM160.001 208C142.345 208 128.001 193.656 128.001 176S142.345 144 160.001 144S192.001 158.344 192.001 176S177.657 208 160.001 208ZM628.405 318.221C626.684 310.002 619.208 304.033 610.669 304.033H583.796C579.229 292.629 573.097 282.004 565.464 272.316L578.915 249.1C580.472 246.477 581.28 243.303 581.28 240.061C581.282 235.143 579.419 230.066 575.473 226.506C558.393 211.414 538.718 200.102 517.007 192.883C508.968 190.227 500.02 193.727 495.764 201.133L482.626 223.883C469.245 221.881 457.804 221.971 445.368 223.883L432.229 201.164C427.975 193.727 419.028 190.227 410.958 192.883C389.278 200.102 369.6 211.414 352.489 226.537C349.653 229.08 346.63 234.227 346.63 240.17C346.63 243.01 347.319 246.031 349.048 249.037L362.343 272.066C354.616 281.848 348.423 292.535 343.823 304.033H317.296C308.755 304.033 301.309 310.002 299.557 318.252C296.913 330.943 296.001 342.416 296.001 352.295C296.001 367.953 298.29 379.607 299.589 385.779C301.309 393.967 308.755 399.936 317.296 399.936H343.823C348.423 411.434 354.616 422.152 362.343 431.934L349.079 454.9C347.526 457.582 346.714 460.771 346.714 464.014C346.714 468.908 348.567 473.922 352.52 477.494C369.6 492.586 389.278 503.898 410.989 511.117C419.028 513.773 427.975 510.273 432.229 502.836L445.368 480.119C457.79 482.027 469.231 482.123 482.626 480.119L495.764 502.836C500.02 510.273 508.968 513.773 517.038 511.117C538.718 503.898 558.393 492.586 575.507 477.463C579.079 474.227 581.259 469.135 581.259 463.879C581.259 460.855 580.538 457.777 578.946 454.963L565.464 431.684C573.097 421.996 579.229 411.371 583.796 399.936H610.669C619.208 399.936 626.684 393.967 628.436 385.748C631.087 373.031 632.001 361.551 632.001 351.68C632.001 336.004 629.7 324.373 628.405 318.221ZM610.669 383.936H572.956C563.407 407.848 562.167 410.014 546.177 430.309L565.259 463.879C565.259 470.197 513.054 500.812 509.614 494.826L491.026 462.684C464.19 466.699 462.438 466.555 436.991 462.645L418.341 494.893C415.251 500.293 361.874 470.918 362.934 462.902L381.628 430.533C365.554 410.189 364.263 407.947 354.655 383.936H317.296C310.403 383.936 310.43 320.033 317.296 320.033H354.655C364.165 296.266 365.448 293.945 381.626 273.467L362.63 240.17C362.63 233.627 415.048 203.361 418.38 209.174L436.991 241.359C462.419 237.449 464.147 237.297 491.032 241.318L509.638 209.105C512.737 203.701 566.026 233.039 565.071 241.078L546.177 273.689C562.1 293.904 563.366 296.055 572.968 320.033H610.669C617.546 320.033 617.686 383.936 610.669 383.936ZM310.837 207.564L288.12 194.426C290.028 182.004 290.124 170.563 288.12 157.168L310.837 144.029C318.274 139.773 321.774 130.826 319.118 122.756C311.899 101.076 300.587 81.4 285.464 64.287C282.227 60.715 277.136 58.535 271.88 58.535C268.856 58.535 265.778 59.256 262.964 60.848L239.684 74.33C229.997 66.697 219.372 60.564 207.936 55.998V29.125C207.936 20.586 201.968 13.109 193.749 11.357C181.032 8.707 169.552 7.793 159.68 7.793C144.005 7.793 132.374 10.094 126.222 11.389C118.003 13.109 112.034 20.586 112.034 29.125V55.998C100.63 60.564 90.005 66.697 80.317 74.33L57.1 60.879C54.477 59.322 51.304 58.514 48.061 58.514C43.143 58.512 38.067 60.375 34.507 64.32C19.415 81.4 8.102 101.076 0.884 122.787C-1.773 130.826 1.727 139.773 9.134 144.029L31.884 157.168C29.882 170.549 29.972 181.99 31.884 194.426L9.165 207.564C1.727 211.818 -1.773 220.766 0.884 228.836C8.102 250.516 19.415 270.193 34.538 287.305C37.081 290.141 42.227 293.164 48.171 293.164C51.011 293.164 54.032 292.475 57.038 290.746L80.067 277.451C89.848 285.178 100.536 291.371 112.034 295.971V322.498C112.034 331.039 118.003 338.484 126.253 340.236C138.944 342.881 150.417 343.793 160.296 343.793C175.954 343.793 187.608 341.504 193.78 340.205C201.968 338.484 207.936 331.039 207.936 322.498V295.971C219.434 291.371 230.153 285.178 239.934 277.451L262.901 290.715C265.583 292.268 268.772 293.08 272.014 293.08C276.909 293.08 281.923 291.227 285.495 287.273C300.587 270.193 311.899 250.516 319.118 228.805C321.774 220.766 318.274 211.818 310.837 207.564ZM270.903 276.859L238.534 258.166C218.19 274.24 215.948 275.531 191.936 285.139V322.498C191.936 329.391 128.034 329.363 128.034 322.498V285.139C104.266 275.629 101.946 274.346 81.468 258.168L48.171 277.164C41.628 277.164 11.362 224.746 17.175 221.414L49.36 202.803C45.45 177.375 45.298 175.646 49.319 148.762L17.106 130.156C11.702 127.057 41.04 73.768 49.079 74.723L81.69 93.617C101.905 77.693 104.055 76.428 128.034 66.826V29.125C128.034 22.248 191.936 22.107 191.936 29.125V66.838C215.848 76.387 218.014 77.627 238.309 93.617L271.88 74.535C278.198 74.535 308.813 126.74 302.827 130.18L270.684 148.768C274.7 175.604 274.555 177.355 270.645 202.803L302.893 221.453C308.294 224.543 278.919 277.92 270.903 276.859ZM463.794 304C437.325 304 415.794 325.531 415.794 352S437.325 400 463.794 400S511.794 378.469 511.794 352S490.263 304 463.794 304ZM463.794 384C446.138 384 431.794 369.656 431.794 352S446.138 320 463.794 320S495.794 334.344 495.794 352S481.45 384 463.794 384Z" />
        </Icon>
    </>
}