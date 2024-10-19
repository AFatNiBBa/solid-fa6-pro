
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `repeat-1` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/repeat-1?s=duotone repeat-1}
 * @preview ![repeat-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4NS40NDQgMjU4LjM0NEM0ODAuOTkxIDI1Ni43NSA0NzYuNDYxIDI1NiA0NzEuOTkzIDI1NkM0NTUuNTcxIDI1NiA0NDAuMTY1IDI2Ni4xODggNDM0LjMyMyAyODIuNTMxQzQxNi4wNzMgMzMzLjY1NiAzNjcuMzQgMzY4IDMxMy4wNzcgMzY4SDE5Mi4wMTRWMzI4QzE5Mi4wMTQgMzE4LjI5NyAxODYuMTY4IDMwOS41NDcgMTc3LjIgMzA1LjgyOEMxNjguMjI5IDMwMi4xMDkgMTU3LjkxNyAzMDQuMTcyIDE1MS4wNCAzMTEuMDMxTDcxLjAzIDM5MS4wMzFDNjEuNjU3IDQwMC40MDIgNjEuNjU3IDQxNS41OTggNzEuMDMgNDI0Ljk2OUwxNTEuMDQgNTA0Ljk2OUMxNTcuOTE3IDUxMS44MjggMTY4LjIyOSA1MTMuODkxIDE3Ny4yIDUxMC4xNzJDMTg2LjE2OCA1MDYuNDUzIDE5Mi4wMTQgNDk3LjcwMyAxOTIuMDE0IDQ4OFY0NDhIMzEzLjA3N0M0MDEuMDU3IDQ0OCA0ODAuMDY5IDM5Mi4zMTIgNTA5LjY2MyAzMDkuNDY5QzUxNy4wODQgMjg4LjY1NiA1MDYuMjU2IDI2NS43NSA0ODUuNDQ0IDI1OC4zNDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ0MC45NzEgODcuMDMxTDM2MC45NjIgNy4wMzFDMzU0LjA4NSAwLjE3MiAzNDMuNzcyIC0xLjg5MSAzMzQuODAzIDEuODI4QzMyNS44MzMgNS41NDcgMzE5Ljk4NyAxNC4yOTcgMzE5Ljk4NyAyNFY2NEgxOTguOTI0QzExMC45NDIgNjQgMzEuOTMgMTE5LjY4OCAyLjMzOSAyMDIuNTMxQy01LjA4MyAyMjMuMzQ0IDUuNzQ1IDI0Ni4yNSAyNi41NTUgMjUzLjY1NkMzMS4wMDggMjU1LjI1IDM1LjU0IDI1NiA0MC4wMDggMjU2QzU2LjQzIDI1NiA3MS44MzUgMjQ1LjgxMiA3Ny42NzggMjI5LjQ2OUM5NS45MjggMTc4LjM0NCAxNDQuNjYxIDE0NCAxOTguOTI0IDE0NEgzMTkuOTg3VjE4NEMzMTkuOTg3IDE5My43MDMgMzI1LjgzMyAyMDIuNDUzIDMzNC44MDMgMjA2LjE3MkMzNDMuNzcyIDIwOS44OTEgMzU0LjA4NSAyMDcuODI4IDM2MC45NjIgMjAwLjk2OUw0NDAuOTcxIDEyMC45NjlDNDUwLjM0NCAxMTEuNTk4IDQ1MC4zNDQgOTYuNDAyIDQ0MC45NzEgODcuMDMxWk0yNTYuNDA3IDE5My4yMTlMMjMyLjQwNyAyMDEuMjE5QzIxOS44MjkgMjA1LjQzOCAyMTMuMDQ4IDIxOSAyMTcuMjM1IDIzMS41OTRDMjIwLjU3OSAyNDEuNjU2IDIyOS45NTQgMjQ4IDI0MC4wMDEgMjQ4VjI5NkMyNDAuMDAxIDMwOS4yNSAyNTAuNzUxIDMyMCAyNjQuMDAxIDMyMFMyODguMDAxIDMwOS4yNSAyODguMDAxIDI5NlYyMTZDMjg4LjAwMSAyMDguMjgxIDI4NC4yOTggMjAxLjAzMSAyNzguMDMyIDE5Ni41MzFDMjcxLjc1MSAxOTIgMjYzLjcxOSAxOTAuODEyIDI1Ni40MDcgMTkzLjIxOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Repeat_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M485.444 258.344C480.991 256.75 476.461 256 471.993 256C455.571 256 440.165 266.188 434.323 282.531C416.073 333.656 367.34 368 313.077 368H192.014V328C192.014 318.297 186.168 309.547 177.2 305.828C168.229 302.109 157.917 304.172 151.04 311.031L71.03 391.031C61.657 400.402 61.657 415.598 71.03 424.969L151.04 504.969C157.917 511.828 168.229 513.891 177.2 510.172C186.168 506.453 192.014 497.703 192.014 488V448H313.077C401.057 448 480.069 392.312 509.663 309.469C517.084 288.656 506.256 265.75 485.444 258.344Z" />
            <path d="M440.971 87.031L360.962 7.031C354.085 0.172 343.772 -1.891 334.803 1.828C325.833 5.547 319.987 14.297 319.987 24V64H198.924C110.942 64 31.93 119.688 2.339 202.531C-5.083 223.344 5.745 246.25 26.555 253.656C31.008 255.25 35.54 256 40.008 256C56.43 256 71.835 245.812 77.678 229.469C95.928 178.344 144.661 144 198.924 144H319.987V184C319.987 193.703 325.833 202.453 334.803 206.172C343.772 209.891 354.085 207.828 360.962 200.969L440.971 120.969C450.344 111.598 450.344 96.402 440.971 87.031ZM256.407 193.219L232.407 201.219C219.829 205.438 213.048 219 217.235 231.594C220.579 241.656 229.954 248 240.001 248V296C240.001 309.25 250.751 320 264.001 320S288.001 309.25 288.001 296V216C288.001 208.281 284.298 201.031 278.032 196.531C271.751 192 263.719 190.812 256.407 193.219Z" />
        </Icon>
    </>
}