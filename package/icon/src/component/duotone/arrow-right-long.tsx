
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=duotone arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMi43NSAyODhIMzJDMTQuMzEyIDI4OCAwIDI3My42ODggMCAyNTZTMTQuMzEyIDIyNCAzMiAyMjRINDAyLjc1TDQzNC43NSAyNTZMNDAyLjc1IDI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzIwIDM4NEMzMjAgMzc1LjgxMiAzMjMuMTI1IDM2Ny42MjUgMzI5LjM3NSAzNjEuMzc1TDQzNC43NSAyNTZMMzI5LjM3NSAxNTAuNjI1QzMxNi44NzUgMTM4LjEyNSAzMTYuODc1IDExNy44NzUgMzI5LjM3NSAxMDUuMzc1UzM2Mi4xMjUgOTIuODc1IDM3NC42MjUgMTA1LjM3NUw1MDIuNjI1IDIzMy4zNzVDNTE1LjEyNSAyNDUuODc1IDUxNS4xMjUgMjY2LjEyNSA1MDIuNjI1IDI3OC42MjVMMzc0LjYyNSA0MDYuNjI1QzM2Mi4xMjUgNDE5LjEyNSAzNDEuODc1IDQxOS4xMjUgMzI5LjM3NSA0MDYuNjI1QzMyMy4xMjUgNDAwLjM3NSAzMjAgMzkyLjE4OCAzMjAgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowRightLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M402.75 288H32C14.312 288 0 273.688 0 256S14.312 224 32 224H402.75L434.75 256L402.75 288Z" />
            <path d="M320 384C320 375.812 323.125 367.625 329.375 361.375L434.75 256L329.375 150.625C316.875 138.125 316.875 117.875 329.375 105.375S362.125 92.875 374.625 105.375L502.625 233.375C515.125 245.875 515.125 266.125 502.625 278.625L374.625 406.625C362.125 419.125 341.875 419.125 329.375 406.625C323.125 400.375 320 392.188 320 384Z" />
        </Icon>
    </>
}