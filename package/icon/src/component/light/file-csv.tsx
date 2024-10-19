
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-csv` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-csv?s=light file-csv}
 * @preview ![file-csv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDEyNS4yNTRMMjU4Ljc0NiAxOC43NDZDMjQ2Ljc0NCA2Ljc0MiAyMzAuNDY1IDAgMjEzLjQ5IDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4VjE3MC41MUMzODQgMTUzLjUzNSAzNzcuMjU4IDEzNy4yNTggMzY1LjI1NiAxMjUuMjU0Wk0yMjQgMzQuMDc2QzIyOC40NzcgMzUuNjQzIDIzMi42NjYgMzcuOTIyIDIzNi4xMTkgNDEuMzc1TDM0Mi42MjcgMTQ3Ljg3OUMzNDYuMDggMTUxLjMzMiAzNDguMzU3IDE1NS41MjMgMzQ5LjkyNCAxNjBIMjQwQzIzMS4xODggMTYwIDIyNCAxNTIuODI4IDIyNCAxNDRWMzQuMDc2Wk0zNTIgNDQ4QzM1MiA0NjUuNjQ1IDMzNy42NDUgNDgwIDMyMCA0ODBINjRDNDYuMzU1IDQ4MCAzMiA0NjUuNjQ1IDMyIDQ0OFY2NEMzMiA0Ni4zNTUgNDYuMzU1IDMyIDY0IDMySDE5MlYxNDRDMTkyIDE3MC40NjkgMjEzLjUzMSAxOTIgMjQwIDE5MkgzNTJWNDQ4Wk0yMjQuODEyIDI5My4wNjJMMjU2LjgxMiAzODkuMDYyQzI1OSAzOTUuNTk0IDI2NS4xMjUgNDAwIDI3MiA0MDBTMjg1IDM5NS41OTQgMjg3LjE4OCAzODkuMDYyTDMxOS4xODggMjkzLjA2MkMzMjEuOTY5IDI4NC42NzIgMzE3LjQzOCAyNzUuNjA5IDMwOS4wNjMgMjcyLjgyOEMzMDAuNzUgMjcwLjA5NCAyOTEuNjU2IDI3NC41NjIgMjg4LjgxMyAyODIuOTM4TDI3MiAzMzMuNDA2TDI1NS4xODggMjgyLjkzOEMyNTIuMzc1IDI3NC41NDcgMjQzLjM0NCAyNzAuMDc4IDIzNC45MzggMjcyLjgyOEMyMjYuNTYyIDI3NS42MDkgMjIyLjAzMSAyODQuNjcyIDIyNC44MTIgMjkzLjA2MlpNMTgyLjYyNSAzMDRIMTkyQzIwMC44NDQgMzA0IDIwOCAyOTYuODQ0IDIwOCAyODhTMjAwLjg0NCAyNzIgMTkyIDI3MkgxODIuNjI1QzE2MS4zMTIgMjcyIDE0NCAyODkuMzI4IDE0NCAzMTAuNjI1QzE0NCAzMjAuODI4IDE0OC4xMjUgMzMwLjc4MSAxNTUuMzEyIDMzNy45MzdMMTc0LjA5NCAzNTYuNzAzQzE3NS4zMTIgMzU3LjkyMiAxNzYgMzU5LjYyNSAxNzYgMzYxLjM3NUMxNzYgMzY1LjAzMSAxNzMuMDMxIDM2OCAxNjkuMzc1IDM2OEgxNjBDMTUxLjE1NiAzNjggMTQ0IDM3NS4xNTYgMTQ0IDM4NFMxNTEuMTU2IDQwMCAxNjAgNDAwSDE2OS4zNzVDMTkwLjY4OCA0MDAgMjA4IDM4Mi42NzIgMjA4IDM2MS4zNzVDMjA4IDM1MS4xNzIgMjAzLjg3NSAzNDEuMjE5IDE5Ni42ODggMzM0LjA2M0wxNzcuOTA2IDMxNS4yOTdDMTc2LjY4OCAzMTQuMDc4IDE3NiAzMTIuMzc1IDE3NiAzMTAuNjI1QzE3NiAzMDYuOTY5IDE3OC45NjkgMzA0IDE4Mi42MjUgMzA0Wk0xMTIgMzA0QzEyMC44NDQgMzA0IDEyOCAyOTYuODQ0IDEyOCAyODhTMTIwLjg0NCAyNzIgMTEyIDI3MkM4NS41MzEgMjcyIDY0IDI5My41MzEgNjQgMzIwVjM1MkM2NCAzNzguNDY5IDg1LjUzMSA0MDAgMTEyIDQwMEMxMjAuODQ0IDQwMCAxMjggMzkyLjg0NCAxMjggMzg0UzEyMC44NDQgMzY4IDExMiAzNjhDMTAzLjE4OCAzNjggOTYgMzYwLjgyOCA5NiAzNTJWMzIwQzk2IDMxMS4xNzIgMTAzLjE4OCAzMDQgMTEyIDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileCsv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM224.812 293.062L256.812 389.062C259 395.594 265.125 400 272 400S285 395.594 287.188 389.062L319.188 293.062C321.969 284.672 317.438 275.609 309.063 272.828C300.75 270.094 291.656 274.562 288.813 282.938L272 333.406L255.188 282.938C252.375 274.547 243.344 270.078 234.938 272.828C226.562 275.609 222.031 284.672 224.812 293.062ZM182.625 304H192C200.844 304 208 296.844 208 288S200.844 272 192 272H182.625C161.312 272 144 289.328 144 310.625C144 320.828 148.125 330.781 155.312 337.937L174.094 356.703C175.312 357.922 176 359.625 176 361.375C176 365.031 173.031 368 169.375 368H160C151.156 368 144 375.156 144 384S151.156 400 160 400H169.375C190.688 400 208 382.672 208 361.375C208 351.172 203.875 341.219 196.688 334.063L177.906 315.297C176.688 314.078 176 312.375 176 310.625C176 306.969 178.969 304 182.625 304ZM112 304C120.844 304 128 296.844 128 288S120.844 272 112 272C85.531 272 64 293.531 64 320V352C64 378.469 85.531 400 112 400C120.844 400 128 392.844 128 384S120.844 368 112 368C103.188 368 96 360.828 96 352V320C96 311.172 103.188 304 112 304Z" />
        </Icon>
    </>
}