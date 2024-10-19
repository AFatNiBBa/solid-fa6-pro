
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-ruler` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-ruler?s=duotone pen-ruler}
 * @preview ![pen-ruler](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEzOC4yNDYgMTI3LjA1NUMxMzYuOTY1IDEyOC4zMzYgMTM0LjQzNCAxMjkuMzY4IDEzMi42MjEgMTI5LjM2OEMxMzAuODA5IDEyOS4zNjggMTI4LjMwOSAxMjguMzM2IDEyNy4wMjggMTI3LjA1NUwxMTUuODA5IDExNS44MzdDMTEyLjcxNiAxMTIuNzQzIDExMi43MTYgMTA3LjcxMiAxMTUuODA5IDEwNC42MzRMMTc3LjQ5NSA0Mi45NDhMMTQzLjg3MSA5LjMwOEMxMzEuNDY1IC0zLjA4MiAxMTEuMzcyIC0zLjA4MiA5OC45OTcgOS4zMDhMOS4yODEgOTkuMDA5Qy0zLjA5NCAxMTEuMzk5IC0zLjA5NCAxMzEuNDc3IDkuMjgxIDE0My44NjdMMTA5LjQ2NiAyNDQuMDUyTDI0NC4wMjQgMTA5LjQ5M0wxOTkuOTAxIDY1LjM2OUwxMzguMjQ2IDEyNy4wNTVaTTQ5Ny45MjMgMTI3LjI0M0M1MTYuNjczIDEwOC40OTMgNTE2LjY3MyA3OC4wNzIgNDk3LjkyMyA1OS4zMjNMNDUyLjY3NSAxNC4wNzRDNDMzLjg5NCAtNC42OTEgNDAzLjQ4OSAtNC42OTEgMzg0LjcwOCAxNC4wNzRMMzM4LjcwOSA2MC4wNzNMNDUxLjg5MyAxNzMuMjczTDQ5Ny45MjMgMTI3LjI0M1pNNDY5LjA0OSAzMzQuNTAzTDQwNy4zNjMgMzk2LjE4OUM0MDQuMjcgMzk5LjI4MyAzOTkuMjcgMzk5LjI4MyAzOTYuMTc2IDM5Ni4xODlMMzg0Ljk1OCAzODQuOTdDMzgxLjg2NCAzODEuODc3IDM4MS44NjQgMzc2Ljg0NiAzODQuOTU4IDM3My43NjhMNDQ2LjY0NCAzMTIuMDgyTDQwMi40ODkgMjY3Ljk0MkwyNjcuOTMgNDAyLjUwMUwzNjguMTE1IDUwMi43MDJDMzgwLjUyIDUxNS4wOTIgNDAwLjYxNCA1MTUuMDkyIDQxMi45ODggNTAyLjcwMkw1MDIuNzA1IDQxMy4wMDFDNTE1LjA3OSA0MDAuNjExIDUxNS4wNzkgMzgwLjUzMyA1MDIuNzA1IDM2OC4xNDNMNDY5LjA0OSAzMzQuNTAzWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMzguNzMxIDYwLjA4TDI2LjI2MSAzNzIuNTJDMjEuNjA1IDM3Ny4xNzYgMTguNDk3IDM4My4xNTIgMTcuMzY0IDM4OS42MzhMMC4zMjYgNDg3LjEwOEMtMi4yMDcgNTAxLjYgMTAuNDExIDUxNC4yMTMgMjQuOTAzIDUxMS42NzJMMTIyLjQzIDQ5NC41NzFDMTI4LjkwOCA0OTMuNDM2IDEzNC44ODEgNDkwLjMzMSAxMzkuNTMxIDQ4NS42ODFMNDUxLjkxNSAxNzMuMjhMMzM4LjczMSA2MC4wOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function PenRuler(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M138.246 127.055C136.965 128.336 134.434 129.368 132.621 129.368C130.809 129.368 128.309 128.336 127.028 127.055L115.809 115.837C112.716 112.743 112.716 107.712 115.809 104.634L177.495 42.948L143.871 9.308C131.465 -3.082 111.372 -3.082 98.997 9.308L9.281 99.009C-3.094 111.399 -3.094 131.477 9.281 143.867L109.466 244.052L244.024 109.493L199.901 65.369L138.246 127.055ZM497.923 127.243C516.673 108.493 516.673 78.072 497.923 59.323L452.675 14.074C433.894 -4.691 403.489 -4.691 384.708 14.074L338.709 60.073L451.893 173.273L497.923 127.243ZM469.049 334.503L407.363 396.189C404.27 399.283 399.27 399.283 396.176 396.189L384.958 384.97C381.864 381.877 381.864 376.846 384.958 373.768L446.644 312.082L402.489 267.942L267.93 402.501L368.115 502.702C380.52 515.092 400.614 515.092 412.988 502.702L502.705 413.001C515.079 400.611 515.079 380.533 502.705 368.143L469.049 334.503Z" />
            <path d="M338.731 60.08L26.261 372.52C21.605 377.176 18.497 383.152 17.364 389.638L0.326 487.108C-2.207 501.6 10.411 514.213 24.903 511.672L122.43 494.571C128.908 493.436 134.881 490.331 139.531 485.681L451.915 173.28L338.731 60.08Z" />
        </Icon>
    </>
}