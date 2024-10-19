
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-prescription` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-prescription?s=thin clipboard-prescription}
 * @preview ![clipboard-prescription](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgOTZDMjAwLjgzNiA5NiAyMDggODguODM2IDIwOCA4MEMyMDggNzEuMTYyIDIwMC44MzYgNjQgMTkyIDY0UzE3NiA3MS4xNjIgMTc2IDgwQzE3NiA4OC44MzYgMTgzLjE2NCA5NiAxOTIgOTZaTTk2IDE2MEgyODhDMzA1LjY3MyAxNjAgMzIwIDE0NS42NzMgMzIwIDEyOFYxMTMuNjEzQzMyMCA4Ni4yMTMgMjk3Ljc4NyA2NCAyNzAuMzg3IDY0SDI3MC4zODdDMjYyLjk3MyAyNy40ODQgMjMwLjcwMyAwIDE5MiAwUzEyMS4wMjcgMjcuNDg0IDExMy42MTMgNjRIMTEzLjYxM0M4Ni4yMTMgNjQgNjQgODYuMjEzIDY0IDExMy42MTNWMTI4QzY0IDE0NS42NzMgNzguMzI3IDE2MCA5NiAxNjBaTTgwIDExMy42MTNDODAgOTUuMDQ5IDk1LjA0OSA4MCAxMTMuNjEzIDgwSDEyNi42OTFMMTI4LjUzNyA3MC45MDZDMTMzLjUyMyA0Ni4zNDMgMTUwLjgwOSAyNC43MzMgMTc1LjAyMSAxOC4yNTZDMjExLjk1MiA4LjM3NiAyNDcuNTc5IDMyLjA4NSAyNTQuNzA3IDY3LjE4NEwyNTcuMzA5IDgwSDI3MC4zODdDMjg4Ljk1MSA4MCAzMDQgOTUuMDQ5IDMwNCAxMTMuNjEzVjEyOEMzMDQgMTM2LjgzNyAyOTYuODM3IDE0NCAyODggMTQ0SDk2Qzg3LjE2MyAxNDQgODAgMTM2LjgzNyA4MCAxMjhWMTEzLjYxM1pNMzU1LjE4OCAxMDBDMzUxLjA5NCA5OC4yODEgMzQ2LjQzOCAxMDAuMDYyIDM0NC42NTYgMTA0LjE1NkMzNDIuOTA2IDEwOC4xODggMzQ0Ljc1IDExMi45MDYgMzQ4LjgxMiAxMTQuNjg4QzM2MC40NjkgMTE5Ljc1IDM2OCAxMzEuMjgxIDM2OCAxNDRWNDY0QzM2OCA0ODEuNjU2IDM1My42NTYgNDk2IDMzNiA0OTZINDhDMzAuMzQ0IDQ5NiAxNiA0ODEuNjU2IDE2IDQ2NFYxNDRDMTYgMTMxLjMxMiAyMy41MzEgMTE5LjgxMiAzNS4yMTkgMTE0LjY4OEMzOS4yNSAxMTIuOTM4IDQxLjA5NCAxMDguMjE5IDM5LjMxMiAxMDQuMTU2QzM3LjU2MiAxMDAuMTI1IDMyLjkzOCA5OC4yMTkgMjguNzgxIDEwMC4wNjJDMTEuMzEyIDEwNy43MTkgMCAxMjQuOTY5IDAgMTQ0VjQ2NEMwIDQ5MC40NjkgMjEuNTMxIDUxMiA0OCA1MTJIMzM2QzM2Mi40NjkgNTEyIDM4NCA0OTAuNDY5IDM4NCA0NjRWMTQ0QzM4NCAxMjQuOTA2IDM3Mi42ODggMTA3LjYyNSAzNTUuMTg4IDEwMFpNMjkzLjY1NiAzMTQuMzQ0QzI5MC41MzEgMzExLjIxOSAyODUuNDY5IDMxMS4yMTkgMjgyLjM0NCAzMTQuMzQ0TDI0MCAzNTYuNjg4TDE4Ni4xNzYgMzAyLjg2M0MyMDcuNzYyIDI5OC4xNzYgMjI0IDI3OC45NzEgMjI0IDI1NkMyMjQgMjI5LjUzMSAyMDIuNDY5IDIwOCAxNzYgMjA4SDEwNEM5OS41OTQgMjA4IDk2IDIxMS41NzggOTYgMjE2VjM3NkM5NiAzODAuNDIyIDk5LjU5NCAzODQgMTA0IDM4NFMxMTIgMzgwLjQyMiAxMTIgMzc2VjMwNEgxNjQuNjg4TDIyOC42ODggMzY4TDE4Ni4zNDQgNDEwLjM0NEMxODMuMjE5IDQxMy40NjkgMTgzLjIxOSA0MTguNTMxIDE4Ni4zNDQgNDIxLjY1NkMxODcuOTA2IDQyMy4yMTkgMTg5LjkzOCA0MjQgMTkyIDQyNFMxOTYuMDk0IDQyMy4yMTkgMTk3LjY1NiA0MjEuNjU2TDI0MCAzNzkuMzEyTDI4Mi4zNDQgNDIxLjY1NkMyODMuOTA2IDQyMy4yMTkgMjg1LjkzOCA0MjQgMjg4IDQyNFMyOTIuMDk0IDQyMy4yMTkgMjkzLjY1NiA0MjEuNjU2QzI5Ni43ODEgNDE4LjUzMSAyOTYuNzgxIDQxMy40NjkgMjkzLjY1NiA0MTAuMzQ0TDI1MS4zMTIgMzY4TDI5My42NTYgMzI1LjY1NkMyOTYuNzgxIDMyMi41MzEgMjk2Ljc4MSAzMTcuNDY5IDI5My42NTYgMzE0LjM0NFpNMTEyIDI4OFYyMjRIMTc2QzE5My42NTYgMjI0IDIwOCAyMzguMzU5IDIwOCAyNTZTMTkzLjY1NiAyODggMTc2IDI4OEgxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ClipboardPrescription(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 96C200.836 96 208 88.836 208 80C208 71.162 200.836 64 192 64S176 71.162 176 80C176 88.836 183.164 96 192 96ZM96 160H288C305.673 160 320 145.673 320 128V113.613C320 86.213 297.787 64 270.387 64H270.387C262.973 27.484 230.703 0 192 0S121.027 27.484 113.613 64H113.613C86.213 64 64 86.213 64 113.613V128C64 145.673 78.327 160 96 160ZM80 113.613C80 95.049 95.049 80 113.613 80H126.691L128.537 70.906C133.523 46.343 150.809 24.733 175.021 18.256C211.952 8.376 247.579 32.085 254.707 67.184L257.309 80H270.387C288.951 80 304 95.049 304 113.613V128C304 136.837 296.837 144 288 144H96C87.163 144 80 136.837 80 128V113.613ZM355.188 100C351.094 98.281 346.438 100.062 344.656 104.156C342.906 108.188 344.75 112.906 348.812 114.688C360.469 119.75 368 131.281 368 144V464C368 481.656 353.656 496 336 496H48C30.344 496 16 481.656 16 464V144C16 131.312 23.531 119.812 35.219 114.688C39.25 112.938 41.094 108.219 39.312 104.156C37.562 100.125 32.938 98.219 28.781 100.062C11.312 107.719 0 124.969 0 144V464C0 490.469 21.531 512 48 512H336C362.469 512 384 490.469 384 464V144C384 124.906 372.688 107.625 355.188 100ZM293.656 314.344C290.531 311.219 285.469 311.219 282.344 314.344L240 356.688L186.176 302.863C207.762 298.176 224 278.971 224 256C224 229.531 202.469 208 176 208H104C99.594 208 96 211.578 96 216V376C96 380.422 99.594 384 104 384S112 380.422 112 376V304H164.688L228.688 368L186.344 410.344C183.219 413.469 183.219 418.531 186.344 421.656C187.906 423.219 189.938 424 192 424S196.094 423.219 197.656 421.656L240 379.312L282.344 421.656C283.906 423.219 285.938 424 288 424S292.094 423.219 293.656 421.656C296.781 418.531 296.781 413.469 293.656 410.344L251.312 368L293.656 325.656C296.781 322.531 296.781 317.469 293.656 314.344ZM112 288V224H176C193.656 224 208 238.359 208 256S193.656 288 176 288H112Z" />
        </Icon>
    </>
}