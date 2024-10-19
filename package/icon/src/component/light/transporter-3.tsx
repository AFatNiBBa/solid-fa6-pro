
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transporter-3` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-3?s=light transporter-3}
 * @preview ![transporter-3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMjI0SDM2OEMzNzYuODQ0IDIyNCAzODQgMjE2Ljg0NCAzODQgMjA4UzM3Ni44NDQgMTkyIDM2OCAxOTJIMTQ0QzEzNS4xNTYgMTkyIDEyOCAxOTkuMTU2IDEyOCAyMDhTMTM1LjE1NiAyMjQgMTQ0IDIyNFpNMTc2IDE2MEgzMzZDMzQ0Ljg0NCAxNjAgMzUyIDE1Mi44NDQgMzUyIDE0NFMzNDQuODQ0IDEyOCAzMzYgMTI4SDE3NkMxNjcuMTU2IDEyOCAxNjAgMTM1LjE1NiAxNjAgMTQ0UzE2Ny4xNTYgMTYwIDE3NiAxNjBaTTgwIDEyOEg2NFYxMTJDNjQgMTAzLjE1NiA1Ni44NDQgOTYgNDggOTZTMzIgMTAzLjE1NiAzMiAxMTJWMTI4SDE2QzcuMTU2IDEyOCAwIDEzNS4xNTYgMCAxNDRTNy4xNTYgMTYwIDE2IDE2MEgzMlYxNzZDMzIgMTg0Ljg0NCAzOS4xNTYgMTkyIDQ4IDE5MlM2NCAxODQuODQ0IDY0IDE3NlYxNjBIODBDODguODQ0IDE2MCA5NiAxNTIuODQ0IDk2IDE0NFM4OC44NDQgMTI4IDgwIDEyOFpNMjE2IDk1LjEwOUMyMjQuMzQ0IDkyLjE4OCAyMjguNzUgODMuMDYzIDIyNS44MTIgNzQuNzE5QzIyNC42MjUgNzEuMjY2IDIyNCA2Ny42NTYgMjI0IDY0QzIyNCA0Ni4zNTkgMjM4LjM0NCAzMiAyNTYgMzJTMjg4IDQ2LjM1OSAyODggNjRDMjg4IDY3LjY1NiAyODcuMzc1IDcxLjI2NiAyODYuMTg4IDc0LjcxOUMyODMuMjUgODMuMDYyIDI4Ny42NTYgOTIuMTg4IDI5NiA5NS4xMDlDMjk3Ljc1IDk1LjcxOSAyOTkuNTMxIDk2IDMwMS4yODEgOTZDMzA3Ljg3NSA5NiAzMTQuMDYzIDkxLjg3NSAzMTYuMzc1IDg1LjI4MUMzMTguNzgxIDc4LjQyMiAzMjAgNzEuMjY2IDMyMCA2NEMzMjAgMjguNzAzIDI5MS4yODEgMCAyNTYgMFMxOTIgMjguNzAzIDE5MiA2NEMxOTIgNzEuMjY2IDE5My4yMTkgNzguNDIyIDE5NS42MjUgODUuMjgxQzE5OC41NjIgOTMuNjI1IDIwNy42NTYgOTguMDYyIDIxNiA5NS4xMDlaTTQwMCAyNTZIMTEyQzEwMy4xNTYgMjU2IDk2IDI2My4xNTYgOTYgMjcyUzEwMy4xNTYgMjg4IDExMiAyODhINDAwQzQwOC44NDQgMjg4IDQxNiAyODAuODQ0IDQxNiAyNzJTNDA4Ljg0NCAyNTYgNDAwIDI1NlpNMzY4IDQ0OEgxNDRDMTE3LjUzMSA0NDggOTYgNDY5LjUzMSA5NiA0OTZDOTYgNTA0Ljg0NCAxMDMuMTU2IDUxMiAxMTIgNTEyUzEyOCA1MDQuODQ0IDEyOCA0OTZDMTI4IDQ4Ny4xNzIgMTM1LjE3MiA0ODAgMTQ0IDQ4MEgzNjhDMzc2LjgyOCA0ODAgMzg0IDQ4Ny4xNzIgMzg0IDQ5NkMzODQgNTA0Ljg0NCAzOTEuMTU2IDUxMiA0MDAgNTEyUzQxNiA1MDQuODQ0IDQxNiA0OTZDNDE2IDQ2OS41MzEgMzk0LjQ2OSA0NDggMzY4IDQ0OFpNMTc2IDM1MkgzMzZDMzQ0Ljg0NCAzNTIgMzUyIDM0NC44NDQgMzUyIDMzNlMzNDQuODQ0IDMyMCAzMzYgMzIwSDE3NkMxNjcuMTU2IDMyMCAxNjAgMzI3LjE1NiAxNjAgMzM2UzE2Ny4xNTYgMzUyIDE3NiAzNTJaTTQ5NiAzMkg0ODBWMTZDNDgwIDcuMTU2IDQ3Mi44NDQgMCA0NjQgMFM0NDggNy4xNTYgNDQ4IDE2VjMySDQzMkM0MjMuMTU2IDMyIDQxNiAzOS4xNTYgNDE2IDQ4UzQyMy4xNTYgNjQgNDMyIDY0SDQ0OFY4MEM0NDggODguODQ0IDQ1NS4xNTYgOTYgNDY0IDk2UzQ4MCA4OC44NDQgNDgwIDgwVjY0SDQ5NkM1MDQuODQ0IDY0IDUxMiA1Ni44NDQgNTEyIDQ4UzUwNC44NDQgMzIgNDk2IDMyWk0xNzYgNDE2SDMzNkMzNDQuODQ0IDQxNiAzNTIgNDA4Ljg0NCAzNTIgNDAwUzM0NC44NDQgMzg0IDMzNiAzODRIMTc2QzE2Ny4xNTYgMzg0IDE2MCAzOTEuMTU2IDE2MCA0MDBTMTY3LjE1NiA0MTYgMTc2IDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Transporter_3(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144 224H368C376.844 224 384 216.844 384 208S376.844 192 368 192H144C135.156 192 128 199.156 128 208S135.156 224 144 224ZM176 160H336C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144S167.156 160 176 160ZM80 128H64V112C64 103.156 56.844 96 48 96S32 103.156 32 112V128H16C7.156 128 0 135.156 0 144S7.156 160 16 160H32V176C32 184.844 39.156 192 48 192S64 184.844 64 176V160H80C88.844 160 96 152.844 96 144S88.844 128 80 128ZM216 95.109C224.344 92.188 228.75 83.063 225.812 74.719C224.625 71.266 224 67.656 224 64C224 46.359 238.344 32 256 32S288 46.359 288 64C288 67.656 287.375 71.266 286.188 74.719C283.25 83.062 287.656 92.188 296 95.109C297.75 95.719 299.531 96 301.281 96C307.875 96 314.063 91.875 316.375 85.281C318.781 78.422 320 71.266 320 64C320 28.703 291.281 0 256 0S192 28.703 192 64C192 71.266 193.219 78.422 195.625 85.281C198.562 93.625 207.656 98.062 216 95.109ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256ZM368 448H144C117.531 448 96 469.531 96 496C96 504.844 103.156 512 112 512S128 504.844 128 496C128 487.172 135.172 480 144 480H368C376.828 480 384 487.172 384 496C384 504.844 391.156 512 400 512S416 504.844 416 496C416 469.531 394.469 448 368 448ZM176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352ZM496 32H480V16C480 7.156 472.844 0 464 0S448 7.156 448 16V32H432C423.156 32 416 39.156 416 48S423.156 64 432 64H448V80C448 88.844 455.156 96 464 96S480 88.844 480 80V64H496C504.844 64 512 56.844 512 48S504.844 32 496 32ZM176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416Z" />
        </Icon>
    </>
}