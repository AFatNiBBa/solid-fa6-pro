
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wifi` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=regular wifi}
 * @preview ![wifi](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzY4QzI4OS4wNzIgMzY4IDI2NCAzOTMuMDcgMjY0IDQyNFMyODkuMDcyIDQ4MCAzMjAgNDgwUzM3NiA0NTQuOTMgMzc2IDQyNFMzNTAuOTI3IDM2OCAzMjAgMzY4Wk02MzIuNTI3IDE1MC42MjVDNTUzLjI3OSA3NS4yMTkgNDM5LjM3MyAzMiAzMjAgMzJTODYuNzIgNzUuMjE5IDcuNDcyIDE1MC42MjVDLTIuMTUzIDE1OS43NSAtMi41MjggMTc0LjkzNyA2LjYyOSAxODQuNTMxQzE1LjY5MSAxOTQuMTI1IDMwLjk0MSAxOTQuNTMxIDQwLjUzNSAxODUuMzc1QzExMC45NyAxMTguNDA2IDIxMi44MTQgODAgMzIwIDgwUzUyOS4wMjkgMTE4LjQwNiA1OTkuNDY0IDE4NS4zNzVDNjA0LjA4OSAxODkuODEyIDYxMC4wNTggMTkyIDYxNS45OTYgMTkyQzYyMi4zMzkgMTkyIDYyOC42ODMgMTg5LjUgNjMzLjM3MSAxODQuNTMxQzY0Mi41MjcgMTc0LjkzOCA2NDIuMTUyIDE1OS43NSA2MzIuNTI3IDE1MC42MjVaTTMyMCAyMDhDMjQzLjM3NSAyMDggMTcyLjEyNyAyMzUuOTM4IDExOS4zNzcgMjg2LjY4OEMxMDkuODE0IDI5NS45MDYgMTA5LjUwMiAzMTEuMDk0IDExOC42ODkgMzIwLjYyNUMxMjcuOTA4IDMzMC4yNSAxNDMuMDk1IDMzMC40NjkgMTUyLjYyNyAzMjEuMzEyQzE5Ni40MDggMjc5LjE4OCAyNTUuODQzIDI1NiAzMjAgMjU2UzQ0My41OTEgMjc5LjE4OCA0ODcuMzczIDMyMS4zMTJDNDkyLjAyOSAzMjUuNzgxIDQ5Ny45OTggMzI4IDUwMy45OTggMzI4QzUxMC4yNzkgMzI4IDUxNi41OTEgMzI1LjUzMSA1MjEuMzEgMzIwLjYyNUM1MzAuNDk4IDMxMS4wOTQgNTMwLjE4NSAyOTUuOTA2IDUyMC42MjMgMjg2LjY4N0M0NjcuODczIDIzNS45MzggMzk2LjYyNSAyMDggMzIwIDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Wifi(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320 368C289.072 368 264 393.07 264 424S289.072 480 320 480S376 454.93 376 424S350.927 368 320 368ZM632.527 150.625C553.279 75.219 439.373 32 320 32S86.72 75.219 7.472 150.625C-2.153 159.75 -2.528 174.937 6.629 184.531C15.691 194.125 30.941 194.531 40.535 185.375C110.97 118.406 212.814 80 320 80S529.029 118.406 599.464 185.375C604.089 189.812 610.058 192 615.996 192C622.339 192 628.683 189.5 633.371 184.531C642.527 174.938 642.152 159.75 632.527 150.625ZM320 208C243.375 208 172.127 235.938 119.377 286.688C109.814 295.906 109.502 311.094 118.689 320.625C127.908 330.25 143.095 330.469 152.627 321.312C196.408 279.188 255.843 256 320 256S443.591 279.188 487.373 321.312C492.029 325.781 497.998 328 503.998 328C510.279 328 516.591 325.531 521.31 320.625C530.498 311.094 530.185 295.906 520.623 286.687C467.873 235.938 396.625 208 320 208Z" />
        </Icon>
    </>
}