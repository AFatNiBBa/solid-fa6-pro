
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=thin clipboard-check}
 * @preview ![clipboard-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTUuMTg4IDEwMEMzNTEuMDk0IDk4LjI4MSAzNDYuNDM4IDEwMC4wNjIgMzQ0LjY1NiAxMDQuMTU2QzM0Mi45MDYgMTA4LjE4OCAzNDQuNzUgMTEyLjkwNiAzNDguODEyIDExNC42ODhDMzYwLjQ2OSAxMTkuNzUgMzY4IDEzMS4yODEgMzY4IDE0NFY0NjRDMzY4IDQ4MS42NTYgMzUzLjY1NiA0OTYgMzM2IDQ5Nkg0OEMzMC4zNDQgNDk2IDE2IDQ4MS42NTYgMTYgNDY0VjE0NEMxNiAxMzEuMzEyIDIzLjUzMSAxMTkuODEyIDM1LjIxOSAxMTQuNjg4QzM5LjI1IDExMi45MzggNDEuMDk0IDEwOC4yMTkgMzkuMzEyIDEwNC4xNTZDMzcuNTYyIDEwMC4xMjUgMzIuOTM4IDk4LjIxOSAyOC43ODEgMTAwLjA2MkMxMS4zMTIgMTA3LjcxOSAwIDEyNC45NjkgMCAxNDRWNDY0QzAgNDkwLjQ2OSAyMS41MzEgNTEyIDQ4IDUxMkgzMzZDMzYyLjQ2OSA1MTIgMzg0IDQ5MC40NjkgMzg0IDQ2NFYxNDRDMzg0IDEyNC45MDYgMzcyLjY4OCAxMDcuNjI1IDM1NS4xODggMTAwWk0xOTIgOTZDMjAwLjgzNiA5NiAyMDggODguODM2IDIwOCA4MEMyMDggNzEuMTYyIDIwMC44MzYgNjQgMTkyIDY0UzE3NiA3MS4xNjIgMTc2IDgwQzE3NiA4OC44MzYgMTgzLjE2NCA5NiAxOTIgOTZaTTk2IDE2MEgyODhDMzA1LjY3MyAxNjAgMzIwIDE0NS42NzMgMzIwIDEyOFYxMTMuNjEzQzMyMCA4Ni4yMTMgMjk3Ljc4NyA2NCAyNzAuMzg3IDY0SDI3MC4zODdDMjYyLjk3MyAyNy40ODQgMjMwLjcwMyAwIDE5MiAwUzEyMS4wMjcgMjcuNDg0IDExMy42MTMgNjRIMTEzLjYxM0M4Ni4yMTMgNjQgNjQgODYuMjEzIDY0IDExMy42MTNWMTI4QzY0IDE0NS42NzMgNzguMzI3IDE2MCA5NiAxNjBaTTgwIDExMy42MTNDODAgOTUuMDQ5IDk1LjA0OSA4MCAxMTMuNjEzIDgwSDEyNi42OTFMMTI4LjUzNyA3MC45MDZDMTMzLjUyMyA0Ni4zNDMgMTUwLjgwOSAyNC43MzMgMTc1LjAyMSAxOC4yNTZDMjExLjk1MiA4LjM3NiAyNDcuNTc5IDMyLjA4NSAyNTQuNzA3IDY3LjE4NEwyNTcuMzA5IDgwSDI3MC4zODdDMjg4Ljk1MSA4MCAzMDQgOTUuMDQ5IDMwNCAxMTMuNjEzVjEyOEMzMDQgMTM2LjgzNyAyOTYuODM3IDE0NCAyODggMTQ0SDk2Qzg3LjE2MyAxNDQgODAgMTM2LjgzNyA4MCAxMjhWMTEzLjYxM1pNMjgyLjM0NCAyNTAuMzQ0TDE2MCAzNzIuNjg4TDEwMS42NTYgMzE0LjM0NEM5OC41MzEgMzExLjIxOSA5My40NjkgMzExLjIxOSA5MC4zNDQgMzE0LjM0NFM4Ny4yMTkgMzIyLjUzMSA5MC4zNDQgMzI1LjY1NkwxNTQuMzQ0IDM4OS42NTZDMTU1LjkwNiAzOTEuMjE5IDE1Ny45MzggMzkyIDE2MCAzOTJTMTY0LjA5NCAzOTEuMjE5IDE2NS42NTYgMzg5LjY1NkwyOTMuNjU2IDI2MS42NTZDMjk2Ljc4MSAyNTguNTMxIDI5Ni43ODEgMjUzLjQ2OSAyOTMuNjU2IDI1MC4zNDRTMjg1LjQ2OSAyNDcuMjE5IDI4Mi4zNDQgMjUwLjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClipboardCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M355.188 100C351.094 98.281 346.438 100.062 344.656 104.156C342.906 108.188 344.75 112.906 348.812 114.688C360.469 119.75 368 131.281 368 144V464C368 481.656 353.656 496 336 496H48C30.344 496 16 481.656 16 464V144C16 131.312 23.531 119.812 35.219 114.688C39.25 112.938 41.094 108.219 39.312 104.156C37.562 100.125 32.938 98.219 28.781 100.062C11.312 107.719 0 124.969 0 144V464C0 490.469 21.531 512 48 512H336C362.469 512 384 490.469 384 464V144C384 124.906 372.688 107.625 355.188 100ZM192 96C200.836 96 208 88.836 208 80C208 71.162 200.836 64 192 64S176 71.162 176 80C176 88.836 183.164 96 192 96ZM96 160H288C305.673 160 320 145.673 320 128V113.613C320 86.213 297.787 64 270.387 64H270.387C262.973 27.484 230.703 0 192 0S121.027 27.484 113.613 64H113.613C86.213 64 64 86.213 64 113.613V128C64 145.673 78.327 160 96 160ZM80 113.613C80 95.049 95.049 80 113.613 80H126.691L128.537 70.906C133.523 46.343 150.809 24.733 175.021 18.256C211.952 8.376 247.579 32.085 254.707 67.184L257.309 80H270.387C288.951 80 304 95.049 304 113.613V128C304 136.837 296.837 144 288 144H96C87.163 144 80 136.837 80 128V113.613ZM282.344 250.344L160 372.688L101.656 314.344C98.531 311.219 93.469 311.219 90.344 314.344S87.219 322.531 90.344 325.656L154.344 389.656C155.906 391.219 157.938 392 160 392S164.094 391.219 165.656 389.656L293.656 261.656C296.781 258.531 296.781 253.469 293.656 250.344S285.469 247.219 282.344 250.344Z" />
        </Icon>
    </>
}