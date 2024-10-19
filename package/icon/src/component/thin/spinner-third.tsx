
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spinner-third` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=thin spinner-third}
 * @preview ![spinner-third](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjU2QzQ5NiAyOTcuNTYyIDQ4NS4wMTYgMzM4LjcxOSA0NjQuMjM0IDM3NUM0NjIuNzY2IDM3Ny41OTQgNDYwLjA2MiAzNzkuMDMxIDQ1Ny4yOTcgMzc5LjAzMUM0NTUuOTM3IDM3OS4wMzEgNDU0LjU3OCAzNzguNjg4IDQ1My4zMjggMzc3Ljk2OUM0NDkuNDg0IDM3NS43ODEgNDQ4LjE1NiAzNzAuODc1IDQ1MC4zNTkgMzY3LjA2M0M0NjkuNzUgMzMzLjE4OCA0ODAgMjk0Ljc4MSA0ODAgMjU2QzQ4MCAxMzIuNSAzNzkuNTE2IDMyIDI1NiAzMkMyNTEuNTc4IDMyIDI0OCAyOC40MDYgMjQ4IDI0UzI1MS41NzggMTYgMjU2IDE2QzM4OC4zNDQgMTYgNDk2IDEyMy42NTYgNDk2IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SpinnerThird(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 256C496 297.562 485.016 338.719 464.234 375C462.766 377.594 460.062 379.031 457.297 379.031C455.937 379.031 454.578 378.688 453.328 377.969C449.484 375.781 448.156 370.875 450.359 367.063C469.75 333.188 480 294.781 480 256C480 132.5 379.516 32 256 32C251.578 32 248 28.406 248 24S251.578 16 256 16C388.344 16 496 123.656 496 256Z" />
        </Icon>
    </>
}