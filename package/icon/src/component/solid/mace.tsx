
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mace` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=solid mace}
 * @preview ![mace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDAuMTIzIDIxMC4wMDRMNDE5LjM2OSAxODQuNDNDNDA1Ljc3NSAxMzkuNDggMzcwLjI0NCAxMDQuNDg4IDMyNS4wMjEgOTEuODM2TDI5Ny42OTkgMTEuNjI1QzI5Mi40NTEgLTMuOTg0IDI3OC45OTIgLTMuODUyIDI3NC4wMTEgMTEuODk1TDI0OC40MzkgOTIuNjQ1QzIwMy40ODYgMTA2LjIzOCAxNjguNDk0IDE0MS43NyAxNTUuODQxIDE4Ny4xMjVMNzUuNjI2IDIxNC4zMTJDNjAuMDEzIDIxOS41NTkgNjAuMTQ4IDIzMy4wMTYgNzUuODk0IDIzNy45OTZMMTU2LjY0OCAyNjMuNTdDMTYwLjA5MyAyNzQuOTYxIDE2NC45NzIgMjg1LjY5OSAxNzEuMDM5IDI5NS42MTNMOS4zNTkgNDU3LjI1OEMtMy4xMiA0NjkuNzM0IC0zLjEyIDQ5MC4xNTIgOS4zNTkgNTAyLjYzM0MyMS44NTUgNTE1LjEyNSA0Mi4xMTcgNTE1LjEyNSA1NC42MDkgNTAyLjYyMUwyMTYuMzMgMzQwLjgzNkMyMjcuMDIxIDM0Ny40MDYgMjM4LjU5NSAzNTIuNjk1IDI1MC45OTYgMzU2LjE2NEwyNzguMzE4IDQzNi4zNzVDMjgzLjU2OCA0NTEuOTg0IDI5Ny4wMjcgNDUxLjg1MiAzMDIuMDA1IDQzNi4xMDVMMzI3LjU3OCAzNTUuMzU1QzM3Mi41MzEgMzQxLjc2MiA0MDcuNTI1IDMwNi4yMyA0MjAuMTc1IDI2MS4wMTJMNTAwLjI1NyAyMzMuNjg4QzUxNi4wMDMgMjI4LjQ0MSA1MTUuODY5IDIxNC45ODQgNTAwLjEyMyAyMTAuMDA0Wk0yODggMjU2QzI3MC4zNzUgMjU2IDI1NiAyNDEuNjI1IDI1NiAyMjRTMjcwLjM3NSAxOTIgMjg4IDE5MlMzMjAgMjA2LjM3NSAzMjAgMjI0UzMwNS42MjUgMjU2IDI4OCAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Mace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M500.123 210.004L419.369 184.43C405.775 139.48 370.244 104.488 325.021 91.836L297.699 11.625C292.451 -3.984 278.992 -3.852 274.011 11.895L248.439 92.645C203.486 106.238 168.494 141.77 155.841 187.125L75.626 214.312C60.013 219.559 60.148 233.016 75.894 237.996L156.648 263.57C160.093 274.961 164.972 285.699 171.039 295.613L9.359 457.258C-3.12 469.734 -3.12 490.152 9.359 502.633C21.855 515.125 42.117 515.125 54.609 502.621L216.33 340.836C227.021 347.406 238.595 352.695 250.996 356.164L278.318 436.375C283.568 451.984 297.027 451.852 302.005 436.105L327.578 355.355C372.531 341.762 407.525 306.23 420.175 261.012L500.257 233.688C516.003 228.441 515.869 214.984 500.123 210.004ZM288 256C270.375 256 256 241.625 256 224S270.375 192 288 192S320 206.375 320 224S305.625 256 288 256Z" />
        </Icon>
    </>
}