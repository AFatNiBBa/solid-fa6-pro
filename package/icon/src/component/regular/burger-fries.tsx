
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `burger-fries` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/burger-fries?s=regular burger-fries}
 * @preview ![burger-fries](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05OC41MDIgNDYzLjk5Nkw2NS4yNTIgMzE0LjExM0M5Ny4xMjcgMzM3Ljg2NSAxNDEuNzUyIDM1MS45OSAxOTIgMzUxLjk5QzIwNS4xODQgMzUxLjk5IDIxNy45MDkgMzUwLjkwNiAyMzAuMTkgMzQ5LjA0M0MyMzEuNzg3IDM0NS4yODkgMjMzLjA4NiAzNDEuNDEgMjM1LjMyOCAzMzcuOTUzQzIzMi4wMzIgMzI1LjMyNCAyMzEuNjQzIDMxMi4zMiAyMzMuMTgyIDI5OS41MjlDMjIwLjIxOSAzMDIuMjg5IDIwNi40NjEgMzAzLjk4OCAxOTIgMzAzLjk4OEMxMjcuMzc3IDMwMy45ODggNzMuODc3IDI3My45ODYgNjUuMjUyIDIzNC45ODRDNjMuNzUyIDIyOC4yMzQgNTcuMDA0IDIyMy45ODQgNTAuMDA0IDIyMy45ODRIMTYuMDA0QzExLjEyOSAyMjMuOTg0IDYuNTA0IDIyNi4yMzQgMy41MDQgMjI5Ljk4NFMtMC42MjEgMjM4LjczNCAwLjM3OSAyNDMuNDg0TDU0LjUwNCA0ODYuOTk4QzU3Ljc1NCA1MDEuNjIzIDcwLjc1MiA1MTIgODUuNzUyIDUxMkgyNjguNDVDMjU0LjY0NSA0OTguOTIyIDI0NC4zNzcgNDgyLjQ2MSAyMzguMjk1IDQ2My45OTZIOTguNTAyWk0xMjguMDAyIDI1OC40ODZWMzMuMDk4TDEyNC4yNTIgMTMuMDk4QzEyMy4yNTIgNy41OTggMTE5LjUwMiAzLjA5NiAxMTQuMjUyIDEuMDk2QzEwOS4xMjcgLTAuOTAyIDEwMy4yNTIgLTAuMTUyIDk4Ljg3NyAzLjIyMUw3MC4zNzcgMjQuODQ4QzY1LjUwMiAyOC40NzMgNjMuMTI3IDM0LjU5OCA2NC4yNTIgNDAuNkwxMDEuMTI3IDIzNy43MzRDMTA2LjUwMiAyNDUuMzU5IDExNS42MjcgMjUyLjYwOSAxMjguMDAyIDI1OC40ODZaTTUwLjAwNCAxOTEuOTgyQzUzLjYyOSAxOTEuOTgyIDU3LjAwNCAxOTIuOTgyIDYwLjM3NyAxOTMuNzMyTDQwLjM3OSA4Ni42MDJMMjAuNjI5IDgwLjcyN0MxNS4yNTQgNzkuMTAyIDkuNTA0IDgwLjM1MiA1LjM3OSA4My45NzdDMS4yNTQgODcuNzI3IC0wLjc0NiA5My4yMjcgMC4yNTQgOTguNzI3TDE2LjUwNCAxOTEuOTgySDUwLjAwNFpNMjI0IDI2OC43MzZWMzEuOTczQzIyNCAyNS45NzMgMjIwLjYyNSAyMC4zNDggMjE1LjEyNSAxNy43MjNMMTgzLjEyNSAxLjcyMUMxNzguMjUgLTAuNzc3IDE3Mi4yNSAtMC41MjcgMTY3LjYyNSAyLjM0NkMxNjIuODc1IDUuMjIzIDE2MCAxMC40NzMgMTYwIDE1Ljk3M1YyNjguNzM2QzE4MS4xMjUgMjczLjExMSAyMDIuODc1IDI3My4xMTEgMjI0IDI2OC43MzZaTTM4My43NDYgOTguNzI3QzM4NC43NDYgOTMuMjI3IDM4Mi43NDYgODcuNzI3IDM3OC42MjEgODQuMTAyQzM3NC40OTYgODAuMzUyIDM2OC43NDYgNzkuMTAyIDM2My4zNzEgODAuNzI3TDM0Ni4xMjEgODUuODUyTDMyOC4yMjUgMTg4LjIyNUMzNDEuNzQ0IDE4MS40NTkgMzU2LjA5NiAxNzUuOTEgMzcxLjA2NyAxNzEuNDkyTDM4My43NDYgOTguNzI3Wk0yOTEuODA1IDIxMC43NDJMMzE5Ljc0OCA1MC43MjVDMzIwLjc0OCA0NS4yMjUgMzE4Ljc0OCAzOS43MjUgMzE0LjYyMyAzNi4wOThDMzEwLjQ5OCAzMi4zNDggMzA0Ljc0OCAzMS4wOTggMjk5LjM3MyAzMi43MjNMMjY1LjEyMyA0Mi45NzVDMjYwLjg3MyA0NC4yMjUgMjU3Ljk5OCA0Ny40NzUgMjU1Ljk5OCA1MS4yMjVWMjQ1Ljk0M0MyNjYuMDU5IDIzMi45OCAyNzguMDU1IDIyMS4xNjQgMjkxLjgwNSAyMTAuNzQyWk00NDcuOTk4IDI5NkM0NTYuODczIDI5NiA0NjMuOTk4IDI4OC44NzUgNDYzLjk5OCAyODBTNDU2Ljg3MyAyNjQgNDQ3Ljk5OCAyNjRTNDMxLjk5OCAyNzEuMTI1IDQzMS45OTggMjgwUzQzOS4xMjMgMjk2IDQ0Ny45OTggMjk2Wk01MjggMzEyQzUzNi44NzUgMzEyIDU0NCAzMDQuODc1IDU0NCAyOTZTNTM2Ljg3NSAyODAgNTI4IDI4MFM1MTIgMjg3LjEyNSA1MTIgMjk2UzUxOS4xMjUgMzEyIDUyOCAzMTJaTTM2Ny45OTggMzEyQzM3Ni44NzMgMzEyIDM4My45OTggMzA0Ljg3NSAzODMuOTk4IDI5NlMzNzYuODczIDI4MCAzNjcuOTk4IDI4MFMzNTEuOTk4IDI4Ny4xMjUgMzUxLjk5OCAyOTZTMzU5LjEyMyAzMTIgMzY3Ljk5OCAzMTJaTTY0MCAzNzZDNjQwIDM2My4xMjUgNjMzLjUgMzUyLjEyNSA2MjQgMzQ0Ljc1QzYzNi4yNSAzMjEgNjM0LjI1IDI5Mi4zNzUgNjE4Ljg3NSAyNzAuNUM1ODUuNSAyMjIuODc1IDUxOC4zNzUgMTkyIDQ0Ny45OTggMTkyQzM3Ny42MjMgMTkyIDMxMC42MjMgMjIyLjg3NSAyNzcuMTIzIDI3MC41QzI2MS43NDggMjkyLjM3NSAyNTkuNzQ4IDMyMSAyNzEuOTk4IDM0NC43NUMyNjIuNDk4IDM1Mi4xMjUgMjU1Ljk5OCAzNjMuMTI1IDI1NS45OTggMzc2QzI1NS45OTggMzg3IDI2MC42MjMgMzk3LjUgMjY4LjYyMyA0MDQuODc1QzI2NS42MjMgNDEyLjI1IDI2My45OTggNDIwLjEyNSAyNjMuOTk4IDQyOEMyNjMuOTk4IDQ3NC4zNzUgMzAxLjYyMyA1MTIgMzQ3Ljk5OCA1MTJINTQ4QzU5NC4zNzUgNTEyIDYzMiA0NzQuMzc1IDYzMiA0MjhDNjMyIDQyMC4xMjUgNjMwLjM3NSA0MTIuMjUgNjI3LjM3NSA0MDQuODc1QzYzNS4zNzUgMzk3LjUgNjQwIDM4NyA2NDAgMzc2Wk0zMTYuNDk4IDI5OEMzMzkuMjQ4IDI2NS42MjUgMzg5LjM3MyAyNDAgNDQ3Ljk5OCAyNDBDNTA2LjYyNSAyNDAgNTU2Ljc1IDI2NS42MjUgNTc5LjYyNSAyOThDNTg0Ljc1IDMwNS4zNzUgNTg1LjM3NSAzMTUgNTgxLjI1IDMyM1M1NjguODc1IDMzNiA1NTkuODc1IDMzNkgzMzYuMTIzQzMyNy4xMjMgMzM2IDMxOC44NzMgMzMxIDMxNC43NDggMzIzUzMxMS4yNDggMzA1LjM3NSAzMTYuNDk4IDI5OFpNNTQ4IDQ2NEgzNDcuOTk4QzMyOC4xMjMgNDY0IDMxMS45OTggNDQ3Ljg3NSAzMTEuOTk4IDQyOEMzMTEuOTk4IDQyMS4zNzUgMzE3LjM3MyA0MTYgMzIzLjk5OCA0MTZINTcyQzU3OC42MjUgNDE2IDU4NCA0MjEuMzc1IDU4NCA0MjhDNTg0IDQ0Ny44NzUgNTY3Ljg3NSA0NjQgNTQ4IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BurgerFries(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M98.502 463.996L65.252 314.113C97.127 337.865 141.752 351.99 192 351.99C205.184 351.99 217.909 350.906 230.19 349.043C231.787 345.289 233.086 341.41 235.328 337.953C232.032 325.324 231.643 312.32 233.182 299.529C220.219 302.289 206.461 303.988 192 303.988C127.377 303.988 73.877 273.986 65.252 234.984C63.752 228.234 57.004 223.984 50.004 223.984H16.004C11.129 223.984 6.504 226.234 3.504 229.984S-0.621 238.734 0.379 243.484L54.504 486.998C57.754 501.623 70.752 512 85.752 512H268.45C254.645 498.922 244.377 482.461 238.295 463.996H98.502ZM128.002 258.486V33.098L124.252 13.098C123.252 7.598 119.502 3.096 114.252 1.096C109.127 -0.902 103.252 -0.152 98.877 3.221L70.377 24.848C65.502 28.473 63.127 34.598 64.252 40.6L101.127 237.734C106.502 245.359 115.627 252.609 128.002 258.486ZM50.004 191.982C53.629 191.982 57.004 192.982 60.377 193.732L40.379 86.602L20.629 80.727C15.254 79.102 9.504 80.352 5.379 83.977C1.254 87.727 -0.746 93.227 0.254 98.727L16.504 191.982H50.004ZM224 268.736V31.973C224 25.973 220.625 20.348 215.125 17.723L183.125 1.721C178.25 -0.777 172.25 -0.527 167.625 2.346C162.875 5.223 160 10.473 160 15.973V268.736C181.125 273.111 202.875 273.111 224 268.736ZM383.746 98.727C384.746 93.227 382.746 87.727 378.621 84.102C374.496 80.352 368.746 79.102 363.371 80.727L346.121 85.852L328.225 188.225C341.744 181.459 356.096 175.91 371.067 171.492L383.746 98.727ZM291.805 210.742L319.748 50.725C320.748 45.225 318.748 39.725 314.623 36.098C310.498 32.348 304.748 31.098 299.373 32.723L265.123 42.975C260.873 44.225 257.998 47.475 255.998 51.225V245.943C266.059 232.98 278.055 221.164 291.805 210.742ZM447.998 296C456.873 296 463.998 288.875 463.998 280S456.873 264 447.998 264S431.998 271.125 431.998 280S439.123 296 447.998 296ZM528 312C536.875 312 544 304.875 544 296S536.875 280 528 280S512 287.125 512 296S519.125 312 528 312ZM367.998 312C376.873 312 383.998 304.875 383.998 296S376.873 280 367.998 280S351.998 287.125 351.998 296S359.123 312 367.998 312ZM640 376C640 363.125 633.5 352.125 624 344.75C636.25 321 634.25 292.375 618.875 270.5C585.5 222.875 518.375 192 447.998 192C377.623 192 310.623 222.875 277.123 270.5C261.748 292.375 259.748 321 271.998 344.75C262.498 352.125 255.998 363.125 255.998 376C255.998 387 260.623 397.5 268.623 404.875C265.623 412.25 263.998 420.125 263.998 428C263.998 474.375 301.623 512 347.998 512H548C594.375 512 632 474.375 632 428C632 420.125 630.375 412.25 627.375 404.875C635.375 397.5 640 387 640 376ZM316.498 298C339.248 265.625 389.373 240 447.998 240C506.625 240 556.75 265.625 579.625 298C584.75 305.375 585.375 315 581.25 323S568.875 336 559.875 336H336.123C327.123 336 318.873 331 314.748 323S311.248 305.375 316.498 298ZM548 464H347.998C328.123 464 311.998 447.875 311.998 428C311.998 421.375 317.373 416 323.998 416H572C578.625 416 584 421.375 584 428C584 447.875 567.875 464 548 464Z" />
        </Icon>
    </>
}