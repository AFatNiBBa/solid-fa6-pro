
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=solid angle-up}
 * @preview ![angle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzMuMDMgMzM5LjQ5QzM2NS4xNzEgMzQ3LjgwMiAzNTQuNTkzIDM1MS45ODkgMzQzLjk5OSAzNTEuOTg5QzMzNC4xMjQgMzUxLjk4OSAzMjQuMjE4IDM0OC4zNjQgMzE2LjQ4NCAzNDEuMDIxTDE5MiAyMjMuMDg5TDY3LjUxNiAzNDEuMDIxQzUxLjQ2OSAzNTYuMjM5IDI2LjE1NyAzNTUuNTUxIDEwLjk3IDMzOS40OUMtNC4yMzMgMzIzLjQ1OSAtMy41NDYgMjk4LjE0OCAxMi40ODUgMjgyLjk2MUwxNjQuNDg0IDEzOC45NjhDMTc5LjkyMiAxMjQuMzQ0IDIwNC4wNzggMTI0LjM0NCAyMTkuNTE2IDEzOC45NjhMMzcxLjUxNSAyODIuOTYxQzM4Ny41NDYgMjk4LjE0OCAzODguMjMzIDMyMy40NTkgMzczLjAzIDMzOS40OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M373.03 339.49C365.171 347.802 354.593 351.989 343.999 351.989C334.124 351.989 324.218 348.364 316.484 341.021L192 223.089L67.516 341.021C51.469 356.239 26.157 355.551 10.97 339.49C-4.233 323.459 -3.546 298.148 12.485 282.961L164.484 138.968C179.922 124.344 204.078 124.344 219.516 138.968L371.515 282.961C387.546 298.148 388.233 323.459 373.03 339.49Z" />
        </Icon>
    </>
}