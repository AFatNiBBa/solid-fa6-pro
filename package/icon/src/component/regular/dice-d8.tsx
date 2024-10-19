
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-d8` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=regular dice-d8}
 * @preview ![dice-d8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU2QzUxMiAyNDcuMzc1IDUwOC43MTggMjM4Ljc1IDUwMi4xNTUgMjMyLjEyNUwyNzkuODc4IDkuODc1QzI3My4yNTIgMy4yNSAyNjQuNjI2IDAgMjU2IDBTMjM4Ljc0OCAzLjI1IDIzMi4xMjIgOS44NzVMOS44NDUgMjMyLjEyNUMzLjI4MiAyMzguNzUgMCAyNDcuNDA2IDAgMjU2LjA0N0MwIDI2NC42ODggMy4yODIgMjczLjMxMiA5Ljg0NSAyNzkuODc1TDIzMi4xMjIgNTAyLjEyNUMyMzguNzQ4IDUwOC43NSAyNDcuMzc0IDUxMiAyNTYgNTEyUzI3My4yNTIgNTA4Ljc1IDI3OS44NzggNTAyLjEyNUw1MDIuMTU1IDI3OS44NzVDNTA4LjcxOCAyNzMuMjUgNTEyIDI2NC42MjUgNTEyIDI1NlpNMjgwLjAwMyA3Ny44NzVMNDQ2LjM5OCAyNDQuMjVMMjgwLjAwMyAzMTUuNjI1Vjc3Ljg3NVpNMjMxLjk5NyAzMTUuNjI1TDY1LjYwMiAyNDQuMjVMMjMxLjk5NyA3Ny44NzVWMzE1LjYyNVpNMjMxLjk5NyAzNjcuODc1VjQzNC4xMjVMMTE1Ljk4MyAzMTguMTI1TDIzMS45OTcgMzY3Ljg3NVpNMjgwLjAwMyAzNjcuODc1TDM5Ni4wMTcgMzE4LjEyNUwyODAuMDAzIDQzNC4xMjVWMzY3Ljg3NVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceD8(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 256C512 247.375 508.718 238.75 502.155 232.125L279.878 9.875C273.252 3.25 264.626 0 256 0S238.748 3.25 232.122 9.875L9.845 232.125C3.282 238.75 0 247.406 0 256.047C0 264.688 3.282 273.312 9.845 279.875L232.122 502.125C238.748 508.75 247.374 512 256 512S273.252 508.75 279.878 502.125L502.155 279.875C508.718 273.25 512 264.625 512 256ZM280.003 77.875L446.398 244.25L280.003 315.625V77.875ZM231.997 315.625L65.602 244.25L231.997 77.875V315.625ZM231.997 367.875V434.125L115.983 318.125L231.997 367.875ZM280.003 367.875L396.017 318.125L280.003 434.125V367.875Z " />
        </Icon>
    </>
}