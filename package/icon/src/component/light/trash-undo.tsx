
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-undo` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=light trash-undo}
 * @preview ![trash-undo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuNzc1IDEyOEMzOTIuNDkgMTI4IDM4NS41NzYgMTM0LjMyNCAzODQuODQgMTQyLjU3NkwzNTYgNDY1LjM3NUMzNTUuMzc1IDQ3My42MjUgMzQ4LjM3NSA0ODAgMzQwLjEyNSA0ODBIMTA3Ljg3NUM5OS42MjUgNDgwIDkyLjYyNSA0NzMuNjI1IDkyIDQ2NS4zNzVMNjMuMTYyIDE0Mi41NzZDNjIuNDI2IDEzNC4zMjQgNTUuNTEgMTI4IDQ3LjIyNyAxMjhDMzcuODI4IDEyOCAzMC40NTMgMTM2LjA2MSAzMS4yODkgMTQ1LjQyMkw2MC4xMjUgNDY4LjI1QzYyLjM3NSA0OTMgODMgNTEyIDEwNy44NzUgNTEySDM0MC4xMjVDMzY1IDUxMiAzODUuNjI1IDQ5MyAzODcuODc1IDQ2OC4yNUw0MTYuNzExIDE0NS40MjJDNDE3LjU0OSAxMzYuMDYxIDQxMC4xNzQgMTI4IDQwMC43NzUgMTI4Wk00MzIgNjRIMzM2TDMwMi4zNzUgMTkuMjVDMjkzLjM3NSA3LjEyNSAyNzkuMTI1IDAgMjY0IDBIMTg0QzE2OC44NzUgMCAxNTQuNjI1IDcuMTI1IDE0NS42MjUgMTkuMjVMMTEyIDY0SDE2QzcuMjAxIDY0IDAgNzEuMTk5IDAgODBDMCA4OC43OTkgNy4yMDEgOTYgMTYgOTZINDMyQzQ0MC44MDEgOTYgNDQ4IDg4Ljc5OSA0NDggODBDNDQ4IDcxLjE5OSA0NDAuODAxIDY0IDQzMiA2NFpNMTUyIDY0TDE3MS4yNSAzOC4zNzVDMTc0LjI1IDM0LjM3NSAxNzkgMzIgMTg0IDMySDI2NEMyNjkgMzIgMjczLjc1IDM0LjM3NSAyNzYuNzUgMzguMzc1TDI5NiA2NEgxNTJaTTIxOS4zMTIgMTk2LjY4OEMyMTMuMDYyIDE5MC40MzggMjAyLjkzNyAxOTAuNDM4IDE5Ni42ODggMTk2LjY4OEwxMTYuNjg4IDI3Ni42ODhDMTEwLjQzOCAyODIuOTM4IDExMC40MzggMjkzLjA2MyAxMTYuNjg4IDI5OS4zMTJMMTk2LjY4OCAzNzkuMzEyQzE5OS44MTIgMzgyLjQzOCAyMDMuOTA2IDM4NCAyMDggMzg0UzIxNi4xODggMzgyLjQzOCAyMTkuMzEyIDM3OS4zMTJDMjI1LjU2MiAzNzMuMDYyIDIyNS41NjIgMzYyLjkzNyAyMTkuMzEyIDM1Ni42ODhMMTY2LjYyNSAzMDRIMjQwQzI2Ni40NjkgMzA0IDI4OCAzMjUuNTMxIDI4OCAzNTJWNDAwQzI4OCA0MDguODQ0IDI5NS4xNTYgNDE2IDMwNCA0MTZTMzIwIDQwOC44NDQgMzIwIDQwMFYzNTJDMzIwIDMwNy44OTEgMjg0LjEwOSAyNzIgMjQwIDI3MkgxNjYuNjI1TDIxOS4zMTIgMjE5LjMxMkMyMjUuNTYyIDIxMy4wNjIgMjI1LjU2MiAyMDIuOTM4IDIxOS4zMTIgMTk2LjY4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrashUndo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400.775 128C392.49 128 385.576 134.324 384.84 142.576L356 465.375C355.375 473.625 348.375 480 340.125 480H107.875C99.625 480 92.625 473.625 92 465.375L63.162 142.576C62.426 134.324 55.51 128 47.227 128C37.828 128 30.453 136.061 31.289 145.422L60.125 468.25C62.375 493 83 512 107.875 512H340.125C365 512 385.625 493 387.875 468.25L416.711 145.422C417.549 136.061 410.174 128 400.775 128ZM432 64H336L302.375 19.25C293.375 7.125 279.125 0 264 0H184C168.875 0 154.625 7.125 145.625 19.25L112 64H16C7.201 64 0 71.199 0 80C0 88.799 7.201 96 16 96H432C440.801 96 448 88.799 448 80C448 71.199 440.801 64 432 64ZM152 64L171.25 38.375C174.25 34.375 179 32 184 32H264C269 32 273.75 34.375 276.75 38.375L296 64H152ZM219.312 196.688C213.062 190.438 202.937 190.438 196.688 196.688L116.688 276.688C110.438 282.938 110.438 293.063 116.688 299.312L196.688 379.312C199.812 382.438 203.906 384 208 384S216.188 382.438 219.312 379.312C225.562 373.062 225.562 362.937 219.312 356.688L166.625 304H240C266.469 304 288 325.531 288 352V400C288 408.844 295.156 416 304 416S320 408.844 320 400V352C320 307.891 284.109 272 240 272H166.625L219.312 219.312C225.562 213.062 225.562 202.938 219.312 196.688Z" />
        </Icon>
    </>
}