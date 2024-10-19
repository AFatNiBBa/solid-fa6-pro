
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flask` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=regular flask}
 * @preview ![flask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzcuMjMyIDQwMy41TDMxOS45OTIgMjE1VjQ4SDMyNy45OUMzNDEuMjQgNDggMzUxLjk4OCAzNy4yNSAzNTEuOTg4IDI0UzM0MS4yNCAwIDMyNy45OSAwSDEyMC4wMUMxMDYuNzYgMCA5Ni4wMTIgMTAuNzUgOTYuMDEyIDI0UzEwNi43NiA0OCAxMjAuMDEgNDhIMTI4LjAwOFYyMTVMMTAuNzY3IDQwMy41Qy0xOC40NzkgNDUwLjYyNSAxNS4yNjcgNTEyIDcwLjg4OSA1MTJIMzc3LjExMUM0MzIuNzMyIDUxMiA0NjYuNDc4IDQ1MC41IDQzNy4yMzIgNDAzLjVaTTExOS4yMjggMzIwTDE3Ni4wMDggMjI4LjcwOVY0OEgyNzEuOTkyVjIyOC43MDlMMzI4Ljc3MSAzMjBIMTE5LjIyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Flask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M437.232 403.5L319.992 215V48H327.99C341.24 48 351.988 37.25 351.988 24S341.24 0 327.99 0H120.01C106.76 0 96.012 10.75 96.012 24S106.76 48 120.01 48H128.008V215L10.767 403.5C-18.479 450.625 15.267 512 70.889 512H377.111C432.732 512 466.478 450.5 437.232 403.5ZM119.228 320L176.008 228.709V48H271.992V228.709L328.771 320H119.228Z" />
        </Icon>
    </>
}