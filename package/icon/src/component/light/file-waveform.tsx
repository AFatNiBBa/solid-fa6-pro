
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-waveform` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=light file-waveform}
 * @preview ![file-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzkuMTg4IDM3Ny41OTRDMTgyLjI1IDM4MS42NTYgMTg3IDM4NCAxOTIgMzg0QzE5Mi40NjkgMzg0IDE5Mi45NjkgMzgzLjk4NCAxOTMuNDM4IDM4My45MzhDMTk4Ljk2OSAzODMuNDM4IDIwMy44NDQgMzgwLjEwOSAyMDYuMzEzIDM3NS4xNTZMMjU2IDI3NS43ODFMMjczLjY4OCAzMTEuMTU2QzI3Ni40MDYgMzE2LjU3OCAyODEuOTM4IDMyMCAyODggMzIwSDM1MkMzNjAuODQ0IDMyMCAzNjggMzEyLjg0NCAzNjggMzA0UzM2MC44NDQgMjg4IDM1MiAyODhIMjk3Ljg3NUwyNzAuMzEzIDIzMi44NDRDMjY0Ljg3NSAyMjIuMDAxIDI0Ny4xMjUgMjIyLjAwMSAyNDEuNjg4IDIzMi44NDRMMTg5LjI4MSAzMzcuNjg4TDE1Ni44MTIgMjk0LjQwNkMxNTMuNzgxIDI5MC4zNzUgMTQ5LjAzMSAyODggMTQ0IDI4OEgxNkM3LjE1NiAyODggMCAyOTUuMTU2IDAgMzA0UzcuMTU2IDMyMCAxNiAzMjBIMTM2TDE3OS4xODggMzc3LjU5NFpNNDI5LjI1NiAxMjUuMjU0TDMyMi43NDYgMTguNzQ2QzMxMC43NDQgNi43NDIgMjk0LjQ2MyAwIDI3Ny40ODggMEgxMjhDOTIuNjU0IDAgNjQgMjguNjU0IDY0IDY0VjIyNEM2NCAyMzIuODM2IDcxLjE2NCAyNDAgODAgMjQwQzg4LjgzOCAyNDAgOTYgMjMyLjgzNiA5NiAyMjRWNjRDOTYgNDYuMzI2IDExMC4zMjggMzIgMTI4IDMySDI1NlYxNDRDMjU2IDE3MC41MSAyNzcuNDkgMTkyIDMwNCAxOTJINDE2VjQ0OEM0MTYgNDY1LjY3NCA0MDEuNjc0IDQ4MCAzODQgNDgwSDEyOEMxMTAuMzI4IDQ4MCA5NiA0NjUuNjc0IDk2IDQ0OFYzODRDOTYgMzc1LjE2NCA4OC44MzggMzY4IDgwIDM2OEM3MS4xNjQgMzY4IDY0IDM3NS4xNjQgNjQgMzg0VjQ0OEM2NCA0ODMuMzQ2IDkyLjY1NCA1MTIgMTI4IDUxMkgzODRDNDE5LjM0OCA1MTIgNDQ4IDQ4My4zNDYgNDQ4IDQ0OFYxNzAuNTA2QzQ0OCAxNTMuNTMzIDQ0MS4yNTggMTM3LjI1NiA0MjkuMjU2IDEyNS4yNTRaTTMwNCAxNjBDMjk1LjE4OCAxNjAgMjg4IDE1Mi44MjggMjg4IDE0NFYzNC4wNzZDMjkyLjQ3NyAzNS42NDMgMjk2LjY2NiAzNy45MjIgMzAwLjExOSA0MS4zNzVMNDA2LjYyNyAxNDcuODc5QzQxMC4wOCAxNTEuMzMyIDQxMi4zNTcgMTU1LjUyMyA0MTMuOTI0IDE2MEgzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileWaveform(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M179.188 377.594C182.25 381.656 187 384 192 384C192.469 384 192.969 383.984 193.438 383.938C198.969 383.438 203.844 380.109 206.313 375.156L256 275.781L273.688 311.156C276.406 316.578 281.938 320 288 320H352C360.844 320 368 312.844 368 304S360.844 288 352 288H297.875L270.313 232.844C264.875 222.001 247.125 222.001 241.688 232.844L189.281 337.688L156.812 294.406C153.781 290.375 149.031 288 144 288H16C7.156 288 0 295.156 0 304S7.156 320 16 320H136L179.188 377.594ZM429.256 125.254L322.746 18.746C310.744 6.742 294.463 0 277.488 0H128C92.654 0 64 28.654 64 64V224C64 232.836 71.164 240 80 240C88.838 240 96 232.836 96 224V64C96 46.326 110.328 32 128 32H256V144C256 170.51 277.49 192 304 192H416V448C416 465.674 401.674 480 384 480H128C110.328 480 96 465.674 96 448V384C96 375.164 88.838 368 80 368C71.164 368 64 375.164 64 384V448C64 483.346 92.654 512 128 512H384C419.348 512 448 483.346 448 448V170.506C448 153.533 441.258 137.256 429.256 125.254ZM304 160C295.188 160 288 152.828 288 144V34.076C292.477 35.643 296.666 37.922 300.119 41.375L406.627 147.879C410.08 151.332 412.357 155.523 413.924 160H304Z" />
        </Icon>
    </>
}